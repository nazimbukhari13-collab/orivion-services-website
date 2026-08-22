import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

async function read(rel) {
  return fs.readFile(path.join(ROOT, rel), "utf8");
}

async function write(rel, content) {
  await fs.writeFile(path.join(ROOT, rel), content);
}

async function patchRootFonts() {
  const rel = "src/routes/__root.tsx";
  let content = await read(rel);

  const fontImports = `import "@fontsource-variable/space-grotesk/wght.css";\nimport "@fontsource/instrument-serif/latin-400.css";\nimport "@fontsource/instrument-serif/latin-400-italic.css";\nimport "@fontsource-variable/jetbrains-mono/wght.css";\n`;

  if (!content.includes("@fontsource-variable/space-grotesk")) {
    content = content.replace(
      'import { useEffect, type ReactNode } from "react";\n',
      `import { useEffect, type ReactNode } from "react";\n\n${fontImports}`,
    );
  }

  content = content.replace(
    /\n\s*\{\n\s*rel: "preconnect",\n\s*href: "https:\/\/fonts\.googleapis\.com",\n\s*\},/g,
    "",
  );
  content = content.replace(
    /\n\s*\{\n\s*rel: "preconnect",\n\s*href: "https:\/\/fonts\.gstatic\.com",\n\s*crossOrigin: "anonymous",\n\s*\},/g,
    "",
  );
  content = content.replace(
    /\n\s*\{\n\s*rel: "stylesheet",\n\s*href: "https:\/\/fonts\.googleapis\.com\/css2\?family=Space\+Grotesk:[^\n]+\n\s*\},/g,
    "",
  );

  await write(rel, content);
}

async function patchHomepage() {
  const rel = "src/routes/index.tsx";
  let content = await read(rel);

  content = content.replace(
    '    links: [{ rel: "canonical", href: "https://orivion.ae/" }],',
    `    links: [\n      { rel: "canonical", href: "https://orivion.ae/" },\n      {\n        rel: "preload",\n        as: "image",\n        href: "/media/orivion-hero-mobile-poster.webp",\n        media: "(max-width: 760px)",\n      },\n      {\n        rel: "preload",\n        as: "image",\n        href: "/media/orivion-hero-desktop-poster.webp",\n        media: "(min-width: 761px)",\n      },\n    ],`,
  );

  const start = content.indexOf("function useHeroVideoVariant() {");
  const end = content.indexOf("\nconst marqueeItems", start);
  if (start !== -1 && end !== -1) {
    const replacement = `function useHeroVideoVariant() {\n  const [variant, setVariant] = useState<"desktop" | "mobile" | null>(null);\n\n  useEffect(() => {\n    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;\n\n    const connection = (navigator as Navigator & {\n      connection?: { saveData?: boolean; effectiveType?: string };\n    }).connection;\n    if (connection?.saveData || /(?:^|-)2g$/i.test(connection?.effectiveType || "")) return;\n\n    const mq = window.matchMedia("(max-width: 760px)");\n    let timer = 0;\n\n    const apply = () => setVariant(mq.matches ? "mobile" : "desktop");\n    const schedule = () => {\n      window.clearTimeout(timer);\n      timer = window.setTimeout(apply, 1200);\n    };\n    const onViewportChange = () => setVariant(mq.matches ? "mobile" : "desktop");\n\n    if (document.readyState === "complete") schedule();\n    else window.addEventListener("load", schedule, { once: true });\n    mq.addEventListener("change", onViewportChange);\n\n    return () => {\n      window.clearTimeout(timer);\n      window.removeEventListener("load", schedule);\n      mq.removeEventListener("change", onViewportChange);\n    };\n  }, []);\n\n  return variant;\n}\n`;
    content = content.slice(0, start) + replacement + content.slice(end);
  }

  content = content.replaceAll('preload="metadata"', 'preload="none"');
  await write(rel, content);
}

async function patchEffects() {
  const rel = "src/components/orivion/OrivionEffects.tsx";
  let content = await read(rel);
  content = content.replace(
    "    if (dot && ring) {\n      // Hide the native cursor only after the replacement cursor is ready.",
    "    if (dot && ring && window.matchMedia(\"(pointer: fine)\").matches) {\n      // Hide the native cursor only after the replacement cursor is ready.",
  );
  await write(rel, content);
}

async function patchCss() {
  const rel = "src/orivion.css";
  let content = await read(rel);
  content = content.replace("  --muted: #6f7681;", "  --muted: #5f6670;");
  content = content.replace("  --faint: #a7adb6;", "  --faint: #656c77;");
  content = content.replace('  --sans: "Space Grotesk", sans-serif;', '  --sans: "Space Grotesk Variable", "Space Grotesk", sans-serif;');
  content = content.replace('  --mono: "JetBrains Mono", monospace;', '  --mono: "JetBrains Mono Variable", "JetBrains Mono", monospace;');

  const marker = "/* ---------- mobile rendering budget ---------- */";
  if (!content.includes(marker)) {
    content += `\n\n${marker}\n@media (max-width: 760px), (pointer: coarse) {\n  .orivion::after {\n    animation: none;\n    opacity: 0.035;\n  }\n  .orivion .magnet {\n    transform: none !important;\n  }\n}\n`;
  }
  await write(rel, content);
}

await patchRootFonts();
await patchHomepage();
await patchEffects();
await patchCss();

console.log("Lighthouse performance pass applied.");
