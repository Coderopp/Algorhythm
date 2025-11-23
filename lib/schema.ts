import { LucideIcon } from "lucide-react";

export type LessonType = 'theory' | 'visualizer' | 'quiz' | 'challenge';

export interface VisualizationStep {
  step: number;
  array: number[];
  pointers: { [key: string]: number };
  message: string;
  highlights: number[];
}

export interface QuestionData {
  id: number; // Added id to match LessonMode expectation
  type: "multiple-choice" | "parsons" | "bug-fix" | "code-input";
  prompt: string;
  data: any;
  correctAnswer: any;
}

export interface LessonContent {
  // For Theory/Visualizer
  title?: string;
  explanation?: string;
  code?: string;
  visualizationSteps?: VisualizationStep[];
  
  // For Quiz/Challenge
  questions?: QuestionData[];
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  content: LessonContent;
  xp: number;
  duration: string; // e.g., "5 min"
  isLocked?: boolean;
  isCompleted?: boolean;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string; // We'll map string to Icon component
  lessons: Lesson[];
  totalXp: number;
  progress: number; // 0 to 100
  color: string; // Tailwind class or hex
}

export interface Module {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Course {
  id: string;
  title: string;
  modules: Module[];
}
