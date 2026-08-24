# Orivion v2 — Redesign Blueprint

## Purpose

Orivion v2 should feel like one connected company, not two unrelated businesses sharing a website.

The site has two commercial pillars:

1. **Business Setup** — helping founders and companies establish, operate and remain compliant in the UAE.
2. **Digital & Technology** — helping businesses build the websites, software, CRM, automation, marketing systems and AI capabilities that support growth.

The website should connect these two ideas into one clear proposition:

> **Build the business. Build what powers it.**

The homepage should feel international and technology-led. UAE-specific depth should live mainly inside Business Setup, Why Dubai, Jurisdictions and Insights rather than turning the homepage into a typical business-formation landing page.

---

## Non-negotiables

- Keep the Orivion brand premium, restrained and modern.
- Do not use the Split-O as the hero or primary 3D scene. It can remain a loader, nav marker, transition device or brand signature.
- No generic AI-agency layouts, endless card grids or stock-photo handshakes.
- Every important page gets its own visual idea rather than one repeated template with different copy.
- Motion must support understanding. Avoid scroll hijacking and gimmicks that slow down reading.
- Mobile is designed intentionally, not treated as a collapsed desktop.
- All hover-only interactions need touch equivalents.
- Regulatory claims, tax guidance, prices and timelines must be verified before publication.
- Do not invent client results, testimonials, partnerships or case studies.
- Existing useful URLs should be preserved or redirected so the redesign does not throw away current SEO value.

---

# 1. Proposed Information Architecture

## Primary navigation

### Home
`/`

### Business Setup
`/business-setup`

Business Setup mega-menu:

- Company Formation
- Trade Licensing
- PRO Services
- Compliance & Regulatory
- Accounting & Tax
- Banking Support
- Office Solutions
- Additional Services

Supporting decision pages:

- Mainland
- Free Zone
- Offshore
- Mainland vs Free Zone vs Offshore

### Digital & Technology
`/digital-technology`

Digital & Technology mega-menu:

- Websites & Platforms
- Custom Software
- CRM & Automation
- Digital Marketing
- Social Media
- AI Integration

### Why Dubai
`/why-dubai`

### Insights
`/insights`

Content categories:

- Business Setup Guides
- Licensing & Compliance
- Tax & Accounting
- Digital Growth
- AI & Automation
- Website & Product Design

### About
`/about`

### Contact
`/contact`

Persistent CTA:

- **Book a Consultation** → `/consultation`

---

# 2. Supporting Pages

## How We Work
`/how-we-work`

Explain the Orivion working model across both pillars:

1. Understand the requirement
2. Map the right route
3. Build or process
4. Launch
5. Support and improve

This should be a scroll-led interactive process rather than six static boxes.

## FAQ
`/faqs`

Use grouped filters instead of one long accordion:

- Starting a company
- Licences & visas
- Tax & compliance
- Banking & offices
- Websites & software
- Marketing & social
- AI & automation

## Legal

Keep and restyle the existing:

- `/privacy`
- `/terms`
- `/cookies`

---

# 3. Homepage Architecture

The homepage must answer three questions quickly:

1. What is Orivion?
2. What can Orivion help me do?
3. Where should I go next?

## Section 1 — Hero

Working headline:

**Build the business. Build what powers it.**

Support copy:

Orivion helps businesses move from setup to execution — from company formation and compliance to digital products, automation, marketing and AI.

Primary CTA: **Explore Orivion**
Secondary CTA: **Book a Consultation**

### Hero visual concept

A dark 3D computational environment representing a business system coming online.

Five connected stages appear as the user scrolls or moves the pointer:

- Establish
- Operate
- Build
- Grow
- Automate

Each stage is represented by a distinct spatial object or data structure. Thin lines connect the objects into one system. The effect should feel architectural and technical, not sci-fi neon.

Desktop gets the full WebGL scene. Mobile gets a simplified, highly optimized version or rendered motion fallback depending on device capability.

## Section 2 — Choose Your Path

A two-state interactive composition instead of two ordinary cards.

### Business Setup
For founders and companies establishing or operating in the UAE.

### Digital & Technology
For businesses building products, systems, audiences and automation.

Pointer movement reveals more of the selected world on desktop. Tap switches state on mobile.

## Section 3 — The Orivion System

A pinned scroll story that connects the two service pillars.

Sequence:

**Establish → Operate → Build → Grow → Automate**

Each stage expands into relevant services:

- Establish → Company Formation, Trade Licensing
- Operate → PRO, Compliance, Tax, Banking, Office
- Build → Websites, Platforms, Custom Software
- Grow → Digital Marketing, Social Media
- Automate → CRM, Workflow Automation, AI Integration

This becomes the conceptual backbone of the brand.

## Section 4 — Business Setup Explorer

Avoid eight equal cards.

Use a horizontal accordion or stacked scroll component. Each service opens into:

- what it solves
- who needs it
- the next step
- a visual representing the service

## Section 5 — Digital Capability Explorer

Use a different interaction from Business Setup.

Recommended format: a responsive system map where each capability changes the central interface/visual.

## Section 6 — Why Orivion

Do not use made-up metrics.

Focus on operating principles that can be defended:

- one team across setup and digital execution
- clear scope before work begins
- practical advice rather than unnecessary services
- ongoing support after launch
- documentation and communication kept understandable

## Section 7 — Knowledge Layer

Surface useful guides rather than generic blog cards.

Example questions:

- Mainland or free zone?
- What does a UAE trade licence actually cover?
- When does a business need VAT registration?
- What should a CRM automate first?
- What makes a website convert better?

## Section 8 — Closing CTA

Large, quiet, high-contrast closing scene.

Headline direction:

**Tell us what you are trying to build.**

CTA choices:

- Start a business
- Build a digital project
- Ask a question

---

# 4. Business Setup Hub

## Page objective

Help a visitor understand the complete lifecycle of establishing and operating a UAE company without burying them in jargon.

## Suggested structure

1. Hero — “From licence to day-to-day operations.”
2. Interactive setup path
3. Mainland / Free Zone / Offshore decision guide
4. Service lifecycle
5. Detailed service navigator
6. What documents usually matter
7. What changes depending on activity and jurisdiction
8. Costs and timing: explain variables rather than publishing stale universal figures
9. Compliance after incorporation
10. FAQs
11. Consultation CTA

## Research baseline

Current official UAE guidance describes mainland setup as a sequence that can include selecting a business activity, legal form, trade licence, trade name, initial approval, premises and any required third-party approvals. Free-zone setup follows the relevant free-zone authority and differs by activity and entity type.

Important content principle: **we explain the decision, then link the client to the correct process.**

---

# 5. Business Setup Service Pages

Every service page must contain practical depth, but each should have its own visual story.

## Company Formation
`/business-setup/company-formation`

Explain:

- mainland, free zone and offshore at a high level
- shareholder structures
- business activities
- legal forms
- trade name
- initial approvals
- incorporation documents
- visa implications
- when third-party approval may be required
- post-incorporation steps

Interactive idea: a branching “company setup route” that changes based on where the visitor wants to trade, visa needs and operating model.

## Trade Licensing
`/business-setup/trade-licensing`

Explain:

- why activity selection matters
- common licence families
- single vs multiple activities
- regulated activities
- renewals and amendments
- adding activities later
- licence vs trademark distinction

Interactive idea: animated activity taxonomy.

## PRO Services
`/business-setup/pro-services`

Explain:

- establishment card
- investor/partner visas
- employee visas
- medical and Emirates ID process
- status change when relevant
- labour/immigration administration
- renewals, cancellations and amendments
- dependant sponsorship support where within scope

Interactive idea: document/passport journey where each completed step unlocks the next.

## Compliance & Regulatory
`/business-setup/compliance-regulatory`

Explain:

- UBO records
- KYC/CDD
- AML/CFT where applicable
- goAML obligations for relevant DNFBPs
- record keeping
- sanctions/PEP screening
- corporate governance records
- licence-specific compliance
- why obligations differ by activity

Interactive idea: compliance shield that fills as each obligation is satisfied.

## Accounting & Tax
`/business-setup/accounting-tax`

Explain:

- bookkeeping
- management accounts
- VAT registration and returns
- corporate tax registration and filing
- free-zone corporate tax considerations
- small business relief where applicable
- tax records
- audit support

Regulatory content must show “Last reviewed” date and source links.

## Banking Support
`/business-setup/banking-support`

Explain:

- what banks typically evaluate
- business model and source of funds
- shareholder documentation
- proof of address and commercial substance
- expected transactions
- why approval is never guaranteed
- digital vs traditional banking routes

Never use “guaranteed bank account” language.

## Office Solutions
`/business-setup/office-solutions`

Explain:

- flexi desk
- shared workspace
- serviced office
- private office
- mainland tenancy/Ejari implications
- activity-specific space requirements
- when physical space affects visas or approvals

## Additional Services
`/business-setup/additional-services`

Use as a curated services hub, not a miscellaneous dumping ground.

Potential items:

- amendments
- renewals
- company documents
- attestations coordination
- licence cancellations
- shareholder changes
- business name changes
- activity changes
- selected operational support

---

# 6. Jurisdiction Pages

Preserve the existing jurisdiction routes where practical because the current project already has data-driven jurisdiction pages.

Pages:

- Mainland
- Free Zone
- Offshore
- Comparison guide

Each page should cover:

- who it suits
- where it can operate
- ownership
- office requirements
- visas
- tax/compliance considerations
- typical use cases
- limitations
- setup process
- questions to ask before choosing

The comparison page should be interactive and filterable rather than a static table only.

---

# 7. Digital & Technology Hub

## Page objective

Show that Orivion can do more than build a pretty website. The story should move from customer experience to software, systems, acquisition and automation.

## Structure

1. Hero — interactive product/system canvas
2. Six capability areas
3. “What are you trying to improve?” selector
4. Example solution architectures
5. Delivery process
6. Technology principles
7. Performance, accessibility and maintainability
8. FAQ
9. Project enquiry CTA

---

# 8. Digital Service Pages

## Websites & Platforms
`/digital-technology/websites-platforms`

Explain:

- corporate websites
- landing pages
- portals
- web applications
- responsive design
- CMS/content architecture
- SEO foundations
- accessibility
- analytics
- performance
- hosting/deployment
- ongoing improvement

Visual idea: image-first page that morphs between viewport sizes as the user scrolls.

## Custom Software
`/digital-technology/custom-software`

Explain:

- internal tools
- client portals
- workflow applications
- dashboards
- data applications
- APIs/integrations
- authentication and roles
- cloud architecture
- maintenance

Visual idea: 3D architecture blocks that separate and reconnect into a working system.

## CRM & Automation
`/digital-technology/crm-automation`

Explain:

- CRM design
- lead pipelines
- sales automation
- service workflows
- email/SMS/WhatsApp integrations where appropriate
- dashboards
- data quality
- approvals
- document flows
- handoffs between teams

Visual idea: animated nodes passing a lead through a real workflow.

## Digital Marketing
`/digital-technology/digital-marketing`

Explain:

- strategy
- search
- paid media
- campaign landing pages
- analytics
- conversion tracking
- remarketing
- content support
- reporting

Avoid promising guaranteed rankings or guaranteed ROAS.

## Social Media
`/digital-technology/social-media`

Explain:

- channel strategy
- content planning
- creative systems
- short-form video
- community management
- publishing workflows
- reporting
- paid social support

Visual idea: editorial feed that becomes an animated content calendar.

## AI Integration
`/digital-technology/ai-integration`

Explain practical business use cases:

- knowledge assistants
- document extraction
- customer support copilots
- content workflows
- lead qualification
- CRM enrichment
- internal search
- reporting assistants
- human approval loops
- privacy/security considerations

Avoid vague “AI transformation” copy.

---

# 9. Why Dubai

This page should be evidence-led rather than promotional filler.

## Sections

1. Dubai as a regional and international operating base
2. Mainland and free-zone options
3. Ownership and business structures
4. Global connectivity
5. Banking and financial ecosystem
6. Talent and residency considerations
7. Tax framework explained carefully
8. Digital government services
9. Industry ecosystems
10. What founders often misunderstand
11. Is Dubai right for your business?

Important nuance: free-zone entities do not automatically have unrestricted mainland market access; the applicable rules depend on the activity, structure and required approvals. Corporate tax treatment also depends on the entity and facts, and qualifying free-zone treatment is conditional rather than a blanket “0% tax” promise.

---

# 10. Insights Strategy

The existing project already has blog routes and article data. Keep the technical foundation, but reposition the section as **Insights**.

Initial evergreen clusters:

### Business setup
- How to set up a business in Dubai
- Mainland vs Free Zone vs Offshore
- Choosing business activities
- UAE trade licence explained
- Company formation documents

### Tax and compliance
- UAE corporate tax explained
- Free Zone Person basics
- VAT registration basics
- UBO records explained
- AML obligations for corporate service providers

### Digital
- What a modern business website actually needs
- CRM automation examples for SMEs
- When custom software makes sense
- How to choose a website stack
- Measuring digital marketing properly

### AI
- Where AI is useful in SMEs
- AI assistants vs automation
- Human-in-the-loop workflows
- Document extraction use cases

Every regulated article should include:

- author/reviewer
- last reviewed date
- official source links
- a short disclaimer where appropriate

---

# 11. Research Governance

Research-heavy pages should prioritise authoritative sources.

## UAE business and regulation source hierarchy

1. UAE Government portal — https://u.ae/
2. Dubai Department of Economy & Tourism / Invest in Dubai
3. Federal Tax Authority — https://tax.gov.ae/
4. Ministry of Economy & Tourism
5. UAE Financial Intelligence Unit / goAML guidance where applicable
6. The relevant free-zone authority
7. Official bank/service-provider documentation for operational claims

Secondary sources can support context, but regulatory claims should come from official sources whenever possible.

### Current research notes used for this blueprint

- UAE Government: mainland setup steps and legal-form guidance
- UAE Government: starting and running businesses in free zones
- Federal Tax Authority: current corporate-tax legislation and registration guidance
- IFZA: incorporation process and licence structure
- Meydan Free Zone: current setup journeys and operating-service examples

Regulatory pages should be reviewed before launch and periodically afterwards.

---

# 12. UX and Motion Plan

## Motion layers

### Layer 1 — Ambient
Very slow background depth, grain, subtle parallax and light movement.

### Layer 2 — Interaction
Hover/tap states, magnetic buttons, image zoom, animated underlines, responsive cursors where appropriate.

### Layer 3 — Narrative
GSAP ScrollTrigger for pinned explanations, stacked sections and text reveals.

### Layer 4 — 3D
Use only for key moments:

- homepage hero
- Orivion System section
- selected Digital & Technology scenes
- selected business-process diagrams

Do not render heavy 3D on every page.

## Mobile

- no hover dependency
- reduced parallax range
- no huge pinned sections that trap the user
- simplified WebGL scenes
- preserve readability before effects
- respect `prefers-reduced-motion`

---

# 13. Technical Direction

The existing project is a strong enough base to evolve rather than replace immediately.

Current useful foundations include:

- TanStack Start / React
- Vite
- Tailwind
- Radix/shadcn-style primitives
- data-driven service and jurisdiction content
- blog/article routes
- SEO utilities
- contact handling
- Lighthouse/performance workflows

## Proposed additions

- `motion` for Motion Primitives-style interactions
- `gsap` + `ScrollTrigger` for narrative sequences
- `three` + `@react-three/fiber` + `@react-three/drei` for selected 3D scenes
- optional `lenis` only if needed for smoothing; no scroll hijacking
- page-level dynamic imports for WebGL and heavy interaction bundles

We should not add all motion libraries until a component actually needs them.

---

# 14. Performance Targets

Target rather than promise:

- LCP under 2.5 s on representative production pages
- CLS under 0.1
- INP under 200 ms
- responsive images with AVIF/WebP where practical
- 3D code loaded only on pages that use it
- video posters and mobile-specific assets
- route-level code splitting
- reduced-motion fallback

The current repo already includes Lighthouse automation, so performance checks should remain part of each redesign milestone.

---

# 15. Build Sequence

## Milestone 1 — Foundation

- final sitemap
- DESIGN.md
- global spacing/type/color tokens
- new header + mega menus
- global motion utilities
- responsive shell

## Milestone 2 — Homepage

- image-first homepage visual references
- hero 3D prototype
- dual-path section
- Orivion System scroll story
- service explorers
- Insights teaser
- final CTA

## Milestone 3 — Business Setup

- hub
- jurisdiction pages
- eight service pages
- regulatory source blocks
- comparison tool

## Milestone 4 — Digital & Technology

- hub
- six service pages
- project enquiry flow

## Milestone 5 — Company Pages

- Why Dubai
- About
- How We Work
- FAQ
- Contact
- Consultation

## Milestone 6 — Insights and SEO

- migrate/rewrite current articles
- add research metadata
- internal linking
- structured data where appropriate
- redirects
- sitemap

## Milestone 7 — QA

- Vercel interface-guideline audit
- React performance review
- accessibility pass
- Playwright/browser verification
- mobile device checks
- Lighthouse checks

---

# 16. Immediate Next Build Task

The next task after this blueprint is to create **three image-first homepage art directions**, choose the strongest one, convert it into a concrete section-by-section visual system, and then implement the homepage on this redesign branch.
