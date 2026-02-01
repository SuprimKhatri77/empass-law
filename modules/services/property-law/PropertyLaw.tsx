"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  FileText,
  ClipboardCheck,
  Building2,
  TrendingUp,
  FileCheck,
  Hammer,
  Key,
  MapPin,
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

interface PropertyLawProps {
  className?: string;
}

// Data
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "sale-agreements",
    title: "Sale Agreements",
    icon: FileText,
    description:
      "Expert drafting and review of sale agreements for residential and commercial properties ensuring all terms protect your interests.",
  },
  {
    id: "tenancy-agreements",
    title: "Tenancy Agreements",
    icon: Key,
    description:
      "Comprehensive drafting and review of tenancy agreements, covering landlord and tenant rights, obligations, and lease terms.",
  },
  {
    id: "due-diligence",
    title: "Due Diligence & Title Review",
    icon: ClipboardCheck,
    description:
      "Thorough due diligence covering title issues, environmental concerns, and survey matters to ensure secure property transactions.",
  },
  {
    id: "business-entities",
    title: "Property Business Entities",
    icon: Building2,
    description:
      "Creation of corporations, limited liability companies, partnerships, and joint ventures for property ownership and development.",
  },
  {
    id: "transaction-structuring",
    title: "Transaction Structuring & Financing",
    icon: TrendingUp,
    description:
      "Strategic analysis and advice on structuring property transactions, financing arrangements, and mortgage transactions.",
  },
  {
    id: "secured-transactions",
    title: "Secured Transactions & Deeds",
    icon: FileCheck,
    description:
      "Expert counsel on deeds of trust and other secured transactions ensuring proper documentation and protection.",
  },
  {
    id: "registration-compliance",
    title: "Registration & Stamp Duty",
    icon: MapPin,
    description:
      "Guidance on registration compliance of properties and adjudication of stamp duties for efficient transaction completion.",
  },
  {
    id: "redevelopment-projects",
    title: "Redevelopment & Construction",
    icon: Hammer,
    description:
      "Comprehensive advice on redevelopment projects, conveyancing, and construction projects from planning to completion.",
  },
  {
    id: "landlord-tenant",
    title: "Landlord & Tenant Matters",
    icon: Home,
    description:
      "Specialist advice on commercial and residential landlord and tenant matters, lease negotiations, and dispute resolution.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Ultra-High Net Worth",
    description: "UHNW individuals purchasing prime and super-prime Central London properties",
  },
  {
    title: "Property Developers",
    description: "Developers requiring expert legal support for complex property projects",
  },
  {
    title: "Commercial Landlords",
    description: "Landlords and property investors managing commercial real estate portfolios",
  },
  {
    title: "Private Lenders",
    description: "Private lenders requiring advice on loan security over UK property",
  },
];

const PropertyLaw: React.FC<PropertyLawProps> = ({ className = "" }) => {
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
                Property Law
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Expertise in all aspects of Property Law
              </p>
              <div className="h-px bg-gradient-to-r from-[#4988C4] via-[#4988C4]/50 to-transparent w-48 mb-8" />
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#4988C4] hover:bg-[#4988C4]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group"
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
                  src="https://empasslaw.com/wp-content/uploads/2023/09/Property-Law-Banner.webp"
                  alt="Property Law"
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
                Specialist Property Law Services
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Our property team practice includes specialist lawyers who help clients understand
                the property laws (both residential and commercial) and assists in ensuring
                compliance with the various regulatory regimes.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                With extensive experience in prime and super-prime residential property in Central
                London, we advise ultra-high net worth individuals, company entities, and private
                lenders on loan security over UK property. Our expertise covers complex onshore
                structures and time-sensitive lending requirements.
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
              Our Property Law Services
            </h2>
            <p className="text-white/60 max-w-2xl">
              Our property team provides all the property services, including:
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
              From ultra-high net worth individuals to property developers, we provide expert
              property law services across all client types.
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
                  Specialist Expertise
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Over 17 years of experience in prime Central London property transactions with
                  deep understanding of complex structures.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Regulatory Compliance
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Ensuring full compliance with property laws and various regulatory regimes for
                  both residential and commercial transactions.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Comprehensive Service
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Full-service property law covering purchases, sales, leases, development,
                  financing, and Wills and Probate.
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
              Need Property Law Support?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to inquire about our property law services and receive expert guidance
              on your residential or commercial property transaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#4988C4] hover:bg-[#4988C4]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group"
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

export default PropertyLaw;