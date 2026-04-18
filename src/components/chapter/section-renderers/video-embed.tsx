import { Play } from "lucide-react";

export function VideoEmbed({ videoId, label }: { videoId: string; label?: string }) {
  return (
    <div className="my-8">
      {label && (
        <p className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Play className="h-4 w-4 text-purple-400" />
          {label}
        </p>
      )}
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-black/50">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={label || "Vidéo"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
