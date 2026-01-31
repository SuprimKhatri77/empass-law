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
      className="relative py-20 sm:py-32 bg-[#0A0F1C]"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                      linear-gradient(to right, #7B2FFF 1px, transparent 1px),
                      linear-gradient(to bottom, #7B2FFF 1px, transparent 1px)
                    `,
            backgroundSize: "60px 60px",
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
          <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#7B2FFF]/10 to-[#FF6B9D]/10 border border-[#7B2FFF]/20">
            <span className="text-xs font-bold tracking-widest text-[#7B2FFF] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent px-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto px-4">
            Combining expertise, innovation, and unwavering commitment to client
            success
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative"
            >
              <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-[#7B2FFF]/50 transition-all duration-300 overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#7B2FFF]/5 to-[#FF6B9D]/5"
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0,
                    scale: hoveredFeature === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon with Ripple Effect */}
                <div className="relative mb-6">
                  <motion.div
                    className="relative w-16 h-16 bg-gradient-to-br from-[#7B2FFF]/20 to-[#FF6B9D]/20 border border-[#7B2FFF]/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-8 h-8 text-[#7B2FFF]" />
                  </motion.div>

                  {/* Ripple Effect */}
                  <AnimatePresence>
                    {hoveredFeature === index && (
                      <motion.div
                        className="absolute inset-0 border-2 border-[#7B2FFF]/50"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        exit={{ scale: 1, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-[#7B2FFF] transition-colors relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed relative z-10 text-sm sm:text-base">
                  {item.description}
                </p>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#7B2FFF]/10 to-transparent"
                  animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
