"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Users,
  FileText,
  ChevronDown,
  Scale,
  Clock,
  CheckCircle2,
  Globe,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
  services: Service[];
}

interface Service {
  name: string;
  price: string;
  details?: string[];
  note?: string;
}

const pricingData: ServiceCategory[] = [
  {
    id: "property",
    title: "Property Services",
    icon: Home,
    description:
      "Comprehensive conveyancing services for residential and commercial property transactions",
    services: [
      {
        name: "Freehold Purchase",
        price: "£800 - £4,000",
        details: [
          "Complete conveyancing service",
          "Land Registry registration",
          "Stamp Duty Land Tax handling",
          "Search fees included",
          "Fixed fee agreed upfront",
        ],
        note: "Price varies by property value and complexity",
      },
      {
        name: "Leasehold Purchase",
        price: "£800 - £4,000",
        details: [
          "Full leasehold conveyancing",
          "Lease review and advice",
          "Management company liaison",
          "Service charge review",
          "Notice fees included",
        ],
        note: "Additional fees may apply for complex leases",
      },
      {
        name: "Property Sale",
        price: "£750 - £3,500",
        details: [
          "Complete sales service",
          "Contract preparation",
          "Buyer enquiries handling",
          "Completion coordination",
        ],
      },
      {
        name: "Remortgage",
        price: "£400 - £800",
        details: [
          "Lender communication",
          "Land Registry updates",
          "Discharge of existing mortgage",
        ],
      },
    ],
  },
  {
    id: "employment",
    title: "Employment Law",
    icon: Users,
    description:
      "Expert representation for unfair dismissal, discrimination, and employment tribunal matters",
    services: [
      {
        name: "Initial Consultation",
        price: "£300/hour",
        details: [
          "Case assessment",
          "Funding options review",
          "Strategy discussion",
          "Merit evaluation",
        ],
      },
      {
        name: "Simple Case",
        price: "£2,500 - £4,500",
        details: [
          "One preliminary hearing",
          "One day final hearing",
          "Document preparation",
          "Basic witness statements",
        ],
      },
      {
        name: "Medium Complexity",
        price: "£4,500 - £7,500",
        details: [
          "Multiple hearings",
          "Several witnesses",
          "Complex evidence",
          "Extended tribunal time",
        ],
      },
      {
        name: "High Complexity",
        price: "£7,500 - £12,500",
        details: [
          "Multiple claims",
          "Discrimination elements",
          "Extensive documentation",
          "Multi-day hearings",
        ],
      },
    ],
  },
  {
    id: "immigration",
    title: "Immigration Services",
    icon: Globe,
    description:
      "Comprehensive immigration solutions for individuals and businesses navigating UK visa processes",
    services: [
      {
        name: "Consultation",
        price: "£150 - £250",
        details: ["1 hour assessment", "Route evaluation", "Document review"],
      },
      {
        name: "Visit Visa",
        price: "£500 - £750",
        details: [
          "Application preparation",
          "Supporting documents",
          "Home Office submission",
        ],
      },
      {
        name: "Work Visa (Tier 2)",
        price: "£1,000 - £1,500",
        details: [
          "CoS verification",
          "Application completion",
          "Dependent applications",
        ],
      },
      {
        name: "Spouse/Partner Visa",
        price: "£1,500 - £2,000",
        details: [
          "Relationship evidence",
          "Financial requirements",
          "Complete application",
        ],
      },
      {
        name: "British Citizenship",
        price: "£600 - £1,500",
        details: [
          "Eligibility check",
          "Application preparation",
          "Supporting documentation",
        ],
      },
      {
        name: "Business Immigration",
        price: "£3,000 - £12,000",
        details: [
          "Sponsor licence",
          "Investor visas",
          "Innovator applications",
        ],
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Commercial",
    icon: Building2,
    description:
      "Strategic legal support for businesses, from startups to established corporations",
    services: [
      {
        name: "Company Formation",
        price: "£500 - £1,500",
        details: [
          "Entity structure advice",
          "Registration with Companies House",
          "Shareholder agreements",
        ],
      },
      {
        name: "Contract Review",
        price: "£300/hour",
        details: [
          "Comprehensive analysis",
          "Risk assessment",
          "Negotiation support",
        ],
      },
      {
        name: "M&A Advisory",
        price: "From £5,000",
        details: [
          "Due diligence",
          "Transaction structuring",
          "Completion support",
        ],
      },
    ],
  },
];

const hourlyRates = [
  { role: "Partner", rate: "£350", color: "from-blue-500 to-blue-600" },
  { role: "Associate", rate: "£275", color: "from-teal-500 to-teal-600" },
  {
    role: "Solicitor",
    rate: "£250",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    role: "Trainee/Paralegal",
    rate: "£150",
    color: "from-slate-500 to-slate-600",
  },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("property");
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const currentCategory = pricingData.find((cat) => cat.id === activeCategory);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section with London Skyline */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Image with Clip Path */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop"
            alt="London Skyline"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-96 h-96">
          <Image
            src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&h=800&fit=crop"
            alt="London Architecture"
            fill
            className="object-cover opacity-10"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </div>

        <div className="absolute bottom-20 left-20 w-64 h-64">
          <Image
            src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=800&fit=crop"
            alt="London Bridge"
            fill
            className="object-cover opacity-10"
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Transparent Pricing
              </span>
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Clear, Honest Pricing
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Fixed fees, no hidden costs. Professional legal services tailored
              to your needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                "No Hidden Fees",
                "Fixed Fee Options",
                "Flexible Payments",
                "Free Consultation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-4">
            {pricingData.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-[#2c5697] text-white shadow-lg"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {currentCategory && (
            <div>
              {/* Category Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  {currentCategory.title}
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  {currentCategory.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {currentCategory.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() =>
                        setExpandedService(
                          expandedService === index ? null : index,
                        )
                      }
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 flex-1">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-[#2c5697]">
                            {service.price}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform ${
                              expandedService === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {service.note && (
                        <p className="text-sm text-slate-500 mb-4">
                          {service.note}
                        </p>
                      )}

                      {/* Expanded Details */}
                      {expandedService === index && service.details && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <ul className="space-y-2">
                            {service.details.map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-slate-600"
                              >
                                <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hourly Rates Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with London Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1600&h=900&fit=crop"
            alt="London Thames"
            fill
            className="object-cover"
            style={{
              clipPath: "polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)",
            }}
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hourly Rates
            </h2>
            <p className="text-lg text-slate-300">
              When fixed fees don't apply, we charge transparent hourly rates
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {hourlyRates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.role}
                </h3>
                <p className="text-4xl font-bold text-cyan-400 mb-2">
                  {item.rate}
                </p>
                <p className="text-sm text-slate-300">+ VAT per hour</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white mb-2">
                  Time Recording & Billing
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  All work is recorded in 6-minute increments. We provide
                  detailed invoices showing time spent on each task, ensuring
                  complete transparency in our billing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Our Pricing is Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed Fees Available",
                description:
                  "Most of our services can be provided on a fixed-fee basis, agreed upfront so you know exactly what you'll pay.",
                icon: FileText,
              },
              {
                title: "No Hidden Costs",
                description:
                  "All disbursements and additional costs are explained clearly before work begins. What we quote is what you pay.",
                icon: CheckCircle2,
              },
              {
                title: "Flexible Payment Plans",
                description:
                  "We offer installment payment options to make quality legal services accessible when you need them.",
                icon: Scale,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2c5697] to-slate-800 rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="relative">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
                  alt="London Office"
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              <div className="relative z-10 py-20 px-6 lg:px-12 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                    Contact us today for a free consultation and personalized
                    quote
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2c5697] font-bold rounded-lg hover:bg-slate-100 transition-all shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Get Free Consultation
                    </Link>
                    <Link
                      href="tel:+442071234567"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call Us Now
                    </Link>
                  </div>

                  <p className="text-sm text-slate-300 mt-6">
                    Available Monday-Friday, 9am-6pm
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
