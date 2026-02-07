import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import LenisProvider from "@/modules/providers/LenisProvider";
import { dmSans, instrumentSerif } from "@/utils/font/font";
import { NavbarFooterProviderWrapper } from "@/components/providers/nav-footer-wrapper";
import LoadingProvider from "@/components/providers/loading-proivder";

export const metadata: Metadata = {
  title: "Empass Law - Premier London Legal Services",
  description:
    "A London-headquartered law firm delivering exceptional legal outcomes for clients worldwide since 1892. Expert counsel in corporate, litigation, employment, and more.",
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
      <body className={`${dmSans.className} antialiased bg-stone-50`}>
        <LoadingProvider>
          <LenisProvider>
            <ReactQueryProvider>
              <NavbarFooterProviderWrapper>
                {children}
              </NavbarFooterProviderWrapper>
              <Toaster />
            </ReactQueryProvider>
          </LenisProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
