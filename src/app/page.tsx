// src/app/page.tsx
import IdentityCard from "@/components/IdentityCard";
import ProseSection from "@/components/ProseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <main className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
            I&apos;m Harsh Makwana
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl">
            Senior Backend Engineer who loves working on distributed systems design and architecture, AI workflows, cloud-native solutions, debugging complex problems, and open-source projects.
          </p>
        </div>

        <hr className="border-border-primary mb-10" />

        {/* Two-column layout: identity card + prose sections */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
          <div className="lg:pt-1">
            <IdentityCard />
          </div>

          <div>
            <ProseSection id="about" title="Intro">
              <p>
                I&apos;m a backend engineer with 6+ years of experience shipping production systems that run at scale. I work mostly in the infrastructure layer — distributed architectures, event-driven pipelines, microservice orchestration, and cloud systems that need to stay reliable under real-world pressure.
              </p>
              <p>
                My go-to stack is <span className="text-text-primary">Node.js, NestJS, PostgreSQL, gRPC, RabbitMQ, Python, AWS, and Docker</span>. A lot of my deeper work happens at the intersection of infrastructure and product — the kind of systems where latency, fault tolerance, and scale actually matter.
              </p>
              <p>
                Currently at <span className="text-text-primary">Simform Solutions</span>, where I lead backend platform architecture and mentor engineers on distributed system design.
              </p>
            </ProseSection>

            <ProseSection id="ai" title="How I'm using AI">
              <p>
                I treat AI as a collaborator, not a shortcut — for architectural exploration, rapid prototyping, and debugging complex system behavior, the parts of engineering where a second perspective actually moves things forward.
              </p>
              <p>
                In practice that means pairing with it directly in my editor for scaffolding and code review, and running it through structured prompts for system-design tradeoffs. It&apos;s changed how fast I can go from a rough idea to something working, without cutting corners on how it&apos;s built.
              </p>
            </ProseSection>

            <ProseSection id="projects" title="What I'm building">
              <p>
                <span className="text-text-primary font-medium">On-Demand GPU Game Streaming</span>{" "}
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-accent-success/40 text-accent-success align-middle">
                  Completed
                </span>{" "}
                — an end-to-end streaming platform for Unreal Engine games with under 60-second GPU provisioning. Built a FastAPI service to orchestrate FFmpeg/NVENC pipelines and an EC2 orchestrator with multi-AZ failover and event-driven instance lifecycle automation via RabbitMQ.
              </p>
              <p>
                <span className="text-text-primary font-medium">Authority Delegation Platform</span>{" "}
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-accent-warning/40 text-accent-warning align-middle">
                  In Progress
                </span>{" "}
                — a microservices-based authority delegation system architected from scratch, with a shared gRPC infrastructure layer and per-service Temporal workflows for reliable, long-running jobs.
              </p>
            </ProseSection>

            <ProseSection title="Things I do to unwind">
              <p>
                🌱 Terrace gardening — I grow vegetables, herbs, and flowering plants on my terrace, a good way to disconnect after days spent designing systems that move fast.
              </p>
              <p>
                ✈️ Travelling — new environments have a way of resetting how I think about problems, and some of my clearest ideas about system design have come from being somewhere completely different from a screen.
              </p>
            </ProseSection>

            <ProseSection id="contact" title="Ways to reach me">
              <p>
                I&apos;m always happy to talk AI usage patterns, tools, plugins, and workflows, or distributed systems and cloud-native solutions. Reach out via email, GitHub, or LinkedIn — links are up top and below.
              </p>
            </ProseSection>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
