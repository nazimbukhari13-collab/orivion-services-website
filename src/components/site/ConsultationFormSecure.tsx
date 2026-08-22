import { useCallback, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { services as siteServices, SERVICE_CATEGORIES } from "@/lib/site-data";
import { getAttribution, trackEvent } from "@/lib/analytics";
import { TurnstileWidget, turnstileConfigured } from "@/components/site/TurnstileWidget";

export function ConsultationFormSecure({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const startedRef = useRef(false);
  const onTokenChange = useCallback((token: string) => setTurnstileToken(token), []);

  function markStarted() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("enquiry_form_start", { page_path: window.location.pathname });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter your name (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email.");
    if (turnstileConfigured && !turnstileToken)
      return toast.error("Please complete the security check before sending.");

    setLoading(true);

    try {
      const payload = {
        ...Object.fromEntries(data.entries()),
        ...getAttribution(),
        turnstileToken,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "We could not send your enquiry. Please try again.");
      }

      trackEvent("enquiry_form_success", {
        page_path: window.location.pathname,
        service: String(data.get("service") || "Not specified"),
      });
      toast.success("Thanks! Your enquiry has been sent.");
      form.reset();
      startedRef.current = false;
      setTurnstileToken("");
      setTurnstileResetKey((value) => value + 1);
    } catch (error) {
      trackEvent("enquiry_form_error", { page_path: window.location.pathname });
      toast.error(error instanceof Error ? error.message : "We could not send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} onFocusCapture={markStarted} className="o-form">
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={compact ? "o-2col" : "o-2col"}>
        <Field label="Full name *">
          <input
            className="o-input"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email *">
          <input
            className="o-input"
            type="email"
            name="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="jane@company.com"
          />
        </Field>
        <Field label="Phone (with country code)">
          <input
            className="o-input"
            type="tel"
            name="phone"
            maxLength={40}
            autoComplete="tel"
            placeholder="+971 50 123 4567"
          />
        </Field>
        <Field label="Company / organisation">
          <input
            className="o-input"
            name="company"
            maxLength={120}
            autoComplete="organization"
            placeholder="Your company name"
          />
        </Field>
        <Field label="Service of interest">
          <select className="o-input" name="service" defaultValue="">
            <option value="" disabled>
              Choose a service…
            </option>
            {SERVICE_CATEGORIES.map((cat) => (
              <optgroup key={cat} label={cat}>
                {siteServices
                  .filter((service) => service.category === cat)
                  .map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
              </optgroup>
            ))}
            <option>Other</option>
          </select>
        </Field>
        <Field label="Where are you based?">
          <input
            className="o-input"
            name="location"
            maxLength={120}
            autoComplete="country-name"
            placeholder="City, country"
          />
        </Field>
      </div>

      <Field label="What would you like to work on?">
        <textarea
          className="o-input"
          name="message"
          maxLength={1000}
          placeholder="The project, business need, timing or current challenge…"
        />
      </Field>

      <TurnstileWidget onTokenChange={onTokenChange} resetKey={turnstileResetKey} />

      <button
        type="submit"
        disabled={loading}
        className="btn fill"
        style={{ justifySelf: "start" }}
      >
        <i aria-hidden="true" />
        <span>{loading ? "Sending…" : "Send my enquiry"}</span>
      </button>
      <p className="o-note">
        By submitting this form you agree to our <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="o-field">
      <span>{label}</span>
      {children}
    </label>
  );
}
