import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import LenisProvider from "@/modules/providers/LenisProvider";
import { dmSans, instrumentSerif, inter, playfair } from "@/utils/font/font";
import { NavbarFooterProviderWrapper } from "@/components/providers/nav-footer-wrapper";
import LoadingProvider from "@/components/providers/loading-proivder";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Empass Law - Delivering High Quality Legal Outcomes, Globally",
  description:
    "A London-headquartered, international law firm delivering high-quality legal outcomes for clients globally. Excellence, innovation, and integrity in every matter.",
  // keywords:
  //   "law firm, legal services, corporate law, international law, London lawyers, legal advice",
  // authors: [{ name: "Empass Law" }],
  // openGraph: {
  //   type: "website",
  //   locale: "en_GB",
  //   url: "https://empasslaw.com",
  //   siteName: "Empass Law",
  //   title: "Empass Law - Delivering High Quality Legal Outcomes, Globally",
  //   description:
  //     "A London-headquartered, international law firm delivering high-quality legal outcomes for clients globally.",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Empass Law",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Empass Law - Delivering High Quality Legal Outcomes, Globally",
  //   description:
  //     "A London-headquartered, international law firm delivering high-quality legal outcomes for clients globally.",
  //   images: ["/og-image.jpg"],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 5,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Google Translate Script - Load Early */}
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    includedLanguages: 'en,de,fr',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                    multilanguagePage: true
                  },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* <LoadingProvider> */}
        <LenisProvider>
          <ReactQueryProvider>
            <NavbarFooterProviderWrapper>
              {children}
            </NavbarFooterProviderWrapper>
            <Toaster />
          </ReactQueryProvider>
        </LenisProvider>
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}
