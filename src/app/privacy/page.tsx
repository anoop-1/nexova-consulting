import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "NEXOVA Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-nexova-white mb-6">
            Privacy Policy
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
              NEXOVA ("we," "us," "our," or "Company") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-nexova-silver text-lg leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our
              policies and practices, please do not use our services. Your continued use of
              our website or services indicates your acceptance of this Privacy Policy.
            </p>
          </div>

          {/* 1. Information Collection */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Information You Provide Directly
                </h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  We collect information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Contact information (name, email address, phone number, company)</li>
                  <li>Communication and correspondence you send us</li>
                  <li>Information provided when requesting our services or support</li>
                  <li>
                    Professional background and qualifications relevant to your engagement
                  </li>
                  <li>Payment and billing information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Information Collected Automatically
                </h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>Device information (type, OS, browser, unique identifiers)</li>
                  <li>
                    Usage data (pages visited, time spent, links clicked, referral source)
                  </li>
                  <li>Location information (city, region, country level)</li>
                  <li>IP address and similar technical identifiers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Use of Data */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              We use the information we collect for various purposes:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>Providing and improving our consulting services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Analyzing website usage and improving user experience</li>
              <li>Detecting, preventing, and addressing fraud or security issues</li>
              <li>Complying with legal obligations and enforcing agreements</li>
              <li>Conducting business operations and research</li>
            </ul>
          </div>

          {/* 3. Data Sharing */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              3. Data Sharing & Disclosure
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  When We Share Your Information
                </h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
                  <li>
                    <strong>Service Providers:</strong> With vendors who assist us in
                    providing services (hosting, analytics, payment processing)
                  </li>
                  <li>
                    <strong>Business Partners:</strong> When necessary to fulfill client
                    engagements
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or regulation
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with mergers,
                    acquisitions, or asset sales
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly authorize us to
                    share information
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Confidentiality & NDAs
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  We maintain strict confidentiality regarding client information and
                  business data shared during our engagements. All service providers are
                  bound by confidentiality agreements and data processing terms.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Cookies */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              4. Cookies & Tracking Technologies
            </h2>
            <p className="text-nexova-silver mb-4 leading-relaxed">
              We use cookies, web beacons, and similar technologies to enhance your
              experience. These include:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4 mb-6">
              <li>
                <strong>Essential Cookies:</strong> Required for website functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> To understand how you use our site
              </li>
              <li>
                <strong>Marketing Cookies:</strong> To deliver targeted content and
                advertisements
              </li>
              <li>
                <strong>Functional Cookies:</strong> To remember your preferences
              </li>
            </ul>
            <p className="text-nexova-silver leading-relaxed">
              You can control cookie preferences through your browser settings or our
              cookie consent banner. However, disabling certain cookies may affect site
              functionality.
            </p>
          </div>

          {/* 5. Security */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              5. Data Security
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              We implement comprehensive security measures to protect your personal
              information, including:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Encrypted storage for sensitive data</li>
              <li>Access controls and authentication protocols</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
            <p className="text-nexova-silver mt-6 leading-relaxed">
              While we strive to protect your information, no transmission method over the
              internet is completely secure. We cannot guarantee absolute security.
            </p>
          </div>

          {/* 6. Your Rights */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              6. Your Privacy Rights
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              Depending on your location, you may have the following rights regarding your
              personal information:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>
                <strong>Right of Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Right to Rectification:</strong> Correct inaccurate information
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Limit how we use your data
              </li>
              <li>
                <strong>Right to Data Portability:</strong> Receive your data in a
                portable format
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Withdraw consent for marketing
                communications
              </li>
            </ul>
            <p className="text-nexova-silver mt-6 leading-relaxed">
              To exercise any of these rights, please contact us using the information
              provided below.
            </p>
          </div>

          {/* 7. Data Retention */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              7. Data Retention
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              We retain your personal information for as long as necessary to provide our
              services, comply with legal obligations, and resolve disputes. For marketing
              contacts, we retain information until you unsubscribe. Client engagement data
              is retained per legal and contractual requirements, typically for 7 years
              following completion of services.
            </p>
          </div>

          {/* 8. International Transfers */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              Your information may be transferred to, stored in, and processed in countries
              other than your country of residence, which may have different data protection
              laws. By using our services, you consent to such transfers. We implement
              appropriate safeguards, including standard contractual clauses and adequacy
              decisions where applicable.
            </p>
          </div>

          {/* 9. Third-Party Links */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              9. Third-Party Links & Services
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              Our website may contain links to third-party websites and services that are
              not operated by NEXOVA. This Privacy Policy applies only to information
              collected through our website. We are not responsible for the privacy
              practices of third-party sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </div>

          {/* 10. Contact Information */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              10. Contact Us
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices,
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

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons. We will
              notify you of material changes by posting the updated policy on our website
              and updating the "Last updated" date. Your continued use of our services after
              changes become effective constitutes your acceptance of the updated Privacy
              Policy.
            </p>
          </div>

          {/* Footer Links */}
          <div className="border-t border-nexova-charcoal pt-8 mt-12 flex flex-wrap gap-6 justify-center text-nexova-silver">
            <Link href="/terms" className="hover:text-nexova-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-nexova-accent transition-colors">
              Cookie Policy
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
