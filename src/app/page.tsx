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
            <p className="text-base text-text-secondary mb-3">
              Backend Engineer · Systems Architecture · AI-Augmented Development
            </p>
            <p className="text-sm text-text-muted mb-8">
              Building infrastructure that makes ambitious products possible.
            </p>
          </div>

          {/* About Section */}
          <section id="about" className="mb-20 scroll-mt-20">
            <h2 className="text-2xl font-bold text-text-primary mb-6">About</h2>

            <div className="space-y-5 text-sm text-text-secondary leading-relaxed">
              <p>
                I&apos;m Harsh — a backend engineer with 6+ years of experience shipping production systems that run at scale. I work mostly in the infrastructure layer: distributed architectures, event-driven pipelines, microservice orchestration, and cloud systems that need to stay reliable under real-world pressure.
              </p>

              <p>
                My go-to stack is <span className="text-text-primary">Node.js, NestJS, PostgreSQL, gRPC, RabbitMQ, Python, AWS, and Docker</span>. A lot of my deeper work happens at the intersection of infrastructure and product — the kind of systems where latency, fault tolerance, and scale actually matter. One example: an on-demand game streaming platform I built that provisions GPU instances in under 60 seconds, manages FFmpeg/NVENC streaming pipelines in real time, and handles instance lifecycle entirely through event-driven automation.
              </p>

              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">How I use AI</h3>
                <p>
                  I treat AI as a collaborator, not a shortcut. I use it for architectural exploration, thinking through tradeoffs, rapid prototyping, and debugging complex system behavior — the parts of engineering where a second perspective actually moves things forward. It&apos;s changed how fast I can go from a rough idea to something working, without cutting corners on how it&apos;s built.
                </p>
              </div>

              <p>
                Currently at <span className="text-text-primary">Simform Solutions</span>, where I lead backend platform architecture and mentor engineers on distributed system design. Outside of that, I build open-source tooling for the NestJS ecosystem — frameworks and integrations I created because I needed them and they didn&apos;t exist in a form I was happy with.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20 scroll-mt-20">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Projects</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-text-primary mb-2">On-Demand GPU Game Streaming</h3>
                <p className="text-xs text-text-muted mb-2">Python · FastAPI · FFmpeg NVENC · Amazon IVS · RabbitMQ · AWS EC2</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  End-to-end game streaming platform for Unreal Engine games with under 60-second GPU provisioning. Built a custom FastAPI service to orchestrate FFmpeg NVENC pipelines — capturing video and audio via Xorg dummy driver and PulseAudio, streaming to Amazon IVS. Designed the EC2 orchestrator with multi-AZ failover, AMI-based bootstrapping, and event-driven instance lifecycle automation via RabbitMQ. Self-healing, observable, and cost-optimized.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Authority Delegation Management — Microservices Platform</h3>
                <p className="text-xs text-text-muted mb-2">NestJS · gRPC · Temporal.io · PostgreSQL · Microservices</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Architected a microservices-based authority delegation system from scratch — repo structure, folder conventions, and service boundaries designed upfront. Built the gRPC infrastructure layer across all services and designed Temporal workflows per service for automated retries, timeouts, and long-running job reliability. Developed APIs, background jobs, and complex database queries using AI-augmented development throughout. Consolidated repetitive patterns into independent shared modules that work as drop-in extensions across services. Led a team session introducing Temporal, mentored on workflow design principles, and ran reviews on AI usage and prompting fundamentals to raise the team&apos;s baseline.
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
                      href="https://github.com/harsh-simform/nestjs-temporal-core"
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
                      href="https://github.com/BackendWorks/nestjs-microservices"
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
                <h3 className="font-semibold text-text-primary mb-2">Terrace Gardening</h3>
                <p className="leading-relaxed">
                  I grow vegetables, herbs, and flowering plants on my terrace. It&apos;s a good way to disconnect — tending to something slow and physical after days spent designing systems that move fast. Turns out nurturing living things is surprisingly calming.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-text-primary mb-2">Travelling</h3>
                <p className="leading-relaxed">
                  I travel when I can — mostly to places that feel unfamiliar. New environments shift how I think, and some of my clearest ideas about system design have come while I was somewhere completely different from a screen.
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
