"use client";

import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    type: "NEWS",
    title: "Expansion in the heart of ",
    titleHighlight: "the City of London",
    description:
      "We are delighted to announce the opening of our new international headquarters at 41 Lothbury, London. This move marks a significant milestone in our AG2030 strategy, reinforcing our ambition to be a London-headquartered, international law firm delivering excellence for clients worldwide.",
    link: "/news/city-expansion",
    cta: "Read more",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    accentColor: "#00bcd4",
  },
  {
    id: 2,
    type: "TECHNOLOGY REPORT",
    title: "Technology report: ",
    titleHighlight: "Cloud without crisis",
    description:
      "Recent high-profile outages have shown how a single failure can ripple across industries, shut down operations and trigger legal, financial and reputation challenges. This report explores how resilience must be engineered into cloud strategy from the outset, not just recovered after the fact.",
    link: "/insights/cloud-without-crisis",
    cta: "Read the report",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    accentColor: "#9c27b0",
  },
  {
    id: 3,
    type: "AWARD",
    title: "Law Firm of ",
    titleHighlight: "the Year",
    titleEnd: " at British Legal Awards",
    description:
      "We are proud to have been named Law Firm of the Year at the British Legal Awards 2025. The awards are a benchmark for excellence across the legal sector, with judges recognising our strong, sustainable growth, culture-focused strategy, stand-out innovation and our advice on landmark transactions.",
    link: "/news/law-firm-award",
    cta: "Read more",
    image:
      "https://images.unsplash.com/photo-1770562459383-255f853f5463?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "#4caf50",
  },
];

export default function NewsSection() {
  return (
    <section
      className="bg-gradient-to-r from-[#435b76] to-[#002041]
 py-16 lg:py-24 "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-[#163353] rounded-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[260px] overflow-hidden bg-gray-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-8">
                <h3 className="text-[26px] lg:text-[28px] leading-[1.3] font-light text-white mb-5">
                  {item.title}
                  <span
                    style={{ color: item.accentColor }}
                    className="font-normal"
                  >
                    {item.titleHighlight}
                  </span>
                  {item.titleEnd && <span>{item.titleEnd}</span>}
                </h3>

                <p className="text-white/75 text-[16px] leading-[1.65] mb-8 flex-1">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[14px] font-medium transition-all group/link self-start"
                  style={{
                    color: item.accentColor,
                    borderBottom: `2px solid ${item.accentColor}`,
                  }}
                >
                  {item.cta}
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        {/* <div className="flex justify-end mt-12">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white text-[14px] font-medium border-b-2 border-white pb-1 hover:border-white/60 transition-colors group"
          >
            View all
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
