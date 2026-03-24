import { Info } from "lucide-react";

export function Callout({ content }: { content: string }) {
  return (
    <div className="my-6 flex gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
      <p className="text-sm leading-relaxed text-blue-300/90">{content}</p>
    </div>
  );
}
