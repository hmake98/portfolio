"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiCloud,
  FiBookOpen,
  FiAward,
  FiTrendingUp,
} from "react-icons/fi";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("professional");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const expertiseData = [
    {
      id: "backend",
      title: "Backend Development",
      icon: <FiServer className="text-blue-600 dark:text-blue-400 text-xl" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      color: "text-blue-600 dark:text-blue-400",
      description:
        "Expert in Node.js, NestJS, Express.js, GraphQL, and gRPC. Experienced in building RESTful APIs, microservices, and event-driven architectures.",
    },
    {
      id: "database",
      title: "Database & Caching",
      icon: (
        <FiDatabase className="text-green-600 dark:text-green-400 text-xl" />
      ),
      iconBg: "bg-green-100 dark:bg-green-900",
      color: "text-green-600 dark:text-green-400",
      description:
        "Proficient in PostgreSQL, MongoDB, and Redis. Skilled in database design, indexing, query optimization, and implementing efficient caching strategies.",
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      icon: (
        <FiCloud className="text-purple-600 dark:text-purple-400 text-xl" />
      ),
      iconBg: "bg-purple-100 dark:bg-purple-900",
      color: "text-purple-600 dark:text-purple-400",
      description:
        "Experienced in Docker, Kubernetes, GitHub Actions, and CircleCI. Skilled in AWS services like EC2, ECS, S3, Lambda, CloudFront, and SES.",
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <FiCode className="text-orange-600 dark:text-orange-400 text-xl" />,
      iconBg: "bg-orange-100 dark:bg-orange-900",
      color: "text-orange-600 dark:text-orange-400",
      description:
        "Skilled in React, Angular, and Electron.js. Experienced in building responsive web applications and cross-platform desktop applications.",
    },
  ];

  const tabContent = {
    professional: (
      <>
        <p className="mb-4">
          I&apos;m a results-driven Backend Engineer with 5+ years of experience
          in designing scalable, high-performance APIs and microservices. My
          expertise spans Node.js, NestJS, GraphQL, AWS, and Web3, with a strong
          focus on low-latency systems, event-driven architecture, and DevOps
          automation.
        </p>
        <p className="mb-4">
          I specialize in building efficient backend systems that can handle
          high traffic and complex business logic. My approach combines
          technical excellence with pragmatic problem-solving to deliver
          solutions that scale with your business needs.
        </p>
        <p>
          I&apos;m passionate about building cloud-native applications and
          optimizing backend performance. I constantly explore new technologies
          and methodologies to enhance my skills and deliver exceptional
          software solutions.
        </p>
      </>
    ),
    education: (
      <>
        <p className="mb-4">
          I graduated from LDRP Institute of Technology & Research, Gandhinagar,
          with a B.Tech in Computer Engineering. My academic training provided
          me with a strong foundation in computer science principles,
          algorithms, and software design patterns.
        </p>
        <p className="mb-4">
          During my academic years, I developed a full-stack educational portal
          using PHP and Angular, streamlining administrative workflows and
          increasing efficiency by 30%. This project was recognized by the
          department for its innovative approach to solving campus management
          challenges.
        </p>
        <p>
          I continuously invest in my education through online courses,
          technical webinars, and industry conferences. Recent learning focuses
          include advanced microservices patterns, cloud-native architecture,
          and performance optimization techniques.
        </p>
      </>
    ),
    personal: (
      <>
        <p className="mb-4">
          Beyond coding, I'm an avid problem solver who enjoys tackling complex
          challenges. I'm passionate about creating technology that makes a
          positive impact on users' lives and businesses.
        </p>
        <p className="mb-4">
          I thrive in collaborative environments and enjoy mentoring junior
          developers. I believe in writing clean, maintainable code and approach
          each project with attention to detail and a commitment to excellence.
        </p>
        <p>
          When I'm not coding, you might find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge through
          technical write-ups and community engagement.
        </p>
      </>
    ),
  };

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-3">
              Get to Know Me
            </span>
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={fadeIn}
            >
              About Me
            </motion.h2>
            <motion.div
              className="h-1 w-20 bg-blue-500 mx-auto mb-6"
              variants={fadeIn}
            ></motion.div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div className="flex justify-center mb-8" variants={fadeIn}>
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {[
                {
                  id: "professional",
                  label: "Professional",
                  icon: <FiTrendingUp className="mr-2" />,
                },
                {
                  id: "education",
                  label: "Education",
                  icon: <FiBookOpen className="mr-2" />,
                },
                {
                  id: "personal",
                  label: "Personal",
                  icon: <FiAward className="mr-2" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mb-16 text-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
            variants={fadeIn}
          >
            {tabContent[activeTab as keyof typeof tabContent]}
          </motion.div>

          {/* Key Expertise Areas */}
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            variants={fadeIn}
          >
            Key Areas of Expertise
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {expertiseData.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${item.iconBg} rounded-full mr-4`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${item.color}`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
