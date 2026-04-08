export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export const services: Service[] = [
  {
    id: "strategy-consulting",
    title: "Strategy Consulting",
    slug: "strategy-consulting",
    description:
      "Develop winning strategies that unlock competitive advantage and drive sustainable growth across your organization.",
    longDescription:
      "Our Strategy Consulting practice partners with executive teams to navigate complex market dynamics, identify new growth opportunities, and design transformation roadmaps. We combine deep industry expertise with proprietary analytical frameworks to deliver actionable strategies that drive measurable business impact.",
    icon: "Target",
    features: [
      "Corporate strategy and business transformation",
      "Growth strategy and market entry",
      "Competitive analysis and positioning",
      "Scenario planning and risk assessment",
      "Organizational design and implementation",
      "Digital strategy and innovation roadmaps",
    ],
    stats: [
      { label: "Avg. Revenue Growth", value: "24%" },
      { label: "Successful Transformations", value: "200+" },
      { label: "Industries Served", value: "18" },
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    slug: "digital-transformation",
    description:
      "Reimagine your business through technology, enabling new operating models and enhanced customer experiences.",
    longDescription:
      "We guide organizations through comprehensive digital transformation journeys, from technology strategy and platform selection to change management and capability building. Our approach ensures sustainable adoption and measurable returns on technology investments.",
    icon: "Zap",
    features: [
      "Digital strategy and technology roadmaps",
      "Cloud migration and infrastructure modernization",
      "Enterprise systems implementation",
      "Data and AI strategy",
      "Digital operating models",
      "Change management and training",
    ],
    stats: [
      { label: "Transformation Programs", value: "150+" },
      { label: "Cloud Migrations", value: "80+" },
      { label: "Avg. Cost Savings", value: "35%" },
    ],
  },
  {
    id: "ma-advisory",
    title: "M&A Advisory",
    slug: "ma-advisory",
    description:
      "Navigate mergers and acquisitions with confidence through comprehensive due diligence, valuation, and integration planning.",
    longDescription:
      "From target identification and valuation to deal structuring and post-merger integration, we provide end-to-end M&A support. Our team combines financial expertise, operational knowledge, and deal experience to maximize value creation and minimize integration risks.",
    icon: "Briefcase",
    features: [
      "Target identification and screening",
      "Financial and operational due diligence",
      "Valuation and deal structuring",
      "Synergy identification and realization",
      "Post-merger integration planning",
      "Day-100 and day-1000 reviews",
    ],
    stats: [
      { label: "Deals Supported", value: "450+" },
      { label: "Total Value", value: "$85B+" },
      { label: "Avg. Synergy Realization", value: "92%" },
    ],
  },
  {
    id: "operations-excellence",
    title: "Operations Excellence",
    slug: "operations-excellence",
    description:
      "Optimize operations to deliver superior efficiency, quality, and profitability while maintaining agility.",
    longDescription:
      "Our Operations Excellence practice helps organizations streamline processes, improve productivity, and enhance quality. We leverage Lean, Six Sigma, and advanced analytics to identify opportunities and implement sustainable operational improvements.",
    icon: "Cog",
    features: [
      "Lean and continuous improvement",
      "Supply chain optimization",
      "Manufacturing excellence",
      "Process automation and RPA",
      "Cost reduction programs",
      "Quality and operational excellence",
    ],
    stats: [
      { label: "Cost Reduction Programs", value: "320+" },
      { label: "Avg. COGS Improvement", value: "18%" },
      { label: "Productivity Gains", value: "28%" },
    ],
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    slug: "financial-advisory",
    description:
      "Unlock financial value through strategic pricing, capital optimization, and sophisticated financial planning.",
    longDescription:
      "We help organizations maximize financial performance through advanced pricing strategies, working capital optimization, capital structure planning, and financial management improvements. Our approach integrates commercial, operational, and financial perspectives.",
    icon: "DollarSign",
    features: [
      "Pricing strategy and optimization",
      "Working capital management",
      "Capital allocation and planning",
      "Financial process improvement",
      "Profitability enhancement",
      "Treasury and risk management",
    ],
    stats: [
      { label: "EBIT Improvement", value: "22%" },
      { label: "Working Capital Reduction", value: "$2B+" },
      { label: "Pricing Programs", value: "180+" },
    ],
  },
  {
    id: "human-capital",
    title: "Human Capital",
    slug: "human-capital",
    description:
      "Build high-performing organizations by optimizing talent, culture, and organizational capabilities.",
    longDescription:
      "Our Human Capital practice partners with organizations to attract, develop, and retain top talent while building strong cultures and organizational capabilities. We combine talent strategy, organizational design, and change management to drive performance.",
    icon: "Users",
    features: [
      "Talent strategy and acquisition",
      "Organizational design and restructuring",
      "Leadership development",
      "Culture transformation",
      "Performance management systems",
      "Compensation and benefits strategy",
    ],
    stats: [
      { label: "Talent Programs", value: "260+" },
      { label: "Employee Engagement Lift", value: "19%" },
      { label: "Leadership Development Participants", value: "50K+" },
    ],
  },
  {
    id: "innovation-growth",
    title: "Innovation & Growth",
    slug: "innovation-growth",
    description:
      "Accelerate growth through innovation, new business models, and strategic partnerships.",
    longDescription:
      "We help organizations identify and capitalize on innovation opportunities, develop new business models, and scale growth ventures. Our approach combines customer insights, design thinking, and venture strategies to drive sustainable revenue growth.",
    icon: "Lightbulb",
    features: [
      "Innovation strategy and ideation",
      "New product development",
      "Business model innovation",
      "Venture creation and scaling",
      "Ecosystem and partnership strategy",
      "Growth playbooks and execution",
    ],
    stats: [
      { label: "Innovation Initiatives", value: "190+" },
      { label: "New Business Revenue Created", value: "$5B+" },
      { label: "Successful Ventures Launched", value: "85+" },
    ],
  },
  {
    id: "risk-compliance",
    title: "Risk & Compliance",
    slug: "risk-compliance",
    description:
      "Manage risk effectively while maintaining regulatory compliance and governance excellence.",
    longDescription:
      "Our Risk & Compliance practice helps organizations build robust risk management frameworks, ensure regulatory compliance, and strengthen governance. We address regulatory requirements while building resilient organizations prepared for emerging risks.",
    icon: "Shield",
    features: [
      "Risk assessment and management",
      "Regulatory compliance",
      "Data privacy and security",
      "Internal controls and audit",
      "Governance and board effectiveness",
      "Crisis management and resilience",
    ],
    stats: [
      { label: "Risk Assessments", value: "280+" },
      { label: "Compliance Programs Implemented", value: "120+" },
      { label: "Risk Mitigation Success Rate", value: "96%" },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
