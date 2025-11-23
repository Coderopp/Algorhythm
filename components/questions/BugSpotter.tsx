"use client";

import { cn } from "@/lib/utils";
import { BugQuestion } from "@/lib/types";
import { Bug } from "lucide-react";

interface BugSpotterProps {
  data: BugQuestion;
  selectedLine: number | null;
  onSelect: (lineIndex: number) => void;
  isSubmitted: boolean;
}

export default function BugSpotter({
  data,
  selectedLine,
  onSelect,
  isSubmitted,
}: BugSpotterProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">{data.question}</h2>
      
      <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-800">
        <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="ml-4 text-xs text-gray-400 font-mono">bug_hunt.py</div>
        </div>
        
        <div className="p-4 space-y-1 font-mono text-sm">
          {data.codeLines.map((line, index) => {
            const isSelected = selectedLine === index;
            const isCorrect = index === data.correctLineIndex;
            
            let bgClass = "hover:bg-white/10";
            let borderClass = "border-transparent";
            
            if (isSelected && !isSubmitted) {
              bgClass = "bg-blue-500/20";
              borderClass = "border-blue-500";
            } else if (isSubmitted) {
              if (isCorrect) {
                bgClass = "bg-green-500/20";
                borderClass = "border-green-500";
              } else if (isSelected && !isCorrect) {
                bgClass = "bg-red-500/20";
                borderClass = "border-red-500";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && onSelect(index)}
                disabled={isSubmitted}
                className={cn(
                  "w-full flex items-center text-left px-2 py-1.5 rounded border transition-all",
                  bgClass,
                  borderClass
                )}
              >
                <span className="w-6 text-gray-500 select-none text-right mr-4">
                  {index + 1}
                </span>
                <span className="text-gray-300 flex-1">
                  {line}
                </span>
                {isSubmitted && isCorrect && (
                  <Bug className="w-4 h-4 text-green-500 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="flex items-center justify-center text-sm text-gray-500">
        <Bug className="w-4 h-4 mr-2" />
        Tap the line containing the bug
      </div>
    </div>
  );
}
