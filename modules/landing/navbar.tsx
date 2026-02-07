"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", onEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-stone-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 relative w-32 h-9 md:w-40 md:h-11 z-10"
              aria-label="Empass Law home"
            >
              <Image
                src="/logo.png"
                alt=""
                fill
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden xl:flex items-center gap-1"
              aria-label="Main"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all relative group ${
                    isActive(item.href)
                      ? scrolled
                        ? "text-stone-900"
                        : "text-white"
                      : scrolled
                        ? "text-stone-600 hover:text-stone-900"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        scrolled ? "bg-amber-600" : "bg-white"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <a
                href="tel:+442071234567"
                className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${
                  scrolled
                    ? "text-stone-700 hover:text-stone-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden 2xl:inline">+44 20 7123 4567</span>
              </a>
              <Link
                href="/contact"
                className={`px-6 py-2.5 font-semibold text-sm transition-all ${
                  scrolled
                    ? "bg-stone-900 text-white hover:bg-stone-800"
                    : "bg-white text-stone-900 hover:bg-stone-100"
                }`}
              >
                Get started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className={`xl:hidden p-2 -mr-2 transition-colors ${
                scrolled
                  ? "text-stone-700 hover:text-stone-900"
                  : "text-white hover:text-white/80"
              }`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden fixed inset-0 z-40 bg-stone-950/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="xl:hidden fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="relative w-32 h-9"
                  >
                    <Image
                      src="/logo.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-stone-700"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-1 mb-8" aria-label="Mobile">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-3 px-4 rounded-lg text-base font-medium transition-all ${
                        isActive(item.href)
                          ? "bg-stone-100 text-stone-900"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Contact */}
                <div className="space-y-3 pt-6 border-t border-stone-200">
                  <a
                    href="tel:+442071234567"
                    className="flex items-center gap-3 text-stone-700 hover:text-stone-900"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+44 20 7123 4567</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-4 text-center bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
