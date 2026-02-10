"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface QuickLink {
  title: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "SECTOR EXPERTISE",
    href: "/expertise/sectors",
  },
  {
    title: "INTERNATIONAL EXPERTISE",
    href: "/expertise/international",
  },
  {
    title: "CASE STUDIES",
    href: "/case-studies",
  },
  {
    title: "INNOVATION",
    href: "/innovation",
  },
  {
    title: "RESPONSIBLE BUSINESS",
    href: "/responsible-business",
  },
  {
    title: "CAREERS",
    href: "/careers",
  },
];

export function QuickLinks() {
  return (
    <section className="relative bg-[linear-gradient(90deg,#edefef_0%,#fff_50%,#f0f0f0_100%)] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0e8fb1] mb-6">
              Quick links
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              From recent examples of high quality outcomes achieved for
              clients, through to how we innovate to deliver impact – view some
              of our most popular pages.
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="space-y-0">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group relative block py-5 border-b-[3.5] border-[#0e8fb1] transition-all duration-300 hover:bg-white/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base font-semibold text-[#435b76] tracking-wide">
                    {link.title}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#435b76] transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Animated underline effect - lines coming from left and right */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
                  {/* Left line */}
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#0e8fb1] transition-all duration-300 ease-out group-hover:w-1/2" />
                  {/* Right line */}
                  <div className="absolute right-0 top-0 h-full w-0 bg-[#0e8fb1] transition-all duration-300 ease-out group-hover:w-1/2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
