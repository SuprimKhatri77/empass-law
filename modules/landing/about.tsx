"use client";

import { useInView, motion } from "framer-motion";
import { ArrowRight, Award, Landmark, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  return (
    <section
      ref={aboutRef}
      className="relative py-20 sm:py-32 bg-[#0D1425] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#7B2FFF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#4988C4]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative p-8 sm:p-12 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
                <Landmark className="w-16 sm:w-20 h-16 sm:h-20 text-gray-50 mb-6" />
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl sm:text-5xl font-black text-gray-50">
                      130+
                    </div>
                    <div className="text-sm text-white/50 uppercase tracking-wider">
                      Years
                      <br />
                      Excellence
                    </div>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-[#4988C4]/50 to-transparent" />
                  <div className="flex items-center gap-4">
                    <div className="text-4xl sm:text-5xl font-black text-gray-50">
                      50+
                    </div>
                    <div className="text-sm text-white/50 uppercase tracking-wider">
                      Expert
                      <br />
                      Solicitors
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 p-6 bg-gradient-to-br from-[#4988C4]/10 to-[#7B2FFF]/10 border border-[#4988C4]/30 backdrop-blur-sm hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#4988C4]" />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">
                      Award Winning
                    </div>
                    <div className="text-sm font-bold text-white">
                      Top Tier Firm
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#4988C4]/10 to-[#7B2FFF]/10 border border-[#4988C4]/20">
                <span className="text-xs font-bold tracking-widest text-[#4988C4] uppercase">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Leading Legal Excellence for Over a Century
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Since 1892, we have been at the forefront of legal innovation,
              combining traditional values with cutting-edge expertise. Our
              commitment to excellence and client satisfaction has made us one
              of London's most trusted law firms.
            </p>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              We serve a diverse client base ranging from FTSE 100 companies to
              innovative startups, delivering strategic legal solutions that
              drive business success. Our team of expert solicitors brings deep
              industry knowledge and a results-driven approach to every matter.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-6">
              {[
                { icon: Star, label: "Client Satisfaction", value: "98%" },
                { icon: TrendingUp, label: "Success Rate", value: "95%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-6 bg-white/[0.02] border border-white/5"
                >
                  <stat.icon className="w-8 h-8 text-[#4988C4] mb-3" />
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4988C4]/10 to-[#7B2FFF]/10 border border-[#4988C4]/30 text-white font-bold hover:bg-[#4988C4]/20 transition-all"
            >
              <span>Know More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
