"use client";

import { motion } from "framer-motion";
import { Award, Clock, Globe, Target, ThumbsUp } from "lucide-react";

const items = [
  { icon: Target, title: "Client-focused", description: "Tailored strategies that deliver measurable results." },
  { icon: Award, title: "Proven excellence", description: "Top-tier rankings and success in high-stakes matters." },
  { icon: Clock, title: "Responsive", description: "Partner-led service with rapid response times." },
  { icon: ThumbsUp, title: "Results-driven", description: "Commercial approach for optimal outcomes." },
  { icon: Globe, title: "Industry expertise", description: "Deep sector knowledge across key industries." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex px-4 py-2 bg-amber-50 border border-amber-200/80 rounded-sm mb-6">
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">Why choose us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">What sets us apart</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Expertise, integrity and commitment to our clients.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 sm:p-8 border border-stone-200 rounded-lg hover:border-amber-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
