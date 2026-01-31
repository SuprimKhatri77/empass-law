"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  Share2,
  AlertCircle,
  Loader2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
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

  useEffect(() => {
    if (slug) {
      fetchWorkDetails();
    }
  }, [slug]);

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
      {/* Navigation Bar */}
      <div className="sticky top-20 z-50 ">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/our-work"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-bold">Back to Work</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-200"
              >
                <Share2 className="w-4 h-4" />
                <span className="font-bold text-sm">Share</span>
              </button>

              <AnimatePresence>
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-[#0D1425] border border-white/10 p-2"
                  >
                    {[
                      { icon: Twitter, label: "Twitter", value: "twitter" },
                      { icon: Linkedin, label: "LinkedIn", value: "linkedin" },
                      { icon: Facebook, label: "Facebook", value: "facebook" },
                      {
                        icon: copied ? Check : LinkIcon,
                        label: copied ? "Copied!" : "Copy Link",
                        value: "copy",
                      },
                    ].map((item) => (
                      <button
                        key={item.value}
                        onClick={() => handleShare(item.value)}
                        className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-bold">{item.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Meta */}
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(work.createdAt)}</span>
              <span>•</span>
              <span>{getDaysAgo(work.createdAt)}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              {work.title}
            </h1>

            {/* Description */}
            <p className="text-2xl text-white/70 leading-relaxed">
              {work.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] overflow-hidden bg-[#0D1425] border border-white/10"
        >
          <img
            src={work.images[activeImage]}
            alt={work.title}
            className="w-full h-full object-cover"
          />

          {/* Image navigation if multiple images */}
          {work.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-[#0A0F1C]/80 backdrop-blur-sm border border-white/10 p-2">
              {work.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`
                    w-2 h-2 transition-all duration-200
                    ${activeImage === idx ? "bg-[#00D9FF] w-8" : "bg-white/30 hover:bg-white/50"}
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
            className="grid grid-cols-4 gap-4 mt-6"
          >
            {work.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`
                  aspect-video overflow-hidden border-2 transition-all duration-200
                  ${activeImage === idx ? "border-[#00D9FF]" : "border-white/10 hover:border-white/30"}
                `}
              >
                <img
                  src={img}
                  alt={`View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            {/* Main content - you would typically fetch this from your API */}
            <h2 className="text-3xl font-black text-white mb-6">Overview</h2>

            <p className="text-white/70 leading-relaxed mb-6">
              This case study exemplifies our commitment to achieving
              exceptional results for our clients. Through meticulous
              preparation, strategic litigation, and expert negotiation, we
              successfully navigated complex legal challenges to secure a
              favorable outcome.
            </p>

            <p className="text-white/70 leading-relaxed mb-6">
              Our multidisciplinary team brought together expertise across
              various legal domains, regulatory compliance, and commercial
              strategy. This integrated approach allowed us to identify
              innovative solutions and anticipate potential challenges
              throughout the proceedings.
            </p>

            <h2 className="text-3xl font-black text-white mb-6 mt-12">
              Key Achievements
            </h2>

            <ul className="space-y-4">
              {[
                "Secured favorable settlement exceeding client expectations",
                "Established new legal precedent in the field",
                "Protected client's market position and reputation",
                "Achieved resolution within projected timeline and budget",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-white/70 leading-relaxed"
                >
                  <div className="w-2 h-2 bg-[#00D9FF] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-8 bg-gradient-to-br from-[#00D9FF]/10 to-transparent border border-[#00D9FF]/20">
              <h3 className="text-2xl font-black text-white mb-4">
                Results & Impact
              </h3>
              <p className="text-white/70 leading-relaxed">
                The case set important precedents and has been widely recognized
                within the legal community for its strategic approach and
                successful resolution. Our client was able to continue their
                business operations without disruption while achieving their
                legal objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="bg-[#0D1425] border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/[0.02] border border-white/10 p-6">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                Published
              </div>
              <div className="text-white font-bold">
                {formatDate(work.createdAt)}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-6">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                Last Updated
              </div>
              <div className="text-white font-bold">
                {formatDate(work.updatedAt)}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-6">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                Case ID
              </div>
              <div className="text-white font-bold">#{work.id}</div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-6">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
                Author ID
              </div>
              <div className="text-white font-bold">{work.authorId}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading State
function LoadingState() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <Loader2 className="w-16 h-16 text-[#00D9FF] animate-spin mx-auto mb-6" />
        <p className="text-white/60 font-bold">Loading case study...</p>
      </motion.div>
    </div>
  );
}

// Error State
function ErrorState({ error }: { error: string }) {
  return (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center max-w-md px-6"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>

        <h2 className="text-3xl font-black text-white mb-4">
          Case Study Not Found
        </h2>

        <p className="text-white/60 mb-8 leading-relaxed">{error}</p>

        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] hover:bg-[#00B8DD] text-[#0A0F1C] font-bold transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to All Cases
        </Link>
      </motion.div>
    </div>
  );
}
