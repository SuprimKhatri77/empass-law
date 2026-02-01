"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Banknote,
  FileText,
  Building2,
  ShieldCheck,
  TrendingUp,
  Home,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
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

interface BankingFinanceProps {
  className?: string;
}

// Data
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "facility-documentation",
    title: "Facility Documentation & Transaction Structure",
    icon: FileText,
    description:
      "Expert preparation and negotiation of facility documentation with strategic transaction structuring for optimal outcomes.",
  },
  {
    id: "property-finance",
    title: "Property Finance & Construction",
    icon: Home,
    description:
      "Comprehensive property finance services including construction advice on development projects and secured lending.",
  },
  {
    id: "security-documents",
    title: "Security Documentation",
    icon: ShieldCheck,
    description:
      "Preparation and perfection of security documents, including drafting of bespoke documentation tailored to your needs.",
  },
  {
    id: "personal-guarantees",
    title: "Personal Guarantees",
    icon: FileText,
    description:
      "Expert advice on personal guarantees at the time of taking out and on any attempted enforcement actions.",
  },
  {
    id: "banking-documents",
    title: "Banking Documents Review",
    icon: Banknote,
    description:
      "Thorough review and advice on banking documents, including corporate guarantees, performance bonds, and security documents.",
  },
  {
    id: "security-removal",
    title: "Removal of Existing Security",
    icon: ShieldCheck,
    description:
      "Efficient handling of removal of existing security arrangements with proper documentation and compliance.",
  },
  {
    id: "refinancing",
    title: "Refinancing Solutions",
    icon: TrendingUp,
    description:
      "Strategic refinancing advice covering bridging finance, development finance, and investment finance structures.",
  },
  {
    id: "mezzanine-finance",
    title: "Mezzanine Finance",
    icon: CircleDollarSign,
    description:
      "Specialized mezzanine finance solutions with expertise in structured finance and subordinated debt arrangements.",
  },
  {
    id: "specialized-finance",
    title: "Specialized Finance",
    icon: Building2,
    description:
      "Expert advice on social housing finance, healthcare finance, charity finance, and other specialized sectors.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Institutional Lenders",
    description: "Banks, financial institutions, and institutional lenders requiring expert legal support",
  },
  {
    title: "Non-Institutional Lenders",
    description: "Private lenders and alternative finance providers seeking specialized advice",
  },
  {
    title: "Borrowers & Businesses",
    description: "Companies and individuals requiring financing with strategic legal guidance",
  },
  {
    title: "Overseas Banks",
    description: "International banks and their advisers operating in the UK market",
  },
];

const BankingFinance: React.FC<BankingFinanceProps> = ({ className = "" }) => {
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
                  Services/
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Banking & Finance Law
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Expertise in all aspects of Banking and Finance
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
                <Image
                  src="/services/Banking-banner.png"
                  alt="Banking and Finance Law"
                  fill
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
                Comprehensive Banking & Finance Solutions
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                The banking team has significant experience of acting for lenders and borrowers,
                both locally, nationally and internationally. We routinely advise on agreements for
                loans, guarantee facilities, invoice discounting, lease, and hire purchase.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                We have considerable experience of acting for a wide range of institutional and
                non-institutional clients on a wide range of issues, such as refinancing, bridging
                finance, development finance, investment finance, mezzanine finance, social housing
                finance, healthcare finance, and charity finance. We act for both borrowers and
                lenders, including overseas banks and their advisers.
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
              Our Banking & Finance Services
            </h2>
            <p className="text-white/60 max-w-2xl">
              We offer a range of services for lenders and borrowers, including but not limited to:
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
              From institutional lenders to international banks, we provide expert banking and
              finance legal services across all client types.
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
                  Extensive Experience
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Significant experience acting for lenders and borrowers locally, nationally, and
                  internationally across diverse finance structures.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Specialized Expertise
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Expert knowledge in specialized finance sectors including social housing,
                  healthcare, and charity finance arrangements.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dual Representation
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Comprehensive understanding of both lender and borrower perspectives, ensuring
                  balanced and effective legal solutions.
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
              Need Banking & Finance Legal Support?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to inquire about our banking and finance services and discover how our
              experienced team can support your lending or borrowing needs.
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

export default BankingFinance;