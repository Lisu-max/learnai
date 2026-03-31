"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export function SummaryBox({ items }: { items: string[] }) {
  const { t } = useTranslation();
  return (
    <div className="my-8 rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
      <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
        <CheckCircle2 className="h-4 w-4" />
        {t.quiz.keyPoints}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
