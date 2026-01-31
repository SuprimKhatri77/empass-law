"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Handshake,
  ShieldCheck,
  Scale,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileCheck,
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

interface CommercialLawProps {
  className?: string;
}

// Data
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "commercial-contracts",
    title: "Commercial Contracts",
    icon: FileText,
    description:
      "Drafting and negotiating comprehensive commercial contracts tailored to protect your business interests and ensure legal compliance.",
  },
  {
    id: "distribution-agreements",
    title: "Distribution Agreements",
    icon: Handshake,
    description:
      "Expert advice on distribution and supply agreements, including territory rights, pricing structures, and termination provisions.",
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",
    icon: FileCheck,
    description:
      "Bespoke terms and conditions for your business operations, covering sales, services, and online transactions.",
  },
  {
    id: "partnership-agreements",
    title: "Partnership Agreements",
    icon: Briefcase,
    description:
      "Comprehensive partnership agreements establishing clear rights, responsibilities, profit sharing, and exit strategies.",
  },
  {
    id: "franchise-law",
    title: "Franchise Law",
    icon: Building2,
    description:
      "Complete franchise legal services including franchise agreements, disclosure documents, and regulatory compliance.",
  },
  {
    id: "commercial-disputes",
    title: "Commercial Dispute Resolution",
    icon: Scale,
    description:
      "Strategic dispute resolution services to protect your commercial interests through negotiation, mediation, or litigation.",
  },
  {
    id: "supplier-agreements",
    title: "Supplier Agreements",
    icon: Handshake,
    description:
      "Robust supplier and procurement contracts ensuring quality standards, delivery terms, and payment conditions.",
  },
  {
    id: "licensing-agreements",
    title: "Licensing Agreements",
    icon: ShieldCheck,
    description:
      "Intellectual property licensing agreements for trademarks, patents, and copyrights with appropriate protections.",
  },
  {
    id: "joint-ventures",
    title: "Joint Ventures",
    icon: Briefcase,
    description:
      "Strategic joint venture agreements defining contributions, management structures, and profit distribution mechanisms.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "SMEs & Start-ups",
    description: "Small and medium enterprises requiring scalable commercial legal solutions",
  },
  {
    title: "Established Businesses",
    description: "Mature companies needing sophisticated commercial contract management",
  },
  {
    title: "International Traders",
    description: "Businesses engaged in cross-border commercial transactions and agreements",
  },
  {
    title: "Franchise Operations",
    description: "Franchisors and franchisees requiring specialized commercial expertise",
  },
];

const CommercialLaw: React.FC<CommercialLawProps> = ({ className = "" }) => {
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
                  Services/
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Commercial Law
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Expert advice on commercial contracts and business transactions
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
                  src="/services/Commercial-Law-banner.webp"
                  alt="Commercial Law"
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
                Protecting Your Business Interests
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Our commercial law team provides expert advice on all aspects of commercial
                contracts, agreements, and business transactions. We help businesses navigate
                complex commercial relationships while protecting their interests at every stage.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                From drafting and negotiating commercial contracts to resolving disputes, our
                commercially aware solicitors deliver practical solutions tailored to your business
                needs. We work with businesses of all sizes, providing the same level of dedication
                and expertise to every client.
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
              Our Commercial Law Services
            </h2>
            <p className="text-white/60 max-w-2xl">
              We provide comprehensive advice on commercial matters, including but not limited to:
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
              From small businesses to international traders, every client receives expert
              commercial legal advice tailored to their needs.
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
                  Commercial Awareness
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Our solicitors understand business operations and provide commercially-focused
                  legal advice that supports your objectives.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#00D9FF] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Tailored Solutions
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Every contract and agreement is customized to your specific business needs and
                  industry requirements.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#00D9FF] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Risk Mitigation
                </h3>
                <p className="text-white/50 leading-relaxed">
                  We identify and address potential legal risks before they become problems,
                  protecting your business interests.
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
              Need Commercial Legal Support?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to inquire about our commercial law services and discover how we can
              help protect your business interests.
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

export default CommercialLaw;