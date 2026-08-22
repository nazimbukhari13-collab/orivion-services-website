import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [{ title: "Cookie Policy — Orivion" }],
    links: [{ rel: "canonical", href: "https://orivion.ae/cookies" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        image="/media/pages/cookies.jpg"
        title="Cookie Policy"
        sub="What cookies this site uses and why."
      />
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="o-prose">
            <p>
              We use a small number of essential cookies to make the site work, and optional
              analytics cookies (with your consent) to understand traffic. You can manage your
              preferences at any time in your browser settings.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
});
