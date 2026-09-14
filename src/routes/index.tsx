import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  services,
  jurisdictions,
  blogPosts,
  SERVICE_CATEGORIES,
  siteConfig,
} from "@/lib/site-data";
import { OButton } from "@/components/orivion/ui";
import { ConsultationFormSecure as ConsultationForm } from "@/components/site/ConsultationFormSecure";
import "@/home-v2.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Business Setup in Dubai and Digital Technology | Orivion" },
      {
        name: "description",
        content:
          "Company formation, trade licensing, visas, accounting and tax in the UAE, plus websites, software, marketing and AI, from one connected team.",
      },
      { property: "og:title", content: "Business Setup in Dubai and Digital Technology | Orivion" },
      {
        property: "og:description",
        content:
          "UAE business setup and digital technology delivered through one accountable partner.",
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
    links: [
      { rel: "canonical", href: "https://orivion.ae/" },
      {
        rel: "preload",
        as: "image",
        href: "/media/orivion-hero-mobile-poster.webp",
        media: "(max-width: 760px)",
        fetchPriority: "high",
        type: "image/webp",
      },
      {
        rel: "preload",
        as: "image",
        href: "/media/orivion-hero-desktop-poster.webp",
        media: "(min-width: 761px)",
        fetchPriority: "high",
        type: "image/webp",
      },
    ],
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
              logo: `${siteConfig.url}/favicon.svg`,
              sameAs: [siteConfig.linkedinUrl],
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

function useHeroVideoVariant() {
  const [variant, setVariant] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (connection?.saveData || /(?:^|-)2g$/i.test(connection?.effectiveType || "")) return;

    const mq = window.matchMedia("(max-width: 760px)");
    let timer = 0;

    const removeEarlyActivation = () => {
      window.removeEventListener("pointerdown", activateEarly);
      window.removeEventListener("keydown", activateEarly);
      window.removeEventListener("scroll", activateEarly);
    };
    const apply = () => {
      removeEarlyActivation();
      setVariant(mq.matches ? "mobile" : "desktop");
    };
    function activateEarly() {
      window.clearTimeout(timer);
      apply();
    }
    const schedule = () => {
      window.clearTimeout(timer);
      removeEarlyActivation();
      if (mq.matches) {
        window.addEventListener("pointerdown", activateEarly, { once: true, passive: true });
        window.addEventListener("keydown", activateEarly, { once: true });
        window.addEventListener("scroll", activateEarly, { once: true, passive: true });
      } else {
        timer = window.setTimeout(apply, 1800);
      }
    };
    const onViewportChange = () => schedule();

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    mq.addEventListener("change", onViewportChange);

    return () => {
      window.clearTimeout(timer);
      removeEarlyActivation();
      window.removeEventListener("load", schedule);
      mq.removeEventListener("change", onViewportChange);
    };
  }, []);

  return variant;
}

const pathways = [
  {
    index: "01",
    title: "Launch in the UAE",
    copy: "Choose the right structure, secure the licence and coordinate the practical work around getting established.",
    meta: "Formation · Licensing · PRO · Compliance",
    to: "/jurisdictions",
    image: "/media/services/company-formation.webp",
  },
  {
    index: "02",
    title: "Build a digital product",
    copy: "Turn a commercial idea into a fast, useful and maintainable website, platform or software product.",
    meta: "Websites · Platforms · Custom software",
    to: "/services",
    image: "/media/services/websites.webp",
  },
  {
    index: "03",
    title: "Automate the operation",
    copy: "Connect data, CRM and workflows so routine work moves with less manual effort and better visibility.",
    meta: "CRM · Automation · AI integration",
    to: "/services",
    image: "/media/services/crm-automation.webp",
  },
  {
    index: "04",
    title: "Create demand",
    copy: "Build a coordinated digital presence that makes the business easier to discover, trust and choose.",
    meta: "Digital marketing · Social media · SEO",
    to: "/services",
    image: "/media/services/digital-marketing.webp",
  },
];

const process = [
  {
    number: "01",
    title: "Frame the real problem",
    copy: "We start with the business outcome, not a pre-selected service. That keeps scope focused and prevents unnecessary work.",
  },
  {
    number: "02",
    title: "Build the right team",
    copy: "Corporate, design, engineering and growth specialists are brought in around the actual brief, with one clear owner.",
  },
  {
    number: "03",
    title: "Make progress visible",
    copy: "Milestones, decisions and dependencies stay explicit so the work moves without disappearing into a black box.",
  },
  {
    number: "04",
    title: "Stay useful after launch",
    copy: "When the business changes, the work can continue across setup, technology and growth without restarting the relationship.",
  },
];

const trackEditorial = [
  {
    kicker: "UAE business setup",
    title: "Establish the business with fewer loose ends.",
    copy: "Formation is only one part of entering the UAE. Orivion coordinates the practical work around licensing, administration, compliance and the specialist support that follows.",
  },
  {
    kicker: "Digital & technology",
    title: "Build the systems customers and teams actually use.",
    copy: "From the first public website to internal workflows and AI-enabled operations, we design and build digital work around the business rather than around a template.",
  },
];

function Home() {
  const heroVideo = useHeroVideoVariant();
  const heroRef = useRef<HTMLElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const activeCategory = SERVICE_CATEGORIES[trackIndex] ?? SERVICE_CATEGORIES[0];
  const activeServices = services.filter((service) => service.category === activeCategory);
  const editorial = trackEditorial[trackIndex] ?? trackEditorial[0];

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".orivion");
    const hero = heroRef.current;
    if (!root) return;

    root.classList.add("home-v2-active");

    const onPointerMove = (event: PointerEvent) => {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      hero.style.setProperty("--ov2-mx", `${x}%`);
      hero.style.setProperty("--ov2-my", `${y}%`);
    };

    const onScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--ov2-page-progress", `${Math.min(window.scrollY / max, 1)}`);
    };

    hero?.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      root.classList.remove("home-v2-active");
      root.style.removeProperty("--ov2-page-progress");
      hero?.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="ov2-home">
      <div className="ov2-progress" aria-hidden="true" />

      <header className="ov2-hero" ref={heroRef}>
        <div className="ov2-hero-media" aria-hidden="true">
          {heroVideo === "desktop" && (
            <video
              key="desktop"
              className="ov2-hero-video home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/media/orivion-hero-desktop-poster.webp"
              tabIndex={-1}
            >
              <source src="/media/orivion-hero-desktop.mp4" type="video/mp4" />
            </video>
          )}
          {heroVideo === "mobile" && (
            <video
              key="mobile"
              className="ov2-hero-video home-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/media/orivion-hero-mobile-poster.webp"
              tabIndex={-1}
            >
              <source src="/media/orivion-hero-mobile.mp4" type="video/mp4" />
            </video>
          )}
          <div className="ov2-hero-wash" />
          <div className="ov2-hero-grid" />
          <div className="ov2-hero-glow" />
        </div>

        <div className="ov2-shell ov2-hero-shell">
          <div className="ov2-hero-copy">
            <p className="ov2-kicker">Independent business + technology partner</p>
            <h1>
              Build one
              <span>connected advantage.</span>
            </h1>
            <p className="ov2-hero-lede">
              Set up the business in the UAE. Build the technology behind it. Create the systems,
              presence and growth engine that move it forward.
            </p>
            <div className="ov2-hero-actions">
              <OButton to="/consultation" variant="fillw" big>
                Start a project
              </OButton>
              <Link to="/services" className="ov2-text-link ov2-text-link-light">
                Explore the system <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="ov2-orbit" aria-hidden="true">
            <div className="ov2-orbit-ring ov2-orbit-ring-a" />
            <div className="ov2-orbit-ring ov2-orbit-ring-b" />
            <div className="ov2-orbit-core">
              <span>ORIVION</span>
              <b>Business × Technology</b>
            </div>
            <span className="ov2-orbit-label ov2-orbit-label-a">SET UP</span>
            <span className="ov2-orbit-label ov2-orbit-label-b">BUILD</span>
            <span className="ov2-orbit-label ov2-orbit-label-c">AUTOMATE</span>
            <span className="ov2-orbit-label ov2-orbit-label-d">GROW</span>
          </div>
        </div>

        <div className="ov2-hero-foot ov2-shell">
          <div>
            <span>01</span>
            <b>UAE Business Setup</b>
          </div>
          <div>
            <span>02</span>
            <b>Digital & Technology</b>
          </div>
          <div className="ov2-hero-location">Dubai, United Arab Emirates · Digital delivery worldwide</div>
        </div>
      </header>

      <section className="ov2-intro">
        <div className="ov2-shell ov2-intro-grid">
          <p className="ov2-section-index rv">01 / Operating model</p>
          <div className="ov2-intro-statement rv">
            <p>
              Most businesses do not experience their problems in neat service categories.
            </p>
            <h2>
              So we do not organise the relationship that way.
              <em> We connect the work around the business.</em>
            </h2>
          </div>
        </div>
      </section>

      <section className="ov2-tracks" id="services">
        <div className="ov2-shell">
          <div className="ov2-track-nav rv" role="tablist" aria-label="Orivion service tracks">
            {SERVICE_CATEGORIES.map((category, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={trackIndex === index}
                className={trackIndex === index ? "is-active" : ""}
                key={category}
                onClick={() => setTrackIndex(index)}
              >
                <span>0{index + 1}</span>
                {category}
              </button>
            ))}
          </div>

          <div className="ov2-track-stage">
            <div className="ov2-track-editorial rv" key={`editorial-${trackIndex}`}>
              <p className="ov2-kicker ov2-kicker-dark">{editorial.kicker}</p>
              <h2>{editorial.title}</h2>
              <p className="ov2-track-copy">{editorial.copy}</p>
              <Link to="/services" className="ov2-text-link">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="ov2-service-lines" key={`services-${trackIndex}`}>
              {activeServices.map((service, index) => (
                <Link
                  key={service.slug}
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="ov2-service-line rv"
                >
                  <span className="ov2-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="ov2-service-name">{service.title}</span>
                  <span className="ov2-service-summary">{service.summary}</span>
                  <span className="ov2-service-arrow">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ov2-pathways">
        <div className="ov2-shell">
          <div className="ov2-section-head rv">
            <p className="ov2-section-index">02 / Start with the outcome</p>
            <h2>Choose the move, not the department.</h2>
            <p>
              A useful brief starts with what has to change. We assemble the services around that
              outcome.
            </p>
          </div>

          <div className="ov2-path-list">
            {pathways.map((path) => (
              <Link to={path.to as never} className="ov2-path rv" key={path.index}>
                <span className="ov2-path-index">{path.index}</span>
                <div className="ov2-path-copy">
                  <h3>{path.title}</h3>
                  <p>{path.copy}</p>
                  <small>{path.meta}</small>
                </div>
                <span
                  className="ov2-path-image"
                  style={{ backgroundImage: `url(${path.image})` }}
                  aria-hidden="true"
                />
                <span className="ov2-path-arrow">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ov2-uae">
        <div className="ov2-uae-media" aria-hidden="true" />
        <div className="ov2-uae-overlay" />
        <div className="ov2-shell ov2-uae-inner">
          <p className="ov2-section-index rv">03 / UAE market entry</p>
          <div className="ov2-uae-copy rv">
            <p className="ov2-kicker">Business setup</p>
            <h2>Choose the structure around the business you want to build.</h2>
            <p>
              Mainland, Free Zone and Offshore structures solve different problems. We help frame
              the decision around activity, ownership, visas, market access and operating needs.
            </p>
            <Link to="/why-dubai" className="ov2-text-link ov2-text-link-light">
              Why Dubai <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="ov2-jurisdictions">
            {jurisdictions.map((jurisdiction, index) => (
              <Link
                key={jurisdiction.slug}
                to="/jurisdictions/$slug"
                params={{ slug: jurisdiction.slug }}
                className="ov2-jurisdiction rv"
              >
                <span>0{index + 1}</span>
                <h3>{jurisdiction.title}</h3>
                <p>{jurisdiction.short}</p>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ov2-process">
        <div className="ov2-shell ov2-process-layout">
          <div className="ov2-process-sticky rv">
            <p className="ov2-section-index">04 / How we work</p>
            <h2>Clear enough to move quickly. Structured enough to stay accountable.</h2>
            <p>
              The process is deliberately simple. The quality comes from what happens inside each
              stage.
            </p>
          </div>

          <div className="ov2-process-list">
            {process.map((step) => (
              <article className="ov2-process-step rv" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov2-principle">
        <div className="ov2-shell">
          <p className="ov2-section-index rv">05 / The standard</p>
          <blockquote className="rv">
            <span>“</span>
            The work should feel considered before anyone explains how much work went into it.
          </blockquote>
          <div className="ov2-principle-foot rv">
            <p>
              Fewer decorative layers. Better typography. Better hierarchy. Motion with a reason.
              Technology that stays maintainable after launch.
            </p>
            <Link to="/about" className="ov2-text-link">
              About Orivion <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ov2-insights">
        <div className="ov2-shell">
          <div className="ov2-section-head ov2-section-head-wide rv">
            <p className="ov2-section-index">06 / Insights</p>
            <h2>Useful context for decisions that come before the paperwork.</h2>
            <Link to="/blog" className="ov2-text-link">
              All insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="ov2-insight-list">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="ov2-insight rv"
              >
                <span className="ov2-insight-index">0{index + 1}</span>
                <div>
                  <small>{post.category}</small>
                  <h3>{post.title}</h3>
                </div>
                <p>{post.excerpt}</p>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ov2-contact" id="contact">
        <div className="ov2-shell ov2-contact-grid">
          <div className="ov2-contact-copy rv">
            <p className="ov2-section-index">07 / Start here</p>
            <h2>Bring us the problem before you decide the solution.</h2>
            <p>
              Tell us what you are trying to launch, fix, automate or grow. We will come back with
              a practical next step and the right people for it.
            </p>
            <div className="ov2-contact-direct">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="ov2-contact-panel rv">
            <ConsultationForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
