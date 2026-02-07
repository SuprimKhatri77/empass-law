"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { step: "01", title: "Initial consultation", description: "Confidential discussion to understand your needs." },
  { step: "02", title: "Strategic planning", description: "Tailored strategy with transparent pricing." },
  { step: "03", title: "Expert execution", description: "Partner-led team handling your matter." },
  { step: "04", title: "Successful outcome", description: "Optimal results with ongoing support." },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-stone-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex px-4 py-2 bg-amber-50 border border-amber-200/80 rounded-sm mb-6">
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase">Our process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">How we work</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-lg bg-stone-900 text-white flex items-center justify-center text-lg font-bold">
                {item.step}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-stone-200" />
              )}
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
