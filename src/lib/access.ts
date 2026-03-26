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

  // Premium courses: need a purchase
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { hasAccess: false, userId: null, isPro: false };

  // Check purchase
  const { data: purchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .single();

  if (purchase) return { hasAccess: true, userId: user.id, isPro: false };

  return { hasAccess: false, userId: user.id, isPro: false };
}
