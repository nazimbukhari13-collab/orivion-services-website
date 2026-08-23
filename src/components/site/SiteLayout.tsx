import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";
import { MessageCircle } from "lucide-react";
import { HeaderAccessible } from "@/components/orivion/HeaderAccessible";
import { Footer } from "@/components/orivion/Footer";
import { OrivionEffects } from "@/components/orivion/OrivionEffects";
import { siteConfig } from "@/lib/site-data";

const DeferredAnalytics = lazy(() =>
  import("@/components/site/AnalyticsRuntime").then((module) => ({
    default: module.AnalyticsRuntime,
  })),
);

function AnalyticsAfterInitialLoad() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
    const activate = () => setReady(true);
    const timer = window.setTimeout(activate, mobile ? 5000 : 3000);

    window.addEventListener("pointerdown", activate, { once: true, passive: true });
    window.addEventListener("keydown", activate, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", activate);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <DeferredAnalytics />
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

      <AnalyticsAfterInitialLoad />
      <OrivionEffects />
      <Toaster position="top-right" richColors />
    </div>
  );
}
