import type { MetadataRoute } from "next";
import { brandHref, brands } from "@/content/brands";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/company", "/brands", "/approach", "/future-vision", "/careers", "/contact"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}`, priority: r === "" ? 1 : 0.8 })),
    ...brands.map((b) => ({ url: `${site.url}${brandHref(b)}`, priority: 0.7 })),
  ];
}
