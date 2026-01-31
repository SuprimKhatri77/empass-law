"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
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
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Type definitions
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

interface LitigationADRProps {
  className?: string;
}

// Data
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "money-recovery",
    title: "Money Recovery Claims",
    icon: Scale,
    description:
      "Strategic debt recovery and money claims litigation with efficient enforcement procedures to secure what you're owed.",
  },
  {
    id: "partnership-disputes",
    title: "Partnership Disputes",
    icon: Users,
    description:
      "Expert resolution of partnership disagreements, dissolution matters, and disputes over profit sharing and management.",
  },
  {
    id: "corporate-insolvency",
    title: "Corporate Insolvency Disputes",
    icon: Building2,
    description:
      "Comprehensive insolvency litigation services covering creditor claims, director disputes, and liquidation proceedings.",
  },
  {
    id: "injunction-cases",
    title: "Injunction Cases",
    icon: ShieldAlert,
    description:
      "Urgent injunction applications and defenses, including freezing orders, search orders, and interim relief measures.",
  },
  {
    id: "contractual-disputes",
    title: "Contractual Disputes",
    icon: FileText,
    description:
      "Resolution of contract breaches, interpretation disputes, and enforcement of contractual obligations and remedies.",
  },
  {
    id: "cross-border-litigation",
    title: "Cross Border Litigation & Investigations",
    icon: Globe,
    description:
      "International dispute resolution with expertise in jurisdictional issues, enforcement, and cross-border investigations.",
  },
  {
    id: "energy-projects",
    title: "Energy & Projects Disputes",
    icon: Zap,
    description:
      "Specialized litigation for energy sector and major projects, covering construction, supply, and regulatory disputes.",
  },
  {
    id: "real-estate-litigation",
    title: "Real Estate Litigation",
    icon: Home,
    description:
      "Property dispute resolution including landlord and tenant, boundary disputes, easements, and development issues.",
  },
  {
    id: "arbitrations",
    title: "Domestic & International Arbitrations",
    icon: Gavel,
    description:
      "Expert arbitration representation under major arbitration rules with experience in complex commercial arbitrations.",
  },
  {
    id: "labour-litigation",
    title: "Labour Litigation",
    icon: Briefcase,
    description:
      "Employment tribunal representation and labor dispute resolution for both employers and employees.",
  },
  {
    id: "shareholders-dispute",
    title: "Shareholders Disputes",
    icon: UserX,
    description:
      "Resolution of shareholder conflicts including oppression claims, mismanagement allegations, and minority rights protection.",
  },
  {
    id: "insurance-disputes",
    title: "Insurance Disputes",
    icon: Shield,
    description:
      "Insurance claim disputes, policy interpretation, coverage issues, and subrogation claims for insurers and policyholders.",
  },
  {
    id: "mediation",
    title: "Mediation",
    icon: Handshake,
    description:
      "Expert mediation services to achieve cost-effective settlements without the time and expense of court proceedings.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Businesses & Corporations",
    description: "Companies requiring strategic litigation support for commercial disputes",
  },
  {
    title: "Individual Claimants",
    description: "Individuals seeking expert representation in civil and commercial matters",
  },
  {
    title: "International Clients",
    description: "Cross-border clients needing UK litigation and arbitration expertise",
  },
  {
    title: "Insured & Insurers",
    description: "Insurance companies and policyholders in coverage and claim disputes",
  },
];

const LitigationADR: React.FC<LitigationADRProps> = ({ className = "" }) => {
  const headerRef = React.useRef<HTMLElement>(null);
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const clientsRef = React.useRef<HTMLDivElement>(null);
  const ctaRef = React.useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const descriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const clientsInView = useInView(clientsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className={`relative bg-[#0A0F1C] ${className}`}>
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={headerRef} className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-block mb-6">
                <span className="px-6 py-2 border border-[#00D9FF]/20 bg-[#00D9FF]/5 text-[#00D9FF] text-xs font-bold tracking-widest uppercase">
                  Practice Area
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Litigation & ADR
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Expertise in all aspects of Litigation and ADR
              </p>
              <div className="h-px bg-gradient-to-r from-[#00D9FF] via-[#00D9FF]/50 to-transparent w-48 mb-8" />
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#4988C4] hover:bg-[#1C4D8D] text-white font-bold px-8 py-4 transition-colors duration-200 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 border-2 border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 transition-colors duration-200"
                >
                  <span>All Services</span>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/services/Litigation.webp"
                  alt="Litigation and ADR"
                  fill
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/20 via-transparent to-[#0A0F1C]/40" />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#00D9FF]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 lg:p-16">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
                Resolving Disputes Efficiently and Effectively
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Disputes can be costly in terms of time and money. They can also be stressful. Our
                aim is to resolve your dispute or claim, whether minor or complex, as quickly as
                possible, always in your best interests, and, if at all possible, without you
                having to embark on court action.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Early advice can be invaluable. Our litigation team has substantial commercial
                litigation experience and regularly appears in the County and High Courts. We
                deliver thoughtful, balanced, and solution-driven advice with the ability to see
                the big picture, enabling strategic and tactical recommendations as your trusted
                advisor.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our Litigation & ADR Services
            </h2>
            <p className="text-white/60 max-w-2xl">
              Our litigation team deals with various kinds of disputes, including:
            </p>
            <div className="h-px bg-gradient-to-r from-[#00D9FF] via-[#00D9FF]/50 to-transparent w-64 mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_OFFERINGS.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white/[0.02] border border-white/10 p-6 sm:p-8 h-full hover:border-white/20 transition-all duration-200">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-[#00D9FF]/30 transition-colors duration-200">
                        <Icon className="w-7 h-7 text-white/70 group-hover:text-[#00D9FF] transition-colors duration-200" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 min-h-[3.5rem] flex items-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    {/* <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-[#00D9FF] transition-colors duration-200">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section ref={clientsRef} className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Who We Serve
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From businesses to individuals, we provide expert litigation and dispute resolution
              services across all client types.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                animate={clientsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#00D9FF]/30 transition-colors duration-200"
              >
                <div className="mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#00D9FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{client.title}</h3>
                <p className="text-sm text-white/50">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 lg:p-16"
          >
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <div className="text-4xl font-black text-[#00D9FF] mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Strategic Approach
                </h3>
                <p className="text-white/50 leading-relaxed">
                  We see the big picture and deliver strategic and tactical recommendations to
                  achieve the best possible outcome for your dispute.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#00D9FF] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Court Experience
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Substantial litigation experience with regular appearances in County and High
                  Courts, including Deputy District Judge service.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#00D9FF] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dispute Resolution Focus
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Passionate about resolving disputes efficiently through mediation and negotiation,
                  avoiding unnecessary court proceedings where possible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-20 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="bg-white/[0.02] border border-white/10 p-12 sm:p-16 lg:p-20 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Need Litigation or Dispute Resolution Support?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to inquire about our litigation and ADR services. Early advice can be
              invaluable in resolving your dispute efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#4988C4] hover:bg-[#1C4D8D] text-white font-bold px-8 py-4 transition-colors duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 transition-colors duration-200"
              >
                <span>Meet Our Team</span>
              </a>
            </div>

            {/* Decorative elements */}
            <div className="mt-12 flex justify-center gap-2">
              <div className="w-2 h-2 bg-[#00D9FF]/30" />
              <div className="w-2 h-2 bg-[#00D9FF]/60" />
              <div className="w-2 h-2 bg-[#00D9FF]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LitigationADR;