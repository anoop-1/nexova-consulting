import { Metadata } from "next";
import Link from "next/link";
import { cities, regions } from "@/data/locations";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

export const metadata: Metadata = {
  title: "Global Consulting Offices & Locations | NEXOVA",
  description:
    "NEXOVA offices and consulting centers in major cities worldwide. Find our locations across North America, Europe, Asia Pacific, and more.",
  keywords:
    "locations, offices, global presence, consulting centers, New York, London, Singapore, Dubai",
};

// Get unique regions and featured cities
const uniqueRegions = Array.from(new Map(regions.map((r) => [r.slug, r])).values());

const featuredCities = [
  "new-york",
  "london",
  "singapore",
  "dubai",
  "tokyo",
  "mumbai",
  "sao-paulo",
  "toronto",
];

export default function Locations() {
  const featuredLocationData = cities.filter((c) =>
    featuredCities.includes(c.slug)
  );

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Global Locations"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Local expertise, global perspective. NEXOVA serves clients across 45+
            countries with dedicated teams in major business hubs worldwide.
          </p>
        </div>
      </section>

      {/* Regions Overview */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">Regions</h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Our Global Presence
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueRegions.map((region, index) => (
              <RevealOnScroll key={region.slug} delay={index * 0.05}>
                <Link href={`/locations/${region.slug}`}>
                  <div className="glass-card-hover p-8 rounded-xl group h-full cursor-pointer">
                    <h4 className="text-xl font-bold text-nexova-white mb-2 group-hover:text-gradient-accent transition-colors">
                      {region.name}
                    </h4>
                    <p className="text-sm text-nexova-silver mb-4 line-clamp-2">
                      {region.description}
                    </p>
                    <div className="flex items-center gap-2 text-nexova-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-semibold">Explore</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              Featured Cities
            </h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Our Major Consulting Hubs
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredLocationData.map((city, index) => (
              <RevealOnScroll key={city.slug} delay={index * 0.05}>
                <Link href={`/locations/${city.region.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${city.country.toLowerCase().replace(/ /g, "-")}/${city.slug}`}>
                  <div className="glass-card-hover p-6 rounded-xl group h-full cursor-pointer">
                    <h4 className="text-2xl font-bold text-nexova-white mb-1 group-hover:text-gradient-accent transition-colors">
                      {city.name}
                    </h4>
                    <p className="text-xs text-nexova-silver mb-4">
                      {city.country}
                    </p>
                    <p className="text-sm text-nexova-silver mb-4 line-clamp-2">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {city.keyIndustries.slice(0, 2).map((industry) => (
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

      {/* Browse by Country */}
      <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-label text-nexova-accent mb-4">
              All Locations
            </h2>
            <h3 className="text-4xl font-bold text-nexova-white">
              Browse by Region & Country
            </h3>
          </div>

          {uniqueRegions.map((region) => {
            const regionCities = cities.filter((c) => c.region === region.name);
            const groupedByCountry = regionCities.reduce(
              (acc, city) => {
                if (!acc[city.country]) {
                  acc[city.country] = [];
                }
                acc[city.country].push(city);
                return acc;
              },
              {} as Record<string, typeof cities>
            );

            return (
              <RevealOnScroll key={region.slug} className="mb-16">
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-nexova-accent mb-8">
                    {region.name}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(groupedByCountry).map(([country, countryCities]) => (
                      <div key={country}>
                        <h4 className="font-bold text-nexova-white mb-4">
                          {country}
                        </h4>
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
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Find Your Local NEXOVA Team
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Contact any of our offices to discuss how we can help transform your
            organization.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
