"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

interface Pillar {
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  { title: "Client-focused", description: "Tailored strategies and partner-led service that deliver results." },
  { title: "Proven excellence", description: "Top-tier rankings and a track record in high-stakes matters." },
  { title: "Responsive", description: "Rapid response times when it matters most." },
  { title: "Innovation", description: "Traditional expertise with modern tools and commercial thinking." },
];

export default function Why() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-500 mb-4">
            Why choose us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
            Delivering impact for clients.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.08 }}
              className="p-6 border border-stone-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{pillar.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
