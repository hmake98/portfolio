// src/app/layout.tsx
import { Metadata, Viewport } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import ClientPerformanceMonitor from "@/components/ClientPerformanceMonitor";

// Define metadata for better SEO
export const metadata: Metadata = {
  title: {
    template: "%s | Harsh Makwana",
    default: "Harsh Makwana | Senior Backend Engineer",
  },
  description:
    "Senior Backend Engineer specializing in scalable microservices, Node.js, NestJS, GraphQL, and cloud infrastructure with AWS.",
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
    title: "Harsh Makwana | Senior Backend Engineer",
    description:
      "Senior Backend Engineer with expertise in Node.js, NestJS, GraphQL, and microservices architecture",
    siteName: "Harsh Makwana Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Define viewport for responsive design
export const viewport: Viewport = {
  themeColor: "#0d1117",
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
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
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
        <Providers>
          <Header />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
        <ClientPerformanceMonitor />
      </body>
    </html>
  );
}
