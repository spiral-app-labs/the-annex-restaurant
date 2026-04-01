import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://the-annex-restaurant-redesign.vercel.app/sitemap.xml",
  };
}
