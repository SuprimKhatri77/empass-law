"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2f4f] via-[#2c5697] to-[#1e3a5f] py-20 lg:py-32 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4f]/90 via-[#2c5697]/85 to-[#1e3a5f]/90" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#00a3a3]">
              About Us
            </span>
          </div>

          <h1 className="text-[48px] lg:text-[72px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
            Legal excellence in the heart of London
          </h1>

          <p className="text-[18px] lg:text-[20px] text-white/80 max-w-3xl mx-auto">
            A modern law firm combining international expertise with local
            knowledge to deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* London Skyline Video/Image */}
          <div className="relative mb-20">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              {/* Video Background */}
              {/* <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/london-skyline.mp4" type="video/mp4" />
            </video> */}

              <Image
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2000&q=90"
                alt="About Image"
                fill
                className="object-cover h-full w-full"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c4a6e]/80 via-transparent to-transparent" />

              {/* Location Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00a3a3]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#00a3a3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#2c5697]">
                      Mayfair, London
                    </p>
                    <p className="text-[12px] text-[#445566]">
                      13 Hanover Square, W1S 1HN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column */}
            <div>
              <h3 className="text-[28px] lg:text-[32px] font-normal text-[#2c5697] mb-6">
                Who we are
              </h3>
              <p className="text-[16px] leading-relaxed text-[#445566] mb-6">
                Welcome to Empass Law, a forward-looking law firm nestled in
                London's bustling heart. Our mission is simple: to deliver
                top-tier legal services. With a client-centred approach, we
                serve both businesses and individuals across diverse practice
                areas.
              </p>
              <p className="text-[16px] leading-relaxed text-[#445566]">
                Our adept legal team is devoted to grasping each client's unique
                needs. Whether it's intricate corporate affairs or personal
                matters, we're here to help. No case is beyond our scope; every
                client and issue receives the highest level of attention and
                professionalism. Our success formula hinges on comprehending
                your objectives and hurdles. By blending expertise with a
                personal touch, we craft custom legal answers that suit your
                needs. Navigating the legal complexities, we keep you informed,
                empowering you to make confident decisions.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-[28px] lg:text-[32px] font-normal text-[#2c5697] mb-6">
                What we do
              </h3>
              <p className="text-[16px] leading-relaxed text-[#445566] mb-6">
                We help clients navigate complex legal challenges across
                corporate law, commercial litigation, property transactions, and
                family matters. Our approach is strategic, solutions-focused,
                and tailored to your specific objectives.
              </p>
              <p className="text-[16px] leading-relaxed text-[#445566]">
                Whether you're a multinational corporation, growing business, or
                private individual, we deliver the same commitment to
                excellence.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h3 className="text-[28px] lg:text-[32px] font-normal text-[#2c5697] mb-12">
              Our values
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description:
                    "Delivering exceptional legal services with meticulous attention to detail.",
                },
                {
                  title: "Expertise",
                  description:
                    "Dual-qualified lawyers with extensive international experience.",
                },
                {
                  title: "Strategy",
                  description:
                    "Practical, commercial advice aligned with your business goals.",
                },
                {
                  title: "Integrity",
                  description:
                    "Building lasting relationships based on trust and transparency.",
                },
              ].map((value, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 rounded-lg bg-[#00a3a3]/10 flex items-center justify-center mb-4 group-hover:bg-[#00a3a3]/20 transition-colors">
                    <div className="w-6 h-6 rounded-full border-2 border-[#00a3a3]" />
                  </div>
                  <h4 className="text-[18px] font-bold text-[#2c5697] mb-3">
                    {value.title}
                  </h4>
                  <p className="text-[15px] text-[#445566] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#f0f4f8] rounded-lg p-12 lg:p-16 text-center">
            <h3 className="text-[32px] lg:text-[42px] font-normal text-[#2c5697] mb-4">
              Meet our team
            </h3>
            <p className="text-[17px] text-[#445566] mb-8 max-w-2xl mx-auto">
              Our experienced lawyers bring together expertise from leading
              international firms to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-people"
                className="inline-flex items-center justify-center gap-2 bg-[#2c5697] hover:bg-[#234578] text-white font-medium px-8 py-4 rounded-lg transition-colors"
              >
                <span>View Our Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2c5697] hover:bg-[#2c5697] hover:text-white text-[#2c5697] font-medium px-8 py-4 rounded-lg transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* Regulatory Info */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-[12px] text-[#445566]/60 max-w-3xl mx-auto">
              Empass Law Limited is authorised and regulated by the Solicitors
              Regulation Authority (ID: 835349). Registered in England and Wales
              with company registration number 13778949.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
