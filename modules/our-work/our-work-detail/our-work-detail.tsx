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
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#4988C4] via-[#00B8DD] to-[#4988C4]"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
        />
      </div>

      {/* Navigation Bar - Fixed below your main navbar */}

      <div className="sticky top-25 z-50  ">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/our-work"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 group flex-shrink-0"
            >
              <div className="p-2 bg-white/[0.02] border border-white/10 group-hover:border-[#4988C4]/30 transition-all duration-200">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              </div>
              <span className="font-bold text-sm sm:text-base hidden sm:inline">
                Back to Work
              </span>
              <span className="font-bold text-sm sm:hidden">Back</span>
            </Link>

            {/* Center Title on scroll - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: readingProgress > 10 ? 1 : 0, y: 0 }}
              className="hidden lg:block flex-1 max-w-xl mx-4 overflow-hidden"
            >
              <h2 className="text-sm font-black text-white/80 truncate">
                {work.title}
              </h2>
            </motion.div>

            <div className="relative flex-shrink-0">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/[0.02] border border-white/10 hover:border-[#4988C4]/30 text-white/70 hover:text-white transition-all duration-200 group"
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
                      className="absolute right-0 mt-2 w-56 bg-[#0D1425] border border-white/10 shadow-2xl z-50 overflow-hidden"
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
                            color: "hover:bg-[#4988C4]/10 hover:text-[#4988C4]",
                          },
                        ].map((item) => (
                          <button
                            key={item.value}
                            onClick={() => handleShare(item.value)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-white/70 transition-all duration-200 ${item.color}`}
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
      <div className="relative border-b border-white/5 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4988C4] opacity-[0.03] blur-[150px] animate-pulse" />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/40 mb-6 sm:mb-8">
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
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#4988C4]/10 border border-[#4988C4]/30 text-[#4988C4] text-xs sm:text-sm font-bold mb-6 sm:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Featured Case Study
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              {work.title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 leading-relaxed">
              {work.description}
            </p>

            {/* Decorative line */}
            <div className="mt-8 sm:mt-12 h-px w-24 sm:w-32 bg-gradient-to-r from-[#4988C4] to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video sm:aspect-[16/9] overflow-hidden bg-[#0D1425] border border-white/10 group"
        >
          <img
            src={work.images[activeImage]}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-[#4988C4]/0 group-hover:border-[#4988C4]/50 transition-all duration-300" />
          <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-[#4988C4]/0 group-hover:border-[#4988C4]/50 transition-all duration-300" />

          {/* Image navigation if multiple images */}
          {work.images.length > 1 && (
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-[#0A0F1C]/90 backdrop-blur-sm border border-white/10 p-2">
              {work.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`
                    h-1.5 sm:h-2 transition-all duration-300
                    ${activeImage === idx ? "bg-[#4988C4] w-6 sm:w-8" : "bg-white/30 hover:bg-white/50 w-1.5 sm:w-2"}
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
                  aspect-video overflow-hidden border-2 transition-all duration-200 group
                  ${activeImage === idx ? "border-[#4988C4] scale-[1.02]" : "border-white/10 hover:border-white/30"}
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
                Overview
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  This case study exemplifies our commitment to achieving
                  exceptional results for our clients. Through meticulous
                  preparation, strategic litigation, and expert negotiation, we
                  successfully navigated complex legal challenges to secure a
                  favorable outcome.
                </p>

                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 sm:mb-8">
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
                    className="flex gap-3 sm:gap-4 text-base sm:text-lg text-white/70 leading-relaxed group"
                  >
                    <div className="w-2 h-2 bg-[#4988C4] mt-2 sm:mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-200" />
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
              className="relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#4988C4]/10 via-[#4988C4]/5 to-transparent border border-[#4988C4]/20 overflow-hidden group"
            >
              {/* Animated background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4988C4] opacity-[0.05] blur-[80px] group-hover:opacity-[0.1] transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-[#4988C4] to-transparent" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                    Results & Impact
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
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
      <div className="bg-[#0D1425] border-t border-white/5">
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
                className="bg-white/[0.02] border border-white/10 p-4 sm:p-6 hover:border-[#4988C4]/30 transition-all duration-200 group"
              >
                <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base text-white font-bold truncate group-hover:text-[#4988C4] transition-colors duration-200">
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
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Progress bar skeleton */}
      <div className="h-1 bg-white/5" />

      {/* Nav skeleton */}
      <div className="sticky top-0 z-50 bg-[#0A0F1C]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="h-10 w-32 bg-white/5 animate-pulse" />
            <div className="h-10 w-24 bg-white/5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-20 lg:py-32">
        <div className="max-w-4xl space-y-6">
          {/* Meta skeleton */}
          <div className="flex gap-4">
            <div className="h-4 w-32 bg-white/5 animate-pulse" />
            <div className="h-4 w-24 bg-white/5 animate-pulse" />
            <div className="h-4 w-28 bg-white/5 animate-pulse" />
          </div>

          {/* Badge skeleton */}
          <div className="h-8 w-48 bg-white/5 animate-pulse" />

          {/* Title skeleton */}
          <div className="space-y-4">
            <div className="h-12 sm:h-16 lg:h-20 w-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 animate-pulse" />
            <div className="h-12 sm:h-16 lg:h-20 w-5/6 bg-gradient-to-r from-white/10 via-white/5 to-white/10 animate-pulse" />
          </div>

          {/* Description skeleton */}
          <div className="space-y-3 pt-4">
            <div className="h-6 w-full bg-white/5 animate-pulse" />
            <div className="h-6 w-full bg-white/5 animate-pulse" />
            <div className="h-6 w-3/4 bg-white/5 animate-pulse" />
          </div>

          {/* Decorative line */}
          <div className="h-px w-32 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Image skeleton */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="aspect-video bg-gradient-to-br from-white/10 via-white/5 to-white/10 animate-pulse border border-white/5" />

        {/* Thumbnails skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-video bg-white/5 animate-pulse border border-white/5"
            />
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl space-y-12">
          {/* Section 1 */}
          <div className="space-y-6">
            <div className="h-10 w-48 bg-white/5 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-white/5 animate-pulse" />
              <div className="h-4 w-full bg-white/5 animate-pulse" />
              <div className="h-4 w-5/6 bg-white/5 animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-white/5 animate-pulse" />
              <div className="h-4 w-full bg-white/5 animate-pulse" />
              <div className="h-4 w-4/5 bg-white/5 animate-pulse" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <div className="h-10 w-64 bg-white/5 animate-pulse" />
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 bg-white/10 mt-2 shrink-0 animate-pulse" />
                  <div className="h-4 flex-1 bg-white/5 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Highlight box skeleton */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="space-y-4">
              <div className="h-8 w-56 bg-white/10 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-white/5 animate-pulse" />
                <div className="h-4 w-full bg-white/5 animate-pulse" />
                <div className="h-4 w-4/5 bg-white/5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metadata skeleton */}
      <div className="bg-[#0D1425] border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/[0.02] border border-white/5 p-4 sm:p-6"
              >
                <div className="h-3 w-20 bg-white/5 animate-pulse mb-3" />
                <div className="h-4 w-32 bg-white/10 animate-pulse" />
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
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center p-4">
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
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 bg-red-500/10 border border-red-500/20 flex items-center justify-center relative"
        >
          <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />
          <div className="absolute inset-0 border border-red-500/20 animate-ping" />
        </motion.div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
          Case Study Not Found
        </h2>

        <p className="text-sm sm:text-base text-white/60 mb-8 leading-relaxed">
          {error}
        </p>

        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#4988C4] hover:bg-[#00B8DD] text-[#0A0F1C] font-bold text-sm sm:text-base transition-all duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to All Cases
        </Link>
      </motion.div>
    </div>
  );
}
