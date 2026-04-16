"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trophy, RotateCcw, ArrowRight, PartyPopper } from "lucide-react";
import type { QuizQuestion } from "@/content/types";
import { QuizQuestionCard } from "./quiz-question";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "@/lib/i18n/context";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("@/components/ui/confetti").then(m => ({ default: m.Confetti })), { ssr: false });

interface QuizContainerProps {
  questions: QuizQuestion[];
  courseSlug: string;
  chapterNumber: number;
  totalChapters: number;
}

export function QuizContainer({
  questions,
  courseSlug,
  chapterNumber,
  totalChapters,
}: QuizContainerProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);

  const question = questions[currentQuestion];
  const score = answers.filter((a, i) => a === questions[i].correctIndex).length;
  const passed = score >= Math.ceil(questions.length * 0.7);

  function handleAnswer(index: number) {
    setSelectedAnswer(index);
    setRevealed(true);
  }

  async function handleNext() {
    const newAnswers = [...answers, selectedAnswer!];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setRevealed(false);
    } else {
      setFinished(true);
      const finalScore = newAnswers.filter((a, i) => a === questions[i].correctIndex).length;
      const hasPassed = finalScore >= Math.ceil(questions.length * 0.7);

      setSaving(true);
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from("quiz_results").upsert(
            {
              user_id: user.id,
              course_slug: courseSlug,
              chapter_number: chapterNumber,
              score: finalScore,
              total_questions: questions.length,
              passed: hasPassed,
            },
            { onConflict: "user_id,course_slug,chapter_number" }
          );

          if (hasPassed) {
            await supabase.from("chapter_progress").upsert(
              {
                user_id: user.id,
                course_slug: courseSlug,
                chapter_number: chapterNumber,
                completed: true,
                completed_at: new Date().toISOString(),
              },
              { onConflict: "user_id,course_slug,chapter_number" }
            );
          }

          // Award XP (non-blocking)
          fetch("/api/progress/award", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "quiz",
              courseSlug,
              chapterNumber,
              score: finalScore,
              totalQuestions: questions.length,
            }),
          }).catch(() => {});
        }
      } catch {
        // Silently fail — quiz result shown regardless
      }
      setSaving(false);
    }
  }

  function handleRetry() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setRevealed(false);
    setAnswers([]);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <>
      <Confetti active={passed} />
      <div className="animate-fade-in mx-auto max-w-lg text-center">
        <div className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ${
          passed ? "bg-emerald-500/10" : "bg-amber-500/10"
        }`}>
          {passed ? (
            <PartyPopper className="h-12 w-12 text-emerald-400" />
          ) : (
            <Trophy className="h-12 w-12 text-amber-400" />
          )}
        </div>

        <h2 className="mb-2 text-2xl font-bold">
          {passed ? t.quiz.passed : t.quiz.almostPassed}
        </h2>
        <p className="mb-2 text-4xl font-bold gradient-text-animated">{percentage}%</p>
        <p className="mb-8 text-muted-foreground">
          {score}/{questions.length} {t.quiz.correctAnswers}
          {!passed && ` ${t.quiz.needToPass}`}
        </p>

        <div className="flex flex-col items-center gap-3">
          {passed && chapterNumber < totalChapters && (
            <button
              onClick={() => router.push(`/cours/${courseSlug}/chapitres/${chapterNumber + 1}`)}
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              {t.quiz.nextChapter}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {passed && chapterNumber === totalChapters && (
            <button
              onClick={() => router.push(`/cours/${courseSlug}/chapitres`)}
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              <Trophy className="h-4 w-4" />
              {t.quiz.courseCompleted}
            </button>
          )}
          {!passed && (
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-8 py-3.5 font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4" />
              {t.quiz.retry}
            </button>
          )}
          <button
            onClick={() => router.push(`/cours/${courseSlug}/chapitres/${chapterNumber}`)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t.quiz.rereadChapter}
          </button>
        </div>

        {saving && <p className="mt-4 text-xs text-muted-foreground">{t.quiz.saving}</p>}
      </div>
      </>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <QuizQuestionCard
        question={question}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onAnswer={handleAnswer}
        revealed={revealed}
      />

      {revealed && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleNext}
            className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white"
          >
            {currentQuestion + 1 < questions.length ? t.quiz.nextQuestion : t.quiz.seeResults}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
