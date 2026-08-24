# Orivion DESIGN.md

## 1. Brand Idea

Orivion should feel like a modern operating partner for businesses: capable of helping a company become real, remain operational, and build the digital systems behind its growth.

The design language must connect business structure with technology.

Working brand line:

> **Build the business. Build what powers it.**

The visual system should feel precise, architectural, calm and intelligent. It must not look like a generic UAE business setup website or a generic AI agency.

---

## 2. Visual Theme & Atmosphere

### Core mood

- dark architectural surfaces
- warm neutral light
- restrained metallic accents
- large typography
- deep negative space
- subtle motion everywhere, strong motion only where it helps the story
- real visual depth rather than gradients for their own sake

### Keywords

Architectural. Technical. Editorial. Quietly futuristic. Human-readable. Premium without looking luxurious for the sake of it.

### Avoid

- neon cyberpunk
- blue-purple AI gradients
- glassmorphism everywhere
- floating crypto-style spheres
- fake dashboards
- fake numerical counters
- excessive pills and badges
- endless rounded cards
- stock-photo handshakes
- random Dubai skyline images in every section
- decorative pseudo-system text such as “NODE 04” unless it has a real function

---

## 3. Color Palette

### Core surfaces

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#090A0C` | primary page background |
| `charcoal` | `#101216` | raised dark surfaces |
| `graphite` | `#191C21` | cards, panels, secondary surfaces |
| `smoke` | `#8B8E94` | secondary text and rules |
| `porcelain` | `#F2EFE8` | primary light text / light surfaces |
| `warm-white` | `#FAF8F3` | bright content surfaces |
| `bronze` | `#B58A5A` | restrained brand accent |
| `bronze-soft` | `#D0AD82` | hover/highlight accent |
| `bronze-dark` | `#765838` | dark accent depth |

### Usage rules

- Bronze is a signal color, not a page fill.
- Default dark page ratio should be roughly 80–90% neutral surfaces and 10–20% light/bronze emphasis.
- Use porcelain instead of pure white for most text and surfaces.
- Use warm white for editorial reading sections and legal/insight content.
- Do not introduce arbitrary bright accents page by page.

---

## 4. Typography

Use the fonts already present in the project where possible.

### Display / headings

**Space Grotesk Variable**

Use for:

- hero headlines
- section headlines
- navigation
- buttons
- service names

Rules:

- short lines
- wide containers
- avoid 5–6 line hero headings
- default hero headline: 1–3 lines
- large sizes should use controlled tracking, usually slightly negative

### Editorial accent

**Instrument Serif**

Use sparingly for:

- one word or phrase in a major heading
- editorial pull quote
- transitional statement

Never turn every heading into a serif/sans mix.

### Technical / utility

**JetBrains Mono Variable**

Use only for:

- source labels
- timestamps
- technical metadata
- small comparison details
- “last reviewed” content

Do not use monospace as decorative filler.

### Suggested scale

| Role | Desktop | Mobile |
| --- | --- | --- |
| Display XL | `clamp(4.5rem, 8vw, 8rem)` | `clamp(3rem, 14vw, 4.8rem)` |
| H1 | `clamp(3.8rem, 6vw, 6.5rem)` | `clamp(2.7rem, 11vw, 4rem)` |
| H2 | `clamp(2.6rem, 4.5vw, 4.8rem)` | `clamp(2.1rem, 8vw, 3.2rem)` |
| H3 | `clamp(1.7rem, 2.4vw, 2.6rem)` | `1.65rem–2.1rem` |
| Body L | `1.2rem–1.35rem` | `1.05rem–1.15rem` |
| Body | `1rem–1.08rem` | `1rem` |
| Utility | `0.75rem–0.85rem` | `0.72rem–0.8rem` |

---

## 5. Layout Principles

### Global frame

- maximum content width: `1440px`
- large editorial sections may exceed content width with controlled media bleed
- default desktop horizontal gutter: `40–64px`
- tablet: `28–40px`
- mobile: `18–24px`

### Grid

Desktop: 12 columns

Tablet: 8 columns

Mobile: 4 columns

### Text width

- long-form body: `620–720px`
- hero supporting copy: `520–680px`
- never force body text across the full viewport

### Section spacing

Major sections should feel like chapters.

Desktop: `120–220px` vertical breathing room depending on function.

Mobile: `80–128px`.

Do not solve weak hierarchy by putting everything in a card.

---

## 6. Navigation

### Desktop

Use a slim, quiet header over the hero.

Structure:

- Orivion wordmark/brand mark left
- primary nav centered or right-weighted
- consultation CTA right

Main nav:

- Business Setup
- Digital & Technology
- Why Dubai
- Insights
- About
- Contact

Business Setup and Digital & Technology use mega menus.

### Mega menu style

Not a giant white box.

Use a dark, architectural panel with:

- service list
- one contextual description
- one visual or animated diagram
- one clear CTA

### Mobile

Use a full-screen navigation layer with large readable links. No tiny nested accordions.

Business Setup and Digital & Technology can expand as sections with generous touch targets.

---

## 7. Hero System

The Split-O must **not** become the hero object.

### Homepage hero

Primary visual: **Orivion System**

A 3D environment of connected business stages:

- Establish
- Operate
- Build
- Grow
- Automate

The scene should resemble an architectural model/data structure rather than floating sci-fi ornaments.

Materials:

- smoked glass used sparingly
- dark metal
- matte porcelain
- bronze signal surfaces
- subtle point lights

### Motion

- camera movement is slow and deliberate
- pointer creates small depth response, not wild orbiting
- scroll advances the scene through logical stages
- text remains readable even if WebGL fails

### Mobile

Prefer a simplified scene or pre-rendered visual sequence if device performance is weak.

---

## 8. Image Direction

Image-first design should be used for visually important pages.

### Preferred imagery

- architectural detail
- modern business environments
- close crops of materials, screens and physical systems
- editorial portraits when real people are available
- custom AI-generated visual metaphors
- product/interface imagery for digital pages
- Dubai used selectively and contextually

### Avoid

- generic skyline hero on every business page
- handshake photos
- smiling call-centre stock imagery
- laptop-on-desk stock photos
- blue hologram overlays
- obvious AI-generated businesspeople with fake text

### Treatment

- cinematic crops
- strong shadows
- low-saturation neutral grading
- occasional bronze warmth
- intentional grain
- image masks can be sharp, editorial or asymmetrical; do not round every image

---

## 9. Motion Language

Motion should exist on four levels.

### Ambient motion

Examples:

- 2–8px floating depth
- slow grain drift
- light sweeps
- line movement

Duration: long and subtle.

### Micro-interactions

Use Motion Primitives-style patterns for:

- button press
- magnetic attraction
- card/image hover
- nav underline
- icon transition
- accordion opening
- tabs and filters

### Scroll narrative

Use GSAP + ScrollTrigger for:

- pinned stage explanations
- stacking content
- image scale/fade
- text reveal
- timeline progression

Never hijack native scroll.

### 3D narrative

Use React Three Fiber for selected key scenes only.

Do not mount a heavy canvas on every route.

---

## 10. Hover and Pointer Behavior

Desktop interactions should feel tactile.

### Images

- image scale: maximum about `1.03–1.07`
- subtle crop shift
- optional light/grain response

### Cards

Prefer transform/lighting changes over lifting every card with a large shadow.

### Buttons

- magnetic motion limited to a few pixels
- pointer/focus state must remain obvious
- visible keyboard focus

### Links

Use animated line or directional arrow movement rather than color change alone.

---

## 11. Buttons

### Primary

Porcelain/light button on dark surfaces.

- high contrast
- medium radius, not full pill by default
- clear label
- arrow can move 3–5px on hover

### Secondary

Transparent/dark surface with visible border.

### Bronze

Reserve bronze-filled actions for rare high-value moments, not every CTA.

### Shape

Default radius: `10–14px`.

Do not make every button a pill.

---

## 12. Cards and Panels

Cards are not the default content container.

Use cards when the information is genuinely discrete.

### Preferred card behavior

- one strong visual or information hierarchy
- minimal border
- subtle surface shift
- hover reveals extra detail when useful

### Avoid

- cards inside cards
- 8–12 identical boxes
- every section becoming a bento grid
- huge rounded outer containers around entire page sections

---

## 13. Business Setup Visual Language

Business Setup pages should feel clear and procedural rather than bureaucratic.

### Visual motifs

- pathways
- document layers
- stamps/seals used abstractly, not literally everywhere
- branching decision trees
- timelines
- jurisdiction maps
- compliance checkpoints
- structured lists

### Service signatures

**Company Formation** — branching route / entity architecture

**Trade Licensing** — taxonomy / activity constellation

**PRO Services** — document and residency journey

**Compliance & Regulatory** — layered verification/checkpoint system

**Accounting & Tax** — flowing ledger/tax timeline with clean numeric hierarchy

**Banking Support** — information packet assembling into an application readiness view

**Office Solutions** — spatial layout transforming from flexi-desk to private office

**Additional Services** — modular company lifecycle controls

---

## 14. Digital & Technology Visual Language

Digital pages can be more expressive but must still feel like the same brand.

### Service signatures

**Websites & Platforms** — responsive viewport morphing / image-to-code visual

**Custom Software** — 3D system architecture blocks

**CRM & Automation** — animated process graph

**Digital Marketing** — acquisition path moving through channels to conversion

**Social Media** — content system evolving from idea to calendar to published feed

**AI Integration** — human-approved AI workflow, not a glowing robot brain

---

## 15. Insight / Editorial Pages

Reading experience takes priority over effects.

### Layout

- warm white or porcelain reading bands
- strong headline hierarchy
- dark navigation retained
- large images
- source/updated metadata clearly shown
- inline diagrams or comparison blocks

### Regulatory article metadata

Display:

- last reviewed date
- source links
- reviewer when applicable
- concise disclaimer

---

## 16. Forms

Forms should feel calm and trustworthy.

### Rules

- labels always visible
- errors specific and adjacent to fields
- generous input height
- clear selected service intent
- phone inputs support international formats
- consent text readable
- no hidden placeholder-as-label forms

On mobile, avoid large multi-column forms.

---

## 17. Responsive Behavior

### Desktop

Full art direction, 3D, pinned scroll and pointer-responsive details are allowed.

### Tablet

Reduce long pinned sequences and depth effects.

### Mobile

- preserve hierarchy
- simplify 3D
- turn hover reveals into tap/expanded states
- shorter transitions
- avoid interactions requiring precision pointer movement
- keep text and CTA visible without waiting for animation

### Reduced motion

Respect `prefers-reduced-motion` globally.

When enabled:

- remove parallax
- replace scrubbing with simple fades
- disable camera motion
- preserve all content and navigation

---

## 18. Accessibility Rules

- minimum touch target around 44px where practical
- visible keyboard focus
- sufficient text contrast
- never communicate status by color only
- alt text for meaningful images
- decorative visual layers hidden from assistive tech
- headings remain semantic despite visual styling
- interactive canvas experiences must have DOM equivalents
- avoid auto-playing motion that makes reading difficult

---

## 19. Performance Rules

- 3D loaded dynamically
- no Three.js bundle on routes that do not need it
- images served in AVIF/WebP where practical
- preload only genuinely critical hero assets
- mobile-specific video/image assets
- avoid huge transparent PNGs
- animations use transform/opacity where possible
- no layout animation that causes CLS
- test production builds, not only localhost

---

## 20. Component Strategy

Use the existing Radix/shadcn foundation for accessible primitives.

Borrow interaction patterns from Watermelon UI and Motion Primitives where they improve the experience, but re-style them so Orivion does not look like a copied component library.

### Core custom components to build

- `OrivionMegaMenu`
- `OrivionSystemHero`
- `DualPathSelector`
- `SystemStageScroller`
- `BusinessServiceAccordion`
- `DigitalCapabilityMap`
- `ResearchSourceBlock`
- `LastReviewedBadge`
- `JurisdictionComparator`
- `ProcessTimeline`
- `InteractiveFAQFilter`
- `RelatedServicesRail`
- `EditorialArticleLayout`
- `ProjectIntentForm`

---

## 21. Page Transition Rules

Transitions should be short and controlled.

- fade/translate: `300–550ms`
- large scene changes: `500–900ms`
- never block route navigation waiting for a decorative animation

The Split-O can appear briefly as a transition/status signature, but never become a full-screen animation that the user repeatedly has to wait through.

---

## 22. Design Guardrails

Do:

- use large negative space
- vary section architecture
- let important visuals breathe
- keep copy readable
- make each service page visually distinct
- connect motion to the content
- use real research and real explanations

Do not:

- repeat left-copy/right-image six times
- repeat identical 3-column card grids
- overuse glass panels
- put every heading in a narrow column
- add fake data visualizations
- add effects that hide text
- copy another brand’s DESIGN.md literally
- use visual complexity as a substitute for clear information

---

## 23. Quality Gate

Before a page is considered ready:

1. Does it explain the service clearly to someone unfamiliar with it?
2. Is the page visually different from the previous service page?
3. Is the motion helping the story?
4. Does it work without motion?
5. Is mobile intentionally designed?
6. Are all claims supportable?
7. Are regulated facts sourced and dated?
8. Does it pass accessibility review?
9. Does it pass Vercel interface-guideline review?
10. Does it pass a production Lighthouse/browser check?

If the answer to any important item is no, the page is not finished.
