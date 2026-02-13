"use client";

import Link from "next/link";
import Image from "next/image";
import { mockWorkPosts } from "@/utils/mock/mock-blog";

export default function NewsSection() {
  // Get the first 3 posts that have the required fields
  const featuredPosts = mockWorkPosts.slice(0, 3);

  return (
    <section className="bg-gradient-to-r from-[#435b76] to-[#002041] py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-[#163353] rounded-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[260px] overflow-hidden bg-gray-800">
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  className="object-cover object-left opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-8">
                {/* Title with highlight support */}
                <h3 className="text-[22px] lg:text-[24px] leading-[1.3] font-light text-white mb-5">
                  {post.title}
                  {post.titleHighlight && (
                    <span
                      style={{ color: post.accentColor || "#00bcd4" }}
                      className="font-normal"
                    >
                      {post.titleHighlight}
                    </span>
                  )}
                  {post.titleEnd && <span>{post.titleEnd}</span>}
                </h3>

                {/* Description - truncated properly with no overflow */}
                <p className="text-white/75 text-[15px] leading-[1.6] mb-6 flex-1 line-clamp-3 overflow-hidden">
                  {post.description.trim()}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/our-work/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[14px] font-medium transition-all group/link self-start"
                  style={{
                    color: post.accentColor || "#00bcd4",
                    borderBottom: `2px solid ${post.accentColor || "#00bcd4"}`,
                  }}
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
        <div className="flex justify-end mt-12">
          <Link
            href="/our-work"
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
        </div>
      </div>
    </section>
  );
}
