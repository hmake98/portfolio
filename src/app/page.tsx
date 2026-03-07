// src/app/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-bg-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-48 px-6 md:px-12 lg:px-16 py-12 overflow-y-auto pt-20 lg:pt-12">
        <div className="max-w-2xl">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                Harsh Makwana
              </h1>
              <div className="flex gap-3">
                <a
                  href="https://github.com/hmake98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/hmake98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                  aria-label="Download Resume"
                >
                  <FiDownload size={24} />
                </a>
              </div>
            </div>
            <p className="text-base text-text-secondary mb-8">
              AI-Augmented Systems Engineer
            </p>
          </div>

          {/* About Section */}
          <section id="about" className="mb-20 scroll-mt-20">
            <h2 className="text-2xl font-bold text-text-primary mb-6">About</h2>

            <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
              <p>
                I&apos;m a backend and infrastructure engineer with 6+ years of experience building production systems and distributed architectures. I focus on designing scalable systems that handle real-world complexity—from event-driven pipelines to microservice orchestration and infrastructure automation.
              </p>

              <p>
                My core stack includes Node.js, NestJS, PostgreSQL, Prisma, gRPC, RabbitMQ, Python, AWS, Docker, and FFmpeg. A significant portion of my work involves building complex infrastructure systems, such as an on-demand game streaming platform that dynamically provisions GPU instances, orchestrates real-time streaming pipelines, and manages instance lifecycle automation using event-driven architecture.
              </p>

              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-3">AI-Augmented Workflow</h3>
                <p>
                  I strongly integrate AI into my engineering practice. Rather than treating AI as a simple code generator, I use it as a collaborator for system design exploration, architectural brainstorming, rapid prototyping, problem-solving, and infrastructure experimentation. This AI-augmented approach allows me to move from idea to working systems significantly faster while maintaining strong engineering standards.
                </p>
              </div>

              <p>
                I&apos;m also building open-source developer tools, including a type-safe gRPC framework for NestJS microservices. Currently at Simform Solutions, I lead backend platform architecture and mentor teams on distributed system design.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20 scroll-mt-20">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Projects</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Game Streaming Infrastructure</h3>
                <p className="text-xs text-text-muted mb-2">Python, FFmpeg, RabbitMQ, AWS, Event-Driven Architecture</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Built an on-demand game streaming platform that dynamically provisions GPU instances with sub-60 second latency. The system orchestrates real-time streaming pipelines using FFmpeg and NVENC, manages complex instance lifecycle automation, and scales based on demand using event-driven architecture.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">NestJS gRPC Framework</h3>
                <p className="text-xs text-text-muted mb-2">NestJS, TypeScript, gRPC, Type Safety</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  An open-source type-safe gRPC framework for NestJS microservices. Simplifies service-to-service communication with full TypeScript support and automatic code generation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Backend Platform Engineering</h3>
                <p className="text-xs text-text-muted mb-2">Microservices, PostgreSQL, Infrastructure Automation</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Designed and implemented scalable backend platforms handling complex distributed workloads. Focus on observability, reliability, and resilience to real-world conditions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Experimental Ideas</h3>
                <p className="text-xs text-text-muted mb-2">Snapflow, Automation Systems, Developer Tools</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Exploring new ideas in automation systems, workflow orchestration, and developer productivity tools.
                </p>
              </div>
            </div>

            {/* Open Source Projects */}
            <div className="mt-12 pt-8 border-t border-border-primary">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Open Source</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href="https://github.com/hmake98/nestjs-grpc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-primary hover:text-accent-primary transition-colors"
                    >
                      nestjs-grpc
                    </a>
                    <p className="text-xs text-text-muted">NestJS, TypeScript, gRPC</p>
                    <p className="text-sm text-text-secondary mt-1">Type-safe gRPC framework for NestJS microservices with automatic code generation.</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href="https://github.com/hmake98/nest-mcp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-primary hover:text-accent-primary transition-colors"
                    >
                      @hmake98/nest-mcp
                    </a>
                    <p className="text-xs text-text-muted">NestJS, MCP, TypeScript</p>
                    <p className="text-sm text-text-secondary mt-1">MCP (Model Context Protocol) integration for NestJS applications.</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href="https://github.com/hmake98/nestjs-temporal-core"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-primary hover:text-accent-primary transition-colors"
                    >
                      nestjs-temporal-core
                    </a>
                    <p className="text-xs text-text-muted">NestJS, Temporal, Workflows</p>
                    <p className="text-sm text-text-secondary mt-1">Core bindings for Temporal.io workflow orchestration in NestJS.</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href="https://github.com/hmake98/nestjs-starter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-primary hover:text-accent-primary transition-colors"
                    >
                      nestjs-starter
                    </a>
                    <p className="text-xs text-text-muted">NestJS, Starter Template, MCP</p>
                    <p className="text-sm text-text-secondary mt-1">Production-ready NestJS starter with MCP integration and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href="https://github.com/hmake98/nestjs-microservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-text-primary hover:text-accent-primary transition-colors"
                    >
                      nestjs-microservices
                    </a>
                    <p className="text-xs text-text-muted">NestJS, Microservices, Architecture</p>
                    <p className="text-sm text-text-secondary mt-1">Reference implementation of distributed microservices architecture with NestJS.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Misc Section */}
          <section id="misc" className="mb-20 scroll-mt-20">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Misc</h2>

            <div className="space-y-8 text-sm text-text-secondary">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">Terrace Gardening 🌱</h3>
                <p className="leading-relaxed">
                  I maintain a terrace garden where I grow vegetables, herbs, and flowering plants. Gardening helps me disconnect from screens and spend time nurturing living systems in the physical world. It&apos;s a meditative practice that complements the digital nature of engineering work.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Travelling 🌍</h3>
                <p className="leading-relaxed">
                  I enjoy exploring new places, cultures, and environments. Travelling inspires new ideas and perspectives that influence my thinking and creativity. It&apos;s where I find inspiration for both personal growth and engineering innovation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Experiments & Notes</h3>
                <p className="leading-relaxed">
                  Space for personal experiments, technical explorations, and notes on ideas that don&apos;t fit elsewhere. A place to document learnings and unconventional thinking.
                </p>
              </div>
            </div>
          </section>

          {/* Social Links & Footer */}
          <div className="pt-8 border-t border-border-primary pb-8">
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
