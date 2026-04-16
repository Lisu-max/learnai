import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getServiceSupabase } from "@/lib/stripe-helpers";
import { getLevelInfo } from "@/lib/xp";
import { Crown, Trophy, Medal, TrendingUp } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Classement",
  description: "Classement des apprenants LearnAI",
};

interface LeaderboardEntry {
  user_id: string;
  display_name: string | null;
  total_xp: number;
  level: number;
  rank: number;
}

export default async function LeaderboardPage() {
  const serviceDb = getServiceSupabase();

  // Fetch top 50
  const { data: top } = await serviceDb
    .from("leaderboard_view")
    .select("user_id, display_name, total_xp, level, rank")
    .order("rank", { ascending: true })
    .limit(50);

  const entries: LeaderboardEntry[] = top ?? [];

  // Try to get current user rank
  let userRank: LeaderboardEntry | null = null;
  let currentUserId: string | null = null;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      currentUserId = user.id;
      const { data: userEntry } = await serviceDb
        .from("leaderboard_view")
        .select("user_id, display_name, total_xp, level, rank")
        .eq("user_id", user.id)
        .single();

      userRank = userEntry ?? null;
    }
  } catch {
    // Not authenticated
  }

  const isUserInTop50 = userRank
    ? entries.some((e) => e.user_id === userRank!.user_id)
    : false;

  function getRankIcon(rank: number) {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-400" />;
    if (rank === 2) return <Trophy className="h-5 w-5 text-gray-300" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
    return <span className="text-sm text-muted-foreground w-5 text-center">{rank}</span>;
  }

  return (
    <div className="min-h-screen bg-background bg-grid">
      <div className="mx-auto max-w-3xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold gradient-text">Classement</h1>
          </div>
          <p className="text-muted-foreground">
            Les meilleurs apprenants de la communauté LearnAI
          </p>
        </div>

        {/* Current user rank if not in top 50 */}
        {userRank && !isUserInTop50 && (
          <div className="mb-6 animate-fade-in-delay-1">
            <p className="text-sm text-muted-foreground mb-2">Votre position</p>
            <div className="flex items-center gap-4 rounded-lg border-2 border-primary/50 bg-card/50 p-4">
              <div className="flex items-center justify-center w-8">
                <span className="text-sm font-semibold text-primary">{userRank.rank}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">
                  {userRank.display_name || "Apprenant anonyme"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {getLevelInfo(userRank.level).name}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">{userRank.total_xp.toLocaleString()} XP</p>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard list */}
        <div className="space-y-2 animate-fade-in-delay-2">
          {entries.map((entry) => {
            const isCurrentUser = currentUserId === entry.user_id;
            return (
              <div
                key={entry.user_id}
                className={`flex items-center gap-4 rounded-lg bg-card/50 p-4 border transition-colors ${
                  isCurrentUser
                    ? "border-primary/50 bg-primary/5"
                    : "border-border/50 hover:border-border"
                }`}
              >
                <div className="flex items-center justify-center w-8">
                  {getRankIcon(entry.rank)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium truncate ${isCurrentUser ? "text-primary" : ""}`}>
                    {entry.display_name || "Apprenant anonyme"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getLevelInfo(entry.level).name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{entry.total_xp.toLocaleString()} XP</p>
                  <p className="text-xs text-muted-foreground">Niveau {entry.level}</p>
                </div>
              </div>
            );
          })}

          {entries.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>Aucun apprenant au classement pour le moment.</p>
              <p className="text-sm mt-2">Commencez un cours pour apparaître ici !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
