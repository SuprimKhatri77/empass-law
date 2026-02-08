"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Scale, Users, Target, Award, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

// Type definitions
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface ValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface AboutUsSectionProps {
  className?: string;
}

// Data
const VALUES: ValueItem[] = [
  {
    icon: Scale,
    title: "Excellence",
    description:
      "Top-tier legal services with meticulous attention to detail and unwavering commitment to results.",
  },
  {
    icon: Users,
    title: "Expertise",
    description:
      "Dual-qualified lawyers with extensive experience across corporate, commercial, and property law.",
  },
  {
    icon: Target,
    title: "Strategy",
    description:
      "Practical, solution-driven advice that aligns with your commercial objectives.",
  },
  {
    icon: Award,
    title: "Trust",
    description:
      "Built on decades of experience serving businesses and individuals with integrity.",
  },
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rohit-fogla",
    name: "Rohit Fogla",
    role: "Managing Director",
    image: "/Rohit-Folgia.jpg",
    bio: "Dual qualified lawyer (UK and India) specialising in corporate, commercial and banking law with experience at leading London firms including Gunnercooke LLP and Akin Gump LLP.",
  },
  {
    id: "edward-colquhoun",
    name: "Edward Colquhoun",
    role: "Partner, Litigation",
    image: "/Litigation.webp",
    bio: "Former Deputy District Judge with extensive commercial litigation experience. Specialises in dispute resolution, mediation, and strategic advisory across contract, property, and corporate matters.",
  },
  {
    id: "balwinder-sagoo",
    name: "Balwinder Sagoo",
    role: "Director",
    image: "/Balwinder-Sagoo.jpg",
    bio: "Over 17 years advising ultra-high net worth individuals on prime Central London property transactions, complex structures, and secured lending arrangements.",
  },
  {
    id: "gaynor-bannon",
    name: "Gaynor Bannon",
    role: "Consultant",
    image: "/Gaynor-Bannon.png",
    bio: "19+ years in commercial real estate, advising private investors, lenders, and institutions on transactions, finance, and investment management.",
  },
  {
    id: "michelle-bird",
    name: "Michelle Bird",
    role: "Partner, Family",
    image: "/Michelle-Bird.png",
    bio: "24 years specialising in complex international family law matters, high-net-worth financial settlements, and pre/post-nuptial agreements. Member of Family Resolutions.",
  },
];

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = "" }) => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedMember, setExpandedMember] = useState<number | null>(2);

  return (
    <section
      ref={ref}
      className={`relative bg-stone-50 mt-20 py-20 sm:py-32 overflow-hidden ${className}`}
    >
      {/* Sophisticated grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(120 113 108) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(120 113 108) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/50 to-stone-100/80" />

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 sm:mb-32"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-amber-600" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-700">
              About Empass Law
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-[1.05] tracking-tight mb-6">
            Legal excellence in the heart of London
          </h2>

          <p className="text-xl sm:text-2xl text-stone-600 leading-relaxed">
            Strategic legal counsel for businesses and individuals, combining
            international expertise with local knowledge.
          </p>
        </motion.div>

        {/* Hero Image - London Skyline with creative clip-path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-20 sm:mb-32"
        >
          {/* Main image container with clip-path */}
          <div
            className="relative h-[400px] sm:h-[500px] overflow-hidden shadow-2xl"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 85%, 95% 90%, 90% 85%, 85% 90%, 80% 85%, 70% 90%, 60% 85%, 50% 90%, 40% 85%, 30% 90%, 20% 85%, 10% 90%, 5% 85%, 0 90%)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2000&q=90"
              alt="London skyline"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-transparent" />

            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </div>

          {/* Location badge - positioned outside clip area */}
          <div className="absolute bottom-4 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-2xl border border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-stone-900">
                  Mayfair, London
                </p>
                <p className="text-xs text-stone-600">
                  13 Hanover Square, W1S 1HN
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 sm:mb-32"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-600/10 flex items-center justify-center mb-5 group-hover:bg-amber-600/20 transition-colors">
                    <Icon className="w-7 h-7 text-amber-700" />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-amber-600" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-700">
              Our Team
            </span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight tracking-tight">
            Meet our experts
          </h3>
        </motion.div>

        {/* Desktop Team Cards - Accordion hover effect */}
        <div className="hidden lg:block mb-20">
          <div className="w-fit mx-auto gap-1 flex">
            {TEAM_MEMBERS.map((member, i) => {
              const isExpanded = expandedMember === i;

              return (
                <motion.div
                  key={member.id}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-xl relative ${
                    isExpanded ? "w-[450px]" : "w-[80px]"
                  } h-[500px] shrink-0 transition-[width] ease-in-out duration-500 origin-center cursor-pointer`}
                  onClick={() => setExpandedMember(isExpanded ? null : i)}
                  onMouseEnter={() => setExpandedMember(i)}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="w-full rounded-xl h-full object-cover object-[center_top]"
                    quality={95}
                    priority={i < 2}
                  />

                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.article
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              delayChildren: 0.2,
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="absolute flex rounded-xl flex-col justify-end h-full top-0 p-6 space-y-2 overflow-hidden bg-gradient-to-t from-stone-900/90 from-20% to-transparent to-80%"
                      >
                        <motion.h1
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                          }}
                          className="text-2xl font-bold text-white"
                        >
                          {member.name}
                        </motion.h1>
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                          }}
                          className="text-sm font-semibold text-amber-400 uppercase tracking-wide"
                        >
                          {member.role}
                        </motion.p>
                        <motion.p
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                          }}
                          className="text-sm text-white/90 leading-relaxed"
                        >
                          {member.bio}
                        </motion.p>
                      </motion.article>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Team Cards - Clean card layout */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6 mb-20">
          {TEAM_MEMBERS.map((member, index) => {
            const isExpanded = expandedMember === index;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_top] group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-sm font-semibold text-amber-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className={`text-sm text-stone-600 leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}
                  >
                    {member.bio}
                  </p>

                  <button
                    onClick={() => setExpandedMember(isExpanded ? null : index)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors group/btn"
                  >
                    <span>{isExpanded ? "Show less" : "Read more"}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-stone-200">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-stone-900 mb-4 leading-tight">
              Ready to discuss your legal needs?
            </h3>
            <p className="text-lg text-stone-600 mb-8">
              Our team is here to provide expert counsel tailored to your
              objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <span>Our Services</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Regulatory Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-stone-200 text-center"
        >
          <p className="text-xs text-stone-500 max-w-3xl mx-auto">
            Empass Law Limited is authorised and regulated by the Solicitors
            Regulation Authority (ID: 835349). Registered in England and Wales
            with company registration number 13778949.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
