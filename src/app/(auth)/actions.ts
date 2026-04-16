"use server";

import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { siteConfig } from "@/config/site";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const headersList = await headers();
  const origin = headersList.get("origin") || siteConfig.url;

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
  const origin = headersList.get("origin") || siteConfig.url;

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
