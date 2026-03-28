import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug, getCourseLocalized } from "@/lib/courses";
import { getCourseContent } from "@/content";
import { hasAccessToCourse } from "@/lib/access";
import { createClient } from "@/lib/supabase/server";
import { getServerTranslation, getServerLocale } from "@/lib/i18n/server";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  PlayCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ChaptersPage({ params }: Props) {
  const { slug } = await params;
  const t = await getServerTranslation();
  const locale = await getServerLocale();
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  const lc = getCourseLocalized(course, locale);

  const { hasAccess, userId } = await hasAccessToCourse(slug);
  if (!hasAccess) redirect(`/cours/${slug}`);

  const content = await getCourseContent(slug);
  if (!content) {
    return (
      <div className="bg-grid">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
          <h1 className="mb-2 text-2xl font-bold">{t.chapters.comingSoon}</h1>
          <p className="text-muted-foreground">
            {t.chapters.comingSoonDesc}
          </p>
        </div>
      </div>
    );
  }

  // Fetch user progress
  let completedChapters: number[] = [];
  if (userId) {
    const supabase = await createClient();
    const { data } = await supabase
      .from("chapter_progress")
      .select("chapter_number")
      .eq("user_id", userId)
      .eq("course_slug", slug)
      .eq("completed", true);
    completedChapters = (data || []).map((d) => d.chapter_number);
  }

  const totalCompleted = completedChapters.length;
  const totalChapters = content.chapters.length;
  const progress = totalChapters > 0 ? Math.round((totalCompleted / totalChapters) * 100) : 0;

  return (
    <div className="bg-grid">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href={`/cours/${slug}`}
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t.chapters.backToCourse}
        </Link>

        {/* Course header */}
        <div className="mb-10">
          <h1 className="mb-2 text-3xl font-bold">{lc.title}</h1>
          <p className="mb-4 text-muted-foreground">{lc.description}</p>

          {/* Progress bar */}
          <div className="rounded-xl border border-border/50 bg-card/50 p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t.chapters.progress}</span>
              <span className="font-semibold gradient-text-animated">{progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-border/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {totalCompleted}/{totalChapters} {t.chapters.chaptersCompleted}
            </p>
          </div>
        </div>

        {/* Chapter list */}
        <div className="space-y-3">
          {content.chapters.map((chapter) => {
            const isCompleted = completedChapters.includes(chapter.number);
            const isNext = !isCompleted && (chapter.number === 1 || completedChapters.includes(chapter.number - 1));

            return (
              <Link
                key={chapter.number}
                href={`/cours/${slug}/chapitres/${chapter.number}`}
                className={`group flex items-center gap-4 rounded-xl border p-4 transition-all ${
                  isCompleted
                    ? "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40"
                    : isNext
                    ? "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50"
                    : "border-border/50 hover:border-border"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    isCompleted
                      ? "bg-emerald-500/20"
                      : isNext
                      ? "bg-purple-500/20"
                      : "bg-border/30"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : isNext ? (
                    <PlayCircle className="h-5 w-5 text-purple-400" />
                  ) : (
                    <span className="text-sm font-bold text-muted-foreground">{chapter.number}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-medium group-hover:text-foreground">{chapter.title}</h3>
                  <p className="text-xs text-muted-foreground">{chapter.description}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {chapter.estimatedMinutes} min
                </div>
              </Link>
            );
          })}
        </div>

        {/* Encouragement */}
        <div className="mt-10 rounded-xl border border-border/50 bg-card/50 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t.chapters.encouragement}
          </p>
        </div>
      </div>
    </div>
  );
}
