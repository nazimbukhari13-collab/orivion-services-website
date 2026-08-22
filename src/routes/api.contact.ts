import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/site-data";

const MAX_BODY_BYTES = 20_000;
const allowedServices = new Set([...services.map((service) => service.title), "Other"]);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentLength = Number(request.headers.get("content-length") || "0");
        if (contentLength > MAX_BODY_BYTES) {
          return Response.json({ error: "Request too large." }, { status: 413 });
        }

        const origin = request.headers.get("origin");
        if (origin && origin !== new URL(request.url).origin) {
          return Response.json({ error: "Invalid request origin." }, { status: 403 });
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

        if (!name) {
          return Response.json({ error: "Please enter your name." }, { status: 400 });
        }
        if (!isValidEmail(email)) {
          return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
        }
        if (service && !allowedServices.has(service)) {
          return Response.json({ error: "Please choose a valid service." }, { status: 400 });
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
          <hr />
          <p style="font-size:12px;color:#666">Submitted ${escapeHtml(submittedAt)}</p>
        `;

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
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
