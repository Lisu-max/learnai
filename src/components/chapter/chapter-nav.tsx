"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

interface ChapterNavProps {
  courseSlug: string;
  chapterNumber: number;
  totalChapters: number;
  chapterTitle: string;
}

export function ChapterNav({ courseSlug, chapterNumber, totalChapters, chapterTitle }: ChapterNavProps) {
  const { t } = useTranslation();
  const hasQuiz = true;

  return (
    <div className="mt-12 space-y-4 border-t border-border/50 pt-8">
      {hasQuiz && (
        <Link
          href={`/cours/${courseSlug}/chapitres/${chapterNumber}/quiz`}
          className="btn-gradient-glow flex w-full items-center justify-center gap-2 rounded-xl py-4 font-semibold text-white"
        >
          <Brain className="h-5 w-5" />
          {t.quiz.testKnowledge}
        </Link>
      )}

      <div className="flex items-center justify-between gap-4">
        {chapterNumber > 1 ? (
          <Link
            href={`/cours/${courseSlug}/chapitres/${chapterNumber - 1}`}
            className="flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.quiz.previousChapter}
          </Link>
        ) : (
          <Link
            href={`/cours/${courseSlug}/chapitres`}
            className="flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.quiz.tableOfContents}
          </Link>
        )}

        {chapterNumber < totalChapters && (
          <Link
            href={`/cours/${courseSlug}/chapitres/${chapterNumber + 1}`}
            className="flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.quiz.nextChapter}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
