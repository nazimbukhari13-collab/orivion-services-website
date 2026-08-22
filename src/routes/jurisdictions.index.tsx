import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { jurisdictions } from "@/lib/site-data";
import { PageHero, SectionHead, CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/jurisdictions/")({
  head: () => ({
    meta: [
      { title: "UAE Jurisdictions: Mainland, Free Zone & Offshore — Orivion" },
      {
        name: "description",
        content:
          "Compare UAE Mainland, Free Zone and Offshore company structures. Ownership, market access, visas, tax and best-fit use cases.",
      },
      { property: "og:url", content: "https://orivion.ae/jurisdictions" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/jurisdictions" }],
  }),
  component: Page,
});

const rows = [
  ["Ownership", "ownership"],
  ["Market access", "market"],
  ["Office", "office"],
  ["Visas", "visas"],
  ["Tax", "tax"],
  ["Best for", "bestFor"],
] as const;

const choiceFactors = [
  {
    title: "Customers and market access",
    text: "Start with where the company will sell, deliver and contract. This usually matters more than an advertised setup price.",
  },
  {
    title: "Activity and approvals",
    text: "The exact licensed activity can determine the authority, legal form, premises and external approvals required.",
  },
  {
    title: "People and premises",
    text: "Plan the workspace and expected visa requirement together because packages and quotas vary by authority.",
  },
  {
    title: "Tax and substance",
    text: "Free Zone does not automatically mean tax-free. Assess the income, customers, substance and compliance position before choosing.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Jurisdictions"
        image="/media/pages/jurisdictions.jpg"
        title={
          <>
            Mainland, Free Zone or Offshore: the <em>right structure</em> matters.
          </>
        }
        sub="The wrong choice can lock you out of customers or leave profit in the wrong tax box. Here is how the three options compare."
      >
        <OButton to="/consultation" variant="fill" big>
          Which fits me?
        </OButton>
      </PageHero>

      <section>
        <div className="wrap">
          <div className="o-tablewrap rv">
            <table className="o-table">
              <thead>
                <tr>
                  <th className="k">Criteria</th>
                  {jurisdictions.map((j) => (
                    <th key={j.slug} className="k">
                      {j.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, key]) => (
                  <tr key={label}>
                    <td className="k">{label}</td>
                    {jurisdictions.map((j) => (
                      <td key={j.slug}>{j[key]}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="k">Learn more</td>
                  {jurisdictions.map((j) => (
                    <td key={j.slug}>
                      <Link to="/jurisdictions/$slug" params={{ slug: j.slug }}>
                        Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="o-alt">
        <div className="wrap">
          <SectionHead
            tag="Decision guide"
            title={<>Choose around the operating model</>}
            note="A sound structure fits the activity, customers, people and compliance position, not only the initial licence fee."
          />
          <div className="o-grid cols-2" style={{ marginTop: "clamp(36px,5vw,56px)" }}>
            {choiceFactors.map((factor) => (
              <article className="o-feature rv" key={factor.title}>
                <h3>{factor.title}</h3>
                <p>{factor.text}</p>
              </article>
            ))}
          </div>
          <div className="o-prose rv" style={{ marginTop: "clamp(36px,5vw,56px)" }}>
            <h3>Research starting points</h3>
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
                <a href="https://app.invest.dubai.ae/" target="_blank" rel="noreferrer noopener">
                  Invest in Dubai business setup{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics.aspx"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Federal Tax Authority guidance{" "}
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
