import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { services, siteConfig, serviceSeo } from "@/lib/site-data";
import { serviceDetails } from "@/lib/service-details";
import { CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return { slug: svc.slug, title: svc.title, summary: svc.summary, category: svc.category };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Service";
    const slug = loaderData?.slug ?? "";
    const url = `${siteConfig.url}/services/${slug}`;
    const seo = serviceSeo[slug];
    const pageTitle = seo?.title ?? `${title} | Orivion`;
    const description = seo?.description ?? loaderData?.summary ?? "";
    const image = `${siteConfig.url}/media/services/${slug}.jpg`;
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Service",
                    "@id": `${url}#service`,
                    name: loaderData.title,
                    description: loaderData.summary,
                    serviceType: loaderData.title,
                    category: loaderData.category,
                    url,
                    provider: { "@id": `${siteConfig.url}/#organization` },
                    areaServed:
                      loaderData.category === "Business Setup Services"
                        ? "United Arab Emirates"
                        : "Worldwide",
                  },
                  {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: `${siteConfig.url}/`,
                      },
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: "Services",
                        item: `${siteConfig.url}/services`,
                      },
                      { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
                    ],
                  },
                  ...(serviceDetails[loaderData.slug]?.faqs?.length
                    ? [
                        {
                          "@type": "FAQPage",
                          "@id": `${url}#faq`,
                          mainEntity: serviceDetails[loaderData.slug]!.faqs!.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                          })),
                        },
                      ]
                    : []),
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="wrap" style={{ padding: "160px 0" }}>
      Service not found.
    </div>
  ),
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const svc = services.find((s) => s.slug === slug)!;
  const detail = serviceDetails[svc.slug];
  const Icon = svc.icon;
  const isDigital = svc.category === "Digital & Technology";
  const sameCategory = services.filter((s) => s.slug !== svc.slug && s.category === svc.category);
  const others = (
    sameCategory.length ? sameCategory : services.filter((s) => s.slug !== svc.slug)
  ).slice(0, 3);

  return (
    <>
      <section className="o-hero o-hero--media">
        <div className="o-hero-bg" aria-hidden="true">
          <img
            src={`/media/services/${svc.slug}.webp`}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
          <div className="o-hero-veil" />
        </div>
        <div className="wrap">
          <div className="sec-tag">{isDigital ? "Digital & technology" : "Business setup"}</div>
          <h1>{svc.title}</h1>
          <p className="sub">{svc.summary}</p>
          <div className="actions">
            <OButton to="/consultation" variant="fillw" big>
              Start a conversation
            </OButton>
            <OButton to="/services" variant="light" big>
              All services
            </OButton>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="o-split" style={{ alignItems: "start" }}>
            <div className="rv">
              <div className="o-feature" style={{ background: "var(--bg2)" }}>
                <div className="ic">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 style={{ fontSize: "20px" }}>What's included</h3>
                <ul className="o-checks" style={{ marginTop: "18px" }}>
                  {svc.bullets.map((b) => (
                    <li key={b}>
                      <CheckCircle2 className="h-5 w-5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="o-feature" style={{ marginTop: "18px" }}>
                <h3 style={{ fontSize: "18px" }}>Other services</h3>
                <div style={{ marginTop: "14px", display: "grid", gap: "2px" }}>
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 0",
                        borderBottom: "1px solid var(--line)",
                        textDecoration: "none",
                        color: "var(--ink)",
                        fontSize: "14.5px",
                      }}
                    >
                      <span>{o.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="o-prose rv">
              <h2>What this service covers</h2>
              <p>{detail.overview}</p>

              <h3>Who it is for</h3>
              <ul>
                {detail.suitableFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3>What to plan for</h3>
              <ul>
                {detail.considerations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3>How the work moves forward</h3>
              <ol>
                {detail.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>

              <h3>Scope, timing and cost</h3>
              <p>
                {isDigital
                  ? "The proposal may be fixed-scope, phased or ongoing. It sets out deliverables, review points, responsibilities and support so the commercial model follows the work required."
                  : "Authority fees, third-party costs and professional support are separated in the written proposal. Timing depends on the jurisdiction, activity, applicant documents and external approvals."}
              </p>

              <h3>Standards and source material</h3>
              <p>
                These primary references explain the main rules or standards considered when the
                scope is prepared. Requirements can change, so the current authority guidance is
                checked before submission or delivery.
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
            </div>
          </div>
        </div>
      </section>

      {detail.faqs && detail.faqs.length > 0 && (
        <section className="o-alt">
          <div className="wrap">
            <div className="sec-head rv">
              <div>
                <div className="sec-tag">FAQs</div>
                <h2>Questions we hear on {svc.title.toLowerCase()}</h2>
              </div>
            </div>
            <div className="o-faq rv" style={{ maxWidth: "820px" }}>
              {detail.faqs.map((f) => (
                <details key={f.q}>
                  <summary>
                    <span>{f.q}</span>
                    <ChevronDown className="chev h-5 w-5" />
                  </summary>
                  <p className="ans">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
