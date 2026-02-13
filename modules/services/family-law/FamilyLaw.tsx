"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Scale,
  Baby,
  FileText,
  Home,
  Handshake,
  Globe,
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
    id: "divorce",
    title: "Divorce & Civil Partnership",
    icon: Heart,
    description:
      "Strategic advice and representation in divorce and civil partnership dissolution proceedings.",
  },
  {
    id: "financial-disputes",
    title: "Financial Disputes",
    icon: Scale,
    description:
      "Resolution of asset division, maintenance, and complex financial settlements.",
  },
  {
    id: "child-arrangements",
    title: "Child Arrangement Orders",
    icon: Baby,
    description:
      "Advice and advocacy in child residence, contact, and relocation matters.",
  },
  {
    id: "pre-post-nuptials",
    title: "Pre & Post Nuptial Agreements",
    icon: FileText,
    description:
      "Drafting and negotiation of prenuptial and postnuptial agreements.",
  },
  {
    id: "cohabitation",
    title: "Cohabitation Agreements",
    icon: Home,
    description:
      "Clear contractual arrangements for unmarried partners.",
  },
  {
    id: "separation",
    title: "Separation Agreements",
    icon: Handshake,
    description:
      "Negotiated separation terms formalised without court proceedings.",
  },
  {
    id: "international",
    title: "International Family Disputes",
    icon: Globe,
    description:
      "Cross-border family matters involving multiple jurisdictions.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Domestic Families",
    description:
      "Individuals and families requiring expert family law representation.",
  },
  {
    title: "International Clients",
    description:
      "Cross-border families with global asset or jurisdictional considerations.",
  },
  {
    title: "High Net Worth Individuals",
    description:
      "Complex financial disputes involving significant asset portfolios.",
  },
  {
    title: "Cohabiting Partners",
    description:
      "Unmarried couples seeking structured legal protections.",
  },
];

export default function FamilyLaw() {
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
                Family Law
              </span>
              <div className="h-px w-8 bg-[#00a3a3]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Trusted Family Law Advisors
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Strategic, pragmatic, and compassionate legal support
              across all aspects of family law.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2c5697] mb-6">
            Practical and Sensitive Legal Guidance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Family proceedings can be emotionally and financially challenging.
            Our team provides strategic advice focused on protecting your
            interests while working toward efficient, balanced outcomes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We regularly advise on complex financial disputes, child
            arrangements, and international family matters.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5697] mb-4">
              Our Family Law Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive advisory and dispute resolution services.
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
              Supporting individuals and families across jurisdictions.
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
              Need Family Law Advice?
            </h2>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Speak to our experienced family law team for strategic,
              sensitive, and effective representation.
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