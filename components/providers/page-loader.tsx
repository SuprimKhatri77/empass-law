"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const lettersAndSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*-_+=;:<>,";

interface RandomizedTextProps {
  text: string;
  onComplete?: () => void;
}

function RandomizedText({ text, onComplete }: RandomizedTextProps) {
  const [animatedText, setAnimatedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const getRandomChar = useCallback(
    () =>
      lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    [],
  );

  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 60;
    const initialRandomDuration = 400;

    const generateRandomText = () =>
      text
        .split("")
        .map((char) => (char === " " ? " " : getRandomChar()))
        .join("");

    setAnimatedText(generateRandomText());

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText(
        (prevText) =>
          text.slice(0, i + 1) +
          prevText
            .slice(i + 1)
            .split("")
            .map((char) => (char === " " ? " " : getRandomChar()))
            .join(""),
      );
    }

    setIsComplete(true);
    if (onComplete) {
      setTimeout(onComplete, 800);
    }
  }, [text, getRandomChar, onComplete]);

  useEffect(() => {
    animateText();
  }, [animateText]);

  return (
    <div className="relative inline-block">
      <span
        className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight transition-all duration-500 ${
          isComplete ? "text-white" : "text-white/60"
        }`}
      >
        {animatedText}
      </span>
    </div>
  );
}

interface PageLoaderProps {
  onLoadingComplete: () => void;
}

export default function PageLoader({ onLoadingComplete }: PageLoaderProps) {
  const [stage, setStage] = useState<"text" | "logo" | "complete">("text");

  const handleTextComplete = useCallback(() => {
    setStage("logo");
  }, []);

  const handleLogoComplete = useCallback(() => {
    setTimeout(() => {
      setStage("complete");
      setTimeout(onLoadingComplete, 600);
    }, 1200);
  }, [onLoadingComplete]);

  useEffect(() => {
    if (stage === "logo") {
      handleLogoComplete();
    }
  }, [stage, handleLogoComplete]);

  return (
    <AnimatePresence mode="wait">
      {stage !== "complete" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950"
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <AnimatePresence mode="wait">
              {stage === "text" && (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <RandomizedText
                    text="EMPASS LAW"
                    onComplete={handleTextComplete}
                  />

                  {/* Subtle loading indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent max-w-xs"
                  />
                </motion.div>
              )}

              {stage === "logo" && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Logo */}
                  <div className="relative w-64 h-20 md:w-80 md:h-24">
                    <Image
                      src="/logo.png"
                      alt="Empass Law"
                      fill
                      className="object-contain brightness-0 invert"
                      priority
                    />
                  </div>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-6 text-sm tracking-[0.3em] uppercase text-stone-500"
                  >
                    Est. 1892 · London
                  </motion.p>

                  {/* Animated line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="mt-6 h-[1px] w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                    style={{ transformOrigin: "center" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Corner decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
