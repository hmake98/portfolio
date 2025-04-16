// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Makwana | Senior Software Engineer",
  description:
    "Backend Engineer with expertise in Node.js, NestJS, GraphQL, AWS, and microservices architecture.",
  keywords:
    "software engineer, backend developer, node.js, nestjs, graphql, microservices, aws, web3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-foreground bg-background`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
