import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/blog-posts";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
    },
    {
      url: `${siteUrl}/blog`,
    },
    ...getAllSlugs().map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
    })),
  ];
}
