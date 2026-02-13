"use client";
import Link from "next/link";
import ThreeScene from "../3Dmodel/ThreeScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Professional CSS Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#2c4a6e] to-[#3d5a7e]">
        {/* Animated subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
            `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Elegant geometric shapes */}
        <div className="absolute top-20 right-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 sm:w-64 lg:w-80 h-56 sm:h-64 lg:h-80 bg-blue-400/10 rounded-full blur-3xl" />

        {/* Subtle lines for sophistication */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[15%] sm:top-[18%] lg:top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-[25%] sm:bottom-[20%] lg:bottom-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* Content - Side by side layout */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-3xl">
            <div className="mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-white/40 mb-6 sm:mb-8" />
            </div>

            <h1 className="text-[36px] uppercase  md:text-[44px]  xl:text-[54px] leading-[1.15] font-light text-white mb-4 sm:mb-6 tracking-wider">
              Delivering high quality
              <br />
              <span className="font-semibold">legal outcomes,</span>
              <br />
              <span className="font-semibold">globally</span>
            </h1>

            <p className="text-white/70 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed mb-8 sm:mb-10 max-w-xl font-light">
              Excellence in legal services with a global perspective. Trusted by
              leading organizations worldwide.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 sm:gap-3 text-white text-[13px] sm:text-[14px] font-medium tracking-wide uppercase border-b border-white/40 pb-2 hover:border-white transition-all group"
            >
              About Empass Law
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}
