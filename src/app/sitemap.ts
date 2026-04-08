import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";
import { cities, regions, countries } from "@/data/locations";

function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexova.consulting";

  const sitemap: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Main pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Services pages
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Industries pages
    ...industries.map((industry) => ({
      url: `${baseUrl}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Insights pages
    ...insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Locations main page
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Regions pages
    ...regions.map((region) => ({
      url: `${baseUrl}/locations/${region.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Countries pages
    ...countries.map((country) => {
      const regionSlug = slugify(country.region);
      return {
        url: `${baseUrl}/locations/${regionSlug}/${country.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    }),

    // Cities pages
    ...cities.map((city) => {
      const regionSlug = slugify(city.region);
      // Find the country slug from the countries array
      const country = countries.find((c) => c.name === city.country);
      const countrySlug = country?.slug || slugify(city.country);

      return {
        url: `${baseUrl}/locations/${regionSlug}/${countrySlug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    }),
  ];

  return sitemap;
}
