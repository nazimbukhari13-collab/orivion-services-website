import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, FileSignature, Rocket, LifeBuoy } from "lucide-react";
import {
  services,
  jurisdictions,
  blogPosts,
  SERVICE_CATEGORIES,
  siteConfig,
} from "@/lib/site-data";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { OButton } from "@/components/orivion/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Business Setup in Dubai and Digital Technology | Orivion" },
      {
        name: "description",
        content:
          "Company formation, trade licensing, visas, accounting and tax in the UAE, plus websites, software, marketing and AI, from one team in Dubai.",
      },
      { property: "og:title", content: "Business Setup in Dubai and Digital Technology | Orivion" },
      {
        property: "og:description",
        content:
          "Company formation, licensing, visas and digital services in Dubai, from one connected team.",
      },
      { property: "og:url", content: "https://orivion.ae/" },
      { property: "og:site_name", content: "Orivion" },
      { property: "og:image", content: "https://orivion.ae/media/orivion-og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://orivion.ae/media/orivion-og.jpg" },
      { name: "twitter:title", content: "Business Setup in Dubai and Digital Technology | Orivion" },
      {
        name: "twitter:description",
        content:
          "UAE business setup, websites, software, CRM, marketing, social media and AI services.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: "https://orivion.ae/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://orivion.ae/#organization",
              name: "Orivion",
              url: "https://orivion.ae/",
              email: siteConfig.email,
              telephone: siteConfig.phone,
              description: "Business setup and digital technology services in Dubai.",
              address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
              areaServed: ["AE", "Worldwide"],
              knowsAbout: services.map((service) => service.title),
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: siteConfig.email,
                telephone: siteConfig.phone,
                availableLanguage: ["English"],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://orivion.ae/#website",
              url: "https://orivion.ae/",
              name: "Orivion",
              publisher: { "@id": "https://orivion.ae/#organization" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  { n: "14", suf: "", l: "Defined services" },
  { n: "2", suf: "", l: "Service tracks" },
  { n: "1", suf: "", l: "Accountable team" },
];

const usps = [
  "One brief across business and digital work",
  "Clear scope, ownership and decision points",
  "Specialist delivery without fragmented coordination",
  "Support that can continue after launch or setup",
];

const steps = [
  {
    icon: Compass,
    t: "Discover",
    d: "We understand the business need, audience, constraints and desired outcome.",
  },
  {
    icon: FileSignature,
    t: "Define",
    d: "You receive a clear scope, delivery path, responsibilities and commercial terms.",
  },
  {
    icon: Rocket,
    t: "Deliver",
    d: "The right specialists execute the work with visible progress and review points.",
  },
  {
    icon: LifeBuoy,
    t: "Continue",
    d: "We support, improve and extend the work when the business is ready for its next move.",
  },
];

// Pick a single hero video for the current viewport so only one file is fetched
// (not both), and skip video entirely when reduced motion is requested. Returns
// null during SSR / first paint, when the CSS poster background is shown instead.
function useHeroVideoVariant() {
  const [variant, setVariant] = useState<"desktop" | "mobile" | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mq = window.matchMedia("(max-width: 760px)");
    const apply = () => setVariant(mq.matches ? "mobile" : "desktop");
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return variant;
}

const marqueeItems = [
  "Company Formation",
  "Trade Licensing",
  "PRO Services",
  "Compliance & Regulatory",
  "Websites & Platforms",
  "Custom Software",
  "CRM & Automation",
  "Digital Marketing",
  "Social Media",
  "AI Integration",
];

function Home() {
  const heroVideo = useHeroVideoVariant();
  return (
    <>
      {/* HERO */}
      <header className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          {heroVideo === "desktop" && (
            <video
              key="desktop"
              className="home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/media/orivion-hero-desktop-poster.webp"
              tabIndex={-1}
            >
              <source src="/media/orivion-hero-desktop.mp4" type="video/mp4" />
            </video>
          )}
          {heroVideo === "mobile" && (
            <video
              key="mobile"
              className="home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/media/orivion-hero-mobile-poster.webp"
              tabIndex={-1}
            >
              <source src="/media/orivion-hero-mobile.mp4" type="video/mp4" />
            </video>
          )}
          <div className="home-hero-scrim" />
        </div>

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1>
              <span className="l">
                <span>Set up the business.</span>
              </span>
              <span className="l">
                <span>
                  Build what <em>moves it forward.</em>
                </span>
              </span>
            </h1>
            <div className="home-hero-foot">
              <p className="home-hero-sub">
                Business setup and digital technology delivered through one connected team. Start
                with one service or bring both sides together.
              </p>
              <div className="home-hero-actions">
                <OButton to="/consultation" variant="fillw" big>
                  Start a conversation
                </OButton>
                <OButton to="/services" variant="light" big>
                  Explore services
                </OButton>
              </div>
            </div>
          </div>
        </div>

        <a className="home-hero-scroll" href="#services">
          <span>Explore</span>
          <i />
        </a>
      </header>

      {/* MARQUEE */}
      <div className="marquee home-marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((rep) => marqueeItems.map((t) => <span key={`${rep}-${t}`}>{t}</span>))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="home-services">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="sec-tag">What we do</div>
              <h2>
                Two service tracks. <em>Clearly defined.</em>
              </h2>
            </div>
            <p className="sec-note">
              Fourteen services with clear scope, organised around business setup and digital
              technology.
            </p>
          </div>

          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat} style={{ marginTop: "clamp(40px,5vw,64px)" }}>
              <div className="sec-tag rv" style={{ marginBottom: "8px" }}>
                {cat}
              </div>
              <div className="svc rv">
                {services
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <div className="svc-row" data-svc key={s.slug}>
                      <button className="top" type="button" aria-expanded="false">
                        <span className="num">
                          {String(services.indexOf(s) + 1).padStart(2, "0")}
                        </span>
                        <h3>{s.title}</h3>
                        <span className="arrow">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0e1116"
                            strokeWidth="1.6"
                          >
                            <path d="M7 17L17 7M9 7h8v8" />
                          </svg>
                        </span>
                      </button>
                      <div className="body">
                        <div className="body-in">
                          <div className="desc">
                            {s.summary}
                            <div className="tags">
                              {s.bullets.map((b) => (
                                <b key={b}>{b}</b>
                              ))}
                            </div>
                            <div style={{ marginTop: "20px" }}>
                              <Link
                                to="/services/$slug"
                                params={{ slug: s.slug }}
                                className="link"
                                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                              >
                                View service <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ORIVION */}
      <section className="intel o-dark" id="why">
        <div className="wrap">
          <div className="intel-grid">
            <div className="intel-copy rv">
              <div className="sec-tag">Why Orivion</div>
              <h2>
                Two sides. <em>One accountable team.</em>
              </h2>
              <p>
                A business can need a new website and a new licence at the same time. Or a software
                system today and marketing support next quarter. Orivion gives each discipline
                proper attention while keeping the wider picture connected.
              </p>
              <div className="intel-stats">
                {stats.map((s) => (
                  <div key={s.l}>
                    <b data-count={s.n} data-suffix={s.suf}>
                      0
                    </b>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv">
              <div className="o-feature">
                <h3 style={{ color: "#fff", fontSize: "20px", marginBottom: "20px" }}>
                  How the model works
                </h3>
                <ul className="o-checks">
                  {usps.map((u) => (
                    <li key={u}>
                      <CheckCircle2 className="h-5 w-5" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="o-alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="sec-tag">How it works</div>
              <h2>
                From first conversation to <em>working outcome.</em>
              </h2>
            </div>
            <p className="sec-note">
              The process stays clear whether the work is digital, corporate or connected.
            </p>
          </div>
          <div className="proc-grid">
            {steps.map((s) => (
              <div className="proc rv" key={s.t}>
                <span className="dot" />
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JURISDICTIONS */}
      <section id="jurisdictions">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="sec-tag">Jurisdictions</div>
              <h2>
                Mainland, Free Zone or <em>Offshore?</em>
              </h2>
            </div>
            <p className="sec-note">
              Ownership, market access, visas and tax differ by route. Here is how they compare.
            </p>
          </div>
          <div className="o-grid cols-3">
            {jurisdictions.map((j) => (
              <Link
                key={j.slug}
                to="/jurisdictions/$slug"
                params={{ slug: j.slug }}
                className="o-feature rv"
              >
                <h3>{j.title}</h3>
                <p>{j.short}</p>
                <ul className="o-checks" style={{ marginTop: "18px" }}>
                  <li>
                    <CheckCircle2 className="h-5 w-5" />
                    {j.ownership}
                  </li>
                  <li>
                    <CheckCircle2 className="h-5 w-5" />
                    {j.market}
                  </li>
                </ul>
                <span className="link">
                  Details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED SERVICE MODEL */}
      <section className="o-alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="sec-tag">Built to connect</div>
              <h2>
                Use one side, or <em>connect both.</em>
              </h2>
            </div>
            <p className="sec-note">
              A clear view of where each track fits and when they work better together.
            </p>
          </div>
          <div className="o-grid cols-2">
            <article className="o-feature rv">
              <span className="sec-tag">Digital & technology</span>
              <h3>When the business needs to be seen, used or scaled.</h3>
              <p>
                Bring us in for a website, software product, campaign or the ongoing management of
                your social channels.
              </p>
              <Link to="/services" className="link">
                Explore digital & technology <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
            <article className="o-feature rv">
              <span className="sec-tag">Business setup services</span>
              <h3>When the business needs to be established or supported in the UAE.</h3>
              <p>
                Use Orivion for company setup, licensing, visas, administration and coordinated
                specialist support.
              </p>
              <Link to="/jurisdictions" className="link">
                Explore UAE setup <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="sec-tag">Insights</div>
              <h2>
                UAE business <em>knowledge base.</em>
              </h2>
            </div>
            <Link
              to="/blog"
              className="link"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              View all articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="o-grid cols-3">
            {blogPosts.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="o-post rv">
                <span className="cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="date">
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {p.readMins} min read
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CONSULTATION */}
      <section id="contact">
        <div className="wrap">
          <div className="o-split">
            <div className="rv">
              <div className="sec-tag">Start a conversation</div>
              <h2>
                Tell us what needs to <em>move forward.</em>
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  marginTop: "20px",
                  maxWidth: "460px",
                  lineHeight: 1.7,
                }}
              >
                Share the project, business need or current obstacle. We will come back with the
                right next step and the people needed to handle it.
              </p>
              <ul className="o-checks" style={{ marginTop: "26px" }}>
                {[
                  "A focused first conversation",
                  "A clear recommendation and scope",
                  "No obligation and no sales pressure",
                ].map((t) => (
                  <li key={t}>
                    <CheckCircle2 className="h-5 w-5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="o-panel rv">
              <ConsultationForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
