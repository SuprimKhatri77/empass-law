"use client";

import Link from "next/link";
import {
  ArrowRight,
  Scale,
  Briefcase,
  Users,
  Building2,
  FileText,
  Home,
} from "lucide-react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface Practice {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const PRACTICES: Practice[] = [
  {
    title: "Corporate & M&A",
    href: "/services/corporate-law",
    description:
      "Strategic advice on mergers, acquisitions, joint ventures, and corporate restructuring for domestic and cross-border transactions.",
    icon: Building2,
    color: "#f59e0b",
  },
  {
    title: "Litigation & Dispute Resolution",
    href: "/services/litigation-and-adr",
    description:
      "Robust representation in commercial litigation, arbitration, and mediation across all major forums and tribunals.",
    icon: Scale,
    color: "#57534e",
  },
  {
    title: "Employment & HR",
    href: "/services/employment",
    description:
      "Comprehensive employment law counsel covering contracts, disputes, restructures, and regulatory compliance.",
    icon: Users,
    color: "#2563eb",
  },
  {
    title: "Banking & Finance",
    href: "/services/banking-finance",
    description:
      "Expert guidance on corporate finance, lending, restructuring, and regulatory matters in financial services.",
    icon: Briefcase,
    color: "#059669",
  },
  {
    title: "Commercial Contracts",
    href: "/services/commercial-law",
    description:
      "Drafting and negotiating complex commercial agreements, partnerships, IP licensing, and technology contracts.",
    icon: FileText,
    color: "#7c3aed",
  },
  {
    title: "Real Estate",
    href: "/services/property",
    description:
      "Full-service property law expertise covering acquisitions, development, leasing, and real estate finance.",
    icon: Home,
    color: "#e11d48",
  },
];

interface CardProps {
  i: number;
  practice: Practice;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  practice,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const iconScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const Icon = practice.icon;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: practice.color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md lg:p-10 sm:p-4 p-2 origin-top"
      >
        <h2 className="text-2xl text-center font-semibold text-white">
          {practice.title}
        </h2>
        <div className="flex h-full mt-5 gap-10">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-sm text-white/90">{practice.description}</p>
            <span className="flex items-center gap-2 pt-2">
              <Link
                href={practice.href}
                className="underline cursor-pointer text-white"
              >
                See more
              </Link>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: iconScale }}>
              <div className="w-full h-full flex items-center justify-center bg-white/10">
                <Icon className="w-32 h-32 text-white/80" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Expertise() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-black" ref={container}>
      <section className="text-white h-[70vh] w-full bg-slate-950 grid place-content-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] relative z-10">
          Our Practice Areas
          <br />
          Scroll down! 👇
        </h1>
      </section>

      <section className="text-white w-full bg-slate-950">
        {PRACTICES.map((practice, i) => {
          const targetScale = 1 - (PRACTICES.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              practice={practice}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      <footer className="group bg-slate-950">
        <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-neutral-400 to-neutral-800 bg-clip-text text-transparent transition-all ease-linear">
          Legal Excellence
        </h1>
        <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
      </footer>
    </main>
  );
}
