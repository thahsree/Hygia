"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

const serviceTypes = [
  "Home Deep Cleaning",
  "Office Deep Cleaning",
  "Carpet and Upholstery",
  "Window Cleaning",
  "Post Construction",
  "Move In / Move Out",
];

const propertyTypes = [
  "Apartment",
  "House / Villa",
  "Office",
  "Commercial Space",
  "Other",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    size: "",
    date: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-primary text-primary-foreground pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Section>
            <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl font-heading font-bold tracking-wide mb-4">
              Book a Service
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto tracking-wide">
              Fill in the form below and we'll get back to you shortly to confirm your booking.
            </p>
          </Section>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <Section delay={0.1}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-9 h-9 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-heading font-semibold text-gray-700 mb-2 tracking-wide">
                      Booking Request Sent!
                    </h2>
                    <p className="text-lg text-gray-500 tracking-wide">
                      Thank you, <strong>{form.fullName}</strong>. We'll contact you shortly to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXXXXXXX"
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    {/* Service Type + Property Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                          Service Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="serviceType"
                          required
                          value={form.serviceType}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                        >
                          <option value="">Select a Service</option>
                          {serviceTypes.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                          Property Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="propertyType"
                          required
                          value={form.propertyType}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                        >
                          <option value="">Select Property Type</option>
                          {propertyTypes.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Size + Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                          Approximate Size (sq ft)
                        </label>
                        <input
                          name="size"
                          type="number"
                          value={form.size}
                          onChange={handleChange}
                          placeholder="e.g. 1200"
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                          Preferred Date
                        </label>
                        <input
                          name="date"
                          type="date"
                          value={form.date}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-1.5 tracking-wide">
                        Additional Details
                      </label>
                      <textarea
                        name="details"
                        rows={4}
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Please provide any additional information about your cleaning needs..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold tracking-wide py-6"
                    >
                      Submit Booking Request
                    </Button>

                    <p className="text-sm text-gray-400 text-center tracking-wide">
                      By submitting this form, you agree to our Privacy Policy. We'll contact you shortly to discuss your cleaning needs.
                    </p>
                  </form>
                )}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Section delay={0.2}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-28 space-y-6">
                <h3 className="text-xl font-heading font-semibold text-gray-700 tracking-wide border-b border-gray-100 pb-4">
                  Prefer to Book by Phone?
                </h3>
                <p className="text-base text-gray-500 tracking-wide">
                  Call us directly to discuss your cleaning needs and get an instant quote:
                </p>
                <a
                  href="tel:+919633702776"
                  className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 transition rounded-xl px-5 py-4 group"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 tracking-wide">Call us</p>
                    <p className="text-lg font-semibold text-gray-700 tracking-wide group-hover:text-primary transition">
                      +91 9633702776
                    </p>
                  </div>
                </a>
                <p className="text-sm text-gray-500 tracking-wide">
                  Or email us at:
                </p>
                <a
                  href="mailto:info@hygia.com"
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition rounded-xl px-5 py-4 group"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700 group-hover:text-primary transition tracking-wide">
                    info@hygia.com
                  </span>
                </a>
              </div>
            </Section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
