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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-b border-slate-200">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop"
            alt="London Skyline"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        </div>

        {/* Decorative Shape */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&h=800&fit=crop"
            alt="Architecture"
            fill
            className="object-cover"
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Work
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Landmark cases, groundbreaking victories, and transformative legal
              solutions. Explore our portfolio of exceptional work that sets
              precedents and delivers results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
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

  // Truncate title to max 120 characters
  const truncateTitle = (title: string, maxLength: number = 120) => {
    if (title.length <= maxLength) return title;
    return title.slice(0, maxLength).trim() + "...";
  };

  // Truncate description to max 250 characters
  const truncateDescription = (desc: string, maxLength: number = 250) => {
    // Remove extra whitespace and newlines
    const cleaned = desc.replace(/\s+/g, " ").trim();
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.slice(0, maxLength).trim() + "...";
  };

  // const getPreviewText = (desc: string) => {
  //   const cleaned = desc.replace(/\s+/g, " ").trim();
  //   if (cleaned.length <= 250) return cleaned;
  //   return cleaned.slice(0, 250).trim() + "...";
  // };
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
          grid lg:grid-cols-2 gap-8 lg:gap-16 py-16 lg:py-24
          ${isEven ? "" : "lg:grid-flow-dense"}
        `}
        >
          {/* Content Side */}
          <div
            className={`
            flex flex-col justify-center
            ${isEven ? "" : "lg:col-start-2"}
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
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(work.createdAt)}</span>
              </div>

              {/* Title - with smart truncation */}
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-[#2c5697] transition-colors duration-300">
                {work.title}
                {work.titleHighlight && (
                  <span
                    style={{ color: work.accentColor || "#2c5697" }}
                    className="font-bold"
                  >
                    {work.titleHighlight}
                  </span>
                )}
                {work.titleEnd && <span>{work.titleEnd}</span>}
              </h2>

              {/* Description - with smart truncation */}
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
                {truncateDescription(work.description, 200)}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-3 text-[#2c5697] font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-0.5 w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
            </motion.div>
          </div>

          {/* Image Side */}
          <div
            className={`
            relative
            ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}
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
              <motion.img
                src={work.images[0]}
                alt={work.title}
                className={`
                  w-full h-full object-cover object-left transition-all duration-700
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
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-cyan-500 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-transparent group-hover:border-cyan-500 transition-all duration-300" />
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
        <div key={i} className="border-b border-slate-200 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Content skeleton */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
              <div className="space-y-4">
                <div className="h-10 lg:h-12 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-10 lg:h-12 w-5/6 bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
              </div>
              <div className="h-6 w-48 bg-slate-200 rounded animate-pulse" />
            </div>

            {/* Image skeleton */}
            <div className="aspect-[4/3] bg-slate-200 rounded-lg animate-pulse" />
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
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Something Went Wrong
        </h2>

        <p className="text-slate-600 mb-8 leading-relaxed">{error}</p>

        <button
          onClick={onRetry}
          className="px-8 py-4 bg-[#2c5697] hover:bg-[#234578] text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto group"
        >
          <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          Try Again
        </button>
      </motion.div>
    </div>
  );
}

// Empty State Component
function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
          <Briefcase className="w-10 h-10 text-slate-400" />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          No Work Found
        </h2>

        <p className="text-slate-600 leading-relaxed">
          We haven't published any case studies yet. Check back soon for
          updates.
        </p>
      </motion.div>
    </div>
  );
}
