'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordByWord?: boolean;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  wordByWord = false,
}: AnimatedTextProps) {
  const units = wordByWord ? text.split(' ') : text.split('');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: wordByWord ? 20 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {units.map((unit, index) => (
        <motion.span key={index} variants={itemVariants}>
          {unit}
          {wordByWord && index < units.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.div>
  );
}
