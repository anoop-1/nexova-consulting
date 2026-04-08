'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-nexova-black via-nexova-charcoal to-nexova-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-nexova-accent rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexova-purple rounded-full opacity-5 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <RevealOnScroll className="mb-16 md:mb-20 lg:mb-24 text-center">
          <div className="space-y-4">
            <div className="heading-label text-nexova-accent inline-block">CLIENT VOICES</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nexova-white mt-4">
              Trusted by Industry Leaders
            </h2>
          </div>
        </RevealOnScroll>

        {/* Carousel container */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Decorative quote marks */}
          <div className="absolute -top-12 -left-8 text-9xl text-nexova-accent opacity-10 font-serif">
            "
          </div>

          {/* Carousel content */}
          <div className="relative bg-gradient-to-br from-nexova-charcoal to-nexova-black rounded-2xl border border-nexova-slate p-8 md:p-12 lg:p-16 min-h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-nexova-white leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="border-t border-nexova-slate pt-8 flex items-center gap-6">
                  {/* Avatar placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center text-nexova-white text-2xl font-bold">
                      {currentTestimonial.author.charAt(0)}
                    </div>
                  </div>

                  {/* Author details */}
                  <div className="flex-grow">
                    <p className="text-lg font-semibold text-nexova-white">
                      {currentTestimonial.author}
                    </p>
                    <p className="text-nexova-silver">{currentTestimonial.role}</p>
                    <p className="text-nexova-slate text-sm">{currentTestimonial.company}</p>
                  </div>

                  {/* Result badge */}
                  {currentTestimonial.result && (
                    <div className="flex-shrink-0 text-right">
                      <div className="text-sm text-nexova-lime font-semibold">
                        {currentTestimonial.result}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="absolute -left-16 -right-16 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-6 md:px-8">
            <motion.button
              onClick={goToPrevious}
              onHoverStart={() => setAutoPlay(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-nexova-accent text-nexova-accent hover:bg-nexova-accent/10 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              onHoverStart={() => setAutoPlay(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-nexova-accent text-nexova-accent hover:bg-nexova-accent/10 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Dot navigation */}
        <motion.div
          className="flex justify-center gap-3 mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-2 bg-nexova-accent'
                  : 'w-2 h-2 bg-nexova-slate hover:bg-nexova-silver'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
