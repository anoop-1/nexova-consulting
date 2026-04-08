'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 30,
  direction = 'left',
  className = '',
}: InfiniteMarqueeProps) {
  const duration = 100 / speed;
  const isReverse = direction === 'right';

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: isReverse ? [0, 600] : [-600, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* First set */}
        <div className="flex gap-8 flex-shrink-0">{children}</div>

        {/* Duplicate set for seamless loop */}
        <div className="flex gap-8 flex-shrink-0">{children}</div>
      </motion.div>
    </div>
  );
}
