"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Scale, Users, Target, Award, ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";

// Type definitions
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
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
    title: "Client-Centered Excellence",
    description: "Delivering top-tier legal services with a personalized approach tailored to each client's unique needs and objectives.",
  },
  {
    icon: Users,
    title: "Expert Legal Team",
    description: "Dual-qualified lawyers with extensive experience across corporate, commercial, family, and property law matters.",
  },
  {
    icon: Target,
    title: "Strategic Solutions",
    description: "Blending expertise with a personal touch to craft custom legal answers that align with your goals.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Decades of combined experience navigating complex legal matters for businesses and individuals alike.",
  },
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rohit-fogla",
    name: "Rohit Fogla",
    role: "Managing Director",
    image: "/Rohit-Folgia.jpg",
    bio: "Rohit Fogla is a practising dual qualified Lawyer (UK and India) having qualified as an Indian Lawyer, after completing LL.B from the University of Mumbai. He then undertook the Graduate Diploma in Law (CPE) at the Kingston University, London, and both the Legal Practice Course and LL.M in Corporate Law at the London campus of the University of Law of England and Wales. Rohit completed his English Law training contract with Gunnercooke LLP specialising in corporate, commercial, and banking law. He further worked with Akin Gump LLP, Hill Dickinson LLP and Harrison Clark Rickerbys Limited in their London office. Rohit focuses his practice on domestic as well as international corporate, commercial and banking matters including corporate finance, mergers and acquisitions, private equity, commercial contracts and financing.",
  },
  {
    id: "edward-colquhoun",
    name: "Edward Sutherland Colquhoun",
    role: "Partner, Litigation",
    image: "/Litigation.webp",
    bio: "Ed has substantial commercial litigation experience, having solely practised in this area for the span of his career, including serving as a Deputy District Judge in the County Court. He specialises in commercial and civil litigation and regularly appears in the County and High Courts. Ed’s expertise includes contracts, trusts and estates, companies, property and construction, and insurance. He delivers thoughtful, balanced and solution-driven advice and his ability to see the “big picture” enables him to give strategic and tactical recommendations to our clients as a trusted advisor. Ed is particularly passionate about dispute resolution. He regularly conducts mediations in the context of litigation. He also assists parties in voluntary mediations of commercial disputes prior to litigation and with negotiations where an impartial third party will assist the parties to achieve the best possible outcome without dispute.",
  },
  {
    id: "balwinder-sagoo",
    name: "Balwinder Sagoo",
    role: "Director",
    image: "/Balwinder-Sagoo.jpg",
    bio: "Balwinder has been qualified as a solicitor in England and Wales for over 17 years. She has ever since practiced in firms based in Central London. Balwinder provides advice in real estate transactions both commercial and residential and is experienced in acting for the ultra-high net worth and high net worth individuals and company entities, and in advising private lenders on loan security over UK property. Her specific expertise resides in purchasing or disposing of prime or super-prime residential property in Central London, often involving complex onshore structures and time sensitive lending requirements. She also advises clients on Wills and Probate.",
  },
  {
    id: "gaynor-bannon",
    name: "Gaynor Bannon",
    role: "Consultant",
    image: "/Gaynor-Bannon.png",
    bio: "Gaynor is an experienced solicitor with over 19 years’ practice in commercial real estate work. She is experienced in sales and purchases, commercial landlord and tenant, corporate support, property finance/secured lending, investment management and insolvency support. Gaynor is a commercial and practical lawyer who works with her clients to always meet deadlines and to understand her client’s needs and requirements. She is dedicated to providing clients with commercial and practical solutions in a straightforward, cost-effective and timely manner. She advises private investors, commercial lenders, SME, limited companies, OMB and financial institutions.",
  },
  {
    id: "michelle-bird",
    name: "Michelle Bird",
    role: "Partner, Family",
    image: "/Michelle-Bird.png",
    bio: "Michelle is a partner at Empass Law having joined in early 2024 from a boutique West End law firm where she was also a partner for many years. Michelle has over 24 years’ experience as a family lawyer specialising in issues arising from the breakdown of a relationship, including the financial consequences of a divorce and or separation, and resolving arrangements for children, including cases involving their relocation both in the UK and abroad. Michelle has a keen interest in international complex cases to which often involve cross border disputes with medium to high-net-worth assets and has supported many families on returning to the UK to reside permanently and or assist parties with their plans to move abroad. Although Michelle has extensive experience of taking cases to court where required, she is also known for her conciliatory and pragmatic approach and desire to settle cases wherever possible. Thus, avoiding the further legal expense to the client which can often be a long and drawn-out court process. Michelle also has many years of expertise on advising parties prior to marriage with the drafting of a pre or post nuptial agreements and or cohabitation agreements and often refers to the process of like taking out an insurance policy with the hope of avoiding the potential risk of a messy and unnecessary separation and or divorce further down the line. Michelle was a keen supporter of the non-fault divorce campaign and has supported Resolutions before the Houses of Parliament to promote their campaign to seek the much-needed change to divorce process and of which came in to effect on the 6 th April 2022. Michelle is recognised as an expert in her field and is also a member of Family Resolutions and Association of European Attorneys also called AEA International Lawyers network. In addition, Michelle runs a small case load to support young adults in applications under the Court of Protection in respect of both welfare and financial issues. These applications flowing from her 17plus years previously working in the public care sector. In her spare time, she likes to enjoy walking with her dogs and socialising with friends and family.",
  },
];

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = "" }) => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedMember, setExpandedMember] = useState<string | null>(null);


  return (
    <section
      ref={ref}
      className={`relative bg-[#0A0F1C] py-20 sm:py-32 overflow-hidden ${className}`}
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="max-w-3xl text-center mx-auto mb-16 sm:mb-24"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border border-[#00D9FF]/20 bg-[#00D9FF]/5 text-[#00D9FF] text-xs font-bold tracking-widest uppercase">
              About Empass Law
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-black text-white mb-6">
            Forward-Looking Legal Excellence in London
          </h2>
          <p className="text-lg text-center text-white/60 leading-relaxed">
            Welcome to Empass Law, a forward-looking law firm nestled in London's bustling heart.
            Our mission is simple: to deliver top-tier legal services with a client-centered approach,
            serving both businesses and individuals across diverse practice areas.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-20 sm:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 group hover:border-white/20 transition-colors duration-200">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                Our Approach
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Our adept legal team is devoted to grasping each client's unique needs. Whether it's
                intricate corporate affairs or personal matters, we're here to help. No case is beyond
                our scope; every client and issue receives the highest level of attention and professionalism.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our success formula hinges on comprehending your objectives and hurdles. By blending
                expertise with a personal touch, we craft custom legal answers that suit your needs.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 group hover:border-[#00D9FF]/30 transition-colors duration-200">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
                Our Commitment
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Navigating the legal complexities, we keep you informed, empowering you to make
                confident decisions. Our team combines international expertise with local knowledge
                to deliver strategic, solution-driven advice.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-bold tracking-widest uppercase text-[#00D9FF] mb-2">
                  Location
                </p>
                <p className="text-white/70">
                  13 Hanover Square, Mayfair, London W1S 1HN
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-20 sm:mb-32"
        >
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Our Values
            </h3>
            <div className="h-px bg-gradient-to-r from-[#00D9FF] via-[#00D9FF]/50 to-transparent w-48" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-white/[0.02] border border-white/10 p-6 group hover:border-white/20 transition-all duration-200"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#00D9FF]/30 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-white/70 group-hover:text-[#00D9FF] transition-colors duration-200" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl text-center font-black text-white mb-4">
              Our Team
            </h3>
            <div className="h-px bg-gradient-to-r mx-auto from-[#00D9FF]/50 via-[#00D9FF] to-[#00D9FF]/50 w-48" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member, index) => {
              const isExpanded = expandedMember === member.id;

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-200">
                    {/* Image */}
                    <div className="relative h-[380px] overflow-hidden bg-white/5">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                      <p className="text-sm text-[#00D9FF] font-bold tracking-wide uppercase mb-4">
                        {member.role}
                      </p>

                      {/* Animated bio */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.p
                            key="bio"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-sm text-white/50 leading-relaxed mb-4"
                          >
                            {member.bio}
                          </motion.p>
                        )}
                        {/* {!isExpanded && (
                          <motion.p
                            key="bio-collapsed"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 0.3}}
                            exit={{ opacity: 0 }}
                            className="text-sm text-white/50 leading-relaxed line-clamp-4"
                          >
                            {member.bio}
                          </motion.p>
                        )} */}
                      </AnimatePresence>

                      {/* Toggle Button */}
                      <button
                        onClick={() =>
                          setExpandedMember(isExpanded ? null : member.id)
                        }
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-[#00D9FF] transition-colors duration-200 group/btn"
                        aria-label={`Learn more about ${member.name}`}
                      >
                        <span>{isExpanded ? "Show Less" : "Know More"}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="mt-20 sm:mt-32 text-center"
        >
          <div className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Ready to Work with Us?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Whether you're facing intricate corporate affairs or personal legal matters,
              our team is here to provide expert guidance and strategic solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#00D9FF] hover:bg-[#00D9FF]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 transition-colors duration-200"
              >
                <span>View Services</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Regulatory Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-xs text-white/40 max-w-3xl mx-auto">
            Empass Law Limited is authorised and regulated by the Solicitors Regulation Authority (ID: 835349).
            Registered in England and Wales with company registration number 13778949.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;