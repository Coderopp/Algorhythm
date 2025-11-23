"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Play, Lock, CheckCircle } from "lucide-react";
import { Topic, Lesson } from "@/lib/schema";
import { Mascot } from "../Mascot";

interface TopicDetailViewProps {
  topic: Topic;
  onBack: () => void;
  onLessonSelect: (lesson: Lesson) => void;
}

export function TopicDetailView({ topic, onBack, onLessonSelect }: TopicDetailViewProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className={`p-6 pb-12 ${topic.color} text-white rounded-b-[3rem] shadow-lg relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <button 
            onClick={onBack}
            className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors mb-6"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black mb-2">{topic.title}</h1>
              <p className="opacity-90 max-w-[200px] text-sm">{topic.description}</p>
            </div>
            <Mascot state="idle" className="w-24 h-24 scale-125" />
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 opacity-80">
              <span>Progress</span>
              <span>{topic.progress}%</span>
            </div>
            <div className="h-3 bg-black/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${topic.progress}%` }}
                className="h-full bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lesson List */}
      <div className="flex-1 p-6 -mt-4 space-y-4">
        {topic.lessons.map((lesson, index) => (
          <motion.button
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => !lesson.isLocked && onLessonSelect(lesson)}
            disabled={lesson.isLocked}
            className={`w-full p-4 rounded-2xl flex items-center space-x-4 shadow-sm border-2 transition-all ${
              lesson.isLocked 
                ? "bg-slate-100 border-slate-200 opacity-70" 
                : "bg-white border-slate-200 hover:border-brand-green hover:shadow-md active:scale-98"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${
              lesson.isCompleted 
                ? "bg-green-100 text-green-600" 
                : lesson.isLocked 
                ? "bg-slate-200 text-slate-400"
                : "bg-brand-orange text-white"
            }`}>
              {lesson.isCompleted ? <CheckCircle size={24} /> : lesson.isLocked ? <Lock size={20} /> : index + 1}
            </div>
            
            <div className="flex-1 text-left">
              <h3 className={`font-bold ${lesson.isLocked ? "text-slate-500" : "text-slate-800"}`}>
                {lesson.title}
              </h3>
              <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1">
                <span className="uppercase font-bold tracking-wider">{lesson.type}</span>
                <span>•</span>
                <span>{lesson.duration}</span>
                <span>•</span>
                <span className="text-brand-orange font-bold">+{lesson.xp} XP</span>
              </div>
            </div>

            {!lesson.isLocked && !lesson.isCompleted && (
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Play size={16} fill="currentColor" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
