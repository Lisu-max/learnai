"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function usePurchase(courseSlug: string) {
  const [hasPurchased, setHasPurchased] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (cancelled) return;
        if (!user) { setLoading(false); return; }

        const { data } = await supabase
          .from("purchases")
          .select("id")
          .eq("user_id", user.id)
          .eq("course_slug", courseSlug)
          .maybeSingle();

        if (!cancelled) {
          setHasPurchased(!!data);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }

    check();
    return () => { cancelled = true; };
  }, [courseSlug]);

  return { hasPurchased, loading };
}
