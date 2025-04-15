// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "NestJS GraphQL Microservices Boilerplate",
    description:
      "A scalable microservices architecture with NestJS and GraphQL. Includes authentication, authorization, and database integration with PostgreSQL and Prisma.",
    image: "/images/projects/project1.jpg",
    technologies: [
      "NestJS",
      "GraphQL",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    github: "https://github.com/hmake98/nestjs-graphql-prisma",
  },
  {
    id: 2,
    title: "Real-time Location Tracking System",
    description:
      "A high-performance location tracking system using GraphQL subscriptions, optimized for 10,000+ concurrent users with 40% faster response times.",
    image: "/images/projects/project2.jpg",
    technologies: [
      "Node.js",
      "NestJS",
      "GraphQL",
      "Redis",
      "AWS",
      "WebSockets",
    ],
  },
  {
    id: 3,
    title: "Cross-platform Desktop Application",
    description:
      "An Electron.js desktop application for employee management with real-time notifications, resulting in 50% productivity improvement and 65% reduced memory usage.",
    image: "/images/projects/project3.jpg",
    technologies: ["Electron.js", "React", "CircleCI", "AWS S3", "TypeScript"],
  },
  {
    id: 4,
    title: "Digital Signage Content Management System",
    description:
      "A custom Angular-based digital signage system that manages content delivery for 100+ concurrent displays with optimized rendering and caching.",
    image: "/images/projects/project4.jpg",
    technologies: ["Angular", "Node.js", "Redis", "AWS", "WebSockets"],
  },
  {
    id: 5,
    title: "Payment Processing Microservice",
    description:
      "A high-performance, event-driven payment processing service using cloud-native architecture, ensuring reliable transaction processing and scalability.",
    image: "/images/projects/project5.jpg",
    technologies: ["NestJS", "RabbitMQ", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 6,
    title: "NestJS Starter Template",
    description:
      "A production-ready NestJS starter template with user authentication, role-based access control, and database integration.",
    image: "/images/projects/project6.jpg",
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger"],
    github: "https://github.com/hmake98/nestjs-starter",
  },
];
