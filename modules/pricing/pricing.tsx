"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Building2,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  Info,
  ArrowRight,
  AlertTriangle,
  Landmark,
  Globe,
  Scale,
} from "lucide-react";
import Link from "next/link";

interface FeeItem {
  label: string;
  price: string;
  note?: string;
}

export default function PricingPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

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

        <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 bg-[#00D9FF]/10 border border-[#00D9FF]/20">
              <FileText className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs font-bold tracking-widest text-[#00D9FF] uppercase">
                Transparent Pricing
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
              Our Pricing
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed mb-8">
              Clear, transparent pricing for all our legal services. Fixed fees
              available with flexible payment options.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-2 text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>No Hidden Fees</span>
              </div>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>Fixed Fee Options</span>
              </div>
              <div className="w-px h-4 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2 text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>Flexible Payments</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Services */}
      <section className="relative py-20 sm:py-32 bg-[#0D1425]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
              Property Services
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Comprehensive conveyancing services for residential property
              purchases
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Freehold Property */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleSection(0)}
                  className="w-full p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all text-left"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088BB] flex items-center justify-center flex-shrink-0">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-2">
                        Purchase of Freehold Residential Property
                      </h3>
                      <p className="text-white/60">
                        Our fees cover all work required to complete the
                        purchase of your new home, including dealing with
                        registration at the Land Registry and Stamp Duty Land
                        Tax (Stamp Duty) payment.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedSection === 0 ? (
                        <ChevronUp className="w-6 h-6 text-[#00D9FF]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white/40" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedSection === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-white/10"
                  >
                    <div className="p-8 space-y-8">
                      {/* Fees */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          Conveyancer's Fees and Disbursements
                        </h4>
                        <div className="space-y-3">
                          {[
                            {
                              label: "Legal Fee",
                              price: "£800 - £4,000",
                              note: "Depending on purchase price, location and complexity - fixed fee agreed before work commences",
                            },
                            {
                              label: "Search Fees",
                              price: "TBC",
                              note: "Depending on local authority and whether personal or official searches are carried out",
                            },
                            {
                              label: "HM Land Registry Fee",
                              price: "Variable",
                              note: "See www.gov.uk/guidance/hm-land-registry-registration-services-fees",
                            },
                            {
                              label: "Electronic Money Transfer Fee",
                              price: "£20 - £40",
                            },
                            { label: "VAT", price: "Payable at current rate" },
                          ].map((fee, i) => (
                            <div
                              key={i}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-4 bg-white/[0.02] border border-white/5 gap-2"
                            >
                              <div className="flex-1">
                                <span className="text-white font-medium block">
                                  {fee.label}
                                </span>
                                {fee.note && (
                                  <p className="text-sm text-white/50 mt-1">
                                    {fee.note}
                                  </p>
                                )}
                              </div>
                              <span className="text-[#00D9FF] font-bold whitespace-nowrap">
                                {fee.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Disbursements Info */}
                      <div className="p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-white mb-2">
                              About Disbursements
                            </h4>
                            <p className="text-white/70 text-sm leading-relaxed">
                              Disbursements are costs related to your matter
                              that are payable to third parties, such as Land
                              Registry fees. We handle the payment of
                              disbursements on your behalf to ensure a smoother
                              process.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stamp Duty */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          Stamp Duty or Land Tax (on purchase)
                        </h4>
                        <p className="text-white/70 leading-relaxed">
                          This depends on the purchase price of your property.
                          You can calculate the amount you will need to pay by
                          using HMRC's website or if the property is located in
                          Wales by using the Welsh Revenue Authority's website.
                        </p>
                      </div>

                      {/* Timeline */}
                      <div className="p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-5 h-5 text-[#00D9FF]" />
                          <h4 className="font-bold text-white">
                            How Long Will My House Purchase Take?
                          </h4>
                        </div>
                        <p className="text-white/70 leading-relaxed mb-3">
                          How long it will take from your offer being accepted
                          until you can move in to your house will depend on a
                          number of factors. The average process takes between
                          6-12 weeks.
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed">
                          It can be quicker or slower, depending on the parties
                          in the chain. For example, if you are a first time
                          buyer, purchasing a new build property with a mortgage
                          in principle, it could take 12 weeks. However, if you
                          are buying a leasehold property that requires an
                          extension of the lease, this can take significantly
                          longer, between 3 and 6 months. In such a situation
                          additional charges would apply.
                        </p>
                      </div>

                      {/* Stages */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          Stages of the Process
                        </h4>
                        <p className="text-white/60 mb-6 text-sm">
                          The precise stages involved in the purchase of a
                          residential property vary according to the
                          circumstances. However, below are the key stages:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            "Take your instructions and give you initial advice",
                            "Check finances are in place to fund purchase and contact lender's solicitors if needed",
                            "Receive and advise on contract documents",
                            "Carry out searches",
                            "Obtain further planning documentation if required",
                            "Make any necessary enquiries of seller's solicitor",
                            "Give you advice on all documents and information received",
                            "Go through conditions of mortgage offer with you",
                            "Send final contract to you for signature",
                            "Agree completion date (date from which you own the property)",
                            "Exchange contracts and notify you that this has happened",
                            "Arrange for all monies needed to be received from lender and you",
                            "Complete purchase",
                            "Deal with payment of Stamp Duty/Land Tax",
                            "Deal with application for registration at Land Registry",
                          ].map((stage, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 bg-white/[0.02]"
                            >
                              <div className="w-6 h-6 bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-[#00D9FF]">
                                  {i + 1}
                                </span>
                              </div>
                              <span className="text-sm text-white/70">
                                {stage}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Leasehold Property */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleSection(1)}
                  className="w-full p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all text-left"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088BB] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-2">
                        Purchase of Leasehold Residential Property
                      </h3>
                      <p className="text-white/60">
                        Our fees cover all work required to complete the
                        purchase of your new home, including dealing with
                        registration at the Land Registry and payment of Stamp
                        Duty or Land Tax.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedSection === 1 ? (
                        <ChevronUp className="w-6 h-6 text-[#00D9FF]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white/40" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedSection === 1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-white/10"
                  >
                    <div className="p-8 space-y-8">
                      {/* Fees */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          Conveyancer's Fees and Disbursements
                        </h4>
                        <div className="space-y-3">
                          {[
                            {
                              label: "Legal Fee",
                              price: "£800 - £4,000",
                              note: "Depending on purchase price, location and complexity - fixed fee agreed before work commences",
                            },
                            {
                              label: "Search Fees",
                              price: "TBC",
                              note: "Depending on local authority and whether personal or official searches are carried out",
                            },
                            {
                              label: "HM Land Registry Fee",
                              price: "Variable",
                              note: "See www.gov.uk/guidance/hm-land-registry-registration-services-fees",
                            },
                            {
                              label: "Electronic Money Transfer Fee",
                              price: "£20 - £40",
                            },
                            { label: "VAT", price: "Payable at current rate" },
                          ].map((fee, i) => (
                            <div
                              key={i}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-4 bg-white/[0.02] border border-white/5 gap-2"
                            >
                              <div className="flex-1">
                                <span className="text-white font-medium block">
                                  {fee.label}
                                </span>
                                {fee.note && (
                                  <p className="text-sm text-white/50 mt-1">
                                    {fee.note}
                                  </p>
                                )}
                              </div>
                              <span className="text-[#00D9FF] font-bold whitespace-nowrap">
                                {fee.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Anticipated Disbursements */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          Anticipated Disbursements*
                        </h4>
                        <div className="space-y-3 mb-4">
                          {[
                            {
                              label: "Notice of Transfer Fee",
                              price: "£50 - £150",
                              note: "This fee is set out in the lease",
                            },
                            {
                              label: "Notice of Charge Fee",
                              price: "£50 - £150",
                              note: "If the property is to be mortgaged - set out in the lease",
                            },
                            {
                              label: "Deed of Covenant Fee",
                              price: "£50 - £150",
                              note: "Provided by the management company for the property",
                            },
                            {
                              label: "Certificate of Compliance Fee",
                              price: "£50 - £150",
                              note: "To be confirmed upon receipt of the lease",
                            },
                          ].map((fee, i) => (
                            <div
                              key={i}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-4 bg-white/[0.02] border border-white/5 gap-2"
                            >
                              <div className="flex-1">
                                <span className="text-white font-medium block">
                                  {fee.label}
                                </span>
                                {fee.note && (
                                  <p className="text-sm text-white/50 mt-1">
                                    {fee.note}
                                  </p>
                                )}
                              </div>
                              <span className="text-[#00D9FF] font-bold whitespace-nowrap">
                                {fee.price}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-4 h-4 text-[#00D9FF] flex-shrink-0 mt-1" />
                            <p className="text-sm text-white/60 leading-relaxed">
                              *These fees vary from property to property and can
                              on occasion be significantly more than the ranges
                              given above. We can give you an accurate figure
                              once we have sight of your specific documents.
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Info className="w-4 h-4 text-[#00D9FF] flex-shrink-0 mt-1" />
                            <p className="text-sm text-white/60 leading-relaxed">
                              You should also be aware that ground rent and
                              service charge are likely to apply throughout your
                              ownership of the property. We will confirm the
                              ground rent and the anticipated service charge as
                              soon as we receive this information.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Disbursements Info */}
                      <div className="p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                        <h4 className="font-bold text-white mb-2">
                          Disbursements
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          Disbursements are costs related to your matter that
                          are payable to third parties, such as search fees. We
                          handle the payment of the disbursements on your behalf
                          to ensure a smoother process. There are certain
                          disbursements which will be set out in the individual
                          lease relating to the Property. We will update you on
                          the specific fees upon receipt and review of the lease
                          from the seller's solicitors.
                        </p>
                      </div>

                      {/* Our Fee Assumes */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">
                          Our Fee Assumes That:
                        </h4>
                        <div className="space-y-2">
                          {[
                            "This is a standard transaction and that no unforeseen matters arise including for example (but not limited to) a defect in title which requires remedying prior to completion or the preparation of additional documents ancillary to the main transaction",
                            "This is the assignment of an existing lease and is not the grant of a new lease",
                            "The transaction is concluded in a timely manner and no unforeseen complication arise",
                            "All parties to the transaction are co-operative and there is no unreasonable delay from third parties providing documentation",
                            "No indemnity policies are required. Additional disbursements may apply if indemnity policies are required",
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 bg-white/[0.02]"
                            >
                              <span className="text-[#00D9FF] font-bold flex-shrink-0">
                                {String.fromCharCode(97 + i)}.
                              </span>
                              <span className="text-sm text-white/70">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employment Law */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
              Employment Law Fees
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Expert representation for unfair and wrongful dismissal claims
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 bg-white/[0.02] space-y-8"
            >
              {/* Hourly Rate */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088BB] flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-3">
                    Unfair Dismissal and Wrongful Dismissal Claims
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Our hourly rate for dealing with unfair dismissal and/or
                    wrongful dismissal claims on behalf of clients is{" "}
                    <span className="text-[#00D9FF] font-bold">
                      £300 plus VAT
                    </span>
                    .
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We will discuss funding options with you when we first speak
                    to you, checking whether you have 'before the event
                    insurance' in any household or motor vehicle insurance you
                    may have, or an external source of funding available through
                    union membership or employer organisation.
                  </p>
                </div>
              </div>

              {/* Funding Options */}
              <div className="p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <h4 className="font-bold text-white mb-3">
                  Alternative Funding Options
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  We will also consider with you the possibility of a fixed fee
                  or damages based agreement (DBA), depending upon the
                  circumstances of your case. (A DBA is sometimes termed a 'no
                  win no fee' agreement). If we consider that your case is
                  suitable for this and we agree a DBA with you then this will
                  mean that we will only charge you a fee if we recover damages
                  (compensation) on your behalf, our fee being based on an
                  agreed percentage of those damages recovered for you.
                </p>
              </div>

              {/* Example Range of Costs */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Example Range of Costs
                </h4>
                <p className="text-white/60 mb-6 text-sm">
                  Our pricing for bringing or defending claims for unfair or
                  wrongful dismissal (stages 1 to 5 below):
                </p>
                <div className="space-y-4">
                  {[
                    {
                      level: "Simple Case",
                      price: "£2,500 - £4,500",
                      desc: "Typically where there is only up to one preliminary hearing and a final ET hearing of up to one day",
                      vat: "Excluding VAT",
                    },
                    {
                      level: "Medium Complexity Case",
                      price: "£4,500 - £7,500",
                      desc: "Typically where there is only up to one preliminary hearing and a final ET hearing of several days as a result of the number of witnesses and/or complexity of the evidence or legal basis",
                      vat: "Excluding VAT",
                    },
                    {
                      level: "High Complexity Case",
                      price: "£7,500 - £12,500",
                      desc: "This would be relatively rare and involving multiple additional issues such as discrimination claim(s) on the basis of race, gender or disability etc and a final hearing lasting at least several days",
                      vat: "Excluding VAT",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6 bg-white/[0.02] border border-white/5"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                        <h5 className="text-lg font-bold text-white">
                          {item.level}
                        </h5>
                        <span className="text-[#00D9FF] font-bold text-xl">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mb-1 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-white/40 text-xs">{item.vat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Factors */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Additional Factors Which Could Make a Case More Complex
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "If it is necessary to make or defend applications to amend claims or to provide further information about an existing claim",
                    "Defending claims that are brought by litigants in person",
                    "Making or defending a costs application",
                    "Complex preliminary issues such as whether the claimant is disabled (if this is not agreed by the parties)",
                    "The number of witnesses and documents",
                    "If it is an automatic unfair dismissal claim e.g. if the employee is contending he/she was dismissed after 'whistle blowing' on the employer",
                    "Allegations of discrimination which are linked to the dismissal",
                  ].map((factor, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white/[0.02]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#00D9FF] flex-shrink-0 mt-2" />
                      <span className="text-sm text-white/70">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disbursements */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Disbursements
                </h4>
                <p className="text-white/60 mb-4 text-sm">
                  Disbursements are costs related to your matter that are
                  payable to third parties, such as any expert report fees. We
                  handle the payment of the disbursements on your behalf to
                  ensure a smoother process.
                </p>
                <div className="p-4 bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <span className="text-white font-medium block">
                        Counsel's Fees
                      </span>
                      <p className="text-sm text-white/50 mt-1">
                        Depending on experience of the advocate - for attending
                        a Tribunal Hearing (including preparation)
                      </p>
                    </div>
                    <span className="text-[#00D9FF] font-bold whitespace-nowrap">
                      £600 - £3,000 per day
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Stages */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Summary of Key Stages
                </h4>
                <p className="text-white/60 mb-6 text-sm">
                  The fees set out above cover all of the work in relation to
                  the following key stages of a claim:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Taking your initial instructions, reviewing the papers and advising you on merits and likely compensation",
                    "Entering into pre-claim conciliation where this is mandatory to explore whether a settlement can be reached",
                    "Preparing claim or response",
                    "Reviewing and advising on claim or response from other party",
                    "Exploring settlement and negotiating settlement throughout the process",
                    "Preparing or considering a schedule of loss",
                    "Preparing for (and attending) a Preliminary Hearing",
                    "Exchanging documents with the other party and agreeing a bundle of documents",
                    "Taking witness statements, drafting statements and agreeing their content with witnesses",
                    "Preparing bundle of documents",
                    "Reviewing and advising on the other party's witness statements",
                    "Agreeing a list of issues, a chronology and/or cast list",
                    "Preparation and attendance at Final Hearing, including instructions to Counsel",
                  ].map((stage, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white/[0.02]"
                    >
                      <div className="w-6 h-6 bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-[#00D9FF]">
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-sm text-white/70">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#00D9FF]" />
                  <h4 className="font-bold text-white">
                    How Long Will My Matter Take?
                  </h4>
                </div>
                <p className="text-white/70 leading-relaxed">
                  The time that it takes from taking your initial instructions
                  to the final resolution of your matter depends largely on the
                  stage at which your case is resolved. If a settlement is
                  reached during pre-claim conciliation, your case is likely to
                  take in the region of two to four weeks. If your claim
                  proceeds to a Final Hearing, your case is likely to take
                  between four to twelve months. This is just an estimate and we
                  will of course be able to give you a more accurate timescale
                  once we have more information and as the matter progresses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immigration Services */}
      <section className="relative py-20 sm:py-32 bg-[#0D1425]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
              Immigration Services
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Comprehensive immigration law services with transparent pricing
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/[0.02] border border-white/10"
            >
              <p className="text-white/70 leading-relaxed mb-4">
                At Empass Law we represent a wide range of clients in a variety
                of circumstances. Generally we charge according to the amount of
                time spent on a given matter. However, we are often able to
                offer our clients fixed-fees in many cases. This will usually
                include all attendances, written and telephone correspondence
                and preparation in order to complete the agreed matter to a
                certain stage.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                VAT is charged where applicable for residents of the United
                Kingdom or European Union (receiving services here). Our fees do
                not include disbursements which are costs related to your matter
                that are payable to third parties, such as Home Office
                application, Immigration Health Surcharge (NHS), biometric,
                HMCTS/court, counsel/barrister, postage, printing, search and
                expert fees.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  service: "Consultation (typically 1 hour)",
                  price: "£150 - £250",
                },
                { service: "One-off Help", price: "£400" },
                { service: "Visit Visa Application", price: "£500 - £750" },
                { service: "British Citizenship", price: "£600 - £1,500" },
                {
                  service: "British Citizenship Review",
                  price: "£1,000 - £2,500",
                },
                { service: "Business Immigration Advice", price: "£750" },
                {
                  service: "Appeal to the First-tier Tribunal",
                  price: "£2,000 - £3,000",
                  note: "Excluding counsel's fees",
                },
                {
                  service: "Appeal to the Upper Tribunal on a point of law",
                  price: "£2,000 - £3,000",
                  note: "Excluding counsel's fees",
                },
                {
                  service: "Judicial Review Application",
                  price: "£3,000 - £4,000",
                  note: "Excluding counsel's fees",
                },
                {
                  service:
                    "Family Application for Entry Clearance or Leave to Remain",
                  price: "£1,500 - £2,000",
                },
                { service: "EU Applications", price: "£1,000 - £1,500" },
                { service: "Asylum Application", price: "£1,000 - £3,000" },
                {
                  service: "Asylum and Deportation Appeals",
                  price: "£2,000 - £5,000",
                  note: "Excluding counsel's fees",
                },
                {
                  service: "Long Residence Application",
                  price: "£1,000 - £2,000",
                },
                { service: "Tier 1 (Investor)", price: "£8,000 - £12,000" },
                {
                  service:
                    "Tier 1 (Start-up), (Innovator), Sole Representative of an Overseas Business",
                  price: "£4,000 - £8,000",
                },
                { service: "Tier 2 Sponsor Licence", price: "£3,000 - £5,000" },
                {
                  service: "Tier 2 (General) Worker Application",
                  price: "£1,000 - £1,500",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="p-6 bg-white/[0.02] border border-white/5 hover:border-[#00D9FF]/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-1">
                        {item.service}
                      </h3>
                      {item.note && (
                        <p className="text-xs text-white/40">{item.note}</p>
                      )}
                    </div>
                    <span className="text-[#00D9FF] font-bold whitespace-nowrap">
                      + VAT {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/70 space-y-2">
                    <p>
                      The above is a non-exhaustive list and does not cover all
                      matters that we will engage with but rather those which
                      are most common.
                    </p>
                    <p>
                      We will usually accept instalments and/or agree a smaller
                      fixed fee to allow us to deal with a particular part of
                      your case such as submitting an appeal or making
                      representations.
                    </p>
                    <p>
                      A standard service will usually be where we agree to
                      prepare an application on reasonable notice prior to a
                      given deadline or agreed timescale, although this will
                      also depend on receiving documents and instructions in a
                      timely fashion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/10">
                <h4 className="font-bold text-white mb-3">
                  Factors Affecting Fees
                </h4>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  More complicated matters may attract higher fees. Relevant
                  factors may include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "The particular immigration history",
                    "The number of previous refusals",
                    "Number of dependants",
                    "The amount of evidence required",
                    "The legal points involved",
                    "Level of urgency",
                  ].map((factor, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#00D9FF] flex-shrink-0 mt-2" />
                      <span className="text-sm text-white/70">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="relative py-20 sm:py-32 bg-[#0A0F1C]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center">
              Hourly Rates
            </h2>
            <p className="text-center text-white/60 mb-12">
              Where a fixed-fee has not been agreed, fees will be charged
              according to hourly rates as follows:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: "Partner", rate: "£350" },
                { role: "Associate", rate: "£275" },
                { role: "Solicitor/Legal Executive", rate: "£250" },
                { role: "Trainee Solicitor/Paralegal", rate: "£150" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                >
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.role}
                  </h3>
                  <p className="text-3xl font-black text-[#00D9FF] mb-1">
                    {item.rate}
                  </p>
                  <p className="text-xs text-white/40">+ VAT per hour</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 bg-[#0D1425] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6 text-white">
              Need a Personalized Quote?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Contact us today for a free consultation and detailed quote
              tailored to your specific legal needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] text-white font-bold hover:bg-[#0088BB] transition-all"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
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
