"use client";

import { motion } from "framer-motion";
import { Play, Terminal } from "lucide-react";
import { useState } from "react";

interface SyntaxCardProps {
  title: string;
  explanation: string;
  code?: string;
  onNext: () => void;
}

export function SyntaxCard({ title, explanation, code, onNext }: SyntaxCardProps) {
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  // Extract expected output from code comments
  const getExpectedOutput = () => {
    const outputComments: string[] = [];
    const lines = code.split('\n');
    
    for (const line of lines) {
      // Look for comments with Output: or # Output
      const outputMatch = line.match(/# Output: (.+)/) || line.match(/# (.+)/) && line.includes('Output:');
      if (outputMatch && outputMatch[1]) {
        outputComments.push(outputMatch[1].trim());
      }
      
      // Look for print statements to simulate output
      const printMatch = line.match(/print\((.+?)\)/);
      if (printMatch && !line.includes('# Output:')) {
        // Try to extract simple values
        const value = printMatch[1].trim();
        // Simple evaluation for demo purposes
        if (value.includes('[') || value.includes('{')) {
          outputComments.push(value);
        }
      }
    }
    
    if (outputComments.length > 0) {
      return `>> Output:\\n${outputComments.join('\\n')}\\n>> Process finished with exit code 0`;
    }
    
    return ">> Output:\\n[1, 2, 3, 4, 5]\\n>> Process finished with exit code 0";
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput(null);
    
    // Simulate execution
    setTimeout(() => {
      setIsRunning(false);
      setOutput(getExpectedOutput());
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: explanation }} />
      </div>

      {code && (
        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-800">
        {/* Mac-style Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-slate-400 font-mono">main.py</div>
          <div className="w-12" /> {/* Spacer for centering */}
        </div>

        {/* Code Editor */}
        <div className="p-6 font-mono text-sm sm:text-base text-slate-300 overflow-x-auto">
          <pre>{code}</pre>
        </div>

        {/* Terminal / Output */}
        <div className="border-t border-slate-800 bg-black/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-slate-400 text-xs uppercase tracking-wider font-bold">
              <Terminal size={14} />
              <span>Console</span>
            </div>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`flex items-center space-x-2 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                isRunning 
                  ? "bg-slate-700 text-slate-400 cursor-wait" 
                  : "bg-brand-green text-white hover:bg-green-600"
              }`}
            >
              <Play size={12} fill="currentColor" />
              <span>{isRunning ? "RUNNING..." : "RUN CODE"}</span>
            </button>
          </div>
          
          <div className="font-mono text-xs sm:text-sm min-h-[60px] text-green-400">
            {output || <span className="text-slate-600 opacity-50">Hit run to see output...</span>}
          </div>
        </div>
      </div>
      )}

      <button
        onClick={onNext}
        className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition-colors"
      >
        Continue →
      </button>
    </div>
  );
}
