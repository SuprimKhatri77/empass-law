"use client";

import Link from "next/link";
import { ArrowRight, Spotlight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "@/components/sparkles";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

const HERO_TEXT = "Delivering excellence in legal counsel";

export default function Hero() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 z-10 pt-24 sm:pt-20"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={7}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <motion.div
        style={reduce ? {} : { opacity, scale }}
        className="relative z-10 max-w-[1600px] mx-auto w-full px-6 sm:px-8 lg:px-12 "
      >
        <div className="max-w-5xl mx-auto text-center ">
          {/* Animated Badge */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-stone-700/50 bg-stone-900/30 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-stone-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-stone-300">
              London · Established 1892
            </span>
          </motion.div>

          {/* Main Heading with Character Animation */}

          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />
          <div className="mb-6 sm:mb-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight">
              {HERO_TEXT.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                  <motion.span
                    initial={reduce ? {} : { y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: wordIndex * 0.1 + 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-2 sm:mr-3 md:mr-4"
                  >
                    {word === "excellence" ? (
                      <div className="font-bold tracking-tight ">
                        <PointerHighlight containerClassName="">
                          <span>{word}</span>
                        </PointerHighlight>
                      </div>
                    ) : (
                      word
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-400 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light px-4 sm:px-0"
          >
            A premier London law firm advising FTSE 100 companies and
            international enterprises on their most critical matters since 1892
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-stone-900 font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-white/10 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Schedule consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-stone-700 text-white font-medium hover:bg-stone-900/50 transition-all backdrop-blur-sm text-sm sm:text-base text-center"
            >
              Learn about us
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4 sm:px-0"
          >
            {[
              { value: "130+", label: "Years of Excellence" },
              { value: "50+", label: "Expert Partners" },
              { value: "£2B+", label: "Transactions Advised" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-stone-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-stone-700 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
