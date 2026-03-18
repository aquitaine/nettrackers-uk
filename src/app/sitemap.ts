import type { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/work";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://bessdamm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = getAllCaseStudies().map((cs) => ({
    url: `${BASE_URL}/work/${cs.slug}`,
    lastModified: new Date(cs.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/seo-audits`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/seo-retainers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/services/web-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    ...caseStudies,
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...posts,
  ];
}
