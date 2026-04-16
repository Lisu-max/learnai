import type { CourseContent, Chapter } from "./types";

const courseModules: Record<string, () => Promise<{ default: CourseContent }>> = {
  "ia-de-a-a-z": () => import("./courses/ia-de-a-a-z"),
  "maitriser-outils-ia": () => import("./courses/maitriser-outils-ia"),
  "prompt-engineering-pro": () => import("./courses/prompt-engineering-pro"),
  "ia-pour-votre-business": () => import("./courses/ia-pour-votre-business"),
  "creer-avec-ia": () => import("./courses/creer-avec-ia"),
  "ia-au-quotidien": () => import("./courses/ia-au-quotidien"),
  "ethique-ia": () => import("./courses/ethique-ia"),
  "coder-avec-ia": () => import("./courses/coder-avec-ia"),
  "ia-freelances": () => import("./courses/ia-freelances"),
  "automatiser-avec-ia": () => import("./courses/automatiser-avec-ia"),
  "ia-marketing-digital": () => import("./courses/ia-marketing-digital"),
  "data-science-ia": () => import("./courses/data-science-ia"),
  "ia-ressources-humaines": () => import("./courses/ia-ressources-humaines"),
  "ia-education": () => import("./courses/ia-education"),
  "cybersecurite-ia": () => import("./courses/cybersecurite-ia"),
  "ia-generative-avancee": () => import("./courses/ia-generative-avancee"),
  "leadership-ia": () => import("./courses/leadership-ia"),
};

const courseModulesEn: Record<string, () => Promise<{ default: CourseContent }>> = {
  "ia-de-a-a-z": () => import("./courses/en/ia-de-a-a-z"),
  "maitriser-outils-ia": () => import("./courses/en/maitriser-outils-ia"),
  "prompt-engineering-pro": () => import("./courses/en/prompt-engineering-pro"),
  "ia-pour-votre-business": () => import("./courses/en/ia-pour-votre-business"),
  "creer-avec-ia": () => import("./courses/en/creer-avec-ia"),
};

export async function getCourseContent(slug: string, locale: string = "fr"): Promise<CourseContent | null> {
  if (locale === "en") {
    const enLoader = courseModulesEn[slug];
    if (enLoader) {
      try {
        const mod = await enLoader();
        return mod.default;
      } catch {
        // fall through to FR
      }
    }
  }
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
