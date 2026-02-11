"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

export default function PageLoader({ onLoadingComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease out effect - slow down as it approaches 100
        const increment = (100 - prev) * 0.1;
        return prev + Math.max(increment, 2);
      });
    }, 50);

    // Complete loading after reaching 100%
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop"
          alt="London"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      {/* Decorative geometric shape */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5">
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

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo or Brand Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/logo.png"
              alt="Empass Law"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Empass Law
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Delivering Excellence in Legal Services
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="h-1 bg-slate-700/50 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 text-sm font-semibold"
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Loading dots animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-500/30" />
    </motion.div>
  );
}
