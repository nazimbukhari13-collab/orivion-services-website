import { Link } from "@tanstack/react-router";
import { Linkedin, MapPin, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand">
            <span className="mark" />
            <b>Orivion</b>
          </div>
          <p>
            Business setup and digital technology services for companies that want fewer handoffs
            and clearer ownership.
          </p>
          <div className="foot-social">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Orivion on LinkedIn"
              title="Orivion on LinkedIn"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="col">
          <span>Business setup</span>
          {services
            .filter((s) => s.category === "Business Setup Services")
            .map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                {s.title}
              </Link>
            ))}
        </div>

        <div className="col">
          <span>Digital & technology</span>
          {services
            .filter((s) => s.category === "Digital & Technology")
            .map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                {s.title}
              </Link>
            ))}
        </div>

        <div className="col">
          <span>Company</span>
          <Link to="/about">About us</Link>
          <Link to="/jurisdictions">UAE company setup</Link>
          <Link to="/why-dubai">Why Dubai</Link>
          <Link to="/blog">Insights</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/consultation">Start a conversation</Link>
        </div>

        <div className="col">
          <span>Contact</span>
          <ul className="foot-contact">
            <li>
              <MapPin className="h-4 w-4" />
              {siteConfig.address}
            </li>
            <li>
              <Mail className="h-4 w-4" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Phone className="h-4 w-4" />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li>
              <MessageCircle className="h-4 w-4" />
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer noopener">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot-base">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
