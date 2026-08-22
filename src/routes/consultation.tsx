import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { PageHero } from "@/components/orivion/ui";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Start a Conversation — Orivion" },
      {
        name: "description",
        content:
          "Tell Orivion about your digital project, corporate service requirement or connected business need.",
      },
      { property: "og:url", content: "https://orivion.ae/consultation" },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/consultation" }],
  }),
  component: Page,
});

const bullets = [
  "A focused review of the need and desired outcome",
  "A recommendation on the right service or connected team",
  "A clear next step, scope and commercial approach",
  "No obligation and no sales pressure",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        image="/media/pages/consultation.jpg"
        title={
          <>
            Tell us what needs to <em>move forward.</em>
          </>
        }
        sub="Digital project, corporate requirement or something that crosses both sides: start with the business need."
      />

      <section>
        <div className="wrap">
          <div
            className="o-split"
            style={{ alignItems: "start", gridTemplateColumns: "1fr 1.1fr" }}
          >
            <div>
              <h2 style={{ fontSize: "clamp(24px,3vw,34px)" }}>What you'll get</h2>
              <ul className="o-checks" style={{ marginTop: "24px" }}>
                {bullets.map((b) => (
                  <li key={b}>
                    <CheckCircle2 className="h-5 w-5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="o-panel rv">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
