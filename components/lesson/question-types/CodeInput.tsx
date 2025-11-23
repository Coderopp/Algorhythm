"use client";

import { useState, useEffect } from "react";

interface CodeInputProps {
  code: string;
  onChange: (code: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function CodeInput({ code, onChange, placeholder = "Type your code here...", disabled = false }: CodeInputProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 rounded-t-xl flex items-center px-3 space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full h-48 pt-10 p-4 bg-slate-900 text-slate-50 font-mono text-sm rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-brand-green disabled:opacity-80"
          spellCheck={false}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">
        Type the exact code solution.
      </p>
    </div>
  );
}
