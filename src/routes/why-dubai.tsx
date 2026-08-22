import { createFileRoute } from "@tanstack/react-router";
import {
  Globe2,
  TrendingUp,
  Plane,
  Building2,
  Landmark,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PageHero, SectionHead, CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/why-dubai")({
  head: () => ({
    meta: [
      { title: "Why Dubai — A hub for international business | Orivion" },
      {
        name: "description",
        content:
          "Why companies choose Dubai: international connectivity, Mainland and Free Zone options, a diversified economy, residency routes and digital ambition.",
      },
      { property: "og:url", content: "https://orivion.ae/why-dubai" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/why-dubai" }],
  }),
  component: Page,
});

const points = [
  {
    icon: Globe2,
    t: "International connectivity",
    d: "Dubai connects business across the Middle East, Africa, Asia and Europe through major aviation, logistics and trade infrastructure.",
  },
  {
    icon: Building2,
    t: "More than one setup route",
    d: "Companies can compare Mainland and multiple Free Zone options around their activity, customers, premises and ownership plan.",
  },
  {
    icon: Landmark,
    t: "Government business services",
    d: "Dubai provides digital tools for checking activities, reserving names, applying for licences and verifying business records.",
  },
  {
    icon: TrendingUp,
    t: "A diversified economy",
    d: "Trade, finance, tourism, logistics, professional services and technology create several routes to customers and partnerships.",
  },
  {
    icon: Plane,
    t: "Residency options for talent",
    d: "Employment, investor and long-term residence categories support eligible founders, professionals and families under defined conditions.",
  },
  {
    icon: Sparkles,
    t: "Investment in future sectors",
    d: "Dubai's economic agenda and current initiatives place continued emphasis on digital services, innovation, finance and artificial intelligence.",
  },
];

const planningNotes = [
  {
    title: "Dubai is a base, not a business model",
    text: "The setup should still begin with customers, pricing, delivery and a credible route to market. A licence enables activity; it does not create demand on its own.",
  },
  {
    title: "Choose the jurisdiction after the activity",
    text: "Mainland and Free Zone options have different rules and costs. The activity, customer location, visas and premises should lead the decision.",
  },
  {
    title: "Budget beyond incorporation",
    text: "Plan for renewals, workspace, immigration, banking readiness, accounting, tax and operating systems, not only the first licence invoice.",
  },
  {
    title: "Verify regulated claims",
    text: "Tax, ownership, visas and sector approvals depend on the facts. Current authority guidance should be checked before commitments are made.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Why Dubai"
        image="/media/pages/why-dubai.jpg"
        title={
          <>
            A serious place to <em>build a business.</em>
          </>
        }
        sub="Dubai combines international reach with several routes for establishing and operating a company. The opportunity is strongest when the structure follows a clear commercial plan."
      >
        <OButton to="/consultation" variant="fill" big>
          Start your setup
        </OButton>
      </PageHero>

      <section>
        <div className="wrap">
          <SectionHead
            tag="The case"
            title={<>Six practical reasons companies consider Dubai</>}
            note="The right benefit depends on the activity, customers, team and chosen jurisdiction."
          />
          <div className="o-grid cols-3" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            {points.map((p) => (
              <div className="o-feature rv" key={p.t}>
                <div className="ic">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="o-alt">
        <div className="wrap">
          <SectionHead
            tag="Before you decide"
            title={<>Turn the opportunity into an operating plan</>}
            note="A balanced setup decision includes commercial, regulatory and ongoing cost questions."
          />
          <div className="o-grid cols-2" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            {planningNotes.map((note) => (
              <article className="o-feature rv" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
          <div className="o-prose rv" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <h3>Official research sources</h3>
            <ul className="o-source-list">
              <li>
                <a
                  href="https://www.dubai.ae/investing/starting-a-business/why-set-up-your-business-in-dubai"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Government of Dubai business overview{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.dubai.ae/dubai-economy"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Government of Dubai economy overview{" "}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://app.invest.dubai.ae/" target="_blank" rel="noreferrer noopener">
                  Invest in Dubai <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  UAE Government Corporate Tax overview{" "}
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
