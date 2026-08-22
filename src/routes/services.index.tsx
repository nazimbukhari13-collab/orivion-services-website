import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services, SERVICE_CATEGORIES } from "@/lib/site-data";
import { breadcrumbLd } from "@/lib/seo";
import { PageHero, SectionHead, CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Business Setup and Digital Services in Dubai | Orivion" },
      {
        name: "description",
        content:
          "Company formation, licensing, PRO, compliance, accounting, websites, custom software, CRM, marketing, social media and AI integration.",
      },
      { property: "og:title", content: "Business Setup, Digital & Technology Services — Orivion" },
      { property: "og:url", content: "https://orivion.ae/services" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Orivion services",
          numberOfItems: services.length,
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `https://orivion.ae/services/${service.slug}`,
          })),
        }),
      },
      breadcrumbLd([{ name: "Services", path: "/services" }]),
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        image="/media/pages/services.webp"
        title={
          <>
            Business setup and <em>digital technology.</em>
          </>
        }
        sub="Fourteen clearly defined services across two connected tracks. Engage one service or combine the expertise your business needs."
      >
        <OButton to="/consultation" variant="fill" big>
          Start a conversation
        </OButton>
      </PageHero>

      {SERVICE_CATEGORIES.map((cat, i) => (
        <section key={cat} className={i % 2 === 1 ? "o-alt" : undefined}>
          <div className="wrap">
            <SectionHead
              tag={cat}
              title={
                cat === "Business Setup Services" ? (
                  <>Set up, license and support the company</>
                ) : (
                  <>Design, build and grow</>
                )
              }
              note={
                cat === "Business Setup Services"
                  ? "Formation, licensing, PRO, compliance, accounting, banking, workspace and supporting corporate work."
                  : "Websites, custom software, CRM automation, digital marketing, social media and practical AI integration."
              }
            />
            <div className="o-grid cols-3" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              {services
                .filter((s) => s.category === cat)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="o-feature rv"
                  >
                    <div className="ic">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <span className="link">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
