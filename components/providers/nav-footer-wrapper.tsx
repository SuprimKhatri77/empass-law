"use client";

import Footer from "@/modules/landing/footer";
import Navbar from "@/modules/landing/navbar";
import { getTranslations } from "@/utils/translation/translation";
import { usePathname } from "next/navigation";

export function NavbarFooterProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const translations = getTranslations("en");
  return !pathname.includes("/admin") ? (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  ) : (
    <>{children}</>
  );
}
