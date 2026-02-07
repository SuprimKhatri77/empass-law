"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Lightbulb } from "lucide-react";
import Link from "next/link";

const items = [
  { icon: BookOpen, title: "Legal guides", description: "Guides and updates on key legal topics.", link: "/guides" },
  { icon: Lightbulb, title: "Case studies", description: "How we've helped clients achieve success.", link: "/our-work" },
  { icon: FileText, title: "Resources", description: "Templates and tools for legal matters.", link: "/resources" },
];

export default function Insights() {
  return (
    <section className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex px-4 py-2 bg-amber-50 border border-amber-200/80 rounded-sm mb-6">
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Legal insights</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={item.link}
                className="group block p-6 sm:p-8 bg-white border border-stone-200 rounded-lg hover:border-amber-200 hover:shadow-md transition-all"
              >
                <item.icon className="w-10 h-10 text-amber-600 mb-5" />
                <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-amber-800">{item.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
