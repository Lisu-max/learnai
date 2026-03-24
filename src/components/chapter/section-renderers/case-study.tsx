import { BarChart3 } from "lucide-react";

export function CaseStudy({ label, content }: { label?: string; content?: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-teal-500/20 bg-teal-500/5">
      {label && (
        <div className="flex items-center gap-2 border-b border-teal-500/10 px-4 py-2.5">
          <BarChart3 className="h-4 w-4 text-teal-400" />
          <span className="text-sm font-medium text-teal-300">{label}</span>
        </div>
      )}
      {content && (
        <p className="p-4 text-sm leading-relaxed text-muted-foreground">{content}</p>
      )}
    </div>
  );
}
