'use client';

import { motion } from 'framer-motion';
import { insights } from '@/data/insights';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

// Category color mapping
const categoryColorMap: Record<string, { badge: string; text: string }> = {
  Strategy: { badge: 'bg-nexova-accent/20 text-nexova-accent', text: '🎯' },
  Digital: { badge: 'bg-nexova-purple/20 text-nexova-purple', text: '⚡' },
  Innovation: { badge: 'bg-nexova-lime/20 text-nexova-lime', text: '💡' },
  Leadership: { badge: 'bg-nexova-coral/20 text-nexova-coral', text: '👥' },
  'Industry Trends': { badge: 'bg-nexova-gold/20 text-nexova-gold', text: '📈' },
  'Case Study': { badge: 'bg-nexova-accent/20 text-nexova-accent', text: '✓' },
};

export default function InsightsSection() {
  const featuredInsights = insights.slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-nexova-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-nexova-coral rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4">
            <div className="heading-label text-nexova-accent">INSIGHTS</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white max-w-3xl">
              Latest Thinking
            </h2>
            <p className="text-lg text-nexova-silver max-w-2xl mt-6">
              Industry research, strategic perspectives, and transformational insights from our global team
            </p>
          </div>
        </RevealOnScroll>

        {/* Insights cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredInsights.map((insight) => {
            const categoryColor =
              categoryColorMap[insight.category] || categoryColorMap.Strategy;

            return (
              <motion.div key={insight.id} variants={cardVariants}>
                <Link href={`/insights/${insight.slug}`}>
                  <div className="group glass-card glass-card-hover rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-nexova-accent/20 cursor-pointer border border-nexova-slate hover:border-nexova-accent/50">
                    {/* Card content */}
                    <div className="p-8 md:p-10 flex flex-col h-full">
                      {/* Category badge */}
                      <div className="flex items-center gap-2 mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor.badge}`}>
                          {insight.category}
                        </span>
                        <span className="text-lg">{categoryColor.text}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-nexova-white mb-4 line-clamp-2 group-hover:text-nexova-accent transition-colors duration-300">
                        {insight.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-nexova-silver text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                        {insight.excerpt}
                      </p>

                      {/* Meta information */}
                      <div className="border-t border-nexova-slate pt-6 mb-6">
                        <div className="flex flex-col gap-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-nexova-slate">By {insight.author}</span>
                            <span className="text-sm text-nexova-slate">{insight.readTime} min read</span>
                          </div>
                          <span className="text-xs text-nexova-slate">
                            {new Date(insight.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>

                      {/* CTA link */}
                      <motion.div
                        className="inline-flex items-center gap-2 text-nexova-accent font-semibold group-hover:gap-3 transition-all duration-300"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        <span>Read more</span>
                        <span>→</span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-nexova-accent to-nexova-lime text-nexova-black font-bold hover:shadow-lg hover:shadow-nexova-accent/50 transition-all duration-300 hover:scale-105"
          >
            View All Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
