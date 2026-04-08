'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

export default function GlobalPresenceSection() {
  // Key locations with approximate coordinates (normalized 0-1)
  const locations = [
    { name: 'New York', x: 0.15, y: 0.35, region: 'North America' },
    { name: 'Toronto', x: 0.12, y: 0.28, region: 'North America' },
    { name: 'London', x: 0.45, y: 0.2, region: 'Europe' },
    { name: 'Frankfurt', x: 0.48, y: 0.22, region: 'Europe' },
    { name: 'Paris', x: 0.45, y: 0.25, region: 'Europe' },
    { name: 'Dubai', x: 0.6, y: 0.45, region: 'MENA' },
    { name: 'Singapore', x: 0.75, y: 0.5, region: 'Asia Pacific' },
    { name: 'Tokyo', x: 0.8, y: 0.35, region: 'Asia Pacific' },
    { name: 'Sydney', x: 0.82, y: 0.65, region: 'Asia Pacific' },
    { name: 'Mumbai', x: 0.65, y: 0.48, region: 'South Asia' },
  ];

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

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-nexova-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-nexova-accent rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-16 md:mb-20 lg:mb-24">
          <div className="space-y-4">
            <div className="heading-label text-nexova-accent">GLOBAL REACH</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white max-w-3xl">
              Consulting Across Continents
            </h2>
          </div>
        </RevealOnScroll>

        {/* World map visualization */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="relative w-full bg-gradient-to-b from-nexova-charcoal to-nexova-black rounded-2xl border border-nexova-slate overflow-hidden aspect-video">
            {/* SVG overlay for the map visualization */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid slice"
              style={{ pointerEvents: 'none' }}
            >
              {/* Simplified world map outlines */}
              <g fill="none" stroke="#2A2A32" strokeWidth="1" opacity="0.5">
                {/* North America */}
                <path d="M 100 200 L 200 200 L 200 350 L 100 350 Z" />
                {/* South America */}
                <path d="M 150 350 L 200 350 L 180 450 L 120 450 Z" />
                {/* Europe */}
                <path d="M 400 100 L 500 100 L 500 300 L 400 300 Z" />
                {/* Africa */}
                <path d="M 450 300 L 550 300 L 550 500 L 450 500 Z" />
                {/* Middle East */}
                <path d="M 550 250 L 600 250 L 600 350 L 550 350 Z" />
                {/* Asia */}
                <path d="M 600 150 L 800 150 L 800 450 L 600 450 Z" />
                {/* Australia */}
                <path d="M 750 450 L 850 450 L 850 550 L 750 550 Z" />
              </g>

              {/* Animated connecting lines between locations */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Draw connecting lines */}
              {locations.map((loc, index) => {
                if (index < locations.length - 1) {
                  const nextLoc = locations[index + 1];
                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1={loc.x * 1000}
                      y1={loc.y * 600}
                      x2={nextLoc.x * 1000}
                      y2={nextLoc.y * 600}
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  );
                }
                return null;
              })}
            </svg>

            {/* Location dots */}
            <motion.div
              className="absolute inset-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  variants={dotVariants}
                  className="absolute group"
                  style={{
                    left: `${location.x * 100}%`,
                    top: `${location.y * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Outer glow pulse */}
                  <motion.div
                    className="absolute w-8 h-8 rounded-full border-2 border-nexova-accent -inset-1"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1,
                      repeat: Infinity,
                    }}
                  />

                  {/* Main dot */}
                  <motion.div
                    className="relative w-4 h-4 bg-nexova-accent rounded-full shadow-lg shadow-nexova-accent/50 cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                  />

                  {/* Tooltip on hover */}
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-nexova-charcoal border border-nexova-accent rounded-lg whitespace-nowrap text-sm text-nexova-light opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    <span className="font-semibold text-nexova-accent">{location.name}</span>
                    <span className="text-nexova-slate text-xs block">{location.region}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { stat: '35+', label: 'Countries', icon: '🌍' },
            { stat: '70+', label: 'Cities', icon: '🏙️' },
            { stat: '6', label: 'Continents', icon: '🗺️' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-nexova-accent to-nexova-purple opacity-0 group-hover:opacity-20 rounded-xl blur transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-nexova-charcoal to-nexova-black rounded-xl p-8 md:p-10 border border-nexova-slate group-hover:border-nexova-accent/50 transition-colors duration-300 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-5xl md:text-6xl font-bold text-nexova-accent mb-2">
                    {item.stat}
                  </div>
                  <p className="text-lg text-nexova-silver font-medium">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-nexova-accent text-nexova-accent font-bold hover:bg-nexova-accent/10 transition-all duration-300"
          >
            Explore Our Offices
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
