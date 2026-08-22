import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, jurisdictions, blogPosts, siteConfig } from "@/lib/site-data";

const CURRENT_CONTENT_DATE = "2026-08-22";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", lastmod: CURRENT_CONTENT_DATE },
          { path: "/about", lastmod: CURRENT_CONTENT_DATE },
          { path: "/services", lastmod: CURRENT_CONTENT_DATE },
          { path: "/jurisdictions", lastmod: CURRENT_CONTENT_DATE },
          { path: "/why-dubai", lastmod: CURRENT_CONTENT_DATE },
          { path: "/blog", lastmod: CURRENT_CONTENT_DATE },
          { path: "/faqs", lastmod: CURRENT_CONTENT_DATE },
          { path: "/contact", lastmod: CURRENT_CONTENT_DATE },
          { path: "/consultation", lastmod: CURRENT_CONTENT_DATE },
          ...services.map((service) => ({
            path: `/services/${service.slug}`,
            lastmod: CURRENT_CONTENT_DATE,
          })),
          ...jurisdictions.map((jurisdiction) => ({
            path: `/jurisdictions/${jurisdiction.slug}`,
            lastmod: CURRENT_CONTENT_DATE,
          })),
          ...blogPosts.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.date })),
        ];

        const urls = entries.map(
          ({ path, lastmod }) =>
            `  <url><loc>${siteConfig.url}${path}</loc><lastmod>${lastmod}</lastmod></url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
