"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  Briefcase,
  Users,
  Building2,
  FileText,
  Home,
} from "lucide-react";
import { animate, scroll } from "motion";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { LucideIcon } from "lucide-react";

interface Practice {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

const PRACTICES: Practice[] = [
  {
    title: "Corporate & M&A",
    description:
      "Strategic counsel on mergers, acquisitions, joint ventures, and corporate restructuring for domestic and cross-border transactions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85",
    href: "/services/corporate-law",
    icon: Building2,
    color: "#f59e0b",
  },
  {
    title: "Litigation & Dispute Resolution",
    description:
      "Robust representation in commercial litigation, arbitration, and mediation across all major forums and tribunals.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85",
    href: "/services/litigation-and-adr",
    icon: Scale,
    color: "#44403c",
  },
  {
    title: "Employment & HR",
    description:
      "Comprehensive employment law counsel covering contracts, disputes, restructures, and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    href: "/services/employment",
    icon: Users,
    color: "#2563eb",
  },
  {
    title: "Banking & Finance",
    description:
      "Expert guidance on corporate finance, lending, restructuring, and regulatory matters in financial services.",
    image:
      "https://images.unsplash.com/photo-1568584711271-88f78f74c40e?w=1200&q=85",
    href: "/services/banking-finance",
    icon: Briefcase,
    color: "#059669",
  },
  {
    title: "Commercial Contracts",
    description:
      "Drafting and negotiating complex commercial agreements, partnerships, IP licensing, and technology contracts.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85",
    href: "/services/commercial-law",
    icon: FileText,
    color: "#7c3aed",
  },
  {
    title: "Real Estate",
    description:
      "Full-service property law expertise covering acquisitions, development, leasing, and real estate finance.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=85",
    href: "/services/property",
    icon: Home,
    color: "#dc2626",
  },
];

function HorizontalCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".practice-item");

    if (ulRef.current && sectionRef.current && items.length > 0) {
      const controls = animate(ulRef.current, {
        transform: ["none", `translateX(-${(items.length - 1) * 100}vw)`],
      });

      scroll(controls, { target: sectionRef.current });
    }
  }, []);

  return (
    <section ref={sectionRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <ul ref={ulRef} className="flex h-full bg-white">
          {PRACTICES.map((practice, index) => {
            const Icon = practice.icon;
            const isLast = index === PRACTICES.length - 1;

            return (
              <li
                key={practice.href}
                className="practice-item h-screen w-screen flex-shrink-0 flex flex-col justify-center items-center relative bg-white"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${practice.color}25 0%, ${practice.color}10 50%, white 100%)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-24">
                  <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className="flex flex-col">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                        style={{ backgroundColor: practice.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-stone-900 leading-[1.1] tracking-tight">
                        {practice.title}
                      </h2>

                      <p className="text-lg lg:text-xl text-stone-600 leading-relaxed mb-8">
                        {practice.description}
                      </p>

                      <div>
                        <Link
                          href={practice.href}
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl rounded-lg"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={practice.image}
                          alt={practice.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 90vw, 45vw"
                        />

                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: `linear-gradient(135deg, ${practice.color}60, transparent)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {isLast && (
                  <div className="absolute bottom-10 sm:bottom-16 left-1/2 -translate-x-1/2 z-20">
                    <Link
                      href="/services"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-all shadow-2xl rounded-xl text-base sm:text-lg"
                    >
                      <span>View all services</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function PracticeAreas() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Header Section - Static, not part of horizontal scroll */}
      <div className="relative bg-stone-100 py-16 sm:py-20 lg:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(120 113 108) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-12 h-[2px] bg-amber-600" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-700">
                Practice Areas
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.05] tracking-tight mb-5 sm:mb-6">
              Comprehensive legal solutions
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 leading-relaxed">
              Our multi-disciplinary teams deliver integrated legal counsel
              across all major practice areas, combining technical excellence
              with commercial pragmatism.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <HorizontalCards />
    </>
  );
}
