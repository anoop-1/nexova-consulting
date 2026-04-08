'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateX = ((clientY - centerY) / height) * maxTilt;
    const rotateY = ((centerX - clientX) / width) * maxTilt;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
