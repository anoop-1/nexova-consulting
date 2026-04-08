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
    title: "The Future of Work: Building Resilient Organizations in Uncertain Times",
    slug: "future-of-work-resilient-organizations",
    excerpt:
      "Organizations that thrive will be those that combine human-centric values with technological innovation, creating inclusive cultures where employees can adapt and grow.",
    content: `The workplace has fundamentally transformed. As we navigate persistent economic uncertainty, geopolitical tensions, and rapid technological change, executives face critical questions: How do we build organizations that can adapt quickly? How do we attract and retain top talent in competitive markets? What does true resilience look like?

Based on our work with hundreds of organizations globally, we've identified five core elements of resilient workforces. First, psychological safety—teams that trust each other and their leaders are more innovative and responsive. Second, skill agility—organizations that invest continuously in reskilling and upskilling outperform competitors. Third, flexible operating models that balance in-person collaboration with remote work benefits. Fourth, diversity and inclusion as business imperatives, not just HR initiatives. Fifth, purpose-driven leadership that connects daily work to meaningful outcomes.

Companies implementing these principles report 25% higher employee engagement, 40% faster decision-making, and significantly improved retention of high performers. The organizations winning today aren't those clinging to traditional models—they're the ones reimagining what work looks like.`,
    author: "Sarah Chen",
    date: "2024-12-15",
    readTime: 6,
    category: "Leadership",
    image: "/images/insights/future-of-work.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Navigating the Generative AI Revolution: Strategy for Enterprise Leaders",
    slug: "generative-ai-enterprise-strategy",
    excerpt:
      "Generative AI isn't about replacing workers—it's about augmenting human capability. The organizations capturing value are those implementing AI strategically across operations, not chasing hype.",
    content: `The generative AI landscape evolves almost daily, and executive teams are rightly asking tough questions: What's real and what's hype? Where should we invest? How do we ensure responsible AI implementation? What skills do we need?

Our research with 200+ enterprises shows successful AI strategies share common characteristics. First, they focus on high-impact use cases rather than transforming everything. Second, they pair technical implementation with organizational change management. Third, they address data quality, governance, and ethics upfront. Fourth, they invest in talent—many underestimate the skills gap. Fifth, they maintain a learning mindset, treating early initiatives as pilots.

We're seeing fascinating results: insurance companies processing claims 70% faster, pharmaceutical firms accelerating research timelines by 40%, financial services firms detecting fraud more effectively. But the organizations struggling share one trait: they treated AI as purely a technology problem rather than an organizational transformation challenge.`,
    author: "Michael Rodriguez",
    date: "2024-11-28",
    readTime: 7,
    category: "Digital",
    image: "/images/insights/generative-ai-strategy.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Sustainable Business Strategy: From Compliance to Competitive Advantage",
    slug: "sustainable-strategy-competitive-advantage",
    excerpt:
      "Sustainability isn't a regulatory burden—it's a source of innovation, talent attraction, and new market opportunities for forward-thinking organizations.",
    content: `The sustainability agenda has matured significantly. Early movers treated it primarily as a compliance and risk management exercise. Today's leaders recognize it as a source of competitive advantage, innovation, and stakeholder value.

What changed? Several factors. First, investors—particularly ESG-focused funds—demand sustainability performance. Second, younger talent overwhelmingly prefer employers with strong sustainability commitments. Third, supply chains face climate-related disruptions, creating risks and opportunities. Fourth, customers increasingly consider environmental and social impact in purchasing decisions.

Organizations we work with are integrating sustainability into core strategy, not treating it as a separate initiative. They're identifying decarbonization pathways, redesigning supply chains for resilience and sustainability, developing new sustainable products, and retaining talent through purpose-driven missions. Companies implementing comprehensive sustainability strategies report 15-20% improvement in operational efficiency, accelerated innovation cycles, and access to capital at lower cost.

The transition isn't without challenges—many require significant capital investment and organizational change. But companies treating sustainability strategically rather than reactively are building more resilient, future-ready organizations.`,
    author: "Emma Thompson",
    date: "2024-11-10",
    readTime: 8,
    category: "Strategy",
    image: "/images/insights/sustainable-strategy.jpg",
    featured: true,
  },
  {
    id: "4",
    title: "M&A in Turbulent Times: Value Creation in Volatile Markets",
    slug: "ma-value-creation-volatile-markets",
    excerpt:
      "Successful M&A in volatile markets requires different playbooks. Smart companies are using tighter valuation discipline, faster integration, and clearer synergy focus.",
    content: `Market volatility impacts M&A strategy significantly. Interest rates remain elevated, valuations are more rational, and sellers have limited negotiating power compared to recent years. This creates opportunities for disciplined acquirers.

Our analysis of 150 recent transactions reveals successful acquirers share distinct characteristics. First, they apply rigorous valuation discipline, avoiding overpayment and building in greater margin of safety. Second, they focus on clear, achievable synergies rather than vague strategic benefits. Third, they develop integration plans before closing, not after. Fourth, they maintain strict governance and oversight throughout integration.

What's interesting is that integration timelines have compressed significantly. Organizations that traditionally took 18-24 months are now achieving synergy realization in 12-15 months through faster decision-making, clearer accountability, and more aggressive implementation. We're also seeing companies more willing to make tough talent and organizational decisions quickly, rather than maintaining legacy structures and slowly transitioning teams.

The most successful acquirers in volatile markets balance urgency with rigor, moving faster while maintaining discipline in capital allocation.`,
    author: "James Park",
    date: "2024-10-22",
    readTime: 7,
    category: "Case Study",
    image: "/images/insights/ma-markets.jpg",
    featured: false,
  },
  {
    id: "5",
    title: "Digital-First Operating Models: Reimagining Enterprise Agility",
    slug: "digital-first-operating-models",
    excerpt:
      "Digital transformation isn't about technology—it's about fundamentally reimagining how organizations operate, make decisions, and create value.",
    content: `Many organizations have implemented digital technologies without achieving the agility and innovation they expected. The issue? They applied technology to existing processes rather than reimagining operations from scratch.

Leading organizations are taking different approaches. They're designing operations around digital-first principles: data-driven decision-making at all levels, end-to-end automation of routine processes, rapid experimentation and learning cycles, and flatter organizational structures. They're reorganizing around customer journeys rather than functions. They're building self-directed teams with clear autonomy and accountability.

A financial services firm we worked with restructured from 12 operational layers to 4, implemented real-time data dashboards for decision-making, and automated 60% of routine processing. Result: 40% faster decision-making, 50% reduction in back-office costs, 25% improvement in customer satisfaction, and significant talent attraction improvements. Culture shifted from approval-based to accountability-based.

The transformation was challenging and took 18 months of intensive work. But the competitive advantage it created—particularly in speed to market and customer responsiveness—justifies the investment. Digital-first operating models aren't about having a nice technology stack; they're about building organizations fundamentally designed for the digital age.`,
    author: "Lisa Wang",
    date: "2024-10-05",
    readTime: 8,
    category: "Digital",
    image: "/images/insights/digital-operating-models.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "Supply Chain Resilience: Lessons from Global Disruption",
    slug: "supply-chain-resilience-lessons",
    excerpt:
      "Post-pandemic supply chain lessons show that efficiency and resilience aren't mutually exclusive. Companies are building networks that are both lean and robust.",
    content: `Global supply chains face unprecedented complexity: geopolitical tensions, climate-related disruptions, transportation cost volatility, and accelerating digital transformation. Many companies learned painful lessons about over-reliance on single suppliers or geographic concentrations.

Smart organizations are redesigning supply chains for resilience through several strategies. First, they're diversifying supplier networks and increasing nearshoring while maintaining cost discipline. Second, they're implementing advanced visibility and analytics to predict disruptions. Third, they're building strategic inventory buffers for critical components. Fourth, they're investing in supplier capability development. Fifth, they're integrating supply chain strategy with overall business strategy rather than treating it as a purely operational function.

The counterintuitive finding: resilient supply chains can be as cost-efficient as optimization-focused networks. Companies we work with report 12-18% reduction in total supply chain costs while simultaneously improving resilience through strategic redesign, better supplier partnerships, and smarter inventory management. They're also experiencing fewer disruptions and lower emergency procurement costs.

Building resilient supply chains requires cross-functional collaboration, investment in digital capabilities, and changes in supplier relationships. But companies making these investments are gaining significant competitive advantage.`,
    author: "David Kumar",
    date: "2024-09-18",
    readTime: 7,
    category: "Industry Trends",
    image: "/images/insights/supply-chain-resilience.jpg",
    featured: false,
  },
  {
    id: "7",
    title: "Pricing Strategy in Inflationary Environments: Balancing Margin and Volume",
    slug: "pricing-strategy-inflationary",
    excerpt:
      "Strategic pricing matters more than ever. Companies that combine data analytics with customer insights are winning in inflationary markets.",
    content: `Inflation creates both challenges and opportunities for pricing. Input costs rise, but pricing flexibility depends on competitive dynamics, customer concentration, and brand strength. We've observed significant variation in how companies approach pricing during inflationary periods.

Reactive companies raise prices broadly and hope customers accept it. Proactive companies use this environment strategically. They segment customers based on price sensitivity, implement value-based pricing where they can, maintain price discipline on lower-margin products, and invest in productivity improvements to partially offset cost increases. They use inflation as a catalyst to rethink pricing architecture.

Companies implementing sophisticated pricing strategies during inflation report mixed results on volumes but strong margin improvement—often 3-5% EBIT improvement despite volumes declining 8-12%. What's critical is making pricing decisions systematically rather than reactively. This requires strong data analytics capabilities, clear understanding of willingness-to-pay across customer segments, and organizational alignment on pricing discipline.

We're also seeing interesting market dynamics: some customers are willing to pay premium prices for reliability and supply certainty, while others shift to lower-cost alternatives. Winning companies are succeeding across both segments through differentiated strategies rather than one-size-fits-all approaches.`,
    author: "Rachel Mitchell",
    date: "2024-08-30",
    readTime: 6,
    category: "Strategy",
    image: "/images/insights/pricing-strategy.jpg",
    featured: false,
  },
  {
    id: "8",
    title: "Building High-Performance Sales Organizations: From Quota to Purpose",
    slug: "high-performance-sales-organizations",
    excerpt:
      "Sales organizations that outperform aren't just hitting quota—they're creating customer value, developing talent, and building sustainable competitive advantage.",
    content: `Sales leadership has undergone dramatic transformation. Twenty years ago, successful sales organizations were built on incentive intensity and quota management. Today's high-performing sales organizations integrate quota discipline with customer focus, talent development, and technology enablement.

What separates high-performing sales organizations? First, they hire for potential and mindset, not just experience. Second, they invest heavily in sales enablement—training, tools, insights, and coaching. Third, they use data to improve sales effectiveness, from lead scoring through customer lifetime value. Fourth, they build collaborative culture rather than pure individual competition. Fifth, they connect sales work to customer outcomes and company mission.

A pharmaceutical company we worked with implemented this approach: restructured incentive compensation to balance individual and team metrics, invested in sales enablement including AI-powered customer insights, and shifted leadership culture from command-and-control to coaching. Results: 25% improvement in sales productivity, 18% improvement in sales force retention, 30% improvement in customer satisfaction scores, and notably, significant improvements in ethical business practices and compliance.

The counterintuitive finding: more collaborative, purpose-driven sales organizations often outperform those optimized purely for individual competition. This suggests sales excellence in mature markets requires integration of talent development, customer focus, and sustainable performance.`,
    author: "Marcus Johnson",
    date: "2024-08-12",
    readTime: 7,
    category: "Leadership",
    image: "/images/insights/sales-organizations.jpg",
    featured: false,
  },
  {
    id: "9",
    title: "Private Equity Operational Playbooks: Differentiation in Crowded Markets",
    slug: "private-equity-operational-playbooks",
    excerpt:
      "Successful PE firms are moving beyond cost-cutting to build value through operational excellence, technology, and talent development—differentiating themselves in competitive markets.",
    content: `Private equity competition has intensified significantly. More capital chasing fewer quality deals means value creation must come from operations, not just multiple expansion. Successful PE firms are developing distinctive operational playbooks.

Leading PE investors we work with share common approaches: they conduct thorough operational due diligence before investing, develop detailed value creation plans focused on operational improvements, build experienced operational teams, and manage portfolio companies actively. They focus on revenue growth in addition to cost reduction, viewing this as a source of competitive advantage.

Key areas of operational focus: go-to-market optimization, sales force effectiveness, working capital management, technology infrastructure, supply chain efficiency, and organizational restructuring. The best PE firms don't apply the same playbook to every company; instead, they develop tailored strategies based on industry dynamics, competitive position, and specific improvement opportunities.

Results are significant: typical EBITDA improvement targets are 30-40% over 3-5 year holding periods, with roughly 40% from revenue growth, 35% from margin improvement, and 25% from working capital management. The PE firms commanding premium valuations and strong exit outcomes are those with distinctive operational expertise and systematic approaches to value creation.`,
    author: "Christopher Blake",
    date: "2024-07-25",
    readTime: 8,
    category: "Strategy",
    image: "/images/insights/pe-operational-playbooks.jpg",
    featured: false,
  },
  {
    id: "10",
    title: "The Energy Transition: Strategic Positioning for Oil and Gas Companies",
    slug: "energy-transition-strategic-positioning",
    excerpt:
      "Energy companies face a historic transition. Those positioning strategically around renewables, hydrogen, and energy security are capturing value while managing legacy assets effectively.",
    content: `The energy transition is accelerating. Renewable energy costs have plummeted, corporate and government decarbonization commitments are mounting, and capital is increasingly flowing toward clean energy. Traditional oil and gas companies face existential strategic questions.

Successful energy companies are pursuing multi-faceted strategies. First, they're managing legacy oil and gas assets efficiently and profitably—these remain significant cash generators. Second, they're investing strategically in renewable energy, building meaningful scale in wind, solar, and battery storage. Third, they're exploring adjacencies like hydrogen, carbon capture, and energy storage where they can leverage existing capabilities. Fourth, they're transforming operations toward net-zero, improving efficiency, and reducing emissions. Fifth, they're building capabilities for the energy system of the future.

Companies leading this transition report interesting outcomes. Major oil companies are shifting 5-10% of capital allocation toward low-carbon energy. Renewable energy divisions are reaching meaningful scale and profitability. Some are discovering renewable energy transition enables workforce transition strategies, and employees are often energized by the mission. Supply chain and operational expertise translates well to new energy sources.

The transition is neither simple nor swift, and companies managing it successfully balance urgent transformation with disciplined capital allocation, strong operational execution, and attention to stakeholder concerns. Long-term value creation depends on successful navigation of this fundamental energy transition.`,
    author: "Angela Rodriguez",
    date: "2024-07-08",
    readTime: 8,
    category: "Industry Trends",
    image: "/images/insights/energy-transition.jpg",
    featured: false,
  },
  {
    id: "11",
    title: "Customer Experience in the Digital Age: Beyond Omnichannel",
    slug: "customer-experience-digital-age",
    excerpt:
      "Leading companies understand customer experience isn't about channels—it's about seamless, personalized interactions that create genuine value at every touchpoint.",
    content: `Customer experience has become a critical competitive differentiator. Yet many companies struggle to move beyond functional improvements to the level of integration and personalization that customers increasingly expect.

Successful customer experience strategies combine several elements. First, deep customer insight—not just satisfaction surveys but behavioral data, journey mapping, and emotional intelligence. Second, omnichannel integration where customers move seamlessly between channels. Third, personalization at scale using data and AI. Fourth, proactive service that anticipates needs. Fifth, organizational design where customer experience accountability is clear.

A retail company we worked with implemented comprehensive customer experience transformation: mapped detailed customer journeys, integrated online and physical store data, implemented AI-driven recommendations, trained teams extensively, and restructured incentives around customer metrics. Results: 22% improvement in customer satisfaction, 18% increase in repeat purchase rates, 25% improvement in customer lifetime value, and notably, significantly improved employee engagement because teams could now see their impact on customer experiences.

The best customer experience transformations aren't just digital initiatives—they're organizational transformations that put customers at the center of decision-making, provide frontline teams with tools and data to serve customers effectively, and measure success through customer outcomes, not internal metrics.`,
    author: "Sophie Laurent",
    date: "2024-06-20",
    readTime: 7,
    category: "Innovation",
    image: "/images/insights/customer-experience.jpg",
    featured: false,
  },
  {
    id: "12",
    title: "Building Data-Driven Organizations: From Initiative to Culture",
    slug: "data-driven-organizations-culture",
    excerpt:
      "Data-driven decision-making isn't about analytics tools—it's about building organizational culture where data insights inform strategy, operations, and daily decisions.",
    content: `Many organizations have invested heavily in data and analytics capabilities yet struggle to drive business impact. The issue typically isn't technology—it's organizational readiness and culture.

Truly data-driven organizations share distinct characteristics. First, they build culture where leaders make decisions based on data rather than intuition. Second, they ensure data accessibility and quality—decision-makers have access to reliable data they trust. Third, they invest in analytics talent and training throughout the organization, not just specialized analytics teams. Fourth, they align incentives with data-driven decision-making. Fifth, they maintain governance ensuring data use is ethical and responsible.

A financial services firm we worked with implemented comprehensive data-driven transformation: invested in data infrastructure and governance, hired data scientists and analysts, trained leaders and managers in data literacy, restructured business units to provide clear data accountability, and changed incentive structures to reward data-driven decision-making. Within 18 months, decision-making cycle times reduced 35%, marketing ROI improved 40%, risk identification improved significantly, and organizational agility increased noticeably.

The transformation required sustained commitment and cultural change, not just technology implementation. Organizations succeeding recognize that data-driven culture is competitive advantage—it enables faster learning, better decisions, and rapid adaptation to market changes.`,
    author: "Thomas Anderson",
    date: "2024-06-02",
    readTime: 7,
    category: "Digital",
    image: "/images/insights/data-driven-culture.jpg",
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
