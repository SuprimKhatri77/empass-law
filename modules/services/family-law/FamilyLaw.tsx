"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Users,
  FileText,
  Shield,
  Home,
  Baby,
  Scale,
  Globe,
  CircleDollarSign,
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

interface FamilyLawProps {
  className?: string;
}

// Data
const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "divorce-civil-partnership",
    title: "Divorce & Civil Partnership",
    icon: Heart,
    description:
      "Expert guidance on divorce and dissolution of civil partnerships with compassionate, pragmatic approach to minimize stress and cost.",
  },
  {
    id: "financial-disputes",
    title: "Financial Disputes",
    icon: CircleDollarSign,
    description:
      "Resolution of financial matters arising from divorce or separation, including asset division, spousal maintenance, and pension sharing.",
  },
  {
    id: "child-arrangement-orders",
    title: "Child Arrangement Orders",
    icon: Baby,
    description:
      "Assistance with child arrangement orders determining where children live and time spent with each parent, prioritizing child welfare.",
  },
  {
    id: "pre-post-nuptials",
    title: "Pre & Post Nuptial Agreements",
    icon: FileText,
    description:
      "Drafting prenuptial and postnuptial agreements to protect assets and provide clarity, like an insurance policy for your relationship.",
  },
  {
    id: "separation-agreements",
    title: "Separation Agreements",
    icon: Users,
    description:
      "Comprehensive separation agreements covering financial arrangements and children matters without the need for divorce proceedings.",
  },
  {
    id: "cohabitation-agreements",
    title: "Cohabitation Agreements",
    icon: Home,
    description:
      "Protecting unmarried couples' interests through cohabitation agreements covering property, finances, and arrangements if relationship ends.",
  },
  {
    id: "international-disputes",
    title: "Complex International Disputes",
    icon: Globe,
    description:
      "Specialist expertise in cross-border family disputes involving medium to high-net-worth assets and international jurisdictions.",
  },
  {
    id: "change-of-name",
    title: "Change of Name Deed",
    icon: FileText,
    description:
      "Professional preparation of change of name deeds for adults and children, ensuring legal compliance and proper documentation.",
  },
  {
    id: "mediation-resolution",
    title: "Mediation & Alternative Resolution",
    icon: Scale,
    description:
      "Promoting settlement through mediation and negotiation to avoid lengthy court proceedings and reduce emotional and financial costs.",
  },
];

const CLIENT_TYPES: ClientType[] = [
  {
    title: "Divorcing Couples",
    description: "Individuals seeking sensitive guidance through divorce and separation",
  },
  {
    title: "High Net Worth Families",
    description: "Families with complex assets requiring sophisticated financial dispute resolution",
  },
  {
    title: "International Families",
    description: "Families with cross-border elements needing specialist international expertise",
  },
  {
    title: "Unmarried Couples",
    description: "Cohabiting couples seeking protection through cohabitation agreements",
  },
];

const FamilyLaw: React.FC<FamilyLawProps> = ({ className = "" }) => {
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
                Family Law
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Sensitive and strategic family law services
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
                  src="/services/family-law-banner.jpg"
                  alt="Family Law"
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
                Compassionate Expertise in Family Matters
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Our family law team provides sensitive and strategic services covering divorce,
                separation, financial disputes, and children matters. With over 24 years of
                experience, we specialize in complex international cases involving medium to
                high-net-worth assets.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Although we have extensive experience taking cases to court where required, we are
                known for our conciliatory and pragmatic approach, settling cases wherever possible
                to avoid the further legal expense and long, drawn-out court process. We support
                families through relationship breakdown with dignity and professionalism.
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
              Our Family Law Services
            </h2>
            <p className="text-white/60 max-w-2xl">
              We provide comprehensive family law services, including:
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
              From divorcing couples to international families, we provide compassionate and expert
              family law services tailored to your unique situation.
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
                  Over 24 years of family law expertise specializing in financial disputes,
                  children matters, and complex international cases.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Pragmatic Approach
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Known for conciliatory methods, settling cases wherever possible to minimize
                  emotional stress and financial costs.
                </p>
              </div>

              <div>
                <div className="text-4xl font-black text-[#4988C4] mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  International Expertise
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Specialist knowledge in cross-border disputes, relocation cases, and
                  international asset protection.
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
              Need Family Law Support?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to discuss your family law matter with compassion and expertise. We're
              here to guide you through this challenging time with sensitivity and professionalism.
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

export default FamilyLaw;