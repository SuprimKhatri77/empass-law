"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SvgHoverEffect from "../effects/SvgHoverEffect";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <style jsx>{`
        @keyframes border-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-border-flow {
          animation: border-flow 3s ease-in-out infinite;
        }

        /* EMPASS: scales fluidly with viewport — huge on mobile, capped at 100px on desktop */
        .empass-title {
          font-size: clamp(60px, 18vw, 100px);
          line-height: 1;
        }

        /* "A Law Firm," — big but visibly smaller than EMPASS */
        .law-firm-title {
          font-size: clamp(38px, 11vw, 60px);
          line-height: 1.1;
        }

        /* "DRIVEN BY PURPOSE..." — shrinks enough on mobile to stay on one line each */
        .driven-title {
          font-size: clamp(14px, 4.8vw, 60px);
          line-height: 1.2;
          white-space: nowrap;
        }

        /* Subtitle paragraph */
        .hero-subtitle {
          font-size: clamp(13px, 2.2vw, 24px);
        }

        @media (max-width: 639px) {
          .hero-heading {
            letter-spacing: 1px;
          }
        }
      `}</style>

      {/* Video Background with improved overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full aspect-video object-cover"
          aria-hidden="true"
        >
          <source src="/hero-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layer overlay for depth and better readability */}
        <div className="absolute inset-0 bg-[#09265F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>

      {/* Content — section already has flex items-center justify-center for vertical centering */}
      <div className="relative z-10 max-w-[1400px] flex items-center mx-auto px-2 sm:px-8 lg:px-12 w-full">
        <div
          className={`w-full max-w-[1150px] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Content card */}
          <div className="relative p-5 sm:p-10 rounded-2xl">
            {/* Content wrapper — mt-100 preserved from original */}
            <div className="relative z-10 mt-30 md:mt-100">
              {/* Main heading */}
              <h1
                className={`hero-heading font-bold montserrat text-white mb-2 md:mb-5 lg:mb-8 tracking-[2px] lg:tracking-[6px] uppercase transition-all duration-1000 delay-300 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                {/* EMPASS big, "A Law Firm," big but smaller — fluid via clamp() */}
                <span className="flex flex-col md:gap-3 font-extrabold raleway text-3xl lg:text-4xl">
                  EMPASS:
                  <span className=" text-3xl md:text-6xl lg:text-7xl">A Law Firm,</span>
                </span>

                <span className="block font-mono font-bold text-[#4ECDC4] text-3xl md:text-4xl lg:text-5xl">
                  DRIVEN BY PURPOSE.
                  <br />
                  MEASURED BY RESULTS.
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-white hero-subtitle leading-[1.7] mb-12 max-w-7xl font-bold transition-all duration-1000 delay-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
              >
                We stand at the intersection of precision, integrity, and
                impact-cutting through complexity with clarity, confidence, and
                unwavering commitment to our clients&apos; success.
              </p>

              {/* CTA Buttons — kept commented as in original */}
              {/* <div
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a2332] text-[16px] font-semibold tracking-wide uppercase rounded-lg hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  About Empass Law
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/40 text-white text-[16px] font-semibold tracking-wide uppercase rounded-lg hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get in touch
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 hidden sm:block left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-xs uppercase tracking-widest font-medium">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
