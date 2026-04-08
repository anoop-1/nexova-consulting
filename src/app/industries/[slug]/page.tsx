import { Metadata } from "next";
import Link from "next/link";
import { industries, getIndustryBySlug } from "@/data/industries";
import { services } from "@/data/services";
import { AnimatedText, RevealOnScroll, GlowCard } from "@/components/ui";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} Consulting | NEXOVA`,
    description: industry.longDescription,
    keywords: [
      industry.name,
      "consulting",
      "transformation",
      ...industry.challenges.slice(0, 3),
    ],
  };
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nexova-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nexova-white mb-4">
            Industry Not Found
          </h1>
          <Link href="/industries" className="btn-primary inline-block">
            Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  // Get related services
  const relatedServices = services.filter(
    (service) =>
      industry.relatedServices && industry.relatedServices.includes(service.id)
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-nexova-accent/10 border border-nexova-accent/50 mb-6">
            <p className="text-nexova-accent text-sm font-semibold">
              Industry Expertise
            </p>
          </div>
          <AnimatedText
            text={industry.name}
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed max-w-3xl mx-auto">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-nexova-white mb-6">
                Industry Overview
              </h2>
              <p className="text-nexova-silver text-lg leading-relaxed">
                {industry.longDescription}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Challenges</h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Key Industry Challenges
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div className="glass-card-hover p-6 rounded-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-nexova-accent/20 flex items-center justify-center text-nexova-accent flex-shrink-0">
                      ⚠
                    </div>
                    <p className="text-nexova-silver group-hover:text-nexova-white transition-colors">
                      {challenge}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Solutions</h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              How NEXOVA Helps
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.solutions.map((solution, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div className="glass-card-hover p-6 rounded-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-nexova-accent/20 flex items-center justify-center text-nexova-accent flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-nexova-silver group-hover:text-nexova-white transition-colors">
                      {solution}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Case Studies</h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Real Results in {industry.name}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industry.caseStudies.map((caseStudy, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <GlowCard className="p-8">
                  <div className="mb-4 pb-4 border-b border-nexova-slate/50">
                    <p className="text-sm font-bold text-gradient-accent mb-2">
                      {caseStudy.metric}
                    </p>
                    <h4 className="text-xl font-bold text-nexova-white">
                      {caseStudy.title}
                    </h4>
                  </div>
                  <p className="text-nexova-silver leading-relaxed">
                    {caseStudy.description}
                  </p>
                </GlowCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-label text-nexova-accent mb-4">Services</h2>
              <h3 className="text-3xl font-bold text-nexova-white">
                Relevant NEXOVA Services
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <RevealOnScroll key={service.id} delay={index * 0.05}>
                  <Link href={`/services/${service.slug}`}>
                    <div className="glass-card-hover p-6 rounded-lg group h-full cursor-pointer">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center mb-4 text-lg group-hover:scale-110 transition-transform">
                        ✦
                      </div>
                      <h4 className="text-lg font-bold text-nexova-white mb-2 group-hover:text-gradient-accent transition-all">
                        {service.title}
                      </h4>
                      <p className="text-sm text-nexova-silver line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-nexova-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-semibold">Learn More</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Ready to Transform Your {industry.name} Business?
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Let's discuss how NEXOVA can help you navigate industry challenges and
            seize opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/industries" className="btn-secondary">
              Explore Other Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
