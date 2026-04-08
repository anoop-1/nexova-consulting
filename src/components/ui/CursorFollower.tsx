'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsDesktop(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (isDesktop) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed w-16 h-16 rounded-full border-2 border-nexova-accent pointer-events-none z-50 hidden lg:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="absolute inset-2 rounded-full border border-nexova-accent opacity-50" />
    </motion.div>
  );
}
