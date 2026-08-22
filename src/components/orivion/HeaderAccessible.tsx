import { useEffect, useRef, useState } from "react";
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

export function HeaderAccessible() {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("button, a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      burgerRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav id="nav" aria-label="Primary navigation">
        <Link to="/" className="brand" aria-label="Orivion home">
          <span className="mark" aria-hidden="true" />
          <b>Orivion</b>
        </Link>

        <div className="nav-links">
          <Link to="/" activeOptions={{ exact: true }}>
            Home
          </Link>
          <div className="nav-item">
            <Link to="/services">
              Services <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <div className="nav-menu">
              <div className="inner">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div className="nav-col" key={cat}>
                    <div className="nav-col-head">{cat}</div>
                    {services
                      .filter((service) => service.category === cat)
                      .map((service) => (
                        <Link
                          key={service.slug}
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                        >
                          <b>{service.title}</b>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {nav.map((item) => (
            <Link key={item.to} to={item.to as never}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link to="/consultation" className="btn fill">
            <i aria-hidden="true" />
            <span>Start a conversation</span>
          </Link>
          <button
            ref={burgerRef}
            className="o-burger"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-navigation"
          className="o-mobile open"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button className="mob-close" aria-label="Close menu" onClick={close}>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <Link to="/" onClick={close}>
            Home
          </Link>
          <Link to="/services" onClick={close}>
            Services
          </Link>
          {nav.map((item) => (
            <Link key={item.to} to={item.to as never} onClick={close}>
              {item.label}
            </Link>
          ))}
          <Link to="/consultation" className="btn fill" onClick={close}>
            <i aria-hidden="true" />
            <span>Start a conversation</span>
          </Link>
        </div>
      ) : null}
    </>
  );
}
