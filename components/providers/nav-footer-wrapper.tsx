"use client";

import Footer from "@/modules/landing/footer";
import Navbar from "@/modules/landing/navbar";
import { usePathname } from "next/navigation";

export function NavbarFooterProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
