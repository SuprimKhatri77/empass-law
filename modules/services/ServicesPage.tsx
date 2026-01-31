"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  FileText,
  Banknote,
  Scale,
  Briefcase,
  Home,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

// Type definitions
interface Service {
  id: string;
  title: string;
  slug: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  image: string;
}

interface ServicesPageProps {
  className?: string;
}

// Data
const SERVICES: Service[] = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    slug: "./services/corporate-law",
    icon: Building2,
    description:
      "Comprehensive corporate legal services including mergers and acquisitions, private equity, corporate finance, and company formation. Our dual-qualified team provides strategic guidance on complex corporate matters.",
    features: [
      "Mergers & Acquisitions",
      "Private Equity Transactions",
      "Corporate Finance",
      "Company Formation & Governance",
      "Shareholders Agreements",
      "Corporate Restructuring",
    ],
    image: "/services/coporate-law.jpg",
  },
  {
    id: "commercial-law",
    title: "Commercial Law",
    slug: "./services/commercial-law",
    icon: FileText,
    description:
      "Expert advice on commercial contracts, agreements, and business transactions. We help businesses navigate complex commercial relationships and protect their interests.",
    features: [
      "Commercial Contracts",
      "Distribution Agreements",
      "Terms & Conditions",
      "Partnership Agreements",
      "Franchise Law",
      "Commercial Dispute Resolution",
    ],
    image: "/services/commercial-law.jpg",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    slug: "./services/banking-finance",
    icon: Banknote,
    description:
      "Specialized banking and finance legal services covering lending, secured transactions, and financial regulations. We advise lenders, borrowers, and financial institutions.",
    features: [
      "Secured Lending",
      "Loan Documentation",
      "Property Finance",
      "Refinancing",
      "Financial Regulations",
      "Security Documentation",
    ],
    image: "/services/banking-finance.jpg",
  },
  {
    id: "litigation-adr",
    title: "Litigation & ADR",
    slug: "./services/litigation-and-adr",
    icon: Scale,
    description:
      "Experienced commercial litigation and alternative dispute resolution services. Our team handles complex disputes in County and High Courts with strategic, solution-driven approach.",
    features: [
      "Commercial Litigation",
      "Contract Disputes",
      "Mediation & Arbitration",
      "Property & Construction Disputes",
      "Trust & Estate Litigation",
      "Insurance Claims",
    ],
    image: "/services/litigation-adr.jpg",
  },
  {
    id: "employment-law",
    title: "Employment Law",
    slug: "./services/employment-law",
    icon: Briefcase,
    description:
      "Comprehensive employment law services for employers and employees. From contracts to tribunal representation, we provide practical advice on all employment matters.",
    features: [
      "Employment Contracts",
      "Tribunal Representation",
      "Disciplinary & Grievance",
      "Redundancy",
      "Settlement Agreements",
      "Employment Policies",
    ],
    image: "/services/employment-law.jpg",
  },
  {
    id: "property-law",
    title: "Property Law",
    slug: "property-law",
    icon: Home,
    description:
      "Expert property law services for residential and commercial transactions. Specializing in prime London properties, complex structures, and lending requirements for ultra-high net worth clients.",
    features: [
      "Residential Property Transactions",
      "Commercial Property",
      "Landlord & Tenant",
      "Property Finance",
      "Investment Management",
      "Property Development",
    ],
    image: "/services/property-law.jpg",
  },
  {
    id: "family-law",
    title: "Family Law",
    slug: "family-law",
    icon: Heart,
    description:
      "Sensitive and strategic family law services covering divorce, separation, financial disputes, and children matters. Expertise in complex international cases with pragmatic approach.",
    features: [
      "Divorce & Civil Partnership",
      "Financial Disputes",
      "Child Arrangement Orders",
      "Pre & Post Nuptial Agreements",
      "International Family Disputes",
      "Cohabitation Agreements",
    ],
    image: "/services/family-law.jpg",
  },
];

const ServicesPage: React.FC<ServicesPageProps> = ({ className = "" }) => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const ctaRef = React.useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
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

      {/* Header Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-2 border border-[#00D9FF]/20 bg-[#00D9FF]/5 text-[#00D9FF] text-xs font-bold tracking-widest uppercase">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Comprehensive Legal Solutions
            </h1>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              We are not just your legal advisors; we are your trusted partners. With Empass Law,
              you can expect unwavering dedication, integrity, and a strong commitment to achieving
              your desired outcomes.
            </p>

            {/* Accent Line */}
            <div className="mt-8 flex justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent w-64" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:gap-12">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"
                      }`}
                  >
                    {/* Image */}
                    <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-white/5 border border-white/10 transition-colors duration-200 will-change-transform">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index < 2}
                        />
                        {/* subtle overlay instead of heavy gradient */}
                        <div className="absolute inset-0 bg-black/10" />
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#00D9FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="bg-white/[0.02] border border-white/10 p-8 sm:p-10 transition-colors duration-200 group-hover:border-white/20">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className="w-16 h-16 border border-white/10 flex items-center justify-center transition-colors duration-200 group-hover:border-[#00D9FF]/30">
                            <Icon className="w-8 h-8 text-white/70 group-hover:text-[#00D9FF] transition-colors duration-200" />
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                          {service.title}
                        </h2>

                        {/* Description */}
                        <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>

                        {/* Features */}
                        <div className="mb-8">
                          <h3 className="text-xs font-bold tracking-widest uppercase text-[#00D9FF] mb-4">
                            Key Services
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-white/50">
                                <CheckCircle2 className="w-4 h-4 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <a
                          href={`/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-[#00D9FF] transition-colors duration-200"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < SERVICES.length - 1 && (
                    <div className="mt-12 lg:mt-20 h-px bg-white/10" />
                  )}
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="grid lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-white/20 transition-colors duration-200">
              <div className="text-4xl font-black text-[#00D9FF] mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Unwavering Dedication
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Your satisfaction is our ultimate goal. We are committed to providing exceptional
                service and support throughout your legal journey.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-white/20 transition-colors duration-200">
              <div className="text-4xl font-black text-[#00D9FF] mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Trusted Partnership
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We work as your trusted partners, not just advisors, building long-term
                relationships based on integrity and mutual success.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-white/20 transition-colors duration-200">
              <div className="text-4xl font-black text-[#00D9FF] mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Desired Outcomes
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our strong commitment ensures we achieve your desired outcomes through strategic
                planning and expert execution.
              </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Contact us now to inquire about our services and discover how we can help you
              navigate your legal challenges with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#00D9FF] hover:bg-[#00D9FF]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 transition-colors duration-200"
              >
                <span>View Pricing</span>
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

export default ServicesPage;