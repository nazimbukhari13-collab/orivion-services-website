import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Orivion" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/cookies" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        image="/media/pages/cookies.jpg"
        title="Cookie Policy"
        sub="What browser technologies this site uses and why."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="o-prose">
            <h2>Essential functions</h2>
            <p>
              The site may use browser storage and security technologies that are necessary to keep
              forms working, remember basic preferences, preserve campaign attribution during your
              visit and protect the website from automated abuse.
            </p>

            <h2>Optional analytics</h2>
            <p>
              If analytics are enabled, the analytics tag is loaded only after you choose “Allow
              analytics”. Choosing “Essential only” keeps optional analytics disabled. You can also
              clear stored preferences through your browser settings.
            </p>

            <h2>Security services</h2>
            <p>
              Cloudflare services, including Turnstile when configured, may use technical signals or
              browser storage needed to identify abusive or automated requests. These controls are
              used for security rather than advertising.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
});
