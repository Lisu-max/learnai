"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brain, Trophy, RotateCcw, ArrowRight, PartyPopper, CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/content/types";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "@/lib/i18n/context";
import { Confetti } from "@/components/ui/confetti";

interface InlineQuizProps {
  questions: QuizQuestion[];
  courseSlug: string;
  chapterNumber: number;
  totalChapters: number;
}

export function InlineQuiz({ questions, courseSlug, chapterNumber, totalChapters }: InlineQuizProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQ];
  const score = answers.filter((a, i) => a === questions[i].correctIndex).length;
  const passed = score >= Math.ceil(questions.length * 0.7);

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  }

  async function handleNext() {
    const newAnswers = [...answers, selected!];
    setAnswers(newAnswers);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setFinished(true);
      const finalScore = newAnswers.filter((a, i) => a === questions[i].correctIndex).length;
      const hasPassed = finalScore >= Math.ceil(questions.length * 0.7);

      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from("quiz_results").upsert(
            { user_id: user.id, course_slug: courseSlug, chapter_number: chapterNumber, score: finalScore, total_questions: questions.length, passed: hasPassed },
            { onConflict: "user_id,course_slug,chapter_number" }
          );
          if (hasPassed) {
            await supabase.from("chapter_progress").upsert(
              { user_id: user.id, course_slug: courseSlug, chapter_number: chapterNumber, completed: true, completed_at: new Date().toISOString() },
              { onConflict: "user_id,course_slug,chapter_number" }
            );
          }
        }
      } catch { /* silent */ }
    }
  }

  function handleRetry() {
    setCurrentQ(0);
    setSelected(null);
    setRevealed(false);
    setAnswers([]);
    setFinished(false);
    setStarted(true);
  }

  // Not started yet — show CTA
  if (!started) {
    return (
      <div className="my-12 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10">
          <Brain className="h-8 w-8 text-purple-400" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{t.quiz.testYourKnowledge}</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          {questions.length} {t.quiz.questionsToValidate}
        </p>
        <button
          onClick={() => setStarted(true)}
          className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
        >
          <Brain className="h-5 w-5" />
          {t.quiz.startQuiz}
        </button>
      </div>
    );
  }

  // Finished — show results
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <>
        <Confetti active={passed} />
      <div className="my-12 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent p-8 text-center">
        <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${passed ? "bg-emerald-500/10" : "bg-amber-500/10"}`}>
          {passed ? <PartyPopper className="h-10 w-10 text-emerald-400" /> : <Trophy className="h-10 w-10 text-amber-400" />}
        </div>
        <h3 className="mb-2 text-2xl font-bold">{passed ? t.quiz.passed : t.quiz.almostPassed}</h3>
        <p className="mb-1 text-4xl font-bold gradient-text-animated">{pct}%</p>
        <p className="mb-6 text-muted-foreground">
          {score}/{questions.length} {t.quiz.correctAnswers}
          {!passed && ` ${t.quiz.needToPassShort}`}
        </p>
        <div className="flex flex-col items-center gap-3">
          {passed && chapterNumber < totalChapters && (
            <button
              onClick={() => router.push(`/cours/${courseSlug}/chapitres/${chapterNumber + 1}`)}
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              {t.quiz.nextChapter} <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {passed && chapterNumber === totalChapters && (
            <button
              onClick={() => router.push(`/cours/${courseSlug}/chapitres`)}
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              <Trophy className="h-4 w-4" /> {t.quiz.courseCompleted}
            </button>
          )}
          {!passed && (
            <button onClick={handleRetry} className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-8 py-3.5 font-medium text-muted-foreground hover:text-foreground">
              <RotateCcw className="h-4 w-4" /> {t.quiz.retryShort}
            </button>
          )}
        </div>
      </div>
      </>
    );
  }

  // Active quiz question
  return (
    <div className="my-12 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent p-8">
      {/* Progress */}
      <div className="mb-6 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-purple-400">
          <Brain className="h-4 w-4" />
          {t.quiz.question} {currentQ + 1}/{questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className={`h-1.5 w-8 rounded-full ${i <= currentQ ? "bg-purple-500" : "bg-border/30"}`} />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="mb-6 text-lg font-semibold">{question.question}</h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === question.correctIndex;
          let cls = "border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 cursor-pointer";
          if (revealed) {
            if (isCorrect) cls = "border-emerald-500/50 bg-emerald-500/10";
            else if (isSelected) cls = "border-red-500/50 bg-red-500/10";
            else cls = "border-border/30 opacity-40";
          } else if (isSelected) {
            cls = "border-purple-500 bg-purple-500/10";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all ${cls}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                revealed && isCorrect ? "bg-emerald-500/20 text-emerald-400"
                : revealed && isSelected ? "bg-red-500/20 text-red-400"
                : "bg-border/30 text-muted-foreground"
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {revealed && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
              {revealed && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-400" />}
            </button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      {revealed && (
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
            <p className="text-sm text-blue-300/90">{question.explanation}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white"
            >
              {currentQ + 1 < questions.length ? t.quiz.nextQuestion : t.quiz.seeResults}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
