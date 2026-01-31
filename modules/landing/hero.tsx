"use client";

import Link from "next/link";
import { ArrowRight, Scale, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Commented stats for future use
// const stats: Stat[] = [
//   { value: '130', label: 'Years of Excellence', suffix: '+' },
//   { value: '98', label: 'Success Rate', suffix: '%' },
//   { value: '500', label: 'Cases Won', suffix: '+' },
//   { value: '2.5', label: 'Value Secured', prefix: '£', suffix: 'B+' },
// ];

export default function Hero() {
  return (
    <main className="bg-[#0A0F1C] text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0F1C]" />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00D9FF]/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#7B2FFF]/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-2.5 bg-gradient-to-r from-[#00D9FF]/10 to-[#7B2FFF]/10 border border-[#00D9FF]/30 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Scale className="w-4 h-4 text-[#00D9FF]" />
                  <span className="text-sm font-bold tracking-widest text-white/90 uppercase">
                    Excellence Since 1892
                  </span>
                  <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
            >
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Elite Legal
              </span>
              <span className="block bg-gradient-to-r from-[#00D9FF] via-[#7B2FFF] to-[#FF6B9D] bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed px-4"
            >
              London's premier law firm delivering exceptional results in
              high-stakes matters. Trusted by FTSE 100 companies and innovative
              startups alike.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
            >
              <Link
                href="/contact"
                className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#00D9FF] to-[#7B2FFF] text-white font-bold overflow-hidden"
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-3 text-base sm:text-lg whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7B2FFF] to-[#00D9FF]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/our-work"
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-all text-base sm:text-lg"
              >
                <span className="flex items-center justify-center gap-3 whitespace-nowrap">
                  View Case Studies
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-gradient-to-b from-[#00D9FF] to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
