import { Metadata } from "next";
import Link from "next/link";
import { AnimatedText, RevealOnScroll, GlowCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers at NEXOVA | Join Our Team",
  description:
    "Join NEXOVA and make an impact. Explore career opportunities in consulting, strategy, digital transformation, and more.",
  keywords: "careers, jobs, consulting, NEXOVA, hiring, employment",
  openGraph: {
    title: "Careers at NEXOVA | Join Our Team",
    description:
      "Join NEXOVA and make an impact. Explore career opportunities in consulting, strategy, digital transformation, and more.",
  },
};

const benefits = [
  {
    title: "Growth",
    description:
      "Continuous learning and development opportunities to advance your career with industry leaders.",
    icon: "📈",
  },
  {
    title: "Impact",
    description:
      "Work on meaningful projects that drive real transformation across global organizations.",
    icon: "⭐",
  },
  {
    title: "Culture",
    description:
      "Collaborative, inclusive environment where diverse perspectives are valued and celebrated.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "Access to cutting-edge methodologies and technologies shaping the future of business.",
    icon: "💡",
  },
];

const positions = [
  {
    title: "Senior Management Consultant",
    location: "New York, US",
    type: "Full-time",
    department: "Strategy & Operations",
  },
  {
    title: "Digital Transformation Consultant",
    location: "London, UK",
    type: "Full-time",
    department: "Digital & Technology",
  },
  {
    title: "Business Analyst",
    location: "Singapore",
    type: "Full-time",
    department: "Operations Excellence",
  },
  {
    title: "Associate Consultant",
    location: "Toronto, Canada",
    type: "Full-time",
    department: "Strategy & Operations",
  },
  {
    title: "M&A Advisory Specialist",
    location: "London, UK",
    type: "Full-time",
    department: "Financial Advisory",
  },
  {
    title: "Innovation Manager",
    location: "Dubai, UAE",
    type: "Full-time",
    department: "Innovation & Growth",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do",
  },
  {
    title: "Integrity",
    description: "We conduct business with unwavering honesty and transparency",
  },
  {
    title: "Impact",
    description: "We create meaningful change that drives lasting results",
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and challenge conventional thinking",
  },
];

export default function Careers() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Join NEXOVA"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Help drive transformation and create lasting impact across the world's
            leading organizations.
          </p>
        </div>
      </section>

      {/* Why NEXOVA Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Why NEXOVA
            </h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Build Your Career with Purpose
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <GlowCard className="p-8 flex flex-col items-center text-center h-full">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-nexova-white mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-nexova-silver text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </GlowCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Open Positions
            </h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Current Opportunities
            </h3>
          </div>

          <div className="space-y-4">
            {positions.map((position, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div className="glass-card-hover p-6 rounded-xl group cursor-pointer transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-nexova-white group-hover:text-gradient-accent transition-colors mb-2">
                        {position.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-nexova-silver">
                        <span className="flex items-center gap-1">
                          📍 {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          💼 {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          🏢 {position.department}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-nexova-accent to-nexova-purple text-black font-semibold hover:shadow-lg hover:shadow-nexova-accent/50 transition-all whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Our Culture
            </h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Values That Define Us
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-xl text-center">
                  <h4 className="text-lg font-bold text-nexova-accent mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-nexova-silver">
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-16 glass-card p-12 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-nexova-white mb-4">
                Global Team, Diverse Perspectives
              </h3>
              <p className="text-nexova-silver text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                NEXOVA brings together talented professionals from diverse
                backgrounds, geographies, and experiences. We believe that diversity
                drives innovation and creates better outcomes for our clients and team.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-gradient-accent">50+</p>
                  <p className="text-sm text-nexova-silver mt-2">
                    Nationalities represented
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-accent">45%</p>
                  <p className="text-sm text-nexova-silver mt-2">
                    Women in leadership
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gradient-accent">800+</p>
                  <p className="text-sm text-nexova-silver mt-2">Team members</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nexova-white">
              Our Hiring Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Application",
                description: "Submit your resume and cover letter",
              },
              {
                step: "2",
                title: "Screening",
                description: "Initial review and phone screening",
              },
              {
                step: "3",
                title: "Interviews",
                description: "Meet our team and discuss opportunities",
              },
              {
                step: "4",
                title: "Offer",
                description: "Receive offer and start your journey",
              },
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="glass-card p-6 text-center rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center text-white font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-nexova-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-nexova-silver">
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-nexova-accent to-transparent" />
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Explore open positions and join our team of world-class consultants.
          </p>
          <Link href="#positions" className="btn-primary inline-block">
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}
