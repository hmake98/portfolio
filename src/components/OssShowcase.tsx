import { FiArrowUpRight } from "react-icons/fi";

interface OssProject {
  name: string;
  description: string;
  tags: string[];
  href: string;
}

const ossProjects: OssProject[] = [
  {
    name: "snapflow-desktop",
    description:
      "Electron desktop app for screenshot capture, annotation, and issue tracking — with multi-monitor support and GitHub/Zoho/cloud sync.",
    tags: ["Electron", "TypeScript", "Desktop"],
    href: "https://github.com/hmake98/snapflow-desktop",
  },
  {
    name: "nestjs-grpc",
    description:
      "Production-ready NestJS gRPC framework with automated CLI type generation, connection pooling, and full streaming support.",
    tags: ["NestJS", "gRPC", "TypeScript"],
    href: "https://github.com/hmake98/nestjs-grpc",
  },
  {
    name: "nest-mcp",
    description:
      "NestJS library for integrating Model Context Protocol servers — exposing prompts, resources, and tools.",
    tags: ["NestJS", "MCP", "TypeScript"],
    href: "https://github.com/hmake98/nest-mcp",
  },
  {
    name: "nestjs-temporal-core",
    description:
      "Production-ready NestJS integration for Temporal.io with automatic workflow discovery and enterprise monitoring.",
    tags: ["NestJS", "Temporal", "Workflows"],
    href: "https://github.com/harsh-simform/nestjs-temporal-core",
  },
  {
    name: "nestjs-starter",
    description:
      "Production-ready NestJS boilerplate with JWT auth, Prisma, Redis, BullMQ, Swagger, i18n, and AI workflows.",
    tags: ["NestJS", "Starter", "AI Workflows"],
    href: "https://github.com/hmake98/nestjs-starter",
  },
  {
    name: "nestjs-microservices",
    description:
      "Production-ready NestJS monorepo for scalable microservices with gRPC, Kong API Gateway, and shared DB packages.",
    tags: ["NestJS", "Microservices", "gRPC"],
    href: "https://github.com/BackendWorks/nestjs-microservices",
  },
];

function OssRow({ project }: { project: OssProject }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-bg-tertiary/60 hover:bg-bg-tertiary flex flex-col gap-1.5 rounded-2xl p-5 shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-text-primary group-hover:text-accent-primary font-mono text-sm font-semibold transition-colors">
          {project.name}
        </h4>
        <FiArrowUpRight
          size={14}
          className="text-text-muted group-hover:text-accent-primary shrink-0 transition-colors"
        />
      </div>
      <p className="text-text-secondary text-xs leading-relaxed">{project.description}</p>
      <p className="text-text-muted text-xs">{project.tags.join(" · ")}</p>
    </a>
  );
}

/** Vertical list of OSS projects, no banner images. */
export default function OssShowcase() {
  return (
    <div className="flex flex-col gap-3">
      {ossProjects.map((project) => (
        <OssRow key={project.name} project={project} />
      ))}
    </div>
  );
}
