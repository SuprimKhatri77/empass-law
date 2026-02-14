"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
              <span className="text-[10px] raleway sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
                Welcome
              </span>
            </div>

            <h2 className="text-2xl raleway sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] font-bold text-[#2c5697] mb-6 sm:mb-8">
              Legal Excellence in London
            </h2>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-sm raleway sm:text-base lg:text-[17px] leading-relaxed text-gray-600">
                A progressive law firm in the City of London providing
                high-quality legal services tailored to your individual needs.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-lg">
              {["Client-Focused Approach", "Expert Legal Guidance"].map(
                (point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00a3a3] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm raleway sm:text-[15px] text-gray-700 font-medium">
                      {point}
                    </span>
                  </div>
                ),
              )}
            </div>

            <Link
              href="/about"
              className="inline-flex raleway items-center gap-2 text-[#2c5697] text-sm sm:text-[14px] font-semibold border-b-2 border-[#2c5697] pb-1 hover:border-[#234578] hover:text-[#234578] hover:gap-3 transition-all group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] max-w-md mx-auto lg:max-w-lg rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
                alt="London Skyline"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c5697]/10 via-transparent to-transparent" />

              {/* Accent corners */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-4 border-l-4 border-[#00a3a3]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-4 border-r-4 border-[#00a3a3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
