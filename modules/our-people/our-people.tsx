"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  Mail,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  location: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
  expertise: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rohit-fogla",
    name: "Rohit Fogla",
    role: "Managing Director",
    department: "Corporate",
    location: "London",
    image: "/Rohit-Folgia.jpg",
    bio: "Dual qualified lawyer (UK and India) specialising in corporate, commercial and banking law with experience at leading London firms.",
    email: "rohit.fogla@empasslaw.com",
    linkedin: "#",
    expertise: ["Corporate Law", "M&A", "Banking", "Commercial Contracts"],
  },
  {
    id: "edward-colquhoun",
    name: "Edward Colquhoun",
    role: "Partner",
    department: "Litigation",
    location: "London",
    image: "/Litigation.webp",
    bio: "Former Deputy District Judge with extensive commercial litigation experience. Specialises in dispute resolution and mediation.",
    email: "edward.colquhoun@empasslaw.com",
    linkedin: "#",
    expertise: [
      "Commercial Litigation",
      "Dispute Resolution",
      "Mediation",
      "Contract Law",
    ],
  },
  {
    id: "balwinder-sagoo",
    name: "Balwinder Sagoo",
    role: "Director",
    department: "Property",
    location: "London",
    image: "/Balwinder-Sagoo.jpg",
    bio: "Over 17 years advising ultra-high net worth individuals on prime Central London property transactions and secured lending.",
    email: "balwinder.sagoo@empasslaw.com",
    expertise: [
      "Real Estate",
      "Property Finance",
      "High Net Worth",
      "Secured Lending",
    ],
  },
  {
    id: "gaynor-bannon",
    name: "Gaynor Bannon",
    role: "Consultant",
    department: "Property",
    location: "London",
    image: "/Gaynor-Bannon.png",
    bio: "19+ years in commercial real estate, advising private investors, lenders, and institutions on transactions and finance.",
    email: "gaynor.bannon@empasslaw.com",
    expertise: [
      "Commercial Real Estate",
      "Investment",
      "Property Finance",
      "Institutional Clients",
    ],
  },
  {
    id: "michelle-bird",
    name: "Michelle Bird",
    role: "Partner",
    department: "Family",
    location: "London",
    image: "/Michelle-Bird.png",
    bio: "24 years specialising in complex international family law matters and high-net-worth financial settlements.",
    email: "michelle.bird@empasslaw.com",
    linkedin: "#",
    expertise: [
      "Family Law",
      "Divorce",
      "Financial Settlements",
      "Nuptial Agreements",
    ],
  },
];

const DEPARTMENTS = ["All", "Corporate", "Litigation", "Property", "Family"];

export default function OurPeoplePage() {
  const [activeCard, setActiveCard] = useState<number | null | string>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Filter team members
  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.expertise.some((exp) =>
          exp.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesDepartment =
        selectedDepartment === "All" ||
        member.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - White Background */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
              Our Team
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 tracking-tight px-4">
            Meet our people
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Our experienced team delivers exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="z-40 bg-white  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-stretch lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2c5697] focus:ring-2 focus:ring-[#2c5697]/20 text-sm"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-[13px] font-medium whitespace-nowrap transition-colors ${
                    selectedDepartment === dept
                      ? "bg-[#2c5697] text-white"
                      : "bg-gray-100 text-[#445566] hover:bg-gray-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#445566]">
            Showing {filteredMembers.length} of {TEAM_MEMBERS.length} team
            members
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p className="text-base sm:text-lg text-[#445566]">
                No team members found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="relative w-full max-w-[340px] h-[400px] sm:h-[430px] mx-auto bg-[#2C4A6B] overflow-hidden group shadow-lg rounded-lg"
                >
                  {/* ================= FRONT SLIDE ================= */}
                  <div
                    className={`
                      absolute inset-0 z-20
                      transition-transform duration-500 ease-in-out
                      ${activeCard === member.id ? "-translate-y-full" : "translate-y-0"}
                      lg:group-hover:-translate-y-full
                    `}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={1000}
                        height={1000}
                        className="object-cover object-[center_top] w-full h-full"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A6B]/95 via-[#2C4A6B]/60 to-transparent" />

                      {/* Department */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-2.5 sm:px-3 py-1 bg-white/90 text-[#2c5697] text-[10px] sm:text-[11px] font-bold tracking-wider rounded">
                          {member.department}
                        </span>
                      </div>

                      {/* Name + Role */}
                      <div className="absolute bottom-14 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                        <h3 className="text-lg sm:text-[22px] font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#00a3a3]">
                          {member.role}
                        </p>
                      </div>

                      {/* Mobile View Button */}
                      <button
                        onClick={() =>
                          setActiveCard(
                            activeCard === member.id ? null : member.id,
                          )
                        }
                        className="lg:hidden absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white text-[#2c5697] text-xs font-semibold px-3 py-1.5 rounded shadow hover:bg-gray-50 transition-colors"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>

                  {/* ================= BACK SLIDE ================= */}
                  <div
                    className={`
                      absolute inset-0 z-10 p-6 sm:p-8 bg-white
                      transition-transform duration-500 ease-in-out
                      ${activeCard === member.id ? "translate-y-0" : "translate-y-full"}
                      lg:group-hover:translate-y-0
                      flex flex-col justify-between
                      overflow-y-auto
                    `}
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2c5697] mb-3 sm:mb-4 uppercase tracking-wide">
                        About {member.name.split(" ")[0]}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#445566] leading-relaxed mb-4 sm:mb-6">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {member.expertise.slice(0, 3).map((exp, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-[#445566] text-[10px] sm:text-[11px] rounded"
                          >
                            {exp}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-[#445566] text-[10px] sm:text-[11px] rounded">
                            +{member.expertise.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200 text-xs sm:text-sm font-medium">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#2c5697] hover:text-[#234578] transition-colors"
                      >
                        Email
                      </a>

                      {member.linkedin && (
                        <>
                          <span className="text-gray-300">|</span>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2c5697] hover:text-[#234578] transition-colors"
                          >
                            LinkedIn
                          </a>
                        </>
                      )}
                    </div>

                    {/* Mobile Close Button */}
                    <button
                      onClick={() => setActiveCard(null)}
                      className="lg:hidden mt-3 sm:mt-4 w-full bg-[#2c5697] hover:bg-[#234578] text-white text-xs sm:text-sm font-semibold py-2 rounded transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f0f4f8] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2c5697] mb-3 sm:mb-4 px-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[#445566] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get in touch with our team and we'll connect you with the right
            expert.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2c5697] hover:bg-[#234578] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
