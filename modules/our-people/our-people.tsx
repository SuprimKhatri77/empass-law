"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  Mail,
  Linkedin,
  X,
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
    role: "Managing Partner",
    department: "Corporate",
    location: "London",
    image: "/Rohit-Fogla.jpeg",
    bio: "Rohit Fogla is a practising dual qualified Lawyer (UK and India) having qualified as an Indian Lawyer, after completing LL.B from the University of Mumbai. He then undertook the Graduate Diploma in Law (CPE) at the Kingston University, London, and both the Legal Practice Course and LL.M in Corporate Law at the London campus of the University of Law of England and Wales. Rohit completed his English Law training contract with Gunnercooke LLP specialising in corporate, commercial, and banking law. He further worked with Akin Gump LLP, Hill Dickinson LLP and Harrison Clark Rickerbys Limited in their London office. Rohit focuses his practice on domestic as well as international corporate, commercial, banking and litigation matters including corporate finance, mergers and acquisitions, private equity, commercial contracts, financing and commercial dispute matters.",
    email: "rohit.fogla@empasslaw.com",
    linkedin: "#",
    expertise: ["Corporate Law", "M&A", "Banking", "Commercial Contracts"],
  },
  {
    id: "edward-colquhoun",
    name: "Edward Colquhoun",
    role: "Head of Litigation",
    department: "Litigation",
    location: "London",
    image: "/Team-member.jpg",
    bio: "Edward has substantial commercial litigation experience, having solely practised in this area for the span of his career, including serving as a Deputy District Judge in the County Court. He specialises in commercial and civil litigation and regularly appears in the County and High Courts. Ed's expertise includes contracts, trusts and estates, companies, property and construction, and insurance. He delivers thoughtful, balanced and solution-driven advice and his ability to see the big picture enables him to give strategic and tactical recommendations to our clients as a trusted advisor.",
    email: "edward.colquhoun@empasslaw.com",
    linkedin: "#",
    expertise: ["Commercial Litigation", "Dispute Resolution", "Mediation", "Contract Law"],
  },
  {
    id: "ardeshir-matini",
    name: "Ardeshir Matini",
    role: "Consultant Property",
    department: "Property",
    location: "London",
    image: "/Adershir.png",
    bio: "Ardeshir works under the supervision of Mr Fogla and deals with variety of property matters. Ardeshir specialises in real estate development and investment transactions. With his vast experience in commercial property matters, Ardeshir provides strategic legal guidance to developers, investors, and businesses navigating complex real estate transactions.",
    email: "ardeshir.matini@empasslaw.com",
    expertise: ["Real Estate", "Property Finance", "High Net Worth", "Secured Lending"],
  },
  {
    id: "matthew-bosworth",
    name: "Matthew Bosworth",
    role: "Consultant Property",
    department: "Property",
    location: "London",
    image: "/Matthew.png",
    bio: "Matthew is an experienced property Lawyer and was admitted as a Fellow of the Chartered Institute of Legal Executives. Matthew has also completed his MBA from Boston University. Matthew has dealt with a broad range of property transactions including both freehold and leasehold commercial and residential unit sales.",
    email: "matthew.bosworth@empasslaw.com",
    expertise: ["Real Estate", "Property Finance", "High Net Worth", "Secured Lending"],
  },
  {
    id: "gaynor-bannon",
    name: "Gaynor Bannon",
    role: "Consultant Property",
    department: "Property",
    location: "London",
    image: "/Gaynor-Bannon.png",
    bio: "Gaynor is an experienced solicitor with over 19 years' practice in commercial real estate work. She is experienced in sales and purchases, commercial landlord and tenant, corporate support, property finance/secured lending, investment management and insolvency support.",
    email: "gaynor.bannon@empasslaw.com",
    expertise: ["Commercial Real Estate", "Investment", "Property Finance", "Institutional Clients"],
  },
  {
    id: "pankaj-gautam",
    name: "Pankaj Gautam",
    role: "Property Solicitor",
    department: "Property",
    location: "London",
    image: "/Team-member.jpg",
    bio: "Pankaj has extensive experience in the residential conveyancing sector having worked in this sector for more than a decade. Pankaj has specialised in all aspects of residential conveyancing matters, dealing with sales, purchases, re-mortgages, equity releases etc.",
    email: "pankaj.gautam@empasslaw.com",
    linkedin: "#",
    expertise: ["Real Estate", "Property Finance", "High Net Worth", "Secured Lending"],
  },
  {
    id: "rezijana-saiti",
    name: "Rezijana Saiti",
    role: "Consultant Immigration",
    department: "Corporate",
    location: "London",
    image: "/rezijana.png",
    bio: "Rezijana has particular experience in dealing with non-sponsored work routes, including entrepreneurs, innovators and sole representatives. She also assists businesses with skilled worker and expansion worker licence applications and compliance enquiries.",
    email: "rezijana.saiti@empasslaw.com",
    linkedin: "#",
    expertise: ["Immigration laws", "Visa processes"],
  },
  {
    id: "michelle-bird",
    name: "Michelle Bird",
    role: "Consultant Family",
    department: "Family",
    location: "London",
    image: "/Michelle.png",
    bio: "Michelle is a partner at Empass Law having joined in early 2024 from a boutique West End law firm where she was also a partner for many years. Michelle has over 24 years' experience as a family lawyer specialising in issues arising from the breakdown of a relationship, including the financial consequences of a divorce and or separation.",
    email: "michelle.bird@empasslaw.com",
    linkedin: "#",
    expertise: ["Family Law", "Divorce", "Financial Settlements", "Nuptial Agreements"],
  },
];

const DEPARTMENTS = ["All", "Corporate", "Litigation", "Property", "Family"];

export default function OurPeoplePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const filteredMembers = useMemo(() => {
    return TEAM_MEMBERS.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.expertise.some((exp) =>
          exp.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesDepartment =
        selectedDepartment === "All" || member.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

  const activeMember = TEAM_MEMBERS.find((m) => m.id === selectedMember);

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 lg:pt-20 lg:pb-5 border-b border-[#4ECDC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 uppercase tracking-tight px-4 block">
            OUR TEAM
          </span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg lg:text-xl pt-8 sm:pt-12 lg:pt-16 text-gray-600 leading-relaxed">
          Our team is made up of dedicated, highly skilled legal professionals who bring a wealth of
          experience across multiple areas of law. United by a commitment to excellence and client
          care, we work collaboratively to deliver thoughtful, strategic advice tailored to each
          client's circumstances. With a balance of technical expertise and a personable approach,
          our lawyers focus on building strong relationships, clear communication and practical
          solutions that achieve the best possible outcomes.
        </p>
      </div>

      {/* Search and Filters */}
      <section className="bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-stretch lg:items-center justify-between">
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
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${selectedDepartment === dept
                      ? "bg-[#2c5697] text-white"
                      : "bg-gray-100 text-[#445566] hover:bg-gray-200"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#445566]">
            Showing {filteredMembers.length} of {TEAM_MEMBERS.length} team members
          </div>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <p className="text-base sm:text-lg text-[#445566]">
                No team members found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-x-10">
              {filteredMembers.map((member) => (
                <div key={member.id} className="group flex flex-col items-center text-center">

                  {/* ── Photo card ── */}
                  <div
                    className="relative w-full rounded-2xl overflow-hidden bg-[#dde0e4] shadow-none group-hover:shadow-md transition-shadow duration-300"
                    style={{ aspectRatio: "3/3.6" }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    {/* Desktop only: hover action bar slides up from bottom */}
                    <div className="hidden lg:flex absolute bottom-0 left-0 right-0 gap-2 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/55 via-black/20 to-transparent">
                      <button
                        onClick={() => setSelectedMember(member.id)}
                        className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/35 text-white text-xs font-semibold px-3 py-2 rounded-lg border border-white/35 transition-colors"
                      >
                        View Profile
                      </button>
                      <a
                        href={`mailto:${member.email}`}
                        title={`Email ${member.name}`}
                        className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/35 rounded-lg border border-white/35 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* ── Name & Role ── */}
                  <div className="mt-3 sm:mt-4 space-y-0.5 px-1 w-full">
                    <p className="text-sm sm:text-base lg:text-[17px] font-semibold text-[#4ECDC4] tracking-wide leading-snug">
                      {member.name}
                    </p>
                    <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-bold text-[#2c4a7a] uppercase tracking-wider leading-snug">
                      {member.role}
                    </p>
                  </div>

                  {/* ── Mobile/Tablet only: always-visible action buttons below name ── */}
                  <div className="flex lg:hidden items-center gap-2 mt-3 w-full">
                    <button
                      onClick={() => setSelectedMember(member.id)}
                      className="flex-1 bg-[#2c5697] hover:bg-[#234578] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                    >
                      View Profile
                    </button>
                    <a
                      href={`mailto:${member.email}`}
                      title={`Email ${member.name}`}
                      className="p-2 bg-[#f0f4f8] hover:bg-[#dde3ed] text-[#2c5697] rounded-lg border border-[#d0d8e8] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Modal ── */}
      {selectedMember && activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5 text-[#2c5697]" />
            </button>

            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Modal header */}
              <div className="relative h-48 sm:h-64 bg-gradient-to-br from-[#2C4A6B] to-[#1a2d42]">
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  fill
                  className="object-cover object-top opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider rounded-md mb-3">
                    {activeMember.department}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1">{activeMember.name}</h2>
                  <p className="text-base sm:text-lg font-medium text-[#4ECDC4]">{activeMember.role}</p>
                </div>
              </div>

              {/* Modal body */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#2c5697] mb-3 flex items-center gap-2">
                    <div className="w-1 h-5 sm:h-6 bg-[#4ECDC4] rounded-full" />
                    About
                  </h3>
                  <p className="text-sm sm:text-base text-[#445566] leading-relaxed">{activeMember.bio}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#2c5697] mb-3 flex items-center gap-2">
                    <div className="w-1 h-5 sm:h-6 bg-[#4ECDC4] rounded-full" />
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeMember.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1.5 bg-gray-50 text-[#445566] text-xs sm:text-sm font-medium rounded-full border border-gray-200"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xs sm:text-sm font-bold text-[#2c5697] uppercase tracking-wider mb-4">
                    Get in Touch
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`mailto:${activeMember.email}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#2c5697] hover:bg-[#234578] text-white text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email</span>
                    </a>
                    {activeMember.linkedin && (
                      <a
                        href={activeMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border-2 border-[#2c5697] hover:bg-[#2c5697] text-[#2c5697] hover:text-white text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-[#f0f4f8] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl lg:text-2xl font-bold uppercase text-[#2c5697] mb-3 sm:mb-4 px-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[#445566] mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get in touch with our team and we'll connect you with the right expert.
          </p>
          <Link
            href="/contact"
            className="inline-flex uppercase items-center gap-2 bg-[#4ECDC4] hover:scale-105 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1);    }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }

        .custom-scrollbar::-webkit-scrollbar       { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
