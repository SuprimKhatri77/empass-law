"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Coins,
  FileText,
  Gavel,
  Home,
  Users,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "M&A, governance, due diligence and restructuring.",
    href: "/services/corporate-law",
  },
  {
    icon: Gavel,
    title: "Litigation & ADR",
    description: "Commercial disputes, arbitration and mediation.",
    href: "/services/litigation-and-adr",
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Contracts, tribunals and workplace compliance.",
    href: "/services/employment",
  },
  {
    icon: Coins,
    title: "Banking & Finance",
    description: "Structured finance, regulatory and transactions.",
    href: "/services/banking-finance",
  },
  {
    icon: FileText,
    title: "Commercial Law",
    description: "Contracts, partnerships and business transactions.",
    href: "/services/commercial-law",
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Residential, commercial and development.",
    href: "/services/property",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 sm:py-28 bg-stone-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex px-4 py-2 bg-amber-50 border border-amber-200/80 rounded-sm mb-6">
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Practice areas</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Comprehensive legal services backed by decades of experience.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={item.href}
                className="group block h-full p-6 sm:p-8 bg-white border border-stone-200 rounded-lg hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-5 group-hover:bg-amber-50 transition-colors">
                  <item.icon className="w-6 h-6 text-stone-600 group-hover:text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
