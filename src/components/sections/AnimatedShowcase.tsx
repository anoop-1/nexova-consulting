'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import AnimatedGif from '@/components/ui/AnimatedGif';

interface ShowcaseItem {
  variant: 'data-flow' | 'globe-spin' | 'chart-grow' | 'network-pulse';
  label: string;
  description: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    variant: 'data-flow',
    label: 'Data Flow',
    description: 'Real-time data visualization with flowing particle animations',
  },
  {
    variant: 'globe-spin',
    label: 'Global Reach',
    description: 'Wireframe globe representing worldwide presence and connectivity',
  },
  {
    variant: 'chart-grow',
    label: 'Growth Metrics',
    description: 'Animated bar charts demonstrating performance and results',
  },
  {
    variant: 'network-pulse',
    label: 'Network Intelligence',
    description: 'Connected nodes pulsing with energy and interconnectivity',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AnimatedShowcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-nexova-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-nexova-accent/5 to-transparent blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-nexova-purple/5 to-transparent blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          ref={containerRef}
          className="mb-16 md:mb-24 text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="heading-label text-nexova-accent mb-4">
            VISUAL INTELLIGENCE
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-nexova-white"
          >
            Innovation in Motion
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-nexova-silver max-w-2xl mx-auto"
          >
            Experience the power of dynamic visualizations that bring data, strategy, and innovation to life
          </motion.p>
        </motion.div>

        {/* Grid of animated showcases */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {showcaseItems.map((item, index) => (
            <motion.div key={item.variant} variants={itemVariants}>
              <div className="glass-card-hover group relative h-full rounded-2xl border border-nexova-graphite bg-gradient-to-br from-nexova-charcoal/60 to-nexova-black/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-nexova-accent/50">
                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 240, 255, 0.2) 0%, transparent 80%)',
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Animation container */}
                  <div className="mb-8 flex justify-center items-center h-56 md:h-64 rounded-xl bg-gradient-to-br from-nexova-dark to-nexova-charcoal/50 border border-nexova-graphite/50 group-hover:border-nexova-accent/30 transition-colors">
                    <AnimatedGif variant={item.variant} size="lg" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-nexova-white mb-2 group-hover:text-nexova-accent transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm md:text-base text-nexova-silver leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative accent */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-nexova-accent via-nexova-purple to-nexova-lime rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-20 h-px bg-gradient-to-r from-transparent via-nexova-accent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
