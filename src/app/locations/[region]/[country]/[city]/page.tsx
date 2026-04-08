import { Metadata } from "next";
import Link from "next/link";
import { regions, cities, countries } from "@/data/locations";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

export async function generateStaticParams() {
  const params = [];
  for (const city of cities) {
    const regionObj = regions.find((r) => r.name === city.region);
    const countryObj = countries.find((c) => c.name === city.country);

    if (regionObj && countryObj) {
      params.push({
        region: regionObj.slug,
        country: countryObj.slug,
        city: city.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; country: string; city: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, country: countrySlug, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  const description = `Management consulting in ${city.name}, ${city.country}. NEXOVA provides strategic consulting, digital transformation, M&A advisory, and operations excellence across ${city.keyIndustries.join(", ")} industries.`;

  return {
    title: `Management Consulting in ${city.name} | NEXOVA`,
    description,
    keywords: [
      `${city.name} consulting`,
      `${city.name} management consulting`,
      `strategic consulting ${city.name}`,
      `digital transformation ${city.name}`,
      `business consulting ${city.name}`,
      city.country,
      ...city.keyIndustries,
    ],
    openGraph: {
      title: `Management Consulting in ${city.name} | NEXOVA`,
      description,
      url: `https://nexova.com/locations/${regionSlug}/${countrySlug}/${citySlug}`,
    },
  };
}

export default async function CityDetail({
  params,
}: {
  params: Promise<{ region: string; country: string; city: string }>;
}) {
  const { region: regionSlug, country: countrySlug, city: citySlug } = await params;
  const region = regions.find((r) => r.slug === regionSlug);
  const country = countries.find((c) => c.slug === countrySlug);
  const city = cities.find((c) => c.slug === citySlug);

  if (!region || !country || !city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nexova-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nexova-white mb-4">
            Location Not Found
          </h1>
          <Link href="/locations" className="btn-primary inline-block">
            Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  // Get related cities in same country
  const relatedCities = cities.filter(
    (c) => c.country === city.country && c.slug !== city.slug
  );

  // Structured data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `NEXOVA - ${city.name}`,
    description: `Management consulting firm in ${city.name}`,
    url: `https://nexova.com/locations/${regionSlug}/${countrySlug}/${citySlug}`,
    telephone: "+1 (212) 555-0123",
    address: {
      "@type": "PostalAddress",
      streetAddress: `[Office address in ${city.name}]`,
      addressLocality: city.name,
      addressCountry: city.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    priceRange: "$$$$",
    serviceArea: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-4 text-sm text-nexova-silver flex justify-center gap-2">
            <Link href="/locations" className="hover:text-nexova-accent">
              Locations
            </Link>
            <span>/</span>
            <Link
              href={`/locations/${region.slug}`}
              className="hover:text-nexova-accent"
            >
              {region.name}
            </Link>
            <span>/</span>
            <Link
              href={`/locations/${region.slug}/${countrySlug}`}
              className="hover:text-nexova-accent"
            >
              {country.name}
            </Link>
          </div>
          <AnimatedText
            text={city.name}
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            {city.description}
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <RevealOnScroll>
              <div>
                <h2 className="heading-label text-nexova-accent mb-4">
                  About {city.name}
                </h2>
                <p className="text-nexova-silver text-lg leading-relaxed mb-6">
                  {city.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-gradient-accent">
                      {city.population}
                    </p>
                    <p className="text-xs text-nexova-graphite mt-1">
                      Population
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gradient-accent">
                      {city.timezone}
                    </p>
                    <p className="text-xs text-nexova-graphite mt-1">Timezone</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gradient-accent">
                      {city.country}
                    </p>
                    <p className="text-xs text-nexova-graphite mt-1">Country</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-nexova-white mb-4">
                  NEXOVA in {city.name}
                </h3>
                <p className="text-nexova-silver mb-6 leading-relaxed">
                  Our {city.name} office brings together world-class consultants
                  with deep expertise in local markets and global best practices.
                  We serve leading organizations across key industries, delivering
                  transformational results.
                </p>
                <Link
                  href="/contact"
                  className="text-nexova-accent hover:text-nexova-lime transition-colors font-semibold"
                >
                  Contact our {city.name} team →
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Key Industries */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Key Industries
            </h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Industries We Serve in {city.name}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {city.keyIndustries.map((industry, index) => (
              <RevealOnScroll key={industry} delay={index * 0.05}>
                <div className="glass-card p-6 rounded-lg">
                  <h4 className="font-bold text-nexova-white mb-2">
                    {industry}
                  </h4>
                  <p className="text-sm text-nexova-silver mb-4">
                    Deep expertise helping {industry} companies in {city.name}
                    navigate transformation and unlock growth.
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs text-nexova-accent hover:text-nexova-lime transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Services</h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Consulting Services Available in {city.name}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Strategy Consulting",
                description:
                  "Develop winning strategies that unlock competitive advantage",
              },
              {
                title: "Digital Transformation",
                description: "Reimagine your business through technology",
              },
              {
                title: "M&A Advisory",
                description:
                  "Navigate mergers and acquisitions with confidence",
              },
              {
                title: "Operations Excellence",
                description: "Optimize operations to deliver superior efficiency",
              },
              {
                title: "Financial Advisory",
                description: "Unlock financial value through strategic initiatives",
              },
              {
                title: "Human Capital",
                description:
                  "Build high-performing organizations through talent optimization",
              },
            ].map((service, index) => (
              <RevealOnScroll key={service.title} delay={index * 0.05}>
                <div className="glass-card-hover p-6 rounded-lg group">
                  <h4 className="font-bold text-nexova-white group-hover:text-gradient-accent transition-colors mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-nexova-silver">
                    {service.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Related Cities */}
      {relatedCities.length > 0 && (
        <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-nexova-white">
                Other Offices in {country.name}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCities.slice(0, 3).map((relatedCity) => (
                <RevealOnScroll key={relatedCity.slug}>
                  <Link
                    href={`/locations/${region.slug}/${countrySlug}/${relatedCity.slug}`}
                  >
                    <div className="glass-card-hover p-6 rounded-lg group cursor-pointer">
                      <h4 className="text-lg font-bold text-nexova-white group-hover:text-gradient-accent transition-colors mb-2">
                        {relatedCity.name}
                      </h4>
                      <p className="text-sm text-nexova-silver line-clamp-2">
                        {relatedCity.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-nexova-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-semibold">Visit</span>
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
            Contact our team in {city.name} to discuss how NEXOVA can help you
            achieve your strategic objectives.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
