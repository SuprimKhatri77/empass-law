"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Handshake,
  ShieldCheck,
  Scale,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

/* ---------------- Types ---------------- */

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

/* ---------------- Data ---------------- */

const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "commercial-contracts",
    title: "Commercial Contracts",
    icon: FileText,
    description:
      "Drafting and negotiating comprehensive commercial contracts tailored to protect your business interests and ensure legal compliance.",
  },
  {
    id: "distribution-agreements",
    title: "Distribution Agreements",
    icon: Handshake,
    description:
      "Expert advice on distribution and supply agreements, including territory rights, pricing structures, and termination provisions.",
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",
    icon: FileCheck,
    description:
      "Bespoke terms and conditions for sales, services, and online transactions.",
  },
  {
    id: "partnership-agreements",
    title: "Partnership Agreements",
    icon: Briefcase,
    description:
      "Clear partnership structures covering rights, responsibilities, and exit strategies.",
  },
  {
    id: "franchise-law",
    title: "Franchise Law",
    icon: Building2,
    description:
      "Comprehensive franchise documentation and regulatory compliance support.",
  },
  {
    id: "commercial-disputes",
    title: "Commercial Dispute Resolution",
    icon: Scale,
    description:
      "Strategic dispute resolution through negotiation, mediation, or litigation.",
  },
  {
    id: "supplier-agreements",
    title: "Supplier Agreements",
    icon: Handshake,
    description:
      "Robust procurement contracts covering quality standards and delivery terms.",
  },
  {
    id: "licensing-agreements",
    title: "Licensing Agreements",
    icon: ShieldCheck,
    description:
      "IP licensing agreements with appropriate commercial protections.",
  },
  {
    id: "joint-ventures",
    title: "Joint Ventures",
    icon: Briefcase,
    description:
      "Strategic joint venture structures defining contributions and profit sharing.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "SMEs & Start-ups",
    description:
      "Scalable commercial legal solutions for growing businesses.",
  },
  {
    title: "Established Businesses",
    description:
      "Sophisticated contract and risk management support.",
  },
  {
    title: "International Traders",
    description:
      "Cross-border commercial transaction advisory.",
  },
  {
    title: "Franchise Operations",
    description:
      "Specialised legal expertise for franchise systems.",
  },
];

/* ---------------- Component ---------------- */

export default function CommercialLaw() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#2C4A6B] via-[#34547A] to-[#3D5F8A] text-white py-24 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#00a3a3]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#00a3a3] uppercase">
                Commercial Law
              </span>
              <div className="h-px w-8 bg-[#00a3a3]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Law Services
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Strategic legal advice across contracts, partnerships,
              franchise structures, and commercial disputes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#2c5697] mb-6">
              Comprehensive Commercial Legal Support
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our commercial law team advises businesses at every stage —
              from start-up structuring and contract drafting to complex
              negotiations and dispute resolution.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We deliver commercially focused solutions aligned with your
              operational and strategic objectives.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5697] mb-4">
                Our Commercial Law Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advisory and transactional expertise across commercial operations.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_OFFERINGS.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="group p-6 sm:p-8 bg-white border border-gray-200 rounded-lg hover:border-[#2C4A6B] hover:shadow-lg transition-[box-shadow,border-color] duration-300 ease-out"
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
              Supporting businesses across industries and growth stages.
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
              Need Commercial Legal Advice?
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