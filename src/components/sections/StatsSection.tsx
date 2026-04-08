'use client';

import { motion } from 'framer-motion';
import CounterAnimation from '@/components/ui/CounterAnimation';
import ParallaxSection from '@/components/ui/ParallaxSection';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { stats } from '@/data/stats';

export default function StatsSection() {
  const statsArray = Object.values(stats);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <ParallaxSection className="relative w-full py-24 md:py-32 lg:py-40 bg-nexova-charcoal overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="dot-pattern absolute inset-0 opacity-20" />
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-nexova-accent rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-16 md:mb-20 lg:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white">
            Impact That Speaks
          </h2>
          <p className="mt-6 text-lg md:text-xl text-nexova-silver max-w-2xl mx-auto">
            Our track record of transformation and value creation across industries and geographies
          </p>
        </RevealOnScroll>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {statsArray.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-nexova-accent to-nexova-purple opacity-0 group-hover:opacity-20 rounded-xl blur transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-nexova-charcoal via-nexova-black to-nexova-charcoal rounded-xl p-8 md:p-10 border border-nexova-slate group-hover:border-nexova-accent/50 transition-colors duration-300">
                {/* Decorative line accent */}
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-nexova-accent to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
                )}

                {/* Number with counter animation */}
                <div className="mb-4">
                  <CounterAnimation
                    target={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                    prefix={stat.value.startsWith('$') ? '$' : ''}
                    suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                    duration={2.5}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-nexova-accent to-nexova-lime bg-clip-text text-transparent"
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg md:text-xl font-semibold text-nexova-white mb-4">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-nexova-silver text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 md:mt-20 lg:mt-24 h-1 max-w-2xl mx-auto bg-gradient-to-r from-transparent via-nexova-accent to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        />
      </div>
    </ParallaxSection>
  );
}
