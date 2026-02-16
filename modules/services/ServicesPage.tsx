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
    image: "/Corporate-law.jpg",
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
    image: "/Property-law.jpg",
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
    image: "/Litigation-law.jpg",
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
    image: "/Family-law.jpg",
  },
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
    image: "/commercial-law.jpg",
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
    image: "/bank-law.jpg",
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
    image: "/Employment-law.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - White Background */}
      <section className="relative bg-white py-12 sm:py-16 lg:pt-20 lg:pb-5 border-b border-[#4ECDC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 uppercase tracking-tight px-4">
              Our Services
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg lg:text-xl pt-8 sm:pt-12 lg:pt-16 text-gray-600 leading-relaxed">
          We provide a comprehensive range of legal services designed to support both individuals and businesses at every stage of their journey. From strategic commercial advice to personal legal matters and dispute resolution, our approach is practical, efficient and tailored to your specific needs. We focus on delivering clear guidance, proactive solutions and dependable representation, ensuring you have the confidence and clarity to move forward.
        </p>
      </div>

      {/* Core Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#2c5697] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Header */}
                  <div className="relative h-[180px] sm:h-[220px] md:h-[240px] lg:h-[280px] overflow-hidden">
                    <Image
                      src={service.image}
                      fill
                      className="object-cover"
                      alt={service.title}
                    />

                    {/* Icon badge */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2c5697]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#2c5697] mb-3 sm:mb-4">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] lg:text-base text-[#445566] leading-relaxed mb-4 sm:mb-6">
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase leading-[1.2] text-[#2c5697] mb-4 sm:mb-6 px-4">
            Ready to discuss your legal needs?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#435b76] mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Our expert team is here to provide strategic legal counsel tailored
            to your objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4ECDC4] hover:scale-105 uppercase text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/our-people"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 uppercase border-2 border-[#2c5697] hover:bg-[#2c5697] hover:text-white text-[#2c5697] font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base"
            >
              <span>Meet Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}