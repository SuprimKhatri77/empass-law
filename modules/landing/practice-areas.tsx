"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/UseInView";

const PRACTICES = [
  {
    title: "Corporate & M&A",
    description:
      "Strategic counsel on mergers, acquisitions, and corporate transactions across borders.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    href: "/services/corporate",
  },
  {
    title: "Dispute Resolution",
    description:
      "Expert litigation and arbitration protecting your interests in high-stakes disputes.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    href: "/services/disputes",
  },
  {
    title: "Banking & Finance",
    description:
      "Comprehensive advice on financial transactions and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1568584711271-88f78f74c40e?w=800&q=80",
    href: "/services/banking",
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and enforcement of patents, trademarks, and trade secrets.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    href: "/services/ip",
  },
  {
    title: "Real Estate",
    description:
      "Full-service guidance on property acquisitions, development, and leasing.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    href: "/services/real-estate",
  },
  {
    title: "Employment Law",
    description:
      "Strategic employment counsel from hiring to workforce restructuring.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    href: "/services/employment",
  },
];

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null!);
  const isVisible = useInView(sectionRef, { threshold: 0.1, once: true });

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-stone-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-stone-500 text-sm tracking-[0.3em] uppercase mb-4">
            Practice Areas
          </p>
          <h2 className="font-display text-5xl lg:text-7xl text-stone-900 leading-tight mb-6">
            Specialized legal expertise.
          </h2>
          <p className="text-stone-600 text-lg lg:text-xl leading-relaxed">
            Multi-disciplinary teams delivering comprehensive solutions tailored
            to your objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICES.map((practice, idx) => (
            <Link
              key={practice.href}
              href={practice.href}
              className={`group block transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={practice.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-2xl text-stone-900 leading-tight">
                      {practice.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-stone-400 flex-shrink-0 transition-all group-hover:text-stone-900 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-stone-900 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-all"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
