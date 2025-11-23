"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle, XCircle, HelpCircle } from "lucide-react";

export type MascotState = "idle" | "thinking" | "success" | "error";

interface MascotProps {
  state?: MascotState;
  className?: string;
  emotion?: string; // friendly alias used by onboarding
  message?: string; // optional speech/message to display near mascot
  onClick?: () => void;
}

export function Mascot({ state = "idle", className = "", emotion, message, onClick }: MascotProps) {
  const variants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    thinking: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    success: {
      scale: [1, 1.2, 1],
      rotate: [0, 360, 360],
      transition: {
        duration: 0.8,
        ease: "backOut" as const,
      },
    },
    error: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
  };

  const getIcon = () => {
    switch (state) {
      case "success":
        return <CheckCircle className="w-full h-full text-brand-green" />;
      case "error":
        return <XCircle className="w-full h-full text-brand-red" />;
      case "thinking":
        return <HelpCircle className="w-full h-full text-brand-orange" />;
      default:
        return <Bot className="w-full h-full text-brand-orange" />;
    }
  };

  return (
    <motion.div
      className={`relative w-24 h-24 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      animate={state}
      variants={variants}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Placeholder for "Py" the Red Panda */}
      <div className="w-full h-full bg-white rounded-full shadow-lg p-4 border-4 border-slate-100 flex items-center justify-center">
        {getIcon()}
      </div>
      
      {/* Speech Bubble for Thinking */}
      {state === "thinking" && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-4 -right-4 bg-white p-2 rounded-xl shadow-md border border-slate-200"
        >
          <span className="text-xl">🤔</span>
        </motion.div>
      )}

      {/* Optional message bubble (explicit message prop) */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-xl shadow-md border border-slate-200 max-w-xs text-sm text-slate-700"
        >
          {message}
        </motion.div>
      )}
    </motion.div>
  );
}
