"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

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
      { label: "Corporate", href: "/services/corporate-law" },
      { label: "Litigation & ADR", href: "/services/litigation-and-adr" },
      { label: "Employment", href: "/services/employment" },
      { label: "Property", href: "/services/property" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/career" },
      { label: "Case studies", href: "/our-work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
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
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-block relative w-36 h-10"
              aria-label="Empass Law home"
            >
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-stone-500 text-sm max-w-sm leading-relaxed">
              A London-headquartered law firm delivering high-quality legal
              outcomes for clients globally.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+442071234567"
                className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden />
                +44 20 7123 4567
              </a>
              <a
                href="mailto:info@empass.law"
                className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden />
                info@empass.law
              </a>
              <p className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden />
                123 Fleet Street, London EC4A 2AB
              </p>
            </div>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
                >
                  <s.icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <ChevronRight
                          className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100"
                          aria-hidden
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Empass Law. All rights reserved.</p>
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
