"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Ban,
  MessageSquare,
  FileText,
  Gavel,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Clock,
  Building2,
} from "lucide-react";
import { useRef } from "react";

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
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

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
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Hero Header */}
      <motion.div
        ref={headerRef}
        className="relative overflow-hidden border-b border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF] blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9FF] blur-[150px]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-[#00D9FF]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#00D9FF] px-4 py-2 border border-[#00D9FF]/20 bg-[#00D9FF]/5">
                Legal Policy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Acceptable Use Policy
            </h1>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              This policy outlines the terms and conditions for accessing and
              using our website. By continuing to use our services, you
              acknowledge and agree to these terms.
            </p>

            {/* Company Info Card */}
            <div className="bg-white/[0.02] border border-white/10 p-6 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-[#00D9FF]" />
                <span className="text-sm font-bold text-white/90">
                  Operated By
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/40 block mb-1">Company Name</span>
                  <span className="text-white/70">{companyInfo.name}</span>
                </div>
                <div>
                  <span className="text-white/40 block mb-1">
                    Registration Number
                  </span>
                  <span className="text-white/70">
                    {companyInfo.registration}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-white/40 block mb-1">
                    Registered Address
                  </span>
                  <span className="text-white/70">{companyInfo.address}</span>
                </div>
                <div>
                  <span className="text-white/40 block mb-1">VAT Number</span>
                  <span className="text-white/70">{companyInfo.vat}</span>
                </div>
                <div>
                  <span className="text-white/40 block mb-1">Website</span>
                  <a
                    href={`https://${companyInfo.website}`}
                    className="text-[#00D9FF] hover:underline flex items-center gap-1"
                  >
                    {companyInfo.website}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress Tracker */}
      <div className="sticky top-0 z-40 bg-[#0D1425]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-white/40">
              Reading Progress
            </span>
            <span className="text-xs font-bold text-[#00D9FF]">
              {acknowledgedSections.length} / {policySections.length} Sections
            </span>
          </div>
          <div className="h-1 bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-[#00D9FF]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="space-y-4">
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
              >
                <div
                  className={`
                  bg-white/[0.02] border transition-all duration-200
                  ${isExpanded ? "border-[#00D9FF]/30" : "border-white/10 hover:border-white/20"}
                `}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`
                        flex items-center justify-center w-12 h-12 transition-colors duration-200
                        ${isExpanded ? "text-[#00D9FF]" : "text-white/70 group-hover:text-[#00D9FF]"}
                      `}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {section.title}
                        </h3>
                        <p className="text-sm text-white/40">
                          {isExpanded
                            ? "Click to collapse"
                            : "Click to expand and read"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {isAcknowledged && (
                        <CheckCircle2 className="w-5 h-5 text-[#00D9FF]" />
                      )}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-white/40" />
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
                    <div className="px-6 sm:px-8 pb-8 border-t border-white/5">
                      <div className="pt-6 space-y-6">
                        {/* Main Content */}
                        {section.content.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-white/60 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {/* Subsections */}
                        {section.subsections && (
                          <div className="space-y-6 mt-8">
                            {section.subsections.map((subsection, subIdx) => (
                              <div
                                key={subIdx}
                                className="bg-white/[0.02] border border-white/5 p-6"
                              >
                                <h4 className="text-sm font-bold tracking-widest uppercase text-[#00D9FF] mb-4">
                                  {subsection.title}
                                </h4>
                                <ul className="space-y-3">
                                  {subsection.items.map((item, itemIdx) => (
                                    <li
                                      key={itemIdx}
                                      className="flex gap-3 text-white/60 leading-relaxed"
                                    >
                                      <span className="text-[#00D9FF] mt-1.5 block w-1 h-1 bg-[#00D9FF] shrink-0" />
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
                            className="mt-6 px-6 py-3 bg-[#00D9FF] hover:bg-[#00B8DD] text-[#0A0F1C] font-bold transition-colors duration-200 flex items-center gap-2 group"
                          >
                            <CheckCircle2 className="w-5 h-5" />I have read and
                            understood this section
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {acknowledgedSections.length === policySections.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-gradient-to-br from-[#00D9FF]/10 to-transparent border border-[#00D9FF]/20 p-8 sm:p-12 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-[#00D9FF] mx-auto mb-6" />
            <h3 className="text-2xl font-black text-white mb-4">
              Policy Acknowledgment Complete
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              You have reviewed all sections of our Acceptable Use Policy. By
              continuing to use our services, you confirm your acceptance of
              these terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#00D9FF] hover:bg-[#00B8DD] text-[#0A0F1C] font-bold transition-colors duration-200">
                Return to Home
              </button>
              <button className="px-8 py-4 border-2 border-white/20 hover:bg-white/5 text-white font-bold transition-colors duration-200">
                Contact Legal Team
              </button>
            </div>
          </motion.div>
        )}

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-white/40">
          <p>
            This policy may be updated from time to time. Please check regularly
            for changes.
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
    </div>
  );
}
