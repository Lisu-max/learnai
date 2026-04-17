"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

type SubscriptionStatus = "free" | "pro" | "past_due" | string;

interface UseSubscriptionReturn {
  isPro: boolean;
  status: SubscriptionStatus;
  loading: boolean;
}

export function useSubscription(): UseSubscriptionReturn {
  const [status, setStatus] = useState<SubscriptionStatus>("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    let channel: RealtimeChannel | null = null;

    async function fetchSubscription() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setStatus("free");
          setLoading(false);
          return;
        }

        const { data: profile } = await supabase
          .from("profiles")
          .select("subscription_status")
          .eq("id", user.id)
          .maybeSingle();

        setStatus(profile?.subscription_status || "free");
        setLoading(false);

        // Subscribe to realtime changes
        channel = supabase
          .channel("subscription-status")
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "profiles",
              filter: `id=eq.${user.id}`,
            },
            (payload) => {
              const newStatus = payload.new.subscription_status;
              if (newStatus) {
                setStatus(newStatus);
              }
            }
          )
          .subscribe();
      } catch {
        setStatus("free");
        setLoading(false);
      }
    }

    fetchSubscription();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  return {
    isPro: status === "pro",
    status,
    loading,
  };
}
