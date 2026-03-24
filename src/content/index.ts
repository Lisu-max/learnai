import type { CourseContent, Chapter } from "./types";

// Lazy import course content
const courseModules: Record<string, () => Promise<{ default: CourseContent }>> = {
  "ia-de-a-a-z": () => import("./courses/ia-de-a-a-z"),
  "maitriser-outils-ia": () => import("./courses/maitriser-outils-ia"),
  "prompt-engineering-pro": () => import("./courses/prompt-engineering-pro"),
  "ia-pour-votre-business": () => import("./courses/ia-pour-votre-business"),
  "creer-avec-ia": () => import("./courses/creer-avec-ia"),
};

export async function getCourseContent(slug: string): Promise<CourseContent | null> {
  const loader = courseModules[slug];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}

export function getChapter(content: CourseContent, num: number): Chapter | null {
  return content.chapters.find((c) => c.number === num) || null;
}

export type { CourseContent, Chapter } from "./types";
