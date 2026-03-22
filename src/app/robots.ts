import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/compte", "/api/", "/auth/"],
      },
    ],
    sitemap: "https://learnai-gules.vercel.app/sitemap.xml",
  };
}
