import {
  Building2,
  FileBadge,
  UsersRound,
  ShieldCheck,
  Calculator,
  Landmark,
  Briefcase,
  FileText,
  LayoutTemplate,
  Code2,
  Workflow,
  Megaphone,
  Share2,
  Bot,
} from "lucide-react";

export const SERVICE_CATEGORIES = ["Business Setup Services", "Digital & Technology"] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export const siteConfig = {
  name: "Orivion",
  url: "https://orivion.ae",
  tagline: "Business setup and digital technology services, connected",
  email: "contact@orivion.ae",
  phone: "+971 55 516 6383",
  phoneHref: "tel:+971555166383",
  whatsappUrl: "https://wa.me/971555166383",
  address: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
};

export const services = [
  {
    slug: "company-formation",
    title: "Company Formation",
    icon: Building2,
    category: "Business Setup Services",
    summary:
      "Get incorporated in the right structure the first time — end-to-end support to form a Mainland, Free Zone or Offshore company around your activity, ownership and operating plans.",
    bullets: [
      "Jurisdiction and legal structure comparison",
      "Business activity and ownership planning",
      "Application preparation and authority coordination",
      "Post-incorporation document handover",
    ],
  },
  {
    slug: "trade-licensing",
    title: "Trade Licensing",
    icon: FileBadge,
    category: "Business Setup Services",
    summary:
      "Keep your licence aligned with how you actually trade — new trade licences, renewals, amendments and activity changes across the relevant UAE authorities.",
    bullets: [
      "Commercial, professional and industrial licences",
      "Licence renewals and expiry tracking",
      "Activity additions, removals and amendments",
      "Authority approvals and document coordination",
    ],
  },
  {
    slug: "pro-services",
    title: "PRO Services",
    icon: UsersRound,
    category: "Business Setup Services",
    summary:
      "Move visas and government paperwork forward without the back-and-forth — coordinated immigration and PRO work for companies, investors, employees and their dependants.",
    bullets: [
      "Investor, employee and dependant visa support",
      "Emirates ID, medical and immigration coordination",
      "Document attestation and legal translation support",
      "Establishment card and labour-related services",
    ],
  },
  {
    slug: "compliance",
    title: "Compliance & Regulatory",
    icon: ShieldCheck,
    category: "Business Setup Services",
    summary:
      "Stay in good standing without last-minute surprises — practical coordination of the registrations, records and recurring obligations a UAE company must keep.",
    bullets: [
      "UBO and corporate record support",
      "AML and goAML setup coordination where applicable",
      "Corporate Tax registration support",
      "Renewal calendars and compliance documentation",
    ],
  },
  {
    slug: "accounting-tax",
    title: "Accounting & Tax",
    icon: Calculator,
    category: "Business Setup Services",
    summary:
      "Keep clean books and meet every deadline — coordinated bookkeeping, VAT, Corporate Tax and reporting matched to the size and needs of the business.",
    bullets: [
      "Bookkeeping and management reporting",
      "VAT registration and return support",
      "Corporate Tax registration and filing support",
      "Payroll, WPS and audit coordination",
    ],
  },
  {
    slug: "banking",
    title: "Banking Support",
    icon: Landmark,
    category: "Business Setup Services",
    summary:
      "Open your UAE business account with less friction — prepared applications, documentation and KYC readiness for the bank that fits your company.",
    bullets: [
      "Bank and account-type comparison",
      "Application and KYC document preparation",
      "Introductions where available",
      "Follow-up through the account-opening process",
    ],
  },
  {
    slug: "office-solutions",
    title: "Office Solutions",
    icon: Briefcase,
    category: "Business Setup Services",
    summary:
      "Meet your licence and visa requirements with the right address — a registered office, flexi-desk or physical workspace matched to your setup.",
    bullets: [
      "Registered address and virtual office options",
      "Flexi-desk and shared workspace options",
      "Physical office referrals",
      "Workspace documentation and Ejari coordination",
    ],
  },
  {
    slug: "additional",
    title: "Additional Services",
    icon: FileText,
    category: "Business Setup Services",
    summary:
      "Handle the corporate work that falls between the gaps — from documents and planning to restructuring and closure, coordinated end to end.",
    bullets: [
      "Document clearing and translation coordination",
      "Business plans and feasibility support",
      "Corporate amendments and restructuring",
      "Liquidation and deregistration coordination",
    ],
  },
  {
    slug: "websites",
    title: "Websites & Platforms",
    icon: LayoutTemplate,
    category: "Digital & Technology",
    summary:
      "Launch a site that loads fast and is easy to run — strategy, UX, design and development for marketing websites, portals and platforms that are fast, accessible and simple to manage.",
    bullets: [
      "Discovery, information architecture and UX",
      "Responsive UI design and frontend development",
      "CMS, integrations and content migration",
      "Technical SEO, accessibility and performance",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    icon: Code2,
    category: "Digital & Technology",
    summary:
      "Get software shaped around your workflow, not the other way round — purpose-built applications, portals and internal tools designed around how your business actually works.",
    bullets: [
      "Product discovery and workflow mapping",
      "Web applications and customer portals",
      "APIs and third-party integrations",
      "Testing, deployment and ongoing support",
    ],
  },
  {
    slug: "crm-automation",
    title: "CRM & Automation",
    icon: Workflow,
    category: "Digital & Technology",
    summary:
      "Give your team back the hours routine work eats — CRM design, sales workflows and automation that cut repetitive tasks and clarify every customer and activity.",
    bullets: [
      "CRM selection, setup and customisation",
      "Lead capture, routing and follow-up automation",
      "Workflow integration across business tools",
      "Dashboards, reporting and data quality controls",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    category: "Digital & Technology",
    summary:
      "Spend on marketing that ties back to results — search, paid media and lifecycle campaigns measured against real business outcomes, not surface activity.",
    bullets: [
      "SEO: technical fixes, content and links",
      "Paid search and paid social on Google and Meta",
      "Email and lifecycle campaigns",
      "GA4 tracking and conversion-rate work",
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    icon: Share2,
    category: "Digital & Technology",
    summary:
      "Show up consistently and credibly across every channel — strategy, content and channel management that give your brand a presence people trust.",
    bullets: [
      "Channel strategy and content calendars",
      "Short-form video, graphics and copy",
      "Community management and replies",
      "Reporting on reach, engagement and growth",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    icon: Bot,
    category: "Digital & Technology",
    summary:
      "Put AI to work inside the tools you already use — practical assistants, document workflows and automations integrated into your existing systems.",
    bullets: [
      "AI opportunity and workflow assessment",
      "Knowledge assistants using your approved content",
      "Document extraction and process automation",
      "Evaluation, human review and operational guardrails",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const jurisdictions = [
  {
    slug: "mainland",
    title: "Mainland",
    short: "A locally licensed operating company for serving customers across the UAE.",
    ownership: "Full foreign ownership is available for many activities; exceptions can apply",
    market: "Operate across the UAE within the licensed activities and required approvals",
    office: "Premises and tenancy evidence depend on the activity and licensing authority",
    visas: "Eligibility and quota depend on establishment, workplace and immigration rules",
    tax: "UAE Corporate Tax rules apply, with 0% up to AED 375,000 of taxable income and 9% above",
    bestFor:
      "Businesses selling directly in the local market or needing an onshore operating presence.",
  },
  {
    slug: "free-zone",
    title: "Free Zone",
    short: "A company licensed by a specific Free Zone authority and operating under its rules.",
    ownership: "100% foreign ownership",
    market:
      "Free Zone and international activity; onshore activity follows applicable permit and licensing rules",
    office: "Workspace options and substance requirements vary by zone and activity",
    visas: "Eligibility and quota depend on the zone, package and premises",
    tax: "0% applies only to qualifying income for a Qualifying Free Zone Person; other income follows general rules",
    bestFor:
      "Businesses that value a sector ecosystem, specialist regulator or flexible setup package.",
  },
  {
    slug: "offshore",
    title: "Offshore",
    short: "A registry-based vehicle generally used for holding or cross-border structuring.",
    ownership: "100% foreign ownership",
    market:
      "Not an ordinary onshore operating licence; permitted activities depend on the registry",
    office: "Usually maintained through a registered agent rather than an operating office",
    visas: "Typically does not provide UAE residence visa eligibility",
    tax: "Tax treatment depends on residence, activities, income and available exemptions",
    bestFor:
      "Asset holding and cross-border structures that do not need a standard operating licence.",
  },
] as const;

export const faqs = [
  {
    category: "Company Formation",
    items: [
      {
        q: "How long does it take to set up a company in Dubai?",
        a: "There is no single reliable timeline. It depends on the jurisdiction, activity, legal form, shareholder documents, premises and external approvals. Licence issuance, residence processing and bank account review are separate stages, so we confirm the expected sequence for the chosen route before work starts.",
      },
      {
        q: "Can a foreigner own 100% of a UAE company?",
        a: "Full foreign ownership is available in Free Zones and for many Mainland activities. Restricted or strategic activities can have different rules, so the exact activity and competent authority still need to be checked.",
      },
      {
        q: "Do I need to be in the UAE to incorporate?",
        a: "Some authorities allow much of the incorporation process to be completed digitally or through an authorised representative. Physical presence can still be required for identity, immigration, medical, banking or notarisation steps, depending on the route and applicant.",
      },
    ],
  },
  {
    category: "Tax & Compliance",
    items: [
      {
        q: "Does my company pay UAE Corporate Tax?",
        a: "The general UAE Corporate Tax rates are 0% on taxable income up to AED 375,000 and 9% above that threshold. Exemptions, reliefs and the Free Zone regime have conditions, so a company's position must be assessed from its entity type, activities, income and elections.",
      },
      {
        q: "When do I register for VAT?",
        a: "VAT registration is mandatory once your taxable supplies pass AED 375,000 in a 12-month period, and optional above AED 187,500. The standard rate is 5%.",
      },
      {
        q: "What is UBO, and do I have to file it?",
        a: "UBO means Ultimate Beneficial Owner. Cabinet Decision No. 109 of 2023 sets requirements for beneficial-owner information and company registers, subject to its scope and exemptions. The records should be reviewed whenever ownership or control changes.",
      },
      {
        q: "Does a Free Zone company automatically pay 0% Corporate Tax?",
        a: "No. The 0% Free Zone rate applies to qualifying income of a Qualifying Free Zone Person that meets the required conditions. Non-qualifying income and companies that do not meet the conditions follow the applicable general Corporate Tax rules.",
      },
    ],
  },
  {
    category: "Visas & PRO",
    items: [
      {
        q: "What is the Golden Visa, and who qualifies?",
        a: "The Golden Residency programme covers defined categories such as investors, entrepreneurs, specialised expertise and outstanding students. Duration and evidence differ by category. ICP currently lists a minimum AED 2 million threshold for specified public-investment and real-estate routes, with other categories using different criteria.",
      },
      {
        q: "How many visas can I get with my licence?",
        a: "The answer depends on the licensing authority, entity package, activity, establishment status and premises. The quota should be checked with the relevant authority before choosing a licence or signing a workspace agreement.",
      },
    ],
  },
  {
    category: "Digital & Technology",
    items: [
      {
        q: "What is included in a website or platform project?",
        a: "A complete scope can include discovery, information architecture, UX and visual design, responsive development, CMS setup, integrations, content migration, accessibility, technical SEO, analytics, testing and launch support. The exact deliverables are defined before build work begins.",
      },
      {
        q: "Can SEO, AEO or GEO guarantee first place visibility?",
        a: "No credible provider can guarantee a specific organic ranking or AI answer citation. Strong work improves crawlability, content clarity, structured data, authority signals and answer usefulness, then measures what search and referral data show over time.",
      },
      {
        q: "When should we build custom software instead of buying a product?",
        a: "A custom build is usually justified when the workflow is commercially important, existing tools create material limitations, and the organisation can own the resulting product. Discovery should test that case before a full build is approved.",
      },
      {
        q: "How do you make AI integration safer?",
        a: "We start with a narrow use case, approved data boundaries and representative evaluation cases. Access controls, human review, logging, fallback paths and monitoring are designed around the consequences of an incorrect or inappropriate output.",
      },
    ],
  },
];

export const blogPosts = [
  {
    slug: "launching-an-ecommerce-store-in-the-uae",
    title: "Launching an e-commerce store in the UAE: build, payments and delivery",
    excerpt:
      "Picking a platform, taking payments in dirhams, and the delivery and VAT details that catch new stores out.",
    date: "2026-07-30",
    readMins: 9,
    category: "Digital",
  },
  {
    slug: "how-to-set-up-a-business-in-dubai",
    title: "How to set up a business in Dubai in 2026: a step-by-step guide",
    excerpt:
      "From choosing a jurisdiction to opening a bank account, the practical roadmap to launching your UAE company.",
    date: "2026-06-12",
    readMins: 8,
    category: "Company Formation",
  },
  {
    slug: "mainland-vs-free-zone-vs-offshore",
    title: "Mainland vs Free Zone vs Offshore: which UAE structure fits your business?",
    excerpt:
      "A side-by-side look at ownership, market access, visa quotas and tax, with examples by industry.",
    date: "2026-05-28",
    readMins: 10,
    category: "Jurisdictions",
  },
  {
    slug: "uae-corporate-tax-explained",
    title: "UAE Corporate Tax explained: the 9% rate in plain English",
    excerpt:
      "Who pays, what is exempt, how Qualifying Free Zone Persons work, and the filing dates you cannot miss.",
    date: "2026-05-10",
    readMins: 7,
    category: "Tax",
  },
];

// SEO overrides per service: keyword-tuned <title> and a trimmed meta description
// (kept under ~155 chars, plain wording). Falls back to the service summary when absent.
export const serviceSeo: Record<string, { title: string; description: string }> = {
  "company-formation": {
    title: "Company Formation in Dubai and the UAE | Orivion",
    description:
      "Set up a Mainland, Free Zone or Offshore company in the UAE, with the right structure chosen for your activity, owners and plans.",
  },
  "trade-licensing": {
    title: "Trade Licensing in the UAE | Orivion",
    description:
      "New trade licences, renewals, activity changes and amendments across the relevant UAE authorities, matched to how your business trades.",
  },
  "pro-services": {
    title: "PRO Services and Visas in Dubai | Orivion",
    description:
      "Visa processing and government paperwork in the UAE for companies, investors, employees and their families, handled from start to finish.",
  },
  compliance: {
    title: "UAE Compliance and Corporate Tax | Orivion",
    description:
      "Corporate Tax registration, UBO records, AML and licence renewals kept on schedule so your UAE company stays in good standing.",
  },
  "accounting-tax": {
    title: "Accounting and Tax Services in the UAE | Orivion",
    description:
      "Bookkeeping, VAT and Corporate Tax for UAE businesses, with clean records and every filing deadline met.",
  },
  banking: {
    title: "UAE Business Bank Account Support | Orivion",
    description:
      "Help opening a UAE business bank account, with a clear application, full documentation and KYC ready for review.",
  },
  "office-solutions": {
    title: "Office Space and Flexi Desk in Dubai | Orivion",
    description:
      "A registered office, flexi desk or physical workspace in the UAE that meets your licence and visa requirements.",
  },
  additional: {
    title: "Corporate Support Services in the UAE | Orivion",
    description:
      "Company amendments, document attestation, restructuring and closures in the UAE, coordinated end to end.",
  },
  websites: {
    title: "Website Design and Development in Dubai | Orivion",
    description:
      "Websites, portals and platforms that load fast, rank well and stay easy for your team to update.",
  },
  "custom-software": {
    title: "Custom Software Development in Dubai | Orivion",
    description:
      "Custom applications, portals and internal tools built around how your business actually works.",
  },
  "crm-automation": {
    title: "CRM and Automation Services in Dubai | Orivion",
    description:
      "CRM setup and workflow automation that cut repetitive work and give your team a clear view of every customer.",
  },
  "digital-marketing": {
    title: "Digital Marketing Services in Dubai | Orivion",
    description:
      "Search, paid media and lifecycle campaigns measured against real leads and sales, not vanity metrics.",
  },
  "social-media": {
    title: "Social Media Management in Dubai | Orivion",
    description:
      "Social media strategy, content and channel management that build a presence your audience trusts.",
  },
  "ai-integration": {
    title: "AI Integration Services in Dubai | Orivion",
    description:
      "Practical AI assistants and document automation built into the tools your team already uses.",
  },
};
