import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Orivion" },
      {
        name: "description",
        content: "Our privacy policy explains what data we collect and how we use it.",
      },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/privacy" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        sub="How we collect, use and protect your information."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="o-prose">
            <p>
              We collect information you provide via our forms (name, email, phone, business
              details) and basic analytics about your visit. We use this data to respond to your
              enquiry, deliver our services and improve the site. We never sell your personal data.
            </p>
            <h2>UAE PDPL &amp; GDPR</h2>
            <p>
              We comply with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of
              2021) and, where applicable, the EU GDPR. You may request access, correction or
              deletion of your data at any time by emailing privacy@orivion.ae.
            </p>
            <h2>Cookies</h2>
            <p>
              We use essential cookies for site functionality and optional analytics cookies (with
              your consent) to understand traffic. See our Cookie Policy for details.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
});
