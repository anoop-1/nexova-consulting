'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import GlowCard from '@/components/ui/GlowCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

// Icon emoji mapping
const iconMap: Record<string, string> = {
  Target: '🎯',
  Zap: '⚡',
  Briefcase: '💼',
  Cog: '⚙️',
  DollarSign: '💰',
  Users: '👥',
  Lightbulb: '💡',
  Shield: '🛡️',
};

export default function ServicesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const glowColors: Array<'accent' | 'purple' | 'lime' | 'coral' | 'gold'> = [
    'accent',
    'purple',
    'lime',
    'coral',
    'gold',
    'accent',
    'purple',
    'lime',
  ];

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-nexova-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="dot-pattern absolute inset-0 opacity-10" />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-nexova-purple rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4">
            <div className="heading-label text-nexova-accent">WHAT WE DO</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white max-w-3xl">
              Capabilities That Drive Impact
            </h2>
          </div>
        </RevealOnScroll>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={cardVariants}>
              <GlowCard
                glowColor={glowColors[index % glowColors.length]}
                className="h-full p-8 md:p-10 flex flex-col hover:glass-card-hover transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon] || '✨'}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-nexova-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-nexova-silver text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Key stats */}
                <div className="space-y-3 mb-8 border-t border-nexova-slate pt-6">
                  {service.stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-nexova-slate">{stat.label}</span>
                      <span className="text-nexova-accent font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-nexova-accent font-semibold hover:gap-3 transition-all duration-300 group/link"
                >
                  <span>Learn more</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-nexova-accent to-nexova-purple text-nexova-black font-bold hover:shadow-lg hover:shadow-nexova-accent/50 transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
