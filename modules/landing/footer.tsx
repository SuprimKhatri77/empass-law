"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
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

const SECTIONS: FooterSection[] = [
  {
    title: "Practice areas",
    links: [
      { label: "Corporate & M&A", href: "/services/corporate-law" },
      { label: "Litigation & ADR", href: "/services/litigation-and-adr" },
      { label: "Employment Law", href: "/services/employment" },
      { label: "Banking & Finance", href: "/services/banking-finance" },
      { label: "Commercial Law", href: "/services/commercial-law" },
      { label: "Real Estate", href: "/services/property" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our team", href: "/team" },
      { label: "Careers", href: "/career" },
      { label: "Case studies", href: "/our-work" },
      { label: "News & insights", href: "/insights" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
];

const SOCIALS: { icon: typeof Linkedin; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-block relative w-40 h-11"
              aria-label="Empass Law home"
            >
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-stone-500 leading-relaxed max-w-sm">
              A London-headquartered law firm delivering exceptional legal
              outcomes for clients worldwide since 1892.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <a
                href="tel:+442071234567"
                className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                  <Phone className="w-4 h-4" aria-hidden />
                </div>
                <span className="font-medium">+44 20 7123 4567</span>
              </a>
              <a
                href="mailto:info@empass.law"
                className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                  <Mail className="w-4 h-4" aria-hidden />
                </div>
                <span className="font-medium">info@empass.law</span>
              </a>
              <div className="flex items-start gap-3 text-stone-400">
                <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden />
                </div>
                <span className="pt-2">123 Fleet Street, London EC4A 2AB</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-lg bg-stone-900 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                >
                  <s.icon className="w-5 h-5" aria-hidden />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-400 hover:text-white transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-stone-500">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p>© {new Date().getFullYear()} Empass Law. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hidden sm:block w-1 h-1 rounded-full bg-stone-700" />
              <span className="text-xs">SRA Regulated</span>
              <span className="w-1 h-1 rounded-full bg-stone-700" />
              <span className="text-xs">ISO 27001 Certified</span>
            </div>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-stone-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-stone-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-stone-400 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
