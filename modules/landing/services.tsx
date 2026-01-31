"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CircleDot,
  Coins,
  FileText,
  Gavel,
  Home,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

interface Service {
  icon: typeof Briefcase;
  title: string;
  description: string;
  href: string;
  gradient: string;
  features: string[];
}
const services: Service[] = [
  {
    icon: Building2,
    title: "Corporate Law",
    description:
      "Strategic legal counsel for mergers, acquisitions, restructuring, and complex corporate transactions.",
    href: "/services/corporate",
    gradient: "[#4988C4]",
    features: [
      "M&A Advisory",
      "Corporate Governance",
      "Due Diligence",
      "Restructuring",
    ],
  },
  {
    icon: Gavel,
    title: "Litigation & ADR",
    description:
      "Expert representation in commercial disputes, arbitration, mediation, and alternative dispute resolution.",
    href: "/services/litigation",
    gradient: "[#4988C4]",
    features: [
      "Commercial Litigation",
      "Arbitration",
      "Mediation",
      "Tribunal Representation",
    ],
  },
  {
    icon: Users,
    title: "Employment Law",
    description:
      "Comprehensive employment solutions covering contracts, disputes, tribunals, and workplace regulations.",
    href: "/services/employment",
    gradient: "[#4988C4]",
    features: [
      "Employment Contracts",
      "Tribunal Claims",
      "HR Compliance",
      "Redundancy",
    ],
  },
  {
    icon: Coins,
    title: "Banking & Finance",
    description:
      "Sophisticated financial law expertise for lending, structured finance, regulatory compliance, and transactions.",
    href: "/services/banking",
    gradient: "[#4988C4]",
    features: [
      "Corporate Finance",
      "Asset Finance",
      "Regulatory",
      "Debt Recovery",
    ],
  },
  {
    icon: FileText,
    title: "Commercial Law",
    description:
      "Comprehensive commercial legal services including contracts, partnerships, and business transactions.",
    href: "/services/commercial",
    gradient: "[#4988C4]",
    features: [
      "Contract Law",
      "Partnership Agreements",
      "IP & Technology",
      "Data Protection",
    ],
  },
  {
    icon: Home,
    title: "Property Law",
    description:
      "Full-service property law covering residential, commercial transactions, development, and disputes.",
    href: "/services/property",
    gradient: "[#4988C4]",
    features: [
      "Commercial Property",
      "Residential",
      "Planning",
      "Property Disputes",
    ],
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <section
      ref={servicesRef}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-[#0A0F1C] to-[#0D1425]"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00D9FF 1px, transparent 1px),
              linear-gradient(to bottom, #00D9FF 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#00D9FF]/10 to-[#7B2FFF]/10 border border-[#00D9FF]/20">
            <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent px-4">
            Practice Areas
          </h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto px-4">
            Comprehensive legal services backed by decades of experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              className="group"
            >
              <Link href={service.href} className="block h-full">
                <div className="relative h-full p-6 sm:p-8 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                    animate={{ opacity: activeService === index ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with Morphing Background */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-${service.gradient} flex items-center justify-center relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {activeService === index && (
                      <motion.div
                        className={`absolute -inset-2 bg-${service.gradient} blur-xl`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/50 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features with Stagger Animation */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm text-white/40"
                      >
                        <CircleDot className="w-3 h-3 text-[#00D9FF]" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Arrow with Trail Effect */}
                  <div className="flex items-center gap-2 text-white/70 group-hover:text-[#00D9FF] transition-colors">
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Learn More
                    </span>
                    <motion.div
                      animate={activeService === index ? { x: [0, 8, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent"
                    animate={{ opacity: activeService === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
