export interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: "Strategy" | "Digital" | "Innovation" | "Leadership" | "Industry Trends" | "Case Study";
  image: string;
  featured: boolean;
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "Case Study: How a $4B Petrochemical Firm Reduced Turnaround Costs by 32%",
    slug: "petrochemical-turnaround-cost-reduction",
    excerpt:
      "A major Gulf Coast petrochemical producer engaged NEXOVA to overhaul its turnaround planning process, resulting in $87M in savings over two maintenance cycles.",
    content: `A $4 billion petrochemical company operating six production facilities across the Gulf Coast was facing escalating turnaround costs that had grown 18% year-over-year for three consecutive cycles. Planned shutdowns were consistently running over budget and past schedule, costing the company an estimated $12M per day in lost production.

NEXOVA was engaged to conduct a comprehensive assessment of the turnaround planning and execution process. Our team embedded with the client's operations, maintenance, and procurement teams for 14 weeks.

**The Challenge:** Turnaround planning was fragmented across siloed departments. Scope creep was endemic — work lists grew 40-60% between initial scoping and execution. Contractor management lacked standardized performance metrics, and procurement of long-lead materials consistently started too late, forcing premium pricing.

**Our Approach:** We implemented a structured turnaround management framework built on four pillars: integrated planning with clear scope freeze milestones, data-driven contractor selection and performance management, strategic procurement with 18-month forward planning, and real-time execution monitoring dashboards.

**Results:** Over the next two turnaround cycles, the client achieved a 32% reduction in total turnaround costs ($87M cumulative savings), reduced average turnaround duration by 8 days, improved safety performance with zero lost-time incidents, and established a repeatable framework now adopted across all six facilities. The client's CFO noted this was "the single highest-ROI consulting engagement in the company's history."`,
    author: "Rajeev K",
    date: "2026-03-28",
    readTime: 6,
    category: "Case Study",
    image: "/images/insights/petrochemical-turnaround.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Case Study: Digital Transformation of a Mid-Market Manufacturing Group",
    slug: "manufacturing-digital-transformation",
    excerpt:
      "NEXOVA guided a 2,400-employee manufacturing group through a full-scale ERP migration and operational digitization, achieving ROI within 14 months.",
    content: `A privately held manufacturing group with $800M in revenue and operations across five states was running critical business processes on a patchwork of legacy systems — some dating back 15 years. Manual data entry, disconnected shop floor systems, and limited real-time visibility were creating inefficiencies estimated at $23M annually.

The CEO engaged NEXOVA to design and oversee a comprehensive digital transformation program.

**The Challenge:** The organization had attempted two prior ERP implementations that failed — one abandoned mid-project, another deployed but never fully adopted. Employee trust in technology initiatives was low. Meanwhile, competitors were pulling ahead with smart manufacturing capabilities.

**Our Approach:** Rather than leading with technology, we started with operating model redesign. We mapped 340+ business processes, identified 78 that were critical to competitive advantage, and redesigned them before selecting technology. We then managed a phased ERP implementation across 14 months, with intensive change management including 2,000+ hours of role-specific training.

**Results:** The client achieved full ERP go-live across all facilities with 94% user adoption within 90 days. Inventory carrying costs dropped 28%, order-to-cash cycle reduced from 45 days to 29 days, production planning accuracy improved from 72% to 91%, and the company reported $31M in quantified benefits in the first full year. The transformation has since become a template we've replicated for three additional manufacturing clients.`,
    author: "Anoop R",
    date: "2026-03-15",
    readTime: 7,
    category: "Case Study",
    image: "/images/insights/manufacturing-digital.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "NEXOVA Opens Houston Office to Serve Growing Energy Sector Demand",
    slug: "nexova-houston-office-launch",
    excerpt:
      "Expanding our Gulf Coast presence, NEXOVA's new Houston office will serve energy, petrochemical, and industrial clients across the region.",
    content: `NEXOVA is pleased to announce the opening of our Houston, Texas office, reinforcing our commitment to serving the energy, petrochemical, and industrial sectors across the Gulf Coast and beyond.

The Houston office, our fourth in North America, will be led by a dedicated team of partners and consultants with deep expertise in upstream and downstream oil & gas, petrochemical operations, renewable energy transition, and industrial technology.

"Houston is the energy capital of the world, and our clients here are navigating some of the most complex strategic challenges in any industry," said Rajeev K, Managing Director. "From optimizing refinery operations to planning multi-billion dollar energy transition investments, these organizations need advisors who understand both the technical complexity and the strategic implications. That's what NEXOVA delivers."

The office will initially house 35 consultants and is expected to grow to 80+ within 18 months. Key practice areas include operational excellence for refining and petrochemical operations, energy transition strategy, digital twin and predictive maintenance advisory, M&A support for upstream and midstream transactions, and organizational transformation for large-scale capital projects.

NEXOVA has served Gulf Coast energy clients for over five years from our New York and Dubai offices. The Houston presence enables deeper client relationships and faster response to regional market dynamics.`,
    author: "NEXOVA Editorial",
    date: "2026-03-01",
    readTime: 4,
    category: "Industry Trends",
    image: "/images/insights/houston-office.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "Case Study: Post-Merger Integration for a $1.2B Financial Services Acquisition",
    slug: "financial-services-post-merger-integration",
    excerpt:
      "NEXOVA managed the end-to-end integration of two mid-market financial services firms, realizing 115% of projected synergies within 18 months.",
    content: `When a $3.2B regional financial services company acquired a $1.2B competitor, the deal thesis hinged on $180M in projected annual synergies — cost rationalization, cross-selling, and technology platform consolidation. The acquirer engaged NEXOVA to lead the post-merger integration (PMI).

**The Challenge:** The two firms had overlapping branch networks, incompatible technology platforms, and fundamentally different cultures — one entrepreneurial and decentralized, the other process-driven and hierarchical. Prior acquisitions by the acquirer had underperformed, with synergy realization averaging only 60% of projections.

**Our Approach:** We deployed a 22-person integration management office (IMO) organized around five workstreams: organization and talent, technology and operations, commercial and revenue, finance and risk, and culture and communication. We established a 100-day plan with clear milestones and executive accountability.

**Key decisions we drove:** Branch network rationalization (closing 47 overlapping locations while retaining 92% of affected customer relationships), technology platform migration completed in 11 months versus the typical 24-month timeline, unified sales approach that increased cross-sell rates 34%, and a cultural integration program that maintained employee engagement scores above industry benchmarks.

**Results:** The integration realized $207M in annual run-rate synergies — 115% of the original projection — within 18 months. Customer attrition was held to 4.2% versus the 8-12% industry average for comparable transactions. The deal was subsequently cited by analysts as "a textbook integration" and contributed to a 28% increase in the acquirer's share price over the following year.`,
    author: "Elena Rossi",
    date: "2026-02-18",
    readTime: 8,
    category: "Case Study",
    image: "/images/insights/pmi-financial-services.jpg",
    featured: false,
  },
  {
    id: "5",
    title: "The Generative AI Playbook for Enterprise Leaders: Lessons from 50 Implementations",
    slug: "generative-ai-enterprise-playbook",
    excerpt:
      "After advising 50+ enterprises on AI strategy, we've identified the patterns that separate successful implementations from expensive experiments.",
    content: `Over the past 18 months, NEXOVA has advised more than 50 enterprises across financial services, energy, healthcare, and manufacturing on generative AI strategy and implementation. The results vary dramatically — some organizations are generating measurable ROI, while others have invested millions with little to show for it.

**What separates success from failure?**

First, successful organizations start with business problems, not technology. They identify specific, high-value use cases where AI can measurably improve outcomes — claims processing, contract analysis, customer service, engineering documentation — rather than pursuing "AI transformation" as an abstract goal.

Second, they invest in data readiness before model deployment. The organizations struggling most are those that underestimated data quality, governance, and integration requirements. In our experience, 60-70% of the total effort in a successful AI implementation is data and infrastructure work.

Third, they manage change aggressively. AI adoption requires new workflows, new skills, and new ways of measuring performance. Organizations that treat AI as a technology deployment miss the organizational transformation required for adoption.

Fourth, they maintain human oversight. The most effective implementations augment human decision-making rather than replacing it entirely, particularly in regulated industries.

**Quantified outcomes from our client base:** Average 40% reduction in processing time for document-intensive workflows, 25-35% improvement in customer service first-contact resolution, 15-20% improvement in forecasting accuracy for supply chain and demand planning, and significant improvements in employee satisfaction when AI handles routine tasks.

The AI opportunity is real, but capturing it requires strategic discipline, not just technical capability.`,
    author: "Michael Park",
    date: "2026-02-05",
    readTime: 7,
    category: "Digital",
    image: "/images/insights/ai-enterprise-playbook.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "Case Study: Operational Excellence Program Saves Logistics Firm $42M Annually",
    slug: "logistics-operational-excellence",
    excerpt:
      "A national logistics and distribution company engaged NEXOVA to redesign its network and operations, yielding $42M in annual savings and 23% faster delivery times.",
    content: `A $2.1B logistics and distribution company with 85 facilities nationwide was losing market share to more agile competitors. Despite significant revenue growth over the prior decade, margins had compressed from 11.2% to 7.8%, and customer satisfaction scores were declining.

**The Challenge:** The distribution network had grown through acquisition, resulting in redundant facilities, inconsistent processes, and fragmented technology. Route optimization was largely manual, warehouse operations varied significantly in productivity across locations, and management reporting was 2-3 weeks delayed.

**Our Approach:** NEXOVA conducted a 10-week diagnostic covering network design, warehouse operations, transportation management, and technology infrastructure. We then designed and implemented a 15-month operational excellence program.

**Key initiatives:** Network redesign consolidating 85 facilities to 62 while improving geographic coverage, standardized warehouse operating procedures with lean management systems, implementation of AI-powered route optimization reducing fleet miles by 18%, real-time performance dashboards replacing monthly reporting, and a frontline leadership development program for 340 supervisors.

**Results:** Annual cost savings of $42M (split roughly 40% network, 35% operations, 25% transportation), operating margin improvement from 7.8% to 10.4%, average delivery time reduced 23%, customer satisfaction scores improved from 72 to 86 (NPS equivalent), and employee turnover at distribution centers decreased 31%. The CEO described the engagement as "transformational — it changed how we think about operations as a competitive weapon, not just a cost center."`,
    author: "Marcus Johnson",
    date: "2026-01-22",
    readTime: 7,
    category: "Case Study",
    image: "/images/insights/logistics-excellence.jpg",
    featured: false,
  },
  {
    id: "7",
    title: "NEXOVA Named to Vault Consulting 50 for Third Consecutive Year",
    slug: "nexova-vault-consulting-50-recognition",
    excerpt:
      "NEXOVA has been recognized among the top 50 consulting firms globally by Vault for the third year running, with top marks in client impact and culture.",
    content: `NEXOVA has been named to the Vault Consulting 50 for the third consecutive year, ranking among the top management consulting firms globally. The firm received particularly high marks in client impact, innovation, and workplace culture.

"This recognition reflects the extraordinary work of our people and the trust our clients place in us," said Rajeev K, Managing Director. "We've grown significantly over the past three years, but what hasn't changed is our commitment to delivering measurable impact on every engagement."

Key highlights from the Vault assessment include top-quartile rankings in client satisfaction and engagement impact, recognition for innovation in AI-powered consulting methodologies, strong marks for diversity, equity, and inclusion initiatives, and above-average scores for work-life balance and professional development.

NEXOVA has grown from 180 to over 620 consultants globally in the past four years, while maintaining client satisfaction scores above 4.7/5.0. The firm's revenue has grown at a compound annual rate of 34%, driven by expansion in energy, financial services, and technology sectors.

"What differentiates us is that we measure success by client outcomes, not by hours billed," added Anoop R, General Manager. "Every engagement has a clear set of quantified objectives, and we hold ourselves accountable to delivering against them. That discipline is what drives both client loyalty and our team's professional satisfaction."`,
    author: "NEXOVA Editorial",
    date: "2026-01-10",
    readTime: 4,
    category: "Leadership",
    image: "/images/insights/vault-recognition.jpg",
    featured: false,
  },
  {
    id: "8",
    title: "The Energy Transition: Strategic Positioning for Oil and Gas Companies",
    slug: "energy-transition-strategic-positioning",
    excerpt:
      "Energy companies face a historic transition. Those positioning strategically around renewables, hydrogen, and energy security are capturing value while managing legacy assets effectively.",
    content: `The energy transition is accelerating. Renewable energy costs have plummeted, corporate and government decarbonization commitments are mounting, and capital is increasingly flowing toward clean energy. Traditional oil and gas companies face existential strategic questions.

Successful energy companies are pursuing multi-faceted strategies. First, they're managing legacy oil and gas assets efficiently and profitably — these remain significant cash generators. Second, they're investing strategically in renewable energy, building meaningful scale in wind, solar, and battery storage. Third, they're exploring adjacencies like hydrogen, carbon capture, and energy storage where they can leverage existing capabilities. Fourth, they're transforming operations toward net-zero, improving efficiency, and reducing emissions.

NEXOVA has advised 15+ energy companies on transition strategy over the past two years. The common thread among successful clients: they treat the energy transition as a strategic opportunity rather than a compliance burden. Companies that proactively build transition roadmaps — balancing near-term cash generation with long-term portfolio repositioning — are creating significantly more shareholder value than those taking a wait-and-see approach.

Our analysis shows companies leading the transition are allocating 8-15% of capital expenditure toward low-carbon initiatives, achieving 20-30% improvements in operational emissions through digitization and process optimization, and building new revenue streams that are growing at 25-40% annually. The transition is neither simple nor swift, but companies managing it successfully are building more resilient, future-ready organizations.`,
    author: "Rajeev K",
    date: "2025-12-15",
    readTime: 8,
    category: "Industry Trends",
    image: "/images/insights/energy-transition.jpg",
    featured: false,
  },
  {
    id: "9",
    title: "Case Study: Healthcare System Reduces Patient Wait Times by 41% Through Process Redesign",
    slug: "healthcare-process-redesign-wait-times",
    excerpt:
      "A 12-hospital healthcare system partnered with NEXOVA to redesign patient flow and scheduling processes, dramatically improving patient experience and staff utilization.",
    content: `A regional healthcare system operating 12 hospitals and 45 outpatient clinics was facing mounting patient dissatisfaction driven primarily by long wait times. Average emergency department wait times had reached 4.2 hours, outpatient appointment scheduling backlogs extended 6-8 weeks, and physician utilization varied from 55% to 92% across facilities with no clear explanation.

**The Challenge:** The system had grown through acquisition, inheriting different scheduling systems, staffing models, and patient flow processes at each facility. Leadership lacked visibility into real-time capacity and demand patterns, making optimization nearly impossible.

**Our Approach:** NEXOVA deployed a team combining healthcare operations expertise with advanced analytics capabilities. We analyzed 2.4 million patient encounters over 18 months, mapped patient flow across all facilities, and identified systemic bottlenecks.

**Key interventions:** Predictive demand modeling allowing proactive staffing adjustments 72 hours in advance, redesigned triage and patient flow protocols in emergency departments, centralized scheduling platform with AI-powered appointment optimization, standardized capacity management dashboards for real-time decision-making, and physician schedule optimization balancing patient access with provider preferences.

**Results:** Emergency department average wait times reduced from 4.2 hours to 2.5 hours (41% improvement), outpatient scheduling backlog reduced from 6-8 weeks to 2-3 weeks, physician utilization normalized to 78-85% across all facilities, patient satisfaction scores (HCAHPS) improved by 18 percentile points, and staff overtime costs reduced 24%. The system's CMO noted: "NEXOVA helped us see that this wasn't a resource problem — it was a systems design problem. We had the capacity; we just weren't deploying it intelligently."`,
    author: "Dr. Priya Patel",
    date: "2025-11-28",
    readTime: 8,
    category: "Case Study",
    image: "/images/insights/healthcare-process.jpg",
    featured: false,
  },
  {
    id: "10",
    title: "Building Resilient Supply Chains: Lessons from 2025's Disruptions",
    slug: "resilient-supply-chains-2025-lessons",
    excerpt:
      "The companies that weathered 2025's supply chain shocks best weren't just lucky — they had invested in visibility, diversification, and agile response capabilities.",
    content: `2025 delivered another year of supply chain volatility — Red Sea shipping disruptions, semiconductor allocation challenges, and raw material price swings tested even well-prepared organizations. NEXOVA worked with 30+ companies across manufacturing, retail, and technology to build supply chain resilience, and the patterns of success and failure were remarkably consistent.

**What resilient companies did differently:**

They invested in end-to-end visibility before they needed it. Companies with real-time supply chain visibility platforms responded to disruptions 3-5x faster than those relying on manual tracking and supplier communications.

They diversified deliberately. Not just adding suppliers, but strategically building dual-source or multi-source capabilities for critical materials and components. The cost premium for diversification (typically 3-8%) was far less than the cost of disruption.

They built scenario planning into regular operations. Rather than treating disruption as an exception, resilient companies maintained standing scenario plans for their top 10 risk scenarios and ran quarterly simulations.

They invested in supplier relationships. Companies with deep, partnership-oriented supplier relationships received priority allocation during shortages and early warning of potential disruptions.

**Quantified impact from our client base:** Companies implementing comprehensive resilience programs experienced 60% fewer production disruptions, 45% faster recovery when disruptions occurred, 12-18% reduction in total supply chain costs through better planning and reduced emergency procurement, and measurably stronger customer relationships due to reliable delivery performance.

The lesson is clear: supply chain resilience isn't a cost — it's a competitive advantage that pays dividends continuously, not just during crises.`,
    author: "Anoop R",
    date: "2025-11-10",
    readTime: 7,
    category: "Industry Trends",
    image: "/images/insights/supply-chain-resilience.jpg",
    featured: false,
  },
  {
    id: "11",
    title: "Private Equity Value Creation: Moving Beyond the Cost-Cutting Playbook",
    slug: "private-equity-value-creation-beyond-cost-cutting",
    excerpt:
      "The PE firms generating top-quartile returns are building value through revenue growth, operational excellence, and strategic repositioning — not just EBITDA adjustments.",
    content: `Private equity competition has intensified significantly. More capital chasing fewer quality deals means value creation must come from operations, not just financial engineering or multiple expansion. NEXOVA works with 20+ PE portfolio companies annually, and the shift in value creation approaches is unmistakable.

**The old playbook:** Acquire at reasonable multiples, cut costs aggressively, optimize working capital, and exit at higher multiples driven by market appreciation. This approach worked in an era of declining interest rates and expanding multiples. It's insufficient today.

**The new playbook:** Leading PE investors we work with are focused on revenue acceleration (not just protection), go-to-market optimization, pricing strategy, digital capability building, talent upgrading, and operational excellence that drives both cost efficiency and growth capacity.

Key areas where NEXOVA drives value: commercial due diligence that identifies true growth potential (not just validates management projections), 100-day plans that build momentum and credibility with management teams, sales force effectiveness programs that typically yield 15-25% revenue uplift, operational excellence programs targeting 200-400bps of margin improvement, and technology roadmaps that modernize operations without massive capital requirements.

**Results from our PE practice:** Average EBITDA improvement of 35-45% over 3-year hold periods, with 50%+ of value creation from revenue growth rather than cost reduction. Our portfolio companies consistently outperform sector benchmarks on both growth and margin metrics.

The PE firms commanding premium carry and strong LP relationships are those with distinctive operational capabilities and systematic approaches to value creation.`,
    author: "Elena Rossi",
    date: "2025-10-22",
    readTime: 7,
    category: "Strategy",
    image: "/images/insights/pe-value-creation.jpg",
    featured: false,
  },
  {
    id: "12",
    title: "NEXOVA Launches AI-Powered Consulting Methodology, Reducing Engagement Timelines by 30%",
    slug: "nexova-ai-powered-methodology-launch",
    excerpt:
      "Our proprietary AI-assisted diagnostic and analysis platform allows NEXOVA consultants to deliver deeper insights faster, passing the time and cost savings to clients.",
    content: `NEXOVA today announced the launch of NEXOVA Intelligence, a proprietary AI-powered consulting methodology that integrates advanced analytics, machine learning, and generative AI into every phase of client engagements — from initial diagnostic through implementation and monitoring.

"Consulting has been ripe for its own transformation," said Anoop R, General Manager. "Our clients expect us to bring the same digital capabilities we recommend to them. NEXOVA Intelligence does exactly that — it makes our consultants more effective, our analyses deeper, and our recommendations more precisely targeted."

**Key capabilities of NEXOVA Intelligence:**

Rapid diagnostic analysis that processes financial data, operational metrics, and industry benchmarks in hours rather than weeks. Pattern recognition across our database of 500+ prior engagements to identify relevant precedents and proven approaches. Real-time implementation tracking with predictive analytics that flag risks before they become problems. Automated synthesis of market research, competitive intelligence, and regulatory developments.

**Early results are compelling:** Diagnostic phase timelines reduced by 45%, allowing faster time-to-insight for clients. Analysis depth increased — consultants can evaluate 10x more data points and scenarios. Implementation monitoring has become proactive rather than reactive, with AI flagging potential issues an average of 3 weeks before they would typically surface.

"This isn't about replacing consultants with AI," emphasized Rajeev K, Managing Director. "It's about making our people dramatically more effective. The judgment, creativity, and client relationships that define great consulting remain fundamentally human. But the speed, depth, and accuracy of analysis — that's where AI is transformative."

NEXOVA Intelligence is now deployed across all practice areas and client engagements globally.`,
    author: "NEXOVA Editorial",
    date: "2025-10-05",
    readTime: 5,
    category: "Innovation",
    image: "/images/insights/nexova-intelligence.jpg",
    featured: false,
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export function getFeaturedInsights(): Insight[] {
  return insights.filter((insight) => insight.featured).slice(0, 3);
}

export function getInsightsByCategory(category: Insight["category"]): Insight[] {
  return insights.filter((insight) => insight.category === category);
}

export function getAllInsightSlugs(): string[] {
  return insights.map((insight) => insight.slug);
}

export function getLatestInsights(count: number = 5): Insight[] {
  return [...insights].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
