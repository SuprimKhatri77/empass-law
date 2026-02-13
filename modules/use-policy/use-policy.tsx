"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Ban,
  MessageSquare,
  FileText,
  Gavel,
  CheckCircle2,
  ChevronDown,
  Clock,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface PolicySection {
  id: string;
  title: string;
  icon: any;
  content: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
}

interface CompanyInfo {
  name: string;
  registration: string;
  address: string;
  vat: string;
  website: string;
}

const companyInfo: CompanyInfo = {
  name: "Empass Law Limited",
  registration: "13778949",
  address: "Lansdowne House, 57 Berkeley Square, London, England, W1J 6ER",
  vat: "411 8564 08",
  website: "www.empasslaw.com",
};

const policySections: PolicySection[] = [
  {
    id: "introduction",
    title: "Introduction & Acceptance",
    icon: Shield,
    content: [
      "This acceptable use policy sets out the terms between you and us under which you may access our website www.empasslaw.com (our site).",
      "This acceptable use policy applies to all users of, and visitors to, our site.",
      "Your use of our site means that you accept, and agree to abide by, all the policies in this acceptable use policy, which supplement our terms of website use.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited Uses",
    icon: Ban,
    content: [
      "You may use our site only for lawful purposes. You may not use our site:",
    ],
    subsections: [
      {
        title: "Legal & Regulatory Compliance",
        items: [
          "In any way that breaches any applicable local, national or international law or regulation",
          "In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect",
        ],
      },
      {
        title: "Safety & Protection",
        items: [
          "For the purpose of harming or attempting to harm minors in any way",
          "To send, knowingly receive, upload, download, use, or re-use any material that does not comply with our content standards",
        ],
      },
      {
        title: "Communications",
        items: [
          "To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam)",
        ],
      },
      {
        title: "System Security",
        items: [
          "To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware",
        ],
      },
    ],
  },
  {
    id: "restrictions",
    title: "Additional Restrictions",
    icon: AlertTriangle,
    content: ["You also agree:"],
    subsections: [
      {
        title: "Content & Access",
        items: [
          "Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of our terms of website use",
          "Not to access without authority, interfere with, damage or disrupt any part of our site",
          "Not to access without authority any equipment or network on which our site is stored",
          "Not to interfere with any software used in the provision of our site",
          "Not to interfere with any equipment or network or software owned or used by any third party",
        ],
      },
    ],
  },
  {
    id: "interactive",
    title: "Interactive Services",
    icon: MessageSquare,
    content: [
      "We may from time to time provide interactive services on our site, including, without limitation: chat rooms and bulletin boards.",
      "Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated and what form of moderation is used (including whether it is human or technical).",
    ],
    subsections: [
      {
        title: "Risk Assessment & Moderation",
        items: [
          "We will do our best to assess any possible risks for users (and in particular, for children) from third parties when they use any interactive service",
          "We are under no obligation to oversee, monitor or moderate any interactive service we provide",
          "We expressly exclude our liability for any loss or damage arising from the use of any interactive service by a user in contravention of our content standards",
        ],
      },
      {
        title: "Minors & Parental Consent",
        items: [
          "The use of any of our interactive services by a minor is subject to the consent of their parent or guardian",
          "We advise parents who permit their children to use an interactive service that it is important that they communicate with their children about their safety online",
          "Minors who are using any interactive service should be made aware of the potential risks to them",
        ],
      },
    ],
  },
  {
    id: "content-standards",
    title: "Content Standards",
    icon: FileText,
    content: [
      "These content standards apply to any and all material which you contribute to our site (contributions), and to any interactive services associated with it.",
      "You must comply with the spirit and the letter of the following standards. The standards apply to each part of any contribution as well as to its whole.",
    ],
    subsections: [
      {
        title: "Contributions MUST",
        items: [
          "Be accurate (where they state facts)",
          "Be genuinely held (where they state opinions)",
          "Comply with applicable law in the UK and in any country from which they are posted",
        ],
      },
      {
        title: "Contributions MUST NOT",
        items: [
          "Contain any material which is defamatory of any person",
          "Contain any material which is obscene, offensive, hateful or inflammatory",
          "Promote sexually explicit material",
          "Promote violence",
          "Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age",
          "Infringe any copyright, database right or trade mark of any other person",
          "Be likely to deceive any person",
          "Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence",
          "Promote any illegal activity",
          "Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety",
          "Be likely to harass, upset, embarrass, alarm or annoy any other person",
          "Be used to impersonate any person, or to misrepresent your identity or affiliation with any person",
          "Give the impression that they emanate from us, if this is not the case",
          "Advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse",
        ],
      },
    ],
  },
  {
    id: "enforcement",
    title: "Suspension & Termination",
    icon: Gavel,
    content: [
      "We will determine, in our discretion, whether there has been a breach of this acceptable use policy through your use of our site.",
      "When a breach of this policy has occurred, we may take such action as we deem appropriate.",
      "Failure to comply with this acceptable use policy constitutes a material breach of the terms of use upon which you are permitted to use our site.",
    ],
    subsections: [
      {
        title: "Potential Actions",
        items: [
          "Immediate, temporary or permanent withdrawal of your right to use our site",
          "Immediate, temporary or permanent removal of any posting or material uploaded by you to our site",
          "Issue of a warning to you",
          "Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach",
          "Further legal action against you",
          "Disclosure of such information to law enforcement authorities as we reasonably feel is necessary",
        ],
      },
      {
        title: "Liability Exclusion",
        items: [
          "We exclude liability for actions taken in response to breaches of this acceptable use policy",
          "The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "Policy Changes",
    icon: Clock,
    content: [
      "We may revise this acceptable use policy at any time by amending this page.",
      "You are expected to check this page from time to time to take notice of any changes we make, as they are legally binding on you.",
      "Some of the provisions contained in this acceptable use policy may also be superseded by provisions or notices published elsewhere on our site.",
    ],
  },
];

export default function AcceptableUsePolicy() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "introduction",
  ]);
  const [acknowledgedSections, setAcknowledgedSections] = useState<string[]>(
    [],
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const acknowledgeSection = (sectionId: string) => {
    if (!acknowledgedSections.includes(sectionId)) {
      setAcknowledgedSections((prev) => [...prev, sectionId]);
    }
  };

  const progress = (acknowledgedSections.length / policySections.length) * 100;

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
                Legal Policy
              </span>
              <div className="h-px w-8 bg-[#00a3a3]"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Acceptable Use Policy
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8">
              This policy outlines the terms and conditions for accessing and
              using our website. By continuing to use our services, you
              acknowledge and agree to these terms.
            </p>

            {/* Company Info Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  Operated By
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/60 block mb-1">Company Name</span>
                  <span className="text-white font-medium">
                    {companyInfo.name}
                  </span>
                </div>
                <div>
                  <span className="text-white/60 block mb-1">
                    Registration Number
                  </span>
                  <span className="text-white font-medium">
                    {companyInfo.registration}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-white/60 block mb-1">
                    Registered Address
                  </span>
                  <span className="text-white font-medium">
                    {companyInfo.address}
                  </span>
                </div>
                <div>
                  <span className="text-white/60 block mb-1">VAT Number</span>
                  <span className="text-white font-medium">
                    {companyInfo.vat}
                  </span>
                </div>
                <div>
                  <span className="text-white/60 block mb-1">Website</span>
                  <span className="text-white font-medium">
                    {companyInfo.website}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRESS TRACKER */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
              Reading Progress
            </span>
            <span className="text-xs font-bold text-[#2C4A6B]">
              {acknowledgedSections.length} / {policySections.length} Sections
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#2C4A6B] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* POLICY SECTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {policySections.map((section, index) => {
              const isExpanded = expandedSections.includes(section.id);
              const isAcknowledged = acknowledgedSections.includes(section.id);
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-white border rounded-lg transition-all duration-200 ${
                    isExpanded
                      ? "border-[#2C4A6B] shadow-lg"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-200 ${
                          isExpanded
                            ? "bg-[#2C4A6B] text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2c5697] mb-1">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {isExpanded
                            ? "Click to collapse"
                            : "Click to expand and read"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {isAcknowledged && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Section Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-8 border-t border-gray-200">
                      <div className="pt-6 space-y-6">
                        {/* Main Content */}
                        {section.content.map((paragraph, idx) => (
                          <p key={idx} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}

                        {/* Subsections */}
                        {section.subsections && (
                          <div className="space-y-6 mt-8">
                            {section.subsections.map((subsection, subIdx) => (
                              <div
                                key={subIdx}
                                className="bg-gray-50 border border-gray-200 rounded-lg p-6"
                              >
                                <h4 className="text-sm font-bold tracking-wider uppercase text-[#2C4A6B] mb-4">
                                  {subsection.title}
                                </h4>
                                <ul className="space-y-3">
                                  {subsection.items.map((item, itemIdx) => (
                                    <li
                                      key={itemIdx}
                                      className="flex gap-3 text-gray-600 leading-relaxed"
                                    >
                                      <CheckCircle2 className="w-4 h-4 text-[#2C4A6B] flex-shrink-0 mt-1" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Acknowledge Button */}
                        {!isAcknowledged && (
                          <button
                            onClick={() => acknowledgeSection(section.id)}
                            className="mt-6 px-6 py-3 bg-[#2C4A6B] hover:bg-[#1e3a57] text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-5 h-5" />I have read and
                            understood this section
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLETION CTA */}
      {acknowledgedSections.length === policySections.length && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 sm:p-12 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2c5697] mb-4">
                Policy Acknowledgment Complete
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                You have reviewed all sections of our Acceptable Use Policy. By
                continuing to use our services, you confirm your acceptance of
                these terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2C4A6B] hover:bg-[#1e3a57] text-white font-semibold rounded-lg transition-colors"
                >
                  Return to Home
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#2C4A6B] text-[#2C4A6B] hover:bg-gray-100 font-semibold rounded-lg transition-colors"
                >
                  Contact Legal Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* LAST UPDATED */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
            <p>
              This policy may be updated from time to time. Please check
              regularly for changes.
            </p>
            <p className="mt-2">
              Last reviewed:{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}