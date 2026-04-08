import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "NEXOVA Cookie Policy - Learn about cookies and tracking technologies we use on our website.",
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-nexova-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-nexova-silver">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-nexova-silver text-lg leading-relaxed mb-6">
              This Cookie Policy explains what cookies are, how NEXOVA Consulting uses them
              on our website, and your options regarding cookie management. By continuing to
              use our website, you consent to our use of cookies as described in this policy.
            </p>
            <p className="text-nexova-silver text-lg leading-relaxed">
              For more information about how we handle your personal data, please refer to
              our Privacy Policy.
            </p>
          </div>

          {/* 1. What Are Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              1. What Are Cookies?
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or
              smartphone) when you visit a website. They are widely used to remember
              information about your visit, enhance user experience, and help website owners
              understand how visitors interact with their site.
            </p>
            <p className="text-nexova-silver leading-relaxed">
              Cookies typically contain a unique identifier and can store various types of
              information including user preferences, login credentials, browsing history,
              and behavioral data. They do not contain viruses or malware and cannot directly
              damage your device.
            </p>
          </div>

          {/* 2. Types of Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              2. Types of Cookies We Use
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3 flex items-center">
                  <span className="text-nexova-accent mr-3">●</span>
                  Essential Cookies
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  These cookies are necessary for the website to function properly and cannot
                  be disabled. They enable core functionality such as:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>User authentication and login session management</li>
                  <li>Security features and protection against fraud</li>
                  <li>Load balancing across servers</li>
                  <li>Remembering your preferences during a session</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3 flex items-center">
                  <span className="text-nexova-accent mr-3">●</span>
                  Analytics Cookies
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  We use analytics cookies to understand how visitors interact with our
                  website. These help us:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Track page visits and user journeys</li>
                  <li>Measure website performance and user engagement</li>
                  <li>Identify popular content and areas for improvement</li>
                  <li>Understand traffic patterns and visitor demographics</li>
                  <li>Improve overall website functionality and user experience</li>
                </ul>
                <p className="text-nexova-silver mt-3 leading-relaxed">
                  Providers: Google Analytics, Mixpanel
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3 flex items-center">
                  <span className="text-nexova-accent mr-3">●</span>
                  Functional Cookies
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  These cookies enhance the functionality of our website by remembering:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Language preferences and regional settings</li>
                  <li>Accessibility preferences (text size, color contrast)</li>
                  <li>User interface preferences and layout choices</li>
                  <li>Previously entered form information</li>
                  <li>Your browsing preferences and choices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3 flex items-center">
                  <span className="text-nexova-accent mr-3">●</span>
                  Marketing & Advertising Cookies
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  We use marketing cookies to deliver relevant content and advertisements
                  based on your interests. These help us:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Display targeted advertising across our website and partner sites</li>
                  <li>Measure the effectiveness of advertising campaigns</li>
                  <li>Track conversions and campaign performance</li>
                  <li>Build audience segments for personalized marketing</li>
                  <li>Understand user interests and preferences</li>
                </ul>
                <p className="text-nexova-silver mt-3 leading-relaxed">
                  Providers: Facebook Pixel, LinkedIn Insight Tag, Google Ads
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3 flex items-center">
                  <span className="text-nexova-accent mr-3">●</span>
                  Third-Party Cookies
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  Third-party cookies are placed by external service providers and partners.
                  These may be used for analytics, advertising, social media integration, and
                  other purposes. Third-party providers may use cookies to track your activity
                  across multiple websites.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Tracking Technologies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              3. Other Tracking Technologies
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              Beyond cookies, we may use other tracking technologies:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-2">Web Beacons</h3>
                <p className="text-nexova-silver leading-relaxed">
                  Small images embedded in emails or web pages that track whether a message
                  was opened or a page was viewed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-2">
                  Local Storage
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  Browser storage mechanisms that persist data locally on your device, used
                  to enhance performance and remember preferences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-2">
                  Device Fingerprinting
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  Collection of device characteristics to create a unique profile, used for
                  fraud detection and security purposes.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Duration of Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              4. Cookie Duration
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-2">
                  Session Cookies
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  Automatically deleted when you close your browser. Used for temporary
                  information like login sessions and form data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-2">
                  Persistent Cookies
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  Stored on your device for an extended period (days, months, or years).
                  Used for remembering preferences, login information, and tracking behavior.
                </p>
              </div>
            </div>
          </div>

          {/* 5. How We Use Cookie Data */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              5. How We Use Cookie Data
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              Information collected through cookies helps us:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>Improve website performance and user experience</li>
              <li>Provide personalized content and recommendations</li>
              <li>Understand visitor behavior and website usage patterns</li>
              <li>Deliver targeted marketing messages and advertisements</li>
              <li>Track marketing campaign effectiveness</li>
              <li>Enhance security and prevent fraudulent activity</li>
              <li>Remember your preferences and login information</li>
            </ul>
          </div>

          {/* 6. Managing Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              6. Managing Cookies
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              You have control over how cookies are used on your device:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-3">
                  Browser Settings
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>View and manage cookies stored on your device</li>
                  <li>Block cookies from specific websites</li>
                  <li>Delete cookies when you close your browser</li>
                  <li>Disable cookies entirely (not recommended)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-3">
                  Cookie Consent Banner
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  When you first visit our website, you'll see a cookie consent banner
                  allowing you to:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Access detailed cookie preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-3">
                  Do Not Track
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  You can set your browser to send a "Do Not Track" signal. While we honor
                  such signals when possible, please note that not all tracking technologies
                  respond to these signals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-3">
                  Browser-Specific Instructions
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  Instructions for managing cookies in popular browsers:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                  <li>Firefox: Preferences → Privacy & Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Manage Website Data</li>
                  <li>Edge: Settings → Privacy → Clear browsing data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-nexova-white mb-3">
                  Opt-Out Options
                </h3>
                <p className="text-nexova-silver mb-3 leading-relaxed">
                  You can opt out of specific tracking services:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>
                    Google Analytics: Install the Google Analytics Opt-out Browser Add-on
                  </li>
                  <li>
                    Digital Advertising Alliance: Visit optout.aboutads.info for opt-out
                  </li>
                  <li>Network Advertising Initiative: Visit optout.networkadvertising.org</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Impact of Disabling Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              7. Impact of Disabling Cookies
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              While you can disable cookies, please note that this may affect your
              experience on our website:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>You may be unable to log in or maintain session information</li>
              <li>Personalized features and preferences may not work properly</li>
              <li>Website performance may be compromised</li>
              <li>Some pages may not display correctly</li>
              <li>Essential security features may be impaired</li>
            </ul>
            <p className="text-nexova-silver mt-6 leading-relaxed">
              We recommend keeping at least essential cookies enabled to ensure optimal
              website functionality.
            </p>
          </div>

          {/* 8. Third-Party Links & Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              8. Third-Party Links & Cookies
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              Our website may contain links to third-party websites that use their own
              cookies. We are not responsible for the cookie practices of these external
              sites. We encourage you to review their cookie and privacy policies before
              visiting. Third parties may use cookies to track your behavior across multiple
              websites for advertising and analytics purposes.
            </p>
          </div>

          {/* 9. Updates to Cookie Policy */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              9. Updates to This Policy
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              We may update this Cookie Policy periodically to reflect changes in our
              practices, technology, legal requirements, or other factors. We will notify
              you of significant changes by posting the updated policy on our website and
              updating the "Last updated" date. Your continued use of our website following
              changes constitutes your acceptance of the updated Cookie Policy.
            </p>
          </div>

          {/* 10. Contact Us */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              10. Questions & Support
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              If you have questions about this Cookie Policy or our cookie practices,
              please contact us:
            </p>
            <div className="glass-card p-8">
              <p className="text-nexova-white font-bold mb-2">NEXOVA Consulting</p>
              <p className="text-nexova-silver mb-1">Email: privacy@nexova.com</p>
              <p className="text-nexova-silver mb-1">Phone: +1-555-123-4567</p>
              <p className="text-nexova-silver mb-1">Address: 123 Innovation Drive</p>
              <p className="text-nexova-silver">San Francisco, CA 94105, USA</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-nexova-charcoal pt-8 mt-12 flex flex-wrap gap-6 justify-center text-nexova-silver">
            <Link href="/privacy" className="hover:text-nexova-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-nexova-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-nexova-accent transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
