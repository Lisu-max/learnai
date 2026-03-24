export interface ChapterSection {
  type:
    | "paragraph"
    | "heading"
    | "subheading"
    | "tip"
    | "summary"
    | "video"
    | "callout"
    | "prompt-example"
    | "case-study"
    | "key-point";
  content?: string;
  items?: string[];
  label?: string;
  videoId?: string;
  prompt?: string;
  result?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Chapter {
  number: number;
  title: string;
  description: string;
  sections: ChapterSection[];
  quiz: QuizQuestion[];
  estimatedMinutes: number;
}

export interface CourseContent {
  slug: string;
  chapters: Chapter[];
}
