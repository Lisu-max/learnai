import { createClient } from "@/lib/supabase/server";
import { isFreeCourse } from "@/lib/courses";

export async function hasAccessToCourse(courseSlug: string): Promise<{
  hasAccess: boolean;
  userId: string | null;
  isPro: boolean;
}> {
  // Free courses: anyone can access
  if (isFreeCourse(courseSlug)) {
    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      return { hasAccess: true, userId: user?.id || null, isPro: false };
    } catch {
      return { hasAccess: true, userId: null, isPro: false };
    }
  }

  // Premium courses: need auth
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { hasAccess: false, userId: null, isPro: false };

  // Check if user is Pro subscriber (has access to all premium courses)
  const { data: profile } = await supabase
    .from("profiles")
    .select("subscription_status")
    .eq("id", user.id)
    .maybeSingle();

  const isPro = profile?.subscription_status === "pro";
  if (isPro) return { hasAccess: true, userId: user.id, isPro: true };

  // Check individual purchase
  const { data: purchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .maybeSingle();

  if (purchase) return { hasAccess: true, userId: user.id, isPro: false };

  return { hasAccess: false, userId: user.id, isPro: false };
}
