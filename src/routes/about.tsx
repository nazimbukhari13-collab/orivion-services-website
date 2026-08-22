import { createFileRoute } from "@tanstack/react-router";
import { Focus, Network, Scale, HeartHandshake } from "lucide-react";
import { PageHero, SectionHead, CTASection, OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Orivion | Business Setup and Digital Team in Dubai" },
      {
        name: "description",
        content:
          "Orivion connects web design, software, marketing, social media management and UAE corporate services through one accountable team.",
      },
      { property: "og:title", content: "About Orivion" },
      { property: "og:url", content: "https://orivion.ae/about" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Focus,
    t: "Clear",
    d: "The scope, owner and next decision should always be easy to understand.",
  },
  {
    icon: Network,
    t: "Connected",
    d: "Each discipline works independently without losing sight of the wider business.",
  },
  {
    icon: Scale,
    t: "Right-sized",
    d: "The delivery model should fit the actual need, without unnecessary layers.",
  },
  {
    icon: HeartHandshake,
    t: "Long-term",
    d: "We build working relationships, not one-off transactions.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our firm"
        image="/media/pages/about.jpg"
        title={
          <>
            One connected team for <em>what comes next.</em>
          </>
        }
        sub="Orivion brings digital delivery and corporate support together without turning either side into an afterthought."
      >
        <OButton to="/consultation" variant="fill" big>
          Start a conversation
        </OButton>
        <OButton to="/services" big>
          Our services
        </OButton>
      </PageHero>

      <section>
        <div className="wrap">
          <div className="o-split">
            <div className="o-panel rv">
              <div className="sec-tag">How Orivion is organised</div>
              <h3 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 400 }}>
                Two service tracks, connected around one business.
              </h3>
              <ul className="o-checks" style={{ marginTop: "24px" }}>
                {["Business Setup Services", "Digital & Technology"].map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="rv">
              <div className="sec-tag">Who we are</div>
              <h2>
                Why these services <em>belong together.</em>
              </h2>
              <p style={{ color: "var(--muted)", marginTop: "22px", lineHeight: 1.75 }}>
                Businesses rarely experience strategy, technology, marketing and administration as
                separate problems. A change on one side often creates work on another. Orivion is
                structured to keep those dependencies visible while giving every discipline a clear
                owner.
              </p>
              <p style={{ color: "var(--muted)", marginTop: "16px", lineHeight: 1.75 }}>
                Clients can still engage a single service. The connected model matters when the work
                crosses boundaries: a new company that needs its digital presence, a campaign that
                depends on better systems, or software that changes how a team operates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="o-alt">
        <div className="wrap">
          <SectionHead tag="How we work" title={<>Principles that keep the work useful.</>} />
          <div className="o-grid cols-4" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            {values.map((v) => (
              <div className="o-feature rv" key={v.t}>
                <div className="ic">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
