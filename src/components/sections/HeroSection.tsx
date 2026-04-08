'use client';

import { motion } from 'framer-motion';
import TypewriterText from '@/components/ui/TypewriterText';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import MagneticButton from '@/components/ui/MagneticButton';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const clientLogos = [
    'Fortune 500',
    'Global Leaders',
    'Tech Pioneers',
    'Market Innovators',
    'Industry Champions',
    'Growth Drivers',
    'Strategic Partners',
    'Enterprise Leaders',
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-nexova-black pt-32 pb-20 md:pt-40 lg:pt-48">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        {/* Orb elements */}
        <motion.div
          className="orb orb-accent absolute top-20 left-10"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="orb orb-purple absolute top-40 right-20"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="orb orb-lime absolute bottom-32 left-1/3"
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div className="grid-pattern absolute inset-0 opacity-20" />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="heading-label text-nexova-accent">
              NEXOVA CONSULTING
            </motion.div>

            {/* Main heading with typewriter effect */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-nexova-white">We Engineer</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-nexova-accent to-nexova-purple">
                  <TypewriterText
                    words={['Market Leaders', 'Digital Pioneers', 'Growth Engines', 'Industry Disruptors']}
                    typingSpeed={60}
                    deletingSpeed={40}
                    pauseDuration={2500}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold"
                  />
                </div>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-nexova-silver max-w-lg leading-relaxed"
            >
              Transform your organization with world-class consulting strategy, digital innovation, and operational excellence. Partner with NEXOVA to unlock transformational growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <MagneticButton
                href="/contact"
                className="btn-primary w-full sm:w-auto"
              >
                Start Your Transformation
              </MagneticButton>
              <MagneticButton
                href="/case-studies"
                className="btn-secondary w-full sm:w-auto"
              >
                View Case Studies
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right side - Animated geometric element */}
          <motion.div
            className="hidden lg:flex items-center justify-center h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80">
              {/* Rotating outer square */}
              <motion.div
                className="absolute inset-0 border-2 border-nexova-accent rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Middle rotating square */}
              <motion.div
                className="absolute inset-12 border-2 border-nexova-purple rounded-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner circle with gradient */}
              <motion.div
                className="absolute inset-24 rounded-full bg-gradient-to-br from-nexova-accent to-nexova-purple"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 40px rgba(0, 240, 255, 0.3)',
                    '0 0 60px rgba(123, 97, 255, 0.4)',
                    '0 0 40px rgba(0, 240, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Decorative dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-nexova-lime rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: (360 / 4) * i + 360,
                    x: 140,
                    y: -2,
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee section - Client trust badges */}
      <motion.div
        className="relative z-20 mt-24 md:mt-32 pt-12 border-t border-nexova-graphite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="mb-4 px-6 md:px-8 lg:px-12">
          <p className="text-sm text-nexova-slate uppercase tracking-widest">Trusted by leading organizations</p>
        </div>
        <InfiniteMarquee speed={25} direction="left" className="py-8 md:py-12">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="px-8 py-3 rounded-lg border border-nexova-slate bg-gradient-to-br from-nexova-charcoal to-nexova-black text-nexova-silver font-medium whitespace-nowrap hover:border-nexova-accent transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </InfiniteMarquee>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-nexova-accent" />
      </motion.div>
    </section>
  );
}
