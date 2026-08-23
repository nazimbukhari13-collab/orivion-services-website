// Analytics is consent-gated and attribution remains first-party until submission.
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

function ensureGoogleTagStub() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(..._args: unknown[]) {
      // Match Google's supported gtag.js implementation exactly: commands are
      // queued using the function's arguments object until gtag.js loads.
      window.dataLayer?.push(arguments);
    };
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
  if (typeof window === "undefined" || !measurementId) return;

  ensureGoogleTagStub();

  // Queue the same commands used by Google's official gtag.js snippet, plus an
  // explicit analytics consent grant because this function is called only
  // after the visitor has selected "Allow analytics".
  window.gtag?.("js", new Date());
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag?.("config", measurementId, {
    send_page_view: false,
    anonymize_ip: true,
  });

  if (document.querySelector(`script[data-orivion-ga4="${measurementId}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.dataset.orivionGa4 = measurementId;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
