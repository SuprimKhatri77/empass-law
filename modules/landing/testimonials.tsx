"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Exceptional strategic insight and flawless execution. Their corporate team handled our £500M merger with surgical precision.",
    author: "James Anderson",
    position: "CEO, TechVentures Group",
    rating: 5,
  },
  {
    quote:
      "Best litigation team in London. They secured an outstanding result in our complex IP dispute. Simply outstanding.",
    author: "Sarah Mitchell",
    position: "General Counsel, InnovateCorp",
    rating: 5,
  },
  {
    quote:
      "Professional, responsive, and incredibly knowledgeable. They've been our trusted legal partners for over 15 years.",
    author: "David Chen",
    position: "Managing Director, Sterling Properties",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative py-20 sm:py-32 bg-[#0A0F1C] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2FFF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Quote className="w-16 sm:w-20 h-16 sm:h-20 text-[#7B2FFF]/20 mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent px-4">
            Client Testimonials
          </h2>
        </motion.div>

        <div className="relative min-h-[300px] sm:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-[#4988C4] text-[#4988C4]"
                  />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-8 leading-relaxed px-4">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="space-y-2">
                <div className="text-lg sm:text-xl font-bold text-white">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-sm sm:text-base text-white/50">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all ${
                  index === currentTestimonial
                    ? "w-12 h-3 bg-[#4988C4]"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
