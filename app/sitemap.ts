import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pi-north.com";
  const locales = ["en", "es"];
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/industries/healthcare",
    "/industries/telecom",
    "/industries/government",
    "/industries/bfsi",
    "/portfolio",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
