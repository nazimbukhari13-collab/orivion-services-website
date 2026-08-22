import type { ReferenceLink } from "@/lib/service-details";

export type JurisdictionDetail = {
  overview: string;
  suitableWhen: readonly string[];
  tradeoffs: readonly string[];
  setupPath: readonly string[];
  references: readonly ReferenceLink[];
};

export const jurisdictionDetails: Record<
  "mainland" | "free-zone" | "offshore",
  JurisdictionDetail
> = {
  mainland: {
    overview:
      "A Mainland company is licensed by the economic authority of the relevant emirate. It is designed for operating in the UAE market, subject to the activities printed on the licence and any sector approvals. The correct legal form, activity and premises should be selected together because each can affect ownership, visas and ongoing obligations.",
    suitableWhen: [
      "The company will sell directly to customers across the UAE",
      "The activity needs local premises, a retail location or an onshore operational base",
      "The business expects to work with local private-sector or government customers",
      "The planned activity is better supported by the emirate's economic authority",
    ],
    tradeoffs: [
      "Some activities need approval from a sector regulator in addition to the economic licence",
      "Premises, tenancy registration and staffing rules depend on the activity and emirate",
      "Foreign ownership is available for many activities, but restricted or strategic activities can have different conditions",
      "The company must maintain its licence, corporate records, tax position and employment administration",
    ],
    setupPath: [
      "Choose the licensed activities and confirm any external approvals.",
      "Select the legal form, shareholders, managers and trade name.",
      "Complete initial approval, constitutional documents and premises requirements.",
      "Receive the licence, then open the relevant immigration, tax and banking files.",
    ],
    references: [
      {
        label: "UAE Government mainland setup steps",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/steps-to-start-a-business-on-the-mainland",
      },
      {
        label: "UAE Government mainland operations guide",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/running-a-business-on-the-mainland",
      },
      {
        label: "Invest in Dubai business activities",
        url: "https://app.invest.dubai.ae/search-business-activities",
      },
    ],
  },
  "free-zone": {
    overview:
      "A Free Zone company is incorporated and licensed by a specific Free Zone authority. Zones differ in permitted activities, facilities, visa packages, regulators and ecosystems, so the right choice is based on the operating model rather than the lowest advertised package. A Free Zone licence does not automatically make all income tax-free.",
    suitableWhen: [
      "The company mainly serves international, Free Zone or online customers",
      "A sector-focused ecosystem, regulator or physical facility adds operating value",
      "The business wants full foreign ownership and a package managed through one authority",
      "A flexible workspace and limited initial visa requirement suit the launch plan",
    ],
    tradeoffs: [
      "Rules for conducting activity outside the Free Zone depend on the activity and applicable permits",
      "Workspace, visa and substance requirements differ materially between zones",
      "Qualifying Free Zone Person status has conditions, including qualifying income and compliance requirements",
      "Package prices can exclude immigration, establishment, workspace, tax and renewal costs",
    ],
    setupPath: [
      "Compare zones by activity, customers, facilities, visas and total recurring cost.",
      "Choose the entity type, shareholders, manager, licence and workspace package.",
      "Submit incorporation and licence documents to the Free Zone authority.",
      "Complete establishment, residence, tax, banking and operating setup as required.",
    ],
    references: [
      {
        label: "UAE Government Free Zone setup guide",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/starting-a-business-in-a-free-zone",
      },
      {
        label: "UAE Government Free Zone operations guide",
        url: "https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-",
      },
      {
        label: "FTA guide for Free Zone Persons",
        url: "https://tax.gov.ae/en/content/free.zone.persons.ctgfzp1.aspx",
      },
    ],
  },
  offshore: {
    overview:
      "An Offshore or international business company is a registry-based vehicle commonly used for holding assets, investments or cross-border interests. It is not a substitute for a standard UAE operating licence. Registry rules, banking access, beneficial-owner reporting, tax residence and the countries connected to the structure all need specific review.",
    suitableWhen: [
      "A group needs a passive holding or ring-fencing vehicle",
      "The structure will hold shares, investments or permitted assets",
      "The entity does not need a conventional UAE office or residence visa allocation",
      "Cross-border legal and tax advice supports the intended use",
    ],
    tradeoffs: [
      "Permitted activities and local operating rights depend on the chosen registry and product",
      "Bank account opening remains subject to independent bank due diligence",
      "No broad tax exemption should be assumed; treatment depends on the full facts",
      "A registered agent and ongoing registry compliance are generally required",
    ],
    setupPath: [
      "Define the assets, transactions, owners and countries connected to the structure.",
      "Obtain legal and tax input on the proposed use before choosing a registry.",
      "Appoint the required registered agent and prepare incorporation records.",
      "Maintain beneficial-owner, accounting, tax and registry obligations after formation.",
    ],
    references: [
      {
        label: "JAFZA offshore company guide",
        url: "https://www.jafza.ae/resource-centre/guides/how-to-set-up-an-offshore-company/",
      },
      { label: "RAK ICC corporate registry", url: "https://www.rakicc.com/about-us/" },
      {
        label: "UAE Government Corporate Tax overview",
        url: "https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax",
      },
    ],
  },
};
