"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mockTeamMembers = [
  {
    id: 1,
    name: "Rohit Fogla",
    role: "Founder & Managing Partner",
    slug: "sarah-chen",
    photo:
      "/Rohit-Fogla.jpeg",
    quote:
      "Being client-centred is not a slogan for us, it is the foundation of everything we do. We measure our success not only by outcomes, but by the relationships we build, the clarity we provide, and the confidence our clients feel knowing they have a team that truly stands beside them.",
    accentColor: "#4ECDC4",
  },
];

export default function FeaturedTeamMember() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = mockTeamMembers;
  const current = members[currentIndex];

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + members.length) % members.length);
  const next = () => setCurrentIndex((i) => (i + 1) % members.length);

  return (
    <section className="bg-white py-12 md:py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
          </div>
          <h2 className="text-2xl sm:text-3xl uppercase lg:text-4xl font-bold text-[#2c5697]">
            Message from 
          </h2>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden group">
            <Image
              src={current.photo}
              alt={current.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}

            <div className="absolute bottom-4 left-4">
              <span
                className="inline-block px-3 py-1 text-white text-[11px] font-semibold tracking-wider uppercase"
                style={{ backgroundColor: current.accentColor }}
              >
                {current.role}
              </span>
            </div>
          </div>

          <div>
            {/* <div className="mb-4 md:mb-6">
              <span className="inline-block px-4 py-1.5 bg-[#2c5697] text-white text-[11px] font-semibold tracking-wider uppercase">
                Meet the Team
              </span>
            </div> */}

            <div
              className="text-[72px] md:text-[96px] leading-none font-black select-none mb-[-2px] md:mb-[-20px]"
              style={{ color: current.accentColor, lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <blockquote className="text-[18px] sm:text-[22px] lg:text-[36px] leading-[1.45] font-normal text-[#1a2535] mb-2">
              {current.quote}
            </blockquote>

            <div
              className="text-[72px] md:text-[96px] leading-none font-black select-none mt-[-12px] md:mt-[-16px] text-right"
              style={{ color: current.accentColor, lineHeight: 1 }}
              aria-hidden="true"
            >
              &rdquo;
            </div>

            <p
              className="text-[20px] md:text-[30px] uppercase font-semibold md:mt-2 mb-1"
              style={{ color: current.accentColor }}
            >
              {current.name}
            </p>
            <p className="text-[14px] md:text-[25px] text-[#445566] mb-6 md:mb-8">
              {current.role}
            </p>
            {/* <Link
              href={`/team/${current.slug}`}
              className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-medium border-b-2 pb-0.5 hover:opacity-60 transition-opacity mb-8 md:mb-12"
              style={{
                color: current.accentColor,
                borderColor: current.accentColor,
              }}
            >
              Read the story
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
            </Link> */}

            <div className="flex items-center gap-3 md:gap-4">
              {/* <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 hover:border-[#2c5697] hover:bg-[#2c5697] hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous team member"
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
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 hover:border-[#2c5697] hover:bg-[#2c5697] hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Next team member"
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
              </button> */}
              {/* 
              <div className="flex items-center gap-2 ml-2 md:ml-4">
                {members.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "w-6 md:w-8 bg-[#2c5697]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
