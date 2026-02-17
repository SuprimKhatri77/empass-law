"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  RefreshCw,
  AlertCircle,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { workAPI, formatDate, type WorkPost } from "@/utils/mock/mock-blog";

export default function OurWorkPage() {
  const [works, setWorks] = useState<WorkPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await workAPI.getAllWork(1, 20);
      setWorks(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - White Background */}
      <section className="relative bg-white py-12 sm:py-16 lg:pt-20 lg:pb-5 border-b border-[#4ECDC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold text-[#2c5697] mb-4 sm:mb-6 uppercase tracking-tight px-4">
              Case Studies
            </span>
          </div>
        </div>
      </section>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg lg:text-xl pt-8 sm:pt-12 lg:pt-16 text-gray-600 leading-relaxed">
          Explore our portfolio of exceptional work that delivers results.
        </p>
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <AnimatePresence mode="wait">
          {/* Loading State */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingSkeleton />
            </motion.div>
          )}

          {/* Error State */}
          {error && !loading && (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ErrorState error={error} onRetry={fetchWorks} />
            </motion.div>
          )}

          {/* Empty State */}
          {!loading && !error && works.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <EmptyState />
            </motion.div>
          )}

          {/* Content - Alternating Layout */}
          {!loading && !error && works.length > 0 && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-0"
            >
              {works.map((work, index) => (
                <WorkCard key={work.id} work={work} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function WorkCard({ work, index }: { work: WorkPost; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isEven = index % 2 === 0;
  const isFirst = index === 0;

  // Truncate description to max 250 characters
  const truncateDescription = (desc: string, maxLength: number = 250) => {
    // Remove extra whitespace and newlines
    const cleaned = desc.replace(/\s+/g, " ").trim();
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.slice(0, maxLength).trim() + "...";
  };

  return (
    <Link href={`/our-work/${work.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: isFirst ? 0 : 40 }}
        animate={isFirst ? { opacity: 1, y: 0 } : undefined}
        whileInView={isFirst ? undefined : { opacity: 1, y: 0 }}
        viewport={isFirst ? undefined : { once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: isFirst ? 0.2 : Math.min(index * 0.1, 0.3),
        }}
        className="group border-b border-slate-200 last:border-b-0"
      >
        <div
          className={`
          grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 py-8 sm:py-12 lg:py-16 xl:py-24
          ${isEven ? "" : "lg:grid-flow-dense"}
        `}
        >
          {/* Content Side */}
          <div
            className={`
            flex flex-col justify-center order-2 lg:order-1
            ${isEven ? "" : "lg:col-start-2 lg:order-2"}
          `}
          >
            <motion.div
              initial={{ opacity: 0, x: isFirst ? 0 : isEven ? -20 : 20 }}
              animate={isFirst ? { opacity: 1, x: 0 } : undefined}
              whileInView={isFirst ? undefined : { opacity: 1, x: 0 }}
              viewport={isFirst ? undefined : { once: true }}
              transition={{ duration: 0.6, delay: isFirst ? 0.3 : 0.2 }}
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{formatDate(work.createdAt)}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight group-hover:text-[#2c5697] transition-colors duration-300">
                {work.title}
                {work.titleHighlight && (
                  <span
                    // style={{ color: work.accentColor || "#2c5697" }}
                    className="font-bold"
                  >
                    {" "}
                    {work.titleHighlight}
                  </span>
                )}
                {work.titleEnd && <span> {work.titleEnd}</span>}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                {truncateDescription(work.description, 200)}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 sm:gap-3 text-[#2c5697] font-semibold text-sm sm:text-base group-hover:gap-4 transition-all duration-300">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Decorative line */}
              <div className="mt-6 sm:mt-8 h-0.5 w-16 sm:w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
            </motion.div>
          </div>

          {/* Image Side */}
          <div
            className={`
            relative order-1 lg:order-2
            ${isEven ? "" : "lg:col-start-1 lg:row-start-1 lg:order-1"}
          `}
          >
            <motion.div
              initial={{ opacity: 0, x: isFirst ? 0 : isEven ? 20 : -20 }}
              animate={isFirst ? { opacity: 1, x: 0 } : undefined}
              whileInView={isFirst ? undefined : { opacity: 1, x: 0 }}
              viewport={isFirst ? undefined : { once: true }}
              transition={{ duration: 0.6, delay: isFirst ? 0.3 : 0.2 }}
              className="relative aspect-[4/3] overflow-hidden bg-slate-100 rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={work.images[0]}
                alt={work.title}
                className={`
                  w-full h-full object-cover object-center transition-all duration-700
                  ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                  group-hover:scale-105
                `}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Loading placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 animate-pulse" />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-r-2 border-transparent group-hover:border-cyan-500 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-l-2 border-transparent group-hover:border-cyan-500 transition-all duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Loading Skeleton Component
function LoadingSkeleton() {
  return (
    <div className="space-y-0">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="border-b border-slate-200 py-8 sm:py-12 lg:py-16 xl:py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Content skeleton */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="h-3 sm:h-4 w-24 sm:w-32 bg-slate-200 rounded animate-pulse" />
              <div className="space-y-3 sm:space-y-4">
                <div className="h-8 sm:h-10 lg:h-12 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-8 sm:h-10 lg:h-12 w-5/6 bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="h-3 sm:h-4 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-3 sm:h-4 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-3 sm:h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="h-5 sm:h-6 w-36 sm:w-48 bg-slate-200 rounded animate-pulse" />
            </div>

            {/* Image skeleton */}
            <div className="aspect-[4/3] bg-slate-200 rounded-lg animate-pulse order-1 lg:order-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Error State Component
function ErrorState({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-red-50 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
          Something Went Wrong
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed">
          {error}
        </p>

        <button
          onClick={onRetry}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#2c5697] hover:bg-[#234578] text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto group text-sm sm:text-base"
        >
          <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
          Try Again
        </button>
      </motion.div>
    </div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-slate-100 rounded-full flex items-center justify-center">
          <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
          No Work Found
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          We haven't published any case studies yet. Check back soon for
          updates.
        </p>
      </motion.div>
    </div>
  );
}