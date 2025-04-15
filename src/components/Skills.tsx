// src/components/Skills.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiGitBranch,
} from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiElectron,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiGithubactions,
  SiCircleci,
  SiGit,
  SiEthereum,
  SiJest,
} from "react-icons/si";

// Type definitions for skills
interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "database" | "devops" | "other";
}

// Skills data - you can move this to a separate file
const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: "JavaScript",
    icon: <SiJavascript className="text-3xl text-yellow-400" />,
    category: "frontend",
  },
  {
    id: 2,
    name: "TypeScript",
    icon: <SiTypescript className="text-3xl text-blue-600" />,
    category: "frontend",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact className="text-3xl text-blue-400" />,
    category: "frontend",
  },
  {
    id: 4,
    name: "Angular",
    icon: <SiAngular className="text-3xl text-red-600" />,
    category: "frontend",
  },
  {
    id: 5,
    name: "Electron.js",
    icon: <SiElectron className="text-3xl text-blue-500" />,
    category: "frontend",
  },

  // Backend
  {
    id: 6,
    name: "Node.js",
    icon: <SiNodedotjs className="text-3xl text-green-600" />,
    category: "backend",
  },
  {
    id: 7,
    name: "NestJS",
    icon: <SiNestjs className="text-3xl text-red-500" />,
    category: "backend",
  },
  {
    id: 8,
    name: "Express.js",
    icon: <SiExpress className="text-3xl text-gray-600" />,
    category: "backend",
  },
  {
    id: 9,
    name: "GraphQL",
    icon: <SiGraphql className="text-3xl text-pink-600" />,
    category: "backend",
  },
  {
    id: 10,
    name: "Prisma",
    icon: <SiPrisma className="text-3xl text-blue-800" />,
    category: "backend",
  },

  // Database
  {
    id: 11,
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-3xl text-blue-700" />,
    category: "database",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: <SiMongodb className="text-3xl text-green-500" />,
    category: "database",
  },
  {
    id: 13,
    name: "Redis",
    icon: <SiRedis className="text-3xl text-red-600" />,
    category: "database",
  },

  // DevOps
  {
    id: 14,
    name: "Docker",
    icon: <SiDocker className="text-3xl text-blue-600" />,
    category: "devops",
  },
  {
    id: 15,
    name: "Kubernetes",
    icon: <SiKubernetes className="text-3xl text-blue-500" />,
    category: "devops",
  },
  {
    id: 16,
    name: "AWS",
    icon: <SiAmazonwebservices className="text-3xl text-yellow-500" />,
    category: "devops",
  },
  {
    id: 17,
    name: "CircleCI",
    icon: <SiCircleci className="text-3xl text-black dark:text-white" />,
    category: "devops",
  },
  {
    id: 18,
    name: "GitHub Actions",
    icon: (
      <SiGithubactions className="text-3xl text-gray-800 dark:text-gray-200" />
    ),
    category: "devops",
  },

  // Other
  {
    id: 19,
    name: "Git",
    icon: <SiGit className="text-3xl text-orange-600" />,
    category: "other",
  },
  {
    id: 20,
    name: "Web3",
    icon: <SiEthereum className="text-3xl text-purple-600" />,
    category: "other",
  },
  {
    id: 21,
    name: "Jest",
    icon: <SiJest className="text-3xl text-red-700" />,
    category: "other",
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All", icon: <FiCode /> },
    { id: "frontend", name: "Frontend", icon: <FiCode /> },
    { id: "backend", name: "Backend", icon: <FiServer /> },
    { id: "database", name: "Database", icon: <FiDatabase /> },
    { id: "devops", name: "DevOps", icon: <FiCloud /> },
    { id: "other", name: "Other", icon: <FiGitBranch /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 relative"
            variants={fadeIn}
          >
            Technical Skills
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
          </motion.h2>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeIn}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Level Section */}
          {activeCategory === "all" && (
            <motion.div className="mt-20" variants={fadeIn}>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Core Technologies
              </h3>

              <div className="space-y-6 max-w-3xl mx-auto">
                {/* Node.js */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Node.js & NestJS
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      95%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                {/* TypeScript */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      TypeScript
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      90%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                {/* GraphQL */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      GraphQL & REST API
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      92%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                {/* Database & Caching */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Database & Caching
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      88%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                {/* DevOps & Cloud */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      DevOps & Cloud
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      85%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
