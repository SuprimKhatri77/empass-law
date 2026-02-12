"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
  Navigation,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 20 7123 4567",
    href: "tel:+442071234567",
    subtext: "Mon-Fri, 9AM-6PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@empasslaw.com",
    href: "mailto:info@empasslaw.com",
    subtext: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "41 Lothbury, London EC2R 7AE",
    href: "https://maps.google.com/?q=51.51632903444329,-0.1435423386339631",
    subtext: "View on Google Maps",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
            alt="London Office"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        </div>

        {/* Decorative Shape */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&h=800&fit=crop"
            alt="Architecture"
            fill
            className="object-cover"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 mb-6 bg-[#2c5697]/10 border border-[#2c5697]/30 rounded-full">
              <span className="text-sm font-semibold text-[#5a7ba8] uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Schedule a confidential consultation with our expert legal team.
              We're here to help you navigate your legal challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.label === "Office" ? "_blank" : undefined}
                rel={
                  item.label === "Office" ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="w-14 h-14 bg-[#2c5697]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2c5697]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#2c5697]" />
                </div>

                <h3 className="text-sm font-semibold uppercase text-slate-500 mb-2">
                  {item.label}
                </h3>

                <p className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#2c5697] transition-colors">
                  {item.value}
                </p>

                <p className="text-sm text-slate-600">{item.subtext}</p>

                <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-[#2c5697] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#2c5697] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-[#5a7ba8]">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#2c5697] mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-slate-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5697] focus:border-transparent transition-all`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email and Phone - Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#2c5697] mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5697] focus:border-transparent transition-all`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#2c5697] mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border ${
                          errors.phone ? "border-red-500" : "border-slate-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5697] focus:border-transparent transition-all`}
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-[#2c5697] mb-2"
                  >
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5697] focus:border-transparent transition-all"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#2c5697] mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full pl-12 pr-4 py-3 border ${
                        errors.message ? "border-red-500" : "border-slate-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c5697] focus:border-transparent transition-all resize-none`}
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                  className={`w-full sm:w-auto px-10 py-4 font-semibold rounded-lg transition-all ${
                    isSuccess
                      ? "bg-green-500 text-white cursor-default"
                      : isSubmitting
                        ? "bg-slate-300 text-slate-500 cursor-wait"
                        : "bg-[#2c5697] text-white hover:bg-[#234578]"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSuccess ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-slate-400 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>

            {/* Office Hours - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Hours Card */}
              <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2c5697]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#2c5697]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2c5697]">
                    Office Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0"
                    >
                      <span className="text-[#5a7ba8]">{schedule.day}</span>
                      <span className="font-semibold text-[#2c5697]">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-8 bg-[#2c5697]/5 rounded-xl border border-[#2c5697]/20">
                <h3 className="text-xl font-bold text-[#2c5697] mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-[#5a7ba8] mb-4">
                  For urgent legal matters, please call our 24/7 emergency
                  hotline.
                </p>
                <a
                  href="tel:+442071234567"
                  className="inline-flex items-center gap-2 text-[#2c5697] font-semibold hover:gap-3 transition-all"
                >
                  Call Emergency Line
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Additional Info */}
              <div className="p-8 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#2c5697] mb-4">
                  What Happens Next?
                </h3>
                <ul className="space-y-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "Initial consultation scheduled",
                    "Receive tailored legal advice",
                    "Transparent pricing discussed",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#2c5697]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#2c5697]">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-[#5a7ba8]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2c5697] mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-[#5a7ba8]">
              Located in the heart of London's financial district
            </p>
          </div>

          <div className="relative">
            {/* Map Container */}
            <div className="relative h-[500px] lg:h-[600px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9234567890123!2d-0.1435423386339631!3d51.51632903444329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzU4LjgiTiAwwrAwOCczNi44Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay to prevent zoom */}
              <div className="absolute inset-0 bg-transparent pointer-events-auto" />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#2c5697] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#2c5697] pointer-events-none" />
            </div>

            {/* Map Info Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 p-6 bg-white rounded-xl shadow-2xl border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2c5697]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#2c5697]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2c5697] mb-1">Empass Law</h4>
                  <p className="text-sm text-[#5a7ba8] mb-3">
                    41 Lothbury, London EC2R 7AE
                  </p>
                  <a
                    href="https://maps.google.com/?q=51.51632903444329,-0.1435423386339631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#2c5697] font-semibold hover:gap-3 transition-all"
                  >
                    Get Directions
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Directions Info */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h4 className="text-sm font-semibold uppercase text-[#2c5697] mb-2">
                Underground
              </h4>
              <p className="text-[#5a7ba8] text-sm">
                Bank Station (Central & Northern lines) - 2 min walk
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h4 className="text-sm font-semibold uppercase text-[#2c5697] mb-2">
                Bus
              </h4>
              <p className="text-[#5a7ba8] text-sm">
                Routes 8, 25, 242, 388 - Bank stop
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h4 className="text-sm font-semibold uppercase text-[#2c5697] mb-2">
                Parking
              </h4>
              <p className="text-[#5a7ba8] text-sm">
                London Wall Car Park - 3 min walk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2c5697] mb-6">
            Prefer to Speak Directly?
          </h2>
          <p className="text-lg text-[#5a7ba8] mb-8">
            Our team is available to discuss your legal needs over the phone.
          </p>
          <Link
            href="tel:+442071234567"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#2c5697] text-white font-semibold rounded-lg hover:bg-[#234578] transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            +44 20 7123 4567
          </Link>
        </div>
      </section>
    </main>
  );
}
