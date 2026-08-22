import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/site-data";

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const allowedServices = new Set([...services.map((service) => service.title), "Other"]);
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentLength = Number(request.headers.get("content-length") || "0");
        if (contentLength > MAX_BODY_BYTES) {
          return Response.json({ error: "Request too large." }, { status: 413 });
        }

        const requestUrl = new URL(request.url);
        const origin = request.headers.get("origin");
        if (origin && origin !== requestUrl.origin) {
          return Response.json({ error: "Invalid request origin." }, { status: 403 });
        }

        const ip = request.headers.get("cf-connecting-ip") || "unknown";
        const rateLimit = checkRateLimit(ip);
        if (!rateLimit.allowed) {
          return Response.json(
            { error: "Too many enquiries were sent from this connection. Please try again later." },
            {
              status: 429,
              headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
            },
          );
        }

        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const website = clean(body.website, 200);
        if (website) {
          return Response.json({ ok: true });
        }

        const name = clean(body.name, 100);
        const email = clean(body.email, 254);
        const phone = clean(body.phone, 40);
        const company = clean(body.company, 120);
        const service = clean(body.service, 100);
        const location = clean(body.location, 120);
        const message = clean(body.message, 1000);
        const turnstileToken = clean(body.turnstileToken, 2048);
        const landingPage = clean(body.landingPage, 500);
        const referrer = clean(body.referrer, 500);
        const utmSource = clean(body.utmSource, 120);
        const utmMedium = clean(body.utmMedium, 120);
        const utmCampaign = clean(body.utmCampaign, 160);
        const utmTerm = clean(body.utmTerm, 160);
        const utmContent = clean(body.utmContent, 160);

        if (!name) {
          return Response.json({ error: "Please enter your name." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
          return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
        }
        if (service && !allowedServices.has(service)) {
          return Response.json({ error: "Please choose a valid service." }, { status: 400 });
        }

        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
        if (turnstileSecret) {
          if (!turnstileToken) {
            return Response.json(
              { error: "Please complete the security check before sending." },
              { status: 400 },
            );
          }

          const verified = await verifyTurnstile(turnstileSecret, turnstileToken, ip);
          if (!verified) {
            return Response.json(
              { error: "The security check could not be verified. Please try again." },
              { status: 403 },
            );
          }
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("RESEND_API_KEY is missing.");
          return Response.json(
            { error: "Email delivery is being configured. Please contact us directly for now." },
            { status: 503 },
          );
        }

        const to = process.env.CONTACT_TO_EMAIL || "contact@orivion.ae";
        const from = process.env.CONTACT_FROM_EMAIL || "Orivion Website <website@orivion.ae>";
        const subject = `New Orivion enquiry — ${service || "General"}`;
        const submittedAt = new Date().toISOString();

        const attributionLines = [
          `Landing page: ${landingPage || "Not captured"}`,
          `Referrer: ${referrer || "Direct / not available"}`,
          `UTM source: ${utmSource || "Not provided"}`,
          `UTM medium: ${utmMedium || "Not provided"}`,
          `UTM campaign: ${utmCampaign || "Not provided"}`,
          `UTM term: ${utmTerm || "Not provided"}`,
          `UTM content: ${utmContent || "Not provided"}`,
        ];

        const text = [
          "New enquiry from orivion.ae",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Company: ${company || "Not provided"}`,
          `Service: ${service || "Not specified"}`,
          `Location: ${location || "Not provided"}`,
          "",
          "Message:",
          message || "No message provided.",
          "",
          "Attribution:",
          ...attributionLines,
          "",
          `Submitted: ${submittedAt}`,
        ].join("\n");

        const html = `
          <h2>New enquiry from orivion.ae</h2>
          <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
            ${row("Name", name)}
            ${row("Email", email)}
            ${row("Phone", phone || "Not provided")}
            ${row("Company", company || "Not provided")}
            ${row("Service", service || "Not specified")}
            ${row("Location", location || "Not provided")}
          </table>
          <h3>Message</h3>
          <p style="white-space:pre-wrap">${escapeHtml(message || "No message provided.")}</p>
          <h3>Attribution</h3>
          <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
            ${row("Landing page", landingPage || "Not captured")}
            ${row("Referrer", referrer || "Direct / not available")}
            ${row("UTM source", utmSource || "Not provided")}
            ${row("UTM medium", utmMedium || "Not provided")}
            ${row("UTM campaign", utmCampaign || "Not provided")}
            ${row("UTM term", utmTerm || "Not provided")}
            ${row("UTM content", utmContent || "Not provided")}
          </table>
          <hr />
          <p style="font-size:12px;color:#666">Submitted ${escapeHtml(submittedAt)}</p>
        `;

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "Idempotency-Key": crypto.randomUUID(),
          },
          body: JSON.stringify({
            from,
            to: [to],
            reply_to: email,
            subject,
            html,
            text,
            tags: [{ name: "source", value: "orivion-website" }],
          }),
        });

        if (!response.ok) {
          const providerError = await response.text();
          console.error("Contact form delivery failed:", response.status, providerError);
          return Response.json(
            { error: "We could not send your enquiry right now. Please try again or contact us directly." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});

async function verifyTurnstile(secret: string, token: string, remoteIp: string) {
  try {
    const form = new FormData();
    form.set("secret", secret);
    form.set("response", token);
    if (remoteIp !== "unknown") form.set("remoteip", remoteIp);

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    if (!response.ok) return false;

    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateBuckets.get(key);

  if (!current || now >= current.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    cleanupRateBuckets(now);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  rateBuckets.set(key, current);
  return { allowed: true, retryAfterSeconds: 0 };
}

function cleanupRateBuckets(now: number) {
  if (rateBuckets.size < 500) return;
  for (const [key, bucket] of rateBuckets) {
    if (now >= bucket.resetAt) rateBuckets.delete(key);
  }
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function row(label: string, value: string) {
  return `<tr><td style="font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`;
}
