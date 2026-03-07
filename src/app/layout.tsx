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
    "Backend & Infrastructure Engineer with 6+ years building production systems, distributed architectures, and real-time infrastructure. Specialized in Node.js, NestJS, AWS, and event-driven systems.",
  keywords: [
    "backend engineer",
    "infrastructure engineer",
    "distributed systems",
    "node.js developer",
    "nestjs",
    "typescript",
    "microservices",
    "aws",
    "graphql",
    "event-driven architecture",
    "real-time infrastructure",
    "system design",
    "ffmpeg",
    "grpc",
  ],
  authors: [{ name: "Harsh Makwana", url: "https://hmake.dev" }],
  creator: "Harsh Makwana",
  metadataBase: new URL("https://hmake.dev"),
  alternates: {
    canonical: "https://hmake.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hmake.dev",
    siteName: "Harsh Makwana",
    title: "Harsh Makwana — Backend & Infrastructure Engineer",
    description:
      "Backend & Infrastructure Engineer with 6+ years building production systems, distributed architectures, and real-time infrastructure.",
    images: [
      {
        url: "https://hmake.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Makwana - Backend & Infrastructure Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Makwana — Backend & Infrastructure Engineer",
    description:
      "Backend & Infrastructure Engineer with 6+ years building production systems and distributed architectures.",
    images: ["https://hmake.dev/og-image.jpg"],
    creator: "@hmake98",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
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

        {/* JSON-LD Schema for Person/Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harsh Makwana",
              url: "https://hmake.dev",
              image: "https://hmake.dev/images/profile.jpg",
              description:
                "Backend & Infrastructure Engineer with 6+ years building production systems and distributed architectures",
              jobTitle: "AI-Augmented Systems Engineer",
              sameAs: [
                "https://github.com/hmake98",
                "https://linkedin.com/in/hmake98",
              ],
              knowsAbout: [
                "Backend Engineering",
                "Infrastructure",
                "Distributed Systems",
                "Node.js",
                "NestJS",
                "TypeScript",
                "AWS",
                "Microservices",
                "gRPC",
                "Event-Driven Architecture",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Simform Solutions",
              },
            }),
          }}
        />
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
