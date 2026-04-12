"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "@/lib/i18n/context";
import { CircularProgress } from "@/components/ui/circular-progress";
import {
  Mail,
  Calendar,
  BookOpen,
  LogOut,
  TrendingUp,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import type { Course } from "@/lib/courses";

interface PurchasedCourse {
  id: string;
  course_slug: string;
  created_at: string;
  course: Course | undefined;
  isFree?: boolean;
}

interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string | null;
}

function computeAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

interface AccountDashboardProps {
  user: UserProfile;
  purchasedCourses: PurchasedCourse[];
}

function getProgressKey(slug: string): string {
  return `learnai-progress-${slug}`;
}

function getStoredProgress(slug: string): number {
  if (typeof window === "undefined") return 0;
  const val = localStorage.getItem(getProgressKey(slug));
  return val ? parseInt(val, 10) : 0;
}

function setStoredProgress(slug: string, page: number) {
  localStorage.setItem(getProgressKey(slug), String(page));
}

export function AccountDashboard({ user, purchasedCourses }: AccountDashboardProps) {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const map: Record<string, number> = {};
    purchasedCourses.forEach((item) => {
      map[item.course_slug] = getStoredProgress(item.course_slug);
    });
    setProgressMap(map);
  }, [purchasedCourses]);

  function handleSaveProgress(slug: string, totalPages: number) {
    const page = Math.max(0, Math.min(parseInt(editValue, 10) || 0, totalPages));
    setStoredProgress(slug, page);
    setProgressMap((prev) => ({ ...prev, [slug]: page }));
    setEditingSlug(null);
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  // Calculate overall progress
  const coursesWithProgress = purchasedCourses
    .filter((item) => item.course)
    .map((item) => {
      const totalPages = item.course!.chapters;
      const pagesRead = progressMap[item.course_slug] || 0;
      const percentage = totalPages > 0 ? (pagesRead / totalPages) * 100 : 0;
      return { ...item, totalPages, pagesRead, percentage: Math.min(percentage, 100) };
    });

  const overallPercentage =
    coursesWithProgress.length > 0
      ? coursesWithProgress.reduce((sum, c) => sum + c.percentage, 0) / coursesWithProgress.length
      : 0;

  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="animate-fade-in">
          {/* Profile Header Card */}
          <div className="mb-8 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-xl font-bold text-white">
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    {user.firstName} {user.lastName}
                  </h1>
                  <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" />
                      {user.email}
                    </span>
                    {user.birthDate && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {computeAge(user.birthDate)} {t.account.yearsOld}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 self-start rounded-lg border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-red-500/30 hover:text-red-400"
              >
                <LogOut className="h-4 w-4" />
                {t.account.logout}
              </button>
            </div>
          </div>

          {/* Overall Progress Card (only if courses purchased) */}
          {coursesWithProgress.length > 0 && (
            <div className="mb-8 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                {t.account.overallProgress}
              </h2>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
                <CircularProgress percentage={overallPercentage} size={100} strokeWidth={8} />
                <div className="w-full flex-1">
                  {/* Progress bar */}
                  <div className="mb-3 h-3 w-full overflow-hidden rounded-full bg-border/30">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
                      style={{ width: `${overallPercentage}%` }}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
                    <div>
                      <p className="text-2xl font-bold gradient-text-animated">
                        {coursesWithProgress.length}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.account.myTrainings}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold gradient-text-animated">
                        {coursesWithProgress.reduce((s, c) => s + c.pagesRead, 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.account.pagesRead}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold gradient-text-animated">
                        {coursesWithProgress.reduce((s, c) => s + (c.totalPages - c.pagesRead), 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.account.pagesRemaining}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Courses List */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5 text-purple-400" />
              {t.account.myTrainings}
            </h2>

            {purchasedCourses.length === 0 ? (
              <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm">
                <BookOpen className="mx-auto mb-4 h-10 w-10 text-muted-foreground/50" />
                <p className="mb-2 text-muted-foreground">{t.account.noTrainings}</p>
                <Link
                  href="/cours"
                  className="btn-gradient mt-4 inline-block rounded-lg px-6 py-3 text-sm font-medium text-white"
                >
                  {t.account.discoverTrainings}
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {purchasedCourses.map((item) => {
                  const totalPages = item.course?.chapters || 0;
                  const pagesRead = progressMap[item.course_slug] || 0;
                  const percentage = totalPages > 0 ? Math.min((pagesRead / totalPages) * 100, 100) : 0;
                  const isBundle = false;
                  const isEditing = editingSlug === item.course_slug;
                  const isFreeItem = (item as PurchasedCourse).isFree === true;

                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        {/* Course info + Progress circle */}
                        <div className="flex flex-1 items-center gap-4">
                          {!isBundle ? (
                            <CircularProgress percentage={percentage} size={64} strokeWidth={5} />
                          ) : (
                            <div
                              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${item.course?.color || "from-purple-500 to-blue-500"}`}
                            >
                              <BookOpen className="h-7 w-7 text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="font-semibold">
                              {item.course?.title || item.course_slug}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {isFreeItem ? t.account.freeCourse : `${t.account.purchasedOn} ${new Date(item.created_at).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}`}
                            </p>
                            {!isBundle && (
                              <div className="mt-2">
                                {/* Mini progress bar */}
                                <div className="mb-1 h-1.5 w-full max-w-[200px] overflow-hidden rounded-full bg-border/30">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {pagesRead}/{totalPages} {t.account.pagesRead}
                                  {" · "}
                                  {totalPages - pagesRead} {t.account.pagesRemaining}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          {!isBundle && !isEditing && (
                            <button
                              onClick={() => {
                                setEditingSlug(item.course_slug);
                                setEditValue(String(pagesRead));
                              }}
                              className="flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-purple-500/30 hover:text-purple-400"
                            >
                              <ChevronRight className="h-3.5 w-3.5" />
                              {t.account.updateProgress}
                            </button>
                          )}
                          {isEditing && (
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="number"
                                  min={0}
                                  max={totalPages}
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  className="w-20 rounded-lg border border-border/50 bg-background px-2 py-1.5 text-center text-sm outline-none focus:border-purple-500"
                                />
                                <span className="text-xs text-muted-foreground">/ {totalPages}</span>
                              </div>
                              <button
                                onClick={() => handleSaveProgress(item.course_slug, totalPages)}
                                className="rounded-lg bg-purple-500/20 px-3 py-1.5 text-xs font-medium text-purple-400 transition-colors hover:bg-purple-500/30"
                              >
                                {t.account.save}
                              </button>
                              <button
                                onClick={() => setEditingSlug(null)}
                                className="rounded-lg border border-border/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {t.account.cancel}
                              </button>
                            </div>
                          )}
                          <Link
                            href={`/cours/${item.course_slug}/chapitres`}
                            className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-400 transition-colors hover:bg-purple-500/20"
                          >
                            <PlayCircle className="h-3.5 w-3.5" />
                            {t.courseDetail.startCourse}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
