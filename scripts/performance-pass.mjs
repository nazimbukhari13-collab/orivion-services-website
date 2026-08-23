import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

async function read(rel) {
  return fs.readFile(path.join(ROOT, rel), "utf8");
}

async function write(rel, content) {
  await fs.writeFile(path.join(ROOT, rel), content);
}

async function patchRoot() {
  const rel = "src/routes/__root.tsx";
  let content = await read(rel);

  content = content.replace('import "@fontsource-variable/jetbrains-mono/wght.css";\n', "");
  content = content.replace(
    'import { QueryClient, QueryClientProvider } from "@tanstack/react-query";\n',
    "",
  );
  content = content.replace(
    'export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({',
    'export const Route = createRootRouteWithContext<Record<string, never>>()({',
  );
  content = content.replace(
    `function RootComponent() {\n  const { queryClient } = Route.useRouteContext();\n\n  return (\n    <QueryClientProvider client={queryClient}>\n      <SiteLayout>\n        <Outlet />\n      </SiteLayout>\n    </QueryClientProvider>\n  );\n}`,
    `function RootComponent() {\n  return (\n    <SiteLayout>\n      <Outlet />\n    </SiteLayout>\n  );\n}`,
  );

  if (!content.includes('import appCss from "../app.css?url";')) {
    content = content.replace(
      /import appCss from "\.\.\/styles\.css\?url";\n(?:import orivionCss from "\.\.\/orivion\.css\?url";\n)?/,
      'import appCss from "../app.css?url";\n',
    );
  }

  content = content.replace(
    /\n\s*\{\n\s*rel: "stylesheet",\n\s*href: orivionCss,\n\s*\},/g,
    "",
  );

  await write(rel, content);
}

async function patchRouter() {
  const rel = "src/router.tsx";
  let content = await read(rel);
  content = content.replace('import { QueryClient } from "@tanstack/react-query";\n', "");
  content = content.replace('  const queryClient = new QueryClient();\n\n', "");
  content = content.replace("    context: { queryClient },", "    context: {},");
  await write(rel, content);
}

async function patchHomepage() {
  const rel = "src/routes/index.tsx";
  let content = await read(rel);

  content = content.replace(
    'import { useEffect, useState } from "react";',
    'import { lazy, Suspense, useEffect, useRef, useState } from "react";',
  );
  content = content.replace(
    'import { ArrowRight, CheckCircle2, Compass, FileSignature, Rocket, LifeBuoy } from "lucide-react";',
    'import { ArrowRight, CheckCircle2 } from "lucide-react";',
  );
  content = content.replace(
    'import { ConsultationFormSecure as ConsultationForm } from "@/components/site/ConsultationFormSecure";\n',
    "",
  );

  if (!content.includes("const ConsultationForm = lazy(")) {
    content = content.replace(
      'import { OButton } from "@/components/orivion/ui";\n',
      `import { OButton } from "@/components/orivion/ui";\n\nconst ConsultationForm = lazy(() =>\n  import("@/components/site/ConsultationFormSecure").then((module) => ({\n    default: module.ConsultationFormSecure,\n  })),\n);\n`,
    );
  }

  content = content.replace(/\n\s*icon: (Compass|FileSignature|Rocket|LifeBuoy),/g, "");
  content = content.replace("timer = window.setTimeout(apply, 6500);", "timer = window.setTimeout(apply, 10000);");
  content = content.replace("timer = window.setTimeout(apply, 1200);", "timer = window.setTimeout(apply, 4200);");

  if (!content.includes("function DeferredConsultationForm()")) {
    const marker = "\nfunction Home() {";
    const component = `\nfunction DeferredConsultationForm() {\n  const hostRef = useRef<HTMLDivElement>(null);\n  const [ready, setReady] = useState(false);\n\n  useEffect(() => {\n    const host = hostRef.current;\n    if (!host) return;\n\n    const observer = new IntersectionObserver(\n      ([entry]) => {\n        if (!entry.isIntersecting) return;\n        setReady(true);\n        observer.disconnect();\n      },\n      { rootMargin: "500px 0px" },\n    );\n    observer.observe(host);\n    return () => observer.disconnect();\n  }, []);\n\n  return (\n    <div ref={hostRef}>\n      {ready ? (\n        <Suspense fallback={<div className="o-form-placeholder" aria-hidden="true" />}>\n          <ConsultationForm compact />\n        </Suspense>\n      ) : (\n        <div className="o-form-placeholder" aria-hidden="true" />\n      )}\n    </div>\n  );\n}\n`;
    content = content.replace(marker, component + marker);
  }

  content = content.replace("<ConsultationForm compact />", "<DeferredConsultationForm />");
  content = content.replaceAll('preload="metadata"', 'preload="none"');
  await write(rel, content);
}

async function patchCss() {
  const rel = "src/orivion.css";
  let content = await read(rel);
  content = content.replace("  --muted: #6f7681;", "  --muted: #5f6670;");
  content = content.replace("  --faint: #a7adb6;", "  --faint: #656c77;");
  content = content.replace(
    '  --mono: "JetBrains Mono Variable", "JetBrains Mono", monospace;',
    '  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;',
  );
  content = content.replace(
    '  --mono: "JetBrains Mono", monospace;',
    '  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;',
  );
  content = content.replace(
    `  opacity: 0;\n  transform: translateY(38px);\n  filter: blur(6px);\n  transition:\n    opacity 1s var(--ease),\n    transform 1s var(--ease),\n    filter 1s var(--ease);`,
    `  opacity: 0;\n  transform: translateY(38px);\n  transition:\n    opacity 0.8s var(--ease),\n    transform 0.8s var(--ease);`,
  );
  content = content.replace(
    `  opacity: 1;\n  transform: none;\n  filter: none;`,
    `  opacity: 1;\n  transform: none;`,
  );
  await write(rel, content);
}

async function writePerformanceCss() {
  await write(
    "src/perf.css",
    `/* Performance-focused overrides for the initial viewport. */\n.o-form-placeholder {\n  min-height: 620px;\n}\n\n@media (max-width: 760px), (pointer: coarse) {\n  .orivion::after {\n    display: none;\n  }\n\n  .orivion .brand .mark::before,\n  .orivion .home-hero-scroll i::after,\n  .orivion .marquee .track {\n    animation: none !important;\n  }\n\n  .orivion .rv,\n  .orivion .proc,\n  .orivion .home-hero-sub,\n  .orivion .home-hero-actions,\n  .orivion h1 .l span {\n    opacity: 1 !important;\n    transform: none !important;\n    transition: none !important;\n    filter: none !important;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .orivion *,\n  .orivion *::before,\n  .orivion *::after {\n    scroll-behavior: auto !important;\n    animation-duration: 0.001ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.001ms !important;\n  }\n}\n`,
  );
}

async function writeBundledCssEntry() {
  await write(
    "src/app.css",
    `@import "./styles.css";\n@import "./orivion.css";\n@import "./native-ui-overrides.css";\n@import "./perf.css";\n`,
  );
}

await patchRoot();
await patchRouter();
await patchHomepage();
await patchCss();
await writePerformanceCss();
await writeBundledCssEntry();

console.log("Lighthouse performance pass applied.");
