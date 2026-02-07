"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80"
              alt="London – City of Law"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-500 mb-4">
              About us
            </p>
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight mb-6"
            >
              A London-headquartered firm delivering impact for clients
              worldwide.
            </motion.h2>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : reduce ? {} : undefined}
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.15 }}
              className="text-stone-600 text-lg leading-relaxed max-w-xl mb-8"
            >
              We have been advising clients for over 130 years. Today we support
              FTSE 100 companies and innovative businesses across corporate,
              dispute resolution, employment, finance and real estate —
              combining deep expertise with a commercial, results-driven
              approach.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : reduce ? {} : undefined}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.25 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-stone-900 font-semibold hover:underline underline-offset-4"
              >
                Find out more
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
