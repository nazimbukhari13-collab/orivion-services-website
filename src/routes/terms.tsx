import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Orivion" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/terms" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        image="/media/pages/terms.webp"
        title="Terms & Conditions"
        sub="The terms under which we provide our services."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="o-prose">
            <p>
              These terms govern your use of the Orivion website and any engagement letter signed
              with us. Specific terms for paid services are set out in a written engagement letter
              that takes precedence over these general terms.
            </p>
            <h2>Scope of services</h2>
            <p>
              Orivion provides digital and corporate support under the scope agreed for each
              engagement. We are not a law firm and do not provide legal advice. Corporate filings
              remain subject to acceptance by the relevant authority.
            </p>
            <h2>Fees</h2>
            <p>
              Government fees are passed through at cost. Our professional fees are quoted on a
              fixed-fee basis per engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
});
