"use client";

import { MessageSquare } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export function PromptExample({
  label,
  prompt,
  result,
}: {
  label?: string;
  prompt?: string;
  result?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-indigo-500/20 bg-indigo-500/5">
      {label && (
        <div className="flex items-center gap-2 border-b border-indigo-500/10 px-4 py-2.5">
          <MessageSquare className="h-4 w-4 text-indigo-400" />
          <span className="text-sm font-medium text-indigo-300">{label}</span>
        </div>
      )}
      <div className="space-y-3 p-4">
        {prompt && (
          <div>
            <span className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Prompt</span>
            <p className="rounded-lg bg-background/50 p-3 text-sm text-foreground/90">{prompt}</p>
          </div>
        )}
        {result && (
          <div>
            <span className="mb-1 text-xs font-medium uppercase tracking-wider text-emerald-400/60">{t.quiz.result}</span>
            <p className="rounded-lg bg-emerald-500/5 p-3 text-sm text-emerald-300/80">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
