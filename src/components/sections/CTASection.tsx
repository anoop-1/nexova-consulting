'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.29, 0.98] },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexova-charcoal via-nexova-black to-nexova-charcoal">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-nexova-accent/10 via-transparent to-nexova-purple/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating orbs */}
        <motion.div
          className="orb orb-accent absolute top-10 left-1/4"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="orb orb-purple absolute bottom-20 right-1/4"
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
          <RevealOnScroll>
            <motion.div
              className="text-center space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Main heading */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white"
              >
                Ready to Redefine What's Possible?
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-nexova-silver max-w-2xl mx-auto leading-relaxed"
              >
                Partner with NEXOVA to transform your organization. Our world-class consulting team is ready to help you navigate complexity, capture opportunity, and drive measurable business impact.
              </motion.p>

              {/* Descriptive text */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
              >
                {[
                  {
                    icon: '🎯',
                    title: 'Strategic Focus',
                    description: 'Aligned with your business objectives',
                  },
                  {
                    icon: '⚡',
                    title: 'Rapid Execution',
                    description: 'Quick time to value and impact',
                  },
                  {
                    icon: '🏆',
                    title: 'Proven Results',
                    description: '92% transformation success rate',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-gradient-to-br from-nexova-charcoal/50 to-nexova-black/50 border border-nexova-slate/30 hover:border-nexova-accent/30 transition-colors duration-300"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="font-semibold text-nexova-white text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-nexova-slate">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
              >
                <MagneticButton
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Schedule a Consultation
                </MagneticButton>
                <MagneticButton
                  href="/capabilities"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Download Capabilities Deck
                </MagneticButton>
              </motion.div>

              {/* Trust badge */}
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-nexova-slate"
              >
                <p className="text-sm text-nexova-slate uppercase tracking-widest mb-4">
                  Trusted by leading organizations globally
                </p>
                <motion.div
                  className="flex flex-wrap justify-center gap-4 text-xs text-nexova-silver"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="px-3 py-2 rounded-full bg-nexova-charcoal/50 border border-nexova-slate/30">
                    500+ Clients
                  </span>
                  <span className="px-3 py-2 rounded-full bg-nexova-charcoal/50 border border-nexova-slate/30">
                    35+ Countries
                  </span>
                  <span className="px-3 py-2 rounded-full bg-nexova-charcoal/50 border border-nexova-slate/30">
                    1,200+ Team
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
