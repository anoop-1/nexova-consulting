"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  X,
  Share2,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [duplicateMarquee, setDuplicateMarquee] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDuplicateMarquee(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Team", href: "/team" },
    { label: "News", href: "/news" },
  ];

  const servicesLinks = [
    { label: "Strategy", href: "/services/strategy" },
    { label: "Digital Transformation", href: "/services/digital" },
    { label: "M&A Advisory", href: "/services/ma" },
    { label: "Operations", href: "/services/operations" },
  ];

  const industriesLinks = [
    { label: "Financial Services", href: "/industries/financial" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Technology", href: "/industries/technology" },
    { label: "Energy", href: "/industries/energy" },
  ];

  const clientLogos = [
    "Acme Corp",
    "TechVision",
    "Global Finance",
    "HealthFirst",
    "EnergyHub",
    "CloudScale",
    "DataStream",
    "InnovateLabs",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`relative bg-nexova-charcoal pt-20 pb-8 ${className}`}
    >
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nexova-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16 sm:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-6">
            Let's Transform Your Business
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Partner with NEXOVA to unlock strategic growth and competitive
            advantage in your industry.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="btn-primary inline-flex">
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-nexova-slate to-transparent mb-16"
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16">
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white font-display tracking-tight">
                NEXOVA
              </span>
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-nexova-accent"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <p className="text-sm font-medium text-nexova-accent mb-4">
              Strategy Beyond Limits
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering global enterprises with transformative strategic
              insights and innovative solutions for the digital age.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: Globe,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                { icon: X, href: "https://twitter.com", label: "X" },
                {
                  icon: Share2,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#00F0FF" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-nexova-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-nexova-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-nexova-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Industries */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Industries
            </h3>
            <ul className="space-y-3">
              {industriesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-nexova-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-nexova-slate to-transparent mb-16"
        />

        {/* Newsletter Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for insights, trends, and strategic
                perspectives delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-nexova-graphite text-white placeholder-gray-500 rounded-lg border border-nexova-slate focus:border-nexova-accent outline-none transition-colors text-sm"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary text-sm px-4 sm:px-6 flex-shrink-0"
              >
                {isSubmitted ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Marquee Section */}
        <motion.div variants={itemVariants} className="mb-16 py-8 border-y border-nexova-slate overflow-hidden">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 px-4">
            Trusted by Leading Organizations
          </p>
          <div className="flex gap-8 overflow-hidden">
            <div className="flex gap-8 animate-marquee flex-shrink-0">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`marquee-1-${idx}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg glass-card whitespace-nowrap"
                >
                  <span className="text-sm font-medium text-gray-300">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
            {duplicateMarquee && (
              <div className="flex gap-8 animate-marquee flex-shrink-0">
                {clientLogos.map((logo, idx) => (
                  <div
                    key={`marquee-2-${idx}`}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg glass-card whitespace-nowrap"
                  >
                    <span className="text-sm font-medium text-gray-300">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MapPin,
              label: "Headquarters",
              value: "San Francisco, CA",
            },
            { icon: Mail, label: "Email", value: "hello@nexova.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
          ].map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg glass-card text-nexova-accent">
                  <item.icon size={18} />
                </div>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-widest">
                  {item.label}
                </p>
                <p className="text-white font-medium mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-nexova-slate flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500"
        >
          <p>© 2024 NEXOVA Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-nexova-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-nexova-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-nexova-accent transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
