// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "NestJS Microservices Boilerplate",
    description:
      "A production-grade microservices architecture built with NestJS and Kafka. This comprehensive solution provides a robust foundation for scalable applications with built-in service discovery, load balancing, and resilience patterns. Features include secure authentication, fine-grained authorization, database integration with PostgreSQL, and comprehensive logging and monitoring.",
    shortDescription:
      "Enterprise-ready microservices foundation with messaging, authentication, and infrastructure as code.",
    image: "/images/projects/nest-og.png",
    technologies: [
      "NestJS",
      "Microservices",
      "Kafka",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Redis",
      "JWT",
      "GitHub Actions",
    ],
    features: [
      "Service discovery and registry",
      "Distributed tracing with OpenTelemetry",
      "Circuit breaker pattern implementation",
      "Seamless horizontal scaling",
      "Comprehensive API documentation",
    ],
    github: "https://github.com/BackendWorks/nestjs-microservices",
  },
  {
    id: 2,
    title: "NestJS Starter Template",
    description:
      "A meticulously crafted NestJS starter template designed for rapid application development without compromising on security or scalability. This template incorporates industry best practices with a comprehensive authentication system, role-based access control, database integration, and Swagger documentation. It offers a production-ready foundation that dramatically accelerates backend development while maintaining enterprise-grade standards.",
    shortDescription:
      "Production-ready NestJS foundation with authentication, RBAC, and extensive documentation.",
    image: "/images/projects/nest-og.png",
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Jest",
      "Docker",
      "CI/CD",
    ],
    features: [
      "Comprehensive user authentication",
      "Role-based access control system",
      "Database migrations and seeding",
      "Request validation with class-validator",
      "Extensive test coverage",
    ],
    github: "https://github.com/hmake98/nestjs-starter",
  },
  {
    id: 3,
    title: "NestJS gRPC",
    description:
      "A powerful NestJS package for type-safe, scalable gRPC communication between microservices. It provides seamless protocol buffer integration, automatic TypeScript type generation, custom decorators, and developer tooling. Features include advanced metadata handling, authentication support, centralized logging, and a real-time monitoring dashboard — all designed to streamline microservice development with NestJS.",
    shortDescription:
      "Type-safe gRPC for NestJS with codegen, decorators, logging, auth, and monitoring dashboard.",
    image: "/images/projects/nest-og.png",
    technologies: ["NestJS", "gRPC", "Protocol Buffers", "TypeScript"],
    features: [
      "Protocol buffer & TypeScript type generation",
      "Custom NestJS decorators for gRPC methods",
      "Built-in support for authentication and metadata",
      "Centralized logging and structured error handling",
      "Real-time microservice monitoring dashboard",
    ],
    github: "https://github.com/hmake98/nestjs-grpc",
  },
  {
    id: 4,
    title: "NestJS Temporal Core",
    description:
      "A robust NestJS integration for Temporal.io that provides seamless worker and client support for building reliable distributed applications. The library offers easy module integration, automatic worker lifecycle management, declarative decorators for activities and workflows, and type-safe execution. It includes comprehensive features like TLS support, configurable runtime options, worker monitoring, cron scheduling, and advanced workflow control capabilities.",
    shortDescription:
      "Seamless Temporal.io integration for NestJS with type-safe workflows, declarative activities, and robust distributed application support.",
    image: "/images/projects/nest-og.png",
    technologies: [
      "NestJS",
      "Temporal.io",
      "TypeScript",
      "Microservices",
      "Distributed Systems",
    ],
    features: [
      "Declarative activity and workflow decorators",
      "Automatic worker initialization and shutdown",
      "Type-safe workflow execution",
      "Comprehensive client operations API",
      "Workflow retry policies and monitoring",
    ],
    github: "https://github.com/hmake98/nestjs-temporal-core",
  },
];
