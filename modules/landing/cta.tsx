"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center py-32 overflow-hidden bg-stone-50"
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(120 113 108) 1px, transparent 1px), linear-gradient(to bottom, rgb(120 113 108) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

      {/* Cloud/Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 via-stone-100/40 to-transparent backdrop-blur-sm" />
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255, 255, 255, 0.5)"
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-600/30 bg-amber-50 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-amber-700 font-semibold">
              Get Expert Legal Counsel
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.05] tracking-tight mb-6"
          >
            Let's discuss your
            <br />
            legal objectives
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a confidential consultation with our senior partners. No
            obligation—just clear, strategic legal advice tailored to your
            needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 rounded-lg"
            >
              Schedule consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+442071234567"
              className="group w-full sm:w-auto px-8 py-4 border-2 border-stone-300 text-stone-900 font-semibold hover:bg-stone-100 transition-all backdrop-blur-sm inline-flex items-center justify-center gap-2 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              +44 20 7123 4567
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12 border-t border-stone-300"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-stone-600">
              <a
                href="mailto:info@empass.law"
                className="flex items-center gap-2 hover:text-stone-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@empass.law</span>
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-stone-400" />
              <p className="text-sm">123 Fleet Street, London EC4A 2AB</p>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-stone-400" />
              <p className="text-sm">Available 24/7 for urgent matters</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-amber-200 rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-stone-200 rounded-full opacity-30" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-100 rounded-full blur-3xl opacity-40" />
    </section>
  );
}
