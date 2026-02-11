"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Users,
  Building2,
  ShieldAlert,
  Globe,
  Zap,
  Home,
  Gavel,
  Briefcase,
  UserX,
  Shield,
  Handshake,
  ArrowRight,
  CheckCircle2,
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
    id: "money-recovery",
    title: "Money Recovery Claims",
    icon: Scale,
    description:
      "Strategic debt recovery and enforcement proceedings to secure outstanding sums efficiently.",
  },
  {
    id: "partnership-disputes",
    title: "Partnership Disputes",
    icon: Users,
    description:
      "Resolution of partnership disagreements, dissolution matters, and profit-sharing conflicts.",
  },
  {
    id: "corporate-insolvency",
    title: "Corporate Insolvency Disputes",
    icon: Building2,
    description:
      "Insolvency litigation including creditor claims, director disputes, and liquidation matters.",
  },
  {
    id: "injunction-cases",
    title: "Injunction Applications",
    icon: ShieldAlert,
    description:
      "Urgent interim relief including freezing orders, search orders, and protective injunctions.",
  },
  {
    id: "contractual-disputes",
    title: "Contractual Disputes",
    icon: FileText,
    description:
      "Advice and representation in contract breaches and enforcement of contractual rights.",
  },
  {
    id: "cross-border-litigation",
    title: "Cross Border Litigation",
    icon: Globe,
    description:
      "International disputes addressing jurisdiction, enforcement, and cross-border investigations.",
  },
  {
    id: "energy-projects",
    title: "Energy & Projects Disputes",
    icon: Zap,
    description:
      "Specialist litigation for infrastructure, energy, and construction-related disputes.",
  },
  {
    id: "real-estate-litigation",
    title: "Real Estate Litigation",
    icon: Home,
    description:
      "Landlord and tenant matters, boundary disputes, and property-related litigation.",
  },
  {
    id: "arbitrations",
    title: "Domestic & International Arbitration",
    icon: Gavel,
    description:
      "Representation in commercial arbitration under leading institutional rules.",
  },
  {
    id: "labour-litigation",
    title: "Labour Litigation",
    icon: Briefcase,
    description:
      "Employment tribunal advocacy and workplace dispute resolution.",
  },
  {
    id: "shareholders-dispute",
    title: "Shareholder Disputes",
    icon: UserX,
    description:
      "Oppression claims, minority shareholder protection, and corporate governance disputes.",
  },
  {
    id: "insurance-disputes",
    title: "Insurance Disputes",
    icon: Shield,
    description:
      "Policy interpretation, coverage disputes, and subrogation claims.",
  },
  {
    id: "mediation",
    title: "Mediation",
    icon: Handshake,
    description:
      "Cost-effective alternative dispute resolution through structured mediation.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Businesses & Corporations",
    description:
      "Strategic litigation support for commercial and corporate disputes.",
  },
  {
    title: "Individual Claimants",
    description:
      "Expert representation in civil and commercial matters.",
  },
  {
    title: "International Clients",
    description:
      "Cross-border dispute resolution and arbitration services.",
  },
  {
    title: "Insurers & Policyholders",
    description:
      "Representation in complex coverage and insurance disputes.",
  },
];

export default function LitigationADR() {
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
              <div className="h-px w-8 bg-cyan-400"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                Litigation & ADR
              </span>
              <div className="h-px w-8 bg-cyan-400"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Strategic Litigation & Dispute Resolution
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Experienced representation across commercial litigation,
              arbitration, and alternative dispute resolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Resolving Disputes Efficiently and Effectively
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Disputes can be costly and disruptive. Our litigation team
            delivers strategic, solution-driven advice focused on achieving
            early and commercially sound outcomes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We regularly appear before County and High Courts and provide
            clear tactical guidance across all stages of dispute resolution.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Litigation & ADR Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dispute resolution services across multiple sectors.
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
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting businesses, individuals, and international clients.
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
          <div className="bg-gradient-to-br from-[#2C4A6B] to-[#3D5F8A] rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need Litigation or ADR Support?
            </h2>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our litigation team for strategic advice and
              representation tailored to your dispute.
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