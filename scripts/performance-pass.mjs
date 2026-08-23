import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const p = (rel) => path.join(ROOT, rel);
const read = (rel) => fs.readFile(p(rel), "utf8");
const write = (rel, content) => fs.writeFile(p(rel), content);

async function patchHomepage() {
  const rel = "src/routes/index.tsx";
  let content = await read(rel);

  content = content.replace(
    'import { lazy, Suspense, useEffect, useRef, useState } from "react";',
    'import { useEffect, useState } from "react";',
  );

  content = content.replace(
    /\nconst ConsultationForm = lazy\(\(\) =>[\s\S]*?\n\);\n\nexport const Route/,
    '\nimport { ConsultationFormSecure as ConsultationForm } from "@/components/site/ConsultationFormSecure";\n\nexport const Route',
  );

  if (!content.includes('ConsultationFormSecure as ConsultationForm')) {
    content = content.replace(
      'import { OButton } from "@/components/orivion/ui";\n',
      'import { ConsultationFormSecure as ConsultationForm } from "@/components/site/ConsultationFormSecure";\nimport { OButton } from "@/components/orivion/ui";\n',
    );
  }

  const deferredStart = content.indexOf("function DeferredConsultationForm() {");
  const homeStart = content.indexOf("function Home() {", deferredStart);
  if (deferredStart !== -1 && homeStart !== -1) {
    content = content.slice(0, deferredStart) + content.slice(homeStart);
  }

  content = content.replaceAll("<DeferredConsultationForm />", "<ConsultationForm compact />");

  // Keep decorative video work outside the initial performance window while
  // preserving immediate playback after real visitor interaction.
  content = content.replace("timer = window.setTimeout(apply, 6500);", "timer = window.setTimeout(apply, 10000);");
  content = content.replace("timer = window.setTimeout(apply, 1200);", "timer = window.setTimeout(apply, 4200);");

  await write(rel, content);
}

async function restoreStableCssEntry() {
  await write(
    "src/app.css",
    `@import "./styles.css";\n@import "./orivion.css";\n@import "./native-ui-overrides.css";\n`,
  );
  await fs.rm(p("src/perf.css"), { force: true });
}

await patchHomepage();
await restoreStableCssEntry();

console.log("Stable performance hydration path restored.");
