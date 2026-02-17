"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

interface QuickLink {
  title: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  {
    title: "SERVICES",
    href: "/services",
  },
  {
    title: "OUR PEOPLE",
    href: "/our-people",
  },
  {
    title: "CAREERS",
    href: "/careers",
  },
  {
    title: "OUR WORK",
    href: "/our-work",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export function QuickLinks() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl uppercase lg:text-4xl  font-bold text-[#2c5697] mb-6">
              Practice Areas
            </h2>
            <p className="text-base md:text-2xl text-black leading-relaxed max-w-xl">
              Empass Law is a modern London-based law firm providing practical, client-focused legal support to both individuals and businesses. The firm advises across key areas including corporate and commercial law, employment, property, family matters, and dispute resolution, delivering clear guidance and cost-effective solutions tailored to each client&apos;s needs.
            </p>
            <Link href={"/services"} className="text-[#0B2D72] flex items-center mt-5 gap-3 justify-center bg-[#4ECDC4] text-center font-bold uppercase shadow-2xl hover:scale-105 transition-all duration-300 px-4 py-3" >
              Explore Our Services
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Right Side - Links */}
          <div className="space-y-0">
            {/* {quickLinks.map((link, index) => (
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

              
                <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#0e8fb1] transition-all duration-300 ease-out group-hover:w-1/2" />
                  <div className="absolute right-0 top-0 h-full w-0 bg-[#0e8fb1] transition-all duration-300 ease-out group-hover:w-1/2" />
                </div>
              </Link>
            ))} */}
            <div className="relative w-full h-full">
              <Image src={"/Practice-area.jpg"} fill alt="Practice Area" className="object-cover shadow-2xl rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
