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
} from "lucide-react";
import Image from "next/image";

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
    <div className={`relative bg-stone-50 ${className}`}>
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#78716c 1px, transparent 1px), linear-gradient(90deg, #78716c 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <section ref={headerRef} className="relative py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <Scale className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-600">
                  Expert Legal Counsel
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-stone-900 mb-6 leading-[1.1]">
                Litigation & ADR
              </h1>

              <p className="text-xl sm:text-2xl text-stone-600 font-light mb-12 leading-relaxed">
                Expertise in all aspects of Litigation and ADR
              </p>

              <div className="h-px bg-linear-to-r from-transparent via-amber-600/30 to-transparent w-full max-w-md mx-auto mb-12" />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-10 py-4 transition-all duration-300 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-400 hover:bg-white/60 text-stone-900 font-medium px-10 py-4 transition-all duration-300"
                >
                  <span>All Services</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-21/9 overflow-hidden"
          >
            {/* Image */}
            <Image
              src="/services/Litigation.webp"
              alt="Commercial Law"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Accent gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-600/30 via-transparent to-stone-900/30" />

            {/* Left brand strip */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 h-full w-48 bg-linear-to-b from-stone-900 via-stone-900/80 to-transparent flex items-end"
            >
              <div className="p-6">
                <span className="block text-sm tracking-[0.3em] uppercase text-amber-500 mb-2">
                  Law Firm
                </span>
                <h3 className="font-serif text-2xl text-white font-medium">
                  Empass Law
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section ref={descriptionRef} className="relative py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-stone-200 p-12 sm:p-16 lg:p-20">
              <h2 className="text-3xl sm:text-4xl font-light text-stone-900 mb-8 leading-tight">
                Resolving Disputes Efficiently and Effectively
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Disputes can be costly in terms of time and money. They can also be stressful. Our
                  aim is to resolve your dispute or claim, whether minor or complex, as quickly as
                  possible, always in your best interests, and, if at all possible, without you
                  having to embark on court action.
                </p>
                <p>
                  Early advice can be invaluable. Our litigation team has substantial commercial
                  litigation experience and regularly appears in the County and High Courts. We
                  deliver thoughtful, balanced, and solution-driven advice with the ability to see
                  the big picture, enabling strategic and tactical recommendations as your trusted
                  advisor.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={servicesRef} className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
              Our Litigation & ADR Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our litigation team deals with various kinds of disputes, including:
            </p>
            <div className="h-px bg-linear-to-r from-transparent via-amber-600/30 to-transparent w-full max-w-md mx-auto mt-8" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_OFFERINGS.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-stone-200 p-8 h-full hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-600/5 transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-amber-600/40 group-hover:bg-amber-50 transition-all duration-300">
                        <Icon className="w-5 h-5 text-stone-600 group-hover:text-amber-600 transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-stone-900 mb-4 min-h-14 flex items-center">
                      {service.title}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={clientsRef} className="relative py-16 sm:py-24 bg-white/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-stone-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From businesses to individuals, we provide expert litigation and dispute resolution
              services across all client types.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 12 }}
                animate={clientsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white/80 backdrop-blur-sm border border-stone-200 p-8 hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-600/5 transition-all duration-300"
              >
                <div className="mb-6">
                  <CheckCircle2 className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-3">{client.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/80 backdrop-blur-sm border border-stone-200 p-12 sm:p-16 lg:p-20"
          >
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <div className="text-5xl font-light text-amber-600 mb-6">01</div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Strategic Approach
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We see the big picture and deliver strategic and tactical recommendations to
                  achieve the best possible outcome for your dispute.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-amber-600 mb-6">02</div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Court Experience
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Substantial litigation experience with regular appearances in County and High
                  Courts, including Deputy District Judge service.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-amber-600 mb-6">03</div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Dispute Resolution Focus
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Passionate about resolving disputes efficiently through mediation and negotiation,
                  avoiding unnecessary court proceedings where possible.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={ctaRef} className="relative py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/80 backdrop-blur-sm border border-stone-200 p-12 sm:p-16 lg:p-24 text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 mb-8 leading-tight">
              Need Litigation or Dispute Resolution Support?
            </h2>
            <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us now to inquire about our litigation and ADR services. Early advice can be
              invaluable in resolving your dispute efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-10 py-4 transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-400 hover:bg-white/60 text-stone-900 font-medium px-10 py-4 transition-all duration-300"
              >
                <span>Meet Our Team</span>
              </a>
            </div>

            <div className="flex justify-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            </div>
          </motion.div>
        </div>
      </section >
    </div >
  );
};

export default LitigationADR;