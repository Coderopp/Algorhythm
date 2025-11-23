"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Puzzle, Coffee, Zap, Flame, ArrowRight, Check } from "lucide-react";
import { Mascot } from "../Mascot";

type Step = "motivation" | "baseline" | "intensity" | "generating";

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState<Step>("motivation");
  const [selections, setSelections] = useState({
    motivation: "",
    baseline: "",
    intensity: "",
  });

  const handleSelection = (key: keyof typeof selections, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
    
    // Auto-advance after a short delay
    setTimeout(() => {
      if (step === "motivation") setStep("baseline");
      else if (step === "baseline") setStep("intensity");
      else if (step === "intensity") {
        setStep("generating");
        // Simulate generation delay
        setTimeout(onComplete, 3000);
      }
    }, 300);
  };

  const progress = {
    motivation: 33,
    baseline: 66,
    intensity: 100,
    generating: 100,
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      {/* Progress Bar */}
      <div className="w-full max-w-md h-2 bg-slate-200 rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-brand-green"
          initial={{ width: "0%" }}
          animate={{ width: `${progress[step]}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === "motivation" && (
          <motion.div
            key="motivation"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md"
          >
            <div className="flex justify-center mb-6">
              <Mascot state="idle" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-8 text-slate-800">What brings you to AlgoRhythm?</h1>
            <div className="space-y-4">
              <OptionCard
                icon={<Briefcase className="text-blue-500" />}
                label="Crack a Job Interview"
                selected={selections.motivation === "job"}
                onClick={() => handleSelection("motivation", "job")}
              />
              <OptionCard
                icon={<GraduationCap className="text-purple-500" />}
                label="Ace my College Exams"
                selected={selections.motivation === "school"}
                onClick={() => handleSelection("motivation", "school")}
              />
              <OptionCard
                icon={<Puzzle className="text-brand-orange" />}
                label="Build Logic Skills"
                selected={selections.motivation === "logic"}
                onClick={() => handleSelection("motivation", "logic")}
              />
            </div>
          </motion.div>
        )}

        {step === "baseline" && (
          <motion.div
            key="baseline"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md"
          >
            <div className="flex justify-center mb-6">
              <Mascot state="thinking" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-8 text-slate-800">How's your Python?</h1>
            <div className="space-y-4">
              <OptionCard
                label="I'm a total beginner"
                subLabel="Start from Variables"
                selected={selections.baseline === "beginner"}
                onClick={() => handleSelection("baseline", "beginner")}
              />
              <OptionCard
                label="I know basic syntax"
                subLabel="Start from Loops"
                selected={selections.baseline === "intermediate"}
                onClick={() => handleSelection("baseline", "intermediate")}
              />
              <OptionCard
                label="I can write functions"
                subLabel="Start from Arrays"
                selected={selections.baseline === "advanced"}
                onClick={() => handleSelection("baseline", "advanced")}
              />
            </div>
          </motion.div>
        )}

        {step === "intensity" && (
          <motion.div
            key="intensity"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md"
          >
            <div className="flex justify-center mb-6">
              <Mascot state="idle" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-8 text-slate-800">Pick your daily goal.</h1>
            <div className="space-y-4">
              <OptionCard
                icon={<Coffee className="text-slate-500" />}
                label="Casual"
                subLabel="5 min / day"
                selected={selections.intensity === "casual"}
                onClick={() => handleSelection("intensity", "casual")}
              />
              <OptionCard
                icon={<Zap className="text-yellow-500" />}
                label="Regular"
                subLabel="10 min / day"
                selected={selections.intensity === "regular"}
                onClick={() => handleSelection("intensity", "regular")}
              />
              <OptionCard
                icon={<Flame className="text-brand-red" />}
                label="Hardcore"
                subLabel="20 min / day"
                selected={selections.intensity === "hardcore"}
                onClick={() => handleSelection("intensity", "hardcore")}
              />
            </div>
          </motion.div>
        )}

        {step === "generating" && (
          <motion.div
            key="generating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-md flex flex-col items-center text-center"
          >
            <Mascot state="thinking" className="mb-8 scale-150" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Generating your path...</h2>
            <p className="text-slate-500">Customizing lessons based on your goals.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function OptionCard({ 
  icon, 
  label, 
  subLabel, 
  selected, 
  onClick 
}: { 
  icon?: React.ReactNode; 
  label: string; 
  subLabel?: string; 
  selected: boolean; 
  onClick: () => void; 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-4 rounded-2xl border-2 flex items-center space-x-4 transition-colors ${
        selected 
          ? "border-brand-green bg-green-50" 
          : "border-slate-200 bg-white hover:border-brand-green/50"
      }`}
    >
      {icon && <div className="text-2xl">{icon}</div>}
      <div className="flex-1 text-left">
        <div className="font-bold text-slate-800">{label}</div>
        {subLabel && <div className="text-sm text-slate-500">{subLabel}</div>}
      </div>
      {selected && <Check className="text-brand-green" />}
    </motion.button>
  );
}
