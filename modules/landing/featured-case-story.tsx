"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    tag: "FEATURED",
    title:
      "Corporate Merger: Advising on £2.5 Billion Cross-Border Transaction",
    description:
      "Global legal partner to a leading multinational corporation. Strategic advice to support fast-paced deal execution. Protecting stakeholder interests across multiple jurisdictions. Another client success story, supported by Empass Law.",
    link: "/case-studies/corporate-merger",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    tag: "FEATURED",
    title:
      "Intellectual Property: Safeguarding Innovation for Tech Industry Leader",
    description:
      "Comprehensive IP protection strategy for a pioneering technology company. Successfully defended patent portfolio and negotiated favorable licensing agreements worldwide.",
    link: "/case-studies/ip-protection",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    tag: "FEATURED",
    title: "Commercial Litigation: High-Stakes Financial Dispute Resolution",
    description:
      "Representing major financial institution in complex commercial litigation. Achieved favorable settlement through strategic negotiation and robust legal advocacy.",
    link: "/case-studies/litigation",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  },
];

export default function FeaturedCaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCase = caseStudies[currentIndex];

  return (
    <section className="bg-white py-12 md:py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group">
            <Image
              src={currentCase.image}
              alt={currentCase.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-4 md:mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#2c5697] text-white text-[11px] font-semibold tracking-wider">
                {currentCase.tag}
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[32px] lg:text-[42px] leading-[1.2] font-normal text-[#2c5697] mb-4 md:mb-6">
              {currentCase.title}
            </h2>

            <p className="text-[15px] md:text-[17px] leading-relaxed text-[#445566] mb-6 md:mb-8">
              {currentCase.description}
            </p>

            <Link
              href={currentCase.link}
              className="inline-flex items-center gap-2 text-[#2c5697] text-[14px] md:text-[15px] font-medium border-b-2 border-[#2c5697] pb-0.5 hover:border-[#2c5697]/60 transition-colors mb-8 md:mb-12"
            >
              Read the case study
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) =>
                      (prev - 1 + caseStudies.length) % caseStudies.length,
                  )
                }
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 hover:border-[#2c5697] hover:bg-[#2c5697] hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous case study"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
                }
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 hover:border-[#2c5697] hover:bg-[#2c5697] hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Next case study"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 ml-2 md:ml-4">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 md:w-8 bg-[#2c5697]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to case study ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
