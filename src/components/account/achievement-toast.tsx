"use client";

import { useEffect, useState, useCallback } from "react";
import { Zap, Award, X } from "lucide-react";

export interface AwardResult {
  xp_gained: number;
  total_xp: number;
  level: number;
  current_streak: number;
  badges_earned: string[];
}

interface Toast {
  id: string;
  type: "xp" | "badge";
  message: string;
}

interface AchievementToastProps {
  award: AwardResult | null;
}

export function AchievementToast({ award }: AchievementToastProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    if (!award) return;

    const newToasts: Toast[] = [];

    if (award.xp_gained > 0) {
      newToasts.push({
        id: `xp-${Date.now()}`,
        type: "xp",
        message: `+${award.xp_gained} XP`,
      });
    }

    if (award.badges_earned && award.badges_earned.length > 0) {
      for (const badge of award.badges_earned) {
        newToasts.push({
          id: `badge-${badge}-${Date.now()}`,
          type: "badge",
          message: `Badge débloqué : ${badge}`,
        });
      }
    }

    if (newToasts.length === 0) return;

    setToasts((prev) => [...prev, ...newToasts]);

    // Auto-dismiss after 4 seconds
    const timers = newToasts.map((toast) =>
      setTimeout(() => {
        dismissToast(toast.id);
      }, 4000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [award, dismissToast]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="animate-slide-up flex items-center gap-3 rounded-lg border border-border/50 bg-card px-4 py-3 shadow-lg shadow-black/20"
        >
          {toast.type === "xp" ? (
            <Zap className="h-5 w-5 text-yellow-400 shrink-0" />
          ) : (
            <Award className="h-5 w-5 text-purple-400 shrink-0" />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
          <button
            onClick={() => dismissToast(toast.id)}
            className="ml-2 text-muted-foreground hover:text-foreground transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
