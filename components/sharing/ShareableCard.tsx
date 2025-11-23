"use client";

import { forwardRef } from "react";
import { Mascot } from "../Mascot";
import { Flame, Gem, Trophy } from "lucide-react";

interface ShareableCardProps {
  milestone: string;
  streak: number;
  xp: number;
  percentile: string;
}

export const ShareableCard = forwardRef<HTMLDivElement, ShareableCardProps>(
  ({ milestone, streak, xp, percentile }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[320px] h-[568px] bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col items-center justify-between relative overflow-hidden text-white font-sans"
      >
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-64 h-64 rounded-full bg-brand-green blur-[80px]" />
          <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 rounded-full bg-brand-orange blur-[80px]" />
        </div>

        {/* Header */}
        <div className="z-10 text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/10 uppercase">
            <Trophy size={14} className="text-yellow-400" />
            <span>Milestone Unlocked</span>
          </div>
          <h1 className="text-4xl font-black uppercase leading-none tracking-tight drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            {milestone}
          </h1>
        </div>

        {/* Mascot */}
        <div className="z-10 relative py-8">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent blur-3xl rounded-full transform scale-150" />
          <Mascot state="success" className="w-56 h-56 drop-shadow-2xl filter contrast-125" />
        </div>

        {/* Stats Grid */}
        <div className="z-10 w-full grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center border border-white/10 shadow-lg">
            <Flame className="text-brand-orange mb-1" size={28} fill="currentColor" />
            <span className="text-3xl font-black tracking-tighter">{streak}</span>
            <span className="text-[10px] opacity-60 uppercase font-bold tracking-widest">Day Streak</span>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center border border-white/10 shadow-lg">
            <Gem className="text-blue-400 mb-1" size={28} fill="currentColor" />
            <span className="text-3xl font-black tracking-tighter">{xp}</span>
            <span className="text-[10px] opacity-60 uppercase font-bold tracking-widest">XP Earned</span>
          </div>
        </div>

        {/* Footer */}
        <div className="z-10 w-full text-center border-t border-white/10 pt-4 mb-2">
          <p className="font-black text-xl tracking-[0.2em] text-white/90">ALGORHYTHM</p>
          <p className="text-xs text-white/50 mt-1 font-medium">Master Data Structures & Algorithms</p>
        </div>
      </div>
    );
  }
);

ShareableCard.displayName = "ShareableCard";
