"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

interface Practice {
  title: string;
  href: string;
  description: string;
}

const PRACTICES: Practice[] = [
  { title: "Corporate", href: "/services/corporate-law", description: "M&A, governance, restructuring." },
  { title: "Litigation & ADR", href: "/services/litigation-and-adr", description: "Disputes, arbitration, mediation." },
  { title: "Employment", href: "/services/employment", description: "Contracts, tribunals, compliance." },
  { title: "Banking & Finance", href: "/services/banking-finance", description: "Finance, regulatory, transactions." },
  { title: "Commercial", href: "/services/commercial-law", description: "Contracts, partnerships, IP." },
  { title: "Real Estate", href: "/services/property", description: "Commercial and residential." },
];

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 bg-stone-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-500 mb-4">
            Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight max-w-2xl">
            Facilitating commercial legal solutions.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICES.map((practice, i) => (
            <motion.div
              key={practice.href}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.06 }}
            >
              <Link
                href={practice.href}
                className="group block p-6 sm:p-8 bg-white border border-stone-200 rounded-lg hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-stone-700">
                  {practice.title}
                </h3>
                <p className="text-stone-600 text-sm mb-4">{practice.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : reduce ? {} : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.35 }}
          className="mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-stone-900 font-semibold hover:underline underline-offset-4"
          >
            View all practice areas
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
