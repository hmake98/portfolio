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
];
