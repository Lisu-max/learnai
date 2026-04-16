"use client";

import Link from "next/link";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Lock,
  PlayCircle,
  Award,
  Download,
  CheckCircle2,
} from "lucide-react";

export interface CourseProgressData {
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
}

interface CourseProgressCardProps {
  course: CourseProgressData;
}

export function CourseProgressCard({ course }: CourseProgressCardProps) {
  const percentage =
    course.totalChapters > 0
      ? Math.min(
          (course.completedChapters / course.totalChapters) * 100,
          100
        )
      : 0;

  // Not accessible: locked state
  if (!course.accessible) {
    return (
      <div className="rounded-xl border border-border/50 bg-card/50 p-5 opacity-60 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${course.color} opacity-40`}
          >
            <Lock className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-muted-foreground">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground/70">
              {course.totalChapters} chapitres
            </p>
          </div>
          <Link
            href="/tarification"
            className="rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-4 py-2 text-xs font-semibold text-amber-400 transition-colors hover:from-amber-500/30 hover:to-orange-500/30"
          >
            Passer Pro
          </Link>
        </div>
      </div>
    );
  }

  // Next chapter to continue
  const nextChapter = course.completed
    ? course.totalChapters
    : course.lastChapter + 1;

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Progress circle + info */}
        <div className="flex flex-1 items-center gap-4">
          <CircularProgress percentage={percentage} size={64} strokeWidth={5} />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{course.title}</h3>
              {course.completed && (
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              )}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>
                {course.completedChapters}/{course.totalChapters} chapitres
              </span>
              {course.avgScore > 0 && (
                <span className="flex items-center gap-1">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  {Math.round(course.avgScore)}% moy.
                </span>
              )}
            </div>
            {/* Mini progress bar */}
            <div className="mt-2">
              <div className="h-1.5 w-full max-w-[200px] overflow-hidden rounded-full bg-border/30">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {course.certificateCode && (
            <Link
              href={`/certificat/${course.certificateCode}`}
              className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 px-3 py-2 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
            >
              <Download className="h-3.5 w-3.5" />
              Certificat
            </Link>
          )}
          <Link
            href={
              course.completed
                ? `/cours/${course.slug}/chapitres`
                : `/cours/${course.slug}/chapitres/${nextChapter}`
            }
            className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-400 transition-colors hover:bg-purple-500/20"
          >
            <PlayCircle className="h-3.5 w-3.5" />
            {course.completed ? "Revoir" : "Continuer"}
          </Link>
        </div>
      </div>
    </div>
  );
}
