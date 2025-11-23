"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, CheckCircle, AlertCircle } from "lucide-react";
import { Mascot } from "../Mascot";
import { MultipleChoice } from "./question-types/MultipleChoice";
import { ParsonsProblem } from "./question-types/ParsonsProblem";
import { BugFix } from "./question-types/BugFix";
import { InteractiveLessonView } from "./InteractiveLessonView";
import { MilestoneModal } from "../sharing/MilestoneModal";
import { CodeInput } from "./question-types/CodeInput";

export type QuestionType = "multiple-choice" | "parsons" | "bug-fix" | "code-input";

export interface Question {
  id: number;
  type: QuestionType;
  prompt: string;
  data: any; // Flexible data based on type
  correctAnswer: any;
}

import { Lesson } from "@/lib/schema";

interface LessonModeProps {
  lesson: Lesson;
  onComplete: (xp: number) => void;
  onExit: () => void;
}

export function LessonMode({ lesson, onComplete, onExit }: LessonModeProps) {
  // Determine initial mode based on lesson type
  const [mode, setMode] = useState<"learning" | "quiz">(
    lesson.type === "quiz" || lesson.type === "challenge" ? "quiz" : "learning"
  );
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [xp, setXp] = useState(0);
  const [showMilestone, setShowMilestone] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const questions = lesson.content.questions || [];

  if (mode === "learning") {
    // For theory/visualizer lessons, we use the InteractiveLessonView
    // If it's just theory, we might not have visualizationSteps, handled by the view
    return (
      <InteractiveLessonView
        title={lesson.title}
        syntaxData={lesson.content as any} // Cast for now, schema should align
        visualizationSteps={lesson.content.visualizationSteps || []}
        onComplete={() => {
            // If there are questions, go to quiz mode
            if (questions.length > 0) {
                setMode("quiz");
            } else {
                // Otherwise finish immediately
                onComplete(lesson.xp);
            }
        }}
        onExit={onExit}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleCheck = () => {
    if (!selectedAnswer) return;

    // Simple validation logic (can be more complex)
    const isCorrect = JSON.stringify(selectedAnswer) === JSON.stringify(currentQuestion.correctAnswer);

    if (isCorrect) {
      setStatus("correct");
      setXp((prev) => prev + 10);
    } else {
      setStatus("wrong");
      setHearts((prev) => Math.max(0, prev - 1));
    }
  };

  const handleContinue = () => {
    if (status === "correct") {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setStatus("idle");
        setShowSolution(false);
      } else {
        // Show Milestone Modal instead of immediately exiting
        setShowMilestone(true);
      }
    } else {
      // Allow moving to next question even if wrong
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setStatus("idle");
        setShowSolution(false);
      } else {
        // If last question, show milestone
        setShowMilestone(true);
      }
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setSelectedAnswer(currentQuestion.correctAnswer);
  };

  if (hearts === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center">
        <div className="bg-white p-8 rounded-3xl text-center max-w-sm">
          <Mascot state="error" className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Out of Hearts!</h2>
          <p className="text-slate-500 mb-6">You need more practice. Try again?</p>
          <button onClick={onExit} className="w-full py-3 bg-brand-red text-white rounded-xl font-bold">
            Quit Lesson
          </button>
        </div>
      </div>
    );
  }

  const handleMilestoneClose = () => {
    setShowMilestone(false);
    onComplete(xp);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      <MilestoneModal 
        isOpen={showMilestone} 
        onClose={handleMilestoneClose}
        xp={xp}
        showContinue={true}
        onContinue={handleMilestoneClose}
      />
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full">
          <X className="text-slate-400" />
        </button>
        <div className="flex-1 mx-4 h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-green"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center space-x-1 text-brand-red font-bold">
          <Heart fill="currentColor" />
          <span>{hearts}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center max-w-2xl mx-auto w-full">
        <div className="w-full mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">{currentQuestion.prompt}</h2>
          
          {currentQuestion.type === "multiple-choice" && (
            <MultipleChoice
              options={currentQuestion.data.options}
              selected={selectedAnswer}
              onSelect={setSelectedAnswer}
              disabled={status !== "idle"}
            />
          )}
          {currentQuestion.type === "parsons" && (
            <ParsonsProblem
              blocks={currentQuestion.data.blocks}
              solution={selectedAnswer}
              onUpdate={setSelectedAnswer}
              disabled={status !== "idle"}
            />
          )}
          {currentQuestion.type === "bug-fix" && (
            <BugFix
              code={currentQuestion.data.code}
              selectedLine={selectedAnswer}
              onSelect={setSelectedAnswer}
              disabled={status !== "idle"}
            />
          )}
          {currentQuestion.type === "code-input" && (
            <CodeInput
              code={selectedAnswer || ""}
              onChange={setSelectedAnswer}
              placeholder={currentQuestion.data.placeholder}
              disabled={status !== "idle"}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className={`p-4 border-t-2 ${
        status === "correct" ? "bg-green-100 border-green-200" : 
        status === "wrong" ? "bg-red-100 border-red-200" : 
        "bg-white border-slate-100"
      }`}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {status === "correct" && (
              <div className="flex items-center space-x-2 text-green-700 font-bold text-xl">
                <CheckCircle className="w-8 h-8" />
                <span>Nicely Done!</span>
              </div>
            )}
            {status === "wrong" && (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-red-700 font-bold text-lg">
                  <AlertCircle className="w-6 h-6" />
                  <span>Incorrect!</span>
                </div>
                {!showSolution && (
                  <button
                    onClick={handleShowSolution}
                    className="flex items-center space-x-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-xl font-medium hover:bg-brand-orange/20 transition-colors"
                  >
                    <span className="text-xl">🐼</span>
                    <span>Show Solution</span>
                  </button>
                )}
                {showSolution && (
                  <div className="text-green-700 font-medium">
                    Answer: <span className="font-bold">{typeof currentQuestion.correctAnswer === 'string' ? currentQuestion.correctAnswer : JSON.stringify(currentQuestion.correctAnswer)}</span>
                  </div>
                )}
              </div>
            )}
            {status === "idle" && (
              <Mascot state="idle" className="w-16 h-16 hidden sm:block" />
            )}
            {/* Celebration Mascot and Confetti */}
            {status === "correct" && (
              <>
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1.5, rotate: 0 }}
                  className="fixed bottom-24 right-8 z-50 pointer-events-none"
                >
                  <Mascot state="success" className="w-32 h-32 drop-shadow-2xl" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 2, 2.5, 3] }}
                  transition={{ duration: 1.5 }}
                  className="fixed inset-0 pointer-events-none flex items-center justify-center"
                >
                  <div className="text-9xl">🎉</div>
                </motion.div>
              </>
            )}
          </div>

          <button
            onClick={status === "idle" ? handleCheck : handleContinue}
            disabled={!selectedAnswer && status === "idle"}
            className={`px-8 py-3 rounded-2xl font-bold text-lg transition-all ${
              status === "idle"
                ? "bg-brand-green text-white border-b-4 border-green-700 active:border-b-0 active:translate-y-1 disabled:opacity-50"
                : status === "correct"
                ? "bg-green-600 text-white border-b-4 border-green-800"
                : "bg-red-600 text-white border-b-4 border-red-800"
            }`}
          >
            {status === "idle" ? "CHECK" : "CONTINUE"}
          </button>
        </div>
      </div>
    </div>
  );
}
