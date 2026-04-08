'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'accent' | 'purple' | 'lime' | 'coral' | 'gold';
}

const glowColorMap = {
  accent: 'from-nexova-accent to-transparent',
  purple: 'from-nexova-purple to-transparent',
  lime: 'from-nexova-lime to-transparent',
  coral: 'from-nexova-coral to-transparent',
  gold: 'from-nexova-gold to-transparent',
};

export default function GlowCard({
  children,
  className = '',
  glowColor = 'accent',
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top } = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute w-96 h-96 rounded-full bg-gradient-to-br ${glowColorMap[glowColor]} opacity-0 blur-3xl pointer-events-none`}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          opacity: 0.15,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
