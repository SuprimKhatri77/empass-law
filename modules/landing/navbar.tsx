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
  { label: "PRICING", href: "/pricing" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
];

const languages = ["EN", "DEUTSCH", "FRANÇAIS"];

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
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHomepage
            ? mobileMenuOpen
              ? "bg-white"
              : "bg-transparent"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-50">
              <Image
                src="/logo.png"
                alt="Empass Law"
                width={180}
                height={45}
                className={`h-11 w-auto transition-all duration-300 ${
                  isHomepage && !mobileMenuOpen
                    ? "brightness-0 invert"
                    : "brightness-100"
                }`}
                priority
              />
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

            <div className="flex lg:hidden   items-center gap-4">
              {/* <div className="relative hidden lg:block">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`flex items-center gap-2 px-3 py-2 text-[13px] font-medium transition-colors ${
                    isHomepage
                      ? "text-white/80 hover:text-white"
                      : "text-[#445566] hover:text-[#2c5697]"
                  }`}
                >
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
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <span>{currentLang}</span>
                  <svg
                    className={`w-3 h-3 transition-transform ${langMenuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 animate-fadeIn">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                          currentLang === lang
                            ? "bg-[#f0f4f8] text-[#2c5697] font-medium"
                            : "text-[#445566] hover:bg-gray-50"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div> */}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 relative z-50 w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  {/* Top line */}
                  <span
                    className={`w-full h-0.5 transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 rotate-45 translate-y-2"
                        : isHomepage
                          ? "bg-white rotate-0 translate-y-0"
                          : "bg-gray-800 rotate-0 translate-y-0"
                    }`}
                  />
                  {/* Middle line */}
                  <span
                    className={`w-full h-0.5 transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 opacity-0"
                        : isHomepage
                          ? "bg-white opacity-100"
                          : "bg-gray-800 opacity-100"
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`w-full h-0.5 transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "bg-gray-800 -rotate-45 -translate-y-2"
                        : isHomepage
                          ? "bg-white rotate-0 translate-y-0"
                          : "bg-gray-800 rotate-0 translate-y-0"
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
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-40 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6 overflow-y-auto">
          {/* Navigation Links */}
          <div className="space-y-1 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 text-[14px] font-medium tracking-wide rounded-lg transition-all duration-200 ${
                  activeLink === link.href
                    ? "bg-[#2c5697] text-white"
                    : "text-[#445566] hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher - Mobile */}
          {/* <div className="pt-6 mt-auto border-t border-gray-200">
            <p className="px-4 py-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Language
            </p>
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setCurrentLang(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-[14px] font-medium tracking-wide rounded-lg transition-all duration-200 ${
                    currentLang === lang
                      ? "bg-[#f0f4f8] text-[#2c5697]"
                      : "text-[#445566] hover:bg-gray-50 active:bg-gray-100"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
