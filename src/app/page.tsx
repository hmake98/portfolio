// src/app/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-48 px-6 md:px-12 lg:px-16 py-12 overflow-y-auto pt-20 lg:pt-12">
        <div className="max-w-2xl h-full flex flex-col justify-between">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
              Harsh Makwana
            </h1>
            <p className="text-base text-text-secondary mb-8">
              Backend & Infrastructure Engineer
            </p>

            {/* Bio - Single Concise Paragraph */}
            <div className="space-y-4">
              <p className="text-sm text-text-secondary leading-relaxed">
                I&apos;m a developer living in Los Angeles, CA. I design and build production-grade distributed systems focused on scalable architectures, real-time pipelines, and developer platforms. With 6+ years of experience, I specialize in backend infrastructure, microservice orchestration, and cloud automation. Currently at Simform Solutions, I lead platform architecture. Beyond engineering, I&apos;m an FAA licensed private pilot flying a Cirrus SF50 Vision Jet.
              </p>
            </div>
          </div>

          {/* Social Links & Footer */}
          <div className="pt-8 border-t border-border-primary">
            <div className="flex gap-6 mb-6">
              <a
                href="https://github.com/hmake98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hmake98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:harsh.make1998@gmail.com"
                className="text-text-secondary hover:text-accent-primary transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
            <p className="text-xs text-text-muted">
              © 2026 Harsh Makwana
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
