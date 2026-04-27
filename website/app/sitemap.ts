import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services/intelligence-artificielle", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/agents-ia", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/automatisation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/chatbot-ia", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/visibilite-web", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/seo", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/seo-local", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/aeo", priority: 0.95, changeFrequency: "monthly" },
    { path: "/services/geo", priority: 0.95, changeFrequency: "monthly" },
    { path: "/services/conception-web", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries/b2b", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/e-commerce", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/startup", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/saas", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/personnalite-publique", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/immobilier", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/a-propos", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  const posts = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPaths.map((s) => ({
      url: `${base}${s.path}`,
      lastModified: now,
      changeFrequency: s.changeFrequency,
      priority: s.priority,
    })),
    ...posts,
  ];
}
