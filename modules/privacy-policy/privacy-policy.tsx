"use client";

import { motion, useInView } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Database,
  FileText,
  Mail,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface Section {
  icon: typeof Shield;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
}

const lastUpdated = "January 2024";

const sections: Section[] = [
  {
    icon: Shield,
    title: "Our Commitment",
    content: [
      `Empass Law Limited ("We") are committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.`,
      "Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.empasslaw.com you are accepting and consenting to the practices described in this policy.",
      "For the purpose of the Data Protection Act 2018 (the Act), the data controller is Empass Law Limited.",
    ],
  },
  {
    icon: Database,
    title: "Information We Collect",
    content: ["We will collect and process the following data about you:"],
    subsections: [
      {
        title: "Information You Provide",
        items: [
          "Information you give us by filling in forms on our site or by corresponding with us by phone, email or otherwise",
          "Information provided when you register to use our site or subscribe to our service",
          "Details when you report a problem with our site",
          "This may include your name, address, email address, phone number, financial information, and personal description",
        ],
      },
      {
        title: "Information We Collect Automatically",
        items: [
          "Technical information including IP address, login information, browser type and version, time zone setting, and operating system",
          "Information about your visit including URLs, clickstream data, page interaction information, and methods used to browse",
          "Length of visits to certain pages and any phone numbers used to contact us",
        ],
      },
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: ["We use information held about you in the following ways:"],
    subsections: [
      {
        title: "Information You Provide",
        items: [
          "To carry out our obligations arising from any contracts entered into between you and us",
          "To provide you with information, products and services that you request from us",
          "To provide you with information about other goods and services we offer similar to those you have purchased or enquired about",
          "To notify you about changes to our service",
          "To ensure content from our site is presented in the most effective manner for you",
        ],
      },
      {
        title: "Information We Collect",
        items: [
          "To administer our site and for internal operations including troubleshooting and data analysis",
          "To improve our site and ensure content is presented effectively",
          "To allow you to participate in interactive features of our service",
          "As part of our efforts to keep our site safe and secure",
          "To measure the effectiveness of advertising and deliver relevant advertising to you",
          "To make suggestions and recommendations about goods or services that may interest you",
        ],
      },
    ],
  },
  {
    icon: Users,
    title: "Disclosure of Your Information",
    content: [
      "You agree that we have the right to share your personal information with:",
    ],
    subsections: [
      {
        title: "Internal Sharing",
        items: [
          "Any member of our group, including our subsidiaries and ultimate holding company as defined in section 1159 of the UK Companies Act 2006",
        ],
      },
      {
        title: "Selected Third Parties",
        items: [
          "Analytics and search engine providers that assist us in the improvement and optimization of our site",
          "Credit reference agencies for the purpose of assessing your credit score where this is a condition of us entering into a contract with you",
        ],
      },
      {
        title: "Legal Obligations",
        items: [
          "In the event that we sell or buy any business or assets, we may disclose your personal data to the prospective seller or buyer",
          "If Empass Law Limited or substantially all of its assets are acquired by a third party",
          "If we are under a duty to comply with any legal obligation, or to enforce our terms of use",
          "To protect the rights, property, or safety of Empass Law Limited, our customers, or others",
          "For the purposes of fraud protection and credit risk reduction",
        ],
      },
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "All information you provide to us is stored on our secure servers. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential.",
      "We ask you not to share a password with anyone. Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site.",
      "Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.",
    ],
  },
  {
    icon: FileText,
    title: "Your Rights",
    content: [
      "You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes.",
      "You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us at info@empasslaw.com.",
      "The Data Protection Act 2018 gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="bg-[#0A0F1C] text-white min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 lg:py-40 overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="absolute top-20 left-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 bg-[#00D9FF]/10 border border-[#00D9FF]/20">
              <Shield className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
                Legal Document
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
              Privacy Policy
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed mb-8">
              Your privacy matters to us. This policy explains how we collect,
              use, and protect your personal information.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>GDPR Compliant</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50">
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="relative py-16 bg-[#0D1425] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-2xl font-black mb-6 text-white/90">
              Quick Navigation
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 hover:border-[#00D9FF]/30 transition-all"
                >
                  <section.icon className="w-5 h-5 text-[#00D9FF] flex-shrink-0" />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {section.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/30 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-20">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="scroll-mt-32"
              >
                {/* Section Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-7 h-7 text-[#00D9FF]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                      {section.title}
                    </h2>
                    <div className="h-[2px] w-16 bg-[#00D9FF]" />
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-lg text-white/70 leading-relaxed pl-20"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-8 pl-20 mt-8">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="space-y-4">
                          <h3 className="text-xl font-bold text-white/90">
                            {subsection.title}
                          </h3>
                          <ul className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3 group"
                              >
                                <div className="w-1.5 h-1.5 bg-[#00D9FF] flex-shrink-0 mt-2.5" />
                                <span className="text-white/60 leading-relaxed group-hover:text-white/70 transition-colors">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Divider */}
                {sectionIndex < sections.length - 1 && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />
                )}
              </motion.div>
            ))}

            {/* Cookies Section */}
            <motion.div
              id="cookies"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-32"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                    Cookies
                  </h2>
                  <div className="h-[2px] w-16 bg-[#00D9FF]" />
                </div>
              </div>

              <div className="space-y-6 pl-20">
                <p className="text-lg text-white/70 leading-relaxed">
                  Our website uses cookies to distinguish you from other users
                  of our website. This helps us to provide you with a good
                  experience when you browse our website and also allows us to
                  improve our site.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  For detailed information on the cookies we use and the
                  purposes for which we use them, please see our Cookie Policy.
                </p>
              </div>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              id="changes"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-32"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                    Changes to This Policy
                  </h2>
                  <div className="h-[2px] w-16 bg-[#00D9FF]" />
                </div>
              </div>

              <div className="space-y-6 pl-20">
                <p className="text-lg text-white/70 leading-relaxed">
                  Any changes we make to our privacy policy in the future will
                  be posted on this page and, where appropriate, notified to you
                  by email.
                </p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Please check back frequently to see any updates or changes to
                  our privacy policy.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-32"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                    Contact Us
                  </h2>
                  <div className="h-[2px] w-16 bg-[#00D9FF]" />
                </div>
              </div>

              <div className="space-y-6 pl-20">
                <p className="text-lg text-white/70 leading-relaxed">
                  Questions, comments, and requests regarding this privacy
                  policy are welcome and should be addressed to:
                </p>
                <a
                  href="mailto:info@empasslaw.com"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] font-bold hover:bg-[#00D9FF]/20 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  info@empasslaw.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 sm:py-32 bg-[#0D1425] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6 text-white">
              Have Questions About Your Privacy?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Our team is here to help you understand how we protect your data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] text-white font-bold hover:bg-[#0088BB] transition-all"
              >
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
