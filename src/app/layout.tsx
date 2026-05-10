import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REWON | Premium AI & Creative Agency",
  description: "REWON is a premium digital agency specializing in AI-powered websites, intelligent automation, and cinematic brand experiences. We build the future of digital presence.",
  keywords: ["AI Agency", "Web Development", "AI Automation", "Digital Marketing", "Premium Web Design", "REWON"],
  authors: [{ name: "REWON Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
