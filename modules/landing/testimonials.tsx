"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Exceptional strategic insight and flawless execution. Their corporate team handled our £500M merger with precision.",
    author: "James Anderson",
    position: "CEO, TechVentures Group",
  },
  {
    quote: "Best litigation team in London. They secured an outstanding result in our complex IP dispute.",
    author: "Sarah Mitchell",
    position: "General Counsel, InnovateCorp",
  },
  {
    quote: "Professional, responsive and incredibly knowledgeable. Trusted legal partners for over 15 years.",
    author: "David Chen",
    position: "Managing Director, Sterling Properties",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Quote className="w-12 h-12 text-amber-200 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">Client testimonials</h2>
        </motion.div>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl text-stone-700 mb-8 leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <p className="font-semibold text-stone-900">{testimonials[current].author}</p>
              <p className="text-sm text-stone-500">{testimonials[current].position}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-8 bg-amber-600" : "w-1.5 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
