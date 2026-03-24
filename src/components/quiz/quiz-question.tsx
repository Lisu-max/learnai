"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/content/types";

interface QuizQuestionProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
  revealed: boolean;
}

export function QuizQuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  revealed,
}: QuizQuestionProps) {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Question {questionNumber}/{totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                i < questionNumber
                  ? "bg-purple-500"
                  : i === questionNumber - 1
                  ? "bg-purple-400"
                  : "bg-border/50"
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="mb-6 text-xl font-semibold">{question.question}</h3>

      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedAnswer === i;
          const isCorrect = i === question.correctIndex;
          let style = "border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5";

          if (revealed) {
            if (isCorrect) {
              style = "border-emerald-500/50 bg-emerald-500/10";
            } else if (isSelected && !isCorrect) {
              style = "border-red-500/50 bg-red-500/10";
            } else {
              style = "border-border/30 opacity-50";
            }
          } else if (isSelected) {
            style = "border-purple-500 bg-purple-500/10";
          }

          return (
            <button
              key={i}
              onClick={() => !revealed && onAnswer(i)}
              disabled={revealed}
              className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all ${style}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                  revealed && isCorrect
                    ? "bg-emerald-500/20 text-emerald-400"
                    : revealed && isSelected && !isCorrect
                    ? "bg-red-500/20 text-red-400"
                    : isSelected
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-border/30 text-muted-foreground"
                }`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {revealed && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
              {revealed && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-400" />}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
          <p className="text-sm text-blue-300/90">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
