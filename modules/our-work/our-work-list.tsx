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
    <div className="min-h-screen bg-[#0A0F1C] md:py-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0, 217, 255, 0.03) 50px, rgba(0, 217, 255, 0.03) 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0, 217, 255, 0.03) 50px, rgba(0, 217, 255, 0.03) 51px)`,
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#4988C4] opacity-[0.05] blur-[150px]" />

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Briefcase className="w-7 h-7 sm:w-10 sm:h-10 text-[#4988C4]" />
              <div className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-[#4988C4] to-transparent" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tight">
              Our Work
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed">
              Landmark cases, groundbreaking victories, and transformative legal
              solutions. Explore our portfolio of exceptional work that sets
              precedents and delivers results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
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
        className="group border-b border-white/5 last:border-b-0"
      >
        <div
          className={`
          grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 lg:py-20
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
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/40 mb-3 sm:mb-4">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{formatDate(work.createdAt)}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight group-hover:text-[#4988C4] transition-colors duration-300">
                {work.title}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-6 sm:mb-8">
                {work.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#4988C4] font-bold group-hover:gap-3 sm:group-hover:gap-4 transition-all duration-300">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Decorative line */}
              <div className="mt-6 sm:mt-8 h-px w-16 sm:w-24 bg-gradient-to-r from-[#4988C4] to-transparent" />
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
              className="relative aspect-[4/3] overflow-hidden bg-[#0D1425] border border-white/10 group-hover:border-[#4988C4]/30 transition-colors duration-300"
            >
              {/* Image */}
              <motion.img
                src={work.images[0]}
                alt={work.title}
                className={`
                  w-full h-full object-cover transition-all duration-700
                  ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                  group-hover:scale-105
                `}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Loading placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse" />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-t border-r border-[#4988C4]/0 group-hover:border-[#4988C4]/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-b border-l border-[#4988C4]/0 group-hover:border-[#4988C4]/30 transition-all duration-300" />
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
        <div key={i} className="border-b border-white/5 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Content skeleton */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              <div className="h-3 sm:h-4 w-24 sm:w-32 bg-white/5 animate-pulse" />
              <div className="space-y-3 sm:space-y-4">
                <div className="h-8 sm:h-10 lg:h-12 w-full bg-white/5 animate-pulse" />
                <div className="h-8 sm:h-10 lg:h-12 w-5/6 bg-white/5 animate-pulse" />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="h-3 sm:h-4 w-full bg-white/5 animate-pulse" />
                <div className="h-3 sm:h-4 w-full bg-white/5 animate-pulse" />
                <div className="h-3 sm:h-4 w-3/4 bg-white/5 animate-pulse" />
              </div>
              <div className="h-5 sm:h-6 w-40 sm:w-48 bg-white/5 animate-pulse" />
            </div>

            {/* Image skeleton */}
            <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent animate-pulse border border-white/5" />
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
    <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md w-full"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
          Something Went Wrong
        </h2>

        <p className="text-sm sm:text-base text-white/60 mb-6 sm:mb-8 leading-relaxed px-4">
          {error}
        </p>

        <button
          onClick={onRetry}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#4988C4] hover:bg-[#00B8DD] text-[#0A0F1C] font-bold text-sm sm:text-base transition-colors duration-200 flex items-center gap-2 mx-auto group"
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
    <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md w-full"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white/5 border border-white/10 flex items-center justify-center">
          <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white/40" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
          No Work Found
        </h2>

        <p className="text-sm sm:text-base text-white/60 leading-relaxed px-4">
          We haven't published any case studies yet. Check back soon for
          updates.
        </p>
      </motion.div>
    </div>
  );
}
