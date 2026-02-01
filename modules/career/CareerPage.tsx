"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Heart,
  TrendingUp,
  Award,
  Briefcase,
  Mail,
  ArrowRight,
  MapPin,
  Clock,
  Building2,
} from "lucide-react";

// Type definitions
interface JobOpening {
  id: string;
  title: string;
  experience: string;
  type: string;
  openings: number;
  description: string;
  requirements: string[];
  contactEmail: string;
}

interface CompanyValue {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CareerPageProps {
  className?: string;
}

// Data
const JOB_OPENINGS: JobOpening[] = [
  {
    id: "commercial-litigation-lawyer",
    title: "Commercial Litigation Lawyer",
    experience: "Litigation Solicitor",
    type: "Full-time, Permanent",
    openings: 1,
    description:
      "We are recruiting for a technically strong Lawyer to act as an integral part of their Dispute Resolution department, looking to advance their knowledge and career.",
    requirements: [
      "Flexible, motivated, and ambitious lawyer",
      "Experience in one or more areas of litigation",
      "Knowledge of general civil litigation, employment, or commercial litigation",
      "Expertise in licensing, landlord & tenant matters (preferred)",
      "Strong technical legal skills and commercial awareness",
      "Excellent communication and client relationship abilities",
    ],
    contactEmail: "r.fogla@empasslaw.com",
  },
];

const COMPANY_VALUES: CompanyValue[] = [
  {
    icon: Heart,
    title: "Human Approach",
    description:
      "We bring a human approach to the legal industry, treating every client and colleague with care and respect.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "Join an energetic team of caring individuals who work together to achieve excellence for our clients.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "We invest in our people's development and provide opportunities to advance knowledge and careers.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Work alongside dual-qualified lawyers and industry experts in a prestigious Mayfair location.",
  },
];

const CareerPage: React.FC<CareerPageProps> = ({ className = "" }) => {
  const headerRef = React.useRef<HTMLElement>(null);
  const cultureRef = React.useRef<HTMLDivElement>(null);
  const valuesRef = React.useRef<HTMLDivElement>(null);
  const openingsRef = React.useRef<HTMLDivElement>(null);
  const ctaRef = React.useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cultureInView = useInView(cultureRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const openingsInView = useInView(openingsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className={`relative bg-[#0A0F1C] ${className}`}>
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={headerRef} className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-block mb-6">
                <span className="px-6 py-2 border border-[#4988C4]/20 bg-[#4988C4]/5 text-[#4988C4] text-xs font-bold tracking-widest uppercase">
                  Join Our Team
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Career Opportunities
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 font-bold mb-6">
                Build your legal career with Empass Law
              </p>
              <div className="h-px bg-gradient-to-r from-[#4988C4] via-[#4988C4]/50 to-transparent w-48 mb-8" />
              <div className="flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 bg-[#4988C4] hover:bg-[#4988C4]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group"
                >
                  <span>View Openings</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                </a>
                <a
                  href="mailto:info@empasslaw.com"
                  className="inline-flex items-center gap-2 border-2 border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send CV</span>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white/5 border border-white/10">
                <img
                  src="/services/Career-banner.png"
                  alt="Team Empass Law"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C]/20 via-transparent to-[#0A0F1C]/40" />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#4988C4]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section ref={cultureRef} className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cultureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 lg:p-16">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                We're an energetic team of caring individuals who endeavour to bring a human
                approach to the legal industry, and we value like-minded individuals.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                If you'd like to work for us, please email your curriculum vitae to{" "}
                <a
                  href="mailto:info@empasslaw.com"
                  className="text-[#4988C4] hover:text-[#4988C4]/80 transition-colors duration-200 font-bold"
                >
                  info@empasslaw.com
                </a>
                . We will contact you to set up an appointment should we have any suitable
                vacancies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section ref={valuesRef} className="relative py-12 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Why Join Empass Law?
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#4988C4] to-transparent w-64 mx-auto mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/[0.02] border border-white/10 p-6 sm:p-8 h-full hover:border-white/20 transition-all duration-200">
                    <div className="mb-6">
                      <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-[#4988C4]/30 transition-colors duration-200">
                        <Icon className="w-7 h-7 text-white/70 group-hover:text-[#4988C4] transition-colors duration-200" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section
        id="openings"
        ref={openingsRef}
        className="relative py-12 sm:py-20 scroll-mt-20"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={openingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Current Openings
            </h2>
            <p className="text-white/60">
              Explore our current vacancies and take the next step in your legal career
            </p>
            <div className="h-px bg-gradient-to-r from-[#4988C4] via-[#4988C4]/50 to-transparent w-64 mt-6" />
          </motion.div>

          <div className="space-y-8">
            {JOB_OPENINGS.map((job, index) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={openingsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <div className="p-8 sm:p-10 lg:p-12">
                  {/* Job Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-white/60">
                        <Briefcase className="w-4 h-4 text-[#4988C4]" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="w-4 h-4 text-[#4988C4]" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Users className="w-4 h-4 text-[#4988C4]" />
                        <span>{job.openings} Opening{job.openings > 1 ? "s" : ""}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4 text-[#4988C4]" />
                        <span>Mayfair, London</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-3">About the Role</h4>
                    <p className="text-white/60 leading-relaxed">{job.description}</p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-4">
                      What We're Looking For
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/60">
                          <div className="w-1.5 h-1.5 bg-[#4988C4] mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply CTA */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/50 mb-1">Interested in this position?</p>
                        <p className="text-sm text-white/70">
                          Submit your CV to{" "}
                          <a
                            href={`mailto:${job.contactEmail}`}
                            className="text-[#4988C4] hover:text-[#4988C4]/80 transition-colors duration-200 font-bold"
                          >
                            {job.contactEmail}
                          </a>
                        </p>
                      </div>
                      <a
                        href={`mailto:${job.contactEmail}?subject=Application for ${job.title}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#4988C4] hover:bg-[#4988C4]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group whitespace-nowrap"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section ref={ctaRef} className="relative py-20 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="bg-white/[0.02] border border-white/10 p-12 sm:p-16 lg:p-20 text-center max-w-4xl mx-auto"
          >
            <Building2 className="w-16 h-16 text-[#4988C4] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              We're always interested in hearing from talented legal professionals. Send us your CV
              and we'll keep you in mind for future opportunities.
            </p>

            <a
              href="mailto:info@empasslaw.com"
              className="inline-flex items-center justify-center gap-2 bg-[#4988C4] hover:bg-[#4988C4]/90 text-[#0A0F1C] font-bold px-8 py-4 transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5" />
              <span>Send Your CV</span>
            </a>

            {/* Decorative elements */}
            <div className="mt-12 flex justify-center gap-2">
              <div className="w-2 h-2 bg-[#4988C4]/30" />
              <div className="w-2 h-2 bg-[#4988C4]/60" />
              <div className="w-2 h-2 bg-[#4988C4]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;