"use client";

import { motion, useInView } from "framer-motion";
import {
  FileText,
  Shield,
  AlertTriangle,
  Link as LinkIcon,
  Globe,
  Info,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Gavel,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface Section {
  icon: typeof FileText;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
  highlight?: boolean;
}

const lastUpdated = "January 2024";
const companyDetails = {
  name: "Empass Law Limited",
  number: "13778949",
  address: "Lansdowne House, 57 Berkeley Square, London, England, W1J 6ER",
  vat: "411 8564 08",
  email: "info@empasslaw.com",
  phone: "+44 (0) 20 3916 5054",
};

const sections: Section[] = [
  {
    icon: Info,
    title: "What's in These Terms?",
    content: [
      "These terms tell you the rules for using our website www.empasslaw.com (our site).",
    ],
    highlight: true,
  },
  {
    icon: Shield,
    title: "Who We Are and How to Contact Us",
    content: [
      `www.empasslaw.com is a site operated by ${companyDetails.name} ("We"). We are registered in England and Wales under company number ${companyDetails.number} and have our registered office at ${companyDetails.address}.`,
      `Our VAT number is ${companyDetails.vat}. We are a limited company.`,
      `To contact us, please email ${companyDetails.email} or telephone our customer service line on ${companyDetails.phone}.`,
    ],
  },
  {
    icon: CheckCircle2,
    title: "By Using Our Site You Accept These Terms",
    content: [
      "By using our site, you confirm that you accept these terms of use and that you agree to comply with them.",
      "If you do not agree to these terms, you must not use our site.",
      "We recommend that you print a copy of these terms for future reference.",
    ],
  },
  {
    icon: FileText,
    title: "Other Terms That May Apply to You",
    content: [
      "These terms of use refer to the following additional terms, which also apply to your use of our site:",
    ],
    subsections: [
      {
        title: "Related Policies",
        items: [
          "Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us",
          "Our Acceptable Use Policy, which sets out the permitted uses and prohibited uses of our site",
          "Our Cookie Policy, which sets out information about the cookies on our site",
        ],
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: "We May Make Changes",
    content: [
      "We amend these terms from time to time. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time.",
      "We may update and change our site from time to time to reflect changes to our services, our users' needs and our business priorities.",
    ],
  },
  {
    icon: Globe,
    title: "We May Suspend or Withdraw Our Site",
    content: [
      "Our site is made available free of charge.",
      "We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our site for business and operational reasons.",
      "We will try to give you reasonable notice of any suspension or withdrawal.",
      "You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.",
    ],
  },
  {
    icon: FileText,
    title: "How You May Use Material on Our Site",
    content: [
      "We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.",
    ],
    subsections: [
      {
        title: "Permitted Uses",
        items: [
          "You may print off one copy, and may download extracts, of any page(s) from our site for your personal use",
          "You may draw the attention of others within your organisation to content posted on our site",
        ],
      },
      {
        title: "Prohibited Uses",
        items: [
          "You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way",
          "You must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text",
          "Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged",
          "You must not use any part of the content on our site for commercial purposes without obtaining a licence to do so from us or our licensors",
        ],
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Do Not Rely on Information on This Site",
    content: [
      "The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.",
      "Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up to date.",
    ],
    highlight: true,
  },
  {
    icon: LinkIcon,
    title: "We Are Not Responsible for Websites We Link To",
    content: [
      "Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.",
      "We have no control over the contents of those sites or resources.",
    ],
  },
  {
    icon: Shield,
    title: "Our Responsibility for Loss or Damage",
    content: [
      "We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.",
    ],
    subsections: [
      {
        title: "If You Are a Business User",
        items: [
          "We exclude all implied conditions, warranties, representations or other terms that may apply to our site or any content on it",
          "We will not be liable for loss of profits, sales, business, or revenue",
          "We will not be liable for business interruption",
          "We will not be liable for loss of anticipated savings",
          "We will not be liable for loss of business opportunity, goodwill or reputation",
          "We will not be liable for any indirect or consequential loss or damage",
        ],
      },
      {
        title: "If You Are a Consumer User",
        items: [
          "We only provide our site for domestic and private use. You agree not to use our site for any commercial or business purposes",
          "We have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity",
          "If defective digital content that we have supplied damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation",
        ],
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Viruses and Security",
    content: [
      "We do not guarantee that our site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform to access our site.",
      "You should use your own virus protection software.",
      "You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful.",
      "You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site.",
      "By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities.",
    ],
  },
  {
    icon: LinkIcon,
    title: "Rules About Linking to Our Site",
    content: [
      "You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.",
    ],
    subsections: [
      {
        title: "Linking Requirements",
        items: [
          "You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists",
          "You must not establish a link to our site in any website that is not owned by you",
          "Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page",
          "We reserve the right to withdraw linking permission without notice",
          "The website in which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy",
        ],
      },
    ],
  },
  {
    icon: Gavel,
    title: "Which Country's Laws Apply?",
    content: [
      "If you are a consumer, please note that these terms of use, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.",
      "If you are a business, these terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
];

export default function TermsPage() {
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

        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 bg-[#00D9FF]/10 border border-[#00D9FF]/20">
              <FileText className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
                Legal Document
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
              Terms & Conditions
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed mb-8">
              Please read these terms carefully before using our site. By using
              www.empasslaw.com, you agree to be bound by these terms.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>Legally Binding</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50">
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="relative py-16 bg-[#0D1425] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="p-8 bg-[#00D9FF]/5 border-l-4 border-[#00D9FF]">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-black text-white mb-2 uppercase tracking-wider">
                    Please Read Carefully
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    These terms and conditions govern your use of our website.
                    By accessing or using our site, you acknowledge that you
                    have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
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
                id={section.title
                  .toLowerCase()
                  .replace(/[^\w\s]/g, "")
                  .replace(/\s+/g, "-")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: sectionIndex * 0.05 }}
                className="scroll-mt-32"
              >
                {/* Section Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className={`w-14 h-14 ${section.highlight ? "bg-[#00D9FF]/20 border-2 border-[#00D9FF]" : "bg-[#00D9FF]/10 border border-[#00D9FF]/20"} flex items-center justify-center flex-shrink-0`}
                  >
                    <section.icon
                      className={`w-7 h-7 ${section.highlight ? "text-[#00D9FF]" : "text-[#00D9FF]"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                      {section.title}
                    </h2>
                    <div className="h-[2px] w-16 bg-[#00D9FF]" />
                  </div>
                </div>

                {/* Main Content */}
                <div
                  className={`space-y-6 ${section.highlight ? "p-6 bg-white/[0.02] border-l-2 border-[#00D9FF]/50" : ""}`}
                >
                  <div className="space-y-6 pl-20">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-lg text-white/70 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-8 pl-20 mt-8">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="space-y-4">
                          <h3 className="text-xl font-bold text-white/90 flex items-center gap-2">
                            <div className="w-1 h-6 bg-[#00D9FF]" />
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
          </div>
        </div>
      </section>

      {/* Company Details Card */}
      <section className="relative py-20 bg-[#0D1425] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl font-black text-white mb-8">
              Company Information
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/10">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/50 mb-3">
                  Registered Name
                </h3>
                <p className="text-white font-medium">{companyDetails.name}</p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/50 mb-3">
                  Company Number
                </h3>
                <p className="text-white font-medium">
                  {companyDetails.number}
                </p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10 sm:col-span-2">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/50 mb-3">
                  Registered Address
                </h3>
                <p className="text-white font-medium">
                  {companyDetails.address}
                </p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/50 mb-3">
                  VAT Number
                </h3>
                <p className="text-white font-medium">{companyDetails.vat}</p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10">
                <h3 className="text-sm font-bold tracking-wider uppercase text-white/50 mb-3">
                  Contact
                </h3>
                <p className="text-white font-medium mb-2">
                  {companyDetails.email}
                </p>
                <p className="text-white font-medium">{companyDetails.phone}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6 text-white">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              If you have any questions regarding these terms and conditions,
              please get in touch.
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
