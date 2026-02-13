"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Database,
  FileText,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

interface Section {
  icon: typeof Shield;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
  highlight?: boolean;
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
    highlight: true,
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
  {
    icon: Eye,
    title: "Cookies",
    content: [
      "Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.",
      "For detailed information on the cookies we use and the purposes for which we use them, please see our Cookie Policy.",
    ],
  },
  {
    icon: FileText,
    title: "Changes to This Policy",
    content: [
      "Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by email.",
      "Please check back frequently to see any updates or changes to our privacy policy.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: [
      "Questions, comments, and requests regarding this privacy policy are welcome and should be addressed to info@empasslaw.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#2C4A6B] via-[#34547A] to-[#3D5F8A] text-white py-24 sm:py-32">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#00a3a3]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#00a3a3] uppercase">
                Legal Document
              </span>
              <div className="h-px w-8 bg-[#00a3a3]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Your privacy matters to us. This policy explains how we collect,
              use, and protect your personal information.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="p-6 sm:p-8 bg-blue-50 border-l-4 border-[#2C4A6B]">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#2C4A6B] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-bold text-gray-900 ">
                    Your Privacy is Protected
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to protecting and respecting your privacy.
                    This policy explains how we handle your personal data in
                    compliance with the Data Protection Act 2018 and GDPR.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-2xl font-bold text-[#2c5697] mb-6">
              Quick Navigation
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#2C4A6B] hover:shadow-md transition-all"
                >
                  <section.icon className="w-5 h-5 text-[#2C4A6B] flex-shrink-0" />
                  <span className="text-sm text-gray-700 group-hover:text-[#2C4A6B] transition-colors font-medium">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-16">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.05 }}
                className={`${section.highlight
                  ? "p-6 sm:p-8 bg-blue-50 border-l-4 border-[#2C4A6B] rounded-r-lg"
                  : ""
                  }`}
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-[#2C4A6B]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#2c5697]">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 text-gray-600">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="space-y-3">
                          <h3 className="text-lg font-semibold text-[#2c5697] mt-4">
                            {subsection.title}
                          </h3>
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#2C4A6B] flex-shrink-0 mt-1.5" />
                                <span className="text-gray-600 leading-relaxed">
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
                {sectionIndex < sections.length - 1 && !section.highlight && (
                  <div className="h-px w-full bg-gray-200 mt-12" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2C4A6B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2c5697]">
                    Privacy Questions?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For any questions about this privacy policy, please contact us at:
                  </p>
                  <a
                    href="mailto:info@empasslaw.com"
                    className="inline-flex items-center gap-2 text-[#2C4A6B] font-semibold hover:text-[#1e3a57] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@empasslaw.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section >

      {/* CTA */}
      < section className="py-20 bg-white" >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#2C4A6B] to-[#3D5F8A] rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have Questions About Your Privacy?
            </h2>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand how we protect your data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C4A6B] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}