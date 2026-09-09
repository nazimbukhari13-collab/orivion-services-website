# CLAUDE.md — Orivion website (V2)

Working guardrail for any AI/agent session in this repo. Read this first, then the source-of-truth files it points to. When this file and a casual instruction disagree, follow the source-of-truth files or ask.

## What this project is

Orivion is an international business-setup + digital-technology company. The website's one distinctive idea — its organizing experience — is the **combined offer**: *one operating partner that establishes the company **and** builds the digital systems that run it.* Make that seam visible in the design; don't just assert it in copy.

Working brand line: **Build the business. Build what powers it.**

## Stack

- Vite + React + TanStack Router (`src/routes/*`), TypeScript, Radix/shadcn UI, Tailwind.
- Content lives in `src/lib/` (`service-details.ts`, `site-data.ts`, `article-details.ts`, `jurisdiction-details.ts`), not hardcoded in components.
- **Lovable-connected** (see `AGENTS.md`): commits on the connected branch sync back to Lovable. Never force-push, rebase, amend, or squash already-pushed commits. Keep the branch buildable.
- Package manager: Bun (`bun.lock`). Scripts: `dev`, `build`, `build:dev`, `preview`, `lint`, `format`.

## Source of truth (read before building)

1. `docs/orivion-service-architecture.md` — **locked** service model. Two divisions, 17 families (do not rename casually).
2. `DESIGN.md` — **locked** visual system (currently the light/Apple system).
3. `skills/human-writing/SKILL.md` — **mandatory** writing standard for all public copy.
4. `REDESIGN_BLUEPRINT.md` — fuller redesign brief.

## Locked service architecture (17 families, 2 divisions)

**Business Setup & Corporate Services (8):** Company Formation · Trade Licensing & Amendments · PRO & Government Services · Compliance & Regulatory · Accounting & Tax · Banking Support · Office & Workspace Solutions · Corporate Changes & Additional Services.

**Digital Products, Technology & Growth (9):** Web/Apps & Digital Products · Software Engineering & Cloud · Product Design & Creative · AI & Automation · Data & BI · CRM/Sales & Customer Systems · Digital Marketing & Growth · Social/Content & Media · Commerce & Digital Operations.

Digital division narrates as **Build → Run → Grow** (a storytelling frame, not a replacement for the nine families).

## Visual system (light / Apple-inspired) — see DESIGN.md for detail

- **Palette:** white `#FFFFFF` + paper `#F5F5F7` grounds, mist `#FBFBFD`, hairline `#D2D2D7`; text ink `#1D1D1F` / slate `#424245` / ash `#6E6E73`; single accent `#0071E3` (hover `#0077ED`, deep `#0059B3`). Accent is a signal, not a fill (~85–95% neutral).
- **Retired:** the dark bronze/porcelain palette. Do not reintroduce bronze, dark page grounds, or the dual-material "corporate=bronze / digital=porcelain" world.
- **Type:** Space Grotesk (display/UI), Instrument Serif (sparing editorial accent, no italic crutch), JetBrains Mono (technical labels only).
- Depth via soft shadow on white; generous whitespace; gently rounded corners (10–14px); clarity, deference, depth.
- Respect `prefers-reduced-motion`; never hijack scroll; 3D (R3F) only on selected scenes, loaded dynamically.

## Content & integrity rules (non-negotiable)

- Use the `human-writing` standard: natural expert English, no AI-writing tics, no inflated claims, no forced triads, sparing em dashes.
- **No invention:** no fake clients, logos, testimonials, awards, statistics, success rates, rankings, or guarantees.
- Never guarantee outcomes controlled by third parties (banks, government authorities, ad networks, platforms).
- Corporate-services copy stays coordination-focused; distinguish Orivion's role from authority decisions; IFZA relationship only as evidenced (Partner / authorised introductory agent — never "Channel Partner" unless separately evidenced); verify current status before publishing.
- Each service page follows the 13-point structure in `docs/orivion-service-architecture.md`; regulated facts carry a last-reviewed date and sources.
- Logo design is **out of scope for now** (deferred by the owner).

## Definition of done (per page)

Typecheck + `lint` + production `build` pass; content explains the service clearly; claims are supportable; regulated facts sourced/dated; mobile intentionally designed; works without motion; AA contrast on the light ground; no dark bronze/porcelain surfaces remain. (Full gate: `DESIGN.md` §24.)
