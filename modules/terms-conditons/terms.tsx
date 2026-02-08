import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

interface SubsectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section id={id} className="mb-16 scroll-mt-8">
    <div className="relative mb-8">
      <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">
        {title}
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-transparent" />
    </div>

    <div className="space-y-6 text-stone-600 leading-relaxed tracking-wide">
      {children}
    </div>
  </section>
);

const Subsection: React.FC<SubsectionProps> = ({ title, children }) => (
  <div className="pl-6 border-l border-stone-200">
    {title && (
      <h3 className="text-xl font-serif text-amber-600 mb-3 tracking-tight">
        {title}
      </h3>
    )}
    <div className="space-y-4 text-stone-600">{children}</div>
  </div>
);

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        {/* Hero */}
        <header className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-8">
              <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                Established
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-tight">
              Terms & Conditions
            </h1>

            <p className="text-stone-500 text-lg tracking-wide max-w-2xl mx-auto">
              Professional Legal Services Agreement
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <Section title="Introduction" id="introduction">
              <p>
                Welcome to Empass Law. These Terms and Conditions govern your use
                of our website and legal services. By accessing our website or
                engaging our services, you agree to these Terms.
              </p>
              <p>
                Empass Law is a trading name of Empass Law Limited, registered in
                England and Wales (Company No. 15755859).
              </p>
            </Section>

            <Section title="Services" id="services">
              <Subsection title="Scope of Services">
                <p>
                  We provide legal services across multiple practice areas as
                  outlined in your engagement letter or retainer agreement.
                </p>
              </Subsection>

              <Subsection title="Professional Standards">
                <p>
                  Our solicitors operate in accordance with Solicitors
                  Regulation Authority (SRA) standards.
                </p>
              </Subsection>

              <Subsection title="No Guarantee of Outcome">
                <p>
                  Legal services do not guarantee specific outcomes or results.
                </p>
              </Subsection>
            </Section>

            <Section title="Client Relationship" id="client-relationship">
              <Subsection title="Engagement">
                <p>
                  A client relationship begins only upon formal written
                  agreement.
                </p>
              </Subsection>

              <Subsection title="Conflicts of Interest">
                <p>
                  Conflict checks are conducted prior to accepting
                  instructions.
                </p>
              </Subsection>

              <Subsection title="Client Responsibilities">
                <p>
                  Clients must provide accurate and timely information.
                </p>
              </Subsection>
            </Section>

            <Section title="Fees and Payment" id="fees">
              <Subsection title="Fee Structure">
                <p>
                  Fees are agreed in advance and are exclusive of VAT unless
                  stated otherwise.
                </p>
              </Subsection>

              <Subsection title="Disbursements">
                <p>
                  Third-party costs may be payable in addition to legal fees.
                </p>
              </Subsection>

              <Subsection title="Payment Terms">
                <p>
                  Invoices are payable within 14 days unless otherwise agreed.
                </p>
              </Subsection>

              <Subsection title="Retention of Lien">
                <p>
                  We may retain documents until outstanding fees are settled.
                </p>
              </Subsection>
            </Section>

            <Section title="Confidentiality and Data Protection" id="confidentiality">
              <Subsection title="Confidentiality">
                <p>
                  Client information is kept confidential subject to legal
                  obligations.
                </p>
              </Subsection>

              <Subsection title="Data Protection">
                <p>
                  Personal data is processed in accordance with UK GDPR.
                </p>
              </Subsection>

              <Subsection title="Information Security">
                <p>
                  We take reasonable steps to protect electronic information.
                </p>
              </Subsection>
            </Section>

            <Section title="Contact Information" id="contact">
              <div className="bg-stone-100 border border-stone-200 p-8 shadow-sm">
                <p className="mb-4 text-stone-600">
                  For questions regarding these Terms, contact:
                </p>

                <div className="space-y-2 text-amber-700 font-medium">
                  <p>Empass Law Limited</p>
                  <p>20–22 Wenlock Road</p>
                  <p>London, N1 7GU</p>
                  <p>England</p>
                  <p className="pt-4">Company Number: 15755859</p>
                </div>
              </div>
            </Section>

            <div className="mt-20 pt-8 border-t border-stone-200 text-center">
              <p className="text-sm text-stone-400 tracking-wide">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;