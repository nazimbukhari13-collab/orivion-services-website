import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  captureAttribution,
  loadGoogleAnalytics,
  trackEvent,
} from "@/lib/analytics";

// Keep the public GA4 ID as a safe fallback so production tracking cannot be
// disabled accidentally by a missing build variable. The environment variable
// still takes precedence when present.
const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-PLWXFPZR1Z";
const CONSENT_KEY = "orivion_analytics_consent_v2";

type Consent = "granted" | "denied" | null;

export function AnalyticsRuntime() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    captureAttribution();

    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      // Local storage can be blocked by browser privacy settings.
    }
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;

    loadGoogleAnalytics(GA_MEASUREMENT_ID);
    trackEvent("page_view", {
      page_path: `${window.location.pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [consent, pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) {
        trackEvent("whatsapp_click", { page_path: window.location.pathname });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { page_path: window.location.pathname });
      } else if (href === "/consultation" || href.startsWith("/consultation?")) {
        trackEvent("consultation_click", { page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function chooseConsent(next: Exclude<Consent, null>) {
    setConsent(next);
    try {
      window.localStorage.setItem(CONSENT_KEY, next);
    } catch {
      // Consent still applies for this page even if storage is unavailable.
    }
  }

  if (consent !== null) return null;

  return (
    <aside className="o-consent" aria-label="Analytics preferences" role="region">
      <div>
        <strong>Analytics preferences</strong>
        <p>
          Essential site functions work without analytics. You can allow optional analytics to help
          us understand which pages and services are useful.
        </p>
      </div>
      <div className="o-consent-actions">
        <button type="button" className="btn" onClick={() => chooseConsent("denied")}>
          <span>Essential only</span>
        </button>
        <button type="button" className="btn fill" onClick={() => chooseConsent("granted")}>
          <span>Allow analytics</span>
        </button>
      </div>
    </aside>
  );
}
