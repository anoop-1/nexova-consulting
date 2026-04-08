import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import AnimatedShowcase from '@/components/sections/AnimatedShowcase';
import IndustriesSection from '@/components/sections/IndustriesSection';
import InsightsSection from '@/components/sections/InsightsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GlobalPresenceSection from '@/components/sections/GlobalPresenceSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'NEXOVA Consulting | Strategic Transformation & Digital Innovation',
  description:
    'Transform your organization with world-class management consulting. Strategy, digital transformation, M&A advisory, operations excellence, and more. Trusted by Fortune 500 companies globally.',
  keywords: [
    'management consulting',
    'strategic consulting',
    'digital transformation',
    'M&A advisory',
    'operations excellence',
    'business transformation',
  ],
  openGraph: {
    title: 'NEXOVA Consulting | Strategic Transformation & Digital Innovation',
    description:
      'Transform your organization with world-class management consulting across strategy, digital, operations, and more.',
    url: 'https://nexova-consulting.com',
    siteName: 'NEXOVA Consulting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXOVA Consulting',
    description: 'World-class management consulting for organizational transformation',
  },
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-nexova-black">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AnimatedShowcase />
      <IndustriesSection />
      <InsightsSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <CTASection />
    </main>
  );
}
