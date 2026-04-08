import { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries We Serve | NEXOVA",
  description:
    "NEXOVA serves clients across 24+ industries including financial services, healthcare, technology, energy, manufacturing, retail, and more.",
  keywords:
    "industries, consulting, financial services, technology, healthcare, manufacturing, energy",
};

export default function Industries() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Industries We Serve"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Deep expertise across 24+ industries, serving organizations of all sizes
            and complexities.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <RevealOnScroll key={industry.id} delay={index * 0.02}>
                <Link href={`/industries/${industry.slug}`}>
                  <div className="glass-card-hover p-8 rounded-xl group cursor-pointer h-full flex flex-col transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform">
                      ⚡
                    </div>

                    {/* Industry Name */}
                    <h3 className="text-xl font-bold text-nexova-white mb-3 group-hover:text-gradient-accent transition-colors">
                      {industry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-nexova-silver text-sm leading-relaxed flex-grow mb-4">
                      {industry.description}
                    </p>

                    {/* Key Stats */}
                    <div className="flex gap-4 pt-4 border-t border-nexova-slate/50">
                      <div>
                        <p className="text-sm font-bold text-gradient-accent">
                          {industry.challenges.length}
                        </p>
                        <p className="text-xs text-nexova-graphite">Challenges</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gradient-accent">
                          {industry.solutions.length}
                        </p>
                        <p className="text-xs text-nexova-graphite">Solutions</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gradient-accent">
                          {industry.caseStudies.length}
                        </p>
                        <p className="text-xs text-nexova-graphite">Case Studies</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-nexova-accent group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100">
                      <span className="text-sm font-semibold">Learn More</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industries Matter */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Our Approach
            </h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Deep Industry Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div>
                <h4 className="text-xl font-bold text-nexova-white mb-4">
                  Specialized Knowledge
                </h4>
                <p className="text-nexova-silver leading-relaxed">
                  Our consultants bring deep functional and industry expertise,
                  combined with understanding of your market dynamics, regulatory
                  environment, and competitive landscape. This allows us to deliver
                  solutions tailored to your specific context.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div>
                <h4 className="text-xl font-bold text-nexova-white mb-4">
                  Proven Track Record
                </h4>
                <p className="text-nexova-silver leading-relaxed">
                  We've successfully guided hundreds of organizations across every
                  industry through transformation. We understand the unique
                  challenges you face and bring battle-tested solutions to help you
                  succeed.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Let's Discuss Your Industry Challenges
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Our experts are ready to understand your unique situation and how we can
            help drive transformation.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
