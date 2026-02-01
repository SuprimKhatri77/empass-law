"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  FileText,
  UserX,
  Scale,
  AlertCircle,
  FileCheck,
  ShieldCheck,
  Users,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

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

interface EmploymentLawProps {
  className?: string;
}

// Data
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "employment-contracts",
    title: "Contracts of Employment",
    icon: FileText,
    description:
      "Drafting, reviewing, and advising on employment contracts and varying contractual terms to ensure compliance and protect interests.",
  },
  {
    id: "wrongful-dismissal",
    title: "Wrongful & Unfair Dismissal Claims",
    icon: UserX,
    description:
      "Expert representation in wrongful dismissal and unfair dismissal claims for both employers and employees.",
  },
  {
    id: "tribunal-representation",
    title: "Employment Tribunal Representation",
    icon: Scale,
    description:
      "Comprehensive tribunal representation, issuing and defending claims with strategic litigation support throughout proceedings.",
  },
  {
    id: "disciplinary-grievance",
    title: "Disciplinary & Grievance Procedures",
    icon: AlertCircle,
    description:
      "Guidance on implementing fair disciplinary and grievance procedures, ensuring compliance with employment law requirements.",
  },
  {
    id: "settlement-agreements",
    title: "Settlement Agreements",
    icon: FileCheck,
    description:
      "Negotiating and drafting settlement agreements to resolve employment disputes efficiently and protect both parties.",
  },
  {
    id: "restrictive-covenants",
    title: "Restrictive Covenants",
    icon: ShieldCheck,
    description:
      "Advising on restrictive covenants, non-compete clauses, and enforceability to protect business interests.",
  },
  {
    id: "redundancy",
    title: "Redundancy Procedures",
    icon: Users,
    description:
      "Strategic advice on redundancy processes, consultation requirements, and selection criteria to minimize risk.",
  },
  {
    id: "employment-policies",
    title: "Employment Policies & Handbooks",
    icon: ClipboardList,
    description:
      "Creating comprehensive employment policies and handbooks ensuring legal compliance and best practices.",
  },
  {
    id: "tupe-transfers",
    title: "TUPE Transfers",
    icon: Briefcase,
    description:
      "Expert guidance on Transfer of Undertakings (TUPE) regulations, employee rights, and employer obligations.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Domestic Organizations",
    description: "UK-based businesses requiring comprehensive employment law support",
  },
  {
    title: "National Companies",
    description: "Companies operating across the UK with multi-site employment needs",
  },
  {
    title: "International Organizations",
    description: "Global organizations needing UK employment law expertise and compliance",
  },
  {
    title: "Individual Employees",
    description: "Employees seeking representation and advice on workplace matters",
  },
];

const EmploymentLaw: React.FC<EmploymentLawProps> = ({ className = "" }) => {
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
                <span className="px-6 py-2 border border-[#4988C4]/20 bg-[#4988C4]/5 text-[#4988C4] text-xs font-bold tracking-widest uppercase">
                  Practice Area
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Employment Law
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Expertise in all aspects of Employment Law
              </p>
              <div className="h-px bg-gradient-to-r from-[#4988C4] via-[#4988C4]/50 to-transparent w-48 mb-8" />
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
                <img
                  src="/services/Employment-Law-banner.webp"
                  alt="Employment Law"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/20 via-transparent to-[#0A0F1C]/40" />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#4988C4]/30" />
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
                Comprehensive Employment Law Solutions
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                We advise several domestic, national and international organizations on
                employment-related issues, both in litigation, consultancy, and advisory
                transactions. We ensure our clients are compliant with employment laws.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Our employment team provides practical advice for employers and employees across
                all aspects of employment law, from contracts to tribunal representation. We help
                businesses navigate complex employment regulations while supporting individuals in
                protecting their workplace rights.
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
              Our Employment Law Services
            </h2>
            <p className="text-white/60 max-w-2xl">
              Our employment team regularly advises on:
            </p>
            <div className="h-px bg-gradient-to-r from-[#4988C4] via-[#4988C4]/50 to-transparent w-64 mt-6" />
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
                      <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-[#4988C4]/30 transition-colors duration-200">
                        <Icon className="w-7 h-7 text-white/70 group-hover:text-[#4988C4] transition-colors duration-200" />
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
                    {/* <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-[#4988C4] transition-colors duration-200">
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
              From domestic organizations to international companies, we provide expert employment
              law advice across all sectors and client types.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                animate={clientsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#4988C4]/30 transition-colors duration-200"
              >
                <div className="mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#4988C4]" />
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
                <div className="text-4xl font-black text-[#4988C4] mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Compliance Expertise
                </h3>
                <p className="text-white/50 leading-relaxed">
                  We ensure our clients are fully compliant with employment laws and regulations,
                  minimizing legal risks and protecting both parties.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dual Representation
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Experience representing both employers and employees provides balanced
                  perspective and effective solutions for all parties.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Practical Solutions
                </h3>
                <p className="text-white/50 leading-relaxed">
                  We deliver practical, business-focused advice on employment matters through
                  litigation, consultancy, and advisory services.
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
              Need Employment Law Support?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to inquire about our employment law services and ensure your
              organization remains compliant while protecting employee rights.
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
              <div className="w-2 h-2 bg-[#4988C4]/30" />
              <div className="w-2 h-2 bg-[#4988C4]/60" />
              <div className="w-2 h-2 bg-[#4988C4]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentLaw;