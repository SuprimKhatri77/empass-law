"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";

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
    value: "info@chambers.law",
    href: "mailto:info@chambers.law",
    subtext: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Fleet Street, London EC4A 2AB",
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLElement>(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="bg-[#0A0F1C] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="absolute top-20 left-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-6 py-2 mb-6 bg-[#00D9FF]/10 border border-[#00D9FF]/20">
              <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
              Schedule a confidential consultation with our expert legal team.
              We're here to help you navigate your legal challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-20 bg-[#0D1425]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
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
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white/[0.02] border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#00D9FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center mb-6 group-hover:bg-[#00D9FF]/20 transition-colors">
                    <item.icon className="w-7 h-7 text-[#00D9FF]" />
                  </div>

                  <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-3">
                    {item.label}
                  </h3>

                  <p className="text-xl font-bold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                    {item.value}
                  </p>

                  <p className="text-sm text-white/40">{item.subtext}</p>

                  <ArrowRight className="absolute top-8 right-0 w-5 h-5 text-[#00D9FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Info Section */}
      <section ref={formRef} className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
                  Send Us a Message
                </h2>
                <p className="text-lg text-white/60">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === "name"
                          ? "text-[#00D9FF]"
                          : "text-white/30"
                      }`}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-14 pr-4 py-4 bg-white/[0.02] border ${
                        errors.name
                          ? "border-red-500/50"
                          : focusedField === "name"
                            ? "border-[#00D9FF]"
                            : "border-white/10"
                      } text-white placeholder:text-white/30 focus:outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {focusedField === "name" && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-[#00D9FF]/10 blur-md -z-10"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email and Phone - Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                          focusedField === "email"
                            ? "text-[#00D9FF]"
                            : "text-white/30"
                        }`}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-14 pr-4 py-4 bg-white/[0.02] border ${
                          errors.email
                            ? "border-red-500/50"
                            : focusedField === "email"
                              ? "border-[#00D9FF]"
                              : "border-white/10"
                        } text-white placeholder:text-white/30 focus:outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                      {focusedField === "email" && (
                        <motion.div
                          layoutId="inputGlow"
                          className="absolute -inset-1 bg-[#00D9FF]/10 blur-md -z-10"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                          focusedField === "phone"
                            ? "text-[#00D9FF]"
                            : "text-white/30"
                        }`}
                      />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-14 pr-4 py-4 bg-white/[0.02] border ${
                          errors.phone
                            ? "border-red-500/50"
                            : focusedField === "phone"
                              ? "border-[#00D9FF]"
                              : "border-white/10"
                        } text-white placeholder:text-white/30 focus:outline-none transition-all`}
                        placeholder="+44 20 1234 5678"
                      />
                      {focusedField === "phone" && (
                        <motion.div
                          layoutId="inputGlow"
                          className="absolute -inset-1 bg-[#00D9FF]/10 blur-md -z-10"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div className="relative">
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                  >
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <Building2
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === "company"
                          ? "text-[#00D9FF]"
                          : "text-white/30"
                      }`}
                    />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-14 pr-4 py-4 bg-white/[0.02] border ${
                        focusedField === "company"
                          ? "border-[#00D9FF]"
                          : "border-white/10"
                      } text-white placeholder:text-white/30 focus:outline-none transition-all`}
                      placeholder="Your Company Ltd"
                    />
                    {focusedField === "company" && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-[#00D9FF]/10 blur-md -z-10"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className={`absolute left-4 top-6 w-5 h-5 transition-colors ${
                        focusedField === "message"
                          ? "text-[#00D9FF]"
                          : "text-white/30"
                      }`}
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className={`w-full pl-14 pr-4 py-4 bg-white/[0.02] border ${
                        errors.message
                          ? "border-red-500/50"
                          : focusedField === "message"
                            ? "border-[#00D9FF]"
                            : "border-white/10"
                      } text-white placeholder:text-white/30 focus:outline-none transition-all resize-none`}
                      placeholder="Tell us about your legal needs..."
                    />
                    {focusedField === "message" && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-[#00D9FF]/10 blur-md -z-10"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                  className={`relative w-full sm:w-auto px-12 py-5 font-bold text-lg overflow-hidden transition-all ${
                    isSuccess
                      ? "bg-green-500 cursor-default"
                      : isSubmitting
                        ? "bg-white/10 cursor-wait"
                        : "bg-[#00D9FF] hover:bg-[#0088BB]"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
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
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
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
            </motion.div>

            {/* Office Hours - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Office Hours Card */}
              <div className="p-8 bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Office Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isFormInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex justify-between items-center py-4 border-b border-white/5 last:border-0"
                    >
                      <span className="text-white/70">{schedule.day}</span>
                      <span className="font-bold text-white">
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-8 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <h3 className="text-xl font-black text-white mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/60 mb-6">
                  For urgent legal matters, please call our 24/7 emergency
                  hotline.
                </p>
                <a
                  href="tel:+442071234567"
                  className="inline-flex items-center gap-2 text-[#00D9FF] font-bold hover:gap-4 transition-all"
                >
                  Call Emergency Line
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Additional Info */}
              <div className="p-8 bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-black text-white mb-4">
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
                      <div className="w-6 h-6 bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#00D9FF]">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="relative py-20 sm:py-32 bg-[#0D1425]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              Visit Our Office
            </h2>
            <p className="text-lg text-white/60">
              Located in the heart of London's legal district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            {/* Map Container with Border Effect */}
            <div className="relative p-2 bg-gradient-to-br from-[#00D9FF]/20 to-transparent">
              <div className="relative h-[500px] sm:h-[600px] bg-white/[0.02] border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9234567890123!2d-0.1435423386339631!3d51.51632903444329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzU4LjgiTiAwwrAwOCczNi44Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125 brightness-90"
                />

                {/* Overlay Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00D9FF]/50 pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00D9FF]/50 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#00D9FF]/50 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00D9FF]/50 pointer-events-none" />
              </div>
            </div>

            {/* Map Info Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 sm:left-auto sm:right-8 sm:w-96 p-6 bg-[#0A0F1C]/95 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Chambers & Associates
                  </h4>
                  <p className="text-sm text-white/60 mb-3">
                    123 Fleet Street, London EC4A 2AB
                  </p>
                  <a
                    href="https://maps.google.com/?q=51.51632903444329,-0.1435423386339631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#00D9FF] hover:gap-3 transition-all"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Directions Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-3 gap-6 mt-12"
          >
            <div className="p-6 bg-white/[0.02] border border-white/10">
              <h4 className="text-sm font-bold tracking-wider uppercase text-[#00D9FF] mb-2">
                Underground
              </h4>
              <p className="text-white/60 text-sm">
                Temple Station (Circle & District lines) - 3 min walk
              </p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/10">
              <h4 className="text-sm font-bold tracking-wider uppercase text-[#00D9FF] mb-2">
                Bus
              </h4>
              <p className="text-white/60 text-sm">
                Routes 11, 15, 26, 76 - Fleet Street stop
              </p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/10">
              <h4 className="text-sm font-bold tracking-wider uppercase text-[#00D9FF] mb-2">
                Parking
              </h4>
              <p className="text-white/60 text-sm">
                Chancery Lane Car Park - 5 min walk
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white">
              Prefer to Speak Directly?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Our team is available to discuss your legal needs over the phone.
            </p>
            <Link
              href="tel:+442071234567"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#00D9FF] text-white font-bold hover:bg-[#0088BB] transition-all"
            >
              <Phone className="w-5 h-5" />
              +44 20 7123 4567
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
