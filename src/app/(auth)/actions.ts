"use server";

import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function signup(formData: FormData) {
  const supabase = getSupabase();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://learnai-gules.vercel.app";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${baseUrl}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true, redirectTo: "/connexion?verified=check" };
}

export async function login(formData: FormData) {
  const supabase = getSupabase();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true, redirectTo: "/" };
}

export async function loginWithGoogle() {
  const supabase = getSupabase();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://learnai-gules.vercel.app";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${baseUrl}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  if (data.url) {
    return { success: true, redirectTo: data.url };
  }

  return { error: "Une erreur est survenue." };
}
