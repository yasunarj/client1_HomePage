import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.tochigi-sauna-neppakyoukai.jp"; // ←www付きに統一

  const pages = [
    "/", // トップ
    // "/about",
    // "/events",
    // "/contact",
    // 必要に応じて追記
  ];

  const now = new Date();

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));
}
