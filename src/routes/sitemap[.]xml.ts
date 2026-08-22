import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, jurisdictions, blogPosts, siteConfig } from "@/lib/site-data";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/about",
          "/services",
          "/jurisdictions",
          "/why-dubai",
          "/blog",
          "/faqs",
          "/contact",
          "/consultation",
          ...services.map((s) => `/services/${s.slug}`),
          ...jurisdictions.map((j) => `/jurisdictions/${j.slug}`),
          ...blogPosts.map((p) => `/blog/${p.slug}`),
        ];
        const urls = paths.map(
          (p) => `  <url><loc>${siteConfig.url}${p}</loc><changefreq>weekly</changefreq></url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
