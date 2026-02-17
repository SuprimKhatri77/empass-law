"use client";

import Link from "next/link";
import Image from "next/image";
import { lawFirm } from "@/utils/details/details";

export default function Footer() {
  return (
    <footer className="bg-[#0B2D72] text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="w-32 h-32 sm:w-40 sm:h-40 relative mb-6">
              <Image
                src="/Empass-footer.png"
                alt="Empass Law Logo"
                fill
                className="object-contain"
              />
            </div>
            {/* <p className="text-sm sm:text-[15px] leading-relaxed mb-6">
              Expert legal guidance delivered with clarity, care and precision.
            </p> */}
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={`${lawFirm.linkedInLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* <a
                href={`${lawFirm.instagramLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs sm:text-[16px] font-bold tracking-wider mb-4 sm:mb-6 /90">
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-people"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-[16px] font-bold tracking-wider mb-4 sm:mb-6 /90">
              SERVICES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/corporate-law"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services/litigation-and-adr"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Litigation & ADR
                </Link>
              </li>
              <li>
                <Link
                  href="/services/family-law"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services/employment-law"
                  className="text-sm sm:text-[16px] font-bold transition-colors"
                >
                  Employment Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-[16px] font-bold tracking-wider mb-4 sm:mb-6 /90">
              CONTACT
            </h4>
            <div className="space-y-3 text-sm sm:text-[16px] font-bold">
              <p className="leading-relaxed">{lawFirm.address}</p>
              <p>
                <a
                  href={`tel:${lawFirm.contactNumber}`}
                  className="hover: transition-colors"
                >
                  {lawFirm.contactNumber}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${lawFirm.contactEmail}`}
                  className="hover: transition-colors break-all"
                >
                  {lawFirm.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-[13px] /60">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Empass Law. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/terms"
                className="hover: transition-colors whitespace-nowrap"
              >
                Terms
              </Link>
              <span className="/30">|</span>
              <Link
                href="/privacy-policy"
                className="hover: transition-colors whitespace-nowrap"
              >
                Privacy
              </Link>
              <span className="/30">|</span>
              <Link
                href="/cookies"
                className="hover: transition-colors whitespace-nowrap"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
