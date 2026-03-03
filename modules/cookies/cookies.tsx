"use client";

import { motion } from "framer-motion";
import {
  Cookie,
  Shield,
  BarChart3,
  Settings,
  Target,
  Info,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

interface CookieType {
  icon: typeof Shield;
  title: string;
  description: string;
  examples?: string[];
}

const lastUpdated = "January 2024";

const cookieTypes: CookieType[] = [
  {
    icon: Shield,
    title: "Strictly Necessary Cookies",
    description:
      "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.",
    examples: [
      "Authentication cookies for secure login",
      "Shopping cart functionality",
      "E-billing services",
      "Security and site integrity",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytical/Performance Cookies",
    description:
      "They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
    examples: [
      "Visitor counting and tracking",
      "Page navigation analysis",
      "User behavior patterns",
      "Site performance metrics",
    ],
  },
  {
    icon: Settings,
    title: "Functionality Cookies",
    description:
      "These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).",
    examples: [
      "User recognition on return visits",
      "Personalized content delivery",
      "Language and region preferences",
      "Customized user experience",
    ],
  },
  {
    icon: Target,
    title: "Targeting Cookies",
    description:
      "These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.",
    examples: [
      "Visit and browsing history",
      "Clicked links tracking",
      "Interest-based advertising",
      "Third-party ad targeting",
    ],
  },
];

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Understanding how we use cookies to enhance your browsing
              experience and improve our website.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Transparent Usage</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-[#2C4A6B]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2c5697] mb-2">
                  About Our Use of Cookies
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Our website uses cookies to distinguish you from other users of
                our website. This helps us to provide you with a good experience
                when you browse our website and also allows us to improve our
                site.
              </p>
              <p className="leading-relaxed">
                By continuing to browse the site, you are agreeing to our use of
                cookies.
              </p>

              <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#2C4A6B] rounded-r-lg">
                <h3 className="text-lg font-bold text-[#2c5697] mb-3">
                  What is a Cookie?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A cookie is a small file of letters and numbers that we store
                  on your browser or the hard drive of your computer if you
                  agree. Cookies contain information that is transferred to your
                  computer's hard drive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COOKIE TYPES */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2c5697] mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies to enhance your experience and
              improve our services
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="group bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:border-[#2C4A6B] hover:shadow-lg transition-[box-shadow,border-color] duration-300 ease-out"
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2C4A6B]/10 transition-colors">
                    <cookie.icon className="w-7 h-7 text-[#2C4A6B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2c5697] mb-3">
                      {cookie.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {cookie.description}
                    </p>
                  </div>
                </div>

                {/* Examples */}
                {cookie.examples && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-4">
                      Examples:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {cookie.examples.map((example, exIndex) => (
                        <div key={exIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#2C4A6B] flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">
                            {example}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THIRD PARTY COOKIES */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-[#2C4A6B]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2c5697] mb-2">
                  Third-Party Cookies
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Please note that third parties (including, for example,
                advertising networks and providers of external services like web
                traffic analysis services) may also use cookies, over which we
                have no control.
              </p>
              <p className="leading-relaxed">
                These cookies are likely to be analytical/performance cookies or
                targeting cookies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MANAGING COOKIES */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-[#2C4A6B]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2c5697] mb-2">
                  Managing Your Cookies
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                You can block cookies by activating the setting on your browser
                that allows you to refuse the setting of all or some cookies.
              </p>

              <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Important Notice
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      However, if you use your browser settings to block all
                      cookies (including essential cookies) you may not be able
                      to access all or parts of our site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#2c5697] mb-6">
                  How to Manage Cookies in Your Browser:
                </h4>
                <div className="space-y-4">
                  {[
                    "Open your browser settings or preferences",
                    "Look for the privacy or security section",
                    "Find the cookies or site data settings",
                    "Choose your preferred cookie settings",
                    "Save your changes and restart your browser",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#2C4A6B] flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-600 pt-1 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#2C4A6B] to-[#3D5F8A] rounded-2xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Questions About Cookies?
            </h2>

            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about how we use cookies, please don't
              hesitate to contact us.
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
                href="/privacy-policy"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}