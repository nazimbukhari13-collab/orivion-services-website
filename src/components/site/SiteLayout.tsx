import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { MessageCircle } from "lucide-react";
import { HeaderAccessible } from "@/components/orivion/HeaderAccessible";
import { Footer } from "@/components/orivion/Footer";
import { OrivionEffects } from "@/components/orivion/OrivionEffects";
import { siteConfig } from "@/lib/site-data";
import { AnalyticsRuntime } from "@/components/site/AnalyticsRuntime";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="orivion" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="cur-dot" />
      <div className="cur-ring" />

      <div id="loader">
        <div className="word" aria-hidden="true">
          {"ORIVION".split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
              {ch}
            </span>
          ))}
        </div>
        <div className="bar">
          <i />
        </div>
      </div>

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

      <AnalyticsRuntime />
      <OrivionEffects />
      <Toaster position="top-right" richColors />
    </div>
  );
}
