"use client";

import {
  BookOpen,
  BookMarked,
  Library,
  CheckCircle,
  Target,
  Award,
  GraduationCap,
  Layers,
  Crown,
  MessageSquare,
  Briefcase,
  Palette,
  Wrench,
  Flame,
  Zap,
  Lock,
} from "lucide-react";
import type { BadgeDef } from "@/lib/badges";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  BookMarked,
  Library,
  CheckCircle,
  Target,
  Award,
  GraduationCap,
  Layers,
  Crown,
  MessageSquare,
  Briefcase,
  Palette,
  Wrench,
  Flame,
  Zap,
};

export interface BadgeWithStatus extends BadgeDef {
  earned: boolean;
  earnedAt: string | null;
}

interface BadgeGridProps {
  badges: BadgeWithStatus[];
}

export function BadgeGrid({ badges }: BadgeGridProps) {
  return (
    <div>
      <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
        <Award className="h-5 w-5 text-amber-400" />
        Badges
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-5">
        {badges.map((badge) => {
          const IconComponent = ICON_MAP[badge.icon] || Award;
          return (
            <div
              key={badge.slug}
              className="group relative flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-3 backdrop-blur-sm transition-all hover:border-border"
              title={badge.description}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  badge.earned
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-muted/30 text-muted-foreground/40"
                }`}
              >
                {badge.earned ? (
                  <IconComponent className="h-6 w-6" />
                ) : (
                  <Lock className="h-5 w-5" />
                )}
              </div>
              <p
                className={`mt-2 text-center text-xs font-medium leading-tight ${
                  badge.earned
                    ? "text-foreground"
                    : "text-muted-foreground/50"
                }`}
              >
                {badge.name}
              </p>
              {/* Hover tooltip */}
              <div className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-background/95 px-3 py-1.5 text-xs text-muted-foreground opacity-0 shadow-lg border border-border/50 transition-opacity group-hover:opacity-100">
                {badge.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
