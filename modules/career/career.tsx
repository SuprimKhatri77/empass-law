"use client";
import Link from "next/link";
import { Mail, ArrowRight, Briefcase, Users, Award } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Modern office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332]/95 via-[#2c4a6e]/90 to-[#3d5a7e]/95" />
        </div>

        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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

        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          {/* <div className="mb-8">
            <div className="w-16 h-1 bg-white/40 mb-8" />
          </div> */}

          <h1 className="text-[48px] sm:text-[56px] lg:text-[72px] leading-[1.15] font-light text-white mb-6 tracking-wider uppercase">
            Join Our
            <br />
            <span className="font-semibold">Team</span>
          </h1>

          <p className="text-white/70 text-[17px] lg:text-[18px] leading-relaxed max-w-2xl font-light mb-12">
            We're an energetic team of caring individuals who endeavour to bring
            a human approach to the legal industry, and we value like-minded
            individuals.
          </p>
        </div>
      </section>

      {/* Culture Section - WHITE BACKGROUND WITH BLUE FONTS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            {/* Clean Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
            </div>

            {/* Culture values */}
            <div>
              <div className="w-12 h-0.5 bg-[#2c5697]/20 mb-8" />
              <h2 className="text-[36px] lg:text-[44px] font-light text-[#2c5697] mb-8 tracking-wide uppercase">
                Our <span className="font-semibold">Culture</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2c5697]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#2c5697]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c5697] font-medium text-lg mb-2 tracking-wide">
                      Human-Centered Approach
                    </h3>
                    <p className="text-[#5a7ba8] leading-relaxed text-[15px]">
                      We believe in bringing empathy and understanding to every
                      client interaction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2c5697]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#2c5697]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c5697] font-medium text-lg mb-2 tracking-wide">
                      Excellence & Growth
                    </h3>
                    <p className="text-[#5a7ba8] leading-relaxed text-[15px]">
                      We're committed to continuous learning and professional
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2c5697]/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[#2c5697]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c5697] font-medium text-lg mb-2 tracking-wide">
                      Collaborative Environment
                    </h3>
                    <p className="text-[#5a7ba8] leading-relaxed text-[15px]">
                      Work alongside energetic, caring professionals who value
                      teamwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-12 h-0.5 bg-[#2c5697]/20 mb-8" />
              <h2 className="text-[36px] lg:text-[44px] font-light text-[#2c5697] mb-6 tracking-wide uppercase">
                Ready to <span className="font-semibold">Apply?</span>
              </h2>
              <p className="text-[#5a7ba8] text-[17px] leading-relaxed mb-8">
                If you'd like to work for us, please email your curriculum vitae
                to{" "}
                <a
                  href="mailto:info@empasslaw.com"
                  className="text-[#2c5697] font-semibold hover:underline transition-all"
                >
                  info@empasslaw.com
                </a>
              </p>
              <p className="text-[#7a93b8] text-[15px] leading-relaxed">
                We will contact you to set up an appointment should we have any
                suitable vacancies.
              </p>
            </div>

            <div className="relative order-1 lg:order-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Professional workspace"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings - LIGHT GRAY BACKGROUND WITH BLUE FONTS */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="w-16 h-1 bg-[#2c5697]/20 mb-8" />
            <h2 className="text-[40px] lg:text-[52px] font-light text-[#2c5697] mb-4 tracking-wide uppercase">
              Current <span className="font-semibold">Openings</span>
            </h2>
          </div>

          {/* Job Listing Card */}
          <div className="relative group">
            <div className="relative bg-white border border-[#2c5697]/10 p-8 lg:p-12 hover:border-[#2c5697]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#2c5697]/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-[#2c5697]" />
                    </div>
                    <span className="text-[#7a93b8] text-sm tracking-wider uppercase font-medium">
                      1 Opening
                    </span>
                  </div>

                  <h3 className="text-[28px] lg:text-[32px] font-light text-[#2c5697] mb-4 tracking-wide uppercase">
                    Commercial{" "}
                    <span className="font-semibold">Litigation Lawyer</span>
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-[#2c5697]/10 text-[#2c5697] text-sm border border-[#2c5697]/20 font-medium">
                      Full-time
                    </span>
                    <span className="px-4 py-2 bg-[#2c5697]/10 text-[#2c5697] text-sm border border-[#2c5697]/20 font-medium">
                      Permanent
                    </span>
                    <span className="px-4 py-2 bg-[#2c5697]/10 text-[#2c5697] text-sm border border-[#2c5697]/20 font-medium">
                      Litigation Solicitor
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-none mb-8">
                <p className="text-[#5a7ba8] text-[16px] leading-relaxed mb-6">
                  We are recruiting for a technically strong Lawyer to act as an
                  integral part of our Dispute Resolution department, looking to
                  advance their knowledge and career.
                </p>

                <p className="text-[#5a7ba8] text-[16px] leading-relaxed mb-6">
                  We are looking for a flexible, motivated, and ambitious lawyer
                  with experience in one or more areas of litigation, such as:
                </p>

                <ul className="text-[#7a93b8] text-[15px] leading-relaxed space-y-3 mb-8 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold">•</span>
                    <span>General civil litigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold">•</span>
                    <span>Employment law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold">•</span>
                    <span>Licensing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold">•</span>
                    <span>Commercial litigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold">•</span>
                    <span>Landlord & tenant</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#2c5697]/10">
                <a
                  href="mailto:r.fogla@empasslaw.com"
                  className="inline-flex items-center gap-3 text-[#2c5697] text-[14px] font-medium tracking-wide uppercase border-b border-[#2c5697]/40 pb-2 hover:border-[#2c5697] transition-all group/link"
                >
                  <Mail className="w-5 h-5" />
                  Apply Now - r.fogla@empasslaw.com
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* General Application CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block">
              <p className="text-[#7a93b8] text-[15px] mb-4">
                Don't see a position that fits?
              </p>
              <a
                href="mailto:info@empasslaw.com"
                className="inline-flex items-center gap-3 text-[#2c5697] text-[14px] font-medium tracking-wide uppercase border-b border-[#2c5697]/40 pb-2 hover:border-[#2c5697] transition-all group"
              >
                Send us your CV anyway
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing before footer */}
      <div className="h-20" />
    </div>
  );
}
