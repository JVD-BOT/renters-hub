import type { MetadataRoute } from "next";

const BASE = "https://rentershub.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-27");
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/rent-increase-check`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/guides/what-changed-may-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/rent-increases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/section-13-notice`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
