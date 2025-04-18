"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiAward,
  FiCode,
  FiArrowRight,
} from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { Experience as ExperienceType } from "@/types";

// Sample data from the existing component
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (id: number): void => {
    setActiveTab(id);
    // Optional: Scroll to content on mobile
    if (window.innerWidth < 768 && timelineRef.current) {
      timelineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getTechIcon = (tech: string) => {
    const lowercaseTech = tech.toLowerCase();
    if (lowercaseTech.includes("aws")) return "☁️";
    if (lowercaseTech.includes("docker")) return "🐳";
    if (lowercaseTech.includes("nest")) return "🪺";
    if (lowercaseTech.includes("node")) return "🟢";
    if (lowercaseTech.includes("graphql")) return "⬢";
    if (lowercaseTech.includes("react")) return "⚛️";
    if (lowercaseTech.includes("postgres")) return "🐘";
    if (lowercaseTech.includes("redis")) return "🔴";
    if (lowercaseTech.includes("angular")) return "🔺";
    return "🔧";
  };

  return (
    <section
      id="experience"
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-3">
              Career Path
            </span>
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Work Experience
            </motion.h2>
            <motion.div
              className="h-1 w-20 bg-blue-500 mx-auto mb-6"
              variants={itemVariants}
            ></motion.div>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              My professional journey as a software engineer
            </motion.p>
          </motion.div>

          <div className="lg:grid lg:grid-cols-12 gap-8">
            {/* Left sidebar - Timeline */}
            <motion.div
              className="lg:col-span-4 mb-6 lg:mb-0"
              variants={itemVariants}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg">
                {experiences.map((exp) => (
                  <motion.button
                    key={exp.id}
                    onClick={() => handleTabClick(exp.id)}
                    className={`w-full py-4 px-5 text-left rounded-lg mb-1 transition-all flex items-start ${
                      activeTab === exp.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                    whileHover={{ x: activeTab === exp.id ? 0 : 5 }}
                    whileTap={{ scale: 0.98 }}
                    variants={itemVariants}
                  >
                    <div className="mr-4 mt-1">
                      <div
                        className={`p-2 rounded-full ${
                          activeTab === exp.id
                            ? "bg-white/20"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        <FiBriefcase size={18} />
                      </div>
                    </div>
                    <div>
                      <span className="block text-lg font-semibold leading-tight">
                        {exp.position}
                      </span>
                      <span
                        className={`block text-sm mb-1 ${
                          activeTab === exp.id
                            ? "text-blue-100"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {exp.company}
                      </span>
                      <span
                        className={`text-xs flex items-center ${
                          activeTab === exp.id
                            ? "text-blue-200"
                            : "text-gray-500 dark:text-gray-500"
                        }`}
                      >
                        <FiCalendar className="mr-1" size={12} />
                        {exp.duration}
                      </span>
                    </div>
                    {activeTab === exp.id && (
                      <FiArrowRight className="ml-auto self-center" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right content - Experience Details */}
            <motion.div
              ref={timelineRef}
              className="lg:col-span-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                {experiences.map(
                  (exp) =>
                    activeTab === exp.id && (
                      <motion.div
                        key={exp.id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={panelVariants}
                      >
                        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 mb-2">
                            <div className="flex items-center bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                              <FiCalendar className="mr-2 text-blue-600 dark:text-blue-400" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                              <FiMapPin className="mr-2 text-blue-600 dark:text-blue-400" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                            <FiAward className="mr-2 text-blue-600 dark:text-blue-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-4 mb-6">
                            {exp.description.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                  transition: { delay: idx * 0.1 },
                                }}
                                className="flex items-start bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors"
                              >
                                <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mr-3 mt-0.5 flex-shrink-0 font-bold text-sm">
                                  {idx + 1}
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                            <FiCode className="mr-2 text-blue-600 dark:text-blue-400" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                  transition: { delay: idx * 0.05 },
                                }}
                                whileHover={{
                                  y: -3,
                                  transition: { duration: 0.2 },
                                }}
                                className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full flex items-center shadow-sm transition-all duration-300"
                              >
                                <span className="mr-1.5">
                                  {getTechIcon(tech)}
                                </span>
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
