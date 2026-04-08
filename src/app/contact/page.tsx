"use client";

import { useState } from "react";
import { AnimatedText, RevealOnScroll } from "@/components/ui";

const officeLocations = [
  {
    city: "New York",
    address: "432 Park Avenue, New York, NY 10022",
    phone: "+1 (281) 840-8969",
    hours: "9:00 AM - 6:00 PM EST",
  },
  {
    city: "London",
    address: "30 St Mary Axe, London, EC3A 8BF",
    phone: "+44 (0)20 7555 0124",
    hours: "9:00 AM - 6:00 PM GMT",
  },
  {
    city: "Singapore",
    address: "Marina Bay Financial Centre, Singapore 018980",
    phone: "+65 6555 0125",
    hours: "9:00 AM - 6:00 PM SGT",
  },
  {
    city: "Dubai",
    address: "ADNOC Headquarters, Abu Dhabi, UAE",
    phone: "+971 4 555 0126",
    hours: "9:00 AM - 6:00 PM GST",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Get In Touch"
            className="text-5xl md:text-7xl font-bold text-gradient-accent mb-6"
          />
          <p className="text-lg md:text-xl text-nexova-silver leading-relaxed">
            Ready to discuss how NEXOVA can help your organization? Let's connect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <div className="glass-card p-12 rounded-2xl">
                  <h2 className="text-3xl font-bold text-nexova-white mb-8">
                    Send us a Message
                  </h2>

                  {submitted ? (
                    <div className="p-8 bg-nexova-accent/10 border border-nexova-accent/50 rounded-xl text-center">
                      <p className="text-nexova-accent font-semibold mb-2">
                        Thank You!
                      </p>
                      <p className="text-nexova-silver">
                        We've received your message and will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-nexova-white mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-nexova-black border border-nexova-slate rounded-lg text-nexova-white placeholder-nexova-graphite focus:outline-none focus:border-nexova-accent transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-nexova-white mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-nexova-black border border-nexova-slate rounded-lg text-nexova-white placeholder-nexova-graphite focus:outline-none focus:border-nexova-accent transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-sm font-semibold text-nexova-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-nexova-black border border-nexova-slate rounded-lg text-nexova-white placeholder-nexova-graphite focus:outline-none focus:border-nexova-accent transition-colors"
                          placeholder="Your company"
                        />
                      </div>

                      {/* Service Interest */}
                      <div>
                        <label className="block text-sm font-semibold text-nexova-white mb-2">
                          Area of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-nexova-black border border-nexova-slate rounded-lg text-nexova-white focus:outline-none focus:border-nexova-accent transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="strategy">Strategy Consulting</option>
                          <option value="digital">Digital Transformation</option>
                          <option value="ma">M&A Advisory</option>
                          <option value="operations">
                            Operations Excellence
                          </option>
                          <option value="financial">Financial Advisory</option>
                          <option value="human-capital">Human Capital</option>
                          <option value="innovation">Innovation & Growth</option>
                          <option value="risk">Risk & Compliance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-nexova-white mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-nexova-black border border-nexova-slate rounded-lg text-nexova-white placeholder-nexova-graphite focus:outline-none focus:border-nexova-accent transition-colors resize-none"
                          placeholder="Tell us about your challenge or opportunity..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full btn-primary py-3 font-semibold"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </RevealOnScroll>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <RevealOnScroll>
                <div>
                  <h3 className="text-2xl font-bold text-nexova-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-nexova-graphite uppercase tracking-wide mb-1">
                        General Inquiries
                      </p>
                      <p className="text-nexova-white font-semibold">
                        hello@nexova.com
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-nexova-graphite uppercase tracking-wide mb-1">
                        Phone
                      </p>
                      <p className="text-nexova-white font-semibold">
                        +1 (212) 555-0123
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="pt-8 border-t border-nexova-slate/50">
                  <h3 className="text-lg font-bold text-nexova-white mb-4">
                    Office Locations
                  </h3>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {officeLocations.map((location, index) => (
                      <div
                        key={index}
                        className="text-sm pb-4 last:pb-0 last:border-0 border-b border-nexova-slate/30"
                      >
                        <p className="font-semibold text-nexova-white mb-1">
                          {location.city}
                        </p>
                        <p className="text-xs text-nexova-silver mb-1">
                          {location.address}
                        </p>
                        <p className="text-xs text-nexova-silver">{location.phone}</p>
                        <p className="text-xs text-nexova-graphite mt-1">
                          {location.hours}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nexova-white mb-4">
              Visit Us Around the World
            </h2>
          </div>
          <div className="w-full h-96 bg-gradient-to-br from-nexova-slate/20 to-nexova-graphite/20 rounded-2xl border border-nexova-slate/30 flex items-center justify-center">
            <div className="text-center">
              <p className="text-nexova-silver text-lg">
                Interactive map coming soon
              </p>
              <p className="text-nexova-graphite text-sm mt-2">
                Serving clients across 45+ countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="relative py-16 px-4 bg-nexova-dark border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 rounded-xl">
            <p className="text-nexova-silver">
              We typically respond to inquiries within <span className="text-nexova-accent font-bold">24 business hours</span>. For urgent matters, please call us directly at one of our office locations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
