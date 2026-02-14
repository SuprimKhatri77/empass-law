"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - White Background */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
              About Us
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 tracking-tight px-4">
            Legal excellence in the heart of London
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            A modern law firm combining international expertise with local
            knowledge to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* London Skyline Image */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2000&q=90"
                alt="London cityscape"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-xl max-w-[calc(100%-2rem)]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00a3a3]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a3a3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#2c5697]">
                      Mayfair, London
                    </p>
                    <p className="text-[10px] sm:text-xs text-[#445566]">
                      13 Hanover Square, W1S 1HN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Content - Reduced */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#2c5697] mb-4 sm:mb-6">
                Who we are
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#445566] mb-4">
                Welcome to Empass Law, a forward-looking law firm in London's
                heart. We deliver top-tier legal services with a client-centred
                approach, serving both businesses and individuals.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#445566]">
                Our adept legal team is devoted to understanding each client's
                unique needs. We combine expertise with a personal touch to
                craft custom legal solutions.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#2c5697] mb-4 sm:mb-6">
                What we do
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#445566] mb-4">
                We help clients navigate complex legal challenges across
                corporate law, commercial litigation, property transactions, and
                family matters.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#445566]">
                Whether you're a multinational corporation or private
                individual, we deliver the same commitment to excellence.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          {/* <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-normal text-[#2c5697] mb-8 sm:mb-12">
              Our values
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "Exceptional legal services with meticulous attention to detail.",
                },
                {
                  title: "Expertise",
                  description:
                    "Dual-qualified lawyers with international experience.",
                },
                {
                  title: "Strategy",
                  description:
                    "Practical advice aligned with your business goals.",
                },
                {
                  title: "Integrity",
                  description:
                    "Lasting relationships based on trust and transparency.",
                },
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#00a3a3]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#00a3a3]/20 transition-colors">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#00a3a3]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2c5697] mb-2 sm:mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-[15px] text-[#445566] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA Section */}
          <div className="bg-[#f0f4f8] rounded-lg p-6 sm:p-10 lg:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2c5697] mb-3 sm:mb-4">
              Meet our team
            </h3>
            <p className="text-sm sm:text-base lg:text-[17px] text-[#445566] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Our experienced lawyers bring together expertise from leading
              international firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/our-people"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2c5697] hover:bg-[#234578] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors"
              >
                <span>View Our Team</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#2c5697] hover:bg-[#2c5697] hover:text-white text-[#2c5697] font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Regulatory Info */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 text-center">
            <p className="text-[11px] sm:text-xs text-[#445566]/60 max-w-3xl mx-auto px-4 leading-relaxed">
              Empass Law Limited is authorised and regulated by the Solicitors
              Regulation Authority (ID: 835349). Registered in England and Wales
              with company registration number 13778949.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
