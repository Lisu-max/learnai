"use client";

import Link from "next/link";
import {
  BookOpen,
  CheckCircle,
  Percent,
  Zap,
  Trophy,
} from "lucide-react";

interface StatsCardsProps {
  chaptersCompleted: number;
  quizzesPassed: number;
  avgSuccessRate: number;
  totalXp: number;
  rank: number | null;
}

export function StatsCards({
  chaptersCompleted,
  quizzesPassed,
  avgSuccessRate,
  totalXp,
  rank,
}: StatsCardsProps) {
  const stats = [
    {
      label: "Chapitres terminés",
      value: chaptersCompleted,
      icon: BookOpen,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Quiz réussis",
      value: quizzesPassed,
      icon: CheckCircle,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Taux de réussite",
      value: `${Math.round(avgSuccessRate)}%`,
      icon: Percent,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
    },
    {
      label: "XP Total",
      value: totalXp,
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
        <Trophy className="h-5 w-5 text-purple-400" />
        Statistiques
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
          >
            <div className={`mb-2 inline-flex rounded-lg p-2 ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold gradient-text-animated">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Leaderboard rank */}
      {rank !== null && (
        <Link
          href="/leaderboard"
          className="mt-3 flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-colors hover:border-purple-500/30"
        >
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-lg bg-purple-500/10 p-2">
              <Trophy className="h-4 w-4 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium">Classement</p>
              <p className="text-xs text-muted-foreground">
                Votre position au leaderboard
              </p>
            </div>
          </div>
          <p className="text-2xl font-bold gradient-text-animated">
            #{rank}
          </p>
        </Link>
      )}
    </div>
  );
}
