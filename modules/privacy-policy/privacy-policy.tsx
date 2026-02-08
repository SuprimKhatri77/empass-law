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
      <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">
        {title}
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
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

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Architectural Grid Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 mb-8">
              <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                Established
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="text-stone-500 text-lg tracking-wide max-w-2xl mx-auto">
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
              <p className="text-stone-900 font-medium mb-4">
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
              <p className="text-stone-900 font-medium mb-4">
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
                    To provide you, or permit selected third parties to provide you, with information about goods or services we feel may interest you.
                  </li>
                </ul>
              </Subsection>
            </Section>

            {/* Contact */}
            <Section title="Contact" id="contact">
              <div className="bg-stone-100 border border-stone-200 p-8 shadow-sm">
                <p className="mb-4 text-stone-600">
                  Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to:
                </p>
                <div className="space-y-2 text-amber-700 font-medium">
                  <p>Email: info@empasslaw.com</p>
                  <p className="pt-4 text-stone-900">Empass Law Limited</p>
                  <p>20-22 Wenlock Road</p>
                  <p>London, N1 7GU</p>
                  <p>England</p>
                  <p className="pt-4 text-stone-400 font-normal">Company Number: 15755859</p>
                </div>
              </div>
            </Section>

            {/* Last Updated */}
            <div className="mt-20 pt-8 border-t border-stone-200 text-center">
              <p className="text-sm text-stone-400 tracking-wide">
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