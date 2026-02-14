"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { mockWorkPosts } from "@/utils/mock/mock-blog";

export function FeaturedInsights() {
  // Get posts 4, 5, 6 for the insights section (since 1-3 are in news)
  const insightPosts = mockWorkPosts.slice(3, 6);

  return (
    <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#00a3a3]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#00a3a3]">
              Featured Insights
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c5697]">
            More From Our Work
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {insightPosts.map((post, index) => {
            return (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#2c5697]/30 rounded-lg"
              >
                {/* Image */}
                <div className="relative h-[180px] sm:h-[200px] overflow-hidden bg-gray-100">
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#2c5697] mb-4 leading-tight group-hover:text-[#234578] transition-colors">
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

                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-6 line-clamp-2 overflow-hidden">
                    {post.description.trim()}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={`/our-work/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-[14px] font-semibold text-[#2c5697] hover:text-[#234578] transition-all group/link border-b-2 border-[#2c5697] hover:border-[#234578] pb-1"
                  >
                    {post.cta || "Read more"}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="flex justify-end">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-[#2c5697] font-semibold text-sm sm:text-[14px] group/viewall transition-all hover:text-[#234578] border-b-2 border-[#2c5697] hover:border-[#234578] pb-1"
          >
            View all insights
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/viewall:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
