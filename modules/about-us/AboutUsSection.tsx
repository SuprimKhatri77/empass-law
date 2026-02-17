"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 lg:pt-20 lg:pb-5 border-b border-[#4ECDC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 uppercase tracking-tight px-4">
              About Us
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 sm:py-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image and Text Content */}
          <div className="relative mb-12 sm:mb-16 lg:mb-20 flex flex-col-reverse md:flex-col lg:flex-row gap-8 lg:gap-20 text-gray-600 text-justify justify-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="max-w-7xl mx-auto px-4">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Empass Law is a modern, forward-thinking law firm committed to delivering clear, strategic and results-driven legal advice to both individuals and businesses. Founded on the belief that legal services should be accessible, transparent and tailored, we work closely with every client to understand their objectives and provide practical solutions that align with their goals. Whether supporting a growing business, resolving a dispute or advising on personal legal matters, our approach is always collaborative, responsive and commercially minded.
                  <br />
                  <br />
                  Our team brings together extensive experience across a broad range of legal disciplines, enabling us to handle complex transactions as confidently as sensitive personal issues. We pride ourselves on combining technical excellence with a personable, down-to-earth style, ensuring clients feel informed and supported at every stage of their legal journey. Clear communication, integrity and attention to detail sit at the core of everything we do. At Empass Law, we recognise that no two clients are the same. We take the time to listen, assess each situation carefully and develop bespoke strategies designed to achieve efficient, cost-effective outcomes. By building long-term relationships based on trust and reliability, we aim to be more than just legal advisers — we strive to be valued partners in our clients' success and peace of mind.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[890px] overflow-hidden rounded-lg">
              <Image
                src="/about.jpg"
                alt="London cityscape"
                fill
                className="object-cover"
                priority
              />

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
                  <div className="text-left">
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

          {/* Regulatory Info */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 text-center">
            <p className="text-xs sm:text-sm lg:text-base text-[#445566]/60 max-w-3xl mx-auto px-4 leading-relaxed">
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