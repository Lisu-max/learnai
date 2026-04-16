"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";
import { ProfileLevel } from "./profile-level";
import {
  CourseProgressCard,
  type CourseProgressData,
} from "./course-progress-card";
import { BadgeGrid, type BadgeWithStatus } from "./badge-grid";
import { StatsCards } from "./stats-cards";
import type { LevelInfo } from "@/lib/xp";

export interface AccountDashboardProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  isPro: boolean;
  streak: number;
  totalXp: number;
  levelInfo: LevelInfo;
  nextLevel: LevelInfo | null;
  courseProgress: CourseProgressData[];
  badges: BadgeWithStatus[];
  kpis: {
    chaptersCompleted: number;
    quizzesPassed: number;
    avgSuccessRate: number;
    totalXp: number;
  };
  rank: number | null;
}

export function AccountDashboard({
  user,
  isPro,
  streak,
  totalXp,
  levelInfo,
  nextLevel,
  courseProgress,
  badges,
  kpis,
  rank,
}: AccountDashboardProps) {
  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="animate-fade-in space-y-8">
          {/* Profile + Level */}
          <ProfileLevel
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            isPro={isPro}
            streak={streak}
            totalXp={totalXp}
            levelInfo={levelInfo}
            nextLevel={nextLevel}
          />

          {/* Course Progress */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5 text-purple-400" />
              Mes formations
            </h2>
            {courseProgress.length === 0 ? (
              <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm">
                <BookOpen className="mx-auto mb-4 h-10 w-10 text-muted-foreground/50" />
                <p className="mb-2 text-muted-foreground">
                  Aucune formation pour le moment
                </p>
                <Link
                  href="/cours"
                  className="btn-gradient mt-4 inline-block rounded-lg px-6 py-3 text-sm font-medium text-white"
                >
                  Découvrir les formations
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {courseProgress.map((course) => (
                  <CourseProgressCard key={course.slug} course={course} />
                ))}
              </div>
            )}
          </div>

          {/* Badges */}
          <BadgeGrid badges={badges} />

          {/* Stats */}
          <StatsCards
            chaptersCompleted={kpis.chaptersCompleted}
            quizzesPassed={kpis.quizzesPassed}
            avgSuccessRate={kpis.avgSuccessRate}
            totalXp={kpis.totalXp}
            rank={rank}
          />
        </div>
      </section>
    </div>
  );
}
