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
    bio: "Dual qualified lawyer (UK and India) specialising in corporate, commercial and banking law with experience at leading London firms including Gunnercooke LLP and Akin Gump LLP.",
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
    bio: "Former Deputy District Judge with extensive commercial litigation experience. Specialises in dispute resolution, mediation, and strategic advisory across contract, property, and corporate matters.",
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
    bio: "Over 17 years advising ultra-high net worth individuals on prime Central London property transactions, complex structures, and secured lending arrangements.",
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
    bio: "19+ years in commercial real estate, advising private investors, lenders, and institutions on transactions, finance, and investment management.",
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
    bio: "24 years specialising in complex international family law matters, high-net-worth financial settlements, and pre/post-nuptial agreements. Member of Family Resolutions.",
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
              Our Team
            </span>
          </div>

          <h1 className="text-[48px] lg:text-[72px] leading-[1.1] font-bold text-white mb-6 tracking-tight">
            Meet our people
          </h1>

          <p className="text-[18px] lg:text-[20px] text-white/80 max-w-3xl mx-auto">
            Our experienced team brings together expertise from leading
            international firms to deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className=" z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2c5697] focus:ring-2 focus:ring-[#2c5697]/20 text-[14px]"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto">
              <SlidersHorizontal className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-colors ${selectedDepartment === dept
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
          <div className="mt-4 text-[14px] text-[#445566]">
            Showing {filteredMembers.length} of {TEAM_MEMBERS.length} team
            members
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[18px] text-[#445566]">
                No team members found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="relative w-full max-w-[340px] h-[430px] mx-auto bg-[#2C4A6B] overflow-hidden group shadow-lg"
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
                        className="object-cover object-[center_top]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A6B]/95 via-[#2C4A6B]/60 to-transparent" />

                      {/* Department */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-[#2c5697] text-[11px] font-bold tracking-wider">
                          {member.department}
                        </span>
                      </div>

                      {/* Name + Role */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-[22px] font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-[14px] font-medium text-[#00a3a3]">
                          {member.role}
                        </p>
                      </div>
                      {/* Mobile View Button */}
                      <button
                        onClick={() =>
                          setActiveCard(
                            activeCard === member.id ? null : member.id
                          )
                        }
                        className="lg:hidden absolute bottom-4 right-4 bg-white text-[#2c5697] text-xs font-semibold px-3 py-1 rounded shadow"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  {/* ================= BACK SLIDE ================= */}
                  <div
                    className={`
    absolute inset-0 z-10 p-8 bg-white
    transition-transform duration-500 ease-in-out
    ${activeCard === member.id ? "translate-y-0" : "translate-y-full"}
    lg:group-hover:translate-y-0
    flex flex-col justify-between
  `}
                  >


                    <div>
                      <h3 className="text-lg font-bold text-[#2c5697] mb-4 uppercase tracking-wide">
                        About {member.name.split(" ")[0]}
                      </h3>

                      <p className="text-sm text-[#445566] leading-relaxed mb-6 line-clamp-5">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.expertise.slice(0, 3).map((exp, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-[#445566] text-[11px] rounded"
                          >
                            {exp}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-[#445566] text-[11px] rounded">
                            +{member.expertise.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200 text-sm font-medium">
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
                      onClick={() =>
                        setActiveCard(null)
                      }
                      className="lg:hidden mt-4 w-full bg-[#2c5697] text-white text-sm font-semibold py-2 rounded"
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
      <section className="bg-[#f0f4f8] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[32px] lg:text-[42px] font-normal text-[#2c5697] mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-[17px] text-[#445566] mb-8 max-w-2xl mx-auto">
            Get in touch with our team and we'll connect you with the right
            expert for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2c5697] hover:bg-[#234578] text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
