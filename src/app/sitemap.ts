import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.url;
const LAST_MOD = new Date("2026-04-17");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/cours`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tarification`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pack-complet`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/leaderboard`, lastModified: LAST_MOD, changeFrequency: "daily", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/accessibilite`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cgv`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
  ];

  const coursePages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/cours/${course.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const chapterListPages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/cours/${course.slug}/chapitres`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const chapterPages: MetadataRoute.Sitemap = courses.flatMap((course) =>
    Array.from({ length: course.chapters }, (_, i) => ({
      url: `${BASE_URL}/cours/${course.slug}/chapitres/${i + 1}`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...coursePages, ...chapterListPages, ...chapterPages];
}
