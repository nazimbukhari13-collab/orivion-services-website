export type Attribution = {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

const ATTRIBUTION_KEY = "orivion_attribution";

export function captureAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  const existing = readAttribution();
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {
    landingPage: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || "",
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
  };

  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Storage can be unavailable in privacy-restricted browser modes.
  }

  return attribution;
}

export function getAttribution(): Attribution {
  return (
    readAttribution() ||
    captureAttribution() || {
      landingPage: "",
      referrer: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      utmContent: "",
    }
  );
}

function readAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return value ? (JSON.parse(value) as Attribution) : null;
  } catch {
    return null;
  }
}

/**
 * Sends an analytics event only after Google Analytics has been initialized.
 * This intentionally does not queue pre-consent events for later transmission.
 */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

export function loadGoogleAnalytics(measurementId: string) {
  if (typeof window === "undefined" || !measurementId || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
