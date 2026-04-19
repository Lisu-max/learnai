export interface DiagramNode {
  label: string;
  sub?: string;
  color?: "purple" | "blue" | "emerald" | "amber" | "pink";
}

export type LocalizedVideoId =
  | string
  | {
      fr?: string;
      en?: string;
    };

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
    | "key-point"
    | "diagram";
  content?: string;
  items?: string[];
  label?: string;
  labelEn?: string;
  videoId?: LocalizedVideoId;
  videoDurationMinutes?: number;
  prompt?: string;
  result?: string;
  nodes?: DiagramNode[];
  flow?: "horizontal" | "vertical" | "cycle";
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
