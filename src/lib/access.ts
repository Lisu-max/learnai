import { createClient } from "@/lib/supabase/server";

export async function hasAccessToCourse(courseSlug: string): Promise<{
  hasAccess: boolean;
  userId: string | null;
}> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { hasAccess: false, userId: null };

  // Check direct purchase
  const { data } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .single();

  if (data) return { hasAccess: true, userId: user.id };

  // Check if user bought the pack (which includes all courses)
  const { data: packPurchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", "pack-complet-ia-2026")
    .single();

  return { hasAccess: !!packPurchase, userId: user.id };
}
