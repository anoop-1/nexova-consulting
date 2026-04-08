import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { AnimatedText, RevealOnScroll, GlowCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Services | NEXOVA Consulting",
  description:
    "Explore NEXOVA's comprehensive consulting services including strategy, digital transformation, M&A advisory, operations excellence, and more.",
  keywords:
    "consulting services, strategy consulting, digital transformation, M&A advisory, operations excellence",
};

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Our Services"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Comprehensive consulting solutions designed to drive transformation,
            optimize operations, and unlock sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <GlowCard className="p-8 h-full glass-card-hover group cursor-pointer transition-all duration-300">
                    {/* Icon Placeholder */}
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                      ✦
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-nexova-white mb-4 group-hover:text-gradient-accent transition-all">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-nexova-silver mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-nexova-accent mb-3 uppercase tracking-wide">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="text-xs text-nexova-silver flex items-start gap-2"
                          >
                            <span className="text-nexova-accent mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 pt-6 border-t border-nexova-slate/50">
                      {service.stats.slice(0, 2).map((stat, i) => (
                        <div key={i}>
                          <p className="text-xl font-bold text-gradient-accent">
                            {stat.value}
                          </p>
                          <p className="text-xs text-nexova-graphite mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-6 flex items-center gap-2 text-nexova-accent group-hover:gap-3 transition-all">
                      <span className="text-sm font-semibold">Learn More</span>
                      <span className="text-lg">→</span>
                    </div>
                  </GlowCard>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NEXOVA */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Why NEXOVA</h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Experience You Can Trust
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RevealOnScroll>
              <div className="glass-card p-8 text-center">
                <div className="text-3xl font-bold text-gradient-accent mb-2">
                  800+
                </div>
                <p className="text-nexova-silver text-sm">
                  Expert consultants with diverse industry and functional expertise
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="glass-card p-8 text-center">
                <div className="text-3xl font-bold text-gradient-accent mb-2">
                  45+
                </div>
                <p className="text-nexova-silver text-sm">
                  Countries with local teams and deep market knowledge
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="glass-card p-8 text-center">
                <div className="text-3xl font-bold text-gradient-accent mb-2">
                  500+
                </div>
                <p className="text-nexova-silver text-sm">
                  Successful transformations across all industries
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
            Get Started Today
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Ready to explore how NEXOVA can help transform your organization?
            Let's discuss your challenges and opportunities.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
