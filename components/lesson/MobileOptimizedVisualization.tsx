/**
 * Example Mobile-Optimized Lesson Component
 * Demonstrates RSC + Client Component pattern with scraped data
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VisualizationStep {
  line: number;
  state: {
    array: string;
    pointers: Record<string, number>;
  };
  highlight: number[];
  explanation: string;
  mobileView: {
    compactArrayView: boolean;
    largeTouch: boolean;
    swipeEnabled: boolean;
  };
}

interface VisualizationProps {
  code: string;
  steps: VisualizationStep[];
  language: string;
  mobileOptimized?: boolean;
  controls?: {
    playPause: boolean;
    stepForward: boolean;
    stepBackward: boolean;
    reset: boolean;
    speed: number[];
  };
}

export function MobileOptimizedVisualization({
  code,
  steps,
  language,
  mobileOptimized = true,
  controls = {
    playPause: true,
    stepForward: true,
    stepBackward: true,
    reset: true,
    speed: [0.5, 1, 1.5, 2]
  }
}: VisualizationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const step = steps[currentStep];
  const arrayValues = step.state.array.split(',').map(v => v.trim());
  const codeLines = code.split('\n');

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, steps.length]);

  // Touch gesture handlers (for swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    (e.currentTarget as any).startX = touch.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const startX = (e.currentTarget as any).startX;
    const diffX = touch.clientX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentStep > 0) {
        // Swipe right - previous step
        setCurrentStep(currentStep - 1);
      } else if (diffX < 0 && currentStep < steps.length - 1) {
        // Swipe left - next step
        setCurrentStep(currentStep + 1);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Code Panel - Scrollable with highlighting */}
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-white font-mono text-sm md:text-base">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className={`
                py-2 px-3 rounded transition-colors
                ${step.highlight.includes(i) 
                  ? 'bg-yellow-500/30 border-l-4 border-yellow-500' 
                  : ''
                }
              `}
              animate={{
                backgroundColor: step.highlight.includes(i) 
                  ? 'rgba(234, 179, 8, 0.3)' 
                  : 'transparent'
              }}
            >
              <span className="text-gray-500 mr-4">{i + 1}</span>
              {line}
            </motion.div>
          ))}
        </pre>
      </div>

      {/* Array Visualization - Touch-friendly */}
      <div
        className="array-container"
        onTouchStart={step.mobileView.swipeEnabled ? handleTouchStart : undefined}
        onTouchEnd={step.mobileView.swipeEnabled ? handleTouchEnd : undefined}
      >
        <div className="flex gap-2 md:gap-3 overflow-x-auto py-4 justify-center">
          <AnimatePresence mode="sync">
            {arrayValues.map((value, i) => (
              <motion.div
                key={`${i}-${value}`}
                className={`
                  ${mobileOptimized ? 'w-16 h-16 text-xl' : 'w-12 h-12 text-base'}
                  flex items-center justify-center
                  font-bold rounded-lg shadow-lg
                  ${step.highlight.includes(i) 
                    ? 'bg-yellow-400 text-gray-900 ring-4 ring-yellow-500' 
                    : value === '0' 
                      ? 'bg-gray-400 text-gray-700'
                      : 'bg-blue-500 text-white'
                  }
                `}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ delay: i * 0.05, type: 'spring' }}
                whileTap={{ scale: 0.95 }}
              >
                {value}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pointers Display */}
        {Object.keys(step.state.pointers).length > 0 && (
          <div className="flex gap-4 justify-center mt-4 text-sm md:text-base">
            {Object.entries(step.state.pointers).map(([name, pos]) => (
              <div key={name} className="flex items-center gap-2 bg-purple-100 px-3 py-2 rounded-lg">
                <span className="font-bold text-purple-700">{name}:</span>
                <span className="font-mono text-purple-900">{pos}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Explanation Panel */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg"
      >
        <p className={`${mobileOptimized ? 'text-base' : 'text-sm'} text-gray-800 dark:text-gray-100`}>
          <strong>Step {currentStep + 1} of {steps.length}:</strong> {step.explanation}
        </p>
      </motion.div>

      {/* Controls - Large Touch Targets */}
      <div className="flex flex-col gap-4">
        {/* Primary Controls */}
        <div className="flex gap-3 justify-center items-center">
          <motion.button
            onClick={() => setCurrentStep(0)}
            disabled={currentStep === 0}
            className={`
              ${mobileOptimized ? 'p-4 text-2xl' : 'p-3 text-xl'}
              bg-gray-200 dark:bg-gray-700 rounded-lg
              disabled:opacity-50 disabled:cursor-not-allowed
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition-colors
            `}
            whileTap={{ scale: 0.95 }}
          >
            ⏮
          </motion.button>

          <motion.button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`
              ${mobileOptimized ? 'p-4 text-2xl' : 'p-3 text-xl'}
              bg-gray-200 dark:bg-gray-700 rounded-lg
              disabled:opacity-50 disabled:cursor-not-allowed
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition-colors
            `}
            whileTap={{ scale: 0.95 }}
          >
            ⏪
          </motion.button>

          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`
              ${mobileOptimized ? 'p-5 text-3xl' : 'p-4 text-2xl'}
              bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg
              transition-colors
            `}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? '⏸' : '▶️'}
          </motion.button>

          <motion.button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className={`
              ${mobileOptimized ? 'p-4 text-2xl' : 'p-3 text-xl'}
              bg-gray-200 dark:bg-gray-700 rounded-lg
              disabled:opacity-50 disabled:cursor-not-allowed
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition-colors
            `}
            whileTap={{ scale: 0.95 }}
          >
            ⏩
          </motion.button>

          <motion.button
            onClick={() => setCurrentStep(steps.length - 1)}
            disabled={currentStep === steps.length - 1}
            className={`
              ${mobileOptimized ? 'p-4 text-2xl' : 'p-3 text-xl'}
              bg-gray-200 dark:bg-gray-700 rounded-lg
              disabled:opacity-50 disabled:cursor-not-allowed
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition-colors
            `}
            whileTap={{ scale: 0.95 }}
          >
            ⏭
          </motion.button>
        </div>

        {/* Speed Control */}
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Speed:</span>
          {controls.speed.map(s => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium
                transition-colors
                ${speed === s 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }
              `}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Swipe Hint */}
        {step.mobileView.swipeEnabled && (
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            👆 Swipe left/right to navigate steps
          </div>
        )}
      </div>
    </div>
  );
}

// Example usage in a lesson page:
/*
import { MobileOptimizedVisualization } from '@/components/lesson/MobileOptimizedVisualization';
import moveZeroesData from '@/Content_pipeline/algorhythm_lessons/two-pointers.json';

export default function MoveZeroesLesson() {
  const lesson = moveZeroesData.lessons.find(l => l.id === 'move-zeroes');
  
  return (
    <div>
      <h1>{lesson.title}</h1>
      <MobileOptimizedVisualization {...lesson.content.visualization} />
    </div>
  );
}
*/
