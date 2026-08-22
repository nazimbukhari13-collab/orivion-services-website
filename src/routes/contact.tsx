import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Orivion — Business Setup & Digital Technology" },
      {
        name: "description",
        content:
          "Talk to Orivion about web design, software, marketing, social media or UAE corporate services.",
      },
      { property: "og:url", content: "https://orivion.ae/contact" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        image="/media/pages/contact.jpg"
        title={
          <>
            Let's talk about what needs to <em>move forward.</em>
          </>
        }
        sub="Tell us about the project, business requirement or current obstacle, and we will direct it to the right discipline."
      />

      <section>
        <div className="wrap">
          <div
            className="o-split"
            style={{ alignItems: "start", gridTemplateColumns: "1fr 1.2fr" }}
          >
            <div>
              <div style={{ display: "grid", gap: "12px" }}>
                <ContactRow icon={MapPin} title="Office" value={siteConfig.address} />
                <ContactRow
                  icon={Mail}
                  title="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactRow
                  icon={Phone}
                  title="Phone"
                  value={siteConfig.phone}
                  href={siteConfig.phoneHref}
                />
                <ContactRow
                  icon={MessageCircle}
                  title="WhatsApp"
                  value={`Chat with us on ${siteConfig.phone}`}
                  href={siteConfig.whatsappUrl}
                  external
                />
              </div>
            </div>
            <div className="o-panel rv">
              <h2 style={{ fontSize: "clamp(22px,3vw,30px)", marginBottom: "20px" }}>
                Send us a message
              </h2>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
  external = false,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div
      className="o-feature"
      style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "20px" }}
    >
      <div className="ic" style={{ marginBottom: 0 }}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="sec-tag" style={{ marginBottom: "4px" }}>
          {title}
        </div>
        <div style={{ fontWeight: 500, color: "var(--ink)" }}>{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      style={{ textDecoration: "none" }}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}
