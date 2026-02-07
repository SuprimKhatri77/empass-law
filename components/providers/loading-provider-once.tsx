"use client";

import React, { useState, useEffect } from "react";
import PageLoader from "./page-loader";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProviderOnce({
  children,
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader === "true") {
      // Skip loader if already seen
      setIsLoading(false);
      setShowContent(true);
      return;
    }

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoadingComplete = () => {
    // Mark loader as seen in session storage
    sessionStorage.setItem("hasSeenLoader", "true");

    setIsLoading(false);
    document.body.style.overflow = "";

    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
