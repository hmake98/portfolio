// src/app/layout.tsx
import { Metadata, Viewport } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

import Header from "@/components/Header";

// Define metadata for better SEO
export const metadata: Metadata = {
  title: {
    template: "%s | Harsh Makwana",
    default: "Harsh Makwana — Backend & Infrastructure Engineer",
  },
  description:
    "Backend & Infrastructure Engineer designing and building production systems focused on distributed architectures, real-time infrastructure, and developer platforms.",
  keywords: [
    "software engineer",
    "backend developer",
    "node.js",
    "nestjs",
    "graphql",
    "microservices",
    "aws",
    "web3",
    "typescript",
    "cloud architecture",
  ],
  authors: [{ name: "Harsh Makwana" }],
  creator: "Harsh Makwana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hmake.dev",
    title: "Harsh Makwana — Backend & Infrastructure Engineer",
    description:
      "Backend & Infrastructure Engineer designing production systems focused on distributed architectures, real-time infrastructure, and developer platforms.",
    siteName: "Harsh Makwana",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Define viewport for responsive design
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${spaceGrotesk.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link rel="preload" href="/resume.pdf" as="document" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//vercel.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="preconnect" href="https://vercel.com" />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased min-h-screen flex flex-col">
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
