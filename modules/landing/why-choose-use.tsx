"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { Award, Clock, Globe, Sparkles, Target, ThumbsUp } from "lucide-react";
import { useRef, useState } from "react";

interface WhyChooseUs {
  icon: typeof Target;
  title: string;
  description: string;
}
const whyChooseUs: WhyChooseUs[] = [
  {
    icon: Target,
    title: "Client-Focused Approach",
    description:
      "We prioritize your objectives with tailored strategies that deliver measurable results and exceed expectations.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "Award-winning team with top-tier rankings and a track record of success in complex, high-stakes matters.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description:
      "Partner-led service with rapid response times. We're available when you need us most.",
  },
  {
    icon: ThumbsUp,
    title: "Results-Driven",
    description:
      "Strategic, commercial approach focused on achieving optimal outcomes efficiently and cost-effectively.",
  },
  {
    icon: Globe,
    title: "Industry Expertise",
    description:
      "Deep sector knowledge across technology, finance, real estate, healthcare, and manufacturing.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "Combining traditional legal expertise with modern technology and innovative problem-solving.",
  },
];
export default function WhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const isWhyChooseInView = useInView(whyChooseRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <section
      ref={whyChooseRef}
      className="relative py-20 sm:py-32 bg-[#0f172a]" // deep navy
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          linear-gradient(to right, #334155 1px, transparent 1px),
          linear-gradient(to bottom, #334155 1px, transparent 1px)
        `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Section label */}
          <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF9D]/10 border border-[#00D9FF]/20">
            <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
              Why choose us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white px-4">
            What Sets Us Apart
          </h2>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
            Combining expertise, integrity, and unwavering commitment to our clients
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative"
            >
              <div className="relative h-full p-6 sm:p-8 bg-[#020617] border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden">
                {/* Subtle hover overlay (no gradient) */}
                <motion.div
                  className="absolute inset-0 bg-white/[0.03]"
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-16 h-16 bg-[#0f172a] border border-white/15 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <item.icon className="w-8 h-8 text-slate-300" />
                  </motion.div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white relative z-10">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed relative z-10 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
