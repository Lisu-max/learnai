import { Lightbulb } from "lucide-react";

export function TipBox({ content }: { content: string }) {
  return (
    <div className="my-6 flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
      <p className="text-sm leading-relaxed text-emerald-300/90">{content}</p>
    </div>
  );
}
