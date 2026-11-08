import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../styles/globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL } from "@/config/site";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const head = Fraunces({
  subsets: ["latin"],
  variable: "--font-head",
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <Footer />
        <MobileCta />
        <WhatsAppFloating />
        <ScrollReveal />
      </body>
    </html>
  );
}
