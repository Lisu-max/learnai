"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function usePurchase(courseSlug: string) {
  const [hasPurchased, setHasPurchased] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function check() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { setLoading(false); return; }

      const { data } = await supabase
        .from("purchases")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_slug", courseSlug)
        .single();

      setHasPurchased(!!data);
      setLoading(false);
    }

    check();
  }, [courseSlug]);

  return { hasPurchased, loading };
}
