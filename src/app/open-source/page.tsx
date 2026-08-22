// src/app/open-source/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import OssShowcase from "@/components/OssShowcase";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open-source tooling Harsh Makwana builds for the NestJS ecosystem — gRPC, MCP, Temporal.io, and microservices frameworks.",
};

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <main className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-primary transition-colors mb-8"
        >
          <FiArrowLeft size={14} />
          Back home
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
            Open Source
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl">
            Outside of client work, I build open-source tooling for the NestJS ecosystem — frameworks and integrations I created because they didn&apos;t exist in a form I was happy with. Five projects and counting, from a gRPC framework to a Temporal.io integration.
          </p>
        </div>

        <section id="open-source">
          <OssShowcase />
        </section>

        <Footer />
      </main>
    </div>
  );
}
