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

// Define metadata for better SEO
export const metadata: Metadata = {
  title: {
    template: "%s | Harsh Makwana",
    default: "Harsh Makwana — Senior Backend Engineer",
  },
  description:
    "Senior Backend Engineer, 6+ years building distributed systems and microservices with Node.js, NestJS, Prisma, PostgreSQL, MongoDB, RabbitMQ, gRPC, Temporal, and AWS. Maintainer of open-source NestJS tooling.",
  keywords: [
    "backend engineer",
    "distributed systems",
    "microservices",
    "node.js",
    "nestjs",
    "prisma",
    "postgresql",
    "mongodb",
    "rabbitmq",
    "grpc",
    "temporal",
    "aws",
    "streaming systems",
    "system design",
    "event-driven architecture",
    "open source",
    "typescript",
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
    title: "Harsh Makwana — Senior Backend Engineer",
    description:
      "Senior Backend Engineer, 6+ years building distributed systems and microservices with Node.js, NestJS, Prisma, PostgreSQL, MongoDB, RabbitMQ, gRPC, Temporal, and AWS.",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Harsh Makwana",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Makwana — Senior Backend Engineer",
    description:
      "Senior Backend Engineer, 6+ years building distributed systems and microservices with Node.js, NestJS, Prisma, PostgreSQL, MongoDB, RabbitMQ, gRPC, Temporal, and AWS.",
    images: ["/avatar.jpg"],
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
};

// Define viewport for responsive design
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${spaceGrotesk.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
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
              image: "https://hmake.dev/avatar.jpg",
              description:
                "Senior Backend Engineer, 6+ years building distributed systems and microservices with Node.js, NestJS, Prisma, PostgreSQL, MongoDB, RabbitMQ, gRPC, Temporal, and AWS.",
              jobTitle: "Senior Backend Engineer",
              sameAs: ["https://github.com/hmake98", "https://linkedin.com/in/hmake98"],
              knowsAbout: [
                "Node.js",
                "NestJS",
                "Prisma",
                "PostgreSQL",
                "MongoDB",
                "RabbitMQ",
                "gRPC",
                "Temporal",
                "AWS",
                "Streaming Systems",
                "Distributed Systems",
                "Microservices",
                "Event-Driven Architecture",
                "System Design",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Simform Solutions",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body
        className="bg-bg-primary text-text-primary flex min-h-screen flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
