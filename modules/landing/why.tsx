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
}

const PILLARS: Pillar[] = [
  {
    title: "Uncompromising Excellence",
    description:
      "Consistently ranked in Chambers and Legal 500 for technical expertise and client service. Our partners are recognized leaders in their fields.",
    icon: Award,
  },
  {
    title: "Rapid Response",
    description:
      "When critical issues arise, we mobilize immediately. Partner-led teams available 24/7 for urgent matters requiring swift, decisive action.",
    icon: Clock,
  },
  {
    title: "Global Reach",
    description:
      "Seamless cross-border capability through our international network. We coordinate complex multi-jurisdictional matters with precision.",
    icon: Globe,
  },
  {
    title: "Client-First Approach",
    description:
      "We invest time understanding your business, sector dynamics, and strategic objectives to deliver counsel that truly serves your interests.",
    icon: Shield,
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
      className="relative py-32 bg-stone-900 w-full text-white overflow-hidden"
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

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full inline-block mb-6">
            Why Empass Law
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            <ScrambleText text="The difference is in the details" delay={200} />
          </h2>
          <p className="text-xl text-stone-400 leading-relaxed">
            What sets Empass Law apart is our unwavering commitment to
            excellence, responsiveness, and results-driven counsel.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={reduce ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-xl">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-amber-500/20 group-hover:border-amber-500/40 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "Chamber Ranked", label: "Legal Excellence" },
              { value: "5-Star", label: "Client Reviews" },
              { value: "30+", label: "Industry Sectors" },
              { value: "Global", label: "Reach & Network" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-display text-amber-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
