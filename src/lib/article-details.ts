import type { ReferenceLink } from "@/lib/service-details";

type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type ArticleDetail = {
  sections: readonly ArticleSection[];
  references: readonly ReferenceLink[];
};

export const articleDetails: Record<string, ArticleDetail> = {
  "launching-an-ecommerce-store-in-the-uae": {
    sections: [
      {
        heading: "Start with the licensed activity and operating model",
        paragraphs: [
          "An online store still needs the correct UAE business activity and any approvals that apply to what it sells. The jurisdiction decision should consider where inventory sits, where customers are located, whether imports are involved and which entity will contract with payment and logistics providers.",
          "Map the full order flow before selecting technology: product sourcing, catalogue ownership, payment, fulfilment, returns, customer support and accounting. This exposes licence, tax and systems requirements early.",
        ],
      },
      {
        heading: "Choose technology around the catalogue and team",
        paragraphs: [
          "A managed commerce platform often suits a straightforward launch, while a custom or headless architecture becomes more relevant when pricing, catalogue, marketplace or integration requirements are genuinely unusual. The decision should include the team's ability to manage content and promotions after launch.",
        ],
        bullets: [
          "Define product data, variants, stock rules and Arabic or other language requirements",
          "Design mobile checkout first and make delivery, tax and returns information easy to find",
          "Plan analytics, search visibility, accessibility and page performance before development",
          "Test payment, fulfilment and customer-service exceptions, not only the happy path",
        ],
      },
      {
        heading: "Treat payments and delivery as part of the experience",
        paragraphs: [
          "Gateway eligibility, settlement currency, fraud controls and refund operations should be compared alongside transaction fees. Delivery promises must match the actual courier and inventory process. Clear status communication and a workable returns path often matter as much as the storefront design.",
        ],
      },
      {
        heading: "Build tax and measurement into operations",
        paragraphs: [
          "VAT registration is mandatory when the applicable taxable-supplies threshold is exceeded and voluntary registration has a lower threshold. The precise treatment of local, export and cross-border transactions should be confirmed from the facts. Analytics should measure useful events such as product views, checkout steps, purchases, refunds and lead enquiries.",
        ],
      },
    ],
    references: [
      {
        label: "Invest in Dubai business activity search",
        url: "https://app.invest.dubai.ae/search-business-activities",
      },
      {
        label: "FTA VAT registration guidance",
        url: "https://tax.gov.ae/en/taxes/Vat/vat.topics/registration.for.vat.aspx",
      },
      {
        label: "Google SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      { label: "W3C WCAG overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" },
    ],
  },
  "how-to-set-up-a-business-in-dubai": {
    sections: [
      {
        heading: "1. Define what the company will actually do",
        paragraphs: [
          "Begin with the products or services, customer location, founders, expected staff, premises and planned transactions. Licence activities should describe the real revenue model. Regulated sectors may require additional approval, which affects the route and timing.",
        ],
      },
      {
        heading: "2. Compare Mainland and Free Zone routes",
        paragraphs: [
          "Mainland and Free Zone companies can both be valid operating structures, but they are governed by different authorities and packages. Compare market access, activity availability, premises, visas, total recurring cost and tax position. Offshore structures are generally for holding or cross-border purposes and should not be treated as a substitute for an operating licence.",
        ],
      },
      {
        heading: "3. Choose the legal form, name and ownership",
        paragraphs: [
          "Confirm the shareholders, manager, signing authority, legal form and trade name. Corporate shareholders usually need additional certified company records. Foreign ownership is available for many activities, but any restrictions attached to the exact activity must still be checked.",
        ],
      },
      {
        heading: "4. Complete licensing and post-licence setup",
        paragraphs: [
          "After initial approval and incorporation documents, the authority issues the licence once its requirements are met. The company may then need establishment records, residence or employment processes, tax registration, bookkeeping, premises documentation and a bank application. These are separate workstreams with their own evidence and review.",
        ],
        bullets: [
          "Keep a final incorporation file with the licence and constitutional documents",
          "Record renewal, immigration and tax deadlines from the start",
          "Prepare a coherent banking file explaining activity, ownership and expected transactions",
          "Set bookkeeping and document retention before transaction volume grows",
        ],
      },
    ],
    references: [
      {
        label: "UAE Government Mainland setup steps",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland",
      },
      {
        label: "UAE Government Free Zone setup guide",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone",
      },
      { label: "Invest in Dubai", url: "https://app.invest.dubai.ae/" },
    ],
  },
  "mainland-vs-free-zone-vs-offshore": {
    sections: [
      {
        heading: "Use customers and activity as the first filter",
        paragraphs: [
          "The most useful comparison begins with where customers are located, what the licence must authorise and whether the company needs a conventional UAE operating presence. A low initial package price can be misleading if the structure later needs extra permits, premises or another entity to trade as intended.",
        ],
      },
      {
        heading: "Mainland",
        paragraphs: [
          "A Mainland entity is licensed by the emirate's economic authority for approved activities. It is commonly considered when the company will operate across the local market, needs local premises or expects to contract directly for onshore work. Activity-specific approvals and premises rules can apply.",
        ],
      },
      {
        heading: "Free Zone",
        paragraphs: [
          "A Free Zone entity is licensed by its zone authority. Zones vary in activities, facilities, visas, sector focus and operating rules. The 0% Corporate Tax rate is not automatic: it applies to qualifying income of a Qualifying Free Zone Person that meets the relevant conditions.",
        ],
      },
      {
        heading: "Offshore or registry-based vehicle",
        paragraphs: [
          "An Offshore or international business company is commonly used for holding or cross-border structuring and generally does not provide the same operating or visa position as a standard licence. Registry rules, beneficial-owner obligations, banking and tax treatment require specific legal and tax review.",
        ],
      },
      {
        heading: "A practical comparison checklist",
        paragraphs: [],
        bullets: [
          "Licensed activities and external approvals",
          "Customer location and permitted route to market",
          "Workspace, facilities and expected visa needs",
          "Initial fees plus renewal and operating costs",
          "Corporate Tax, VAT, substance and reporting position",
          "Banking evidence and the countries involved in transactions",
        ],
      },
    ],
    references: [
      {
        label: "UAE Government business portal",
        url: "https://u.ae/en/information-and-services/business",
      },
      {
        label: "FTA Free Zone Persons guide",
        url: "https://tax.gov.ae/en/content/free.zone.persons.ctgfzp1.aspx",
      },
      {
        label: "JAFZA offshore company guide",
        url: "https://www.jafza.ae/resource-centre/guides/how-to-set-up-an-offshore-company/",
      },
    ],
  },
  "uae-corporate-tax-explained": {
    sections: [
      {
        heading: "The headline rates are only the starting point",
        paragraphs: [
          "The general UAE Corporate Tax rates are 0% on taxable income up to AED 375,000 and 9% on taxable income above that threshold. Taxable income is based on accounting income with adjustments under the law, so revenue, bank balance and taxable profit are not interchangeable.",
        ],
      },
      {
        heading: "Registration and filing are separate from tax payable",
        paragraphs: [
          "A company may have registration, record and return obligations even when no Corporate Tax is ultimately payable. The applicable registration and filing position should be checked for the entity, financial year and circumstances rather than inferred from current profit alone.",
        ],
      },
      {
        heading: "Free Zone 0% has conditions",
        paragraphs: [
          "A Free Zone Person must meet the conditions to be a Qualifying Free Zone Person, and the 0% rate applies to qualifying income. The regime includes requirements concerning income, substance, transfer pricing and audited financial statements. Failure to meet the conditions can change the tax treatment.",
        ],
      },
      {
        heading: "Build an evidence trail throughout the year",
        paragraphs: [
          "Reliable bookkeeping, contracts, invoices, expense support and related-party records make the tax computation defensible. Transactions with owners, connected persons and group companies should be identified rather than discovered only at filing time.",
        ],
        bullets: [
          "Confirm the tax registration and first filing period",
          "Keep accounting records aligned to the legal entity",
          "Document related-party and owner transactions",
          "Review VAT, withholding and overseas tax questions separately where relevant",
          "Use qualified tax advice for elections, exemptions and complex cross-border positions",
        ],
      },
    ],
    references: [
      {
        label: "FTA Corporate Tax FAQs",
        url: "https://tax.gov.ae/en/taxes/corporate.tax/faqs.aspx",
      },
      {
        label: "FTA Corporate Tax General Guide",
        url: "https://tax.gov.ae/en/content/corporate.tax.general.guide.home.aspx",
      },
      {
        label: "FTA Free Zone Persons guide",
        url: "https://tax.gov.ae/en/content/free.zone.persons.ctgfzp1.aspx",
      },
      {
        label: "UAE Government Corporate Tax overview",
        url: "https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax",
      },
    ],
  },
};
