export type QuestionType = "quiz" | "parsons" | "bug";

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
}

export interface QuizQuestion extends BaseQuestion {
  type: "quiz";
  options: string[];
  correct: string;
}

export interface ParsonsQuestion extends BaseQuestion {
  type: "parsons";
  blocks: string[];
  correctOrder: string[];
}

export interface BugQuestion extends BaseQuestion {
  type: "bug";
  codeLines: string[];
  correctLineIndex: number;
}

export type LessonQuestion = QuizQuestion | ParsonsQuestion | BugQuestion;
