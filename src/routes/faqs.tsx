import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ExternalLink } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { PageHero, CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/faqs")({
  head: () => {
    const items = faqs.flatMap((c) => c.items);
    return {
      meta: [
        { title: "FAQs — UAE Business Setup & Digital Technology | Orivion" },
        {
          name: "description",
          content:
            "Clear answers about UAE company setup, licensing, tax, visas, websites, SEO, software, automation and AI integration.",
        },
        { property: "og:url", content: "https://orivion.ae/faqs" },
      ],
      links: [{ rel: "canonical", href: "https://orivion.ae/faqs" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          }),
        },
      ],
    };
  },
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            The questions our clients <em>ask most.</em>
          </>
        }
        sub="Clear answers about forming and operating a UAE company, plus the digital systems and marketing work that support it."
      >
        <OButton to="/consultation" variant="fill" big>
          Ask an advisor
        </OButton>
      </PageHero>

      <section>
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div style={{ display: "grid", gap: "clamp(36px,5vw,56px)" }}>
            {faqs.map((cat) => (
              <div key={cat.category} className="rv">
                <h2 style={{ fontSize: "clamp(24px,3vw,34px)", marginBottom: "20px" }}>
                  {cat.category}
                </h2>
                <div className="o-faq">
                  {cat.items.map((i) => (
                    <details key={i.q}>
                      <summary>
                        <span>{i.q}</span>
                        <ChevronDown className="chev h-5 w-5" />
                      </summary>
                      <p className="ans">{i.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="o-alt">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div className="o-prose rv">
            <h2>Primary references</h2>
            <p>
              UAE rules and technology standards change. These sources are checked when a current
              recommendation or scope is prepared.
            </p>
            <ul className="o-source-list">
              <li>
                <a
                  href="https://u.ae/en/information-and-services/business"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  UAE Government business portal{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics.aspx"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Federal Tax Authority Corporate Tax guidance{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://icp.gov.ae/en/services/uae-golden-residency/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ICP Golden Residency guide{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Google SEO Starter Guide{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nist.gov/itl/ai-risk-management-framework"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  NIST AI Risk Management Framework{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
