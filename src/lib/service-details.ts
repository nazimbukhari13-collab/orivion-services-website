import type { Service } from "@/lib/site-data";

export type ReferenceLink = {
  label: string;
  url: string;
};

export type ServiceDetail = {
  overview: string;
  suitableFor: readonly string[];
  considerations: readonly string[];
  approach: readonly string[];
  references: readonly ReferenceLink[];
};

export const serviceDetails: Record<Service["slug"], ServiceDetail> = {
  "company-formation": {
    overview:
      "Company formation is a sequence of connected decisions: where the entity will be licensed, which legal form fits, what activities appear on the licence, who owns it, and how it will employ people or trade. We compare Mainland, Free Zone and Offshore routes against the real operating plan before preparing the application.",
    suitableFor: [
      "Founders establishing a first UAE entity",
      "International companies opening a UAE branch or subsidiary",
      "Existing groups adding a holding, operating or specialist entity",
    ],
    considerations: [
      "Where customers are located and how the company will sell to them",
      "Regulated activities and external approvals that may be required",
      "Office, visa, banking and tax implications of the chosen structure",
      "Shareholding, management authority and signing arrangements",
    ],
    approach: [
      "Map the activity, owners, customers, staffing and operating requirements.",
      "Compare suitable jurisdictions and legal forms with a written cost view.",
      "Prepare the name, activity, incorporation and licence applications.",
      "Coordinate post-licence steps such as establishment records, visas and banking readiness.",
    ],
    references: [
      {
        label: "UAE Government business portal",
        url: "https://u.ae/en/information-and-services/business",
      },
      { label: "Invest in Dubai business setup", url: "https://app.invest.dubai.ae/" },
    ],
  },
  "trade-licensing": {
    overview:
      "A trade licence defines the activities a company is authorised to conduct. The work may involve a new licence, renewal, activity amendment, ownership change or authority approval. We first check that the proposed activity and legal form match the way the business will actually earn revenue.",
    suitableFor: [
      "New businesses selecting licence activities",
      "Companies adding services, products or locations",
      "Businesses approaching renewal or changing shareholders and managers",
    ],
    considerations: [
      "Exact activity wording and whether more than one activity can sit on the same licence",
      "Approvals from sector regulators, municipalities or other authorities",
      "Lease, registered address and legal-document requirements",
      "Renewal dates and knock-on updates to immigration, banking and tax records",
    ],
    approach: [
      "Confirm the commercial model and shortlist the correct licence activities.",
      "Identify authority approvals and required supporting documents.",
      "Prepare and submit the application or amendment pack.",
      "Check the issued licence and coordinate related record updates.",
    ],
    references: [
      {
        label: "Dubai business activity search",
        url: "https://app.invest.dubai.ae/search-business-activities",
      },
      {
        label: "Dubai licence information search",
        url: "https://app.invest.dubai.ae/search-license",
      },
    ],
  },
  "pro-services": {
    overview:
      "PRO services cover the government and immigration administration that begins after a company is licensed. This can include establishment records, residence and employment processes, Emirates ID coordination, document attestation, status changes and dependant applications. Requirements vary by authority and applicant category.",
    suitableFor: [
      "New companies preparing to sponsor owners or employees",
      "Growing teams that need recurring immigration administration",
      "Founders coordinating family or dependant residence applications",
    ],
    considerations: [
      "The licensing authority, immigration jurisdiction and establishment status",
      "Passport validity, insurance, medical and identity requirements",
      "The correct sequence for entry permits, status changes and residence issuance",
      "Expiry tracking for licences, establishment records, visas and identity documents",
    ],
    approach: [
      "Review the company and applicant records before starting an application.",
      "Prepare a requirement list and sequence the relevant authority steps.",
      "Coordinate submissions, appointments and document collection.",
      "Maintain a clear handover and renewal schedule after completion.",
    ],
    references: [
      {
        label: "ICP establishment card service",
        url: "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e6d",
      },
      {
        label: "ICP residence permit service",
        url: "https://icp.gov.ae/en/services-details/?serviceid=64afe3c1035448005bd52e64",
      },
    ],
  },
  compliance: {
    overview:
      "Compliance support turns legal and regulatory obligations into an operating calendar. The scope can include beneficial-owner records, Corporate Tax registration, AML processes for relevant businesses, licence renewals and changes to statutory documents. Legal and regulated matters are coordinated with the appropriate qualified specialist where required.",
    suitableFor: [
      "New entities building their first compliance file",
      "Operating companies with recurring filing and record obligations",
      "Businesses in sectors subject to AML or other specific regulatory controls",
    ],
    considerations: [
      "Which rules apply to the entity, activity and licensing authority",
      "Who owns, controls and manages the company and how changes are recorded",
      "Registration, filing and renewal deadlines",
      "The evidence and internal records needed to support each submission",
    ],
    approach: [
      "Create an obligation map based on the entity and its licensed activities.",
      "Review the available corporate records and identify missing information.",
      "Coordinate registrations, filings and specialist review where necessary.",
      "Set a practical calendar for recurring obligations and company changes.",
    ],
    references: [
      {
        label: "FTA Corporate Tax topics",
        url: "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics.aspx",
      },
      {
        label: "UAE beneficial-owner rules",
        url: "https://www.moet.gov.ae/documents/20121/0/Cabinet%2BDecision%2B109-2023%2BEnglish%2BVersion%2B06062024.pdf/f7138fc2-fe12-cef3-077b-b4c49c12eabd?t=1718181974877",
      },
      {
        label: "UAE DNFBP AML guidance",
        url: "https://www.moet.gov.ae/documents/20121/465917/DNFBP%2BGuidelines%2B-%2BMarch%2B2026.pdf/6e46414b-0878-bcf0-6054-235a86336f41?t=1781345717581",
      },
    ],
  },
  "accounting-tax": {
    overview:
      "Accounting and tax support gives management reliable records while keeping the business ready for UAE filings. The right setup connects transaction capture, bookkeeping, reconciliations, management reporting, VAT and Corporate Tax rather than treating each as a separate year-end exercise.",
    suitableFor: [
      "New companies setting up a compliant bookkeeping process",
      "Businesses approaching VAT or Corporate Tax obligations",
      "Management teams that need regular reporting and cash-flow visibility",
    ],
    considerations: [
      "Revenue model, transaction volume, currencies and accounting period",
      "VAT registration thresholds and the nature of taxable supplies",
      "Corporate Tax position, deductible costs and related-party transactions",
      "Document retention, payroll, audit and reporting requirements",
    ],
    approach: [
      "Review the business model, existing records and filing position.",
      "Set the chart of accounts, document workflow and reporting cadence.",
      "Coordinate registrations, returns and tax computations with supporting records.",
      "Provide management reporting and flag issues before deadlines.",
    ],
    references: [
      {
        label: "FTA VAT registration guidance",
        url: "https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx",
      },
      {
        label: "FTA Corporate Tax FAQs",
        url: "https://tax.gov.ae/en/taxes/corporate.tax/faqs.aspx",
      },
    ],
  },
  banking: {
    overview:
      "Banking support focuses on application readiness. Banks conduct their own risk-based customer due diligence, so no adviser can guarantee approval or a fixed opening date. We help present a coherent file covering ownership, activity, expected transactions, source of funds and the commercial reason for the account.",
    suitableFor: [
      "New UAE companies preparing a first corporate account",
      "Businesses comparing digital, local and international banking options",
      "Companies that need to improve or update an incomplete KYC file",
    ],
    considerations: [
      "Ownership structure, authorised signatories and beneficial owners",
      "Expected customers, suppliers, countries, currencies and transaction values",
      "Contracts, invoices, business plan and evidence of operating substance",
      "Each bank's eligibility, risk appetite and ongoing information requests",
    ],
    approach: [
      "Build a banking profile from the company structure and expected activity.",
      "Compare suitable account types and document requirements.",
      "Prepare the application pack and check it for consistency.",
      "Coordinate responses and follow-up while the bank completes its review.",
    ],
    references: [
      {
        label: "CBUAE account-opening standards",
        url: "https://rulebook.centralbank.ae/en/rulebook/account-opening",
      },
      {
        label: "CBUAE customer due diligence guidance",
        url: "https://rulebook.centralbank.ae/en/rulebook/guidance-licensed-financial-institutions-customer-due-diligenceknow-your-customer-and",
      },
    ],
  },
  "office-solutions": {
    overview:
      "The office must fit both the business and the licence. Depending on jurisdiction and activity, the answer may be a registered address, flexi-desk, shared workspace, fitted office, retail unit or warehouse. We compare practical use, documentation, visa capacity and total occupancy cost before a commitment is made.",
    suitableFor: [
      "New companies choosing an address for licensing",
      "Teams moving from a flexi-desk to a physical workspace",
      "Businesses that need retail, industrial or client-facing premises",
    ],
    considerations: [
      "Licence and authority requirements for the specific activity",
      "Visa allocation and whether it depends on office type or size",
      "Tenancy registration, building approvals and permitted use",
      "Deposit, fit-out, utilities, service charges and renewal exposure",
    ],
    approach: [
      "Translate the licensing and operating need into a workspace brief.",
      "Compare suitable registered-address, flexible and physical options.",
      "Check the key documents and authority requirements before signing.",
      "Coordinate the workspace evidence needed for the licence or amendment.",
    ],
    references: [
      {
        label: "Dubai Land Department Ejari service",
        url: "https://dubailand.gov.ae/en/eservices/register-renew-ejari-contract/",
      },
      {
        label: "UAE Government free-zone operations guide",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-",
      },
    ],
  },
  additional: {
    overview:
      "Not every corporate requirement fits neatly into formation, licensing or PRO work. Additional Services provides a defined route for company amendments, document clearing, translations, business planning, restructuring, deregistration and other supporting assignments. The scope is confirmed before work begins, including any specialist or authority involvement.",
    suitableFor: [
      "Companies changing shareholders, managers, activities or legal documents",
      "Founders who need supporting plans, translations or document coordination",
      "Businesses restructuring, becoming dormant or closing an entity",
    ],
    considerations: [
      "The legal and commercial effect of the requested change",
      "Approvals, resolutions, notarisation and translation requirements",
      "Updates needed across licensing, immigration, tax and banking records",
      "Outstanding liabilities and closure evidence for deregistration work",
    ],
    approach: [
      "Define the intended outcome and identify every affected record.",
      "Confirm authority, document and specialist requirements.",
      "Coordinate the agreed submissions and supporting work.",
      "Provide a completion file and list any follow-on updates still required.",
    ],
    references: [
      {
        label: "UAE Government business services",
        url: "https://u.ae/en/information-and-services/business",
      },
      {
        label: "UAE licence and activity enquiries",
        url: "https://u.ae/en/information-and-services/business/important-digital-services/inquire-about-licences-names-and-activities",
      },
    ],
  },
  websites: {
    overview:
      "Websites and platforms are planned around the decisions a user needs to make, not a collection of visual sections. The scope can cover a company website, campaign site, content platform, customer portal or e-commerce experience, with content structure, accessibility, performance, search visibility and measurement considered from the start.",
    suitableFor: [
      "New brands that need a credible, search-ready digital presence",
      "Established companies replacing a slow or difficult-to-manage site",
      "Teams building portals, directories, content products or e-commerce journeys",
    ],
    considerations: [
      "Audience tasks, content ownership and the primary conversion action",
      "CMS, multilingual, integration and editorial workflow requirements",
      "Accessibility, privacy, security and performance targets",
      "Technical SEO, structured data, analytics and post-launch ownership",
    ],
    approach: [
      "Research the audience and convert business goals into a page and content model.",
      "Prototype the information architecture and key user journeys before visual design.",
      "Build responsively with accessible components, semantic markup and tested integrations.",
      "Launch with analytics, search controls, documentation and an improvement backlog.",
    ],
    references: [
      {
        label: "Google SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      { label: "W3C WCAG 2 overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
      { label: "Google Core Web Vitals", url: "https://web.dev/articles/vitals" },
    ],
  },
  "custom-software": {
    overview:
      "Custom software is appropriate when a workflow creates real competitive value or cannot be handled well by an existing product. We define the users, rules, data and integration boundaries before choosing an architecture, then deliver in reviewable increments so the most important assumptions are tested early.",
    suitableFor: [
      "Teams replacing spreadsheets and fragmented manual workflows",
      "Businesses building customer, supplier or employee portals",
      "Companies creating a new digital product or a specialist internal tool",
    ],
    considerations: [
      "The problem, users and measurable result that justify a custom build",
      "Data ownership, roles, permissions, audit trails and security controls",
      "Systems that must integrate and the reliability of their APIs",
      "Hosting, support, maintenance and future product ownership",
    ],
    approach: [
      "Map the current workflow and turn requirements into prioritised user journeys.",
      "Prototype risky interactions and technical integrations before full build.",
      "Develop in tested releases with clear acceptance criteria and review points.",
      "Deploy with monitoring, documentation, access controls and a support plan.",
    ],
    references: [
      {
        label: "OWASP Application Security Verification Standard",
        url: "https://owasp.org/www-project-application-security-verification-standard/",
      },
      {
        label: "W3C accessibility standards",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
    ],
  },
  "crm-automation": {
    overview:
      "CRM and automation work starts with the operating process, not the software menu. We define how a lead, customer or request should move through the business, then configure the CRM, data model, ownership rules, integrations and automations needed to make that process visible and repeatable.",
    suitableFor: [
      "Sales teams losing leads across inboxes and spreadsheets",
      "Service businesses that need consistent follow-up and handover",
      "Operations teams connecting forms, CRM, finance and support tools",
    ],
    considerations: [
      "Lifecycle stages, ownership, service levels and exception handling",
      "Data quality, duplicate records, permissions and consent",
      "Which steps should be automated and where a human decision remains necessary",
      "Reporting definitions and the actions each dashboard should support",
    ],
    approach: [
      "Map the real customer and operational workflow with the people who run it.",
      "Define the data model, stages, roles, alerts and reporting requirements.",
      "Configure, integrate and test the CRM using representative records.",
      "Train users, document ownership and improve the workflow from actual usage data.",
    ],
    references: [
      {
        label: "Google Analytics recommended lead events",
        url: "https://support.google.com/analytics/answer/9267735?hl=en",
      },
      { label: "NIST Privacy Framework", url: "https://www.nist.gov/privacy-framework" },
    ],
  },
  "digital-marketing": {
    overview:
      "Digital marketing combines demand capture, demand creation and measurement. The channel mix is based on the audience, buying cycle and economics of the offer. Search, paid media, content and lifecycle work are connected to defined conversion events so activity can be judged by useful business outcomes.",
    suitableFor: [
      "Companies building qualified demand for a new or established offer",
      "Businesses improving organic search visibility and content coverage",
      "Teams that need reliable campaign tracking and landing-page improvement",
    ],
    considerations: [
      "Audience intent, offer clarity, sales cycle and realistic conversion points",
      "Technical search foundations, content quality and internal linking",
      "Media economics, attribution limits and the quality of CRM feedback",
      "Consent, privacy and platform policy requirements",
    ],
    approach: [
      "Audit the market, audience, existing demand and measurement setup.",
      "Set channel roles, conversion definitions, budgets and reporting rules.",
      "Build campaigns, content and landing pages around specific search or audience intent.",
      "Review lead quality and conversion data, then improve the weakest step.",
    ],
    references: [
      {
        label: "Google SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        label: "Google Analytics key events",
        url: "https://support.google.com/analytics/answer/12844695?hl=en",
      },
      {
        label: "Google structured data guidance",
        url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      },
    ],
  },
  "social-media": {
    overview:
      "Social media management gives each channel a defined role in the customer journey. The work covers editorial planning, creation, publishing, response standards and measurement. Content is built from the brand's actual expertise, products and people so the presence remains credible and sustainable.",
    suitableFor: [
      "Brands that need a consistent publishing system and visual standard",
      "Founder-led businesses turning expertise into useful content",
      "Teams coordinating organic content with paid campaigns and launches",
    ],
    considerations: [
      "Which audiences use each channel and what they expect there",
      "Content pillars, approval responsibilities and production capacity",
      "Community response, escalation and moderation rules",
      "The difference between reach metrics and business outcomes",
    ],
    approach: [
      "Audit the current presence, audience signals and strongest source material.",
      "Define channel roles, content pillars, formats and an approval workflow.",
      "Create and publish against a practical calendar with consistent quality control.",
      "Report on audience response and downstream actions, then refine the mix.",
    ],
    references: [
      {
        label: "Meta Marketing API overview",
        url: "https://developers.facebook.com/documentation/ads-commerce/marketing-api",
      },
      {
        label: "Meta Ads Insights",
        url: "https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights",
      },
    ],
  },
  "ai-integration": {
    overview:
      "AI integration is most useful when it improves a defined workflow rather than adding a generic chatbot. We identify where AI can assist with retrieval, classification, drafting, extraction or decision support, then design the data boundaries, evaluation method, human review and operational controls around that use case.",
    suitableFor: [
      "Teams searching large internal knowledge collections",
      "Operations processing repetitive documents, messages or requests",
      "Products adding carefully scoped AI-assisted features",
    ],
    considerations: [
      "What the system may access, retain, generate and disclose",
      "Accuracy thresholds, evaluation cases and unacceptable failure modes",
      "Human review, override, logging and incident response",
      "Provider choice, model cost, latency and integration security",
    ],
    approach: [
      "Prioritise use cases by business value, feasibility and risk.",
      "Create a controlled prototype using representative approved data.",
      "Evaluate quality, failure modes, privacy and human-review requirements.",
      "Integrate gradually with monitoring, permissions, documentation and fallback paths.",
    ],
    references: [
      {
        label: "NIST AI Risk Management Framework",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
      { label: "NIST AI RMF Playbook", url: "https://airc.nist.gov/airmf-resources/playbook/" },
    ],
  },
};
