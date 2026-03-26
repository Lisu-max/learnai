"use server";

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const headersList = await headers();
  const origin = headersList.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "https://learnai-csa3.vercel.app";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true, redirectTo: "/connexion?verified=check" };
}

export async function login(formData: FormData) {
  const supabase = await createClient();

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
  const supabase = await createClient();

  const headersList = await headers();
  const origin = headersList.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "https://learnai-csa3.vercel.app";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
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
