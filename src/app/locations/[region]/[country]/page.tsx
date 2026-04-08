import { Metadata } from "next";
import Link from "next/link";
import { regions, cities, countries } from "@/data/locations";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

export async function generateStaticParams() {
  const params = [];
  for (const region of regions) {
    for (const countryName of region.countries) {
      params.push({
        region: region.slug,
        country: countryName.toLowerCase().replace(/ /g, "-"),
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; country: string }>;
}): Promise<Metadata> {
  const { region: regionSlug, country: countrySlug } = await params;
  const region = regions.find((r) => r.slug === regionSlug);
  const country = countries.find((c) => c.slug === countrySlug);

  if (!region || !country) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${country.name} | NEXOVA Consulting Locations`,
    description: `NEXOVA consulting services in ${country.name}. ${country.description}`,
    keywords: [
      country.name,
      region.name,
      "consulting",
      "locations",
      ...country.keyIndustries,
    ],
  };
}

export default async function CountryDetail({
  params,
}: {
  params: Promise<{ region: string; country: string }>;
}) {
  const { region: regionSlug, country: countrySlug } = await params;
  const region = regions.find((r) => r.slug === regionSlug);
  const country = countries.find((c) => c.slug === countrySlug);

  if (!region || !country) {
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

  // Get cities in this country
  const countryCities = cities.filter((c) => c.country === country.name);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-4 text-sm text-nexova-silver">
            <Link href="/locations" className="hover:text-nexova-accent">
              Locations
            </Link>
            {" / "}
            <Link
              href={`/locations/${region.slug}`}
              className="hover:text-nexova-accent"
            >
              {region.name}
            </Link>
          </div>
          <AnimatedText
            text={country.name}
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            {country.description}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div>
                <h2 className="heading-label text-nexova-accent mb-4">Overview</h2>
                <p className="text-nexova-silver text-lg leading-relaxed">
                  NEXOVA brings world-class consulting expertise to {country.name},
                  helping organizations across industries navigate transformation,
                  optimize operations, and unlock sustainable growth. Our local teams
                  combine deep market knowledge with global best practices.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-nexova-white mb-6">
                  Key Industries
                </h3>
                <div className="flex flex-wrap gap-3">
                  {country.keyIndustries.map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-2 rounded-lg bg-nexova-accent/10 text-nexova-accent text-sm font-semibold"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Cities */}
      {countryCities.length > 0 && (
        <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-label text-nexova-accent mb-4">
                Our Cities
              </h2>
              <h3 className="text-3xl font-bold text-nexova-white">
                Offices in {country.name}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {countryCities.map((city, index) => (
                <RevealOnScroll key={city.slug} delay={index * 0.1}>
                  <Link
                    href={`/locations/${region.slug}/${countrySlug}/${city.slug}`}
                  >
                    <div className="glass-card-hover p-8 rounded-xl group h-full cursor-pointer">
                      <h4 className="text-2xl font-bold text-nexova-white mb-2 group-hover:text-gradient-accent transition-colors">
                        {city.name}
                      </h4>
                      <p className="text-xs text-nexova-graphite mb-4">
                        {city.timezone}
                      </p>
                      <p className="text-sm text-nexova-silver mb-6 leading-relaxed">
                        {city.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {city.keyIndustries.slice(0, 3).map((industry) => (
                          <span
                            key={industry}
                            className="text-xs px-2 py-1 rounded-full bg-nexova-accent/10 text-nexova-accent"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-nexova-accent opacity-0 group-hover:opacity-100 transition-opacity">
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

      {/* CTA */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Connect with Our Team in {country.name}
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Let's discuss how NEXOVA can support your organization's growth and
            transformation.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
