import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getServiceSupabase } from "@/lib/stripe-helpers";

export async function GET() {
  try {
    const serviceDb = getServiceSupabase();

    // Fetch top 50 from materialized view
    const { data: top, error } = await serviceDb
      .from("leaderboard_view")
      .select("user_id, display_name, total_xp, level, rank")
      .order("rank", { ascending: true })
      .limit(50);

    if (error) {
      console.error("Leaderboard fetch error:", error);
      return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
    }

    // Try to get current user rank
    let userRank = null;
    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { data: userEntry } = await serviceDb
          .from("leaderboard_view")
          .select("user_id, display_name, total_xp, level, rank")
          .eq("user_id", user.id)
          .single();

        userRank = userEntry ?? null;
      }
    } catch {
      // Not authenticated — that's fine
    }

    return NextResponse.json({ top: top ?? [], userRank });
  } catch (error) {
    console.error("Leaderboard API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
