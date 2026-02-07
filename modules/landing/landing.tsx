"use client";

import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Hero from "./hero";
import About from "./about";
import Why from "./why";
import CTA from "./cta";
import PracticeAreas from "./practice-areas";

export default function Landing() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const aboutScale = useTransform(
    scrollYProgress,
    [0, 0.1],
    isMobile ? [1, 1] : [1, 0.96],
  );

  return (
    <ReactLenis root options={{ lerp: isMobile ? 0.05 : 0.1 }}>
      <main className="bg-stone-50 text-stone-900" ref={container}>
        <Hero />

        <div className="wrapper relative">
          {/* About Section */}
          <section className="min-h-screen w-full md:sticky md:top-0 flex items-center justify-center">
            <motion.div
              style={isMobile ? {} : { scale: aboutScale }}
              className="w-full"
            >
              <About />
            </motion.div>
          </section>

          <PracticeAreas />

          <Why />

          <div className="sticky top-0 z-50 -mt-[100vh]">
            <CTA />
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
