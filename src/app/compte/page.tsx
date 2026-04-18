import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { courses, FREE_SLUGS, PREMIUM_SLUGS } from "@/lib/courses";
import { BADGES } from "@/lib/badges";
import { computeLevel, getLevelInfo, getNextLevelInfo } from "@/lib/xp";
import { AccountDashboard } from "@/components/account/account-dashboard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mon compte",
  robots: { index: false, follow: false },
};

export default async function ComptePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  // Fetch all data in parallel
  const [
    profileRes,
    purchasesRes,
    statsRes,
    badgesRes,
    chapterProgressRes,
    quizResultsRes,
    certificatesRes,
    rankRes,
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("subscription_status, display_name")
      .eq("id", user.id)
      .single(),
    supabase
      .from("purchases")
      .select("course_slug")
      .eq("user_id", user.id),
    supabase
      .from("user_stats")
      .select("total_xp, current_streak, longest_streak, quizzes_passed, chapters_completed")
      .eq("user_id", user.id)
      .single(),
    supabase
      .from("user_badges")
      .select("badge_slug, earned_at")
      .eq("user_id", user.id),
    supabase
      .from("chapter_progress")
      .select("course_slug, chapter_number")
      .eq("user_id", user.id)
      .eq("completed", true),
    supabase
      .from("quiz_results")
      .select("course_slug, chapter_number, score, total_questions, passed")
      .eq("user_id", user.id),
    supabase
      .from("certificates")
      .select("course_slug, certificate_code")
      .eq("user_id", user.id),
    supabase.rpc("get_user_rank", { p_user_id: user.id }),
  ]);

  const profile = profileRes.data;
  const isPro = profile?.subscription_status === "pro";
  const purchasedSlugs = new Set(
    (purchasesRes.data ?? []).map((p: { course_slug: string }) => p.course_slug)
  );
  const stats = statsRes.data ?? {
    total_xp: 0,
    current_streak: 0,
    longest_streak: 0,
    quizzes_passed: 0,
    chapters_completed: 0,
  };
  const earnedBadgesMap = new Map(
    (badgesRes.data ?? []).map((b: { badge_slug: string; earned_at: string }) => [
      b.badge_slug,
      b.earned_at,
    ])
  );
  const completedChapters = chapterProgressRes.data ?? [];
  const quizResults = quizResultsRes.data ?? [];
  const certificatesMap = new Map(
    (certificatesRes.data ?? []).map(
      (c: { course_slug: string; certificate_code: string }) => [
        c.course_slug,
        c.certificate_code,
      ]
    )
  );
  const rankData = rankRes.data;
  const rank =
    rankData && Array.isArray(rankData) && rankData.length > 0
      ? Number(rankData[0].rank)
      : rankData && typeof rankData === "object" && "rank" in rankData
        ? Number(rankData.rank)
        : null;

  // Build courseProgress for ALL courses
  const freeSlugsSet = new Set(FREE_SLUGS);
  const premiumSlugsSet = new Set(PREMIUM_SLUGS);

  // Order: free first, then premium accessible (Pro/purchased), then premium locked
  const sortedCourses = [...courses].sort((a, b) => {
    const aFree = freeSlugsSet.has(a.slug);
    const bFree = freeSlugsSet.has(b.slug);
    if (aFree !== bFree) return aFree ? -1 : 1;
    const aOwned = isPro || purchasedSlugs.has(a.slug);
    const bOwned = isPro || purchasedSlugs.has(b.slug);
    if (aOwned !== bOwned) return aOwned ? -1 : 1;
    return 0;
  });

  const courseProgress = sortedCourses.map((course) => {
    const chaptersForCourse = completedChapters.filter(
      (c: { course_slug: string; chapter_number: number }) =>
        c.course_slug === course.slug
    );
    const quizzesForCourse = quizResults.filter(
      (q: { course_slug: string }) => q.course_slug === course.slug
    );
    const passedQuizzes = quizzesForCourse.filter(
      (q: { passed: boolean }) => q.passed
    );

    const completedChapterCount = chaptersForCourse.length;
    const avgScore =
      quizzesForCourse.length > 0
        ? quizzesForCourse.reduce(
            (sum: number, q: { score: number; total_questions: number }) =>
              sum + (q.total_questions > 0 ? (q.score / q.total_questions) * 100 : 0),
            0
          ) / quizzesForCourse.length
        : 0;

    const isCompleted =
      completedChapterCount >= course.chapters &&
      passedQuizzes.length >= course.chapters;

    const accessible =
      freeSlugsSet.has(course.slug) ||
      isPro ||
      purchasedSlugs.has(course.slug);

    // Find last completed chapter number
    const lastChapter =
      chaptersForCourse.length > 0
        ? Math.max(
            ...chaptersForCourse.map(
              (c: { chapter_number: number }) => c.chapter_number
            )
          )
        : 0;

    return {
      slug: course.slug,
      title: course.title,
      color: course.color,
      totalChapters: course.chapters,
      completedChapters: completedChapterCount,
      avgScore,
      completed: isCompleted,
      accessible,
      certificateCode: certificatesMap.get(course.slug) ?? null,
      lastChapter,
    };
  });

  // Build badges array
  const badges = BADGES.map((badge) => ({
    ...badge,
    earned: earnedBadgesMap.has(badge.slug),
    earnedAt: earnedBadgesMap.get(badge.slug) ?? null,
  }));

  // KPIs
  const totalXp = stats.total_xp ?? 0;
  const chaptersCompletedCount = stats.chapters_completed ?? completedChapters.length;
  const quizzesPassed = stats.quizzes_passed ?? quizResults.filter(
    (q: { passed: boolean }) => q.passed
  ).length;
  const passedQuizResults = quizResults.filter(
    (q: { passed: boolean }) => q.passed
  );
  const avgSuccessRate =
    quizResults.length > 0
      ? quizResults.reduce(
          (sum: number, q: { score: number; total_questions: number }) =>
            sum + (q.total_questions > 0 ? (q.score / q.total_questions) * 100 : 0),
          0
        ) / quizResults.length
      : 0;

  // Level info
  const level = computeLevel(totalXp);
  const levelInfo = getLevelInfo(level);
  const nextLevel = getNextLevelInfo(level);

  const userProfile = {
    email: user.email || "",
    firstName: (user.user_metadata?.first_name as string) || "",
    lastName: (user.user_metadata?.last_name as string) || "",
  };

  return (
    <AccountDashboard
      user={userProfile}
      isPro={isPro}
      streak={stats.current_streak ?? 0}
      totalXp={totalXp}
      levelInfo={levelInfo}
      nextLevel={nextLevel}
      courseProgress={courseProgress}
      badges={badges}
      kpis={{
        chaptersCompleted: chaptersCompletedCount,
        quizzesPassed,
        avgSuccessRate,
        totalXp,
      }}
      rank={rank}
    />
  );
}
