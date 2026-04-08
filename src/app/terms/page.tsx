import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "NEXOVA Terms of Service - Review the terms and conditions for using our website and services.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-nexova-white mb-6">
            Terms of Service
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
            <p className="text-nexova-silver text-lg leading-relaxed">
              These Terms of Service ("Terms") constitute a binding agreement between you
              and NEXOVA Consulting ("Company," "we," "us," or "our") regarding your use of
              our website, services, and all related features and functionalities.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-nexova-silver mb-4 leading-relaxed">
              By accessing and using this website or engaging with our services, you
              acknowledge that you have read, understood, and agree to be bound by these
              Terms. If you do not agree with any provision of these Terms, you may not
              use our website or services.
            </p>
            <p className="text-nexova-silver leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be
              effective immediately upon posting to the website. Your continued use of our
              services following any modifications constitutes your acceptance of the
              updated Terms.
            </p>
          </div>

          {/* 2. Use License */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              2. Use License
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              Subject to these Terms, we grant you a limited, non-exclusive,
              non-transferable, and revocable license to access and use our website and
              services for lawful purposes. This license does not include the right to:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public display
              </li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials</li>
              <li>Disrupt the normal flow of dialogue within our website</li>
            </ul>
          </div>

          {/* 3. Intellectual Property Rights */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              3. Intellectual Property Rights
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Our Intellectual Property
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  All content on our website, including but not limited to text, graphics,
                  logos, images, audio, video, and software, is the property of NEXOVA
                  Consulting or its content suppliers and is protected by international
                  copyright laws. You may not reproduce, distribute, or transmit any content
                  without our prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Client Deliverables
                </h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  Deliverables created specifically for a client engagement remain the
                  intellectual property of NEXOVA unless otherwise agreed in writing. Clients
                  receive a non-exclusive license to use deliverables for their intended
                  business purpose.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  User-Generated Content
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  Any content you submit to our website remains your property. However, by
                  submitting such content, you grant NEXOVA a worldwide, non-exclusive,
                  royalty-free license to use, display, and distribute your content in
                  connection with our services.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Service Description & Limitations */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              4. Service Description & Limitations
            </h2>
            <p className="text-nexova-silver mb-4 leading-relaxed">
              Our services are provided on an "as-is" and "as-available" basis. We make no
              warranties, expressed or implied, regarding:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>The accuracy, completeness, or reliability of our services</li>
              <li>That our services will meet your specific requirements</li>
              <li>That our services will be uninterrupted or error-free</li>
              <li>That defects will be corrected</li>
            </ul>
            <p className="text-nexova-silver mt-6 leading-relaxed">
              Specific service terms and conditions are detailed in individual engagement
              letters and statements of work. In case of conflict between these Terms and
              engagement-specific terms, the engagement-specific terms will prevail for that
              engagement only.
            </p>
          </div>

          {/* 5. User Responsibilities */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              5. User Responsibilities
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>
                Provide accurate, current, and complete information in any registration or
                engagement process
              </li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>
                Use our website and services in accordance with all applicable laws and
                regulations
              </li>
              <li>
                Not engage in unlawful, harmful, abusive, or otherwise objectionable conduct
              </li>
              <li>Not transmit viruses, malware, or any code intended to disrupt services</li>
              <li>Not attempt to gain unauthorized access to our systems or data</li>
              <li>Not interfere with or disrupt the operation of our website</li>
            </ul>
          </div>

          {/* 6. Limitation of Liability */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              To the maximum extent permitted by applicable law, NEXOVA shall not be liable
              for:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>
                Any indirect, incidental, special, consequential, or punitive damages,
                including loss of profits or revenue
              </li>
              <li>Any damages arising from loss of data or business interruption</li>
              <li>Damages resulting from your use or inability to use our services</li>
              <li>
                Damages from unauthorized access or third-party interference with your use
                of our services
              </li>
            </ul>
            <p className="text-nexova-silver mt-6 leading-relaxed">
              In no event shall NEXOVA's total liability to you exceed the fees paid by you
              to NEXOVA for the services that gave rise to the claim, or $5,000, whichever
              is greater. Some jurisdictions do not allow the exclusion of certain
              warranties or limitation of liability, so these limitations may not apply to
              you.
            </p>
          </div>

          {/* 7. Indemnification */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              7. Indemnification
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              You agree to indemnify, defend, and hold harmless NEXOVA and its officers,
              directors, employees, and agents from any claims, damages, losses, or
              liabilities arising from your use of our website or services, your violation
              of these Terms, or your infringement of any third-party rights.
            </p>
          </div>

          {/* 8. Confidentiality */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              8. Confidentiality
            </h2>
            <p className="text-nexova-silver mb-4 leading-relaxed">
              During our engagement, both parties may have access to confidential
              information. Each party agrees to:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>Maintain the confidentiality of all sensitive business information</li>
              <li>
                Limit disclosure of confidential information to authorized personnel only
              </li>
              <li>Return or destroy confidential information upon completion of engagement</li>
              <li>
                Not use confidential information for any purpose other than performing
                services
              </li>
            </ul>
            <p className="text-nexova-silver mt-6 leading-relaxed">
              Confidentiality obligations do not apply to information that is publicly
              available, legally required to be disclosed, or independently developed.
            </p>
          </div>

          {/* 9. Governing Law & Dispute Resolution */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              9. Governing Law & Dispute Resolution
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Governing Law
                </h3>
                <p className="text-nexova-silver leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of
                  the State of California, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-nexova-white mb-3">
                  Dispute Resolution
                </h3>
                <p className="text-nexova-silver mb-4 leading-relaxed">
                  Any disputes arising from these Terms or our services shall first be
                  resolved through good-faith negotiation between the parties. If negotiation
                  fails, the dispute shall be resolved through binding arbitration in
                  accordance with the American Arbitration Association (AAA) rules.
                </p>
                <p className="text-nexova-silver leading-relaxed">
                  You agree to submit to the exclusive jurisdiction of the state and federal
                  courts located in San Francisco, California for any legal proceedings that
                  are not subject to arbitration.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Termination */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              10. Termination
            </h2>
            <p className="text-nexova-silver mb-4 leading-relaxed">
              Either party may terminate any engagement or your use of our website at any
              time. Upon termination:
            </p>
            <ul className="list-disc list-inside text-nexova-silver space-y-2 ml-4">
              <li>Your right to use our services will immediately cease</li>
              <li>Outstanding payment obligations remain due</li>
              <li>Confidentiality obligations survive termination</li>
              <li>Sections regarding intellectual property and liability survive</li>
            </ul>
          </div>

          {/* 11. Severability */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              11. Severability
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, that
              provision shall be modified to the minimum extent necessary to make it valid,
              or if that is not possible, severed. The remaining provisions shall continue
              in full force and effect.
            </p>
          </div>

          {/* 12. Entire Agreement */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              12. Entire Agreement
            </h2>
            <p className="text-nexova-silver leading-relaxed">
              These Terms, together with our Privacy Policy, any engagement letters, and
              statements of work, constitute the entire agreement between you and NEXOVA
              regarding your use of our website and services and supersede all prior and
              contemporaneous agreements, understandings, and negotiations.
            </p>
          </div>

          {/* 13. Contact for Legal Matters */}
          <div className="mb-12">
            <h2 className="heading-label text-nexova-accent mb-4">
              13. Contact Information
            </h2>
            <p className="text-nexova-silver mb-6 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="glass-card p-8">
              <p className="text-nexova-white font-bold mb-2">NEXOVA Consulting</p>
              <p className="text-nexova-silver mb-1">Email: legal@nexova.com</p>
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
