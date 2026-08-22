import { useEffect, useRef, useState } from "react";

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() || "";

export const turnstileConfigured = Boolean(SITE_KEY);

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact" | "flexible";
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

function loadTurnstileScript() {
  const existing = document.querySelector<HTMLScriptElement>("script[data-orivion-turnstile]");
  if (existing) return existing;

  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.defer = true;
  script.dataset.orivionTurnstile = "true";
  document.head.appendChild(script);
  return script;
}

export function TurnstileWidget({
  onTokenChange,
  resetKey,
}: {
  onTokenChange: (token: string) => void;
  resetKey: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!SITE_KEY || !shouldLoad || !containerRef.current) return;

    let cancelled = false;
    let widgetId = "";
    let retryTimer = 0;
    const script = loadTurnstileScript();

    const render = () => {
      if (cancelled || !containerRef.current) return;
      if (!window.turnstile) {
        retryTimer = window.setTimeout(render, 50);
        return;
      }

      widgetId = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        theme: "light",
        size: "flexible",
        callback: (token) => onTokenChange(token),
        "expired-callback": () => onTokenChange(""),
        "error-callback": () => onTokenChange(""),
      });
    };

    if (window.turnstile) render();
    else script.addEventListener("load", render, { once: true });

    return () => {
      cancelled = true;
      if (retryTimer) window.clearTimeout(retryTimer);
      script.removeEventListener("load", render);
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
      onTokenChange("");
    };
  }, [onTokenChange, resetKey, shouldLoad]);

  if (!SITE_KEY) return null;

  return (
    <div
      className="o-turnstile"
      ref={containerRef}
      role="group"
      aria-label="Spam protection"
    />
  );
}
