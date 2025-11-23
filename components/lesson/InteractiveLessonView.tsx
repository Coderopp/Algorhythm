"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SyntaxCard } from "./visualizer/SyntaxCard";
import { AlgorithmVisualizer, VisualizationStep } from "./visualizer/AlgorithmVisualizer";
import { X } from "lucide-react";

interface InteractiveLessonViewProps {
  title: string;
  syntaxData: {
    title: string;
    explanation: string;
    code?: string;
  };
  visualizationSteps: VisualizationStep[];
  onComplete: () => void;
  onExit: () => void;
}

export function InteractiveLessonView({ 
  title, 
  syntaxData, 
  visualizationSteps, 
  onComplete,
  onExit 
}: InteractiveLessonViewProps) {
  const [step, setStep] = useState<"syntax" | "visualizer">("syntax");
  const hasVisualization = visualizationSteps && visualizationSteps.length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <button onClick={onExit} className="p-2 hover:bg-slate-100 rounded-full">
          <X className="text-slate-400" />
        </button>
        <h1 className="font-bold text-slate-700">{title}</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {step === "syntax" ? (
            <motion.div
              key="syntax"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <SyntaxCard
                title={syntaxData.title}
                explanation={syntaxData.explanation}
                code={syntaxData.code}
                onNext={hasVisualization ? () => setStep("visualizer") : onComplete}
              />
            </motion.div>
          ) : (
            <motion.div
              key="visualizer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Visualize It</h2>
                <p className="text-slate-600">Watch how the code executes step-by-step.</p>
              </div>
              {hasVisualization && (
                <AlgorithmVisualizer
                  steps={visualizationSteps}
                  onComplete={onComplete}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
