"use client";

import { motion, useInView } from "framer-motion";
import {
  Cookie,
  Shield,
  BarChart3,
  Settings,
  Target,
  Info,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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

        <div className="absolute top-20 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 bg-[#00D9FF]/10 border border-[#00D9FF]/20">
              <Cookie className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
                Legal Document
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
              Cookie Policy
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed mb-8">
              Understanding how we use cookies to enhance your browsing
              experience and improve our website.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>Transparent Usage</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50">
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 bg-[#0D1425] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                <Info className="w-7 h-7 text-[#00D9FF]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  About Our Use of Cookies
                </h2>
                <div className="h-[2px] w-16 bg-[#00D9FF]" />
              </div>
            </div>

            <div className="space-y-6 pl-20">
              <p className="text-lg text-white/70 leading-relaxed">
                Our website uses cookies to distinguish you from other users of
                our website. This helps us to provide you with a good experience
                when you browse our website and also allows us to improve our
                site.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                By continuing to browse the site, you are agreeing to our use of
                cookies.
              </p>

              <div className="mt-8 p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <h3 className="text-xl font-bold text-white mb-3">
                  What is a Cookie?
                </h3>
                <p className="text-white/60 leading-relaxed">
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

      {/* Cookie Types Section */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              We use different types of cookies to enhance your experience and
              improve our services
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid gap-8">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-8 sm:p-10 bg-white/[0.02] border border-white/10 hover:border-[#00D9FF]/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D9FF]/20 transition-colors">
                      <cookie.icon className="w-8 h-8 text-[#00D9FF]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                        {cookie.title}
                      </h3>
                      <p className="text-lg text-white/70 leading-relaxed">
                        {cookie.description}
                      </p>
                    </div>
                  </div>

                  {/* Examples */}
                  {cookie.examples && (
                    <div className="mt-6 pl-22">
                      <h4 className="text-sm font-bold tracking-wider uppercase text-white/50 mb-4">
                        Examples:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cookie.examples.map((example, exIndex) => (
                          <div key={exIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#00D9FF] flex-shrink-0 mt-2" />
                            <span className="text-white/60 text-sm">
                              {example}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00D9FF] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Section */}
      <section className="relative py-20 bg-[#0D1425] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-7 h-7 text-[#00D9FF]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  Third-Party Cookies
                </h2>
                <div className="h-[2px] w-16 bg-[#00D9FF]" />
              </div>
            </div>

            <div className="space-y-6 pl-20">
              <p className="text-lg text-white/70 leading-relaxed">
                Please note that third parties (including, for example,
                advertising networks and providers of external services like web
                traffic analysis services) may also use cookies, over which we
                have no control.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                These cookies are likely to be analytical/performance cookies or
                targeting cookies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managing Cookies Section */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                <Settings className="w-7 h-7 text-[#00D9FF]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  Managing Your Cookies
                </h2>
                <div className="h-[2px] w-16 bg-[#00D9FF]" />
              </div>
            </div>

            <div className="space-y-6 pl-20">
              <p className="text-lg text-white/70 leading-relaxed">
                You can block cookies by activating the setting on your browser
                that allows you to refuse the setting of all or some cookies.
              </p>

              <div className="p-6 bg-white/[0.02] border border-white/10">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Important Notice
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      However, if you use your browser settings to block all
                      cookies (including essential cookies) you may not be able
                      to access all or parts of our site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-white/90 mb-4">
                  How to Manage Cookies in Your Browser:
                </h4>
                <div className="space-y-3">
                  {[
                    "Open your browser settings or preferences",
                    "Look for the privacy or security section",
                    "Find the cookies or site data settings",
                    "Choose your preferred cookie settings",
                    "Save your changes and restart your browser",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#00D9FF]">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-white/60 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
              Questions About Cookies?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              If you have any questions about how we use cookies, please don't
              hesitate to contact us.
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
                href="/privacy-policy"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold hover:bg-white/5 transition-all"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
