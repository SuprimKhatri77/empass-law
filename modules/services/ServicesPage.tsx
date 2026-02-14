"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Home,
  Scale,
  Heart,
  FileText,
  Banknote,
  Briefcase,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  slug: string;
  icon: any;
  description: string;
  areas: string[];
  image: string;
}

const CORE_SERVICES: Service[] = [
  {
    id: "corporate",
    title: "Corporate Law",
    slug: "/services/corporate-law",
    icon: Building2,
    description:
      "Strategic guidance on mergers, acquisitions, private equity transactions, and corporate finance for cross-border deals.",
    areas: [
      "Mergers & Acquisitions",
      "Private Equity",
      "Corporate Finance",
      "Corporate Governance",
    ],
    image: "/services/coporate-law.jpg",
  },
  {
    id: "property",
    title: "Property Law",
    slug: "/services/property-law",
    icon: Home,
    description:
      "Comprehensive property services for prime London transactions and secured lending for high net worth clients.",
    areas: [
      "Residential Conveyancing",
      "Commercial Property",
      "Property Finance",
      "Leasehold & Freehold",
    ],
    image: "/services/property-law.jpg",
  },
  {
    id: "litigation",
    title: "Litigation & ADR",
    slug: "/services/litigation-and-adr",
    icon: Scale,
    description:
      "Expert representation in commercial disputes and alternative dispute resolution across County and High Courts.",
    areas: [
      "Commercial Litigation",
      "Contract Disputes",
      "Mediation & Arbitration",
      "Dispute Resolution",
    ],
    image: "/services/litigation-adr.jpg",
  },
  {
    id: "family",
    title: "Family Law",
    slug: "/services/family-law",
    icon: Heart,
    description:
      "Sensitive handling of complex international family matters and financial settlements with a strategic approach.",
    areas: [
      "Divorce & Separation",
      "Financial Settlements",
      "Nuptial Agreements",
      "Child Arrangements",
    ],
    image: "/services/family-law.jpg",
  },
];

const ADDITIONAL_SERVICES: Service[] = [
  {
    id: "commercial",
    title: "Commercial Law",
    slug: "/services/commercial-law",
    icon: FileText,
    description:
      "Commercial contracts and business transactions to protect your interests.",
    areas: [
      "Commercial Contracts",
      "Business Agreements",
      "Partnership Structures",
      "Terms & Conditions",
    ],
    image: "/services/commercial-law.jpg",
  },
  {
    id: "banking",
    title: "Banking & Finance",
    slug: "/services/banking-finance",
    icon: Banknote,
    description:
      "Specialized counsel on lending structures and regulatory compliance.",
    areas: [
      "Secured Lending",
      "Refinancing",
      "Finance Documentation",
      "Regulatory Compliance",
    ],
    image: "/services/banking-finance.jpg",
  },
  {
    id: "employment",
    title: "Employment Law",
    slug: "/services/employment-law",
    icon: Briefcase,
    description:
      "Employment contracts and tribunal representation for employers and employees.",
    areas: [
      "Employment Contracts",
      "Tribunal Representation",
      "Settlement Agreements",
      "HR Advisory",
    ],
    image: "/services/employment-law.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - White Background */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
              Our Services
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 tracking-tight px-4">
            Comprehensive legal solutions
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Expert counsel across corporate, commercial, property, and family
            law.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
                Core Practice Areas
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.2] font-normal text-[#2c5697] mb-3 sm:mb-4">
              Our expertise
            </h2>
            <p className="text-sm sm:text-base lg:text-[17px] text-[#445566] max-w-3xl">
              Exceptional legal services combining international expertise with
              local knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#2c5697] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Header */}
                  <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={`${service.image}`}
                        fill
                        className="object-cover"
                        alt={service.title}
                      />
                    </div>

                    {/* Icon badge */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2c5697]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#2c5697] mb-3 sm:mb-4">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-[#445566] leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Areas */}
                    <div className="mb-4 sm:mb-6">
                      <p className="text-xs sm:text-[13px] font-semibold text-[#445566] uppercase tracking-wide mb-2 sm:mb-3">
                        Key Areas
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.areas.map((area, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-xs sm:text-sm text-[#445566]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00a3a3] flex-shrink-0" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <Link
                      href={service.slug}
                      className="inline-flex items-center gap-2 text-[#2c5697] hover:text-[#234578] text-xs sm:text-sm font-medium border-b-2 border-[#2c5697] pb-0.5 hover:border-[#234578] group-hover:gap-3 transition-all"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
                Additional Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.2] font-normal text-[#2c5697]">
              Comprehensive legal support
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {ADDITIONAL_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group bg-white rounded-lg p-6 sm:p-8 border-2 border-gray-200 hover:border-[#2c5697] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#2c5697]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#2c5697]/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c5697]" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#2c5697] mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#445566] leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Areas list */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.areas.slice(0, 3).map((area, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-xs sm:text-[13px] text-[#445566]"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#00a3a3] flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-2 text-[#2c5697] hover:text-[#234578] text-xs sm:text-[13px] font-semibold transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[1.2] font-normal text-[#2c5697] mb-4 sm:mb-6 px-4">
            Ready to discuss your legal needs?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#435b76] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Our expert team is here to provide strategic legal counsel tailored
            to your objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2c5697] hover:bg-[#234578] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/our-people"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#2c5697] hover:bg-[#2c5697] hover:text-white text-[#2c5697] font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300"
            >
              <span>Meet Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
