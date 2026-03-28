"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Sparkles, PlayCircle } from "lucide-react";
import type { Course } from "@/lib/courses";
import { useTranslation } from "@/lib/i18n/context";

const levelColors: Record<string, string> = {
  Débutant: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermédiaire: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Avancé: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const levelTranslationKeys: Record<string, "beginner" | "intermediate" | "advanced"> = {
  Débutant: "beginner",
  Intermédiaire: "intermediate",
  Avancé: "advanced",
};

export function CourseCard({ course }: { course: Course }) {
  const { t } = useTranslation();
  const isFree = course.tier === "free";

  return (
    <Link href={`/cours/${course.slug}`} className="group block">
      <div className="card-glass flex h-full flex-col p-6">
        <div
          className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full ${course.color}`}
        />

        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline" className={levelColors[course.level]}>
            {t.levels[levelTranslationKeys[course.level]]}
          </Badge>
          {isFree ? (
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              {t.courseDetail.free}
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              <Sparkles className="mr-1 h-3 w-3" />
              {t.courseDetail.premium}
            </Badge>
          )}
        </div>

        <h3 className="mb-2 text-lg font-bold">{course.title}</h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {course.description}
        </p>

        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {course.chapters} {t.courseDetail.chapters}
          </span>
        </div>

        <div className="flex items-center justify-between">
          {isFree ? (
            <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
              <PlayCircle className="h-4 w-4" />
              {t.courseDetail.startFree}
            </span>
          ) : (
            <span className="text-sm font-semibold gradient-text-animated">
              9,99€ <span className="font-normal text-muted-foreground">/ formation</span>
            </span>
          )}
          <span className="flex items-center gap-1 text-sm text-muted-foreground transition-all group-hover:text-foreground">
            {t.courseDetail.viewDetail}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
