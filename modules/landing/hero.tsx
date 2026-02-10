"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center py-20 overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video> */}

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
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />

        {/* Subtle lines for sophistication */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* Content - Left aligned, more sophisticated */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="mb-6">
            <div className="w-16 h-1 bg-white/40 mb-8" />
          </div>

          <h1 className="text-[44px] sm:text-[52px] lg:text-[64px] leading-[1.15] font-light text-white mb-6 tracking-tight">
            Delivering high quality
            <br />
            <span className="font-semibold">legal outcomes,</span>
            <br />
            <span className="font-semibold">globally</span>
          </h1>

          <p className="text-white/70 text-[17px] leading-relaxed mb-10 max-w-xl font-light">
            Excellence in legal services with a global perspective. Trusted by
            leading organizations worldwide.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-white text-[14px] font-medium tracking-wide uppercase border-b border-white/40 pb-2 hover:border-white transition-all group"
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
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-[0.2em] uppercase font-light">
          Scroll
        </span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div> */}
    </section>
  );
}
