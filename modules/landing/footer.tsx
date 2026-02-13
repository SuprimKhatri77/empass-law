"use client";

import Link from "next/link";
import Image from "next/image";
import { lawFirm } from "@/utils/details/details";

export default function Footer() {
  return (
    <footer className="bg-[#2c4a6e] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Discover More Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="w-25 h-25 relative flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Empass Law Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-[24px] lg:text-[32px] font-normal">
                Discover more about Empass Law
              </h3>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white text-[14px] font-medium border-b-2 border-white pb-0.5 hover:border-white/60 transition-colors whitespace-nowrap"
            >
              Learn more
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

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-wider mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-people"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-wider mb-4">
              SERVICES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/corporate-law"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services/litigation-and-adr"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Litigation & ADR
                </Link>
              </li>
              <li>
                <Link
                  href="/services/family-law"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services/employment-law"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Employment Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-wider mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/our-work"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold tracking-wider mb-4">
              CONTACT
            </h4>
            <div className="space-y-3 text-[14px] text-white/80">
              <p>{lawFirm.address}</p>
              <p>{lawFirm.contactNumber}</p>
              <p>{lawFirm.contactEmail}</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={`${lawFirm.linkedInLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`${lawFirm.instagramLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/60">
            <p>
              © {new Date().getFullYear()} Empass Law LLP – All rights
              reserved{" "}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
              <span>|</span>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <span>|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <span>|</span>
              <Link
                href="/use-policy"
                className="hover:text-white transition-colors"
              >
                Use Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
