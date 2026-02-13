"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { mockWorkPosts } from "@/utils/mock/mock-blog";

export function FeaturedInsights() {
  // Get posts 4, 5, 6 for the insights section (since 1-3 are in news)
  const insightPosts = mockWorkPosts.slice(3, 6);

  // Color schemes for each card
  const colorSchemes = [
    {
      bg: "bg-gradient-to-br from-green-100 to-green-200",
      text: "text-green-600",
      hover: "hover:text-green-700",
      underline: "bg-green-600",
      badge: "text-green-600",
    },
    {
      bg: "bg-gradient-to-br from-purple-100 to-purple-200",
      text: "text-purple-600",
      hover: "hover:text-purple-700",
      underline: "bg-purple-600",
      badge: "text-purple-600",
    },
    {
      bg: "bg-gradient-to-br from-cyan-100 to-cyan-200",
      text: "text-cyan-500",
      hover: "hover:text-cyan-600",
      underline: "bg-cyan-500",
      badge: "text-cyan-500",
    },
  ];

  return (
    <section className="relative bg-[linear-gradient(90deg,#435b76_0%,#002041_100%)] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {insightPosts.map((post, index) => {
            const colors = colorSchemes[index];

            return (
              <article
                key={post.id}
                className="group bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-sm"
              >
                {/* Card Header */}
                <div className="bg-gray-100 px-6 py-3">
                  <span className="text-xs font-semibold text-gray-600 tracking-wider uppercase">
                    FEATURED INSIGHT
                  </span>
                </div>

                {/* Image with gradient overlay */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Colored overlay */}
                  <div
                    className={`absolute inset-0 ${colors.bg} opacity-60 mix-blend-multiply`}
                  />

                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        index === 0
                          ? "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                          : index === 1
                            ? "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E\")"
                            : "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                      backgroundSize:
                        index === 0
                          ? "60px 60px"
                          : index === 1
                            ? "40px 40px"
                            : "80px 80px",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-normal text-gray-800 mb-4 leading-tight">
                    {post.title}
                    {post.titleHighlight && (
                      <span className={`${colors.text} font-normal`}>
                        {post.titleHighlight}
                      </span>
                    )}
                    {post.titleEnd && <span>{post.titleEnd}</span>}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 line-clamp-3 overflow-hidden">
                    {post.description.trim()}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={`/our-work/${post.slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold group/link transition-all duration-300 ${colors.text} ${colors.hover}`}
                  >
                    <span className="relative">
                      {post.cta || "Read more"}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 ${colors.underline}`}
                      />
                    </span>
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
            className="inline-flex items-center gap-2 text-white font-semibold text-sm group/viewall transition-all duration-300 hover:text-cyan-300"
          >
            <span className="relative">
              View all
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition-all duration-300 group-hover/viewall:bg-cyan-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/viewall:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
