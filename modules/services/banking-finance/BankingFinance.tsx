"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  FileText,
  Building2,
  ShieldCheck,
  TrendingUp,
  Home,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
} from "lucide-react";
import Link from "next/link";

interface ServiceOffering {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
}

interface ClientType {
  title: string;
  description: string;
}

const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "facility-documentation",
    title: "Facility Documentation & Transaction Structure",
    icon: FileText,
    description:
      "Preparation and negotiation of facility documentation with strategic transaction structuring.",
  },
  {
    id: "property-finance",
    title: "Property Finance & Construction",
    icon: Home,
    description:
      "Advice on property and construction finance, development projects, and secured lending.",
  },
  {
    id: "security-documents",
    title: "Security Documentation",
    icon: ShieldCheck,
    description:
      "Drafting and perfection of security documents tailored to commercial objectives.",
  },
  {
    id: "personal-guarantees",
    title: "Personal Guarantees",
    icon: FileText,
    description:
      "Advice on personal guarantees at execution and enforcement stages.",
  },
  {
    id: "banking-documents",
    title: "Banking Documents Review",
    icon: Banknote,
    description:
      "Review and advisory services for guarantees, bonds, and security documentation.",
  },
  {
    id: "security-removal",
    title: "Removal of Existing Security",
    icon: ShieldCheck,
    description:
      "Management of discharge and restructuring of existing security arrangements.",
  },
  {
    id: "refinancing",
    title: "Refinancing Solutions",
    icon: TrendingUp,
    description:
      "Strategic advice on refinancing, bridging, development, and investment finance.",
  },
  {
    id: "mezzanine-finance",
    title: "Mezzanine Finance",
    icon: CircleDollarSign,
    description:
      "Structured mezzanine and subordinated debt arrangements.",
  },
  {
    id: "specialized-finance",
    title: "Specialized Finance",
    icon: Building2,
    description:
      "Sector-specific finance advice including social housing, healthcare, and charity finance.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Institutional Lenders",
    description:
      "Banks and financial institutions requiring structured legal support.",
  },
  {
    title: "Non-Institutional Lenders",
    description:
      "Private lenders and alternative finance providers.",
  },
  {
    title: "Borrowers & Businesses",
    description:
      "Companies and individuals securing commercial financing.",
  },
  {
    title: "Overseas Banks",
    description:
      "International banks operating within the UK market.",
  },
];

export default function BankingFinance() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#2C4A6B] via-[#34547A] to-[#3D5F8A] text-white py-24 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#00a3a3]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#00a3a3] uppercase">
                Banking & Finance
              </span>
              <div className="h-px w-8 bg-[#00a3a3]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Banking & Finance Law
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Strategic legal advice across structured finance,
              refinancing, and complex lending transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2c5697] mb-6">
            Comprehensive Banking & Finance Solutions
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our banking team advises lenders and borrowers locally,
            nationally, and internationally on loan agreements,
            guarantee facilities, invoice discounting, lease, and hire purchase.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We act across refinancing, bridging, development,
            investment, mezzanine, social housing, healthcare,
            and charity finance structures.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5697] mb-4">
              Our Banking & Finance Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advisory and transactional expertise for lenders and borrowers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_OFFERINGS.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 sm:p-8 bg-white border border-gray-200 rounded-lg hover:border-[#2C4A6B] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#2C4A6B]/10 transition-colors">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#2C4A6B]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2c5697] mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT TYPES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5697] mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting lenders, borrowers, and financial institutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#2C4A6B] hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-[#2C4A6B] mb-4" />
                <h3 className="font-semibold text-[#2c5697] mb-2">
                  {client.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#2C4A6B] to-[#3D5F8A] rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Require Banking & Finance Advice?
            </h2>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our experienced team for structured,
              commercially focused legal guidance.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C4A6B] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}