"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export interface OssProject {
  name: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export const ossProjects: OssProject[] = [
  {
    name: "nestjs-grpc",
    description:
      "Production-ready NestJS gRPC framework with automated CLI type generation, connection pooling, and full streaming support.",
    tags: ["NestJS", "gRPC", "TypeScript"],
    image: "/oss/nestjs-grpc.webp",
    href: "https://github.com/hmake98/nestjs-grpc",
  },
  {
    name: "nest-mcp",
    description:
      "NestJS library for integrating Model Context Protocol servers — exposing prompts, resources, and tools.",
    tags: ["NestJS", "MCP", "TypeScript"],
    image: "/oss/nest-mcp.webp",
    href: "https://github.com/hmake98/nest-mcp",
  },
  {
    name: "nestjs-temporal-core",
    description:
      "Production-ready NestJS integration for Temporal.io with automatic workflow discovery and enterprise monitoring.",
    tags: ["NestJS", "Temporal", "Workflows"],
    image: "/oss/nestjs-temporal-core.webp",
    href: "https://github.com/harsh-simform/nestjs-temporal-core",
  },
  {
    name: "nestjs-starter",
    description:
      "Production-ready NestJS boilerplate with JWT auth, Prisma, Redis, BullMQ, Swagger, i18n, and AI workflows.",
    tags: ["NestJS", "Starter", "AI Workflows"],
    image: "/oss/nestjs-starter.webp",
    href: "https://github.com/hmake98/nestjs-starter",
  },
  {
    name: "nestjs-microservices",
    description:
      "Production-ready NestJS monorepo for scalable microservices with gRPC, Kong API Gateway, and shared DB packages.",
    tags: ["NestJS", "Microservices", "gRPC"],
    image: "/oss/nestjs-microservices.webp",
    href: "https://github.com/BackendWorks/nestjs-microservices",
  },
];

function OssCard({ project }: { project: OssProject }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border-primary bg-bg-secondary overflow-hidden transition-all duration-300 hover:border-border-secondary hover:bg-bg-tertiary hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-bg-tertiary">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-mono text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
            {project.name}
          </h4>
          <FiArrowUpRight
            size={14}
            className="text-text-muted group-hover:text-accent-primary transition-colors shrink-0"
          />
        </div>
        <p className="text-xs text-text-secondary leading-relaxed mt-1.5 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-bg-tertiary text-text-muted border border-border-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

/** Responsive card grid — 1 col mobile, 2 col tablet and up. */
export default function OssShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ossProjects.map((project) => (
        <OssCard key={project.name} project={project} />
      ))}
    </div>
  );
}
