"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, Rocket, Brain, Zap, Code, Terminal, ArrowRight } from "lucide-react";
import Mascot from "./Mascot";

type OnboardingStep = "mascot" | "goal" | "level" | "loading" | "complete";

interface OnboardingWizardProps {
  onComplete: () => void;
}

export default function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState<OnboardingStep>("mascot");
  const [goal, setGoal] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);

  const handleMascotNext = () => {
    setStep("goal");
  };

  const handleGoalSelect = (selectedGoal: string) => {
    setGoal(selectedGoal);
    setTimeout(() => setStep("level"), 300);
  };

  const handleLevelSelect = (selectedLevel: string) => {
    setLevel(selectedLevel);
    setStep("loading");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
      <AnimatePresence mode="wait">
        {step === "mascot" && (
          <motion.div
            key="mascot"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex flex-col items-center space-y-8 max-w-md text-center"
          >
            <Mascot 
              emotion="happy" 
              message="Hi! I'm Algo. I'm here to help you master Data Structures without the headache." 
            />
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={handleMascotNext}
              className="flex items-center px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-[0_4px_0_0_#46a302] active:shadow-none active:translate-y-[4px] transition-all"
            >
              Let's Go! <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {step === "goal" && (
          <motion.div
            key="goal"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-md space-y-6"
          >
            <div className="flex justify-center mb-4">
              <Mascot emotion="thinking" />
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Why are you learning DSA?
            </h1>
            <div className="grid gap-4">
              {[
                { id: "interview", icon: Rocket, label: "Ace Interviews" },
                { id: "exam", icon: Brain, label: "Pass Exams" },
                { id: "fun", icon: Zap, label: "Just for Fun" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleGoalSelect(item.id)}
                  className={cn(
                    "flex items-center p-4 bg-white rounded-2xl border-2 border-b-4 transition-all active:border-b-2 active:translate-y-[2px]",
                    goal === item.id
                      ? "border-primary bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-8 h-8 mr-4",
                      goal === item.id ? "text-primary" : "text-gray-400"
                    )}
                  />
                  <span className="text-lg font-bold text-gray-700">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "level" && (
          <motion.div
            key="level"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-md space-y-6"
          >
            <div className="flex justify-center mb-4">
              <Mascot emotion="happy" />
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800">
              How much Python do you know?
            </h1>
            <div className="grid gap-4">
              {[
                { id: "newbie", icon: Code, label: "I'm a total beginner" },
                { id: "some", icon: Terminal, label: "I know the basics" },
                { id: "pro", icon: Brain, label: "I'm looking for a challenge" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLevelSelect(item.id)}
                  className={cn(
                    "flex items-center p-4 bg-white rounded-2xl border-2 border-b-4 transition-all active:border-b-2 active:translate-y-[2px]",
                    level === item.id
                      ? "border-primary bg-green-50"
                      : "border-gray-200 hover:bg-gray-50"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-8 h-8 mr-4",
                      level === item.id ? "text-primary" : "text-gray-400"
                    )}
                  />
                  <span className="text-lg font-bold text-gray-700">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "loading" && (
          <Loader onComplete={onComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Loader({ onComplete }: { onComplete: () => void }) {
  // Auto-advance after 2 seconds
  useState(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className="flex flex-col items-center justify-center space-y-6 text-center"
    >
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 border-4 border-gray-200 rounded-full"
        />
        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <Brain className="absolute inset-0 w-10 h-10 m-auto text-primary" />
      </div>
      <h2 className="text-xl font-bold text-gray-700">
        Calibrating your curriculum...
      </h2>
    </motion.div>
  );
}
