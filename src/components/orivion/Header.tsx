import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, SERVICE_CATEGORIES } from "@/lib/site-data";

const nav: { to: string; label: string }[] = [
  { to: "/about", label: "About" },
  { to: "/jurisdictions", label: "Jurisdictions" },
  { to: "/why-dubai", label: "Why Dubai" },
  { to: "/blog", label: "Insights" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav id="nav">
        <Link to="/" className="brand">
          <span className="mark" />
          <b>Orivion</b>
        </Link>

        <div className="nav-links">
          <Link to="/" activeOptions={{ exact: true }}>
            Home
          </Link>
          <div className="nav-item">
            <Link to="/services">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="nav-menu">
              <div className="inner">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div className="nav-col" key={cat}>
                    <div className="nav-col-head">{cat}</div>
                    {services
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                          <b>{s.title}</b>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {nav.map((n) => (
            <Link key={n.to} to={n.to as never}>
              {n.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link to="/consultation" className="btn fill">
            <i />
            <span>Start a conversation</span>
          </Link>
          <button className="o-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div className={`o-mobile${open ? " open" : ""}`}>
        <button className="mob-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X className="h-6 w-6" />
        </button>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/services" onClick={() => setOpen(false)}>
          Services
        </Link>
        {nav.map((n) => (
          <Link key={n.to} to={n.to as never} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <Link to="/consultation" className="btn fill" onClick={() => setOpen(false)}>
          <i />
          <span>Start a conversation</span>
        </Link>
      </div>
    </>
  );
}
