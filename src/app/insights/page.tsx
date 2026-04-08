"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { insights } from "@/data/insights";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

const categories = [
  "All",
  "Strategy",
  "Digital",
  "Innovation",
  "Leadership",
  "Industry Trends",
  "Case Study",
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredInsights = useMemo(() => {
    if (selectedCategory === "All") return insights;
    return insights.filter((insight) => insight.category === selectedCategory);
  }, [selectedCategory]);

  const featuredInsights = insights.filter((i) => i.featured).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Insights & Research"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Thought leadership and research on the topics shaping business today.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative py-8 px-4 bg-nexova-dark sticky top-20 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-nexova-accent to-nexova-purple text-black"
                    : "glass-card-hover text-nexova-silver hover:text-nexova-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <RevealOnScroll key={insight.id} delay={index * 0.05}>
                <Link href={`/insights/${insight.slug}`}>
                  <div className="glass-card-hover p-6 rounded-xl group h-full flex flex-col cursor-pointer transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="w-full h-40 bg-gradient-to-br from-nexova-accent/20 to-nexova-purple/20 rounded-lg mb-4 group-hover:from-nexova-accent/30 group-hover:to-nexova-purple/30 transition-colors flex items-center justify-center" />

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-nexova-accent/10 text-nexova-accent border border-nexova-accent/30">
                        {insight.category}
                      </span>
                      {insight.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-nexova-purple/10 text-nexova-purple border border-nexova-purple/30">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-nexova-white mb-3 group-hover:text-gradient-accent transition-colors leading-tight flex-grow">
                      {insight.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-nexova-silver mb-4 line-clamp-2">
                      {insight.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center justify-between pt-4 border-t border-nexova-slate/50 text-xs text-nexova-graphite">
                      <span>{new Date(insight.date).toLocaleDateString()}</span>
                      <span>{insight.readTime} min read</span>
                    </div>

                    {/* Author */}
                    <div className="mt-4 flex items-center gap-2 text-nexova-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs">By {insight.author}</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-20">
              <p className="text-nexova-silver text-lg">
                No insights found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Stay Informed on Business Transformation
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Subscribe to our insights and stay updated on the latest trends, research,
            and thought leadership.
          </p>
          <button className="btn-primary inline-block">
            Subscribe to Our Newsletter
          </button>
        </div>
      </section>
    </div>
  );
}
