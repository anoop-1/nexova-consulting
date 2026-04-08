"use client";

import { useScroll, useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useMotionValue(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      scaleX.set(latest);
    });
  }, [scrollYProgress, scaleX]);

  const background = useMotionTemplate`linear-gradient(90deg, #00F0FF 0%, #7B61FF 100%)`;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-nexova-accent to-nexova-purple origin-left z-100"
      style={{
        scaleX,
        background,
      }}
    />
  );
}
