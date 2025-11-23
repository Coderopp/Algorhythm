"use client";

import { motion } from "framer-motion";

interface MultipleChoiceProps {
  options: string[];
  selected: string | null;
  onSelect: (option: string) => void;
  disabled?: boolean;
}

export function MultipleChoice({ options, selected, onSelect, disabled }: MultipleChoiceProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {options.map((option, index) => (
        <motion.button
          key={index}
          whileHover={!disabled ? { scale: 1.02 } : {}}
          whileTap={!disabled ? { scale: 0.98 } : {}}
          onClick={() => !disabled && onSelect(option)}
          className={`p-6 rounded-2xl border-2 text-left text-lg font-medium transition-colors ${
            selected === option
              ? "border-brand-green bg-green-50 text-brand-green"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
          } ${disabled ? "cursor-default opacity-80" : "cursor-pointer"}`}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold ${
              selected === option ? "border-brand-green bg-brand-green text-white" : "border-slate-200 text-slate-400"
            }`}>
              {String.fromCharCode(65 + index)}
            </div>
            <span>{option}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
