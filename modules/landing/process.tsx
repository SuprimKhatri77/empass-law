"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Process {
  step: string;
  title: string;
  description: string;
}
const process: Process[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Free confidential consultation to understand your needs and objectives.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Develop a tailored legal strategy with transparent pricing and timelines.",
  },
  {
    step: "03",
    title: "Expert Execution",
    description:
      "Partner-led service with dedicated team handling your matter.",
  },
  {
    step: "04",
    title: "Successful Outcome",
    description: "Achieve optimal results with ongoing support and guidance.",
  },
];

export default function Process() {
  const processRef = useRef<HTMLElement>(null);

  const isProcessInView = useInView(processRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <section
      ref={processRef}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-[#0D1425] to-[#0A0F1C]"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#4988C4]/10 to-[#00FF9D]/10 border border-[#4988C4]/20">
            <span className="text-xs font-bold tracking-widest text-[#4988C4] uppercase">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent px-4">
            How We Work
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4988C4] to-transparent" />

          <div className="grid grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Number Badge */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 bg-[#0C7779] flex items-center justify-center relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-2xl font-black text-black">
                    {item.step}
                  </span>

                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#4988C4]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-16 h-16 bg-[#0C7779] flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xl font-black text-white">
                    {item.step}
                  </span>
                </motion.div>
              </div>

              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
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
