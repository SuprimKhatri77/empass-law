"use client";
import Link from "next/link";
import { useState } from "react";
import SvgHoverEffect from "../effects/SvgHoverEffect";

export default function Hero() {
  const [hoverEffect, setHoverEffect] = useState<boolean>(false);
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background - Full screen with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332]/95 via-[#2c4a6e]/85 to-[#3d5a7e]/90" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Elegant geometric accent elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-20">
        <div className="max-w-4xl">
          {/* Decorative line */}
          <div className="mb-10">
            <div className="w-20 h-1 bg-gradient-to-r from-white/60 to-white/20" />
          </div>

          {/* Main heading */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[68px] lg:text-[82px] xl:text-[96px] leading-[1.05] font-light text-white mb-8 tracking-tight">
            Delivering high quality
            <br />
            <span className="font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              legal outcomes,
            </span>
            <br />
            <span className="font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              globally
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-[17px] sm:text-[19px] lg:text-[21px] leading-relaxed mb-12 max-w-2xl font-light">
            Excellence in legal services with a global perspective. Trusted by
            leading organizations worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* mobile version button*/}
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white md:hidden text-[#1a2332] text-[14px] font-semibold tracking-wide uppercase rounded-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              About Empass Law
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Desktop version buttton */}
            <Link
              href="/about"
              className="group items-center justify-center gap-3 px-8 py-4 hidden md:inline-flex font-semibold tracking-wide uppercase"
            >
              <SvgHoverEffect text="About Empass Law" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-[14px] font-semibold tracking-wide uppercase rounded-sm hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Get in touch
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/50 text-[12px] uppercase tracking-widest mb-4 font-medium">
              Trusted by leading organizations
            </p>
            <div className="flex flex-wrap gap-8 opacity-60">
  
              <div className="h-8 w-24 bg-white/20 rounded" />
              <div className="h-8 w-24 bg-white/20 rounded" />
              <div className="h-8 w-24 bg-white/20 rounded" />
              <div className="h-8 w-24 bg-white/20 rounded" />
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}