"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import Image from "next/image";
import { Award, Clock, Globe, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Uncompromising Excellence",
    description:
      "Consistently ranked in Chambers and Legal 500 for technical expertise and client service. Our partners are recognized leaders in their fields.",
    icon: Award,
    color: "bg-gradient-to-br from-stone-800 to-stone-900",
  },
  {
    title: "Rapid Response",
    description:
      "When critical issues arise, we mobilize immediately. Partner-led teams available 24/7 for urgent matters requiring swift, decisive action.",
    icon: Clock,
    color: "bg-gradient-to-br from-slate-800 to-slate-900",
  },
  {
    title: "Global Reach",
    description:
      "Seamless cross-border capability through our international network. We coordinate complex multi-jurisdictional matters with precision.",
    icon: Globe,
    color: "bg-gradient-to-br from-zinc-800 to-zinc-900",
  },
  {
    title: "Client-First Approach",
    description:
      "We invest time understanding your business, sector dynamics, and strategic objectives to deliver counsel that truly serves your interests.",
    icon: Shield,
    color: "bg-gradient-to-br from-neutral-800 to-neutral-900",
  },
];

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDisplayText(text);
      return;
    }

    const timer = setTimeout(() => {
      setIsScrambling(true);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iterations = 0;
      const maxIterations = text.length;

      const interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return text[index];
              }
              if (char === " ") return " ";
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        iterations += 1 / 3;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, reduce]);

  return (
    <span className={isScrambling ? "tracking-wider" : ""}>{displayText}</span>
  );
}

export default function Why() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-stone-900 text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/95 to-stone-900" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-32 pb-12 sm:pb-16">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full inline-block mb-6">
              Why Empass Law
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              <ScrambleText
                text="The difference is in the details"
                delay={200}
              />
            </h2>
            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed">
              What sets Empass Law apart is our unwavering commitment to
              excellence, responsiveness, and results-driven counsel.
            </p>
          </motion.div>
        </div>

        {/* Stacking Cards */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              const rotation = index % 2 === 0 ? "rotate-2" : "-rotate-2";

              return (
                <figure
                  key={pillar.title}
                  className="sticky top-0 h-screen grid place-content-center"
                >
                  <motion.article
                    initial={reduce ? {} : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${pillar.color} h-auto sm:h-80 lg:h-96 w-full sm:w-[500px] lg:w-[600px] xl:w-[700px] rounded-2xl p-6 sm:p-8 lg:p-10 grid place-content-center gap-4 sm:gap-6 shadow-2xl border border-amber-500/20 ${rotation}`}
                  >
                    {/* Icon */}
                    <div className="flex justify-center sm:justify-start">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-amber-500/10 backdrop-blur-sm flex items-center justify-center shadow-xl border border-amber-500/30">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed text-center sm:text-left">
                      {pillar.description}
                    </p>
                  </motion.article>
                </figure>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-32 sm:pb-40">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-12 sm:pt-16 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { value: "Chamber Ranked", label: "Legal Excellence" },
                { value: "5-Star", label: "Client Reviews" },
                { value: "30+", label: "Industry Sectors" },
                { value: "Global", label: "Reach & Network" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-stone-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
