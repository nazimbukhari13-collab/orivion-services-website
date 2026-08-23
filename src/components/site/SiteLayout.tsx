import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { HeaderAccessible } from "@/components/orivion/HeaderAccessible";
import { Footer } from "@/components/orivion/Footer";
import { siteConfig } from "@/lib/site-data";

const DeferredEffects = lazy(() =>
  import("@/components/orivion/OrivionEffects").then((module) => ({
    default: module.OrivionEffects,
  })),
);
const DeferredAnalytics = lazy(() =>
  import("@/components/site/AnalyticsRuntime").then((module) => ({
    default: module.AnalyticsRuntime,
  })),
);
const DeferredToaster = lazy(() => import("sonner").then((module) => ({ default: module.Toaster })));

function DeferredRuntimes() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = 0;
    const activate = () => setReady(true);
    const mobile = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;

    window.addEventListener("scroll", activate, { once: true, passive: true });
    window.addEventListener("pointerdown", activate, { once: true, passive: true });
    window.addEventListener("keydown", activate, { once: true });
    timer = window.setTimeout(activate, mobile ? 6000 : 3200);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", activate);
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", activate);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <DeferredAnalytics />
      <DeferredEffects />
      <DeferredToaster position="top-right" richColors />
    </Suspense>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="orivion loaded" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <HeaderAccessible />
      <main id="main-content">{children}</main>
      <Footer />

      <a
        className="o-wa"
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp at ${siteConfig.phone}`}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>

      <DeferredRuntimes />
    </div>
  );
}
