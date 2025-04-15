"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiCloud } from "react-icons/fi";

const About: React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12 relative"
            variants={fadeIn}
          >
            About Me
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
          </motion.h2>

          <motion.div
            className="mb-12 text-lg text-gray-700 dark:text-gray-300"
            variants={fadeIn}
          >
            <p className="mb-4">
              I&apos;m a results-driven Backend Engineer with 5+ years of
              experience in designing scalable, high-performance APIs and
              microservices. My expertise spans Node.js, NestJS, GraphQL, AWS,
              and Web3, with a strong focus on low-latency systems, event-driven
              architecture, and DevOps automation.
            </p>
            <p className="mb-4">
              I graduated from LDRP Institute of Technology & Research,
              Gandhinagar, with a B.Tech in Computer Engineering. During my
              academic years, I developed a full-stack educational portal using
              PHP and Angular, streamlining administrative workflows and
              increasing efficiency by 30%.
            </p>
            <p>
              I&apos;m passionate about building cloud-native applications and
              optimizing backend performance. I constantly explore new
              technologies and methodologies to enhance my skills and deliver
              exceptional software solutions.
            </p>
          </motion.div>

          {/* Key Expertise Areas */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={fadeIn}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <FiServer className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Expert in Node.js, NestJS, Express.js, GraphQL, and gRPC.
                Experienced in building RESTful APIs, microservices, and
                event-driven architectures.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
                  <FiDatabase className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Database & Caching</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in PostgreSQL, MongoDB, and Redis. Skilled in
                database design, indexing, query optimization, and implementing
                efficient caching strategies.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                  <FiCloud className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">DevOps & Cloud</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced in Docker, Kubernetes, GitHub Actions, and CircleCI.
                Skilled in AWS services like EC2, ECS, S3, Lambda, CloudFront,
                and SES.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full mr-4">
                  <FiCode className="text-orange-600 dark:text-orange-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Skilled in React, Angular, and Electron.js. Experienced in
                building responsive web applications and cross-platform desktop
                applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
