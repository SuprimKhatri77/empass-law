"use client";

import { ReactLenis } from "lenis/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Hero from "./hero";
import About from "./about";
import Expertise from "./expertise";
import Why from "./why";
import CTA from "./cta";
import PracticeAreas from "./practice-areas";
import Image from "next/image";

export default function Landing() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const aboutScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const practiceScale = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.95]);
  const whyScale = useTransform(scrollYProgress, [0.5, 0.8], [1, 0.95]);
  const ctaScale = useTransform(scrollYProgress, [0.7, 0.9], [1, 0.95]);

  return (
    <ReactLenis root>
      <main className="bg-stone-50 text-stone-900" ref={container}>
        <Hero />
        <div className="wrapper relative">
          <section className="min-h-screen w-full sticky top-0 flex items-center justify-center">
            <motion.div style={{ scale: aboutScale }} className="w-full h-full">
              <About />
            </motion.div>
          </section>

          <section className="min-h-screen w-full sticky top-0 flex items-center justify-center">
            <motion.div
              style={{ scale: practiceScale }}
              className="w-full h-full "
            >
              <PracticeAreas />
            </motion.div>
          </section>

          <section className="min-h-screen bg-stone-900 w-full  sticky top-0 flex items-center justify-center">
            <motion.div
              style={{ scale: whyScale }}
              className="w-full  h-full flex items-center justify-center"
            >
              <Why />
            </motion.div>
          </section>
          <section className="sticky top-0 bg-gradient-to-br from-stone-950/95 via-stone-900/90 to-stone-950/95">
            <motion.div style={{ scale: ctaScale }}>
              <CTA />
            </motion.div>
          </section>
        </div>

        {/* <section className="relative z-20 bg-stone-900 text-white">
          <CTA />
        </section> */}
      </main>
    </ReactLenis>
  );
}
