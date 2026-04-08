export interface CaseStudy {
  title: string;
  metric: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  caseStudies: CaseStudy[];
  relatedServices: string[];
}

export const industries: Industry[] = [
  {
    id: "financial-services",
    name: "Financial Services",
    slug: "financial-services",
    description:
      "Navigate regulatory complexity, digital disruption, and evolving customer expectations in financial services.",
    longDescription:
      "The financial services industry faces unprecedented challenges from fintech disruption, regulatory evolution, and changing consumer behaviors. NEXOVA helps financial institutions modernize operations, enhance customer experiences, and unlock new revenue streams while managing regulatory and compliance risks.",
    icon: "Building2",
    challenges: [
      "Digital disruption and fintech competition",
      "Regulatory compliance and reporting",
      "Legacy system modernization",
      "Cybersecurity and data protection",
      "Changing customer expectations",
      "Talent acquisition and retention",
    ],
    solutions: [
      "Digital banking transformation",
      "Regulatory compliance frameworks",
      "Cloud migration and modernization",
      "Cybersecurity and risk management",
      "Customer experience enhancement",
      "Open banking and API strategies",
    ],
    caseStudies: [
      {
        title: "Major Bank Digital Transformation",
        metric: "40% cost reduction",
        description: "Transformed legacy banking platform to cloud-based digital ecosystem",
      },
      {
        title: "Fintech Regulatory Compliance",
        metric: "6-month implementation",
        description: "Implemented comprehensive compliance framework for emerging fintech platform",
      },
    ],
    relatedServices: [
      "digital-transformation",
      "risk-compliance",
      "financial-advisory",
      "strategy-consulting",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    description:
      "Improve outcomes and efficiency in healthcare delivery while navigating complex regulatory environments.",
    longDescription:
      "Healthcare organizations face pressures from aging populations, cost containment, regulatory changes, and advancing technologies. NEXOVA partners with healthcare providers, payers, and life sciences companies to transform operations, improve patient outcomes, and drive sustainable growth.",
    icon: "Heart",
    challenges: [
      "Rising healthcare costs",
      "Care delivery model transformation",
      "Clinical and operational integration",
      "Talent and workforce challenges",
      "Regulatory and compliance requirements",
      "Patient experience and engagement",
    ],
    solutions: [
      "Healthcare transformation and redesign",
      "Clinical integration strategies",
      "Supply chain optimization",
      "Digital health and telemedicine",
      "Population health management",
      "Merger integration and consolidation",
    ],
    caseStudies: [
      {
        title: "Health System Operational Integration",
        metric: "25% cost savings",
        description: "Integrated operations across multi-hospital health system",
      },
      {
        title: "Life Sciences Commercial Excellence",
        metric: "30% revenue growth",
        description: "Transformed sales and marketing effectiveness for pharma company",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "ma-advisory",
      "digital-transformation",
      "human-capital",
    ],
  },
  {
    id: "technology",
    name: "Technology & Software",
    slug: "technology",
    description:
      "Accelerate growth and transformation for technology companies in rapidly evolving markets.",
    longDescription:
      "Technology companies operate in highly competitive, fast-paced environments. NEXOVA helps tech firms scale operations, expand into new markets, optimize go-to-market strategies, and build sustainable business models in evolving competitive landscapes.",
    icon: "Cpu",
    challenges: [
      "Rapid market evolution and competition",
      "Scaling operations and infrastructure",
      "Talent recruitment and retention",
      "Product roadmap prioritization",
      "International expansion",
      "Business model transformation",
    ],
    solutions: [
      "Growth strategy and market expansion",
      "Product and pricing strategy",
      "Go-to-market excellence",
      "Operations scaling",
      "M&A and integration",
      "Innovation and venture strategies",
    ],
    caseStudies: [
      {
        title: "SaaS Company International Expansion",
        metric: "5 new markets in 18 months",
        description: "Executed multi-market expansion strategy for cloud software company",
      },
      {
        title: "Tech Startup Scaling",
        metric: "150% revenue growth",
        description: "Scaled operations and processes for rapidly growing unicorn",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "operations-excellence",
      "innovation-growth",
      "digital-transformation",
    ],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    slug: "energy",
    description:
      "Navigate energy transition while optimizing operations and managing regulatory change.",
    longDescription:
      "Energy and utility companies face the critical challenge of energy transition, from fossil fuels to renewables. NEXOVA helps these organizations modernize operations, invest strategically in clean energy, optimize grid management, and create sustainable business models.",
    icon: "Zap",
    challenges: [
      "Energy transition and decarbonization",
      "Renewable energy integration",
      "Aging infrastructure modernization",
      "Regulatory and policy changes",
      "Workforce transformation",
      "Customer experience expectations",
    ],
    solutions: [
      "Energy transition and decarbonization strategies",
      "Renewable portfolio optimization",
      "Grid modernization and smart systems",
      "Cost reduction and efficiency",
      "Digital and data strategy",
      "Organizational transformation",
    ],
    caseStudies: [
      {
        title: "Utility Decarbonization Strategy",
        metric: "Net-zero roadmap delivered",
        description: "Developed comprehensive net-zero transition strategy for major utility",
      },
      {
        title: "Energy Company Operations Optimization",
        metric: "22% cost reduction",
        description: "Optimized operations across generation, transmission, and distribution",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "operations-excellence",
      "digital-transformation",
      "financial-advisory",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    description:
      "Enhance competitiveness through operational excellence, digital innovation, and supply chain optimization.",
    longDescription:
      "Manufacturers face pressure from globalization, rapid technological change, and evolving customer demands. NEXOVA helps manufacturers modernize operations, optimize supply chains, implement advanced manufacturing technologies, and drive lean improvements.",
    icon: "Factory",
    challenges: [
      "Supply chain complexity and disruption",
      "Quality and product defects",
      "Digital manufacturing adoption",
      "Workforce skills and training",
      "Global footprint optimization",
      "Sustainability requirements",
    ],
    solutions: [
      "Lean manufacturing and continuous improvement",
      "Supply chain resilience and optimization",
      "Digital manufacturing and Industry 4.0",
      "Quality excellence",
      "Cost reduction programs",
      "Sustainability and circular economy",
    ],
    caseStudies: [
      {
        title: "Industrial Equipment Manufacturer Digital Transformation",
        metric: "33% productivity improvement",
        description: "Implemented Industry 4.0 solutions across manufacturing footprint",
      },
      {
        title: "Supply Chain Resilience",
        metric: "30% cost savings",
        description: "Redesigned global supply chain for resilience and efficiency",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "digital-transformation",
      "strategy-consulting",
      "supply-chain",
    ],
  },
  {
    id: "retail-consumer",
    name: "Retail & Consumer",
    slug: "retail-consumer",
    description:
      "Transform retail business models and enhance customer experiences in an omnichannel environment.",
    longDescription:
      "Retail and consumer companies navigate fundamental business model shifts driven by e-commerce, changing consumer behaviors, and data analytics capabilities. NEXOVA helps retailers optimize omnichannel operations, enhance customer experiences, and drive profitable growth.",
    icon: "ShoppingCart",
    challenges: [
      "E-commerce and omnichannel integration",
      "Changing consumer behaviors and preferences",
      "Data analytics and personalization",
      "Store productivity and footprint optimization",
      "Inventory and supply chain management",
      "Technology and digital capabilities",
    ],
    solutions: [
      "Omnichannel strategy and operations",
      "Customer experience transformation",
      "Data analytics and personalization",
      "Merchandising and pricing optimization",
      "Supply chain and logistics",
      "Retail technology platforms",
    ],
    caseStudies: [
      {
        title: "Omnichannel Transformation",
        metric: "35% e-commerce growth",
        description: "Integrated online and offline operations for major retailer",
      },
      {
        title: "Consumer Brand Commercial Excellence",
        metric: "28% margin improvement",
        description: "Optimized pricing and merchandising strategy for CPG company",
      },
    ],
    relatedServices: [
      "digital-transformation",
      "operations-excellence",
      "strategy-consulting",
      "innovation-growth",
    ],
  },
  {
    id: "telecommunications",
    name: "Telecommunications",
    slug: "telecommunications",
    description:
      "Adapt to convergence trends and optimize networks while expanding high-value service offerings.",
    longDescription:
      "Telecom companies face structural challenges from declining voice revenue, capital intensity of networks, and increasing competition. NEXOVA helps telecom operators optimize networks, transition to high-value services, and navigate 5G and digital transformation.",
    icon: "Signal",
    challenges: [
      "Declining traditional revenue",
      "5G investment and deployment",
      "Network transformation and virtualization",
      "Customer experience in digital age",
      "Workforce transformation",
      "Competitive pricing pressure",
    ],
    solutions: [
      "5G strategy and deployment",
      "Network transformation and optimization",
      "Digital service strategy",
      "Customer experience enhancement",
      "Cost reduction and efficiency",
      "M&A and market consolidation",
    ],
    caseStudies: [
      {
        title: "Telecom 5G Strategy and Deployment",
        metric: "Efficient rollout across regions",
        description: "Developed and executed 5G deployment strategy for major carrier",
      },
      {
        title: "Operational Efficiency Program",
        metric: "24% cost reduction",
        description: "Implemented comprehensive cost reduction across network operations",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "operations-excellence",
      "digital-transformation",
      "ma-advisory",
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    slug: "automotive",
    description:
      "Navigate electrification, autonomous vehicles, and new mobility models to secure future competitiveness.",
    longDescription:
      "The automotive industry undergoes fundamental transformation with electrification, autonomous driving, and changing ownership models. NEXOVA helps automotive manufacturers and suppliers transform operations, invest in new technologies, and reimagine business models.",
    icon: "Car",
    challenges: [
      "Electrification and battery technology",
      "Autonomous vehicle development",
      "Supply chain and material sourcing",
      "Manufacturing transformation",
      "Changing ownership and mobility models",
      "Technology talent and capabilities",
    ],
    solutions: [
      "Electrification strategy and execution",
      "Supply chain transformation",
      "Manufacturing modernization",
      "Mobility and services strategy",
      "Digital and technology roadmaps",
      "Mergers and partnerships",
    ],
    caseStudies: [
      {
        title: "Automotive Electrification Strategy",
        metric: "Comprehensive EV roadmap",
        description: "Developed electrification strategy and investment plan for manufacturer",
      },
      {
        title: "Supplier Supply Chain Optimization",
        metric: "18% cost improvement",
        description: "Optimized supply chain and supplier network for automotive OEM",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "operations-excellence",
      "innovation-growth",
      "digital-transformation",
    ],
  },
  {
    id: "aerospace-defense",
    name: "Aerospace & Defense",
    slug: "aerospace-defense",
    description:
      "Enhance operational efficiency and innovation in the aerospace and defense sector.",
    longDescription:
      "Aerospace and defense contractors face unique challenges around security, regulation, innovation cycles, and program management. NEXOVA helps these organizations optimize programs, drive operational excellence, and manage complex transformation initiatives.",
    icon: "Plane",
    challenges: [
      "Program complexity and cost overruns",
      "Supply chain security",
      "Workforce and talent management",
      "Technology modernization",
      "Regulatory compliance",
      "Innovation and new product development",
    ],
    solutions: [
      "Program management excellence",
      "Operational efficiency and cost reduction",
      "Supply chain security and optimization",
      "Digital manufacturing",
      "Innovation and product development",
      "Organizational transformation",
    ],
    caseStudies: [
      {
        title: "Defense Contractor Program Management",
        metric: "15% schedule acceleration",
        description: "Improved program execution and cost management for defense contractor",
      },
      {
        title: "Supply Chain Security Transformation",
        metric: "Comprehensive framework deployed",
        description: "Implemented supply chain security framework for aerospace company",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "strategy-consulting",
      "risk-compliance",
      "digital-transformation",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    description:
      "Optimize portfolios, enhance asset management, and navigate market dynamics in real estate.",
    longDescription:
      "Real estate investors and developers navigate complex markets, capital availability, and changing occupancy patterns. NEXOVA helps real estate firms optimize portfolios, enhance asset management, and develop strategies for sustainable growth.",
    icon: "Building",
    challenges: [
      "Portfolio optimization and valuation",
      "Capital allocation and funding",
      "Tenant and asset management",
      "Sustainability and ESG requirements",
      "Market dynamics and economic cycles",
      "Technology and digital transformation",
    ],
    solutions: [
      "Portfolio strategy and optimization",
      "Asset and property management",
      "Development strategy and execution",
      "Sustainability and green building",
      "Technology and digital platforms",
      "Investment and capital strategies",
    ],
    caseStudies: [
      {
        title: "Real Estate Portfolio Optimization",
        metric: "20% portfolio return improvement",
        description: "Optimized real estate portfolio for major institutional investor",
      },
      {
        title: "Sustainability Transformation",
        metric: "Net-zero real estate goals",
        description: "Developed sustainability strategy for major real estate company",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "financial-advisory",
      "operations-excellence",
      "digital-transformation",
    ],
  },
  {
    id: "private-equity",
    name: "Private Equity",
    slug: "private-equity",
    description:
      "Maximize value creation through operational improvements and strategic growth initiatives.",
    longDescription:
      "Private equity firms seek operational improvements, strategic growth, and value creation across portfolio companies. NEXOVA provides operational due diligence, 100-day plans, value creation roadmaps, and execution support for PE-backed companies.",
    icon: "TrendingUp",
    challenges: [
      "Operational due diligence",
      "Integration of acquired companies",
      "Value creation execution",
      "Talent and organizational changes",
      "Market and economic volatility",
      "Exit strategy optimization",
    ],
    solutions: [
      "Operational due diligence and assessment",
      "Value creation planning",
      "Portfolio company operations improvement",
      "M&A integration support",
      "Exit strategy and value optimization",
      "Operational benchmarking",
    ],
    caseStudies: [
      {
        title: "PE Portfolio Value Creation",
        metric: "35% EBITDA improvement",
        description: "Drove significant operational improvements across PE portfolio",
      },
      {
        title: "Acquisition Integration",
        metric: "100 days to synergy realization",
        description: "Executed rapid integration of acquisition by PE firm",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "strategy-consulting",
      "ma-advisory",
      "financial-advisory",
    ],
  },
  {
    id: "banking-capital-markets",
    name: "Banking & Capital Markets",
    slug: "banking-capital-markets",
    description:
      "Navigate regulatory evolution and digital disruption in banking and capital markets.",
    longDescription:
      "Banking and capital markets institutions face regulatory requirements, digital disruption, and competitive pressures. NEXOVA helps banks and market participants optimize operations, modernize technology, and develop new revenue streams.",
    icon: "CreditCard",
    challenges: [
      "Regulatory compliance and reporting",
      "Technology modernization",
      "Cybersecurity and data protection",
      "Digital banking and automation",
      "Low interest rate environment",
      "Competitive fintech disruption",
    ],
    solutions: [
      "Regulatory compliance framework",
      "Digital banking transformation",
      "Trading and operations optimization",
      "Risk management",
      "Revenue optimization and pricing",
      "Organizational transformation",
    ],
    caseStudies: [
      {
        title: "Investment Bank Operations Optimization",
        metric: "28% cost reduction",
        description: "Streamlined operations for major investment banking division",
      },
      {
        title: "Trading Platform Modernization",
        metric: "Reduced latency by 40%",
        description: "Modernized trading infrastructure for capital markets firm",
      },
    ],
    relatedServices: [
      "digital-transformation",
      "operations-excellence",
      "risk-compliance",
      "financial-advisory",
    ],
  },
  {
    id: "insurance",
    name: "Insurance",
    slug: "insurance",
    description:
      "Transform insurance business models through digital innovation and customer-centric strategies.",
    longDescription:
      "Insurance companies face disruption from digital competitors, changing customer expectations, and evolving risks. NEXOVA helps insurers modernize platforms, enhance customer experiences, optimize underwriting, and develop new business models.",
    icon: "Umbrella",
    challenges: [
      "Digital disruption and InsurTech",
      "Customer acquisition and retention",
      "Claims processing efficiency",
      "Underwriting and risk assessment",
      "Legacy system modernization",
      "Talent and organizational change",
    ],
    solutions: [
      "Digital insurance platform transformation",
      "Customer experience enhancement",
      "Claims automation and optimization",
      "Underwriting excellence",
      "Distribution strategy",
      "Organizational and talent transformation",
    ],
    caseStudies: [
      {
        title: "Insurance Digital Transformation",
        metric: "50% claims processing improvement",
        description: "Transformed digital platform for major insurance carrier",
      },
      {
        title: "InsurTech Growth Strategy",
        metric: "200% revenue growth",
        description: "Developed and executed growth strategy for digital insurance startup",
      },
    ],
    relatedServices: [
      "digital-transformation",
      "strategy-consulting",
      "operations-excellence",
      "innovation-growth",
    ],
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    slug: "media-entertainment",
    description:
      "Navigate streaming disruption and transform business models in media and entertainment.",
    longDescription:
      "Media and entertainment companies face structural challenges from streaming, cord-cutting, and changing content consumption. NEXOVA helps media firms transform business models, optimize content strategies, and monetize digital platforms.",
    icon: "Film",
    challenges: [
      "Streaming and digital disruption",
      "Cord-cutting and audience fragmentation",
      "Content investment decisions",
      "Technology and platform modernization",
      "International expansion",
      "Advertising model transformation",
    ],
    solutions: [
      "Streaming strategy and platform development",
      "Content strategy and portfolio optimization",
      "Digital advertising and monetization",
      "International expansion",
      "Technology platform modernization",
      "Organizational transformation",
    ],
    caseStudies: [
      {
        title: "Streaming Service Growth",
        metric: "15M subscriber growth",
        description: "Scaled streaming platform for major entertainment company",
      },
      {
        title: "Media Company Digital Transformation",
        metric: "35% digital revenue increase",
        description: "Transformed digital revenue model for traditional media company",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "digital-transformation",
      "innovation-growth",
      "operations-excellence",
    ],
  },
  {
    id: "education",
    name: "Education",
    slug: "education",
    description:
      "Enhance educational outcomes and institutional sustainability through strategic transformation.",
    longDescription:
      "Educational institutions face challenges around enrollment, funding, technology adoption, and changing student expectations. NEXOVA helps schools and universities optimize operations, enhance student experiences, and build sustainable models.",
    icon: "BookOpen",
    challenges: [
      "Enrollment and demographic challenges",
      "Funding and financial sustainability",
      "Digital learning and technology adoption",
      "Student experience and outcomes",
      "Competitive positioning",
      "Operational efficiency",
    ],
    solutions: [
      "Strategic planning and positioning",
      "Student experience transformation",
      "Digital learning strategy",
      "Operations and cost optimization",
      "Fundraising and revenue diversification",
      "Organizational transformation",
    ],
    caseStudies: [
      {
        title: "University Digital Transformation",
        metric: "Enhanced online enrollment",
        description: "Transformed digital learning for major research university",
      },
      {
        title: "School System Efficiency",
        metric: "15% cost savings",
        description: "Optimized operations for large school district",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "operations-excellence",
      "digital-transformation",
      "human-capital",
    ],
  },
  {
    id: "government-public-sector",
    name: "Government & Public Sector",
    slug: "government-public-sector",
    description:
      "Improve public sector delivery and effectiveness through modernization and innovation.",
    longDescription:
      "Government and public sector organizations face pressures around budget constraints, citizen expectations, and digital transformation. NEXOVA helps public agencies improve service delivery, optimize operations, and navigate complex transformations.",
    icon: "Building",
    challenges: [
      "Budget constraints and fiscal pressure",
      "Legacy system modernization",
      "Service delivery improvement",
      "Workforce challenges",
      "Digital transformation",
      "Citizen experience expectations",
    ],
    solutions: [
      "Public sector transformation",
      "Service delivery optimization",
      "Digital government initiatives",
      "Operations efficiency",
      "Change management",
      "Technology modernization",
    ],
    caseStudies: [
      {
        title: "Government Digital Transformation",
        metric: "Citizen service improvements",
        description: "Modernized digital services for major government agency",
      },
      {
        title: "Public Service Operations",
        metric: "20% efficiency improvement",
        description: "Optimized operations for government service organization",
      },
    ],
    relatedServices: [
      "digital-transformation",
      "operations-excellence",
      "strategy-consulting",
      "change-management",
    ],
  },
  {
    id: "agriculture-food",
    name: "Agriculture & Food",
    slug: "agriculture-food",
    description:
      "Support agricultural and food business growth and sustainability through strategic partnerships.",
    longDescription:
      "Agriculture and food companies face challenges around sustainability, supply chain complexity, changing consumer preferences, and technological adoption. NEXOVA helps food and agriculture businesses optimize operations and drive sustainable growth.",
    icon: "Leaf",
    challenges: [
      "Sustainability and environmental pressure",
      "Supply chain complexity",
      "Food safety and quality",
      "Changing consumer preferences",
      "Technology adoption",
      "Global sourcing and operations",
    ],
    solutions: [
      "Supply chain optimization",
      "Sustainability and circular economy",
      "Digital agriculture and farm technology",
      "Food safety and quality excellence",
      "Product innovation and development",
      "International expansion",
    ],
    caseStudies: [
      {
        title: "Food Company Supply Chain",
        metric: "22% cost reduction",
        description: "Optimized global supply chain for major food producer",
      },
      {
        title: "Agriculture Sustainability",
        metric: "Net-zero roadmap",
        description: "Developed sustainability strategy for agricultural company",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "strategy-consulting",
      "sustainability",
      "digital-transformation",
    ],
  },
  {
    id: "mining-metals",
    name: "Mining & Metals",
    slug: "mining-metals",
    description:
      "Optimize mining and metals operations while managing sustainability and energy transition.",
    longDescription:
      "Mining and metals companies navigate commodity price cycles, sustainability requirements, and energy transition. NEXOVA helps mining firms optimize operations, invest in technology, and build sustainable business models.",
    icon: "Mountain",
    challenges: [
      "Commodity price volatility",
      "Operational efficiency and safety",
      "Environmental and sustainability requirements",
      "Energy transition and decarbonization",
      "Technology and automation",
      "Workforce skills and retention",
    ],
    solutions: [
      "Operations optimization and efficiency",
      "Safety and environmental management",
      "Automation and Industry 4.0",
      "Energy transition",
      "Supply chain optimization",
      "Cost reduction programs",
    ],
    caseStudies: [
      {
        title: "Mining Operations Optimization",
        metric: "28% productivity improvement",
        description: "Optimized mining operations for major mineral producer",
      },
      {
        title: "Metals Company Sustainability",
        metric: "Carbon neutral operations",
        description: "Implemented sustainability program for metals manufacturer",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "strategy-consulting",
      "digital-transformation",
      "sustainability",
    ],
  },
  {
    id: "transportation-logistics",
    name: "Transportation & Logistics",
    slug: "transportation-logistics",
    description:
      "Enhance efficiency and sustainability in transportation and logistics operations.",
    longDescription:
      "Transportation and logistics companies face challenges around last-mile delivery, driver shortages, fuel costs, and sustainability. NEXOVA helps logistics firms optimize networks, embrace automation, and drive sustainable growth.",
    icon: "Truck",
    challenges: [
      "Last-mile delivery complexity",
      "Driver shortage and retention",
      "Fuel costs and sustainability",
      "Technology and automation adoption",
      "Network optimization",
      "Customer experience expectations",
    ],
    solutions: [
      "Network optimization and design",
      "Last-mile delivery innovation",
      "Automation and warehouse technology",
      "Sustainability and green logistics",
      "Digital platforms and visibility",
      "Driver and workforce management",
    ],
    caseStudies: [
      {
        title: "Logistics Network Optimization",
        metric: "18% cost improvement",
        description: "Optimized distribution network for major logistics company",
      },
      {
        title: "Last-Mile Delivery Innovation",
        metric: "40% delivery cost reduction",
        description: "Implemented innovative last-mile delivery model",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "digital-transformation",
      "strategy-consulting",
      "automation",
    ],
  },
  {
    id: "hospitality-travel",
    name: "Hospitality & Travel",
    slug: "hospitality-travel",
    description:
      "Recover and transform hospitality and travel businesses through guest-centric strategies.",
    longDescription:
      "Hospitality and travel companies navigate recovery from disruption, evolving guest expectations, and labor challenges. NEXOVA helps hotels, restaurants, and travel companies transform operations and drive guest-centric growth.",
    icon: "Hotel",
    challenges: [
      "Demand and occupancy recovery",
      "Labor shortage and wage pressure",
      "Guest experience expectations",
      "Digital and technology platforms",
      "Sustainability requirements",
      "Distribution and pricing strategy",
    ],
    solutions: [
      "Revenue optimization and pricing",
      "Guest experience transformation",
      "Digital platform and booking",
      "Operations efficiency",
      "Labor and workforce strategy",
      "Sustainability and green hospitality",
    ],
    caseStudies: [
      {
        title: "Hotel Chain Recovery",
        metric: "35% occupancy improvement",
        description: "Led recovery strategy for major hotel chain post-pandemic",
      },
      {
        title: "Restaurant Group Transformation",
        metric: "25% margin improvement",
        description: "Optimized operations for restaurant company",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "strategy-consulting",
      "digital-transformation",
      "revenue-optimization",
    ],
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    slug: "pharmaceuticals",
    description:
      "Drive innovation and commercial success in the pharmaceutical industry.",
    longDescription:
      "Pharmaceutical companies face patent cliffs, R&D productivity challenges, and pricing pressures. NEXOVA helps pharma firms optimize R&D pipelines, enhance commercial execution, and develop new business models.",
    icon: "Pill",
    challenges: [
      "Patent expiration and revenue losses",
      "R&D productivity and innovation",
      "Regulatory approval timelines",
      "Commercial and pricing strategy",
      "Global market access",
      "Digital health integration",
    ],
    solutions: [
      "R&D optimization and portfolio",
      "Commercial excellence and field force",
      "Regulatory and market access strategy",
      "Digital health and patient engagement",
      "Geographic expansion",
      "M&A and partnerships",
    ],
    caseStudies: [
      {
        title: "Pharma Commercial Excellence",
        metric: "40% sales increase",
        description: "Enhanced sales force effectiveness for pharmaceutical company",
      },
      {
        title: "R&D Pipeline Optimization",
        metric: "Improved development productivity",
        description: "Optimized R&D portfolio and development process",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "innovation-growth",
      "digital-transformation",
      "operations-excellence",
    ],
  },
  {
    id: "construction-engineering",
    name: "Construction & Engineering",
    slug: "construction-engineering",
    description:
      "Improve project delivery and operational efficiency in construction and engineering.",
    longDescription:
      "Construction and engineering firms navigate project complexity, cost pressures, and talent challenges. NEXOVA helps these firms optimize project delivery, improve margins, and implement digital transformation.",
    icon: "Hammer",
    challenges: [
      "Project cost and schedule overruns",
      "Labor productivity and retention",
      "Safety and quality management",
      "Digital and technology adoption",
      "Supply chain complexity",
      "Profitability and margin pressure",
    ],
    solutions: [
      "Project management excellence",
      "Lean construction and efficiency",
      "Digital construction and BIM",
      "Safety and quality programs",
      "Workforce and labor strategy",
      "Cost management programs",
    ],
    caseStudies: [
      {
        title: "Construction Firm Productivity",
        metric: "20% margin improvement",
        description: "Improved project delivery and profitability for contractor",
      },
      {
        title: "Engineering Firm Digitalization",
        metric: "30% project cycle reduction",
        description: "Implemented digital tools and processes for engineering company",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "digital-transformation",
      "strategy-consulting",
      "project-management",
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    slug: "professional-services",
    description:
      "Enhance service delivery and growth in professional services firms.",
    longDescription:
      "Professional services firms seek to improve utilization, enhance service delivery, develop new offerings, and navigate digital disruption. NEXOVA helps law firms, accounting firms, and consulting practices drive growth and transformation.",
    icon: "Briefcase",
    challenges: [
      "Partner productivity and utilization",
      "Talent attraction and retention",
      "Service delivery and quality",
      "Technology modernization",
      "Alternative service delivery models",
      "Market positioning and growth",
    ],
    solutions: [
      "Service delivery optimization",
      "Talent and partner strategy",
      "Technology and digital platforms",
      "Alternative service delivery",
      "Market expansion and new offerings",
      "Operational efficiency",
    ],
    caseStudies: [
      {
        title: "Professional Services Utilization",
        metric: "12% utilization improvement",
        description: "Enhanced partner and staff productivity for professional firm",
      },
      {
        title: "Law Firm Digital Transformation",
        metric: "35% administrative cost reduction",
        description: "Implemented digital platforms and automation for law firm",
      },
    ],
    relatedServices: [
      "operations-excellence",
      "digital-transformation",
      "strategy-consulting",
      "human-capital",
    ],
  },
  {
    id: "nonprofit-ngo",
    name: "Nonprofit & NGO",
    slug: "nonprofit-ngo",
    description:
      "Enhance impact and sustainability in nonprofit and NGO organizations.",
    longDescription:
      "Nonprofit and NGO organizations seek to maximize social impact while managing funding and operational challenges. NEXOVA helps nonprofits improve program effectiveness, enhance fundraising, and build sustainable organizations.",
    icon: "Heart",
    challenges: [
      "Funding and revenue sustainability",
      "Program effectiveness and impact",
      "Talent and volunteer management",
      "Technology and digital capabilities",
      "Organizational efficiency",
      "Donor engagement and retention",
    ],
    solutions: [
      "Strategy and mission alignment",
      "Program effectiveness and evaluation",
      "Fundraising and revenue diversification",
      "Operational efficiency",
      "Technology and digital transformation",
      "Governance and organizational development",
    ],
    caseStudies: [
      {
        title: "NGO Program Effectiveness",
        metric: "40% impact improvement",
        description: "Enhanced program delivery and impact for international NGO",
      },
      {
        title: "Nonprofit Operational Efficiency",
        metric: "25% cost reduction",
        description: "Improved operations and efficiency for nonprofit organization",
      },
    ],
    relatedServices: [
      "strategy-consulting",
      "operations-excellence",
      "digital-transformation",
      "human-capital",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
