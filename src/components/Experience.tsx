// src/components/Experience.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { Experience as ExperienceType } from "@/types";

// Sample data - you can move this to a separate file
const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "Simform Solutions",
    position: "Sr. Software Engineer",
    duration: "January 2023 - Present",
    location: "Ahmedabad, GJ",
    description: [
      "Designed and optimized location-based GraphQL APIs using Apollo Server and NestJS, improving response times by 40% for over 10,000+ concurrent users",
      "Architected scalable microservices using gRPC and built custom Temporal workflows, increasing system reliability and communication efficiency across services",
      "Automated Electron.js app deployment with CircleCI, implementing release pipelines with approval workflows and multi-platform packaging distributed via S3",
      "Improved Electron desktop app performance by reducing memory usage by 65%, while integrating real-time notification systems using React",
      "Developed high-performance payment processing and dynamic social card generation services using cloud-native, event-driven architecture",
      "Refactored legacy real estate applications with scalable patterns and enforced clean code practices, improving maintainability and system stability",
    ],
    technologies: [
      "NestJS",
      "GraphQL",
      "gRPC",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "RabbitMQ",
      "AWS (ECS, S3, CloudFront, CodePipeline)",
      "Docker",
      "Electron.js",
      "React",
      "CircleCI",
    ],
  },
  {
    id: 2,
    company: "Simform Solutions",
    position: "Software Engineer",
    duration: "January 2020 - December 2022",
    location: "Ahmedabad, GJ",
    description: [
      "Built a custom Angular-based digital signage system, managing content delivery for 100+ concurrent displays with optimized rendering and caching",
      "Reduced API query response times by 75% through efficient indexing and search-ranking improvements in a high-traffic application",
      "Automated infrastructure deployments using AWS CodePipeline and Elastic Beanstalk, decreasing deployment time by 60%",
      "Mentored over 10 junior developers on backend best practices, microservice architecture, and DevOps workflows",
      "Contributed to an open-source microservices boilerplate, which gained 200+ GitHub stars, promoting clean architecture across projects",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "Angular",
      "TypeORM",
      "Redis",
      "PostgreSQL",
      "AWS (Elastic Beanstalk, CodePipeline)",
      "Docker",
      "Microservices",
    ],
  },
  {
    id: 3,
    company: "Simform Solutions",
    position: "Junior Software Engineer",
    duration: "June 2019 - January 2020",
    location: "Ahmedabad, GJ",
    description: [
      "Developed a cross-platform employee management desktop application using Electron.js and Angular, improving employee productivity by 50%",
      "Established standardized coding practices and documentation for desktop application teams, streamlining development collaboration",
      "Participated in organization-wide training on modern software development workflows, tools, and project methodologies",
    ],
    technologies: [
      "Electron.js",
      "Angular",
      "TypeScript",
      "Git",
      "Jira",
      "Zoho",
    ],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (id: number): void => {
    setActiveTab(id);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 relative"
            variants={fadeIn}
          >
            Work Experience
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Company Tabs */}
            <motion.div
              className="md:w-1/3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible"
              variants={containerVariants}
            >
              {experiences.map((exp) => (
                <motion.button
                  key={exp.id}
                  onClick={() => handleTabClick(exp.id)}
                  className={`py-4 px-6 text-left rounded-lg mb-2 mr-2 md:mr-0 flex-shrink-0 transition-colors flex flex-col min-w-[200px] ${
                    activeTab === exp.id
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                  variants={fadeIn}
                >
                  <span className="text-lg font-semibold">{exp.position}</span>
                  <span
                    className={`text-sm ${
                      activeTab === exp.id
                        ? "text-blue-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {exp.company}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Experience Details */}
            <motion.div
              className="md:w-2/3 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={`${activeTab === exp.id ? "block" : "hidden"}`}
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
