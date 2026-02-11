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
      "Strategic guidance on mergers, acquisitions, private equity transactions, and corporate finance matters for domestic and cross-border deals.",
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
      "Comprehensive property services for prime London transactions, complex structures, and secured lending arrangements for ultra-high net worth clients.",
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
      "Expert representation in commercial disputes, contract matters, and alternative dispute resolution across County and High Courts.",
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
      "Sensitive handling of complex international family matters, financial settlements, and matrimonial agreements with a strategic, pragmatic approach.",
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
      "Commercial contracts, business transactions, and partnership agreements to protect your interests.",
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
      "Specialized counsel on lending structures, refinancing, and regulatory compliance in financial transactions.",
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
      "Employment contracts, workplace disputes, and tribunal representation for employers and employees.",
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2f4f] via-[#2c5697] to-[#1e3a5f] py-20 lg:py-32 overflow-hidden">
        {/* Background Video */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video> */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4f]/90 via-[#2c5697]/85 to-[#1e3a5f]/90" />

        {/* Illustrated icons in background */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute top-[20%] right-[15%] w-32 h-32 text-white"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="20" y="20" width="60" height="60" />
            <line x1="20" y1="40" x2="80" y2="40" />
            <line x1="40" y1="20" x2="40" y2="80" />
            <line x1="60" y1="20" x2="60" y2="80" />
          </svg>

          <svg
            className="absolute bottom-[25%] right-[8%] w-24 h-24 text-white"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M30,80 L50,20 L70,80 Z" />
            <line x1="38" y1="60" x2="62" y2="60" />
          </svg>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00a3a3]">
              Our Services
            </span>
          </div>

          <h1 className="text-[48px] lg:text-[72px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
            Comprehensive legal solutions
          </h1>

          <p className="text-[18px] lg:text-[20px] text-white/80 max-w-3xl mx-auto">
            Expert counsel across corporate, commercial, property, and family
            law—delivered with precision and commercial pragmatism.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[#00a3a3]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00a3a3]">
                Core Practice Areas
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] leading-[1.1] font-normal text-[#2c5697] mb-4">
              Our expertise
            </h2>
            <p className="text-[17px] text-[#445566] max-w-3xl">
              We provide exceptional legal services across our core practice
              areas, combining international expertise with local knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#2c5697] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Header */}
                  <div className="relative h-[280px] overflow-hidden">
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800"> */}
                    {/* Watercolor effect */}
                    {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-400/20 via-blue-400/10 to-transparent" />
                      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-400/15 to-transparent" /> */}

                    {/* Icon illustration */}
                    <div className="absolute inset-0  flex items-center justify-center ">
                      {/* <Icon
                          className="w-32 h-32 text-white"
                          strokeWidth={1}
                        /> */}
                      <Image
                        src={`${service.image}`}
                        fill
                        className="object-cover"
                        alt={service.title}
                      />
                    </div>
                    {/* </div> */}

                    {/* Icon badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-[#2c5697]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-[28px] font-bold text-[#2c5697] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-[15px] text-[#445566] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Areas */}
                    <div className="mb-6">
                      <p className="text-[13px] font-semibold text-[#445566] uppercase tracking-wide mb-3">
                        Key Areas
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.areas.map((area, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-[14px] text-[#445566]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00a3a3]" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <Link
                      href={service.slug}
                      className="inline-flex items-center gap-2 text-[#2c5697] hover:text-[#234578] text-[14px] font-medium border-b-2 border-[#2c5697] pb-0.5 hover:border-[#234578]  group-hover:gap-3 transition-all"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-[2px] bg-[#00a3a3]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00a3a3]">
                Additional Services
              </span>
            </div>
            <h2 className="text-[42px] lg:text-[56px] leading-[1.1] font-normal text-[#2c5697]">
              Comprehensive legal support
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ADDITIONAL_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.id}
                  className="group bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-[#2c5697] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#2c5697]/10 flex items-center justify-center mb-6 group-hover:bg-[#2c5697]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#2c5697]" />
                  </div>

                  <h3 className="text-[22px] font-bold text-[#2c5697] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[14px] text-[#445566] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Areas list */}
                  <ul className="space-y-2 mb-6">
                    {service.areas.slice(0, 3).map((area, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-[13px] text-[#445566]"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#00a3a3]" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-2 text-[#2c5697] hover:text-[#234578] text-[13px] font-semibold transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-[2px] bg-[#00a3a3]" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00a3a3]">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-[42px] lg:text-[56px] leading-[1.1] font-normal text-[#2c5697] mb-6">
                Your trusted legal partner
              </h2>

              <p className="text-[17px] text-[#445566] leading-relaxed mb-8">
                We combine international expertise with local knowledge to
                deliver exceptional results for our clients across all practice
                areas.
              </p>

              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Dual-Qualified Expertise",
                    description:
                      "UK and international qualified lawyers with deep experience across jurisdictions.",
                  },
                  {
                    number: "02",
                    title: "Client-Centered Approach",
                    description:
                      "Personalized service tailored to your objectives with commercial pragmatism.",
                  },
                  {
                    number: "03",
                    title: "Proven Track Record",
                    description:
                      "Decades of experience navigating complex legal matters successfully.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#2c5697]/10 flex items-center justify-center">
                        <span className="text-[16px] font-bold text-[#2c5697]">
                          {item.number}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#2c5697] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-[#445566]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Cases Handled" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "7", label: "Practice Areas" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-[#2c5697] transition-colors"
                >
                  <div className="text-[48px] font-bold text-[#2c5697] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[14px] font-medium text-[#445566]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[42px] lg:text-[56px] leading-[1.1] font-normal text-[#2c5697] mb-6">
            Ready to discuss your legal needs?
          </h2>

          <p className="text-[18px] text-[#435b76] mb-8 max-w-2xl mx-auto">
            Our expert team is here to provide strategic legal counsel tailored
            to your objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#1a2f4f]/90 via-[#2c5697]/85 to-[#1e3a5f]/90 hover:bg-[#16365a] text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/our-people"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0f2742]/20 hover:bg-[#0f2742]/5 text-[#0f2742] font-medium px-8 py-4 rounded-lg transition-all duration-300"
            >
              <span>Meet Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
