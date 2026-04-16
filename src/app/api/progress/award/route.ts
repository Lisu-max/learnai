import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { XP_REWARDS, computeLevel, computeQuizXp } from "@/lib/xp";
import { checkAndAwardBadges } from "@/lib/badges";
import { courses } from "@/lib/courses";

function getServiceSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  }
  return createServiceClient(url, key);
}

export async function POST(request: NextRequest) {
  try {
    // 1. Auth check
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { type, courseSlug, chapterNumber, score, totalQuestions } = body as {
      type: "chapter" | "quiz";
      courseSlug: string;
      chapterNumber: number;
      score?: number;
      totalQuestions?: number;
    };

    if (!type || !courseSlug || !chapterNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const serviceDb = getServiceSupabase();
    const userId = user.id;

    // 3. Upsert user_stats row if not exists
    await serviceDb.from("user_stats").upsert(
      {
        user_id: userId,
        total_xp: 0,
        level: 1,
        current_streak: 0,
        longest_streak: 0,
        last_activity: null,
      },
      { onConflict: "user_id", ignoreDuplicates: true }
    );

    // 4. Fetch current stats
    const { data: stats } = await serviceDb
      .from("user_stats")
      .select("total_xp, current_streak, longest_streak, last_activity")
      .eq("user_id", userId)
      .single();

    if (!stats) {
      return NextResponse.json({ error: "Failed to fetch user stats" }, { status: 500 });
    }

    let xpGained = 0;
    let currentStreak = stats.current_streak ?? 0;
    let longestStreak = stats.longest_streak ?? 0;

    // 5. Update streak
    const today = new Date().toISOString().split("T")[0];
    const lastActivity = stats.last_activity
      ? new Date(stats.last_activity).toISOString().split("T")[0]
      : null;

    if (lastActivity !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastActivity === yesterdayStr) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }
      xpGained += XP_REWARDS.DAILY_STREAK;
      longestStreak = Math.max(longestStreak, currentStreak);
    }

    // 6 & 7. Award XP based on type
    if (type === "chapter") {
      // Check if already completed to avoid double award
      const { data: existing } = await serviceDb
        .from("chapter_progress")
        .select("completed")
        .eq("user_id", userId)
        .eq("course_slug", courseSlug)
        .eq("chapter_number", chapterNumber)
        .single();

      if (!existing?.completed) {
        xpGained += XP_REWARDS.CHAPTER_COMPLETE;
      }
    } else if (type === "quiz") {
      const quizXp = computeQuizXp(score ?? 0, totalQuestions ?? 0);

      // Get previous best score for this quiz
      const { data: prevResult } = await serviceDb
        .from("quiz_results")
        .select("score, total_questions")
        .eq("user_id", userId)
        .eq("course_slug", courseSlug)
        .eq("chapter_number", chapterNumber)
        .single();

      if (prevResult) {
        const prevXp = computeQuizXp(prevResult.score, prevResult.total_questions);
        const diff = quizXp - prevXp;
        if (diff > 0) {
          xpGained += diff;
        }
      } else {
        xpGained += quizXp;
      }

      // Check if course is now fully complete
      const course = courses.find((c) => c.slug === courseSlug);
      if (course) {
        const { data: completedChapters } = await serviceDb
          .from("chapter_progress")
          .select("chapter_number")
          .eq("user_id", userId)
          .eq("course_slug", courseSlug)
          .eq("completed", true);

        const completedCount = completedChapters?.length ?? 0;
        // Check if this quiz passing completes the course
        // (all chapters completed including potentially this one)
        const isNewlyComplete = completedCount >= course.chapters;

        if (isNewlyComplete) {
          // Check if we already awarded course complete bonus
          const { data: prevStats } = await serviceDb
            .from("chapter_progress")
            .select("chapter_number")
            .eq("user_id", userId)
            .eq("course_slug", courseSlug)
            .eq("completed", true);

          // Only award if this is the first time reaching full completion
          // We check by looking at previous quiz results count vs chapter count
          const { data: passedQuizzes } = await serviceDb
            .from("quiz_results")
            .select("chapter_number")
            .eq("user_id", userId)
            .eq("course_slug", courseSlug)
            .eq("passed", true);

          const passedCount = passedQuizzes?.length ?? 0;
          const chaptersCompleted = prevStats?.length ?? 0;

          // Course is complete if all chapters done and all quizzes passed
          if (chaptersCompleted >= course.chapters && passedCount >= course.chapters) {
            // Check if bonus was already given by seeing if this is a re-attempt
            // If previous result existed and was already passing, bonus was already given
            if (!prevResult || !computeQuizXp(prevResult.score, prevResult.total_questions)) {
              xpGained += XP_REWARDS.COURSE_COMPLETE;
            }
          }
        }
      }
    }

    // 8. Update user_stats
    const newTotalXp = (stats.total_xp ?? 0) + xpGained;
    const newLevel = computeLevel(newTotalXp);

    await serviceDb
      .from("user_stats")
      .update({
        total_xp: newTotalXp,
        level: newLevel,
        current_streak: currentStreak,
        longest_streak: longestStreak,
        last_activity: new Date().toISOString(),
      })
      .eq("user_id", userId);

    // 9. Check and award badges
    const badgesEarned = await checkAndAwardBadges(serviceDb, userId);

    // 10. Refresh leaderboard view (non-blocking)
    Promise.resolve(serviceDb.rpc("refresh_leaderboard_view")).catch(() => {});

    // 11. Return result
    return NextResponse.json({
      xp_gained: xpGained,
      total_xp: newTotalXp,
      level: newLevel,
      current_streak: currentStreak,
      badges_earned: badgesEarned,
    });
  } catch (error) {
    console.error("Progress award error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
