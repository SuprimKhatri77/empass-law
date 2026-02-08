import React from 'react';

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
      <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-4">
        {title}
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-amber-600 to-transparent"></div>
    </div>
    <div className="space-y-6 text-gray-300 leading-relaxed tracking-wide">
      {children}
    </div>
  </section>
);

const Subsection: React.FC<SubsectionProps> = ({ title, children }) => (
  <div className="pl-6 border-l border-stone-800">
    {title && (
      <h3 className="text-xl font-serif text-amber-600 mb-3 tracking-tight">
        {title}
      </h3>
    )}
    <div className="space-y-4">{children}</div>
  </div>
);

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 relative overflow-hidden">
      {/* Architectural Grid Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-600/20 bg-amber-600/5 mb-8">
              <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                Established
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight">
              Terms & Conditions
            </h1>
            
            <p className="text-gray-500 text-lg tracking-wide max-w-2xl mx-auto">
              Professional Legal Services Agreement
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Section title="Introduction" id="introduction">
              <p>
                Welcome to Empass Law. These Terms and Conditions ("Terms") govern your use of our website and the legal services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms. Please read them carefully.
              </p>
              <p>
                Empass Law is a trading name of Empass Law Limited, a company registered in England and Wales under company number 15755859. Our registered office is at 20-22 Wenlock Road, London, England, N1 7GU.
              </p>
            </Section>

            {/* Services */}
            <Section title="Services" id="services">
              <Subsection title="Scope of Services">
                <p>
                  Empass Law provides legal services in various practice areas, including but not limited to corporate law, commercial law, employment law, and dispute resolution. The specific services we provide to you will be outlined in our engagement letter or retainer agreement.
                </p>
              </Subsection>

              <Subsection title="Professional Standards">
                <p>
                  We are committed to providing high-quality legal services in accordance with the professional standards set by the Solicitors Regulation Authority (SRA) and other relevant regulatory bodies. All our solicitors are regulated by the SRA.
                </p>
              </Subsection>

              <Subsection title="No Guarantee of Outcome">
                <p>
                  While we strive to achieve the best possible outcome for our clients, we cannot guarantee specific results. The provision of legal services does not constitute a guarantee of success in any legal matter.
                </p>
              </Subsection>
            </Section>

            {/* Client Relationship */}
            <Section title="Client Relationship" id="client-relationship">
              <Subsection title="Engagement">
                <p>
                  A client relationship is established only when we have formally agreed to provide legal services to you, typically through an engagement letter or retainer agreement. Preliminary discussions or consultations do not create a client relationship unless specifically agreed.
                </p>
              </Subsection>

              <Subsection title="Conflicts of Interest">
                <p>
                  We conduct conflict checks before accepting instructions. If a conflict of interest arises during our engagement, we will notify you immediately and discuss the appropriate course of action, which may include terminating our services.
                </p>
              </Subsection>

              <Subsection title="Client Responsibilities">
                <p>
                  You agree to provide us with accurate, complete, and timely information necessary for us to provide legal services. You are responsible for making decisions regarding your legal matters based on our advice and guidance.
                </p>
              </Subsection>
            </Section>

            {/* Fees and Payment */}
            <Section title="Fees and Payment" id="fees">
              <Subsection title="Fee Structure">
                <p>
                  Our fees will be set out in our engagement letter or retainer agreement. We may charge fees on an hourly rate basis, fixed fee basis, or other agreed arrangement. All fees are exclusive of VAT unless otherwise stated.
                </p>
              </Subsection>

              <Subsection title="Disbursements">
                <p>
                  In addition to our fees, you will be responsible for paying disbursements (third-party costs) incurred in connection with your matter, such as court fees, expert fees, and search fees.
                </p>
              </Subsection>

              <Subsection title="Payment Terms">
                <p>
                  Payment of our invoices is due within 14 days of the invoice date unless otherwise agreed. We reserve the right to charge interest on overdue invoices at a rate of 4% above the Bank of England base rate.
                </p>
              </Subsection>

              <Subsection title="Retention of Lien">
                <p>
                  We reserve the right to exercise a lien over your documents and property in our possession until all outstanding fees and disbursements have been paid in full.
                </p>
              </Subsection>
            </Section>

            {/* Confidentiality and Data Protection */}
            <Section title="Confidentiality and Data Protection" id="confidentiality">
              <Subsection title="Confidentiality">
                <p>
                  We are committed to maintaining the confidentiality of all information you provide to us, subject to our legal and regulatory obligations. Information may be disclosed where required by law or with your consent.
                </p>
              </Subsection>

              <Subsection title="Data Protection">
                <p>
                  We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our Privacy Policy, available on our website, provides detailed information about how we collect, use, and protect your personal data.
                </p>
              </Subsection>

              <Subsection title="Information Security">
                <p>
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or destruction. However, we cannot guarantee absolute security of information transmitted electronically.
                </p>
              </Subsection>
            </Section>

            {/* Limitation of Liability */}
            <Section title="Limitation of Liability" id="liability">
              <Subsection title="Scope of Liability">
                <p>
                  Our liability to you for any loss or damage arising from our services is limited to the extent permitted by law and our professional indemnity insurance. We will not be liable for any indirect, consequential, or special losses.
                </p>
              </Subsection>

              <Subsection title="Professional Indemnity Insurance">
                <p>
                  We maintain professional indemnity insurance in accordance with the requirements of the Solicitors Regulation Authority. Details of our insurance coverage are available upon request.
                </p>
              </Subsection>

              <Subsection title="Time Limit for Claims">
                <p>
                  Any claim against us must be brought within six years from the date of the act or omission giving rise to the claim, or within three years from the date you became aware (or should reasonably have become aware) of the claim, whichever is earlier.
                </p>
              </Subsection>
            </Section>

            {/* Termination */}
            <Section title="Termination" id="termination">
              <Subsection title="Termination by Client">
                <p>
                  You may terminate our services at any time by giving us written notice. You will remain liable for fees and disbursements incurred up to the date of termination.
                </p>
              </Subsection>

              <Subsection title="Termination by Empass Law">
                <p>
                  We may terminate our services by giving you reasonable written notice, or immediately in certain circumstances such as non-payment of fees, failure to provide instructions, or where continuing to act would breach our professional obligations.
                </p>
              </Subsection>

              <Subsection title="Effects of Termination">
                <p>
                  Upon termination, we will provide you with all documents and property belonging to you, subject to payment of outstanding fees and disbursements. We may retain copies of documents for our records as required by law.
                </p>
              </Subsection>
            </Section>

            {/* Complaints and Dispute Resolution */}
            <Section title="Complaints and Dispute Resolution" id="complaints">
              <Subsection title="Complaints Procedure">
                <p>
                  If you are dissatisfied with our services, please contact us in writing. We have a formal complaints procedure in place to address your concerns promptly and fairly. Details of our complaints procedure are available upon request.
                </p>
              </Subsection>

              <Subsection title="Legal Ombudsman">
                <p>
                  If we are unable to resolve your complaint to your satisfaction, you may be able to refer the matter to the Legal Ombudsman. The Legal Ombudsman can be contacted at PO Box 6806, Wolverhampton, WV1 9WJ, or via their website at www.legalombudsman.org.uk.
                </p>
              </Subsection>

              <Subsection title="Regulatory Matters">
                <p>
                  We are regulated by the Solicitors Regulation Authority. If you have concerns about our conduct, you may contact the SRA at The Cube, 199 Wharfside Street, Birmingham, B1 1RN, or via their website at www.sra.org.uk.
                </p>
              </Subsection>
            </Section>

            {/* Website Use */}
            <Section title="Website Use" id="website">
              <Subsection title="Intellectual Property">
                <p>
                  All content on our website, including text, graphics, logos, and software, is the property of Empass Law Limited or our licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
                </p>
              </Subsection>

              <Subsection title="Website Accuracy">
                <p>
                  While we strive to ensure the information on our website is accurate and up-to-date, we do not warrant its completeness or accuracy. Website content is for general information purposes only and does not constitute legal advice.
                </p>
              </Subsection>

              <Subsection title="Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. The inclusion of links does not imply endorsement.
                </p>
              </Subsection>

              <Subsection title="Prohibited Use">
                <p>
                  You must not use our website in any way that causes damage to the website, impairs its availability, or is unlawful, fraudulent, or harmful. You must not use our website to transmit any malicious code or engage in unauthorized access.
                </p>
              </Subsection>
            </Section>

            {/* General Provisions */}
            <Section title="General Provisions" id="general">
              <Subsection title="Governing Law">
                <p>
                  These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction over any disputes arising from these Terms.
                </p>
              </Subsection>

              <Subsection title="Severability">
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </Subsection>

              <Subsection title="Entire Agreement">
                <p>
                  These Terms, together with our engagement letter and any other documents expressly referred to, constitute the entire agreement between you and Empass Law regarding the provision of legal services and supersede any prior agreements or understandings.
                </p>
              </Subsection>

              <Subsection title="Amendments">
                <p>
                  We reserve the right to amend these Terms at any time. Any changes will be posted on our website and will take effect immediately upon posting. Your continued use of our website or services after changes are posted constitutes acceptance of the amended Terms.
                </p>
              </Subsection>

              <Subsection title="No Waiver">
                <p>
                  Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or provision unless acknowledged and agreed to by us in writing.
                </p>
              </Subsection>
            </Section>

            {/* Contact Information */}
            <Section title="Contact Information" id="contact">
              <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-8">
                <p className="mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-amber-600">
                  <p>Empass Law Limited</p>
                  <p>20-22 Wenlock Road</p>
                  <p>London, N1 7GU</p>
                  <p>England</p>
                  <p className="pt-4">Company Number: 15755859</p>
                </div>
              </div>
            </Section>

            {/* Last Updated */}
            <div className="mt-20 pt-8 border-t border-stone-800 text-center">
              <p className="text-sm text-gray-600 tracking-wide">
                Last Updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;