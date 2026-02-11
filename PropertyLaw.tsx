"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  FileText,
  Search,
  Building2,
  FileCheck,
  MapPin,
  Hammer,
  ArrowRight,
  CheckCircle2,
  Scale,
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
    id: "sale-agreement",
    title: "Sale Agreement Drafting & Review",
    icon: FileText,
    description:
      "Expert drafting and comprehensive review of sale agreements to protect your interests in property transactions.",
  },
  {
    id: "tenancy-agreement",
    title: "Tenancy Agreement Drafting & Review",
    icon: FileCheck,
    description:
      "Professional drafting and review of tenancy agreements for both residential and commercial properties.",
  },
  {
    id: "due-diligence",
    title: "Due Diligence",
    icon: Search,
    description:
      "Thorough due diligence covering title issues and regulatory compliance.",
  },
  {
    id: "business-entities",
    title: "Business Entity Creation",
    icon: Building2,
    description:
      "Formation of corporations, LLCs, partnerships, and joint ventures for property ownership.",
  },
  {
    id: "transaction-structuring",
    title: "Transaction Structuring & Financing",
    icon: Scale,
    description:
      "Strategic advice on structuring property transactions and secured financing.",
  },
  {
    id: "registration-compliance",
    title: "Registration & Stamp Duty",
    icon: MapPin,
    description:
      "Expert guidance on property registration and stamp duty compliance.",
  },
  {
    id: "redevelopment-projects",
    title: "Redevelopment & Construction",
    icon: Hammer,
    description:
      "Comprehensive legal support for redevelopment and construction projects.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Residential Property Clients",
    description: "Homebuyers, sellers, and landlords.",
  },
  {
    title: "Commercial Property Clients",
    description: "Businesses and commercial investors.",
  },
  {
    title: "Property Developers",
    description: "Development companies and construction firms.",
  },
  {
    title: "Property Investors",
    description: "Individual and institutional investors.",
  },
];

export default function PropertyLaw() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#2C4A6B] via-[#34547A] to-[#3D5F8A] text-white py-24 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-cyan-400"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                Property Law
              </span>
              <div className="h-px w-8 bg-cyan-400"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Expertise in all aspects of Property Law
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Our property team provides commercially focused advice across
              residential and commercial property matters, ensuring compliance
              and strategic structuring for optimal outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Property Law Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive property services including:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_OFFERINGS.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group p-6 sm:p-8 bg-white border border-gray-200 rounded-lg hover:border-[#2C4A6B] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#2C4A6B]/10 transition-colors">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-[#2C4A6B]" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting clients across residential and commercial sectors.
            </p>
          </motion.div>

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
                <h3 className="font-semibold text-gray-900 mb-2">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2C4A6B] to-[#3D5F8A] rounded-2xl p-10 sm:p-14 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need Property Law Support?
            </h2>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our experienced property law team is ready to provide strategic
              and pragmatic advice tailored to your transaction.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C4A6B] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}