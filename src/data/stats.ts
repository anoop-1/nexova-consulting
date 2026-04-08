export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface CompanyStats {
  yearsOfExperience: Stat;
  clientsServed: Stat;
  countriesActive: Stat;
  teamSize: Stat;
  revenueImpact: Stat;
  successRate: Stat;
}

export const stats: CompanyStats = {
  yearsOfExperience: {
    label: "Years of Combined Expertise",
    value: "450+",
    description: "Our leadership team brings over 450 years of combined consulting and corporate experience",
  },
  clientsServed: {
    label: "Clients Served",
    value: "500+",
    description: "We've successfully engaged with over 500 organizations globally, from Fortune 500 companies to high-growth enterprises",
  },
  countriesActive: {
    label: "Countries",
    value: "35+",
    description: "NEXOVA maintains active consulting practices across 35+ countries across six continents",
  },
  teamSize: {
    label: "Team Members",
    value: "1,200+",
    description: "Our diverse, talented team of consultants, analysts, and specialists brings deep expertise across industries",
  },
  revenueImpact: {
    label: "Client Revenue Impact",
    value: "$15B+",
    description: "NEXOVA engagements have directly contributed to $15+ billion in measurable client value creation",
  },
  successRate: {
    label: "Transformation Success Rate",
    value: "92%",
    description: "92% of NEXOVA transformation programs achieve or exceed their intended outcomes and business objectives",
  },
};

export const detailedStats = [
  {
    category: "Engagement Portfolio",
    items: [
      {
        metric: "Strategy Engagements",
        value: "280+",
        description: "Corporate strategy, growth strategy, and business transformation engagements completed",
      },
      {
        metric: "Digital Transformations",
        value: "150+",
        description: "Digital transformation and technology modernization programs delivered",
      },
      {
        metric: "M&A Transactions",
        value: "450+",
        description: "M&A due diligence, valuation, structuring, and integration support provided",
      },
      {
        metric: "Operations Programs",
        value: "320+",
        description: "Operations excellence, lean implementation, and cost reduction programs",
      },
    ],
  },
  {
    category: "Industry Focus",
    items: [
      {
        metric: "Financial Services Expertise",
        value: "80+",
        description: "Engagements in banking, capital markets, insurance, and fintech sectors",
      },
      {
        metric: "Healthcare Transformations",
        value: "60+",
        description: "Healthcare provider, payer, and life sciences transformations",
      },
      {
        metric: "Technology Consulting",
        value: "100+",
        description: "Software, technology platforms, and digital-native company strategies",
      },
      {
        metric: "Energy & Resources",
        value: "85+",
        description: "Oil and gas, utilities, mining, and renewable energy consulting",
      },
    ],
  },
  {
    category: "Geographic Reach",
    items: [
      {
        metric: "North America Operations",
        value: "25+ cities",
        description: "Comprehensive coverage across United States and Canada",
      },
      {
        metric: "Europe Presence",
        value: "18+ cities",
        description: "Deep expertise across Western, Central, and Northern Europe",
      },
      {
        metric: "Asia Pacific Operations",
        value: "12+ cities",
        description: "Strong presence in key Asian markets including China, Japan, and India",
      },
      {
        metric: "Emerging Markets",
        value: "15+ cities",
        description: "Growing presence in high-growth emerging markets across regions",
      },
    ],
  },
  {
    category: "Client Results",
    items: [
      {
        metric: "Average Cost Reduction",
        value: "22%",
        description: "Average cost reduction across operations excellence programs",
      },
      {
        metric: "EBITDA Improvement",
        value: "35%",
        description: "Average EBITDA improvement across transformation engagements",
      },
      {
        metric: "Revenue Growth Achieved",
        value: "24%",
        description: "Average revenue growth from strategy engagements",
      },
      {
        metric: "Digital Transformation ROI",
        value: "3.2x",
        description: "Average return on investment for digital transformation programs",
      },
    ],
  },
  {
    category: "Talent & Organization",
    items: [
      {
        metric: "Consulting Partners",
        value: "90+",
        description: "Senior partners and managing consultants with 15+ years average experience",
      },
      {
        metric: "Consultants & Managers",
        value: "350+",
        description: "Experienced consultants and managers from diverse backgrounds and industries",
      },
      {
        metric: "Analysts & Specialists",
        value: "700+",
        description: "Research analysts, subject matter experts, and technical specialists",
      },
      {
        metric: "Diverse Leadership",
        value: "48%",
        description: "Women represented in leadership positions across the organization",
      },
    ],
  },
  {
    category: "Recognition & Impact",
    items: [
      {
        metric: "Client Satisfaction",
        value: "4.8/5",
        description: "Average client satisfaction rating across all engagements",
      },
      {
        metric: "Thought Leadership",
        value: "100+",
        description: "Annual publications including research, articles, and case studies",
      },
      {
        metric: "Speaking Engagements",
        value: "80+",
        description: "Annual speaking engagements at industry conferences and forums",
      },
      {
        metric: "Awards & Recognition",
        value: "25+",
        description: "Industry awards and recognition for consulting excellence and innovation",
      },
    ],
  },
];

export function getStatByKey(key: keyof CompanyStats): Stat {
  return stats[key];
}

export function getAllStats(): Stat[] {
  return Object.values(stats);
}

export function getDetailedStatsCategory(category: string) {
  return detailedStats.find((c) => c.category === category);
}

export function getAllDetailedStats() {
  return detailedStats;
}
