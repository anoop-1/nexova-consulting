'use client';

import { motion } from 'framer-motion';
import { industries } from '@/data/industries';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

// Icon emoji mapping
const iconMap: Record<string, string> = {
  Building2: '🏢',
  Heart: '❤️',
  Cpu: '💻',
  Package: '📦',
  Leaf: '🌿',
  TrendingUp: '📈',
  Zap: '⚡',
  Truck: '🚚',
  DollarSign: '💰',
  Users: '👥',
  Lightbulb: '💡',
  Shield: '🛡️',
};

export default function IndustriesSection() {
  const industryPills = industries.slice(0, 12);
  const featuredIndustries = industries.slice(0, 3);

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.29, 0.98] },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-nexova-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-nexova-lime rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4">
            <div className="heading-label text-nexova-accent">INDUSTRIES</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white max-w-3xl">
              Deep Expertise Across Sectors
            </h2>
          </div>
        </RevealOnScroll>

        {/* Industries pills - horizontal scroll */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="overflow-x-auto pb-4 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12">
            <motion.div className="flex gap-3 min-w-max">
              {industryPills.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  variants={pillVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="px-4 py-3 rounded-full border border-nexova-slate bg-gradient-to-r from-nexova-charcoal to-nexova-black text-nexova-light font-medium whitespace-nowrap hover:border-nexova-accent hover:text-nexova-accent transition-all duration-300 cursor-pointer">
                      {industry.name}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Featured industries cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.15, delayChildren: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredIndustries.map((industry, index) => (
            <motion.div key={industry.id} variants={cardVariants}>
              <Link href={`/industries/${industry.slug}`}>
                <div className="group glass-card glass-card-hover p-8 md:p-10 rounded-xl gradient-border h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-nexova-accent/20 cursor-pointer">
                  {/* Icon */}
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {iconMap[industry.icon] || '✨'}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-nexova-white mb-4">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-nexova-silver text-base leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>

                  {/* Challenges preview */}
                  <div className="mb-6 border-t border-nexova-slate pt-6">
                    <p className="text-xs text-nexova-slate uppercase tracking-widest mb-3">Key Challenges</p>
                    <div className="space-y-2">
                      {industry.challenges.slice(0, 2).map((challenge, i) => (
                        <p key={i} className="text-sm text-nexova-light flex items-start gap-2">
                          <span className="text-nexova-accent mt-1">•</span>
                          <span>{challenge}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="inline-flex items-center gap-2 text-nexova-accent font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Explore →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-nexova-accent text-nexova-accent font-bold hover:bg-nexova-accent/10 transition-all duration-300"
          >
            View All Industries
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
