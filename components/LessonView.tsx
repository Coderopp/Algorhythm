"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart, X, Check, ArrowRight, RotateCcw, Zap } from "lucide-react";
import { LessonQuestion } from "@/lib/types";
import QuizChoice from "./questions/QuizChoice";
import ParsonsQuestion from "./questions/ParsonsQuestion";
import BugSpotter from "./questions/BugSpotter";
import confetti from "canvas-confetti";
import { useGameState } from "@/hooks/useGameState";
import { useSound } from "@/hooks/useSound";
import { lessonData } from "@/lib/data";

interface LessonViewProps {
  onExit: () => void;
}

export default function LessonView({ onExit }: LessonViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [shake, setShake] = useState(false);

  const { state, decrementHearts, completeLesson } = useGameState();
  const playSound = useSound();

  const currentQuestion = lessonData[currentIndex];
  const progress = (currentIndex / lessonData.length) * 100;

  // Play click sound on interactions
  useEffect(() => {
    const handleClick = () => playSound("click");
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [playSound]);

  const handleCheck = () => {
    if (!selectedAnswer) return;

    let correct = false;

    if (currentQuestion.type === "quiz") {
      correct = selectedAnswer === currentQuestion.correct;
    } else if (currentQuestion.type === "parsons") {
      correct = JSON.stringify(selectedAnswer) === JSON.stringify(currentQuestion.correctOrder);
    } else if (currentQuestion.type === "bug") {
      correct = selectedAnswer === currentQuestion.correctLineIndex;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      playSound("success");
      if (currentIndex === lessonData.length - 1) {
        playSound("complete");
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        completeLesson(1); // Assuming lesson ID 1
      }
    } else {
      playSound("error");
      decrementHearts();
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleContinue = () => {
    if (currentIndex < lessonData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsSubmitted(false);
      setIsCorrect(false);
      setSelectedAnswer(null);
    } else {
      onExit();
    }
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setIsCorrect(false);
    setSelectedAnswer(null);
  };

  if (state.hearts === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 text-center">
        <Heart className="w-24 h-24 text-gray-200" />
        <h1 className="text-3xl font-bold text-gray-800">Out of hearts!</h1>
        <p className="text-gray-500">You made too many mistakes. Try again later.</p>
        <button
          onClick={() => window.location.reload()}
          className="w-full max-w-xs p-4 font-bold text-white bg-primary rounded-2xl shadow-[0_4px_0_0_#46a302] active:shadow-none active:translate-y-[4px] transition-all"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (currentIndex >= lessonData.length && isSubmitted && isCorrect) {
     return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 text-center">
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
           <Check className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Lesson Complete!</h1>
        <p className="text-gray-500">You've mastered the basics of Data Structures.</p>
        <div className="flex items-center justify-center space-x-2 text-orange-500 font-bold text-xl">
          <Zap className="w-6 h-6 fill-current" />
          <span>Streak: {state.streak} days</span>
        </div>
        <button
          onClick={onExit}
          className="w-full max-w-xs p-4 font-bold text-white bg-primary rounded-2xl shadow-[0_4px_0_0_#46a302] active:shadow-none active:translate-y-[4px] transition-all"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 pt-6">
        <button onClick={onExit} className="text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex items-center text-red-500 font-bold">
          <Heart className="w-6 h-6 fill-current mr-2" />
          <AnimatePresence mode="wait">
             <motion.span
               key={state.hearts}
               initial={{ scale: 1.5, color: "#ef4444" }}
               animate={{ scale: 1, color: "#ef4444" }}
               className="text-xl"
             >
               {state.hearts}
             </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto p-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: shake ? [0, -10, 10, -10, 10, 0] : 0 
            }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, x: { duration: 0.4 } }}
            className="h-full"
          >
            {currentQuestion.type === "quiz" && (
              <QuizChoice
                data={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelect={setSelectedAnswer}
                isSubmitted={isSubmitted}
              />
            )}
            {currentQuestion.type === "parsons" && (
              <ParsonsQuestion
                data={currentQuestion}
                onUpdateOrder={setSelectedAnswer}
                isSubmitted={isSubmitted}
              />
            )}
            {currentQuestion.type === "bug" && (
              <BugSpotter
                data={currentQuestion}
                selectedLine={selectedAnswer}
                onSelect={setSelectedAnswer}
                isSubmitted={isSubmitted}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 p-6 border-t-2 transition-colors duration-300 max-w-md mx-auto",
        isSubmitted 
          ? isCorrect 
            ? "bg-[#d7ffb8] border-transparent" 
            : "bg-[#ffdfe0] border-transparent"
          : "bg-white border-gray-200"
      )}>
        <div className="flex items-center justify-between mb-4">
          {isSubmitted && (
            <div className="flex items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                isCorrect ? "bg-white text-green-500" : "bg-white text-red-500"
              )}>
                {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </div>
              <div>
                <h3 className={cn(
                  "font-bold text-lg",
                  isCorrect ? "text-green-700" : "text-red-700"
                )}>
                  {isCorrect ? "Nicely done!" : "Correct solution:"}
                </h3>
                {!isCorrect && (
                  <p className="text-red-600 text-sm">
                    {currentQuestion.type === "quiz" && currentQuestion.correct}
                    {currentQuestion.type === "parsons" && "Check the order"}
                    {currentQuestion.type === "bug" && `Line ${currentQuestion.correctLineIndex + 1}`}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleCheck}
            disabled={!selectedAnswer}
            className="w-full p-4 font-bold text-white bg-primary rounded-2xl shadow-[0_4px_0_0_#46a302] active:shadow-none active:translate-y-[4px] disabled:bg-gray-300 disabled:shadow-none disabled:text-gray-400 transition-all uppercase tracking-wide"
          >
            Check
          </button>
        ) : (
          <button
            onClick={isCorrect ? handleContinue : handleRetry}
            className={cn(
              "w-full p-4 font-bold text-white rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wide flex items-center justify-center",
              isCorrect ? "bg-primary shadow-[0_4px_0_0_#46a302]" : "bg-secondary shadow-[0_4px_0_0_#d63636]"
            )}
          >
            {isCorrect ? (
              <>Continue <ArrowRight className="ml-2 w-5 h-5" /></>
            ) : (
              <>Got it <RotateCcw className="ml-2 w-5 h-5" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
