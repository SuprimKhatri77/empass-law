"use client";
import Link from "next/link";
import { Mail, ArrowRight, Briefcase, Users, Award, Shield } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white pt-15 lg:pt-20">
      {/* Hero Section - White Background */}
      <section className="relative bg-white py-12 sm:py-16 lg:pt-20 lg:pb-5 border-b border-[#4ECDC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 uppercase tracking-tight px-4">
              Join our team
            </span>
          </div>
        </div>
      </section>

      {/* New Culture Section */}
      <section className="py-16 sm:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Team Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element to match your brand feel */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4ECDC4]/10 -z-10 rounded-full" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl uppercase sm:text-3xl lg:text-4xl font-normal text-[#2c5697]">
                Why Empass Law?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe that the best legal work comes from a collaborative, 
                supportive environment. Our firm is built on the foundation of 
                integrity, technical excellence, and a modern approach to the legal profession.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2c5697]/10 flex items-center justify-center rounded">
                    <Users className="w-5 h-5 text-[#2c5697]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c5697] text-sm uppercase">Collaborative</h4>
                    <p className="text-xs text-gray-500 mt-1">Working together to solve complex legal hurdles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2c5697]/10 flex items-center justify-center rounded">
                    <Shield className="w-5 h-5 text-[#2c5697]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c5697] text-sm uppercase">Integrity</h4>
                    <p className="text-xs text-gray-500 mt-1">Maintaining the highest standards of professional ethics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl uppercase sm:text-3xl lg:text-4xl font-normal text-[#2c5697] mb-3 sm:mb-4">
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