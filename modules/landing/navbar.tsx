"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname],
  );

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex-shrink-0 relative w-28 h-8 md:w-36 md:h-10"
              aria-label="Empass Law home"
            >
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </Link>

            <nav
              className="hidden xl:flex items-center gap-1"
              aria-label="Main"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-stone-900"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden xl:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors"
              >
                Get started
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="xl:hidden p-2 -mr-2 text-stone-700 hover:text-stone-900"
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
      </header>

      <div
        id="mobile-menu"
        className={`xl:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-stone-900/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl border-l border-stone-200 transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav
            className="pt-24 pb-8 px-6 flex flex-col gap-1"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 py-4 text-center bg-stone-900 text-white font-semibold rounded-lg"
            >
              Get started
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
