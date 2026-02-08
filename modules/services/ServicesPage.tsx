"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  FileText,
  Banknote,
  Scale,
  Briefcase,
  Home,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// Type definitions
interface Service {
  id: string;
  title: string;
  slug: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  image: string;
  size: "large" | "medium" | "small";
}

interface ServicesPageProps {
  className?: string;
}

// Data - Organized for Bento Grid
const SERVICES: Service[] = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    slug: "./services/corporate-law",
    icon: Building2,
    description:
      "Strategic guidance on M&A, private equity, and corporate finance for complex transactions.",
    highlights: [
      "Mergers & Acquisitions",
      "Private Equity",
      "Corporate Finance",
    ],
    image: "/services/coporate-law.jpg",
    size: "large",
  },
  {
    id: "property-law",
    title: "Property Law",
    slug: "property-law",
    icon: Home,
    description:
      "Prime London property transactions with expertise in complex structures for UHNW clients.",
    highlights: [
      "Residential Sales",
      "Commercial Property",
      "Property Finance",
    ],
    image: "/services/property-law.jpg",
    size: "large",
  },
  {
    id: "litigation-adr",
    title: "Litigation & ADR",
    slug: "./services/litigation-and-adr",
    icon: Scale,
    description:
      "Commercial litigation and dispute resolution across County and High Courts.",
    highlights: ["Commercial Litigation", "Mediation", "Contract Disputes"],
    image: "/services/litigation-adr.jpg",
    size: "medium",
  },
  {
    id: "family-law",
    title: "Family Law",
    slug: "family-law",
    icon: Heart,
    description:
      "Complex international family matters with strategic, pragmatic approach.",
    highlights: [
      "Divorce & Separation",
      "Financial Disputes",
      "Nuptial Agreements",
    ],
    image: "/services/family-law.jpg",
    size: "medium",
  },
  {
    id: "commercial-law",
    title: "Commercial Law",
    slug: "./services/commercial-law",
    icon: FileText,
    description: "Commercial contracts and business transactions protection.",
    highlights: ["Contracts", "Agreements", "Partnerships"],
    image: "/services/commercial-law.jpg",
    size: "small",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    slug: "./services/banking-finance",
    icon: Banknote,
    description: "Specialized lending and financial regulations counsel.",
    highlights: ["Secured Lending", "Refinancing", "Finance Docs"],
    image: "/services/banking-finance.jpg",
    size: "small",
  },
  {
    id: "employment-law",
    title: "Employment Law",
    slug: "./services/employment-law",
    icon: Briefcase,
    description: "Employment contracts to tribunal representation.",
    highlights: ["Contracts", "Tribunals", "Settlements"],
    image: "/services/employment-law.jpg",
    size: "small",
  },
];

const ServicesPage: React.FC<ServicesPageProps> = ({ className = "" }) => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <div className={`relative bg-stone-50 overflow-hidden ${className}`}>
      {/* Dot pattern background with vertical mask - DENSER */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(120 113 108 / 0.25) 1.5px, transparent 0)`,
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />
      </div>

      {/* Curved storytelling lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(217 119 6)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(217 119 6)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(217 119 6)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(120 113 108)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(120 113 108)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(120 113 108)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 300 Q 400 200 800 400 T 1600 300"
          stroke="url(#curveGradient1)"
          strokeWidth="2"
          fill="none"
          className="opacity-60"
        />
        <path
          d="M 200 100 Q 600 250 1000 150 T 1800 200"
          stroke="url(#curveGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="opacity-40"
        />
      </svg>

      {/* Header Section */}
      <section
        className="relative pt-32 pb-20 sm:pb-32 overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-amber-600" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-700">
                Our Services
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.05] tracking-tight mb-6">
              Comprehensive legal solutions
            </h1>

            <p className="text-xl sm:text-2xl text-stone-600 leading-relaxed">
              Expert counsel across corporate, commercial, property, and family
              law matters—delivered with precision and commercial pragmatism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section
        ref={gridRef}
        className="relative py-12 sm:py-20"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Row 1 - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <Building2 className="w-10 h-10 text-white/80 mb-4" />
                <div className="text-5xl font-black text-white mb-2">15+</div>
                <p className="text-white/90 font-semibold">Years Experience</p>
              </div>
              {/* Lightning effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <Scale className="w-10 h-10 text-white/80 mb-4" />
                <div className="text-5xl font-black text-white mb-2">500+</div>
                <p className="text-white/90 font-semibold">Cases Handled</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 p-8 border-2 border-stone-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <Sparkles className="w-10 h-10 text-amber-600 mb-4" />
                <div className="text-5xl font-black text-stone-900 mb-2">
                  98%
                </div>
                <p className="text-stone-700 font-semibold">
                  Client Satisfaction
                </p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </div>
            </motion.div>

            {/* Row 2 - Main Services */}
            {/* Corporate Law - Large */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-stone-200 hover:border-amber-500 transition-all duration-300 lg:col-span-2 lg:row-span-2"
            >
              {/* Lightning effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-500/50 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-200" />
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <Image
                  src="/services/coporate-law.jpg"
                  alt="Corporate Law"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <div className="relative h-full p-8 sm:p-10 flex flex-col">
                <div className="mb-auto">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-600/10 to-amber-600/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-amber-700" />
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4 group-hover:text-amber-900 transition-colors">
                    Corporate Law
                  </h2>

                  <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                    Strategic guidance on M&A, private equity, corporate
                    finance, and complex transactions for domestic and
                    cross-border deals.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Mergers & Acquisitions",
                      "Private Equity",
                      "Corporate Finance",
                      "Governance",
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-semibold text-amber-700 bg-amber-50 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="/services/corporate-law"
                  className="inline-flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-amber-700 transition-colors group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>

            {/* Property Law */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-stone-200 hover:border-amber-500 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-6 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                  Property Law
                </h3>

                <p className="text-sm text-stone-600 mb-4">
                  Prime London property expertise for UHNW clients.
                </p>

                <a
                  href="/property-law"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/link"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>

            {/* Litigation */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-stone-200 hover:border-amber-500 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-6 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                  Litigation & ADR
                </h3>

                <p className="text-sm text-stone-600 mb-4">
                  Commercial disputes and mediation services.
                </p>

                <a
                  href="/services/litigation-and-adr"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/link"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>

            {/* Row 3 - Other Services */}
            {[
              {
                title: "Commercial Law",
                icon: FileText,
                slug: "./services/commercial-law",
              },
              {
                title: "Banking & Finance",
                icon: Banknote,
                slug: "./services/banking-finance",
              },
              {
                title: "Employment Law",
                icon: Briefcase,
                slug: "./services/employment-law",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-stone-200 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
                  </div>

                  <div className="relative h-full p-6 flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600/10 to-amber-600/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>

                    <h3 className="font-display text-lg font-bold text-stone-900 mb-2">
                      {service.title}
                    </h3>

                    <a
                      href={service.slug}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/link"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              );
            })}

            {/* Family Law - Tall */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 lg:row-span-2"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col">
                <div className="mb-auto">
                  <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-rose-600" />
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                    Family Law
                  </h2>

                  <p className="text-stone-700 leading-relaxed mb-6">
                    Sensitive handling of divorce, separation, and complex
                    international family matters with strategic approach.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      "Divorce & Separation",
                      "Financial Disputes",
                      "Nuptial Agreements",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-stone-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/family-law"
                  className="inline-flex items-center gap-2 text-sm font-bold text-rose-700 hover:text-rose-800 transition-colors group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 lg:col-span-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                  className="absolute inset-0"
                />
              </div>

              <div className="relative">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to discuss your case?
                </h3>
                <p className="text-white/70 mb-6 max-w-md">
                  Our expert team is here to provide strategic legal counsel
                  tailored to your needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors group/btn"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 border-2 border-white/20 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>View Pricing</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20 sm:py-32" style={{ zIndex: 2 }}>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-[2px] bg-amber-600" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-700">
                Why Empass Law
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
              Your trusted legal partners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Dual-Qualified Expertise",
                description:
                  "UK and international qualified lawyers with deep experience across jurisdictions and practice areas.",
              },
              {
                number: "02",
                title: "Client-Centered Approach",
                description:
                  "Personalized service tailored to your objectives, delivered with commercial pragmatism and clarity.",
              },
              {
                number: "03",
                title: "Proven Track Record",
                description:
                  "Decades of combined experience navigating complex legal matters for businesses and UHNW individuals.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-stone-200 hover:border-amber-600/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Lightning effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
                </div>

                <div className="relative">
                  <div className="text-6xl font-black text-amber-600/10 mb-4 group-hover:text-amber-600/20 transition-colors">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32" style={{ zIndex: 2 }}>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-12 sm:p-16 lg:p-20 text-center"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "48px 48px",
                }}
              />
            </div>

            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to discuss your legal needs?
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Our team is here to provide expert counsel tailored to your
                objectives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  <span>All Services</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
