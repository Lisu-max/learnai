# Progression, Certificates & Gamification — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add XP system, 15 badges, PDF certificates with QR verification, leaderboard, and refactored dashboard — all reading from Supabase instead of localStorage.

**Architecture:** Server-side API routes handle XP/badge computation after quiz completion. The quiz components (which already write to `chapter_progress` and `quiz_results` via client-side Supabase) will additionally call a `POST /api/progress/award` route to compute XP and badges. Dashboard reads everything from Supabase. Certificates are generated server-side with `pdf-lib`. Leaderboard is a materialized view refreshed on XP changes.

**Tech Stack:** Next.js 16 App Router, Supabase (existing), pdf-lib (existing), nanoid (new), qrcode (new), @vercel/og (new)

**Spec:** `docs/superpowers/specs/2026-04-16-progression-certificates-gamification-design.md`

---

## Phase 1: Database & Core Logic

### Task 1: Supabase Migration — New Tables

**Files:**
- Create: `supabase/migrations/20260416_progression_gamification.sql`

- [ ] **Step 1: Write the migration SQL**

```sql
-- supabase/migrations/20260416_progression_gamification.sql

-- 1. User stats (XP, level, streak)
CREATE TABLE IF NOT EXISTS user_stats (
  user_id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  total_xp        integer NOT NULL DEFAULT 0,
  level           integer NOT NULL DEFAULT 1,
  current_streak  integer NOT NULL DEFAULT 0,
  longest_streak  integer NOT NULL DEFAULT 0,
  last_activity   timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own stats" ON user_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Service role full access on user_stats" ON user_stats FOR ALL USING (true) WITH CHECK (true);

-- 2. User badges
CREATE TABLE IF NOT EXISTS user_badges (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_slug  text NOT NULL,
  earned_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, badge_slug)
);

ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own badges" ON user_badges FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Service role full access on user_badges" ON user_badges FOR ALL USING (true) WITH CHECK (true);

-- 3. Certificates
CREATE TABLE IF NOT EXISTS certificates (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_slug  text NOT NULL,
  score        integer NOT NULL,
  issued_at    timestamptz NOT NULL DEFAULT now(),
  verify_code  text NOT NULL UNIQUE,
  UNIQUE(user_id, course_slug)
);

ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own certificates" ON certificates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Service role full access on certificates" ON certificates FOR ALL USING (true) WITH CHECK (true);

-- 4. Leaderboard materialized view
CREATE MATERIALIZED VIEW IF NOT EXISTS leaderboard_view AS
SELECT
  us.user_id,
  COALESCE(
    LEFT(p.full_name, POSITION(' ' IN COALESCE(p.full_name, '') || ' ')) ||
    LEFT(SPLIT_PART(COALESCE(p.full_name, ''), ' ', 2), 1) || '.',
    'Anonyme'
  ) AS display_name,
  us.total_xp,
  us.level,
  ROW_NUMBER() OVER (ORDER BY us.total_xp DESC) AS rank
FROM user_stats us
JOIN profiles p ON p.id = us.user_id
WHERE us.total_xp > 0;

CREATE UNIQUE INDEX IF NOT EXISTS leaderboard_view_user_id ON leaderboard_view(user_id);
CREATE INDEX IF NOT EXISTS leaderboard_view_rank ON leaderboard_view(rank);

-- 5. Auto-create user_stats row on new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user_stats()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_stats (user_id) VALUES (NEW.id) ON CONFLICT DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created_stats ON auth.users;
CREATE TRIGGER on_auth_user_created_stats
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_stats();

-- 6. Indexes
CREATE INDEX IF NOT EXISTS idx_user_stats_xp ON user_stats(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_certificates_verify ON certificates(verify_code);
CREATE INDEX IF NOT EXISTS idx_user_badges_user ON user_badges(user_id);
```

- [ ] **Step 2: Apply migration to Supabase**

Run: `npx supabase db push` or apply manually via Supabase dashboard SQL editor.

Verify tables exist:
```bash
cd /opt/milane/learn-ai
npx supabase db diff --use-migra 2>/dev/null || echo "Apply via dashboard SQL editor"
```

- [ ] **Step 3: Commit**

```bash
cd /opt/milane/learn-ai
git add supabase/migrations/20260416_progression_gamification.sql
git commit -m "feat: add user_stats, user_badges, certificates tables + leaderboard view"
```

---

### Task 2: XP & Level Logic Library

**Files:**
- Create: `src/lib/xp.ts`

- [ ] **Step 1: Create XP constants and level calculator**

```typescript
// src/lib/xp.ts

export const XP_REWARDS = {
  CHAPTER_COMPLETE: 10,
  QUIZ_PASSED: 25,      // score >= 70%
  QUIZ_PERFECT: 50,     // score === 100% (replaces QUIZ_PASSED, not cumulative)
  COURSE_COMPLETE: 100,
  DAILY_STREAK: 5,
} as const;

export const LEVELS = [
  { level: 1, name: "Curieux IA", minXp: 0 },
  { level: 2, name: "Explorateur IA", minXp: 100 },
  { level: 3, name: "Praticien IA", minXp: 300 },
  { level: 4, name: "Spécialiste IA", minXp: 600 },
  { level: 5, name: "Expert IA", minXp: 1000 },
  { level: 6, name: "Maître IA", minXp: 2000 },
] as const;

export function computeLevel(totalXp: number): number {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (totalXp >= LEVELS[i].minXp) return LEVELS[i].level;
  }
  return 1;
}

export function getLevelInfo(level: number) {
  return LEVELS.find((l) => l.level === level) ?? LEVELS[0];
}

export function getNextLevelInfo(level: number) {
  return LEVELS.find((l) => l.level === level + 1) ?? null;
}

export function computeQuizXp(score: number, totalQuestions: number): number {
  const percentage = (score / totalQuestions) * 100;
  if (percentage === 100) return XP_REWARDS.QUIZ_PERFECT;
  if (percentage >= 70) return XP_REWARDS.QUIZ_PASSED;
  return 0;
}
```

- [ ] **Step 2: Commit**

```bash
cd /opt/milane/learn-ai
git add src/lib/xp.ts
git commit -m "feat: add XP constants and level computation"
```

---

### Task 3: Badge Definitions & Check Logic

**Files:**
- Create: `src/lib/badges.ts`

- [ ] **Step 1: Create badge definitions and checker**

```typescript
// src/lib/badges.ts

import type { SupabaseClient } from "@supabase/supabase-js";
import { courses } from "@/lib/courses";

export interface BadgeDef {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export const BADGES: BadgeDef[] = [
  { slug: "premier-pas", name: "Premier Pas", icon: "footprints", description: "Terminer 1 chapitre" },
  { slug: "quiz-master", name: "Quiz Master", icon: "trophy", description: "Premier quiz à 100%" },
  { slug: "scholar", name: "Scholar", icon: "graduation-cap", description: "Terminer 1 cours complet" },
  { slug: "polyglotte", name: "Polyglotte", icon: "languages", description: "Compléter un cours dans 2 langues" },
  { slug: "perfectionniste", name: "Perfectionniste", icon: "star", description: "5 quiz à 100%" },
  { slug: "assidu", name: "Assidu", icon: "flame", description: "Streak de 7 jours" },
  { slug: "marathonien", name: "Marathonien", icon: "medal", description: "Streak de 30 jours" },
  { slug: "collectionneur", name: "Collectionneur", icon: "gallery-vertical", description: "Gagner 10 badges" },
  { slug: "expert-prompt", name: "Expert Prompt", icon: "terminal", description: "Terminer Prompt Engineering Pro" },
  { slug: "business-ready", name: "Business Ready", icon: "briefcase", description: "Terminer L'IA pour votre Business" },
  { slug: "createur", name: "Créateur", icon: "palette", description: "Terminer Créer avec l'IA" },
  { slug: "tools-master", name: "Tools Master", icon: "wrench", description: "Terminer Maîtriser les Outils IA" },
  { slug: "encyclopedie", name: "Encyclopédie", icon: "book-open", description: "Terminer tous les cours" },
  { slug: "elite", name: "Élite", icon: "crown", description: "Atteindre niveau Maître IA" },
  { slug: "early-adopter", name: "Early Adopter", icon: "rocket", description: "Inscrit avant le 1er juin 2026" },
];

export function getBadgeDef(slug: string): BadgeDef | undefined {
  return BADGES.find((b) => b.slug === slug);
}

interface CheckContext {
  chaptersCompleted: number;
  perfectQuizzes: number;
  coursesCompleted: string[]; // slugs of completed courses
  currentStreak: number;
  totalBadges: number;
  level: number;
  userCreatedAt: string;
}

const COURSE_BADGE_MAP: Record<string, string> = {
  "prompt-engineering-pro": "expert-prompt",
  "ia-pour-votre-business": "business-ready",
  "creer-avec-ia": "createur",
  "maitriser-outils-ia": "tools-master",
};

function evaluateBadges(ctx: CheckContext, existingSlugs: Set<string>): string[] {
  const earned: string[] = [];

  function award(slug: string) {
    if (!existingSlugs.has(slug)) earned.push(slug);
  }

  if (ctx.chaptersCompleted >= 1) award("premier-pas");
  if (ctx.perfectQuizzes >= 1) award("quiz-master");
  if (ctx.coursesCompleted.length >= 1) award("scholar");
  if (ctx.perfectQuizzes >= 5) award("perfectionniste");
  if (ctx.currentStreak >= 7) award("assidu");
  if (ctx.currentStreak >= 30) award("marathonien");
  // collectionneur: check after awarding others
  for (const [courseSlug, badgeSlug] of Object.entries(COURSE_BADGE_MAP)) {
    if (ctx.coursesCompleted.includes(courseSlug)) award(badgeSlug);
  }
  if (ctx.coursesCompleted.length >= courses.length) award("encyclopedie");
  if (ctx.level >= 6) award("elite");
  if (new Date(ctx.userCreatedAt) < new Date("2026-06-01")) award("early-adopter");

  // collectionneur: needs 10 badges total (existing + newly earned)
  if (existingSlugs.size + earned.length >= 10) award("collectionneur");

  return earned;
}

export async function checkAndAwardBadges(
  supabase: SupabaseClient,
  userId: string
): Promise<string[]> {
  // Fetch all needed data in parallel
  const [chaptersRes, quizRes, badgesRes, statsRes, userRes] = await Promise.all([
    supabase.from("chapter_progress").select("course_slug, chapter_number").eq("user_id", userId).eq("completed", true),
    supabase.from("quiz_results").select("course_slug, chapter_number, score, total_questions, passed").eq("user_id", userId),
    supabase.from("user_badges").select("badge_slug").eq("user_id", userId),
    supabase.from("user_stats").select("current_streak, level").eq("user_id", userId).single(),
    supabase.auth.admin.getUserById(userId),
  ]);

  const chapters = chaptersRes.data ?? [];
  const quizzes = quizRes.data ?? [];
  const existingSlugs = new Set((badgesRes.data ?? []).map((b) => b.badge_slug));

  // Compute completed courses: all chapters done + all quizzes passed
  const coursesCompleted: string[] = [];
  for (const course of courses) {
    const courseChapters = chapters.filter((c) => c.course_slug === course.slug);
    const courseQuizzes = quizzes.filter((q) => q.course_slug === course.slug && q.passed);
    if (courseChapters.length >= course.chapters && courseQuizzes.length >= course.chapters) {
      coursesCompleted.push(course.slug);
    }
  }

  const perfectQuizzes = quizzes.filter((q) => q.score === q.total_questions).length;

  const ctx: CheckContext = {
    chaptersCompleted: chapters.length,
    perfectQuizzes,
    coursesCompleted,
    currentStreak: statsRes.data?.current_streak ?? 0,
    totalBadges: existingSlugs.size,
    level: statsRes.data?.level ?? 1,
    userCreatedAt: userRes.data?.user?.created_at ?? new Date().toISOString(),
  };

  const newBadges = evaluateBadges(ctx, existingSlugs);

  // Insert new badges
  if (newBadges.length > 0) {
    await supabase.from("user_badges").insert(
      newBadges.map((slug) => ({ user_id: userId, badge_slug: slug }))
    );
  }

  return newBadges;
}
```

- [ ] **Step 2: Commit**

```bash
cd /opt/milane/learn-ai
git add src/lib/badges.ts
git commit -m "feat: add badge definitions and check-and-award logic"
```

---

### Task 4: Progress Award API Route

**Files:**
- Create: `src/app/api/progress/award/route.ts`

This is the central route called after quiz/chapter completion. It computes XP, updates streak, checks badges, and refreshes the leaderboard.

- [ ] **Step 1: Install nanoid**

```bash
cd /opt/milane/learn-ai && npm install nanoid
```

- [ ] **Step 2: Create the award route**

```typescript
// src/app/api/progress/award/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { XP_REWARDS, computeLevel, computeQuizXp } from "@/lib/xp";
import { checkAndAwardBadges } from "@/lib/badges";
import { courses } from "@/lib/courses";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { type, courseSlug, chapterNumber, score, totalQuestions } = body as {
      type: "chapter" | "quiz";
      courseSlug: string;
      chapterNumber: number;
      score?: number;
      totalQuestions?: number;
    };

    const serviceDb = getServiceSupabase();
    let xpGained = 0;

    // Ensure user_stats row exists
    await serviceDb.from("user_stats").upsert(
      { user_id: user.id },
      { onConflict: "user_id", ignoreDuplicates: true }
    );

    // Fetch current stats
    const { data: stats } = await serviceDb
      .from("user_stats")
      .select("total_xp, current_streak, longest_streak, last_activity")
      .eq("user_id", user.id)
      .single();

    let currentXp = stats?.total_xp ?? 0;
    let currentStreak = stats?.current_streak ?? 0;
    let longestStreak = stats?.longest_streak ?? 0;

    // Update streak
    const lastActivity = stats?.last_activity ? new Date(stats.last_activity) : null;
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const lastDate = lastActivity?.toISOString().slice(0, 10);

    if (lastDate !== today) {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);

      if (lastDate === yesterdayStr) {
        currentStreak += 1;
        xpGained += XP_REWARDS.DAILY_STREAK;
      } else if (lastDate !== today) {
        currentStreak = 1;
        xpGained += XP_REWARDS.DAILY_STREAK;
      }
      if (currentStreak > longestStreak) longestStreak = currentStreak;
    }

    if (type === "chapter") {
      // Check if already awarded (idempotent)
      const { data: existing } = await serviceDb
        .from("chapter_progress")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_slug", courseSlug)
        .eq("chapter_number", chapterNumber)
        .eq("completed", true)
        .maybeSingle();

      // Only award XP if this is newly completed (the quiz component already upserted)
      // We check by looking at the updated_at timing or simply award once per chapter
      if (!existing || (now.getTime() - new Date(stats?.last_activity ?? 0).getTime() < 30000)) {
        xpGained += XP_REWARDS.CHAPTER_COMPLETE;
      }
    }

    if (type === "quiz" && score !== undefined && totalQuestions !== undefined) {
      // Check previous best score for this quiz
      const { data: prevQuiz } = await serviceDb
        .from("quiz_results")
        .select("score, total_questions")
        .eq("user_id", user.id)
        .eq("course_slug", courseSlug)
        .eq("chapter_number", chapterNumber)
        .maybeSingle();

      const prevXp = prevQuiz ? computeQuizXp(prevQuiz.score, prevQuiz.total_questions) : 0;
      const newXp = computeQuizXp(score, totalQuestions);

      // Only award the difference (improvement)
      if (newXp > prevXp) {
        xpGained += (newXp - prevXp);
      }

      // Check if course is now complete → bonus XP
      const course = courses.find((c) => c.slug === courseSlug);
      if (course) {
        const { data: allChapters } = await serviceDb
          .from("chapter_progress")
          .select("chapter_number")
          .eq("user_id", user.id)
          .eq("course_slug", courseSlug)
          .eq("completed", true);

        const { data: allQuizzes } = await serviceDb
          .from("quiz_results")
          .select("chapter_number")
          .eq("user_id", user.id)
          .eq("course_slug", courseSlug)
          .eq("passed", true);

        if (
          (allChapters?.length ?? 0) >= course.chapters &&
          (allQuizzes?.length ?? 0) >= course.chapters
        ) {
          // Check if course completion bonus already awarded (check if we had all chapters before)
          const prevChapterCount = (allChapters?.length ?? 0) - (type === "chapter" ? 1 : 0);
          const prevQuizCount = (allQuizzes?.length ?? 0) - (type === "quiz" ? 1 : 0);
          if (prevChapterCount < course.chapters || prevQuizCount < course.chapters) {
            xpGained += XP_REWARDS.COURSE_COMPLETE;
          }
        }
      }
    }

    // Update stats
    const newTotalXp = currentXp + xpGained;
    const newLevel = computeLevel(newTotalXp);

    await serviceDb
      .from("user_stats")
      .update({
        total_xp: newTotalXp,
        level: newLevel,
        current_streak: currentStreak,
        longest_streak: longestStreak,
        last_activity: now.toISOString(),
        updated_at: now.toISOString(),
      })
      .eq("user_id", user.id);

    // Check and award badges
    const newBadges = await checkAndAwardBadges(serviceDb, user.id);

    // Refresh leaderboard (non-blocking)
    serviceDb.rpc("refresh_leaderboard_view").then(() => {}).catch(() => {});

    return NextResponse.json({
      xp_gained: xpGained,
      total_xp: newTotalXp,
      level: newLevel,
      current_streak: currentStreak,
      badges_earned: newBadges,
    });
  } catch (error) {
    console.error("Progress award error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
```

- [ ] **Step 3: Add leaderboard refresh function to migration**

Add to the end of `supabase/migrations/20260416_progression_gamification.sql`:

```sql
-- Function to refresh materialized view (called from app)
CREATE OR REPLACE FUNCTION refresh_leaderboard_view()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_view;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

- [ ] **Step 4: Commit**

```bash
cd /opt/milane/learn-ai
git add src/app/api/progress/award/route.ts supabase/migrations/20260416_progression_gamification.sql package.json package-lock.json
git commit -m "feat: add progress award API route with XP, streak, badge computation"
```

---

### Task 5: Wire Quiz Components to Award API

**Files:**
- Modify: `src/components/quiz/quiz-container.tsx`
- Modify: `src/components/quiz/inline-quiz.tsx`
- Create: `src/hooks/useProgressAward.ts`

- [ ] **Step 1: Create the award hook**

```typescript
// src/hooks/useProgressAward.ts

"use client";

import { useState, useCallback } from "react";

export interface AwardResult {
  xp_gained: number;
  total_xp: number;
  level: number;
  current_streak: number;
  badges_earned: string[];
}

export function useProgressAward() {
  const [lastAward, setLastAward] = useState<AwardResult | null>(null);

  const awardProgress = useCallback(async (params: {
    type: "chapter" | "quiz";
    courseSlug: string;
    chapterNumber: number;
    score?: number;
    totalQuestions?: number;
  }): Promise<AwardResult | null> => {
    try {
      const res = await fetch("/api/progress/award", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });
      if (!res.ok) return null;
      const data: AwardResult = await res.json();
      setLastAward(data);
      return data;
    } catch {
      return null;
    }
  }, []);

  return { awardProgress, lastAward };
}
```

- [ ] **Step 2: Add award call to quiz-container.tsx**

In `src/components/quiz/quiz-container.tsx`, add after the existing Supabase upserts (after line 86, inside the `if (user)` block):

```typescript
// After the existing chapter_progress upsert, add:
          // Award XP and check badges
          fetch("/api/progress/award", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "quiz",
              courseSlug,
              chapterNumber,
              score: finalScore,
              totalQuestions: questions.length,
            }),
          }).catch(() => {});
```

- [ ] **Step 3: Add award call to inline-quiz.tsx**

In `src/components/quiz/inline-quiz.tsx`, add after the existing Supabase upserts (after line 65, inside the `if (user)` block):

```typescript
          // Award XP and check badges
          fetch("/api/progress/award", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "quiz",
              courseSlug,
              chapterNumber,
              score: finalScore,
              totalQuestions: questions.length,
            }),
          }).catch(() => {});
```

- [ ] **Step 4: Commit**

```bash
cd /opt/milane/learn-ai
git add src/hooks/useProgressAward.ts src/components/quiz/quiz-container.tsx src/components/quiz/inline-quiz.tsx
git commit -m "feat: wire quiz components to progress award API"
```

---

## Phase 2: Dashboard Refonte

### Task 6: Dashboard Server Page — Fetch All Data from Supabase

**Files:**
- Modify: `src/app/compte/page.tsx`

- [ ] **Step 1: Rewrite the server page to fetch stats, badges, progress**

```typescript
// src/app/compte/page.tsx

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCourseBySlug, FREE_SLUGS, PREMIUM_SLUGS, courses } from "@/lib/courses";
import { AccountDashboard } from "@/components/account/account-dashboard";
import { BADGES } from "@/lib/badges";
import { getLevelInfo, getNextLevelInfo } from "@/lib/xp";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mon compte",
  robots: { index: false, follow: false },
};

export default async function ComptePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  // Fetch all data in parallel
  const [profileRes, purchasesRes, statsRes, badgesRes, chaptersRes, quizzesRes, certsRes, rankRes] = await Promise.all([
    supabase.from("profiles").select("subscription_status, full_name").eq("id", user.id).single(),
    supabase.from("purchases").select("id, course_slug, created_at").order("created_at", { ascending: false }),
    supabase.from("user_stats").select("*").eq("user_id", user.id).maybeSingle(),
    supabase.from("user_badges").select("badge_slug, earned_at").eq("user_id", user.id),
    supabase.from("chapter_progress").select("course_slug, chapter_number").eq("user_id", user.id).eq("completed", true),
    supabase.from("quiz_results").select("course_slug, chapter_number, score, total_questions, passed").eq("user_id", user.id),
    supabase.from("certificates").select("course_slug, verify_code, score, issued_at").eq("user_id", user.id),
    supabase.rpc("get_user_rank", { p_user_id: user.id }).maybeSingle(),
  ]);

  const isPro = profileRes.data?.subscription_status === "pro";
  const purchases = purchasesRes.data ?? [];
  const stats = statsRes.data ?? { total_xp: 0, level: 1, current_streak: 0, longest_streak: 0 };
  const earnedBadges = new Set((badgesRes.data ?? []).map((b) => b.badge_slug));
  const chapters = chaptersRes.data ?? [];
  const quizzes = quizzesRes.data ?? [];
  const certs = certsRes.data ?? [];

  // Build course access list
  const purchasedSlugs = new Set(purchases.map((p) => p.course_slug));
  const accessibleSlugs = new Set([
    ...FREE_SLUGS,
    ...purchases.map((p) => p.course_slug),
    ...(isPro ? PREMIUM_SLUGS : []),
  ]);

  // Build per-course progress
  const courseProgress = courses.map((course) => {
    const courseChapters = chapters.filter((c) => c.course_slug === course.slug);
    const courseQuizzes = quizzes.filter((q) => q.course_slug === course.slug);
    const passedQuizzes = courseQuizzes.filter((q) => q.passed);
    const avgScore = courseQuizzes.length > 0
      ? Math.round(courseQuizzes.reduce((s, q) => s + (q.score / q.total_questions) * 100, 0) / courseQuizzes.length)
      : 0;
    const completed = courseChapters.length >= course.chapters && passedQuizzes.length >= course.chapters;
    const cert = certs.find((c) => c.course_slug === course.slug);
    const accessible = accessibleSlugs.has(course.slug);

    return {
      slug: course.slug,
      title: course.title,
      color: course.color,
      totalChapters: course.chapters,
      completedChapters: courseChapters.length,
      avgScore,
      completed,
      accessible,
      certificateCode: cert?.verify_code ?? null,
      lastChapter: courseChapters.length > 0
        ? Math.max(...courseChapters.map((c) => c.chapter_number))
        : 0,
    };
  });

  // Build badges data
  const badgesData = BADGES.map((b) => ({
    ...b,
    earned: earnedBadges.has(b.slug),
    earnedAt: (badgesRes.data ?? []).find((ub) => ub.badge_slug === b.slug)?.earned_at ?? null,
  }));

  const levelInfo = getLevelInfo(stats.level);
  const nextLevel = getNextLevelInfo(stats.level);

  // Stats
  const totalQuizzes = quizzes.length;
  const passedQuizzes = quizzes.filter((q) => q.passed).length;
  const avgSuccessRate = totalQuizzes > 0 ? Math.round((passedQuizzes / totalQuizzes) * 100) : 0;

  return (
    <AccountDashboard
      user={{
        email: user.email ?? "",
        firstName: (user.user_metadata?.first_name as string) ?? "",
        lastName: (user.user_metadata?.last_name as string) ?? "",
        fullName: profileRes.data?.full_name ?? "",
      }}
      stats={{
        totalXp: stats.total_xp,
        level: stats.level,
        levelName: levelInfo.name,
        nextLevelName: nextLevel?.name ?? null,
        nextLevelXp: nextLevel?.minXp ?? null,
        currentLevelXp: levelInfo.minXp,
        currentStreak: stats.current_streak,
        longestStreak: stats.longest_streak,
      }}
      courseProgress={courseProgress}
      badges={badgesData}
      kpis={{
        chaptersCompleted: chapters.length,
        quizzesPassed: passedQuizzes,
        avgSuccessRate,
        totalXp: stats.total_xp,
      }}
      rank={rankRes.data ?? null}
      isPro={isPro}
    />
  );
}
```

- [ ] **Step 2: Add the `get_user_rank` RPC function to the migration**

Append to `supabase/migrations/20260416_progression_gamification.sql`:

```sql
CREATE OR REPLACE FUNCTION get_user_rank(p_user_id uuid)
RETURNS TABLE(rank bigint, total_xp integer, display_name text) AS $$
BEGIN
  RETURN QUERY
  SELECT lv.rank, lv.total_xp::integer, lv.display_name
  FROM leaderboard_view lv
  WHERE lv.user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

- [ ] **Step 3: Commit**

```bash
cd /opt/milane/learn-ai
git add src/app/compte/page.tsx supabase/migrations/20260416_progression_gamification.sql
git commit -m "feat: refactor dashboard server page to fetch stats, badges, progress from Supabase"
```

---

### Task 7: Dashboard Client Component — Full Refonte

**Files:**
- Rewrite: `src/components/account/account-dashboard.tsx`
- Create: `src/components/account/profile-level.tsx`
- Create: `src/components/account/course-progress-card.tsx`
- Create: `src/components/account/badge-grid.tsx`
- Create: `src/components/account/stats-cards.tsx`

- [ ] **Step 1: Create profile-level component**

```typescript
// src/components/account/profile-level.tsx

"use client";

import { Flame, LogOut, Zap } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface ProfileLevelProps {
  user: { email: string; firstName: string; lastName: string };
  stats: {
    totalXp: number;
    level: number;
    levelName: string;
    nextLevelName: string | null;
    nextLevelXp: number | null;
    currentLevelXp: number;
    currentStreak: number;
  };
  isPro: boolean;
}

export function ProfileLevel({ user, stats, isPro }: ProfileLevelProps) {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const xpProgress = stats.nextLevelXp
    ? ((stats.totalXp - stats.currentLevelXp) / (stats.nextLevelXp - stats.currentLevelXp)) * 100
    : 100;

  async function handleManageSubscription() {
    const res = await fetch("/api/stripe/portal", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-bold text-white">
            {user.firstName.charAt(0)}{user.lastName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
              {isPro && (
                <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-medium text-purple-400">PRO</span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {stats.currentStreak > 0 && (
            <div className="flex items-center gap-1.5 rounded-lg bg-orange-500/10 px-3 py-2 text-sm font-medium text-orange-400">
              <Flame className="h-4 w-4" />
              {stats.currentStreak}j
            </div>
          )}
          {isPro && (
            <button
              onClick={handleManageSubscription}
              className="rounded-lg border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Gérer abonnement
            </button>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-red-500/30 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Level & XP Bar */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-semibold">{stats.levelName}</span>
            <span className="text-xs text-muted-foreground">Niv. {stats.level}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {stats.totalXp} XP
            {stats.nextLevelXp && ` / ${stats.nextLevelXp} XP`}
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-border/30">
          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 transition-all duration-700"
            style={{ width: `${Math.min(xpProgress, 100)}%` }}
          />
        </div>
        {stats.nextLevelName && (
          <p className="mt-1 text-xs text-muted-foreground">
            Encore {stats.nextLevelXp! - stats.totalXp} XP pour {stats.nextLevelName}
          </p>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create course-progress-card component**

```typescript
// src/components/account/course-progress-card.tsx

"use client";

import Link from "next/link";
import { BookOpen, Download, CheckCircle2, PlayCircle, Lock } from "lucide-react";

interface CourseProgressProps {
  course: {
    slug: string;
    title: string;
    color: string;
    totalChapters: number;
    completedChapters: number;
    avgScore: number;
    completed: boolean;
    accessible: boolean;
    certificateCode: string | null;
    lastChapter: number;
  };
}

export function CourseProgressCard({ course }: CourseProgressProps) {
  const percentage = course.totalChapters > 0
    ? Math.round((course.completedChapters / course.totalChapters) * 100)
    : 0;

  if (!course.accessible) {
    return (
      <div className="rounded-xl border border-border/30 bg-card/30 p-5 opacity-60">
        <div className="flex items-center gap-4">
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${course.color}`}>
            <Lock className="h-6 w-6 text-white/70" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-muted-foreground">{course.title}</h3>
            <p className="text-sm text-muted-foreground/70">Cours premium</p>
          </div>
          <Link
            href="/cours"
            className="rounded-lg bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 hover:bg-purple-500/20"
          >
            Passer Pro
          </Link>
        </div>
      </div>
    );
  }

  const nextChapter = course.completed ? 1 : course.lastChapter + 1;

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative">
            <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" className="text-border/30" />
              <circle
                cx="32" cy="32" r="28" fill="none" stroke="url(#progress-gradient)" strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(percentage / 100) * 175.9} 175.9`}
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">{percentage}%</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{course.title}</h3>
              {course.completed && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
            </div>
            <p className="text-sm text-muted-foreground">
              {course.completedChapters}/{course.totalChapters} chapitres
              {course.avgScore > 0 && ` · Score moyen : ${course.avgScore}%`}
            </p>
            <div className="mt-2 h-1.5 w-full max-w-[200px] overflow-hidden rounded-full bg-border/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {course.certificateCode && (
            <a
              href={`/api/certificate/${course.slug}`}
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20"
            >
              <Download className="h-3.5 w-3.5" />
              Certificat
            </a>
          )}
          <Link
            href={`/cours/${course.slug}/chapitres/${nextChapter}`}
            className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-400 hover:bg-purple-500/20"
          >
            <PlayCircle className="h-3.5 w-3.5" />
            {course.completed ? "Revoir" : "Continuer"}
          </Link>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create badge-grid component**

```typescript
// src/components/account/badge-grid.tsx

"use client";

import {
  Footprints, Trophy, GraduationCap, Languages, Star, Flame, Medal,
  GalleryVertical, Terminal, Briefcase, Palette, Wrench, BookOpen, Crown, Rocket, Lock,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  footprints: Footprints, trophy: Trophy, "graduation-cap": GraduationCap,
  languages: Languages, star: Star, flame: Flame, medal: Medal,
  "gallery-vertical": GalleryVertical, terminal: Terminal, briefcase: Briefcase,
  palette: Palette, wrench: Wrench, "book-open": BookOpen, crown: Crown, rocket: Rocket,
};

interface Badge {
  slug: string;
  name: string;
  icon: string;
  description: string;
  earned: boolean;
  earnedAt: string | null;
}

export function BadgeGrid({ badges }: { badges: Badge[] }) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <Trophy className="h-5 w-5 text-yellow-400" />
        Badges
        <span className="text-sm text-muted-foreground">
          {badges.filter((b) => b.earned).length}/{badges.length}
        </span>
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {badges.map((badge) => {
          const IconComponent = ICON_MAP[badge.icon] ?? Star;
          return (
            <div
              key={badge.slug}
              className={`group relative flex flex-col items-center gap-2 rounded-xl border p-3 text-center transition-all ${
                badge.earned
                  ? "border-yellow-500/30 bg-yellow-500/5"
                  : "border-border/30 opacity-40"
              }`}
              title={badge.description}
            >
              {badge.earned ? (
                <IconComponent className="h-8 w-8 text-yellow-400" />
              ) : (
                <Lock className="h-8 w-8 text-muted-foreground/50" />
              )}
              <span className="text-[11px] font-medium leading-tight">{badge.name}</span>
              {!badge.earned && (
                <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/80 text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 p-2">
                  {badge.description}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create stats-cards component**

```typescript
// src/components/account/stats-cards.tsx

"use client";

import { BookOpen, CheckCircle2, Target, Zap, Users } from "lucide-react";
import Link from "next/link";

interface StatsCardsProps {
  kpis: {
    chaptersCompleted: number;
    quizzesPassed: number;
    avgSuccessRate: number;
    totalXp: number;
  };
  rank: { rank: number; total_xp: number } | null;
}

export function StatsCards({ kpis, rank }: StatsCardsProps) {
  const cards = [
    { label: "Chapitres terminés", value: kpis.chaptersCompleted, icon: BookOpen, color: "text-blue-400" },
    { label: "Quiz réussis", value: kpis.quizzesPassed, icon: CheckCircle2, color: "text-emerald-400" },
    { label: "Taux de réussite", value: `${kpis.avgSuccessRate}%`, icon: Target, color: "text-amber-400" },
    { label: "XP total", value: kpis.totalXp, icon: Zap, color: "text-yellow-400" },
  ];

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <Target className="h-5 w-5 text-purple-400" />
        Statistiques
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-border/30 bg-background/50 p-4 text-center">
            <card.icon className={`mx-auto mb-2 h-5 w-5 ${card.color}`} />
            <p className="text-2xl font-bold">{card.value}</p>
            <p className="text-[11px] text-muted-foreground">{card.label}</p>
          </div>
        ))}
      </div>
      {rank && (
        <div className="mt-4 flex items-center justify-between rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-400" />
            <span className="text-sm">Tu es <strong>#{rank.rank}</strong> au classement</span>
          </div>
          <Link href="/leaderboard" className="text-sm font-medium text-purple-400 hover:underline">
            Voir le classement →
          </Link>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 5: Rewrite account-dashboard.tsx as thin wrapper**

```typescript
// src/components/account/account-dashboard.tsx

"use client";

import { ProfileLevel } from "./profile-level";
import { CourseProgressCard } from "./course-progress-card";
import { BadgeGrid } from "./badge-grid";
import { StatsCards } from "./stats-cards";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface AccountDashboardProps {
  user: { email: string; firstName: string; lastName: string; fullName: string };
  stats: {
    totalXp: number;
    level: number;
    levelName: string;
    nextLevelName: string | null;
    nextLevelXp: number | null;
    currentLevelXp: number;
    currentStreak: number;
    longestStreak: number;
  };
  courseProgress: {
    slug: string;
    title: string;
    color: string;
    totalChapters: number;
    completedChapters: number;
    avgScore: number;
    completed: boolean;
    accessible: boolean;
    certificateCode: string | null;
    lastChapter: number;
  }[];
  badges: {
    slug: string;
    name: string;
    icon: string;
    description: string;
    earned: boolean;
    earnedAt: string | null;
  }[];
  kpis: {
    chaptersCompleted: number;
    quizzesPassed: number;
    avgSuccessRate: number;
    totalXp: number;
  };
  rank: { rank: number; total_xp: number } | null;
  isPro: boolean;
}

export function AccountDashboard({ user, stats, courseProgress, badges, kpis, rank, isPro }: AccountDashboardProps) {
  const accessibleCourses = courseProgress.filter((c) => c.accessible);
  const lockedCourses = courseProgress.filter((c) => !c.accessible);

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="animate-fade-in space-y-6">
          {/* Section 1: Profile & Level */}
          <ProfileLevel user={user} stats={stats} isPro={isPro} />

          {/* Section 2: Course Progress */}
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5 text-purple-400" />
              Mes formations
            </h2>
            {accessibleCourses.length === 0 ? (
              <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm">
                <BookOpen className="mx-auto mb-4 h-10 w-10 text-muted-foreground/50" />
                <p className="mb-2 text-muted-foreground">Aucune formation en cours</p>
                <Link href="/cours" className="btn-gradient mt-4 inline-block rounded-lg px-6 py-3 text-sm font-medium text-white">
                  Découvrir les formations
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {accessibleCourses.map((course) => (
                  <CourseProgressCard key={course.slug} course={course} />
                ))}
              </div>
            )}
            {lockedCourses.length > 0 && (
              <div className="mt-4 grid gap-3">
                {lockedCourses.map((course) => (
                  <CourseProgressCard key={course.slug} course={course} />
                ))}
              </div>
            )}
          </div>

          {/* Section 3: Badges */}
          <BadgeGrid badges={badges} />

          {/* Section 4: Stats */}
          <StatsCards kpis={kpis} rank={rank} />
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 6: Commit**

```bash
cd /opt/milane/learn-ai
git add src/components/account/
git commit -m "feat: refonte dashboard — profile/level, course progress, badges, stats"
```

---

## Phase 3: Certificates

### Task 8: Certificate PDF Generation

**Files:**
- Create: `src/lib/certificates.ts`
- Create: `src/app/api/certificate/[slug]/route.ts`

- [ ] **Step 1: Install dependencies**

```bash
cd /opt/milane/learn-ai && npm install nanoid qrcode @types/qrcode
```

- [ ] **Step 2: Create certificate library**

```typescript
// src/lib/certificates.ts

import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import QRCode from "qrcode";
import { nanoid } from "nanoid";
import { siteConfig } from "@/config/site";

interface CertificateData {
  userName: string;
  courseTitle: string;
  score: number;
  date: string;
  verifyCode: string;
  courseColor: string;
}

export function generateVerifyCode(): string {
  return nanoid(12);
}

export async function generateCertificatePDF(data: CertificateData): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([842, 595]); // A4 landscape
  const { width, height } = page.getSize();

  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);

  // Background
  page.drawRectangle({ x: 0, y: 0, width, height, color: rgb(0.07, 0.07, 0.12) });

  // Border
  const borderInset = 20;
  page.drawRectangle({
    x: borderInset, y: borderInset,
    width: width - borderInset * 2, height: height - borderInset * 2,
    borderColor: rgb(0.6, 0.4, 1), borderWidth: 2,
  });

  // Title
  page.drawText("CERTIFICAT DE RÉUSSITE", {
    x: width / 2 - helveticaBold.widthOfTextAtSize("CERTIFICAT DE RÉUSSITE", 28) / 2,
    y: height - 80,
    size: 28,
    font: helveticaBold,
    color: rgb(0.8, 0.7, 1),
  });

  // LearnAI
  page.drawText(siteConfig.name, {
    x: width / 2 - helveticaBold.widthOfTextAtSize(siteConfig.name, 16) / 2,
    y: height - 110,
    size: 16,
    font: helveticaBold,
    color: rgb(0.6, 0.4, 1),
  });

  // Decorative line
  page.drawLine({
    start: { x: 200, y: height - 130 },
    end: { x: width - 200, y: height - 130 },
    color: rgb(0.4, 0.3, 0.7),
    thickness: 1,
  });

  // "Décerné à"
  const decerneText = "Décerné à";
  page.drawText(decerneText, {
    x: width / 2 - helvetica.widthOfTextAtSize(decerneText, 14) / 2,
    y: height - 170,
    size: 14,
    font: helvetica,
    color: rgb(0.6, 0.6, 0.7),
  });

  // User name
  page.drawText(data.userName, {
    x: width / 2 - helveticaBold.widthOfTextAtSize(data.userName, 32) / 2,
    y: height - 210,
    size: 32,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });

  // "Pour avoir complété"
  const pourText = "Pour avoir complété avec succès";
  page.drawText(pourText, {
    x: width / 2 - helvetica.widthOfTextAtSize(pourText, 14) / 2,
    y: height - 260,
    size: 14,
    font: helvetica,
    color: rgb(0.6, 0.6, 0.7),
  });

  // Course title
  page.drawText(data.courseTitle, {
    x: width / 2 - helveticaBold.widthOfTextAtSize(data.courseTitle, 24) / 2,
    y: height - 295,
    size: 24,
    font: helveticaBold,
    color: rgb(0.8, 0.7, 1),
  });

  // Score
  const scoreText = `Score moyen : ${data.score}%`;
  page.drawText(scoreText, {
    x: width / 2 - helvetica.widthOfTextAtSize(scoreText, 14) / 2,
    y: height - 330,
    size: 14,
    font: helvetica,
    color: rgb(0.7, 0.7, 0.8),
  });

  // Date
  const dateText = `Délivré le ${data.date}`;
  page.drawText(dateText, {
    x: width / 2 - helvetica.widthOfTextAtSize(dateText, 12) / 2,
    y: height - 360,
    size: 12,
    font: helvetica,
    color: rgb(0.5, 0.5, 0.6),
  });

  // QR Code
  const verifyUrl = `${siteConfig.url}/verify/${data.verifyCode}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, { width: 100, margin: 1, color: { dark: "#c4b5fd", light: "#00000000" } });
  const qrImageBytes = Buffer.from(qrDataUrl.split(",")[1], "base64");
  const qrImage = await doc.embedPng(qrImageBytes);
  page.drawImage(qrImage, { x: width - 140, y: 40, width: 90, height: 90 });

  // Verify text
  const verifyText = `Vérifier : ${verifyUrl}`;
  page.drawText(verifyText, {
    x: 40,
    y: 45,
    size: 9,
    font: helvetica,
    color: rgb(0.4, 0.4, 0.5),
  });

  return doc.save();
}
```

- [ ] **Step 3: Create certificate API route**

```typescript
// src/app/api/certificate/[slug]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { getCourseBySlug } from "@/lib/courses";
import { generateCertificatePDF, generateVerifyCode } from "@/lib/certificates";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const course = getCourseBySlug(slug);
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const serviceDb = getServiceSupabase();

  // Check eligibility: all chapters completed + all quizzes passed
  const [chaptersRes, quizzesRes] = await Promise.all([
    serviceDb.from("chapter_progress").select("chapter_number").eq("user_id", user.id).eq("course_slug", slug).eq("completed", true),
    serviceDb.from("quiz_results").select("chapter_number, score, total_questions").eq("user_id", user.id).eq("course_slug", slug).eq("passed", true),
  ]);

  const completedChapters = chaptersRes.data?.length ?? 0;
  const passedQuizzes = quizzesRes.data?.length ?? 0;

  if (completedChapters < course.chapters || passedQuizzes < course.chapters) {
    return NextResponse.json({
      error: "Not eligible",
      completedChapters,
      requiredChapters: course.chapters,
      passedQuizzes,
    }, { status: 403 });
  }

  // Get or create certificate
  let { data: cert } = await serviceDb
    .from("certificates")
    .select("*")
    .eq("user_id", user.id)
    .eq("course_slug", slug)
    .maybeSingle();

  const allQuizzes = quizzesRes.data ?? [];
  const avgScore = Math.round(
    allQuizzes.reduce((s, q) => s + (q.score / q.total_questions) * 100, 0) / allQuizzes.length
  );

  if (!cert) {
    const verifyCode = generateVerifyCode();
    const { data: newCert } = await serviceDb
      .from("certificates")
      .insert({
        user_id: user.id,
        course_slug: slug,
        score: avgScore,
        verify_code: verifyCode,
      })
      .select()
      .single();
    cert = newCert;
  }

  if (!cert) {
    return NextResponse.json({ error: "Failed to create certificate" }, { status: 500 });
  }

  // Get user name
  const { data: profile } = await serviceDb
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  const userName = profile?.full_name
    || `${user.user_metadata?.first_name ?? ""} ${user.user_metadata?.last_name ?? ""}`.trim()
    || user.email
    || "Apprenant";

  const pdfBytes = await generateCertificatePDF({
    userName,
    courseTitle: course.title,
    score: cert.score,
    date: new Date(cert.issued_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
    verifyCode: cert.verify_code,
    courseColor: course.color,
  });

  return new NextResponse(pdfBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="certificat-${slug}.pdf"`,
      "Cache-Control": "private, max-age=3600",
    },
  });
}
```

- [ ] **Step 4: Commit**

```bash
cd /opt/milane/learn-ai
git add src/lib/certificates.ts src/app/api/certificate/\[slug\]/route.ts package.json package-lock.json
git commit -m "feat: add PDF certificate generation with QR verification"
```

---

### Task 9: Public Verification Page

**Files:**
- Create: `src/app/verify/[code]/page.tsx`

- [ ] **Step 1: Create verification page**

```typescript
// src/app/verify/[code]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { getCourseBySlug } from "@/lib/courses";
import { siteConfig } from "@/config/site";
import { CheckCircle2, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const serviceDb = getServiceSupabase();

  const { data: cert } = await serviceDb
    .from("certificates")
    .select("course_slug, score, user_id")
    .eq("verify_code", code)
    .maybeSingle();

  if (!cert) return { title: "Certificat introuvable" };

  const course = getCourseBySlug(cert.course_slug);
  const { data: profile } = await serviceDb.from("profiles").select("full_name").eq("id", cert.user_id).single();

  return {
    title: `Certificat ${siteConfig.name} — ${course?.title ?? cert.course_slug}`,
    description: `${profile?.full_name ?? "Apprenant"} a terminé ${course?.title ?? cert.course_slug} avec un score de ${cert.score}%`,
    openGraph: {
      title: `Certificat ${siteConfig.name} — ${course?.title ?? cert.course_slug}`,
      description: `${profile?.full_name ?? "Apprenant"} a terminé ${course?.title ?? cert.course_slug} avec un score de ${cert.score}%`,
      url: `${siteConfig.url}/verify/${code}`,
      siteName: siteConfig.name,
    },
  };
}

export default async function VerifyPage({ params }: Props) {
  const { code } = await params;
  const serviceDb = getServiceSupabase();

  const { data: cert } = await serviceDb
    .from("certificates")
    .select("*")
    .eq("verify_code", code)
    .maybeSingle();

  if (!cert) notFound();

  const course = getCourseBySlug(cert.course_slug);
  const { data: profile } = await serviceDb.from("profiles").select("full_name").eq("id", cert.user_id).single();

  return (
    <div className="bg-grid min-h-screen">
      <section className="mx-auto max-w-lg px-4 py-24">
        <div className="animate-fade-in rounded-2xl border border-emerald-500/30 bg-card/50 p-8 text-center backdrop-blur-sm">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <ShieldCheck className="h-10 w-10 text-emerald-400" />
          </div>

          <h1 className="mb-2 text-2xl font-bold">Certificat Authentique</h1>
          <p className="mb-8 text-sm text-muted-foreground">
            Ce certificat a été vérifié et est authentique.
          </p>

          <div className="space-y-4 text-left">
            <div className="rounded-lg border border-border/30 bg-background/50 p-4">
              <p className="text-xs text-muted-foreground">Apprenant</p>
              <p className="text-lg font-semibold">{profile?.full_name ?? "Apprenant"}</p>
            </div>
            <div className="rounded-lg border border-border/30 bg-background/50 p-4">
              <p className="text-xs text-muted-foreground">Formation</p>
              <p className="text-lg font-semibold">{course?.title ?? cert.course_slug}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/30 bg-background/50 p-4">
                <p className="text-xs text-muted-foreground">Score</p>
                <p className="text-lg font-semibold">{cert.score}%</p>
              </div>
              <div className="rounded-lg border border-border/30 bg-background/50 p-4">
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="text-lg font-semibold">
                  {new Date(cert.issued_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            Vérifié par {siteConfig.name}
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /opt/milane/learn-ai
git add src/app/verify/
git commit -m "feat: add public certificate verification page with OG metadata"
```

---

## Phase 4: Leaderboard

### Task 10: Leaderboard Page & API

**Files:**
- Create: `src/app/api/leaderboard/route.ts`
- Create: `src/app/leaderboard/page.tsx`

- [ ] **Step 1: Create leaderboard API**

```typescript
// src/app/api/leaderboard/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const serviceDb = getServiceSupabase();

  // Top 50
  const { data: top } = await serviceDb
    .from("leaderboard_view")
    .select("user_id, display_name, total_xp, level, rank")
    .order("rank")
    .limit(50);

  // Get current user rank if authenticated
  let userRank = null;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await serviceDb
        .from("leaderboard_view")
        .select("user_id, display_name, total_xp, level, rank")
        .eq("user_id", user.id)
        .maybeSingle();
      userRank = data;
    }
  } catch { /* not authenticated */ }

  return NextResponse.json({ top: top ?? [], userRank });
}
```

- [ ] **Step 2: Create leaderboard page**

```typescript
// src/app/leaderboard/page.tsx

import type { Metadata } from "next";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { createClient } from "@/lib/supabase/server";
import { siteConfig } from "@/config/site";
import { getLevelInfo } from "@/lib/xp";
import { Trophy, Medal, Crown, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Classement",
  description: `Classement des apprenants ${siteConfig.name}`,
};

export const revalidate = 300; // 5 min ISR

export default async function LeaderboardPage() {
  const serviceDb = getServiceSupabase();

  const { data: top } = await serviceDb
    .from("leaderboard_view")
    .select("user_id, display_name, total_xp, level, rank")
    .order("rank")
    .limit(50);

  // Get current user
  let currentUserId: string | null = null;
  let userRank: typeof top extends (infer T)[] ? T : never | null = null;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      currentUserId = user.id;
      const { data } = await serviceDb
        .from("leaderboard_view")
        .select("user_id, display_name, total_xp, level, rank")
        .eq("user_id", user.id)
        .maybeSingle();
      userRank = data;
    }
  } catch { /* not authenticated */ }

  const entries = top ?? [];
  const rankIcons = [Crown, Trophy, Medal];
  const rankColors = ["text-yellow-400", "text-gray-300", "text-amber-600"];

  return (
    <div className="bg-grid min-h-screen">
      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="animate-fade-in">
          <h1 className="mb-2 text-center text-3xl font-bold">Classement</h1>
          <p className="mb-8 text-center text-muted-foreground">
            Les meilleurs apprenants {siteConfig.name}
          </p>

          {/* User rank highlight */}
          {userRank && !entries.some((e) => e.user_id === currentUserId) && (
            <div className="mb-4 rounded-xl border border-purple-500/30 bg-purple-500/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-purple-400">#{userRank.rank}</span>
                  <span className="font-medium">{userRank.display_name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  {userRank.total_xp} XP
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            {entries.map((entry, idx) => {
              const RankIcon = rankIcons[idx] ?? null;
              const isCurrentUser = entry.user_id === currentUserId;
              const levelInfo = getLevelInfo(entry.level);

              return (
                <div
                  key={entry.user_id}
                  className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                    isCurrentUser
                      ? "border-purple-500/30 bg-purple-500/5"
                      : "border-border/50 bg-card/50"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    {RankIcon ? (
                      <RankIcon className={`h-6 w-6 ${rankColors[idx]}`} />
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground">#{entry.rank}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{entry.display_name}</p>
                    <p className="text-xs text-muted-foreground">{levelInfo.name}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    {entry.total_xp} XP
                  </div>
                </div>
              );
            })}
          </div>

          {entries.length === 0 && (
            <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center">
              <Trophy className="mx-auto mb-4 h-10 w-10 text-muted-foreground/50" />
              <p className="text-muted-foreground">Aucun apprenant au classement pour le moment</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /opt/milane/learn-ai
git add src/app/api/leaderboard/ src/app/leaderboard/
git commit -m "feat: add leaderboard page and API with top 50 + user rank"
```

---

## Phase 5: Share & Final Wiring

### Task 11: Share Buttons Component

**Files:**
- Create: `src/components/share/share-buttons.tsx`

- [ ] **Step 1: Create share buttons**

```typescript
// src/components/share/share-buttons.tsx

"use client";

import { useState } from "react";
import { Share2, Linkedin, Twitter, Check, Link } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  text: string;
}

export function ShareButtons({ url, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, "_blank", "width=600,height=400")}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20"
        title="Partager sur LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </button>
      <button
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, "_blank", "width=600,height=400")}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500/20"
        title="Partager sur X"
      >
        <Twitter className="h-4 w-4" />
      </button>
      <button
        onClick={handleCopy}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-border/30 text-muted-foreground hover:text-foreground"
        title="Copier le lien"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Link className="h-4 w-4" />}
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Add share buttons to course-progress-card when certificate exists**

In `src/components/account/course-progress-card.tsx`, add import at top:

```typescript
import { ShareButtons } from "@/components/share/share-buttons";
```

After the certificate download link, add:

```typescript
          {course.certificateCode && (
            <ShareButtons
              url={`https://learn-ai.fr/verify/${course.certificateCode}`}
              text={`Je viens d'obtenir mon certificat "${course.title}" sur LearnAI ! 🎓`}
            />
          )}
```

- [ ] **Step 3: Commit**

```bash
cd /opt/milane/learn-ai
git add src/components/share/ src/components/account/course-progress-card.tsx
git commit -m "feat: add social share buttons for certificates"
```

---

### Task 12: Achievement Toast Component

**Files:**
- Create: `src/components/account/achievement-toast.tsx`

- [ ] **Step 1: Create achievement toast**

```typescript
// src/components/account/achievement-toast.tsx

"use client";

import { useEffect, useState } from "react";
import { Zap, Award, X } from "lucide-react";
import type { AwardResult } from "@/hooks/useProgressAward";

interface AchievementToastProps {
  award: AwardResult | null;
}

interface ToastItem {
  id: string;
  message: string;
  icon: "xp" | "badge" | "level";
}

export function AchievementToast({ award }: AchievementToastProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    if (!award || award.xp_gained === 0 && award.badges_earned.length === 0) return;

    const newToasts: ToastItem[] = [];

    if (award.xp_gained > 0) {
      newToasts.push({
        id: `xp-${Date.now()}`,
        message: `+${award.xp_gained} XP`,
        icon: "xp",
      });
    }

    for (const badge of award.badges_earned) {
      newToasts.push({
        id: `badge-${badge}-${Date.now()}`,
        message: `Badge débloqué : ${badge}`,
        icon: "badge",
      });
    }

    setToasts((prev) => [...prev, ...newToasts]);

    // Auto-dismiss after 4 seconds
    const timer = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => !newToasts.some((n) => n.id === t.id)));
    }, 4000);

    return () => clearTimeout(timer);
  }, [award]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="animate-slide-up flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm"
        >
          {toast.icon === "xp" && <Zap className="h-5 w-5 text-yellow-400" />}
          {toast.icon === "badge" && <Award className="h-5 w-5 text-purple-400" />}
          <span className="text-sm font-medium">{toast.message}</span>
          <button
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            className="ml-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Add slide-up animation to global CSS**

In `src/app/globals.css` (or wherever Tailwind custom utilities are), add:

```css
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
```

- [ ] **Step 3: Commit**

```bash
cd /opt/milane/learn-ai
git add src/components/account/achievement-toast.tsx src/app/globals.css
git commit -m "feat: add achievement toast for XP and badge notifications"
```

---

### Task 13: Build, Test & Final Commit

- [ ] **Step 1: Run the build**

```bash
cd /opt/milane/learn-ai && npm run build
```

Fix any TypeScript errors that come up.

- [ ] **Step 2: Test manually**

Start dev server:
```bash
cd /opt/milane/learn-ai && npm run dev
```

Test:
1. Go to `/compte` — verify dashboard loads with levels, badges, stats
2. Complete a quiz — verify XP toast appears
3. Go to `/leaderboard` — verify it renders
4. If a course is completed, download certificate PDF
5. Visit `/verify/[code]` — verify public page renders

- [ ] **Step 3: Push to deploy**

```bash
cd /opt/milane/learn-ai && git push
```

Vercel will auto-deploy. Apply the SQL migration to Supabase production before testing on prod.
