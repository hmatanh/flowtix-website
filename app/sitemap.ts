import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

const BASE = "https://flowtix.ai";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/accessibility/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes];
}
