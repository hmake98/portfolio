"use client";

import { useState, useEffect } from "react";
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
  SiGoogle,
  SiRabbitmq,
} from "react-icons/si";
import { skills as skillsData } from "@/data/skills";

// Define our local skill type that includes the icon component
interface SkillWithIcon {
  id: number;
  name: string;
  icon: string;
  iconComponent: React.ReactNode;
  category: "frontend" | "backend" | "database" | "devops" | "other";
}

// Map icon names to actual icon components
const iconMap: Record<string, React.ReactNode> = {
  SiJavascript: <SiJavascript className="text-3xl text-yellow-400" />,
  SiTypescript: <SiTypescript className="text-3xl text-blue-600" />,
  SiReact: <SiReact className="text-3xl text-blue-400" />,
  SiAngular: <SiAngular className="text-3xl text-red-600" />,
  SiElectron: <SiElectron className="text-3xl text-blue-500" />,
  SiNodedotjs: <SiNodedotjs className="text-3xl text-green-600" />,
  SiNestjs: <SiNestjs className="text-3xl text-red-500" />,
  SiExpress: <SiExpress className="text-3xl text-gray-600" />,
  SiGraphql: <SiGraphql className="text-3xl text-pink-600" />,
  SiPrisma: <SiPrisma className="text-3xl text-blue-800" />,
  SiPostgresql: <SiPostgresql className="text-3xl text-blue-700" />,
  SiMongodb: <SiMongodb className="text-3xl text-green-500" />,
  SiRedis: <SiRedis className="text-3xl text-red-600" />,
  SiDocker: <SiDocker className="text-3xl text-blue-600" />,
  SiKubernetes: <SiKubernetes className="text-3xl text-blue-500" />,
  SiAmazonaws: <SiAmazonwebservices className="text-3xl text-yellow-500" />,
  SiCircleci: <SiCircleci className="text-3xl text-black dark:text-white" />,
  SiGithubactions: (
    <SiGithubactions className="text-3xl text-gray-800 dark:text-gray-200" />
  ),
  SiGit: <SiGit className="text-3xl text-orange-600" />,
  SiEthereum: <SiEthereum className="text-3xl text-purple-600" />,
  SiJest: <SiJest className="text-3xl text-red-700" />,
  SiGoogle: <SiGoogle className="text-3xl text-blue-500" />,
  SiRabbitmq: <SiRabbitmq className="text-3xl text-orange-500" />,
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [processedSkills, setProcessedSkills] = useState<SkillWithIcon[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<SkillWithIcon[]>([]);

  // Process skills data on component mount
  useEffect(() => {
    // Transform the imported skills data to include the actual icon components
    const processed = skillsData.map((skill) => ({
      ...skill,
      iconComponent: iconMap[skill.icon] || (
        <FiCode className="text-3xl text-gray-500" />
      ),
      category: skill.category as
        | "frontend"
        | "backend"
        | "database"
        | "devops"
        | "other",
    }));

    setProcessedSkills(processed);
    setFilteredSkills(processed); // Initially show all skills
  }, []);

  // Update filtered skills when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(processedSkills);
    } else {
      const filtered = processedSkills.filter(
        (skill) => skill.category === activeCategory
      );
      setFilteredSkills(filtered);
    }
  }, [activeCategory, processedSkills]);

  const categories = [
    { id: "all", name: "All", icon: <FiCode /> },
    { id: "frontend", name: "Frontend", icon: <FiCode /> },
    { id: "backend", name: "Backend", icon: <FiServer /> },
    { id: "database", name: "Database", icon: <FiDatabase /> },
    { id: "devops", name: "DevOps", icon: <FiCloud /> },
    { id: "other", name: "Other", icon: <FiGitBranch /> },
  ];

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
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
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
                  <div className="mb-4">{skill.iconComponent}</div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </h3>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No skills found in this category.
              </div>
            )}
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
