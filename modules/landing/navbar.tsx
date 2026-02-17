"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TEAM", href: "/our-people" },
  { label: "SERVICES", href: "/services" },
  { label: "CASES", href: "/our-work" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isHomepage = pathname === "/";

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-sm ${
          isHomepage
            ? scrolled
              ? "shadow-md"
              : "shadow-sm"
            : "border-b border-gray-200"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-27 py-5 items-center">
            {/* Logo with hover effect */}
            <Link
              href="/"
              className="flex-shrink-0 relative z-50 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/Empass-navbar.png"
                alt="Empass Law"
                width={200}
                height={65}
                className="h-20 w-auto transition-all duration-300 bg-transparent"
                priority
              />
            </Link>

            {/* Desktop Navigation with improved hover states */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`px-4 py-2 text-[13px] font-bold tracking-wide transition-all duration-300 rounded-xs  ${
                    activeLink === link.href
                      ? "text-[#0B2D72] bg-[#4ECDC4]"
                      : "text-[#0B2D72] hover:text-black hover:bg-[#4ECDC4]/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-5 relative flex items-center justify-center">
                  {/* Top line */}
                  <span
                    className={`absolute w-full h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 rotate-45"
                        : "bg-gray-800 -translate-y-2"
                    }`}
                  />
                  {/* Middle line */}
                  <span
                    className={`absolute w-full h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 opacity-0 scale-0"
                        : "bg-gray-800 opacity-100 scale-100"
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`absolute w-full h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 -rotate-45"
                        : "bg-gray-800 translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with smooth fade */}
      <div
        className={`fixed inset-0 bg-black z-30 lg:hidden transition-opacity duration-500 ${
          mobileMenuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transform transition-all duration-500 ease-out overflow-y-auto ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="pt-32 pb-8 px-6 min-h-screen">
          {/* Decorative header */}
          <div className="mb-8 pb-4 border-b border-gray-100">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Navigation
            </p>
          </div>

          {/* Navigation Links with staggered animation */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`block px-6 py-4 text-[15px] font-bold tracking-wide rounded-xl transition-all duration-300 transform active:scale-[0.98] ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } ${
                  activeLink === link.href
                    ? "bg-gradient-to-r from-[#2c5697] to-[#3d6cb0] text-white shadow-lg shadow-blue-500/20"
                    : "text-[#445566] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 active:bg-gray-200"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {activeLink === link.href && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Contact info at bottom */}
          <div
            className={`mt-12 pt-8 border-t border-gray-100 transition-all duration-700 delay-500 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-gray-500 mb-4">Get in touch</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#2c5697] font-semibold hover:gap-3 transition-all duration-300"
            >
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
