import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/lib/courses";
import { getCourseContent, getChapter } from "@/content";
import { hasAccessToCourse } from "@/lib/access";
import { QuizContainer } from "@/components/quiz/quiz-container";
import { ArrowLeft, Brain } from "lucide-react";

interface Props {
  params: Promise<{ slug: string; num: string }>;
}

export default async function QuizPage({ params }: Props) {
  const { slug, num } = await params;
  const chapterNum = parseInt(num, 10);

  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const { hasAccess } = await hasAccessToCourse(slug);
  if (!hasAccess) redirect(`/cours/${slug}`);

  const content = await getCourseContent(slug);
  if (!content) notFound();

  const chapter = getChapter(content, chapterNum);
  if (!chapter || chapter.quiz.length === 0) notFound();

  return (
    <div className="bg-grid">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href={`/cours/${slug}/chapitres/${chapterNum}`}
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Retour au chapitre
        </Link>

        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10">
            <Brain className="h-8 w-8 text-purple-400" />
          </div>
          <h1 className="mb-2 text-2xl font-bold">Quiz — Chapitre {chapterNum}</h1>
          <p className="text-muted-foreground">{chapter.title}</p>
          <p className="mt-1 text-sm text-muted-foreground/70">
            {chapter.quiz.length} questions — 70% pour valider
          </p>
        </div>

        <QuizContainer
          questions={chapter.quiz}
          courseSlug={slug}
          chapterNumber={chapterNum}
          totalChapters={content.chapters.length}
        />
      </div>
    </div>
  );
}
