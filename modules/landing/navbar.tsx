"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "OUR PEOPLE", href: "/our-people" },
  { label: "SERVICES", href: "/services" },
  // { label: "PRICING", href: "/pricing" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
];

// const languages = ["EN", "DEUTSCH", "FRANÇAIS"];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isHomepage = pathname === "/";

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
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300  ${
          isHomepage
            ? mobileMenuOpen
              ? "bg-white"
              : "bg-black/30"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-27 py-5 items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-50">
              {isHomepage ? (
                <Image
                  src="/Empass-law.png"
                  alt="Empass Law"
                  width={200}
                  height={60}
                  className={`h-20 w-auto transition-all duration-300 ${
                    isHomepage && !mobileMenuOpen
                      ? "brightness-0 invert"
                      : "brightness-100"
                  }`}
                  priority
                />
              ) : (
                <Image
                  src="/logo.png"
                  alt="Empass Law"
                  width={200}
                  height={65}
                  className={`h-20 w-auto transition-all duration-300 ${
                    isHomepage && !mobileMenuOpen
                      ? "brightness-100"
                      : "brightness-100"
                  }`}
                  priority
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors relative group ${
                    isHomepage
                      ? activeLink === link.href
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : activeLink === link.href
                        ? "text-[#2c5697]"
                        : "text-[#445566] hover:text-[#2c5697]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform ${
                      isHomepage ? "bg-white" : "bg-[#2c5697]"
                    } ${
                      activeLink === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Language Selector & Mobile Menu */}

            <div className="flex lg:hidden items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 relative z-50 w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex items-center justify-center">
                  {/* Top line */}
                  <span
                    className={`absolute w-full h-0.5 transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 rotate-45"
                        : isHomepage
                          ? "bg-white -translate-y-2"
                          : "bg-gray-800 -translate-y-2"
                    }`}
                  />
                  {/* Middle line */}
                  <span
                    className={`absolute w-full h-0.5 transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 opacity-0"
                        : isHomepage
                          ? "bg-white opacity-100"
                          : "bg-gray-800 opacity-100"
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`absolute w-full h-0.5 transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 -rotate-45"
                        : isHomepage
                          ? "bg-white translate-y-2"
                          : "bg-gray-800 translate-y-2"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transform transition-all duration-500 ease-in-out overflow-y-auto ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="pt-32 pb-8 px-6 min-h-screen">
          {/* Navigation Links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-4 text-[15px] font-medium tracking-wide rounded-lg transition-all duration-300 transform ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } ${
                  activeLink === link.href
                    ? "bg-[#2c5697] text-white"
                    : "text-[#445566] hover:bg-gray-50 active:bg-gray-100"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
