import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/lib/courses";
import { getCourseContent, getChapter } from "@/content";
import { hasAccessToCourse } from "@/lib/access";
import { ChapterContent } from "@/components/chapter/chapter-content";
import { ChapterNav } from "@/components/chapter/chapter-nav";
import { InlineQuiz } from "@/components/quiz/inline-quiz";
import { getServerTranslation } from "@/lib/i18n/server";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string; num: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { slug, num } = await params;
  const t = await getServerTranslation();
  const chapterNum = parseInt(num, 10);

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const { hasAccess } = await hasAccessToCourse(slug);
  if (!hasAccess) redirect(`/cours/${slug}`);

  const content = await getCourseContent(slug);
  if (!content) notFound();

  const chapter = getChapter(content, chapterNum);
  if (!chapter) notFound();

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
                {chapter.estimatedMinutes} min
              </span>
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
