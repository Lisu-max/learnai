import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/config/site";

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const coursePages = courses.map((course) => ({
    url: `${BASE_URL}/cours/${course.slug}`,
    lastModified: new Date("2026-04-16"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/cours`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...coursePages,
    {
      url: `${BASE_URL}/cgv`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
