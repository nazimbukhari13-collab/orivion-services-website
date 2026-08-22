import { useState } from "react";
import { toast } from "sonner";
import { services as siteServices, SERVICE_CATEGORIES } from "@/lib/site-data";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter your name (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Please enter a valid email.");

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "We could not send your enquiry. Please try again.");
      }

      toast.success("Thanks! Your enquiry has been sent.");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "We could not send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="o-form">
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
          <input className="o-input" name="name" required maxLength={100} placeholder="Jane Doe" />
        </Field>
        <Field label="Email *">
          <input
            className="o-input"
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
          />
        </Field>
        <Field label="Phone (with country code)">
          <input
            className="o-input"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+971 50 123 4567"
          />
        </Field>
        <Field label="Company / organisation">
          <input
            className="o-input"
            name="company"
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
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <option key={s.slug}>{s.title}</option>
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
      <button
        type="submit"
        disabled={loading}
        className="btn fill"
        style={{ justifySelf: "start" }}
      >
        <i />
        <span>{loading ? "Sending…" : "Send my enquiry"}</span>
      </button>
      <p className="o-note">By submitting this form you agree to our Privacy Policy.</p>
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
