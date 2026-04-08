import { Metadata } from "next";
import Link from "next/link";
import { getAllTeamMembers } from "@/data/team";
import { AnimatedText, RevealOnScroll, GlowCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "About NEXOVA | Management Consulting",
  description:
    "Learn about NEXOVA's mission, values, and world-class team of management consultants dedicated to driving business transformation.",
  keywords:
    "about NEXOVA, management consulting firm, business transformation, consulting team",
};

const values = [
  {
    title: "Innovation",
    description:
      "We pioneer new approaches and embrace emerging technologies to solve complex business challenges.",
    icon: "Lightbulb",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in every engagement, delivering measurable impact and sustainable results.",
    icon: "Target",
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with unwavering honesty, transparency, and adherence to ethical principles.",
    icon: "Shield",
  },
  {
    title: "Impact",
    description:
      "We create meaningful, lasting change that drives growth and improves lives across organizations.",
    icon: "Zap",
  },
];

export default function About() {
  const teamMembers = getAllTeamMembers();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="About NEXOVA"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Transforming businesses through strategic insight, operational excellence,
            and human-centered innovation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <RevealOnScroll>
              <div>
                <h2 className="heading-label text-nexova-accent mb-4">Our Story</h2>
                <h3 className="text-3xl font-bold text-nexova-white mb-6">
                  Founded on a Vision for Transformational Impact
                </h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  NEXOVA was established with a singular purpose: to help organizations
                  navigate complexity, accelerate growth, and unlock their full potential.
                  Our founders brought together decades of experience from leading global
                  consulting firms, corporate transformations, and entrepreneurial ventures.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-nexova-white mb-4">Our Approach</h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  We believe lasting change comes from combining deep expertise with an
                  understanding of human dynamics. We partner closely with our clients,
                  challenge conventional thinking, and implement solutions that drive
                  measurable, sustained results.
                </p>
                <p className="text-nexova-silver leading-relaxed">
                  Whether navigating digital transformation, optimizing operations, or
                  creating new growth vectors, we bring both analytical rigor and
                  creative problem-solving to every engagement.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RevealOnScroll>
              <div className="glass-card p-8 text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">500+</div>
                <p className="text-nexova-silver">Active Client Engagements</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="glass-card p-8 text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">45+</div>
                <p className="text-nexova-silver">Countries Served</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="glass-card p-8 text-center">
                <div className="text-4xl font-bold text-gradient-accent mb-2">800+</div>
                <p className="text-nexova-silver">Expert Consultants</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4 bg-nexova-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Principles That Guide Everything We Do
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <GlowCard className="p-8 h-full flex flex-col">
                  <div className="text-3xl mb-4 text-gradient-accent">✦</div>
                  <h4 className="text-xl font-bold text-nexova-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-nexova-silver text-sm leading-relaxed">
                    {value.description}
                  </p>
                </GlowCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Leadership</h2>
            <h3 className="text-4xl font-bold text-nexova-white mb-4">
              World-Class Expertise and Vision
            </h3>
            <p className="text-nexova-silver max-w-2xl mx-auto">
              Our leadership team brings together decades of experience from leading
              organizations, driving transformational change across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 8).map((member, index) => (
              <RevealOnScroll key={member.id} delay={index * 0.05}>
                <div className="glass-card-hover p-6 rounded-xl group cursor-pointer">
                  <div className="bg-gradient-to-br from-nexova-accent to-nexova-purple rounded-lg h-40 mb-4 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity" />
                  <h4 className="font-bold text-nexova-white mb-1">{member.name}</h4>
                  <p className="text-sm text-nexova-accent mb-3">{member.role}</p>
                  <p className="text-xs text-nexova-silver line-clamp-2">
                    {member.bio.substring(0, 80)}...
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-label text-nexova-accent mb-4">Global Presence</h2>
          <h3 className="text-3xl font-bold text-nexova-white mb-6">
            Serving Organizations Worldwide
          </h3>
          <p className="text-nexova-silver text-lg mb-8 leading-relaxed">
            With offices and teams across four continents, NEXOVA brings local expertise
            and global perspective to every engagement. Our distributed model ensures we
            understand regional markets while maintaining consistency in our methodology
            and quality standards.
          </p>
          <Link
            href="/locations"
            className="btn-primary inline-block"
          >
            Explore Our Locations
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Let's talk about how NEXOVA can help you achieve your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
