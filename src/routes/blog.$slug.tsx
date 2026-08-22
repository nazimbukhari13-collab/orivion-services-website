import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { articleDetails } from "@/lib/article-details";
import { CTASection } from "@/components/orivion/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const url = `https://orivion.ae/blog/${loaderData?.post.slug ?? ""}`;
    return {
      meta: [
        { title: `${loaderData?.post.title ?? ""} — Orivion` },
        { name: "description", content: loaderData?.post.excerpt ?? "" },
        { property: "og:title", content: loaderData?.post.title ?? "" },
        { property: "og:description", content: loaderData?.post.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: loaderData.post.title,
                datePublished: loaderData.post.date,
                articleSection: loaderData.post.category,
                description: loaderData.post.excerpt,
                mainEntityOfPage: url,
                author: { "@type": "Organization", name: "Orivion", url: "https://orivion.ae/" },
                publisher: { "@id": "https://orivion.ae/#organization" },
              }),
            },
          ]
        : [],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="wrap" style={{ padding: "160px 0" }}>
      Article not found.
    </div>
  ),
});

function Page() {
  const { post } = Route.useLoaderData();
  const detail = articleDetails[post.slug];
  return (
    <>
      <section className="o-hero">
        <div className="aura" aria-hidden="true" />
        <div className="wrap" style={{ maxWidth: "820px" }}>
          <Link
            to="/blog"
            className="link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "24px",
            }}
          >
            <ArrowLeft className="h-4 w-4" /> Back to insights
          </Link>
          <div className="sec-tag">{post.category}</div>
          <h1 style={{ fontSize: "clamp(34px,5vw,64px)", maxWidth: "20ch" }}>{post.title}</h1>
          <div
            className="date"
            style={{
              marginTop: "20px",
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--faint)",
            }}
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readMins} min read
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <article className="o-prose">
            <p className="o-lede">{post.excerpt}</p>
            {detail.sections.map((section) => (
              <section className="o-article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <h2>Primary references</h2>
            <p>
              Rules and standards can change. Check the current source and obtain specialist advice
              for decisions based on your facts.
            </p>
            <ul className="o-source-list">
              {detail.references.map((reference) => (
                <li key={reference.url}>
                  <a href={reference.url} target="_blank" rel="noreferrer noopener">
                    {reference.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
