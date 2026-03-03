"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  FileText,
  Search,
  TrendingUp,
  Briefcase,
  Scale,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const corporateServices = [
  {
    icon: FileText,
    title: "Shareholders Agreement",
    description: "Comprehensive agreements protecting shareholder rights and defining governance structures.",
  },
  {
    icon: Scale,
    title: "Corporate Governance",
    description: "Ensuring compliance with regulatory requirements and best practice standards.",
  },
  {
    icon: TrendingUp,
    title: "Sale and Purchase of Shares",
    description: "Expert guidance on share transactions in your business.",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description: "Thorough investigation and analysis of business transactions and investments.",
  },
  {
    icon: Briefcase,
    title: "Investment Agreement",
    description: "Structuring and negotiating investment deals for optimal outcomes.",
  },
  {
    icon: Building2,
    title: "Sale and Purchase of Business Assets",
    description: "Strategic advice on asset acquisitions and disposals.",
  },
  {
    icon: Handshake,
    title: "Partnership Agreement",
    description: "Drafting and negotiating partnership structures and terms.",
  },
  {
    icon: Coins,
    title: "Capital Raising",
    description: "Support for fundraising initiatives and capital structure optimization.",
  },
  {
    icon: Users,
    title: "Corporate Reorganisation",
    description: "Restructuring advice for business transformation and efficiency.",
  },
];

function Coins(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

export default function CorporateLaw() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C4A6B] via-[#34547A] to-[#3D5F8A] text-white py-24 sm:py-32">
        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#00a3a3]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#00a3a3] uppercase">
                Corporate Law
              </span>
              <div className="h-px w-8 bg-[#00a3a3]"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expertise in all aspects of Corporate Law
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-6">
              The corporate department consists of experienced and commercially aware corporate
              solicitors and legal counsel who provide dynamic and pragmatic advice to assist
              you and your business.
            </p>
            <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto">
              Our clients range from large multi-national companies and publicly listed companies
              to small family-run businesses and start-ups, all of whom are given the same level
              of commitment, experience, and communication from the team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5697] mb-4">
              Corporate Law Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide advice on a range of corporate matters, including but not limited to:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="group h-full p-6 sm:p-8 bg-white border border-gray-200 rounded-lg hover:border-[#2C4A6B] hover:shadow-lg transition-[box-shadow,border-color] duration-300 ease-out"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#2C4A6B]/10 transition-colors">
                  <service.icon className="w-6 h-6 text-gray-600 group-hover:text-[#2C4A6B]" />
                </div>
                <h3 className="text-lg font-semibold text-[#2c5697] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2C4A6B] to-[#3D5F8A] rounded-2xl p-10 sm:p-14 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Contact us now to inquire about our services
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our experienced corporate law team is ready to provide you with dynamic
              and pragmatic legal advice tailored to your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C4A6B] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}