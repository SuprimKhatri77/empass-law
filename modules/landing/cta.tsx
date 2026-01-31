"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#0A0F1C] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-[#7B2FFF]/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B2FFF]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D9FF]/20 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent px-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto px-4">
            Schedule a confidential consultation with our expert legal team. No
            obligation, just exceptional advice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto
                        px-8 sm:px-10 py-4 sm:py-5
                        bg-[#0f172a]
                        text-[#d4af37]
                        border-2 border-[#d4af37]
                        hover:bg-[#d4af37] hover:text-[#0f172a]
                        font-semibold
                        transition-all duration-300"
            >
              <motion.span
                className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </motion.span>
            </Link>

            <Link
              href="tel:+442071234567"
              className="group w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-5 border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-all text-base sm:text-lg flex items-center justify-center gap-3 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              +44 20 7123 4567
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
