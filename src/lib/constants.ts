export const SITE_CONFIG = {
  name: "NEXOVA",
  tagline: "Strategy Beyond Limits",
  description:
    "NEXOVA is a leading global management consulting firm delivering transformative strategies across Strategy, Digital, Operations, and Risk domains.",
  longDescription:
    "NEXOVA partners with Fortune 500 companies and high-growth enterprises to navigate complex business challenges, drive digital transformation, and unlock sustainable competitive advantage across multiple industries and geographies.",
  domain: "nexova.com",
  email: "hello@nexova.com",
  phone: "+1 (281) 840-8969",
  address: {
    street: "450 Park Avenue South",
    city: "New York",
    state: "NY",
    postal: "10016",
    country: "United States",
  },
  social: {
    linkedin: "https://linkedin.com/company/nexova",
    twitter: "https://twitter.com/nexova",
    facebook: "https://facebook.com/nexova",
    instagram: "https://instagram.com/nexova",
    youtube: "https://youtube.com/nexova",
  },
} as const;

export const NAVIGATION = [
  {
    label: "Solutions",
    href: "/solutions",
    submenu: [
      { label: "Strategy Consulting", href: "/solutions/strategy-consulting" },
      { label: "Digital Transformation", href: "/solutions/digital-transformation" },
      { label: "M&A Advisory", href: "/solutions/ma-advisory" },
      { label: "Operations Excellence", href: "/solutions/operations-excellence" },
      { label: "Financial Advisory", href: "/solutions/financial-advisory" },
      { label: "Human Capital", href: "/solutions/human-capital" },
      { label: "Innovation & Growth", href: "/solutions/innovation-growth" },
      { label: "Risk & Compliance", href: "/solutions/risk-compliance" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    submenu: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Technology & Software", href: "/industries/technology" },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Energy & Utilities", href: "/industries/energy" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const FOOTER_LINKS = {
  Solutions: [
    { label: "Strategy Consulting", href: "/solutions/strategy-consulting" },
    { label: "Digital Transformation", href: "/solutions/digital-transformation" },
    { label: "M&A Advisory", href: "/solutions/ma-advisory" },
    { label: "Operations Excellence", href: "/solutions/operations-excellence" },
    { label: "Financial Advisory", href: "/solutions/financial-advisory" },
    { label: "Human Capital", href: "/solutions/human-capital" },
  ],
  Industries: [
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Technology", href: "/industries/technology" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Energy & Utilities", href: "/industries/energy" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "All Industries", href: "/industries" },
  ],
  Resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights & Articles", href: "/insights" },
    { label: "Webinars", href: "/webinars" },
    { label: "Research", href: "/research" },
    { label: "Client Stories", href: "/testimonials" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Locations", href: "/locations" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

export const SEO_DEFAULTS = {
  ogImage: "https://nexova.com/og-image.jpg",
  twitterHandle: "@nexova",
  language: "en",
} as const;
