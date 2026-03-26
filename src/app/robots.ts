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
    sitemap: "https://learnai-csa3.vercel.app/sitemap.xml",
  };
}
