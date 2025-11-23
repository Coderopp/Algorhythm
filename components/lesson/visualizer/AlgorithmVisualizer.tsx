"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, RotateCcw } from "lucide-react";

export interface VisualizationStep {
  step: number;
  array: number[];
  pointers: { [key: string]: number }; // e.g., { i: 0, j: 1 }
  message: string;
  highlights: number[]; // Indices to highlight
}

interface AlgorithmVisualizerProps {
  steps: VisualizationStep[];
  onComplete: () => void;
}

export function AlgorithmVisualizer({ steps, onComplete }: AlgorithmVisualizerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    
    let step = currentStep;
    const interval = setInterval(() => {
      if (step < steps.length - 1) {
        step++;
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 1500); // Slow enough to follow
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col h-full justify-between py-4">
      {/* Visualization Area */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-full bg-slate-50 rounded-3xl border-2 border-slate-200 flex items-center justify-center relative overflow-hidden shadow-inner aspect-square max-h-[350px]">
          <div className="flex items-end justify-center space-x-2 px-4 w-full">
            <AnimatePresence mode="popLayout">
              {stepData.array.map((value, index) => (
                <motion.div
                  key={`${index}-${value}`}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    backgroundColor: stepData.highlights.includes(index) 
                      ? "#FACC15" // Yellow-400
                      : stepData.pointers.i === index || stepData.pointers.j === index
                      ? "#22C55E" // Brand Green
                      : "#FFFFFF" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`w-14 h-14 rounded-xl border-b-4 flex items-center justify-center text-xl font-bold shadow-sm relative ${
                    stepData.highlights.includes(index) 
                      ? "border-yellow-600 text-yellow-900" 
                      : stepData.pointers.i === index || stepData.pointers.j === index
                      ? "border-green-700 text-white"
                      : "bg-white border-slate-300 text-slate-700"
                  }`}
                >
                  {value}
                  
                  {/* Pointers */}
                  {stepData.pointers.i === index && (
                    <motion.div 
                      layoutId="pointer-i"
                      className="absolute -top-8 text-xs font-bold text-slate-500 flex flex-col items-center"
                    >
                      i
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-slate-500 mt-1" />
                    </motion.div>
                  )}
                  {stepData.pointers.j === index && (
                    <motion.div 
                      layoutId="pointer-j"
                      className="absolute -bottom-8 text-xs font-bold text-slate-500 flex flex-col items-center"
                    >
                      <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-slate-500 mb-1" />
                      j
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Narration & Controls Container */}
      <div className="mt-6 space-y-6">
        {/* Narration */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2 min-h-[80px]"
        >
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider text-xs opacity-50">Step {currentStep + 1}</h3>
          <p className="text-slate-800 font-medium text-lg leading-tight px-4">{stepData.message}</p>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-between space-x-4 bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0 || isPlaying}
            className="p-4 rounded-xl hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handlePlay}
            disabled={isPlaying || currentStep === steps.length - 1}
            className="flex-1 py-4 bg-brand-green text-white rounded-xl shadow-md hover:bg-green-600 disabled:opacity-50 transition-all active:scale-95 flex items-center justify-center"
          >
            {currentStep === steps.length - 1 ? <RotateCcw size={24} /> : <Play fill="currentColor" size={24} />}
          </button>

          <button
            onClick={handleNext}
            disabled={isPlaying}
            className={`p-4 rounded-xl transition-colors disabled:opacity-30 ${
              currentStep === steps.length - 1 
                ? "bg-brand-orange text-white hover:bg-orange-600 shadow-md px-6 font-bold" 
                : "hover:bg-slate-100"
            }`}
          >
            {currentStep === steps.length - 1 ? "Finish" : <ChevronRight size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}
