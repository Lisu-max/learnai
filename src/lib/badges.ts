// ==========================================
// LearnAI — Badge System
// ==========================================

import type { SupabaseClient } from "@supabase/supabase-js";
import { courses } from "@/lib/courses";

/** Badge definition */
export interface BadgeDef {
  slug: string;
  name: string;
  icon: string; // Lucide icon name
  description: string;
}

/** All badges */
export const BADGES: BadgeDef[] = [
  // Progression badges
  { slug: "first-chapter", name: "Premier Pas", icon: "BookOpen", description: "Terminer votre premier chapitre" },
  { slug: "ten-chapters", name: "Lecteur Assidu", icon: "BookMarked", description: "Terminer 10 chapitres" },
  { slug: "fifty-chapters", name: "Dévoreur de Savoir", icon: "Library", description: "Terminer 50 chapitres" },
  // Quiz badges
  { slug: "first-quiz", name: "Premier Quiz", icon: "CheckCircle", description: "Réussir votre premier quiz" },
  { slug: "perfect-quiz", name: "Sans Faute", icon: "Target", description: "Obtenir un score parfait à un quiz" },
  { slug: "ten-quizzes", name: "Quiz Master", icon: "Award", description: "Réussir 10 quiz" },
  // Course completion badges
  { slug: "first-course", name: "Diplômé", icon: "GraduationCap", description: "Terminer un cours complet" },
  { slug: "three-courses", name: "Polyvalent", icon: "Layers", description: "Terminer 3 cours" },
  { slug: "all-courses", name: "Encyclopédiste", icon: "Crown", description: "Terminer tous les cours" },
  // Course-specific badges
  { slug: "expert-prompt", name: "Expert Prompt", icon: "MessageSquare", description: "Terminer Prompt Engineering Pro" },
  { slug: "business-ready", name: "Business Ready", icon: "Briefcase", description: "Terminer L'IA pour votre Business" },
  { slug: "createur", name: "Créateur IA", icon: "Palette", description: "Terminer Créer avec l'IA" },
  { slug: "tools-master", name: "Maître des Outils", icon: "Wrench", description: "Terminer Maîtriser les Outils IA" },
  // Streak & XP badges
  { slug: "streak-7", name: "Flamme 7 Jours", icon: "Flame", description: "Maintenir une série de 7 jours" },
  { slug: "xp-1000", name: "Millionnaire XP", icon: "Zap", description: "Atteindre 1000 XP" },
];

/**
 * Get a badge definition by slug.
 */
export function getBadgeDef(slug: string): BadgeDef | undefined {
  return BADGES.find((b) => b.slug === slug);
}

/** Map course slug to badge slug for course-specific badges */
const COURSE_BADGE_MAP: Record<string, string> = {
  "prompt-engineering-pro": "expert-prompt",
  "ia-pour-votre-business": "business-ready",
  "creer-avec-ia": "createur",
  "maitriser-outils-ia": "tools-master",
};

interface ChapterProgressRow {
  course_slug: string;
  chapter_number: number;
  completed: boolean;
}

interface QuizResultRow {
  course_slug: string;
  chapter_number: number;
  score: number;
  total_questions: number;
  passed: boolean;
}

interface UserBadgeRow {
  badge_slug: string;
}

interface UserStatsRow {
  total_xp: number;
  current_streak: number;
  longest_streak: number;
}

interface UserRow {
  created_at: string;
}

/**
 * Check all badge conditions and award any newly earned badges.
 * Returns the list of newly earned badge slugs.
 */
export async function checkAndAwardBadges(
  supabase: SupabaseClient,
  userId: string
): Promise<string[]> {
  // Fetch all required data in parallel
  const [chaptersRes, quizzesRes, badgesRes, statsRes, userRes] = await Promise.all([
    supabase
      .from("chapter_progress")
      .select("course_slug, chapter_number, completed")
      .eq("user_id", userId)
      .eq("completed", true),
    supabase
      .from("quiz_results")
      .select("course_slug, chapter_number, score, total_questions, passed")
      .eq("user_id", userId),
    supabase
      .from("user_badges")
      .select("badge_slug")
      .eq("user_id", userId),
    supabase
      .from("user_stats")
      .select("total_xp, current_streak, longest_streak")
      .eq("user_id", userId)
      .single(),
    supabase.auth.getUser(),
  ]);

  const completedChapters = (chaptersRes.data ?? []) as ChapterProgressRow[];
  const quizResults = (quizzesRes.data ?? []) as QuizResultRow[];
  const existingBadges = new Set(
    ((badgesRes.data ?? []) as UserBadgeRow[]).map((b) => b.badge_slug)
  );
  const stats = (statsRes.data ?? { total_xp: 0, current_streak: 0, longest_streak: 0 }) as UserStatsRow;
  const _user = userRes.data?.user;

  // Compute completed courses
  // A course is complete when all its chapters are done AND all quizzes are passed
  const completedCourses: string[] = [];
  for (const course of courses) {
    const chaptersForCourse = completedChapters.filter(
      (c) => c.course_slug === course.slug
    );
    const quizzesForCourse = quizResults.filter(
      (q) => q.course_slug === course.slug && q.passed
    );
    if (
      chaptersForCourse.length >= course.chapters &&
      quizzesForCourse.length >= course.chapters
    ) {
      completedCourses.push(course.slug);
    }
  }

  const totalCompletedChapters = completedChapters.length;
  const passedQuizzes = quizResults.filter((q) => q.passed);
  const perfectQuizzes = quizResults.filter(
    (q) => q.score === q.total_questions && q.total_questions > 0
  );
  const bestStreak = Math.max(stats.current_streak, stats.longest_streak);

  // Evaluate each badge
  const earned: string[] = [];

  const conditions: Record<string, boolean> = {
    // Progression
    "first-chapter": totalCompletedChapters >= 1,
    "ten-chapters": totalCompletedChapters >= 10,
    "fifty-chapters": totalCompletedChapters >= 50,
    // Quiz
    "first-quiz": passedQuizzes.length >= 1,
    "perfect-quiz": perfectQuizzes.length >= 1,
    "ten-quizzes": passedQuizzes.length >= 10,
    // Course completion
    "first-course": completedCourses.length >= 1,
    "three-courses": completedCourses.length >= 3,
    "all-courses": completedCourses.length >= courses.length,
    // Course-specific
    "expert-prompt": completedCourses.includes("prompt-engineering-pro"),
    "business-ready": completedCourses.includes("ia-pour-votre-business"),
    "createur": completedCourses.includes("creer-avec-ia"),
    "tools-master": completedCourses.includes("maitriser-outils-ia"),
    // Streak & XP
    "streak-7": bestStreak >= 7,
    "xp-1000": stats.total_xp >= 1000,
  };

  for (const [slug, met] of Object.entries(conditions)) {
    if (met && !existingBadges.has(slug)) {
      earned.push(slug);
    }
  }

  // Insert newly earned badges
  if (earned.length > 0) {
    const rows = earned.map((badge_slug) => ({
      user_id: userId,
      badge_slug,
      earned_at: new Date().toISOString(),
    }));
    await supabase.from("user_badges").insert(rows);
  }

  return earned;
}
