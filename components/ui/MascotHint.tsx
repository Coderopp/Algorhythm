"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Mascot } from "../Mascot";
import { useState, useEffect } from "react";

interface MascotHintProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "hint" | "encouragement";
}

export function MascotHint({ message, isVisible, onClose, type = "hint" }: MascotHintProps) {
  // Auto-hide after 5 seconds for encouragements
  useEffect(() => {
    if (isVisible && type === "encouragement") {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, type, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-24 right-4 z-50 max-w-[280px]"
        >
          <div className="relative">
            {/* Speech Bubble */}
            <div className="bg-white p-4 rounded-2xl rounded-br-none shadow-xl border-2 border-slate-100 mb-2 relative">
              <button 
                onClick={onClose}
                className="absolute top-2 right-2 text-slate-300 hover:text-slate-500"
              >
                <X size={14} />
              </button>
              <p className="text-slate-700 text-sm font-medium pr-4">
                {message}
              </p>
              {/* Triangle */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-b-2 border-r-2 border-slate-100 transform rotate-45" />
            </div>

            {/* Mascot */}
            <div className="flex justify-end">
              <Mascot state={type === "hint" ? "thinking" : "success"} className="w-16 h-16" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
