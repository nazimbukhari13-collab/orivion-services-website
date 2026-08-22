import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/site-data";
import { breadcrumbLd } from "@/lib/seo";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights on UAE Business Setup and Digital | Orivion" },
      {
        name: "description",
        content:
          "Researched guides on UAE company formation, jurisdictions, tax, e-commerce and digital delivery.",
      },
      { property: "og:url", content: "https://orivion.ae/blog" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/blog" }],
    scripts: [breadcrumbLd([{ name: "Insights", path: "/blog" }])],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        image="/media/pages/insights.webp"
        title={
          <>
            Business and digital <em>knowledge base.</em>
          </>
        }
        sub="Practical guides on UAE business decisions, digital delivery and the rules or standards that shape them."
      />

      <section>
        <div className="wrap">
          <div className="o-grid cols-3">
            {blogPosts.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="o-post rv">
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="date">
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {p.readMins} min read
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
