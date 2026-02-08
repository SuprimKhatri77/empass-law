import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

interface CookieTypeProps {
  title: string;
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

const CookieType: React.FC<CookieTypeProps> = ({ title, children }) => (
  <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-6 hover:border-amber-600/20 transition-colors duration-300">
    <h3 className="text-xl font-serif text-amber-600 mb-3 tracking-tight">
      {title}
    </h3>
    <div className="text-gray-300 leading-relaxed">
      {children}
    </div>
  </div>
);

const CookiePolicy: React.FC = () => {
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
              Cookie Policy
            </h1>

            <p className="text-gray-500 text-lg tracking-wide max-w-2xl mx-auto">
              Understanding Our Use of Cookies
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Section title="Information About Our Use of Cookies" id="introduction">
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.
              </p>
              <p>
                A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
              </p>
            </Section>

            {/* Types of Cookies */}
            <Section title="Types of Cookies We Use" id="cookie-types">
              <div className="space-y-6">
                <CookieType title="Strictly Necessary Cookies">
                  <p>
                    These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.
                  </p>
                </CookieType>

                <CookieType title="Analytical/Performance Cookies">
                  <p>
                    They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                  </p>
                </CookieType>

                <CookieType title="Functionality Cookies">
                  <p>
                    These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
                  </p>
                </CookieType>

                <CookieType title="Targeting Cookies">
                  <p>
                    These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.
                  </p>
                </CookieType>
              </div>
            </Section>

            {/* Third Party Cookies */}
            <Section title="Third Party Cookies" id="third-party">
              <div className="bg-stone-900/30 border border-stone-800 rounded-lg p-8">
                <p>
                  Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
                </p>
              </div>
            </Section>

            {/* Managing Cookies */}
            <Section title="Managing Cookies" id="managing">
              <p>
                You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
              </p>
            </Section>

            {/* Contact Information */}
            <Section title="Questions About Cookies" id="contact">
              <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-8">
                <p className="mb-4">
                  If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;