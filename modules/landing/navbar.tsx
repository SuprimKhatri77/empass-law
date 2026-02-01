"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const pathname = usePathname();

  // Helper function to check if route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity }}
        className={`fixed top-0 left-0 right-0 z-70 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0F1C]/98 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            {/* Logo - Responsive sizing */}
            <Link href="/" className="relative group z-50 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative w-32 h-10 sm:w-40 sm:h-12 md:w-48 md:h-13 lg:w-52 lg:h-14"
              >
                <Image
                  src="/logo.png"
                  alt="Law Firm"
                  fill
                  className="object-contain invert"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Hidden on medium and below */}
            <div className="hidden xl:flex items-center gap-1 2xl:gap-2">
              {navItems.map((item, index) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-3 py-3 2xl:px-6 group"
                  >
                    <span
                      className={`relative z-10 text-xs 2xl:text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-[#4988C4]"
                          : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {/* {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[#4988C4]/10 to-[#7B2FFF]/10 border border-[#4988C4]/50"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )} */}

                    {/* Hover background */}
                    <AnimatePresence>
                      {hoveredIndex === index && !isActive && (
                        <motion.div
                          layoutId="navHover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="absolute inset-0 bg-gradient-to-r from-[#4988C4]/20 to-[#7B2FFF]/20 border border-[#4988C4]/30"
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Hidden on medium and below, responsive padding */}
            <div className="hidden xl:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative px-5 py-2.5 2xl:px-8 2xl:py-3.5 bg-[#4988C4] hover:bg-[#1C4D8D] text-white font-semibold overflow-hidden text-sm 2xl:text-base whitespace-nowrap"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  Get Started
                  <ArrowUpRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#7B2FFF] to-[#4988C4]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>

            {/* Mobile Menu Button - Shows on XL and below */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden relative z-50 p-2 sm:p-3 bg-white/5 border border-white/10 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Animated border line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4988C4] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      {/* Mobile Menu - Shows on XL and below */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#0A0F1C]/98 backdrop-blur-xl xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-40 w-[85%] max-w-sm bg-[#0D1425] border-l border-white/10 xl:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8">
                {/* Navigation Items */}
                <div className="space-y-1.5 sm:space-y-2 flex-1">
                  {navItems.map((item, index) => {
                    const isActive = isActiveRoute(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`group block relative p-3 sm:p-4 border transition-all ${
                            isActive
                              ? "border-[#4988C4]/50 bg-[#4988C4]/5"
                              : "border-white/5 hover:border-[#4988C4]/30"
                          }`}
                        >
                          <span
                            className={`text-base sm:text-lg md:text-xl transition-colors ${
                              isActive
                                ? "text-[#4988C4] font-semibold"
                                : "text-white/90 group-hover:text-white"
                            }`}
                          >
                            {item.label}
                          </span>
                          <ArrowUpRight
                            className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                              isActive
                                ? "text-[#4988C4]"
                                : "text-white/30 group-hover:text-[#4988C4] group-hover:translate-x-1 group-hover:-translate-y-3"
                            }`}
                          />

                          {/* Active indicator line */}
                          {isActive && (
                            <motion.div
                              layoutId="activeMobile"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-[#4988C4]"
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6,
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 sm:mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3 sm:py-4 text-center bg-[#4988C4] hover:bg-[#1C4D8D] text-white font-semibold text-sm sm:text-base transition-colors"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
