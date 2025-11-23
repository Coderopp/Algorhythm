"use client";

import { motion } from "framer-motion";

interface BugFixProps {
  code: string[];
  selectedLine: number | null;
  onSelect: (lineIndex: number) => void;
  disabled?: boolean;
}

export function BugFix({ code, selectedLine, onSelect, disabled }: BugFixProps) {
  return (
    <div className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-lg font-mono text-sm sm:text-base">
      <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-slate-400 text-xs">bug_hunt.py</span>
      </div>
      <div className="p-4 space-y-1">
        {code.map((line, index) => (
          <motion.div
            key={index}
            onClick={() => !disabled && onSelect(index)}
            whileHover={!disabled ? { backgroundColor: "rgba(255, 255, 255, 0.1)" } : {}}
            className={`flex px-2 py-1 rounded cursor-pointer transition-colors ${
              selectedLine === index
                ? "bg-red-500/20 border border-red-500/50"
                : "hover:bg-slate-800"
            }`}
          >
            <span className="text-slate-600 w-8 text-right mr-4 select-none">{index + 1}</span>
            <span className="text-slate-300">{line}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
