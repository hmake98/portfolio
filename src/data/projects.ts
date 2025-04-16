// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "NestJS Microservices Boilerplate",
    description:
      "A scalable microservices architecture with NestJS and Kafka. Includes authentication, authorization, and database integration with PostgreSQL.",
    image: "/images/projects/nest-og.png",
    technologies: [
      "NestJS",
      "Microservices",
      "Kafka",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    github: "https://github.com/BackendWorks/nestjs-microservices",
  },
  {
    id: 6,
    title: "NestJS Starter Template",
    description:
      "A production-ready NestJS starter template with user authentication, role-based access control, and database integration.",
    image: "/images/projects/nest-og.png",
    technologies: ["NestJS", "Prisma", "PostgreSQL", "JWT", "Swagger"],
    github: "https://github.com/hmake98/nestjs-starter",
  },
];
