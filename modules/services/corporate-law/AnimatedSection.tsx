"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// ============================================================================
// HOOKS
// ============================================================================

/**
 * Hook to detect if user prefers reduced motion
 * Returns true if user has motion preference set to "reduce"
 */
const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ImageConfig {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g., "4/3", "16/9", "1/1" (default: "4/3")
  objectPosition?: string; // e.g., "center", "top", "bottom" (default: "center")
  overlay?: boolean; // Enable gradient overlay (default: false)
  overlayDirection?: "to-br" | "to-tr" | "to-b" | "to-r"; // Gradient direction
}

interface FloatingCard {
  title: string;
  value: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  icon?: React.ElementType;
}

interface KeyPoint {
  title: string;
  description: string;
  icon?: React.ElementType;
}

interface CallToAction {
  text: string;
  href: string;
  variant?: "primary" | "secondary"; // primary = filled, secondary = outlined
  icon?: React.ElementType;
}

interface AnimatedSectionProps {
  // Layout
  layout?: "single-column" | "image-left" | "image-right" | "stacked";
  className?: string;
  backgroundColor?: string; // Tailwind class or hex
  
  // Content
  badge?: string; // Small label above headline
  headline: string;
  subheadline?: string;
  paragraphs?: string[];
  keyPoints?: KeyPoint[];
  
  // Visuals
  images?: ImageConfig[];
  floatingCards?: FloatingCard[];
  
  // Actions
  ctas?: CallToAction[];
  
  // Animation settings
  animationDelay?: number; // Delay before animations start (ms)
  
  // Theming
  accentColor?: string; // Tailwind color class (e.g., "blue-500")
  textColor?: string; // Tailwind color class (default: "white")
}

// ============================================================================
// MAIN COMPONENT (Simplified - No Parallax)
// ============================================================================

const AnimatedSectionSimple: React.FC<AnimatedSectionProps> = ({
  layout = "image-right",
  className = "",
  backgroundColor = "bg-[#0A0F1C]",
  badge,
  headline,
  subheadline,
  paragraphs = [],
  keyPoints = [],
  images = [],
  floatingCards = [],
  ctas = [],
  animationDelay = 0,
  accentColor = "[#00D9FF]",
  textColor = "white",
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  // Refs for viewport detection
  const sectionRef = useRef<HTMLElement>(null);
  
  // Viewport detection for fade-in animations
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Animation variants - respects reduced motion
  const fadeInVariant = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const scaleInVariant = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const staggerDelay = (index: number) => {
    return prefersReducedMotion ? 0 : animationDelay + index * 0.1;
  };
  
  // ============================================================================
  // RENDER HELPERS
  // ============================================================================
  
  /**
   * Renders image with floating cards (no parallax)
   */
  const renderImage = (imageConfig: ImageConfig, index: number) => {
    const {
      src,
      alt,
      aspectRatio = "4/3",
      objectPosition = "center",
      overlay = false,
      overlayDirection = "to-br",
    } = imageConfig;
    
    return (
      <motion.div
        key={`image-${index}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={scaleInVariant}
        transition={{ duration: 0.6, delay: staggerDelay(index) }}
        className="relative overflow-hidden"
      >
        {/* Image container with aspect ratio */}
        <div
          className="relative bg-white/5 border border-white/10"
          style={{ aspectRatio }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover object-${objectPosition}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
          
          {/* Optional gradient overlay */}
          {overlay && (
            <div
              className={`absolute inset-0 bg-gradient-${overlayDirection} from-[#0A0F1C]/20 via-transparent to-[#0A0F1C]/40`}
            />
          )}
        </div>
        
        {/* Floating cards overlay */}
        {floatingCards.length > 0 && renderFloatingCards(floatingCards)}
        
        {/* Decorative corner accent */}
        <div className={`absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-${accentColor}/30`} />
      </motion.div>
    );
  };
  
  /**
   * Renders floating cards/badges over images
   */
  const renderFloatingCards = (cards: FloatingCard[]) => {
    const positionClasses = {
      "top-left": "top-4 left-4",
      "top-right": "top-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "bottom-right": "bottom-4 right-4",
    };
    
    return cards.map((card, idx) => {
      const Icon = card.icon;
      const position = card.position || "top-right";
      
      return (
        <motion.div
          key={`floating-card-${idx}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: staggerDelay(idx + 2) }}
          className={`absolute ${positionClasses[position]} bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 shadow-lg`}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className={`w-4 h-4 text-${accentColor}`} />}
            <div>
              <p className={`text-xs text-${textColor}/60 font-medium`}>{card.title}</p>
              <p className={`text-lg font-bold text-${textColor}`}>{card.value}</p>
            </div>
          </div>
        </motion.div>
      );
    });
  };
  
  /**
   * Renders text content section
   */
  const renderContent = () => {
    return (
      <div>
        {/* Badge */}
        {badge && (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.4, delay: staggerDelay(0) }}
            className="inline-block mb-6"
          >
            <span className={`px-6 py-2 border border-${accentColor}/20 bg-${accentColor}/5 text-${accentColor} text-xs font-bold tracking-widest uppercase`}>
              {badge}
            </span>
          </motion.div>
        )}
        
        {/* Headline */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariant}
          transition={{ duration: 0.5, delay: staggerDelay(1) }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-black text-${textColor} mb-6`}
        >
          {headline}
        </motion.h2>
        
        {/* Subheadline */}
        {subheadline && (
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.5, delay: staggerDelay(2) }}
            className={`text-xl sm:text-2xl text-${textColor}/70 font-bold mb-6`}
          >
            {subheadline}
          </motion.p>
        )}
        
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "12rem" } : {}}
          transition={{ duration: 0.6, delay: staggerDelay(3) }}
          className={`h-px bg-gradient-to-r from-${accentColor} via-${accentColor}/50 to-transparent mb-8`}
        />
        
        {/* Paragraphs */}
        {paragraphs.map((para, idx) => (
          <motion.p
            key={`para-${idx}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.5, delay: staggerDelay(4 + idx) }}
            className={`text-lg text-${textColor}/60 leading-relaxed mb-6`}
          >
            {para}
          </motion.p>
        ))}
        
        {/* Key Points */}
        {keyPoints.length > 0 && (
          <div className="space-y-4 mb-8">
            {keyPoints.map((point, idx) => {
              const Icon = point.icon || CheckCircle2;
              return (
                <motion.div
                  key={`point-${idx}`}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeInVariant}
                  transition={{ duration: 0.4, delay: staggerDelay(6 + idx) }}
                  className="flex items-start gap-3"
                >
                  <Icon className={`w-6 h-6 text-${accentColor} flex-shrink-0 mt-1`} />
                  <div>
                    <h4 className={`text-lg font-bold text-${textColor} mb-1`}>
                      {point.title}
                    </h4>
                    <p className={`text-sm text-${textColor}/50`}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        
        {/* Call to Actions */}
        {ctas.length > 0 && (
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariant}
            transition={{ duration: 0.5, delay: staggerDelay(8) }}
            className="flex flex-wrap gap-4"
          >
            {ctas.map((cta, idx) => {
              const Icon = cta.icon || ArrowRight;
              const isPrimary = cta.variant !== "secondary";
              
              return (
                <Link
                  key={`cta-${idx}`}
                  href={cta.href}
                  className={`
                    inline-flex items-center gap-2 font-bold px-8 py-4 transition-all duration-200 group
                    ${isPrimary 
                      ? `bg-[#4988C4] hover:bg-[#1C4D8D] text-${textColor}` 
                      : `border-2 border-${textColor}/20 hover:bg-${textColor}/5 text-${textColor}`
                    }
                  `}
                >
                  <span>{cta.text}</span>
                  <Icon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    );
  };
  
  // ============================================================================
  // LAYOUT RENDERING
  // ============================================================================
  
  /**
   * Determines grid layout based on layout prop
   */
  const getLayoutClasses = () => {
    switch (layout) {
      case "single-column":
        return "grid grid-cols-1 gap-12";
      case "image-left":
        return "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center";
      case "image-right":
        return "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center";
      case "stacked":
        return "flex flex-col gap-12";
      default:
        return "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center";
    }
  };
  
  /**
   * Determines order of content and images
   */
  const renderLayout = () => {
    const content = renderContent();
    const imageElements = images.map((img, idx) => renderImage(img, idx));
    
    if (layout === "single-column" || layout === "stacked") {
      return (
        <>
          {content}
          {imageElements}
        </>
      );
    }
    
    if (layout === "image-left") {
      return (
        <>
          <div className="space-y-8">{imageElements}</div>
          {content}
        </>
      );
    }
    
    // Default: image-right
    return (
      <>
        {content}
        <div className="space-y-8">{imageElements}</div>
      </>
    );
  };
  
  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  
  return (
    <section
      ref={sectionRef}
      className={`relative ${backgroundColor} py-20 sm:py-32 overflow-hidden ${className}`}
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      
      {/* Content container */}
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className={getLayoutClasses()}>
          {renderLayout()}
        </div>
      </div>
    </section>
  );
};

export default AnimatedSectionSimple;