import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dtvkmxmkvmolnzcvdoqe.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0dmtteG1rdm1vbG56Y3Zkb3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMjI5NzMsImV4cCI6MjA4NjY5ODk3M30.kDRrr0fTybreYL581C7hFT8IDrPRqaXY39iJN91XAK8";

let client: ReturnType<typeof createSupabaseClient> | null = null;

export function createClient() {
  if (typeof window === "undefined") return null;
  if (client) return client;

  client = createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}
