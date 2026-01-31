"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function Insights() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#0D1425]">
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#FFA500]/10 to-[#FF6B00]/10 border border-[#FFA500]/20">
            <span className="text-xs font-bold tracking-widest text-[#FFA500] uppercase">
              Resources
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent px-4">
            Legal Insights
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Legal Guides",
              description:
                "Comprehensive guides on various legal topics and industry updates.",
              link: "/guides",
            },
            {
              icon: Lightbulb,
              title: "Case Studies",
              description:
                "Real-world examples of how we've helped clients achieve success.",
              link: "/our-work",
            },
            {
              icon: FileText,
              title: "Resources",
              description:
                "Templates, checklists, and tools to help with legal matters.",
              link: "/resources",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                href={item.link}
                className="block h-full p-6 sm:p-8 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 hover:border-[#FFA500]/30 transition-all"
              >
                <item.icon className="w-12 h-12 text-[#FFA500] mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-[#FFA500] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 mb-6 text-sm sm:text-base">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-[#FFA500]">
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Explore
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
