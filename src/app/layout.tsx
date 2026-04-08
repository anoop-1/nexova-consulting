import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/layout/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexova.consulting"),
  title: {
    template: "NEXOVA | %s",
    default: "NEXOVA | Strategy Beyond Limits",
  },
  description:
    "NEXOVA is a hyper-modern management consulting firm delivering transformative strategic insights and innovative solutions for global enterprises in the digital age.",
  keywords: [
    "management consulting",
    "strategy",
    "digital transformation",
    "M&A advisory",
    "business consulting",
    "enterprise solutions",
  ],
  canonical: "https://nexova.consulting",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexova.consulting",
    title: "NEXOVA | Strategy Beyond Limits",
    description:
      "Transformative strategic consulting for the digital age. Strategy, transformation, and growth.",
    siteName: "NEXOVA",
    images: [
      {
        url: "https://nexova.consulting/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXOVA - Management Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOVA | Strategy Beyond Limits",
    description:
      "Transformative strategic consulting for the digital age. Strategy, transformation, and growth.",
    images: ["https://nexova.consulting/og-image.png"],
    creator: "@nexova",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NEXOVA",
  url: "https://nexova.consulting",
  logo: "https://nexova.consulting/logo.png",
  description:
    "NEXOVA is a hyper-modern management consulting firm delivering transformative strategic insights and innovative solutions for global enterprises.",
  sameAs: [
    "https://linkedin.com/company/nexova",
    "https://twitter.com/nexova",
    "https://instagram.com/nexova",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Innovation Drive",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "Customer Service",
    email: "hello@nexova.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col bg-nexova-black text-nexova-light antialiased`}
      >
        <ClientProviders>
          {/* Noise Overlay */}
          <div className="noise-overlay" />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 pt-16 sm:pt-20 relative z-10">{children}</main>

          {/* Footer */}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
