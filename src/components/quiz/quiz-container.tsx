"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trophy, RotateCcw, ArrowRight, PartyPopper } from "lucide-react";
import type { QuizQuestion } from "@/content/types";
import { QuizQuestionCard } from "./quiz-question";
import { createClient } from "@/lib/supabase/client";

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
          {passed ? "Bravo, chapitre validé !" : "Presque..."}
        </h2>
        <p className="mb-2 text-4xl font-bold gradient-text-animated">{percentage}%</p>
        <p className="mb-8 text-muted-foreground">
          {score}/{questions.length} réponses correctes
          {!passed && " — Il faut 70% pour valider le chapitre."}
        </p>

        <div className="flex flex-col items-center gap-3">
          {passed && chapterNumber < totalChapters && (
            <button
              onClick={() => router.push(`/cours/${courseSlug}/chapitres/${chapterNumber + 1}`)}
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              Chapitre suivant
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {passed && chapterNumber === totalChapters && (
            <button
              onClick={() => router.push(`/cours/${courseSlug}/chapitres`)}
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              <Trophy className="h-4 w-4" />
              Formation terminée !
            </button>
          )}
          {!passed && (
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-8 py-3.5 font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4" />
              Réessayer le quiz
            </button>
          )}
          <button
            onClick={() => router.push(`/cours/${courseSlug}/chapitres/${chapterNumber}`)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Relire le chapitre
          </button>
        </div>

        {saving && <p className="mt-4 text-xs text-muted-foreground">Sauvegarde en cours...</p>}
      </div>
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
            {currentQuestion + 1 < questions.length ? "Question suivante" : "Voir les résultats"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
