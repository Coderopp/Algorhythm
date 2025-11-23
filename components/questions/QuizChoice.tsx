"use client";

import { cn } from "@/lib/utils";
import { QuizQuestion } from "@/lib/types";

interface QuizChoiceProps {
  data: QuizQuestion;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
  isSubmitted: boolean;
}

export default function QuizChoice({
  data,
  selectedAnswer,
  onSelect,
  isSubmitted,
}: QuizChoiceProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{data.question}</h2>
      <div className="grid gap-3">
        {data.options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === data.correct;
          
          let borderClass = "border-gray-200 hover:bg-gray-50";
          let bgClass = "bg-white";
          let textClass = "text-gray-700";

          if (isSelected && !isSubmitted) {
            borderClass = "border-primary bg-green-50";
            textClass = "text-primary";
          } else if (isSubmitted) {
            if (isCorrect) {
              borderClass = "border-primary bg-green-100";
              textClass = "text-primary";
            } else if (isSelected && !isCorrect) {
              borderClass = "border-secondary bg-red-50";
              textClass = "text-secondary";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !isSubmitted && onSelect(option)}
              disabled={isSubmitted}
              className={cn(
                "w-full p-4 text-left rounded-2xl border-2 border-b-4 transition-all active:border-b-2 active:translate-y-[2px] disabled:active:translate-y-0 disabled:active:border-b-4",
                borderClass,
                bgClass
              )}
            >
              <div className="flex items-center">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 mr-4 border-2 rounded-lg font-bold text-sm",
                  isSelected || (isSubmitted && isCorrect) 
                    ? "border-current" 
                    : "border-gray-300 text-gray-400"
                )}>
                  {index + 1}
                </div>
                <span className={cn("font-bold", textClass)}>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
