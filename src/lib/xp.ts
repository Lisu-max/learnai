// ==========================================
// LearnAI — XP & Level System
// ==========================================

/** XP rewards for each action */
export const XP_REWARDS = {
  CHAPTER_COMPLETE: 10,
  QUIZ_PASSED: 25,
  QUIZ_PERFECT: 50,
  COURSE_COMPLETE: 100,
  DAILY_STREAK: 5,
} as const;

/** Level definition */
export interface LevelInfo {
  level: number;
  name: string;
  minXp: number;
}

/** All levels ordered by XP threshold */
export const LEVELS: LevelInfo[] = [
  { level: 1, name: "Curieux IA", minXp: 0 },
  { level: 2, name: "Explorateur IA", minXp: 100 },
  { level: 3, name: "Praticien IA", minXp: 300 },
  { level: 4, name: "Spécialiste IA", minXp: 600 },
  { level: 5, name: "Expert IA", minXp: 1000 },
  { level: 6, name: "Maître IA", minXp: 2000 },
];

/**
 * Compute the level for a given total XP.
 * Returns the highest level whose minXp threshold is met.
 */
export function computeLevel(totalXp: number): number {
  let result = 1;
  for (const lvl of LEVELS) {
    if (totalXp >= lvl.minXp) {
      result = lvl.level;
    }
  }
  return result;
}

/**
 * Get level info for a given level number.
 * Falls back to level 1 if not found.
 */
export function getLevelInfo(level: number): LevelInfo {
  return LEVELS.find((l) => l.level === level) ?? LEVELS[0];
}

/**
 * Get the next level info (the level after the given one).
 * Returns null if already at max level.
 */
export function getNextLevelInfo(level: number): LevelInfo | null {
  const idx = LEVELS.findIndex((l) => l.level === level);
  if (idx === -1 || idx >= LEVELS.length - 1) return null;
  return LEVELS[idx + 1];
}

/**
 * Compute quiz XP based on score and total questions.
 * - Perfect score (all correct): QUIZ_PERFECT
 * - Passed (>= 70%): QUIZ_PASSED
 * - Failed: 0
 */
export function computeQuizXp(score: number, totalQuestions: number): number {
  if (totalQuestions <= 0) return 0;
  const ratio = score / totalQuestions;
  if (ratio >= 1) return XP_REWARDS.QUIZ_PERFECT;
  if (ratio >= 0.7) return XP_REWARDS.QUIZ_PASSED;
  return 0;
}
