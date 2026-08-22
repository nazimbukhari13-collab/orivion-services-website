import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type BtnVariant = "outline" | "fill" | "light" | "fillw";

export function OButton({
  to,
  href,
  children,
  variant = "outline",
  big = false,
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: BtnVariant;
  big?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">) {
  const variantCls =
    variant === "fill"
      ? "fill"
      : variant === "light"
        ? "light"
        : variant === "fillw"
          ? "fillw"
          : "";
  const cls = ["btn", big ? "big" : "", variantCls, className].filter(Boolean).join(" ");
  const inner = (
    <>
      <i />
      <span>{children}</span>
    </>
  );
  if (to) {
    return (
      <Link to={to as never} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {inner}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className={image ? "o-hero o-hero--media" : "o-hero"}>
      {image ? (
        <div className="o-hero-bg" aria-hidden="true">
          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
          />
          <div className="o-hero-veil" />
        </div>
      ) : (
        <div className="aura" aria-hidden="true" />
      )}
      <div className="wrap">
        <div className="sec-tag">{eyebrow}</div>
        <h1>{title}</h1>
        {sub && <p className="sub">{sub}</p>}
        {children && <div className="actions">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({
  tag,
  title,
  note,
}: {
  tag: string;
  title: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="sec-head rv">
      <div>
        <div className="sec-tag">{tag}</div>
        <h2>{title}</h2>
      </div>
      {note && <p className="sec-note">{note}</p>}
    </div>
  );
}

export function CTASection() {
  return (
    <section>
      <div className="wrap">
        <div className="o-cta rv">
          <div className="in">
            <div className="sec-tag">Start a conversation</div>
            <h2>
              What needs to <em>move forward?</em>
            </h2>
            <p>
              Tell us about the project, business need or current obstacle. We will help define the
              right next step and the people needed to handle it.
            </p>
            <div className="actions">
              <OButton to="/consultation" variant="fillw" big>
                Send an enquiry
              </OButton>
              <OButton to="/contact" variant="light" big>
                Contact us
              </OButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
