"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  LogOut,
  CreditCard,
  Loader2,
  Flame,
  Sparkles,
  Crown,
} from "lucide-react";
import type { LevelInfo } from "@/lib/xp";

interface ProfileLevelProps {
  firstName: string;
  lastName: string;
  email: string;
  isPro: boolean;
  streak: number;
  totalXp: number;
  levelInfo: LevelInfo;
  nextLevel: LevelInfo | null;
}

export function ProfileLevel({
  firstName,
  lastName,
  email,
  isPro,
  streak,
  totalXp,
  levelInfo,
  nextLevel,
}: ProfileLevelProps) {
  const router = useRouter();
  const [portalLoading, setPortalLoading] = useState(false);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function handlePortal() {
    setPortalLoading(true);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // ignore
    } finally {
      setPortalLoading(false);
    }
  }

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  // XP progress toward next level
  const xpInLevel = nextLevel
    ? totalXp - levelInfo.minXp
    : totalXp - levelInfo.minXp;
  const xpNeeded = nextLevel
    ? nextLevel.minXp - levelInfo.minXp
    : 1;
  const progressPercent = nextLevel
    ? Math.min((xpInLevel / xpNeeded) * 100, 100)
    : 100;
  const xpRemaining = nextLevel ? nextLevel.minXp - totalXp : 0;

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Left: Avatar + Info */}
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-bold text-white">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">
                {firstName} {lastName}
              </h1>
              {isPro && (
                <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
                  <Crown className="h-3 w-3" />
                  PRO
                </span>
              )}
              {streak > 0 && (
                <span className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium text-orange-400">
                  <Flame className="h-3 w-3" />
                  {streak}j
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{email}</p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 self-start">
          {isPro && (
            <button
              onClick={handlePortal}
              disabled={portalLoading}
              className="flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-purple-500/30 hover:text-purple-400 disabled:opacity-50"
            >
              {portalLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <CreditCard className="h-4 w-4" />
              )}
              Facturation
            </button>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-red-500/40 bg-gradient-to-r from-red-500/15 to-rose-500/15 px-5 py-2.5 text-sm font-semibold text-red-300 shadow-sm transition-all hover:border-red-500/60 hover:from-red-500/25 hover:to-rose-500/25 hover:text-red-200 hover:shadow-md hover:shadow-red-500/20"
          >
            <LogOut className="h-5 w-5" />
            Déconnexion
          </button>
        </div>
      </div>

      {/* XP Level Bar */}
      <div className="mt-6 rounded-lg border border-border/30 bg-background/50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-semibold">
              Niv. {levelInfo.level} — {levelInfo.name}
            </span>
          </div>
          <span className="text-sm font-bold gradient-text-animated">
            {totalXp} XP
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/30">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {nextLevel ? (
          <p className="mt-2 text-xs text-muted-foreground">
            Encore {xpRemaining} XP pour{" "}
            <span className="font-medium text-purple-400">
              {nextLevel.name}
            </span>
          </p>
        ) : (
          <p className="mt-2 text-xs text-emerald-400 font-medium">
            Niveau maximum atteint !
          </p>
        )}
      </div>
    </div>
  );
}
