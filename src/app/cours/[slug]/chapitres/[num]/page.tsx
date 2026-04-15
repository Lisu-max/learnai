import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/lib/courses";
import { getCourseContent, getChapter } from "@/content";
import { hasAccessToCourse } from "@/lib/access";
import { ChapterContent } from "@/components/chapter/chapter-content";
import { ChapterNav } from "@/components/chapter/chapter-nav";
import { InlineQuiz } from "@/components/quiz/inline-quiz";
import { getServerTranslation, getServerLocale } from "@/lib/i18n/server";
import { ArrowLeft, Clock, BookOpen, Video } from "lucide-react";
import type { ChapterSection } from "@/content/types";

function computeReadingTime(sections: ChapterSection[]): { textMin: number; videoCount: number } {
  let wordCount = 0;
  let videoCount = 0;
  for (const s of sections) {
    if (s.type === "video") { videoCount++; continue; }
    const texts = [s.content, s.label, s.prompt, s.result, ...(s.items || [])].filter(Boolean);
    wordCount += texts.join(" ").split(/\s+/).length;
  }
  return { textMin: Math.max(1, Math.round(wordCount / 200)), videoCount };
}

// Chapter content is static — revalidate every 24h
export const revalidate = 86400;

export async function generateStaticParams() {
  const { courses } = await import("@/lib/courses");
  return courses.flatMap((course) =>
    Array.from({ length: course.chapters }, (_, i) => ({
      slug: course.slug,
      num: String(i + 1),
    }))
  );
}

interface Props {
  params: Promise<{ slug: string; num: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { slug, num } = await params;
  const t = await getServerTranslation();
  const locale = await getServerLocale();
  const chapterNum = parseInt(num, 10);

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const { hasAccess } = await hasAccessToCourse(slug);
  if (!hasAccess) redirect(`/cours/${slug}`);

  const content = await getCourseContent(slug, locale);
  if (!content) notFound();

  const chapter = getChapter(content, chapterNum);
  if (!chapter) notFound();

  const { textMin, videoCount } = computeReadingTime(chapter.sections);

  return (
    <div className="bg-grid">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Breadcrumb */}
        <Link
          href={`/cours/${slug}/chapitres`}
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {course.title}
        </Link>

        {/* Chapter header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-sm font-bold text-purple-400">
              {chapter.number}
            </span>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {textMin} min lecture
              </span>
              {videoCount > 0 && (
                <span className="flex items-center gap-1">
                  <Video className="h-3.5 w-3.5" />
                  {videoCount} vidéo{videoCount > 1 ? "s" : ""}
                </span>
              )}
              <span className="flex items-center gap-1">
                <BookOpen className="h-3.5 w-3.5" />
                {t.chapters.chapterOf} {chapter.number}/{content.chapters.length}
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold">{chapter.title}</h1>
        </div>

        {/* Chapter content */}
        <ChapterContent sections={chapter.sections} />

        {/* Quiz inline */}
        {chapter.quiz.length > 0 && (
          <InlineQuiz
            questions={chapter.quiz}
            courseSlug={slug}
            chapterNumber={chapter.number}
            totalChapters={content.chapters.length}
          />
        )}

        {/* Navigation */}
        <ChapterNav
          courseSlug={slug}
          chapterNumber={chapter.number}
          totalChapters={content.chapters.length}
          chapterTitle={chapter.title}
        />
      </div>
    </div>
  );
}
