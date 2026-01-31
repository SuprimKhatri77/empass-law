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
    <div className="min-h-screen bg-[#0A0F1C]">
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

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] opacity-[0.05] blur-[150px]" />

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-10 h-10 text-[#00D9FF]" />
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-[#00D9FF] to-transparent" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              Our Work
            </h1>

            <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
              Landmark cases, groundbreaking victories, and transformative legal
              solutions. Explore our portfolio of exceptional work that sets
              precedents and delivers results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
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

// Work Card Component with Alternating Layout
function WorkCard({ work, index }: { work: WorkPost; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <Link href={`/our-work/${work.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3) }}
        className="group border-b border-white/5 last:border-b-0"
      >
        <div
          className={`
          grid lg:grid-cols-2 gap-8 lg:gap-12 py-12 sm:py-20
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
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(work.createdAt)}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight group-hover:text-[#00D9FF] transition-colors duration-300">
                {work.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                {work.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-3 text-[#00D9FF] font-bold group-hover:gap-4 transition-all duration-300">
                <span>Read Full Case Study</span>
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#00D9FF] to-transparent" />
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
              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden bg-[#0D1425] border border-white/10 group-hover:border-[#00D9FF]/30 transition-colors duration-300"
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
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#00D9FF]/0 group-hover:border-[#00D9FF]/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#00D9FF]/0 group-hover:border-[#00D9FF]/30 transition-all duration-300" />
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
        <div key={i} className="border-b border-white/5 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Content skeleton */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="h-4 w-32 bg-white/5 animate-pulse" />
              <div className="space-y-4">
                <div className="h-12 w-full bg-white/5 animate-pulse" />
                <div className="h-12 w-5/6 bg-white/5 animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-white/5 animate-pulse" />
                <div className="h-4 w-full bg-white/5 animate-pulse" />
                <div className="h-4 w-3/4 bg-white/5 animate-pulse" />
              </div>
              <div className="h-6 w-48 bg-white/5 animate-pulse" />
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
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>

        <h2 className="text-3xl font-black text-white mb-4">
          Something Went Wrong
        </h2>

        <p className="text-white/60 mb-8 leading-relaxed">{error}</p>

        <button
          onClick={onRetry}
          className="px-8 py-4 bg-[#00D9FF] hover:bg-[#00B8DD] text-[#0A0F1C] font-bold transition-colors duration-200 flex items-center gap-2 mx-auto group"
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
        <div className="w-20 h-20 mx-auto mb-6 bg-white/5 border border-white/10 flex items-center justify-center">
          <Briefcase className="w-10 h-10 text-white/40" />
        </div>

        <h2 className="text-3xl font-black text-white mb-4">No Work Found</h2>

        <p className="text-white/60 leading-relaxed">
          We haven't published any case studies yet. Check back soon for
          updates.
        </p>
      </motion.div>
    </div>
  );
}
