"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import Image from "next/image";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden w-full min-h-screen h-full flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=85"
          alt=""
          fill
          className="object-cover"
          sizes="100vw "
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/95 via-stone-900/90 to-stone-950/95" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-amber-400">
              Get Expert Legal Counsel
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6"
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
            className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed"
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
              className="group w-full sm:w-auto px-8 py-4 bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Schedule consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+442071234567"
              className="group w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center justify-center gap-2"
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
            className="pt-12 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-stone-400">
              <a
                href="mailto:info@empass.law"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@empass.law</span>
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-stone-600" />
              <p className="text-sm">123 Fleet Street, London EC4A 2AB</p>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-stone-600" />
              <p className="text-sm">Available 24/7 for urgent matters</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/5 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-amber-500/10 rounded-full blur-xl" />
    </section>
  );
}
