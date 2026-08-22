import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Orivion" },
      {
        name: "description",
        content: "How Orivion collects, uses and protects information submitted through this website.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/privacy" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        image="/media/pages/privacy.jpg"
        title="Privacy Policy"
        sub="How we collect, use and protect your information."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="o-prose">
            <p>
              We collect the information you choose to submit through our enquiry forms, including
              your name, email address, phone number, company, location, service interest and
              message. We also record basic attribution information such as the page you first
              visited, referral source and campaign parameters when they are available.
            </p>

            <h2>How we use information</h2>
            <p>
              We use enquiry information to respond to you, understand the service you are asking
              about and manage follow-up. We do not sell personal data. Enquiry emails are delivered
              through Resend, while the website and security controls run through Cloudflare.
            </p>

            <h2>Analytics and browser storage</h2>
            <p>
              Essential site functions may use browser storage for security, attribution and user
              preferences. Optional analytics are loaded only after you choose to allow them. If
              analytics are not configured or you choose “Essential only”, the optional analytics
              tag is not loaded.
            </p>

            <h2>Spam and security checks</h2>
            <p>
              We may use Cloudflare Turnstile and rate-limiting controls to protect public forms
              against automated abuse. Security providers can process technical information needed
              to determine whether a request is legitimate.
            </p>

            <h2>Your choices</h2>
            <p>
              Where applicable, you can ask us to access, correct or delete personal information we
              hold about you. Contact us at <a href="mailto:contact@orivion.ae">contact@orivion.ae</a>.
              We process personal data in line with applicable UAE data-protection requirements and,
              where relevant, other applicable privacy laws.
            </p>

            <h2>Cookies</h2>
            <p>
              See our <Link to="/cookies">Cookie Policy</Link> for information about essential and
              optional browser technologies used by this website.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
});
