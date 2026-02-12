"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  Share2,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
  Eye,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  workAPI,
  formatDate,
  getDaysAgo,
  type WorkPost,
} from "@/utils/mock/mock-blog";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [work, setWork] = useState<WorkPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchWorkDetails();
    }
  }, [slug]);

  // Reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchWorkDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const workData = await workAPI.getWorkBySlug(slug);

      if (!workData) {
        setError("Case study not found");
        setLoading(false);
        return;
      }

      setWork(workData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load case study",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (platform?: string) => {
    const url = window.location.href;
    const text = work?.title || "";

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank",
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank",
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank",
      );
    } else if (platform === "copy") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }

    setShowShareMenu(false);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !work) {
    return <ErrorState error={error || "Case study not found"} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Reading Progress Bar */}
      {/* <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2c5697] via-[#3d6baa] to-[#2c5697]"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
        />
      </div> */}

      {/* Navigation Bar */}
      <div className=" z-50 bg-white py-5 ">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/our-work"
              className="flex items-center gap-2 text-[#5a7ba8] hover:text-[#2c5697] transition-colors duration-200 group flex-shrink-0"
            >
              <div className="p-2 bg-gray-50 border border-gray-200 group-hover:border-[#2c5697]/50 transition-all duration-200 rounded-lg">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              </div>
              <span className="font-bold text-sm sm:text-base hidden sm:inline">
                Back to Work
              </span>
              <span className="font-bold text-sm sm:hidden">Back</span>
            </Link>

            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-50 border border-gray-200 hover:border-[#2c5697]/50 text-[#5a7ba8] hover:text-[#2c5697] transition-all duration-200 group rounded-lg"
              >
                <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                <span className="font-bold text-sm hidden sm:inline">
                  Share
                </span>
              </button>

              <AnimatePresence>
                {showShareMenu && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowShareMenu(false)}
                      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    />

                    {/* Share Menu */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-2xl z-50 overflow-hidden rounded-lg"
                    >
                      <div className="p-1">
                        {[
                          {
                            icon: Twitter,
                            label: "Share on Twitter",
                            value: "twitter",
                            color: "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]",
                          },
                          {
                            icon: Linkedin,
                            label: "Share on LinkedIn",
                            value: "linkedin",
                            color: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
                          },
                          {
                            icon: Facebook,
                            label: "Share on Facebook",
                            value: "facebook",
                            color: "hover:bg-[#1877F2]/10 hover:text-[#1877F2]",
                          },
                          {
                            icon: copied ? Check : LinkIcon,
                            label: copied ? "Copied!" : "Copy Link",
                            value: "copy",
                            color: "hover:bg-[#2c5697]/10 hover:text-[#2c5697]",
                          },
                        ].map((item) => (
                          <button
                            key={item.value}
                            onClick={() => handleShare(item.value)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-[#5a7ba8] transition-all duration-200 rounded ${item.color}`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm font-bold">
                              {item.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative border-b border-gray-200 overflow-hidden bg-white">
        {/* Animated background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2c5697] opacity-[0.03] blur-[150px]" />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-15 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#7a93b8] mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{formatDate(work.createdAt)}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{getDaysAgo(work.createdAt)}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>5 min read</span>
              </div>
            </div>

            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2c5697]/10 border border-[#2c5697]/30 text-[#2c5697] text-xs sm:text-sm font-bold mb-6 sm:mb-8 rounded-full"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Featured Case Study
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#2c5697] mb-6 sm:mb-8 leading-tight">
              {work.title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#5a7ba8] leading-relaxed">
              {work.description}
            </p>

            {/* Decorative line */}
            <div className="mt-8 sm:mt-12 h-px w-24 sm:w-32 bg-gradient-to-r from-[#2c5697] to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video sm:aspect-[16/9] overflow-hidden bg-gray-100 border border-gray-200 group rounded-lg"
        >
          <img
            src={work.images[activeImage]}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c5697]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-[#2c5697]/0 group-hover:border-[#2c5697]/50 transition-all duration-300" />
          <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-[#2c5697]/0 group-hover:border-[#2c5697]/50 transition-all duration-300" />

          {/* Image navigation if multiple images */}
          {work.images.length > 1 && (
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 p-2 rounded-full">
              {work.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`
                    h-1.5 sm:h-2 transition-all duration-300 rounded-full
                    ${activeImage === idx ? "bg-[#2c5697] w-6 sm:w-8" : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2"}
                  `}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Image thumbnails if multiple */}
        {work.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6"
          >
            {work.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`
                  aspect-video overflow-hidden border-2 transition-all duration-200 group rounded-lg
                  ${activeImage === idx ? "border-[#2c5697] scale-[1.02]" : "border-gray-200 hover:border-[#2c5697]/50"}
                `}
              >
                <img
                  src={img}
                  alt={`View ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 sm:space-y-12"
          >
            {/* Main content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c5697] mb-4 sm:mb-6">
                Overview
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-[#5a7ba8] leading-relaxed">
                  This case study exemplifies our commitment to achieving
                  exceptional results for our clients. Through meticulous
                  preparation, strategic litigation, and expert negotiation, we
                  successfully navigated complex legal challenges to secure a
                  favorable outcome.
                </p>

                <p className="text-base sm:text-lg text-[#5a7ba8] leading-relaxed">
                  Our multidisciplinary team brought together expertise across
                  various legal domains, regulatory compliance, and commercial
                  strategy. This integrated approach allowed us to identify
                  innovative solutions and anticipate potential challenges
                  throughout the proceedings.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c5697] mb-6 sm:mb-8">
                Key Achievements
              </h2>

              <ul className="space-y-4 sm:space-y-5">
                {[
                  "Secured favorable settlement exceeding client expectations",
                  "Established new legal precedent in the field",
                  "Protected client's market position and reputation",
                  "Achieved resolution within projected timeline and budget",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-3 sm:gap-4 text-base sm:text-lg text-[#5a7ba8] leading-relaxed group"
                  >
                    <div className="w-2 h-2 bg-[#2c5697] mt-2 sm:mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-200 rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Results Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#2c5697]/10 via-[#2c5697]/5 to-transparent border border-[#2c5697]/20 overflow-hidden group rounded-lg"
            >
              {/* Animated background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2c5697] opacity-[0.05] blur-[80px] group-hover:opacity-[0.1] transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-[#2c5697] to-transparent rounded-full" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#2c5697]">
                    Results & Impact
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#5a7ba8] leading-relaxed">
                  The case set important precedents and has been widely
                  recognized within the legal community for its strategic
                  approach and successful resolution. Our client was able to
                  continue their business operations without disruption while
                  achieving their legal objectives.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { label: "Published", value: formatDate(work.createdAt) },
              { label: "Last Updated", value: formatDate(work.updatedAt) },
              // { label: "Case ID", value: `#${work.id}` },
              // { label: "Author ID", value: work.authorId },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-200 p-4 sm:p-6 hover:border-[#2c5697]/30 transition-all duration-200 group rounded-lg"
              >
                <div className="text-[10px] sm:text-xs text-[#7a93b8] uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base text-[#2c5697] font-bold truncate group-hover:text-[#234578] transition-colors duration-200">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Loading State with Skeleton
function LoadingState() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress bar skeleton */}
      <div className="h-1 bg-gray-200" />

      {/* Nav skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="h-10 w-32 bg-gray-200 animate-pulse rounded" />
            <div className="h-10 w-24 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-20 lg:py-32">
          <div className="max-w-4xl space-y-6">
            {/* Meta skeleton */}
            <div className="flex gap-4">
              <div className="h-4 w-32 bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-24 bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-28 bg-gray-200 animate-pulse rounded" />
            </div>

            {/* Badge skeleton */}
            <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-full" />

            {/* Title skeleton */}
            <div className="space-y-4">
              <div className="h-12 sm:h-16 lg:h-20 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded" />
              <div className="h-12 sm:h-16 lg:h-20 w-5/6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded" />
            </div>

            {/* Description skeleton */}
            <div className="space-y-3 pt-4">
              <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded" />
            </div>

            {/* Decorative line */}
            <div className="h-px w-32 bg-gradient-to-r from-gray-300 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Image skeleton */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="aspect-video bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse border border-gray-200 rounded-lg" />

        {/* Thumbnails skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video bg-gray-200 animate-pulse border border-gray-200 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl space-y-12">
          {/* Section 1 */}
          <div className="space-y-6">
            <div className="h-10 w-48 bg-gray-200 animate-pulse rounded" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <div className="h-10 w-64 bg-gray-200 animate-pulse rounded" />
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-300 mt-2 shrink-0 animate-pulse rounded-full" />
                  <div className="h-4 flex-1 bg-gray-200 animate-pulse rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Highlight box skeleton */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-gray-100 to-transparent border border-gray-200 rounded-lg">
            <div className="space-y-4">
              <div className="h-8 w-56 bg-gray-300 animate-pulse rounded" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metadata skeleton */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-lg"
              >
                <div className="h-3 w-20 bg-gray-200 animate-pulse mb-3 rounded" />
                <div className="h-4 w-32 bg-gray-300 animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Error State
function ErrorState({ error }: { error: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center relative"
        >
          <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />
          <div className="absolute inset-0 border border-red-500/20 rounded-full animate-ping" />
        </motion.div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2c5697] mb-4">
          Case Study Not Found
        </h2>

        <p className="text-sm sm:text-base text-[#5a7ba8] mb-8 leading-relaxed">
          {error}
        </p>

        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#2c5697] hover:bg-[#234578] text-white font-bold text-sm sm:text-base transition-all duration-200 group rounded-lg shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to All Cases
        </Link>
      </motion.div>
    </div>
  );
}
