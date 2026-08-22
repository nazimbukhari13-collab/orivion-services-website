import { siteConfig } from "@/lib/site-data";

type Crumb = { name: string; path: string };

/**
 * Build a BreadcrumbList JSON-LD <script> head entry, always rooted at Home.
 * Usage in a route head: `scripts: [breadcrumbLd([{ name: "About", path: "/about" }])]`
 */
export function breadcrumbLd(trail: readonly Crumb[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        ...trail.map((c, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: c.name,
          item: `${siteConfig.url}${c.path}`,
        })),
      ],
    }),
  };
}
