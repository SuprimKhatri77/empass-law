"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 bg-stone-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6"
        >
          Ready to get started?
        </motion.h2>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.1 }}
          className="text-stone-400 text-lg mb-10 max-w-xl mx-auto"
        >
          Schedule a confidential consultation. No obligation — just clear,
          practical advice.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : reduce ? {} : undefined}
          transition={{ duration: 0.4, delay: reduce ? 0 : 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors"
          >
            Book a consultation
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <a
            href="tel:+442071234567"
            className="inline-flex items-center gap-2 px-8 py-4 border border-stone-600 text-white font-medium hover:bg-stone-800 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden />
            +44 20 7123 4567
          </a>
        </motion.div>
      </div>
    </section>
  );
}
