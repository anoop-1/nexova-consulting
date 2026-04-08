import { Metadata } from "next";
import Link from "next/link";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { industries } from "@/data/industries";
import { AnimatedText, RevealOnScroll, GlowCard, CounterAnimation } from "@/components/ui";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | NEXOVA Consulting`,
    description: service.longDescription,
    keywords: [
      service.title,
      "consulting",
      "business transformation",
      ...service.features.slice(0, 3),
    ],
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nexova-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nexova-white mb-4">
            Service Not Found
          </h1>
          <Link href="/services" className="btn-primary inline-block">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Get related industries based on service
  const relatedIndustries = industries.filter(
    (industry) =>
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
              Our Expertise
            </p>
          </div>
          <AnimatedText
            text={service.title}
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-nexova-white mb-6">
                Overview
              </h2>
              <p className="text-nexova-silver text-lg leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nexova-white">
              Proven Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.stats.map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="glass-card p-8 text-center rounded-xl">
                  <CounterAnimation
                    target={parseInt(stat.value.replace(/\D/g, ""))}
                    suffix={stat.value.replace(/\d/g, "")}
                    className="text-4xl font-bold text-gradient-accent mb-2"
                  />
                  <p className="text-nexova-silver">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              What We Deliver
            </h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Comprehensive Expertise Across Key Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 0.05}>
                <div className="glass-card-hover p-6 rounded-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <p className="text-nexova-silver group-hover:text-nexova-white transition-colors">
                      {feature}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-label text-nexova-accent mb-4">
                Industries We Serve
              </h2>
              <h3 className="text-3xl font-bold text-nexova-white">
                Industries Benefiting from {service.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedIndustries.slice(0, 6).map((industry, index) => (
                <RevealOnScroll key={industry.id} delay={index * 0.05}>
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="glass-card-hover p-6 rounded-lg group h-full cursor-pointer">
                      <h4 className="text-lg font-bold text-nexova-white mb-2 group-hover:text-gradient-accent transition-all">
                        {industry.name}
                      </h4>
                      <p className="text-sm text-nexova-silver line-clamp-2">
                        {industry.description}
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
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Let's discuss how {service.title} can help you achieve your strategic
            objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
