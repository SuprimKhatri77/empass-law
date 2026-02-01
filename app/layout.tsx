import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/modules/landing/navbar";
import Footer from "@/modules/landing/footer";
import LenisProvider from "@/modules/providers/LenisProvider";
import { inter, raleway, roboto } from "@/utils/font/font";
import { NavbarFooterProviderWrapper } from "@/components/providers/nav-footer-wrapper";

export const metadata: Metadata = {
  title: "Empass Law",
  description:
    "Services We are not just your legal advisors; we are your trusted partners. With Empass Law, you can expect unwavering dedication, integrity, and a strong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.className} antialiased bg-[#0A0F1C]/98`}>
        <LenisProvider>
          <ReactQueryProvider>
            <NavbarFooterProviderWrapper>
              {children}
            </NavbarFooterProviderWrapper>
            <Toaster />
          </ReactQueryProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
