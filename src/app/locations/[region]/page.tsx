import { Metadata } from "next";
import Link from "next/link";
import { regions, cities, countries } from "@/data/locations";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

export async function generateStaticParams() {
  return regions.map((region) => ({
    region: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: regionSlug } = await params;
  const region = regions.find((r) => r.slug === regionSlug);

  if (!region) {
    return {
      title: "Region Not Found",
    };
  }

  return {
    title: `${region.name} | NEXOVA Locations`,
    description: `NEXOVA offices and consulting services in ${region.name}. ${region.description}`,
    keywords: [
      region.name,
      "consulting",
      "locations",
      ...region.countries,
    ],
  };
}

export default async function RegionDetail({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: regionSlug } = await params;
  const region = regions.find((r) => r.slug === regionSlug);

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nexova-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nexova-white mb-4">
            Region Not Found
          </h1>
          <Link href="/locations" className="btn-primary inline-block">
            Back to Locations
          </Link>
        </div>
      </div>
    );
  }

  // Get countries in this region
  const regionCountries = countries.filter((c) => c.region === region.name);
  const regionCities = cities.filter((c) => c.region === region.name);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text={region.name}
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            {region.description}
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
                  NEXOVA brings comprehensive consulting expertise to organizations
                  across {region.name}. Our local teams understand regional market
                  dynamics, regulatory environments, and business cultures while
                  maintaining access to our global resources and methodologies.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-nexova-white mb-6">
                  Key Metrics
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-bold text-gradient-accent">
                      {regionCountries.length}
                    </p>
                    <p className="text-sm text-nexova-silver">Countries</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gradient-accent">
                      {regionCities.length}
                    </p>
                    <p className="text-sm text-nexova-silver">Cities</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Countries in {region.name}
            </h2>
            <h3 className="text-3xl font-bold text-nexova-white">
              Our Offices and Service Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionCountries.map((country, index) => {
              const countrySlug = country.slug;
              return (
                <RevealOnScroll key={country.slug} delay={index * 0.05}>
                  <Link
                    href={`/locations/${region.slug}/${countrySlug}`}
                  >
                    <div className="glass-card-hover p-8 rounded-xl group h-full cursor-pointer">
                      <h4 className="text-xl font-bold text-nexova-white mb-3 group-hover:text-gradient-accent transition-colors">
                        {country.name}
                      </h4>
                      <p className="text-sm text-nexova-silver mb-4">
                        {country.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {country.keyIndustries.slice(0, 2).map((industry) => (
                          <span
                            key={industry}
                            className="text-xs px-2 py-1 rounded-full bg-nexova-accent/10 text-nexova-accent"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-nexova-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs font-semibold">Explore</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities List */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nexova-white">
              All Cities in {region.name}
            </h2>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(
                regionCities.reduce(
                  (acc, city) => {
                    if (!acc[city.country]) {
                      acc[city.country] = [];
                    }
                    acc[city.country].push(city);
                    return acc;
                  },
                  {} as Record<string, typeof regionCities>
                )
              ).map(([country, countryCities]) => (
                <div key={country}>
                  <h4 className="font-bold text-nexova-white mb-4">{country}</h4>
                  <ul className="space-y-2">
                    {countryCities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/locations/${region.slug}/${country
                            .toLowerCase()
                            .replace(/ /g, "-")}/${city.slug}`}
                          className="text-sm text-nexova-silver hover:text-nexova-accent transition-colors"
                        >
                          {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Connect with Our {region.name} Team
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Let's discuss how NEXOVA can support your organization's
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
