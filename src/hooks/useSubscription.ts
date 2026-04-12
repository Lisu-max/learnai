"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

interface UseSubscriptionReturn {
  isPro: boolean;
  status: string;
  loading: boolean;
}

export function useSubscription(): UseSubscriptionReturn {
  const [status, setStatus] = useState("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    let channelRef: ReturnType<typeof supabase.channel> | null = null;

    async function fetchSubscription() {
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
        .single();

      setStatus(profile?.subscription_status || "free");
      setLoading(false);

      // Subscribe to realtime changes
      channelRef = supabase
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
    }

    fetchSubscription();

    return () => {
      if (channelRef) {
        supabase.removeChannel(channelRef);
      }
    };
  }, []);

  return {
    isPro: status === "pro",
    status,
    loading,
  };
}
