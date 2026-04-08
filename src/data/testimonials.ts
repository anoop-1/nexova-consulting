export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  result?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "NEXOVA's digital transformation approach was transformational. They didn't just implement technology—they fundamentally reimagined our operating model. Our decision-making cycle improved 40%, and we've achieved capabilities we didn't think were possible. The team's deep industry expertise combined with operational excellence made a significant difference.",
    author: "Jennifer Hart",
    role: "Chief Operating Officer",
    company: "Global Financial Services Firm",
    image: "/images/testimonials/jennifer-hart.jpg",
    result: "40% faster decision-making",
  },
  {
    id: "2",
    quote:
      "We partnered with NEXOVA on our M&A strategy and integration, and their approach to identifying and realizing synergies was exceptional. They helped us structure the deal, identify realistic synergy opportunities, and execute integration at a pace we didn't think achievable. The acquisition added significant value and integrated successfully.",
    author: "Robert Thompson",
    role: "Chief Executive Officer",
    company: "Mid-Market Manufacturing Company",
    image: "/images/testimonials/robert-thompson.jpg",
    result: "35% synergy realization",
  },
  {
    id: "3",
    quote:
      "NEXOVA's operations excellence program delivered extraordinary results. They combined deep industry knowledge with rigorous analytical frameworks to identify and execute improvements across our operations. Cost savings exceeded our targets, but the organizational capability we built was equally valuable. The team's collaborative approach made implementation smooth.",
    author: "Maria Garcia",
    role: "President, Operations",
    company: "Leading Healthcare Provider",
    image: "/images/testimonials/maria-garcia.jpg",
    result: "28% cost reduction",
  },
  {
    id: "4",
    quote:
      "What impressed me most about NEXOVA was their combination of strategic thinking and execution discipline. On our pricing transformation initiative, they didn't just develop strategy—they guided implementation, trained our teams, and stayed engaged until we achieved results. The pricing improvements exceeded expectations and positioned us competitively.",
    author: "David Kumar",
    role: "Chief Financial Officer",
    company: "Global Technology Company",
    image: "/images/testimonials/david-kumar.jpg",
    result: "22% EBIT improvement",
  },
  {
    id: "5",
    quote:
      "NEXOVA's human capital strategy was crucial to our organizational transformation. They helped us rethink talent strategy, organizational design, and culture. Their expertise in change management ensured successful adoption. Employee engagement improved significantly, and we're now attracting better talent. The investment in this work was one of the best decisions we made.",
    author: "Lisa Wong",
    role: "Chief People Officer",
    company: "Fortune 500 Consumer Goods Company",
    image: "/images/testimonials/lisa-wong.jpg",
    result: "25% improvement in employee engagement",
  },
  {
    id: "6",
    quote:
      "NEXOVA's strategic advisory on our energy transition was invaluable. The team brought deep sector expertise combined with strategic thinking about our business model transformation. They helped us develop a credible path to net-zero while maintaining financial performance. Their counsel was critical as we navigated this fundamental transition.",
    author: "Håkan Svensson",
    role: "Chief Executive Officer",
    company: "Major European Energy Company",
    image: "/images/testimonials/hakan-svensson.jpg",
    result: "Net-zero transition roadmap delivered",
  },
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id);
}

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

export function getFeaturedTestimonials(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count);
}
