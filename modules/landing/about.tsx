"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-10%", "0%", "10%"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-stone-50 overflow-hidden"
    >
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side with Parallax */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <motion.div
              style={reduce ? {} : { y: imageY }}
              className="relative w-full h-[120%]"
            >
              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=90"
                alt="London cityscape at dusk"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-stone-200"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-display text-stone-900 mb-1">
                    £50M+
                  </div>
                  <div className="text-xs text-stone-600 uppercase tracking-wider">
                    Average Deal Size
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-display text-stone-900 mb-1">
                    98%
                  </div>
                  <div className="text-xs text-stone-600 uppercase tracking-wider">
                    Client Retention
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <motion.div style={reduce ? {} : { x: textX }} className="space-y-8">
            <div>
              <motion.div
                initial={reduce ? {} : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-block mb-4"
              >
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
                  About Empass Law
                </span>
              </motion.div>

              <motion.h2
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] tracking-tight mb-6"
              >
                Built on heritage.
                <br />
                <span className="text-stone-500">Driven by results.</span>
              </motion.h2>

              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-lg text-stone-700 leading-relaxed"
              >
                <p>
                  For over 130 years, Empass Law has been the trusted legal
                  partner to Britain's most influential enterprises. From our
                  Fleet Street offices in the heart of London's legal district,
                  we advise FTSE 100 companies, international corporations, and
                  ambitious growth businesses.
                </p>
                <p>
                  Our approach combines the gravitas of our heritage with the
                  agility demanded by modern commerce. We don't just understand
                  the law—we understand your business, your sector, and your
                  strategic objectives.
                </p>
              </motion.div>
            </div>

            {/* Key Differentiators */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 pt-8"
            >
              {[
                {
                  title: "Partner-led service",
                  desc: "Direct access to senior expertise on every matter",
                },
                {
                  title: "Cross-border capability",
                  desc: "Seamless coordination across multiple jurisdictions",
                },
                {
                  title: "Sector specialists",
                  desc: "Deep expertise in finance, tech, real estate & more",
                },
                {
                  title: "24/7 availability",
                  desc: "Always accessible when critical issues arise",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-1 h-full bg-amber-600" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={reduce ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-stone-900 font-semibold text-lg"
              >
                Discover our story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
