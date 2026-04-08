'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function RevealOnScroll({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: RevealOnScrollProps) {
  const directionVariants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: 50 },
    right: { opacity: 0, x: -50 },
  };

  const initialVariant = directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial={initialVariant}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.29, 0.98],
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
