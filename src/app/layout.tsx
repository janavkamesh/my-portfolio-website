import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://janavkamesh.com"),
  title: "Janav Kamesh | Premium Portfolio",
  description: "Engineering high-performance websites that drive revenue.",
  openGraph: {
    title: "Janav Kamesh | Premium Portfolio",
    description: "Engineering high-performance websites that drive revenue.",
    url: "https://janavkamesh.com",
    siteName: "Janav Kamesh Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-body antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <SpeedInsights />
        <Analytics />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
