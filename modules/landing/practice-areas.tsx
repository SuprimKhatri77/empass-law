"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  Briefcase,
  Users,
  Building2,
  FileText,
  Home,
} from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { LucideIcon } from "lucide-react";

interface Practice {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

const PRACTICES: Practice[] = [
  {
    title: "Corporate & M&A",
    description:
      "Strategic counsel on mergers, acquisitions, joint ventures, and corporate restructuring for domestic and cross-border transactions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85",
    href: "/services/corporate-law",
    icon: Building2,
    color: "#f59e0b", // amber-500
  },
  {
    title: "Litigation & Dispute Resolution",
    description:
      "Robust representation in commercial litigation, arbitration, and mediation across all major forums and tribunals.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85",
    href: "/services/litigation-and-adr",
    icon: Scale,
    color: "#44403c", // stone-700
  },
  {
    title: "Employment & HR",
    description:
      "Comprehensive employment law counsel covering contracts, disputes, restructures, and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    href: "/services/employment",
    icon: Users,
    color: "#2563eb", // blue-600
  },
  {
    title: "Banking & Finance",
    description:
      "Expert guidance on corporate finance, lending, restructuring, and regulatory matters in financial services.",
    image:
      "https://images.unsplash.com/photo-1568584711271-88f78f74c40e?w=1200&q=85",
    href: "/services/banking-finance",
    icon: Briefcase,
    color: "#059669", // emerald-600
  },
  {
    title: "Commercial Contracts",
    description:
      "Drafting and negotiating complex commercial agreements, partnerships, IP licensing, and technology contracts.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85",
    href: "/services/commercial-law",
    icon: FileText,
    color: "#7c3aed", // violet-600
  },
  {
    title: "Real Estate",
    description:
      "Full-service property law expertise covering acquisitions, development, leasing, and real estate finance.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=85",
    href: "/services/property",
    icon: Home,
    color: "#dc2626", // red-600
  },
];

interface PracticeCardProps {
  practice: Practice;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function PracticeCard({
  practice,
  index,
  progress,
  range,
  targetScale,
}: PracticeCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const Icon = practice.icon;

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={
          reduce
            ? {
                top: `calc(-5vh + ${index * 25}px)`,
              }
            : {
                scale,
                top: `calc(-5vh + ${index * 25}px)`,
              }
        }
        className="flex flex-col relative w-[90%] sm:w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] origin-top"
      >
        <Link
          href={practice.href}
          className="group block bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
              {/* Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: practice.color }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-4 lg:mb-6 leading-tight tracking-tight">
                {practice.title}
              </h3>

              {/* Description */}
              <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                {practice.description}
              </p>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                <span>Explore practice area</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[500px] overflow-hidden order-1 lg:order-2">
              <motion.div
                style={reduce ? {} : { scale: imageScale }}
                className="w-full h-full"
              >
                <Image
                  src={practice.image}
                  alt={`${practice.title} legal services`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${practice.color}40, transparent)`,
                  }}
                />
              </motion.div>

              {/* Decorative Element */}
              <div
                className="absolute top-6 right-6 w-12 h-12 rounded-lg opacity-80"
                style={{ backgroundColor: practice.color }}
              />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function PracticeAreas() {
  const containerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-stone-100 py-20 sm:py-28 lg:py-32"
    >
      {/* Section Header */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 mb-16 lg:mb-24">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-700 bg-amber-50 px-4 py-2 rounded-full inline-block mb-6">
            Practice Areas
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.1] tracking-tight mb-6">
            Comprehensive legal solutions
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 leading-relaxed">
            Our multi-disciplinary teams deliver integrated legal counsel across
            all major practice areas, combining technical excellence with
            commercial pragmatism.
          </p>
        </motion.div>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {PRACTICES.map((practice, index) => {
          const targetScale = 1 - (PRACTICES.length - index) * 0.05;
          return (
            <PracticeCard
              key={practice.href}
              practice={practice}
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 mt-32 text-center">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl"
          >
            View all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
