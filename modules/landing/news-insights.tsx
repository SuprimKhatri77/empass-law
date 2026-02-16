"use client";

import Link from "next/link";
import Image from "next/image";
import { mockWorkPosts } from "@/utils/mock/mock-blog";

export default function NewsSection() {
  // Get the first 3 posts that have the required fields
  const featuredPosts = mockWorkPosts.slice(0, 3);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
              Recent Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c5697]">
            Latest Case Studies
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-xl hover:border-[#2c5697]/30 duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden bg-gray-100">
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  className="object-cover object-left group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6 sm:p-8">
                {/* Title with highlight support */}
                <h3 className="text-lg sm:text-xl lg:text-[22px] leading-[1.3] font-bold text-[#2c5697] mb-4 group-hover:text-[#234578] transition-colors">
                  {post.title}
                  {post.titleHighlight && (
                    <span
                      style={{ color: post.accentColor || "#00a3a3" }}
                      className="font-bold"
                    >
                      {post.titleHighlight}
                    </span>
                  )}
                  {post.titleEnd && <span>{post.titleEnd}</span>}
                </h3>

                {/* Description - truncated properly with no overflow */}
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6 flex-1 line-clamp-3 overflow-hidden">
                  {post.description.trim()}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/our-work/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm sm:text-[14px] font-semibold text-[#2c5697] hover:text-[#234578] transition-all group/link self-start border-b-2 border-[#2c5697] hover:border-[#234578] pb-1"
                >
                  {post.cta || "Read more"}
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
        <div className="flex justify-end mt-8 sm:mt-12">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-[#2c5697] text-sm sm:text-[14px] font-semibold border-b-2 border-[#2c5697] pb-1 hover:border-[#234578] hover:text-[#234578] transition-all group"
          >
            View all case studies
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
        </div>
      </div>
    </section>
  );
}
