// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
