"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { toPng } from "html-to-image";
import { Share2, Download, X } from "lucide-react";
import { ShareableCard } from "./ShareableCard";

interface MilestoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  xp: number;
  showContinue?: boolean;
  onContinue?: () => void;
}

export function MilestoneModal({ isOpen, onClose, xp, showContinue = false, onContinue }: MilestoneModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger Confetti
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FF6B35', '#22C55E', '#EF4444']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FF6B35', '#22C55E', '#EF4444']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = "algorhythm-milestone.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate image", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], "milestone.png", { type: "image/png" });

      if (navigator.share) {
        await navigator.share({
          title: "I mastered Lists on AlgoRhythm!",
          text: "Check out my progress on AlgoRhythm.",
          files: [file],
        });
      } else {
        // Fallback to download
        handleDownload();
      }
    } catch (err) {
      console.error("Share failed", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="relative bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 z-20"
            >
              <X size={20} className="text-slate-500" />
            </button>

            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 text-center mt-2">Lesson Complete!</h2>
              
              {/* The Card Preview */}
              <div className="transform scale-75 origin-top -mb-24 shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                <ShareableCard
                  ref={cardRef}
                  milestone="LIST MASTER"
                  streak={7}
                  xp={xp}
                  percentile="Top 5%"
                />
              </div>

              <div className="w-full space-y-3 pt-4">
                {showContinue && onContinue && (
                  <button
                    onClick={onContinue}
                    className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg hover:bg-orange-600 transition-colors border-b-4 border-orange-700 active:border-b-0 active:translate-y-1"
                  >
                    <span>Continue to Next Lesson →</span>
                  </button>
                )}
                
                <button
                  onClick={handleShare}
                  disabled={isGenerating}
                  className="w-full py-3 bg-brand-green text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg hover:bg-green-600 transition-colors"
                >
                  <Share2 size={20} />
                  <span>{isGenerating ? "Generating..." : "Share Achievement"}</span>
                </button>
                
                <button
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors"
                >
                  <Download size={20} />
                  <span>Save to Photos</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
