"use client";
import Link from "next/link";
import { Mail, ArrowRight, Briefcase, Users, Award } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white py-15 lg:py-10">
      {/* Hero Section - White Background */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
              Careers
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 tracking-tight">
            Join Our Team
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            We're looking for like-minded individuals who value a human approach
            to law.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Culture values */}
            <div>
              <div className="w-8 sm:w-12 h-0.5 bg-[#2c5697]/20 mb-4 sm:mb-6 lg:mb-8" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2c5697] mb-6 sm:mb-8">
                Our Culture
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2c5697]/10 flex items-center justify-center rounded-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c5697]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c5697] font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                      Human-Centered Approach
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                      We bring empathy and understanding to every client
                      interaction.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2c5697]/10 flex items-center justify-center rounded-lg">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c5697]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c5697] font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                      Excellence & Growth
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                      Committed to continuous learning and professional
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2c5697]/10 flex items-center justify-center rounded-lg">
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c5697]" />
                  </div>
                  <div>
                    <h3 className="text-[#2c5697] font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                      Collaborative Environment
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
                      Work alongside energetic, caring professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Section */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-8 sm:w-12 h-0.5 bg-[#2c5697]/20 mb-4 sm:mb-6 lg:mb-8" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2c5697] mb-4 sm:mb-6">
                Ready to Apply?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 sm:mb-8">
                If you'd like to work for us, please email your CV to{" "}
                <a
                  href="mailto:info@empasslaw.com"
                  className="text-[#2c5697] font-semibold hover:underline transition-all"
                >
                  info@empasslaw.com
                </a>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
                We will contact you if we have any suitable vacancies.
              </p>
            </div>

            <div className="relative order-1 lg:order-2 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Professional workspace"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="w-12 sm:w-16 h-1 bg-[#2c5697]/20 mb-4 sm:mb-6 lg:mb-8" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2c5697] mb-3 sm:mb-4">
              Current Openings
            </h2>
          </div>

          {/* Job Listing Card */}
          <div className="relative group">
            <div className="relative bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 hover:border-[#2c5697]/30 hover:shadow-lg transition-all duration-300 rounded-lg">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2c5697]/10 flex items-center justify-center rounded-lg">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c5697]" />
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm tracking-wider uppercase font-medium">
                      1 Opening
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#2c5697] mb-3 sm:mb-4">
                    Commercial Litigation Lawyer
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2c5697]/10 text-[#2c5697] text-xs sm:text-sm border border-[#2c5697]/20 font-medium rounded">
                      Full-time
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2c5697]/10 text-[#2c5697] text-xs sm:text-sm border border-[#2c5697]/20 font-medium rounded">
                      Permanent
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2c5697]/10 text-[#2c5697] text-xs sm:text-sm border border-[#2c5697]/20 font-medium rounded">
                      Litigation Solicitor
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-none mb-6 sm:mb-8">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  We are recruiting for a technically strong Lawyer to act as an
                  integral part of our Dispute Resolution department.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  We are looking for a flexible, motivated lawyer with
                  experience in:
                </p>

                <ul className="text-gray-600 text-sm sm:text-[15px] leading-relaxed space-y-2 sm:space-y-3 mb-6 sm:mb-8 ml-4 sm:ml-6">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>General civil litigation</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>Employment law</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>Licensing</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>Commercial litigation</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span className="text-[#2c5697] mt-1 font-bold flex-shrink-0">
                      •
                    </span>
                    <span>Landlord & tenant</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 sm:pt-6 border-t border-gray-200">
                <a
                  href="mailto:r.fogla@empasslaw.com"
                  className="inline-flex items-center gap-2 sm:gap-3 text-[#2c5697] text-xs sm:text-sm font-medium tracking-wide uppercase border-b border-[#2c5697]/40 pb-1 sm:pb-2 hover:border-[#2c5697] transition-all group/link"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all sm:break-normal">
                    Apply Now - r.fogla@empasslaw.com
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* General Application CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block">
              <p className="text-gray-500 text-sm sm:text-[15px] mb-3 sm:mb-4">
                Don't see a position that fits?
              </p>
              <a
                href="mailto:info@empasslaw.com"
                className="inline-flex items-center gap-2 sm:gap-3 text-[#2c5697] text-xs sm:text-sm font-medium tracking-wide uppercase border-b border-[#2c5697]/40 pb-1 sm:pb-2 hover:border-[#2c5697] transition-all group"
              >
                Send us your CV anyway
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing before footer */}
      <div className="h-12 sm:h-16 lg:h-20" />
    </div>
  );
}
