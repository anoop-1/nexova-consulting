'use client';

import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface Shape {
  id: number;
  type: 'hexagon' | 'triangle' | 'circle';
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  color: string;
}

/**
 * LottieHero: Elaborate animated abstract visualization for hero section
 * Features morphing geometric shapes, flowing particle lines, and premium animations
 */
export default function LottieHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stable random positions and animations
  const shapes = useMemo<Shape[]>(() => {
    const colors = [
      '#00F0FF', // nexova-accent
      '#7B61FF', // nexova-purple
      '#BFFF00', // nexova-lime
    ];

    return [
      {
        id: 1,
        type: 'hexagon',
        x: 20,
        y: 30,
        size: 60,
        rotation: 0,
        duration: 8,
        color: colors[0],
      },
      {
        id: 2,
        type: 'circle',
        x: 80,
        y: 20,
        size: 50,
        rotation: 0,
        duration: 10,
        color: colors[1],
      },
      {
        id: 3,
        type: 'triangle',
        x: 70,
        y: 70,
        size: 55,
        rotation: 0,
        duration: 12,
        color: colors[2],
      },
      {
        id: 4,
        type: 'hexagon',
        x: 25,
        y: 75,
        size: 45,
        rotation: 0,
        duration: 9,
        color: colors[1],
      },
    ];
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, []);

  if (!mounted) {
    return <div className="w-full h-96 bg-gradient-to-br from-nexova-charcoal to-nexova-black rounded-2xl" />;
  }

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-nexova-charcoal to-nexova-black rounded-2xl overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00F0FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* SVG container for shapes */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BFFF00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BFFF00" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Morphing shapes */}
        {shapes.map((shape) => {
          let shapeElement;

          const groupVariants = {
            animate: {
              x: [0, 15 * Math.cos(shape.id), 0],
              y: [0, 15 * Math.sin(shape.id), 0],
            },
          };

          const rotateVariants = {
            animate: {
              rotate: 360,
            },
          };

          if (shape.type === 'hexagon') {
            const points = Array.from({ length: 6 })
              .map(
                (_, i) =>
                  `${50 + shape.size * Math.cos((i * Math.PI) / 3)},${50 + shape.size * Math.sin((i * Math.PI) / 3)}`
              )
              .join(' ');

            shapeElement = (
              <motion.g
                key={`shape-${shape.id}`}
                variants={groupVariants}
                animate="animate"
                transition={{
                  duration: shape.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <motion.polygon
                  points={points}
                  fill="none"
                  stroke={shape.color}
                  strokeWidth="1.5"
                  opacity="0.6"
                  filter="url(#glow)"
                  animate={rotateVariants.animate}
                  transition={{
                    duration: shape.duration * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ transformOrigin: '50px 50px' }}
                />
              </motion.g>
            );
          } else if (shape.type === 'circle') {
            shapeElement = (
              <motion.g
                key={`shape-${shape.id}`}
                variants={groupVariants}
                animate="animate"
                transition={{
                  duration: shape.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r={shape.size}
                  fill="none"
                  stroke={shape.color}
                  strokeWidth="1.5"
                  opacity="0.6"
                  filter="url(#glow)"
                  animate={{
                    r: [shape.size, shape.size * 0.8, shape.size],
                  }}
                  transition={{
                    duration: shape.duration,
                    repeat: Infinity,
                  }}
                />
              </motion.g>
            );
          } else {
            // Triangle
            const trianglePoints = `50,${50 - shape.size} ${50 + shape.size},${50 + shape.size} ${50 - shape.size},${50 + shape.size}`;

            shapeElement = (
              <motion.g
                key={`shape-${shape.id}`}
                variants={groupVariants}
                animate="animate"
                transition={{
                  duration: shape.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <motion.polygon
                  points={trianglePoints}
                  fill="none"
                  stroke={shape.color}
                  strokeWidth="1.5"
                  opacity="0.6"
                  filter="url(#glow)"
                  animate={rotateVariants.animate}
                  transition={{
                    duration: shape.duration * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ transformOrigin: '50px 50px' }}
                />
              </motion.g>
            );
          }

          return (
            <motion.g
              key={`wrapper-${shape.id}`}
              style={{
                x: `${shape.x}%`,
                y: `${shape.y}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shape.id * 0.1 }}
            >
              {shapeElement}
            </motion.g>
          );
        })}

        {/* Flowing particle lines */}
        {particles.map((particle) => (
          <motion.circle
            key={`particle-${particle.id}`}
            cx={particle.x}
            cy={particle.y}
            r="0.5"
            fill="#BFFF00"
            opacity="0.8"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: [0, 20 * Math.cos(particle.id), 0],
              y: [0, 20 * Math.sin(particle.id), 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>

      {/* Accent glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1) 0%, rgba(123, 97, 255, 0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: '1px solid rgba(0, 240, 255, 0.2)',
          boxShadow: '0 0 30px rgba(0, 240, 255, 0.1) inset',
        }}
        animate={{
          boxShadow: [
            '0 0 30px rgba(0, 240, 255, 0.1) inset',
            '0 0 50px rgba(0, 240, 255, 0.2) inset',
            '0 0 30px rgba(0, 240, 255, 0.1) inset',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
