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
  FileCheck,
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

interface CommercialLawProps {
  className?: string;
}

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
                Commercial Law
              </h1>

              <p className="text-xl sm:text-2xl text-stone-600 font-light mb-12 leading-relaxed">
                Expert advice on commercial contracts and business transactions
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
              src="/services/Commercial-Law-banner.webp"
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
                Protecting Your Business Interests
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Our commercial law team provides expert advice on all aspects of commercial
                  contracts, agreements, and business transactions. We help businesses navigate
                  complex commercial relationships while protecting their interests at every stage.
                </p>
                <p>
                  From drafting and negotiating commercial contracts to resolving disputes, our
                  commercially aware solicitors deliver practical solutions tailored to your business
                  needs. We work with businesses of all sizes, providing the same level of dedication
                  and expertise to every client.
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
              Our Commercial Law Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We provide comprehensive advice on commercial matters, including but not limited to:
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
              From small businesses to international traders, every client receives expert
              commercial legal advice tailored to their needs.
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
                  Commercial Awareness
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Our solicitors understand business operations and provide commercially-focused
                  legal advice that supports your objectives.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-amber-600 mb-6">02</div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Tailored Solutions
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Every contract and agreement is customized to your specific business needs and
                  industry requirements.
                </p>
              </div>

              <div>
                <div className="text-5xl font-light text-amber-600 mb-6">03</div>
                <h3 className="text-2xl font-medium text-stone-900 mb-4">
                  Risk Mitigation
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We identify and address potential legal risks before they become problems,
                  protecting your business interests.
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
              Need Commercial Legal Support?
            </h2>
            <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us now to inquire about our commercial law services and discover how we can
              help protect your business interests.
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

export default CommercialLaw;