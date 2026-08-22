import { createFileRoute, notFound } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { jurisdictions } from "@/lib/site-data";
import { jurisdictionDetails } from "@/lib/jurisdiction-details";
import { CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/jurisdictions/$slug")({
  loader: ({ params }) => {
    const j = jurisdictions.find((x) => x.slug === params.slug);
    if (!j) throw notFound();
    return { j };
  },
  head: ({ loaderData }) => {
    const url = `https://orivion.ae/jurisdictions/${loaderData?.j.slug ?? ""}`;
    const title = `${loaderData?.j.title ?? ""} company setup in the UAE — Orivion`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData?.j.short ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData?.j.short ?? "" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://orivion.ae/" },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Jurisdictions",
                    item: "https://orivion.ae/jurisdictions",
                  },
                  { "@type": "ListItem", position: 3, name: loaderData.j.title, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="wrap" style={{ padding: "160px 0" }}>
      Jurisdiction not found.
    </div>
  ),
});

function Page() {
  const { j } = Route.useLoaderData();
  const detail = jurisdictionDetails[j.slug];
  const cards: [string, string][] = [
    ["Ownership", j.ownership],
    ["Market access", j.market],
    ["Office", j.office],
    ["Visas", j.visas],
    ["Tax", j.tax],
    ["Best for", j.bestFor],
  ];

  return (
    <>
      <section className="o-hero o-hero--media">
        <div className="o-hero-bg" aria-hidden="true">
          <img
            src={`/media/jurisdictions/${j.slug}.jpg`}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
          <div className="o-hero-veil" />
        </div>
        <div className="wrap">
          <div className="sec-tag">Jurisdiction</div>
          <h1>{j.title} company setup</h1>
          <p className="sub">{j.short}</p>
          <div className="actions">
            <OButton to="/consultation" variant="fill" big>
              Get a tailored quote
            </OButton>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="o-grid cols-2">
            {cards.map(([k, v]) => (
              <div key={k} className="o-feature rv">
                <div className="sec-tag" style={{ marginBottom: "10px" }}>
                  {k}
                </div>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="o-alt">
        <div className="wrap">
          <div className="o-split" style={{ alignItems: "start" }}>
            <div className="o-prose rv">
              <h2>How this structure works</h2>
              <p>{detail.overview}</p>
              <h3>It may fit when</h3>
              <ul>
                {detail.suitableWhen.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Important trade-offs</h3>
              <ul>
                {detail.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="o-prose rv">
              <h2>Typical setup path</h2>
              <ol>
                {detail.setupPath.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <h3>Primary references</h3>
              <p>
                Rules differ by activity, authority and applicant. These sources provide the
                starting point, and current requirements should be confirmed before an application.
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

      <CTASection />
    </>
  );
}
