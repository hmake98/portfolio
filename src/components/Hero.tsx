"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl mb-3 text-blue-600 dark:text-blue-400 font-medium">
              Hello, I&apos;m
            </h3>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Harsh Makwana
            </h1>
            <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0">
              Results-driven Backend Engineer with 5+ years of experience in
              designing scalable, high-performance APIs and microservices.
              Expertise in Node.js, NestJS, GraphQL, AWS, and Web3.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2"
              >
                <FiMail />
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/hmake98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hmake98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:harsh.make1998@gmail.com"
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Replace with your profile image */}
                <Image
                  src="/images/profile.jpg"
                  alt="Harsh Makwana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
