"use client";

import { useState, useCallback } from "react";

export interface AwardResult {
  xp_gained: number;
  total_xp: number;
  level: number;
  current_streak: number;
  badges_earned: string[];
}

interface ProgressAwardPayload {
  type: "chapter" | "quiz";
  courseSlug: string;
  chapterNumber: number;
  score?: number;
  totalQuestions?: number;
}

export function useProgressAward() {
  const [lastAward, setLastAward] = useState<AwardResult | null>(null);

  const awardProgress = useCallback(async (payload: ProgressAwardPayload): Promise<AwardResult | null> => {
    try {
      const res = await fetch("/api/progress/award", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) return null;

      const data: AwardResult = await res.json();
      setLastAward(data);
      return data;
    } catch {
      return null;
    }
  }, []);

  return { awardProgress, lastAward };
}
