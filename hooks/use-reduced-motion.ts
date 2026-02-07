"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Prefer minimal animation on mobile (performance) and when user prefers reduced motion.
 */
export function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(true); // default true to avoid flash of motion

  useEffect(() => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(isMobile || prefersReduced);

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const prefMql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduce(window.innerWidth < MOBILE_BREAKPOINT || prefMql.matches);
    };
    mql.addEventListener("change", update);
    prefMql.addEventListener("change", update);
    return () => {
      mql.removeEventListener("change", update);
      prefMql.removeEventListener("change", update);
    };
  }, []);

  return reduce;
}
