import React from "react";

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
      <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">
        {title}
      </h2>
      <div className="h-px w-24 bg-linear-to-r from-amber-500 to-transparent" />
    </div>

    <div className="space-y-6 text-stone-600 leading-relaxed tracking-wide">
      {children}
    </div>
  </section>
);

const CookieType: React.FC<CookieTypeProps> = ({ title, children }) => (
  <div className=" border-l border-stone-200 p-6 hover:border-amber-500/40 transition-colors duration-300 ">
    <h3 className="text-xl font-serif text-amber-600 mb-3 tracking-tight">
      {title}
    </h3>
    <div className="text-stone-600 leading-relaxed">{children}</div>
  </div>
);

const CookiePolicy: React.FC = () => {
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

      {/* Subtle Amber Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-amber-400/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        {/* Hero */}
        <header className="pt-24 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-400/30 bg-amber-400/10 mb-8">
              <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">
                Established
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-tight">
              Cookie Policy
            </h1>

            <p className="text-stone-500 text-lg tracking-wide max-w-2xl mx-auto">
              Understanding Our Use of Cookies
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <Section title="Information About Our Use of Cookies" id="introduction">
              <p>
                Our website uses cookies to distinguish you from other users of
                our website. This helps us provide a better experience and
                improve our site.
              </p>
              <p>
                A cookie is a small file of letters and numbers that we store on
                your browser or hard drive if you agree.
              </p>
            </Section>

            <Section title="Types of Cookies We Use" id="cookie-types">
              <div className="space-y-6">
                <CookieType title="Strictly Necessary Cookies">
                  Required for core website functionality such as secure login
                  and transactions.
                </CookieType>

                <CookieType title="Analytical / Performance Cookies">
                  Help us understand how visitors interact with the site so we
                  can improve usability.
                </CookieType>

                <CookieType title="Functionality Cookies">
                  Remember preferences like language, region, or personalization
                  settings.
                </CookieType>

                <CookieType title="Targeting Cookies">
                  Used to deliver advertising relevant to your interests.
                </CookieType>
              </div>
            </Section>

            <Section title="Third Party Cookies" id="third-party">
              <div className="border-l border-stone-200 p-8">
                <p className="text-stone-600">
                  Third parties may also use cookies over which we have no
                  control, such as analytics or advertising providers.
                </p>
              </div>
            </Section>

            <Section title="Managing Cookies" id="managing">
              <p>
                You can block cookies via your browser settings, but doing so may
                limit access to certain parts of our site.
              </p>
            </Section>

            <Section title="Questions About Cookies" id="contact">
              <div className="bg-stone-100 border border-stone-200 p-8">
                <p className="mb-4 text-stone-600">
                  If you have questions, contact us at:
                </p>

                <div className="space-y-2 text-amber-700 font-medium">
                  <p>Empass Law Limited</p>
                  <p>20–22 Wenlock Road</p>
                  <p>London, N1 7GU</p>
                  <p>England</p>
                  <p className="pt-4">Company No: 15755859</p>
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

export default CookiePolicy;