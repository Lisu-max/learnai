import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCourseBySlug, FREE_SLUGS } from "@/lib/courses";
import { AccountDashboard } from "@/components/account/account-dashboard";

export const metadata: Metadata = {
  title: "Mon compte",
};

export default async function ComptePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data: purchases } = await supabase
    .from("purchases")
    .select("*")
    .order("created_at", { ascending: false });

  const purchasedCourses = (purchases || []).map((p) => ({
    ...p,
    course: getCourseBySlug(p.course_slug),
  }));

  // Add free courses to the dashboard (they're always accessible)
  const purchasedSlugs = new Set(purchasedCourses.map((p) => p.course_slug));
  const freeCourseEntries = FREE_SLUGS.filter((slug) => !purchasedSlugs.has(slug)).map((slug) => ({
    id: `free-${slug}`,
    course_slug: slug,
    created_at: user.created_at || new Date().toISOString(),
    course: getCourseBySlug(slug),
    isFree: true,
  }));

  const allCourses = [...freeCourseEntries, ...purchasedCourses];

  const userProfile = {
    email: user.email || "",
    firstName: (user.user_metadata?.first_name as string) || "",
    lastName: (user.user_metadata?.last_name as string) || "",
    birthDate: (user.user_metadata?.birth_date as string) || null,
  };

  return (
    <AccountDashboard
      user={userProfile}
      purchasedCourses={allCourses}
    />
  );
}
