"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0 : 0.12,
      delayChildren: reduce ? 0 : 0.1,
    },
  }),
};

const item = (reduce: boolean) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 20 },
  visible: { opacity: 1, y: 0 },
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=85"
          alt="London skyline"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-900/60" aria-hidden />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 pb-24 sm:pb-32 pt-32 sm:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          custom={reduce}
          className="max-w-3xl"
        >
          <motion.p
            variants={item(reduce)}
            className="text-white/80 text-sm sm:text-base tracking-[0.2em] uppercase mb-6 font-medium"
          >
            London · Est. 1892
          </motion.p>
          <motion.h1
            variants={item(reduce)}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Delivering high-quality legal outcomes, globally.
          </motion.h1>
          <motion.p
            variants={item(reduce)}
            className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
          >
            We advise FTSE 100 companies and innovative businesses on their most
            important matters.
          </motion.p>
          <motion.div variants={item(reduce)}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-current flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-current" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
