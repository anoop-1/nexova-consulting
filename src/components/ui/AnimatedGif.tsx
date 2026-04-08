'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

type Variant = 'data-flow' | 'globe-spin' | 'chart-grow' | 'network-pulse';
type Size = 'sm' | 'md' | 'lg';

interface AnimatedGifProps {
  variant: Variant;
  className?: string;
  size?: Size;
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
};

/**
 * Data Flow: Animated flowing data lines/particles
 */
function DataFlow({ size }: { size: Size }) {
  const particles = useMemo(() => Array.from({ length: 12 }), []);

  return (
    <div className="relative w-full h-full">
      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dataGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 1)" />
            <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Animated lines */}
        <motion.path
          d="M0,50 Q50,30 100,50 T200,50"
          stroke="url(#dataGrad1)"
          strokeWidth="2"
          fill="none"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, repeat: Infinity }}
          strokeDasharray="200"
        />
        <motion.path
          d="M0,100 Q50,80 100,100 T200,100"
          stroke="url(#dataGrad1)"
          strokeWidth="2"
          fill="none"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          strokeDasharray="200"
        />
        <motion.path
          d="M0,150 Q50,130 100,150 T200,150"
          stroke="url(#dataGrad1)"
          strokeWidth="2"
          fill="none"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          strokeDasharray="200"
        />
      </svg>

      {/* Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-nexova-accent"
          animate={{
            x: [0, 200, 0],
            y: [50 + (i % 3) * 50, 50 + (i % 3) * 50, 50 + (i % 3) * 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: (i % 3) * 0.5 + (Math.floor(i / 3) * 0.2),
          }}
        />
      ))}
    </div>
  );
}

/**
 * Globe Spin: Rotating wireframe globe
 */
function GlobeSpin() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48">
        <defs>
          <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
        </defs>

        {/* Rotating globe group */}
        <motion.g
          animate={{ rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ transformOrigin: '100px 100px' }}
        >
          {/* Wireframe sphere circles */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="100" cy="100" rx="80" ry="30" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.4" />

          {/* Longitude lines */}
          {[0, 45, 90, 135, 180].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + 80 * Math.cos(rad);
            const y1 = 100;
            const x2 = 100 + 80 * Math.cos(rad);
            const y2 = 100 + 80 * Math.sin(rad);
            return (
              <line
                key={`lon-${angle}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#globeGrad)"
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}

          {/* Highlight points */}
          {[0, 90, 180, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 75 * Math.cos(rad);
            const y = 100 + 75 * Math.sin(rad);
            return (
              <circle key={`point-${angle}`} cx={x} cy={y} r="3" fill="#00F0FF" opacity="0.7" />
            );
          })}
        </motion.g>

        {/* Pulsing accent circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#BFFF00"
          strokeWidth="0.5"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

/**
 * Chart Grow: Animated bar chart
 */
function ChartGrow() {
  const bars = [
    { height: 0.4, delay: 0 },
    { height: 0.7, delay: 0.2 },
    { height: 0.5, delay: 0.4 },
    { height: 0.9, delay: 0.6 },
    { height: 0.6, delay: 0.8 },
  ];

  return (
    <div className="relative w-full h-full flex items-end justify-center gap-2 p-6">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-t from-nexova-accent to-nexova-purple rounded-t flex-1"
          initial={{ height: '10%' }}
          animate={{ height: `${bar.height * 100}%` }}
          transition={{
            duration: 1.5,
            delay: bar.delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ minWidth: '8px' }}
        />
      ))}

      {/* Chart axes */}
      <svg className="absolute bottom-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
        <line x1="20" y1="180" x2="180" y2="180" stroke="rgba(138, 138, 153, 0.3)" strokeWidth="1" />
        <line x1="20" y1="20" x2="20" y2="180" stroke="rgba(138, 138, 153, 0.3)" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * Network Pulse: Pulsing network nodes
 */
function NetworkPulse() {
  const nodes = [
    { x: '20%', y: '30%' },
    { x: '50%', y: '15%' },
    { x: '80%', y: '35%' },
    { x: '75%', y: '75%' },
    { x: '50%', y: '60%' },
    { x: '25%', y: '75%' },
  ];

  const connections = [
    [0, 1],
    [1, 2],
    [2, 4],
    [4, 5],
    [5, 3],
    [3, 2],
  ];

  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(123, 97, 255, 0.5)" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const x1 = parseInt(nodes[conn[0]].x) * 2;
          const y1 = parseInt(nodes[conn[0]].y) * 2;
          const x2 = parseInt(nodes[conn[1]].x) * 2;
          const y2 = parseInt(nodes[conn[1]].y) * 2;

          return (
            <motion.line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#networkGrad)"
              strokeWidth="1"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const x = parseInt(node.x) * 2;
          const y = parseInt(node.y) * 2;

          return (
            <g key={`node-${i}`}>
              {/* Pulse ring */}
              <motion.circle
                cx={x}
                cy={y}
                r="6"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="0.5"
                initial={{ r: 6, opacity: 0.8 }}
                animate={{ r: 12, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
              {/* Core node */}
              <circle cx={x} cy={y} r="4" fill="#00F0FF" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Main AnimatedGif component
 */
export default function AnimatedGif({ variant, className = '', size = 'md' }: AnimatedGifProps) {
  const getContent = () => {
    switch (variant) {
      case 'data-flow':
        return <DataFlow size={size} />;
      case 'globe-spin':
        return <GlobeSpin />;
      case 'chart-grow':
        return <ChartGrow />;
      case 'network-pulse':
        return <NetworkPulse />;
      default:
        return null;
    }
  };

  return (
    <div className={`${sizeMap[size]} ${className}`} style={{ perspective: '1000px' }}>
      {getContent()}
    </div>
  );
}
