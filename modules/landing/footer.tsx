"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Practice Areas",
    links: [
      { label: "Corporate Law", href: "/services/corporate" },
      { label: "Litigation", href: "/services/litigation" },
      { label: "Employment Law", href: "/services/employment" },
      { label: "Real Estate", href: "/services/property" },
      { label: "Intellectual Property", href: "/services/ip" },
      { label: "Tax Law", href: "/services/tax" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/career" },
      { label: "News & Insights", href: "/news" },
      { label: "Case Studies", href: "/our-work" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Legal Guides", href: "/guides" },
      { label: "FAQs", href: "/faq" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Book Consultation", href: "/book" },
    ],
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    color: "#E4405F",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer className="relative bg-[#0A0F1C] text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #4988C4 1px, transparent 1px),
            linear-gradient(to bottom, #4988C4 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4988C4] to-transparent" />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 mb-4 bg-gradient-to-r from-[#4988C4]/10 to-[#7B2FFF]/10 border border-[#4988C4]/20">
                <span className="text-xs font-bold tracking-widest text-[#4988C4] uppercase">
                  Newsletter
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Stay Ahead of Legal Trends
              </h3>
              <p className="text-white/60 text-lg">
                Get exclusive insights, case studies, and legal updates
                delivered to your inbox.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubscribe}
              className="relative"
            >
              <div className="relative flex gap-3">
                <div className="flex-1 relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4988C4] transition-all"
                    required
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4988C4]/20 to-[#7B2FFF]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-[#4988C4] hover:bg-[#1C4D8D] text-white font-semibold flex items-center gap-2"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-56 h-16"
              >
                <Image
                  src="/logo.png"
                  alt="Law Firm"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </motion.div>
            </Link>

            <p className="text-white/50 leading-relaxed max-w-md">
              Leading legal excellence since 1892. We combine deep expertise
              with innovative solutions to deliver exceptional outcomes for our
              clients.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+442071234567"
                className="group flex items-center gap-3 text-white/60 hover:text-[#4988C4] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#4988C4]/50 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">+44 20 7123 4567</span>
              </a>
              <a
                href="mailto:info@chambers.law"
                className="group flex items-center gap-3 text-white/60 hover:text-[#4988C4] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#4988C4]/50 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">info@chambers.law</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">
                  123 Fleet Street
                  <br />
                  London EC4A 2AB
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ y: -4 }}
                  className="relative w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white relative z-10 transition-colors" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#4988C4]/20 to-[#7B2FFF]/20"
                    initial={{ y: "100%" }}
                    animate={{ y: hoveredSocial === index ? 0 : "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <h4 className="text-sm font-bold tracking-widest uppercase text-white/90 mb-6 relative inline-block">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#4988C4] hover:bg-[#1C4D8D]" />
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#4988C4]" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-white/40">
              © {new Date().getFullYear()} Chambers & Associates. All rights
              reserved.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-white/40 hover:text-[#4988C4] transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-4 bg-white/10" />
              <Link
                href="/terms"
                className="text-white/40 hover:text-[#4988C4] transition-colors"
              >
                Terms of Service
              </Link>
              <div className="w-px h-4 bg-white/10" />
              <Link
                href="/cookies"
                className="text-white/40 hover:text-[#4988C4] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#7B2FFF]/10 to-transparent pointer-events-none" />
    </footer>
  );
}
