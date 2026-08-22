import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();

async function read(rel) {
  return fs.readFile(path.join(ROOT, rel), "utf8");
}

async function write(rel, content) {
  await fs.writeFile(path.join(ROOT, rel), content);
}

async function replace(rel, from, to) {
  let content = await read(rel);
  if (content.includes(to)) return;
  if (!content.includes(from)) throw new Error(`Expected pattern not found in ${rel}: ${from.slice(0, 100)}`);
  content = content.replace(from, to);
  await write(rel, content);
}

async function replaceAllIn(rel, from, to) {
  let content = await read(rel);
  if (!content.includes(from)) return;
  content = content.split(from).join(to);
  await write(rel, content);
}

async function patchSiteLayout() {
  const rel = "src/components/site/SiteLayout.tsx";
  await replace(
    rel,
    'import { Header } from "@/components/orivion/Header";',
    'import { HeaderAccessible } from "@/components/orivion/HeaderAccessible";',
  );
  await replace(
    rel,
    'import { siteConfig } from "@/lib/site-data";',
    'import { siteConfig } from "@/lib/site-data";\nimport { AnalyticsRuntime } from "@/components/site/AnalyticsRuntime";',
  );
  await replace(rel, '<div className="orivion cursor-hidden" id="top">', '<div className="orivion" id="top">');
  await replace(rel, '      <Header />', '      <HeaderAccessible />');
  await replace(rel, '      <OrivionEffects />', '      <AnalyticsRuntime />\n      <OrivionEffects />');
}

async function patchForms() {
  const routeDir = path.join(ROOT, "src/routes");
  const names = await fs.readdir(routeDir);
  for (const name of names) {
    if (!name.endsWith(".tsx")) continue;
    const rel = `src/routes/${name}`;
    await replaceAllIn(
      rel,
      'import { ConsultationForm } from "@/components/site/ConsultationForm";',
      'import { ConsultationFormSecure as ConsultationForm } from "@/components/site/ConsultationFormSecure";',
    );
  }
}

async function patchEffects() {
  const rel = "src/components/orivion/OrivionEffects.tsx";
  await replace(
    rel,
    `    // preloader\n    const loader = root.querySelector<HTMLElement>("#loader");\n    if (loader) {\n      const t = window.setTimeout(() => {\n        loader.classList.add("done");\n        root.classList.add("loaded");\n      }, 1150);\n      cleanups.push(() => window.clearTimeout(t));\n    } else {\n      root.classList.add("loaded");\n    }`,
    `    // Keep the brand loader brief, show it once per session, and never rely on it\n    // to make the page usable. CSS also contains a no-JS fallback timeout.\n    const loader = root.querySelector<HTMLElement>("#loader");\n    if (loader) {\n      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;\n      let seen = false;\n      try {\n        seen = window.sessionStorage.getItem("orivion-loader-seen") === "1";\n      } catch {\n        // Storage may be unavailable in privacy-restricted browser modes.\n      }\n      const delay = reducedMotion || seen ? 0 : 420;\n      const t = window.setTimeout(() => {\n        loader.classList.add("done");\n        root.classList.add("loaded");\n        try {\n          window.sessionStorage.setItem("orivion-loader-seen", "1");\n        } catch {\n          // Ignore storage failures.\n        }\n      }, delay);\n      cleanups.push(() => window.clearTimeout(t));\n    } else {\n      root.classList.add("loaded");\n    }`,
  );
  await replace(
    rel,
    `    if (dot && ring) {\n      let mx = window.innerWidth / 2,`,
    `    if (dot && ring) {\n      // Hide the native cursor only after the replacement cursor is ready.\n      root.classList.add("cursor-hidden");\n      cleanups.push(() => root.classList.remove("cursor-hidden"));\n      let mx = window.innerWidth / 2,`,
  );
}

async function patchHomepage() {
  const rel = "src/routes/index.tsx";
  await replaceAllIn(rel, 'preload="auto"', 'preload="metadata"');
  await replace(
    rel,
    `              name: "Orivion",\n              url: "https://orivion.ae/",\n              email: siteConfig.email,`,
    `              name: "Orivion",\n              url: "https://orivion.ae/",\n              logo: \`${'${siteConfig.url}'}/favicon.svg\`,\n              sameAs: [siteConfig.linkedinUrl],\n              email: siteConfig.email,`,
  );

  let content = await read(rel);
  content = content.replace(
    /const stats = \[\n  \{ n: "14", suf: "", l: "Defined services" \},\n  \{ n: "2", suf: "", l: "Service tracks" \},\n  \{ n: "1", suf: "", l: "Accountable team" \},\n\];\n\n/,
    "",
  );
  content = content.replace(
    /\n              <div className="intel-stats">\n                \{stats\.map\(\(s\) => \(\n                  <div key=\{s\.l\}>\n                    <b data-count=\{s\.n\} data-suffix=\{s\.suf\}>\n                      0\n                    <\/b>\n                    <span>\{s\.l\}<\/span>\n                  <\/div>\n                \)\)}\n              <\/div>/,
    "",
  );
  await write(rel, content);
}

async function patchMetadataAndImages() {
  await replaceAllIn(
    "src/routes/__root.tsx",
    "family=JetBrains+Mono:wght@300;400&display=swap",
    "family=JetBrains+Mono:wght@300;400&display=swap",
  );
  const root = await read("src/routes/__root.tsx");
  if (!root.includes("&display=swap")) {
    await replace(
      "src/routes/__root.tsx",
      "family=JetBrains+Mono:wght@300;400&display=swap",
      "family=JetBrains+Mono:wght@300;400&display=swap",
    ).catch(async () => {
      await replace(
        "src/routes/__root.tsx",
        "family=JetBrains+Mono:wght@300;400&display=swap",
        "family=JetBrains+Mono:wght@300;400&display=swap",
      );
    });
  }

  await replace(
    "src/components/orivion/ui.tsx",
    '<img src={image} alt={imageAlt} loading="eager" fetchPriority="high" />',
    `<img\n            src={image}\n            alt={imageAlt}\n            loading="eager"\n            fetchPriority="high"\n            decoding="async"\n            sizes="100vw"\n          />`,
  );

  await replace(
    "src/lib/site-data.ts",
    '  whatsappUrl: "https://wa.me/971555166383",',
    '  whatsappUrl: "https://wa.me/971555166383",\n  linkedinUrl: "https://www.linkedin.com/company/144521943/",',
  );

  const routeDir = path.join(ROOT, "src/routes");
  const names = await fs.readdir(routeDir);
  for (const name of names) {
    if (!name.endsWith(".tsx")) continue;
    const rel = `src/routes/${name}`;
    let content = await read(rel);
    content = content.replace(/(image="\/media\/pages\/[^".]+)\.jpg"/g, '$1.webp"');
    await write(rel, content);
  }

  await replaceAllIn(
    "src/routes/services.$slug.tsx",
    'src={`/media/services/${svc.slug}.jpg`}',
    'src={`/media/services/${svc.slug}.webp`}',
  );
  await replaceAllIn(
    "src/routes/blog.$slug.tsx",
    'src={`/media/insights/${post.slug}.jpg`}',
    'src={`/media/insights/${post.slug}.webp`}',
  );
  await replaceAllIn(
    "src/routes/jurisdictions.$slug.tsx",
    'src={`/media/jurisdictions/${j.slug}.jpg`}',
    'src={`/media/jurisdictions/${j.slug}.webp`}',
  );
}

async function patchCss() {
  const rel = "src/orivion.css";
  let content = await read(rel);
  const marker = "/* ---------- production hardening ---------- */";
  if (content.includes(marker)) return;
  content += `\n\n${marker}\n.orivion #loader {\n  pointer-events: none;\n  animation: o-loader-fallback 0.25s ease 0.75s forwards;\n}\n.orivion #loader.done {\n  animation: none;\n}\n@keyframes o-loader-fallback {\n  to {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n.orivion .o-consent {\n  position: fixed;\n  left: 20px;\n  right: 20px;\n  bottom: 20px;\n  z-index: 10020;\n  max-width: 920px;\n  margin: 0 auto;\n  padding: 18px 20px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.97);\n  box-shadow: 0 20px 60px rgba(14, 17, 22, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.orivion .o-consent strong {\n  display: block;\n  margin-bottom: 5px;\n}\n.orivion .o-consent p {\n  margin: 0;\n  max-width: 620px;\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.5;\n}\n.orivion .o-consent-actions {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.orivion .o-consent-actions .btn {\n  white-space: nowrap;\n}\n.orivion .o-turnstile {\n  width: min(100%, 420px);\n  min-height: 65px;\n}\n.orivion .o-note a {\n  color: inherit;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n@media (max-width: 720px) {\n  .orivion .o-consent {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .orivion .o-consent-actions {\n    flex-wrap: wrap;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .orivion,\n  .orivion * {\n    scroll-behavior: auto !important;\n  }\n  .orivion *,\n  .orivion *::before,\n  .orivion *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    transition-delay: 0ms !important;\n  }\n  .orivion #loader,\n  .orivion .cur-dot,\n  .orivion .cur-ring {\n    display: none !important;\n  }\n  .orivion.cursor-hidden,\n  .orivion.cursor-hidden a,\n  .orivion.cursor-hidden button {\n    cursor: auto !important;\n  }\n  .orivion .rv,\n  .orivion .proc,\n  .orivion .home-hero-sub,\n  .orivion .home-hero-actions,\n  .orivion h1 .l span {\n    opacity: 1 !important;\n    transform: none !important;\n  }\n}\n`;
  await write(rel, content);
}

async function optimizeImages() {
  const dirs = ["pages", "services", "insights", "jurisdictions"];
  for (const dir of dirs) {
    const abs = path.join(ROOT, "public/media", dir);
    let entries = [];
    try {
      entries = await fs.readdir(abs);
    } catch {
      continue;
    }
    for (const name of entries) {
      if (!/\.jpe?g$/i.test(name)) continue;
      const input = path.join(abs, name);
      const output = path.join(abs, name.replace(/\.jpe?g$/i, ".webp"));
      await sharp(input)
        .rotate()
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(output);
    }
  }
}

await patchSiteLayout();
await patchForms();
await patchEffects();
await patchHomepage();
await patchMetadataAndImages();
await patchCss();
await optimizeImages();

console.log("Production hardening complete.");
