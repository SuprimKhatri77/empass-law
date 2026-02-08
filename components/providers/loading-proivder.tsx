"use client";

import React, { useState, useEffect } from "react";
import PageLoader from "./page-loader";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  // Initialize as false to prevent a "flash" of loader on internal navigation
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasLoaded = sessionStorage.getItem("initial-loader-shown");

    if (!hasLoaded) {
      setIsLoading(true);
      setShowContent(false);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    // Mark as loaded in session storage
    sessionStorage.setItem("initial-loader-shown", "true");
    setIsLoading(false);
    
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