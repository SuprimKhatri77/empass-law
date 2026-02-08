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
      <div className="h-px w-24 bg-linear-to-r from-amber-600 to-transparent"></div>
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

const PrivacyPolicy: React.FC = () => {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

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
              Privacy Policy
            </h1>
            
            <p className="text-gray-500 text-lg tracking-wide max-w-2xl mx-auto">
              Protecting Your Personal Information
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Section title="Introduction" id="introduction">
              <p>
                Empass Law Limited ("We") are committed to protecting and respecting your privacy. This policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
              </p>
              <p>
                By visiting www.empasslaw.com you are accepting and consenting to the practices described in this policy. For the purpose of the Data Protection Act 2018 (the Act), the data controller is Empass Law Limited.
              </p>
            </Section>

            {/* Information We Collect */}
            <Section title="Information We Collect From You" id="information-collected">
              <p className="text-white font-medium mb-4">
                We will collect and process the following data about you:
              </p>

              <Subsection title="Information You Give Us">
                <p>
                  This is information about you that you give us by filling in forms on our site www.empasslaw.com (our site) or by corresponding with us by phone, e-mail or otherwise. It includes information you provide when you register to use our site or subscribe to our service and when you report a problem with our site.
                </p>
                <p>
                  The information you give us may include but not limited to your name, address, e-mail address and phone number, financial and credit card information, personal description and photograph.
                </p>
              </Subsection>

              <Subsection title="Information We Collect About You">
                <p>
                  With regard to each of your visits to our site we will automatically collect the following information:
                </p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    Information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our site (including date and time), length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page and any phone number used to call our customer service number.
                  </li>
                </ul>
              </Subsection>
            </Section>

            {/* Cookies */}
            <Section title="Cookies" id="cookies">
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie policy.
              </p>
            </Section>

            {/* Uses Made of Information */}
            <Section title="Uses Made of the Information" id="uses">
              <p className="text-white font-medium mb-4">
                We use information held about you in the following ways:
              </p>

              <Subsection title="Information You Give to Us">
                <p className="mb-3">We will use this information:</p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To carry out our obligations arising from any contracts entered into between you and us and to provide you with the information, products and services that you request from us.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To provide you, or permit selected third parties to provide you, with information about goods or services we feel may interest you. If you are an existing customer, we will only contact you by electronic means (e-mail or SMS) with information about goods and services similar to those which were the subject of a previous sale or negotiations of a sale to you. If you are a new customer, and where we permit selected third parties to use your data, we (or they) will contact you by electronic means only if you have consented to this. If you do not want us to use your data in this way, or to pass your details on to third parties for marketing purposes, please tick the relevant box situated on the form on which we collect your data (the registration form).
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To notify you about changes to our service.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To ensure that content from our site is presented in the most effective manner for you and for your computer.
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Information We Collect About You">
                <p className="mb-3">We will use this information:</p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To administer our site and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To improve our site to ensure that content is presented in the most effective manner for you and for your computer.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To allow you to participate in interactive features of our service, when you choose to do so.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    As part of our efforts to keep our site safe and secure.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    To make suggestions and recommendations to you and other users of our site about goods or services that may interest you or them.
                  </li>
                </ul>
              </Subsection>
            </Section>

            {/* Disclosure of Information */}
            <Section title="Disclosure of Your Information" id="disclosure">
              <Subsection title="Sharing with Group and Third Parties">
                <p className="mb-3">You agree that we have the right to share your personal information with:</p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    Any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, as defined in section 1159 of the UK Companies Act 2006.
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Selected Third Parties">
                <ul className="list-none space-y-3 ml-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    Analytics and search engine providers that assist us in the improvement and optimisation of our site.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    Credit reference agencies for the purpose of assessing your credit score where this is a condition of us entering into a contract with you.
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Disclosure to Third Parties">
                <p className="mb-3">We will disclose your personal information to third parties:</p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    In the event that we sell or buy any business or assets, in which case we will disclose your personal data to the prospective seller or buyer of such business or assets.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    If Empass Law Limited or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.
                  </li>
                  <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use or terms and conditions of supply and other agreements; or to protect the rights, property, or safety of Empass Law Limited, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.
                  </li>
                </ul>
              </Subsection>
            </Section>

            {/* Data Storage */}
            <Section title="Where We Store Your Personal Data" id="storage">
              <p>
                All information you provide to us is stored on our secure servers. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
              </p>
              <p>
                Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
              </p>
            </Section>

            {/* Your Rights */}
            <Section title="Your Rights" id="rights">
              <Subsection title="Marketing Preferences">
                <p>
                  You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes.
                </p>
                <p>
                  You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us at info@empasslaw.com.
                </p>
              </Subsection>

              <Subsection title="Third-Party Websites">
                <p>
                  Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
                </p>
              </Subsection>
            </Section>

            {/* Access to Information */}
            <Section title="Access to Information" id="access">
              <p>
                The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act.
              </p>
            </Section>

            {/* Changes to Privacy Policy */}
            <Section title="Changes to Our Privacy Policy" id="changes">
              <p>
                Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.
              </p>
            </Section>

            {/* Contact */}
            <Section title="Contact" id="contact">
              <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-8">
                <p className="mb-4">
                  Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to:
                </p>
                <div className="space-y-2 text-amber-600">
                  <p>Email: info@empasslaw.com</p>
                  <p className="pt-4">Empass Law Limited</p>
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

export default PrivacyPolicy;