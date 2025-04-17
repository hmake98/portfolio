"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/70 to-white dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-800 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Text Content */}
          <motion.div className="md:w-1/2 text-center md:text-left z-10">
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
            >
              Backend Engineer
            </motion.span>

            <motion.h3
              variants={itemVariants}
              className="text-xl mb-3 text-blue-600 dark:text-blue-400 font-medium"
            >
              Hello, I&apos;m
            </motion.h3>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Harsh Makwana
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl text-gray-700 dark:text-gray-300 mb-6 font-semibold"
            >
              Senior Software Engineer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Results-driven Backend Engineer with 5+ years of experience in
              designing scalable, high-performance APIs and microservices.
              Expertise in Node.js, NestJS, GraphQL, AWS, and Web3.
            </motion.p>

            {/* Technologies Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
            >
              {[
                "Node.js",
                "NestJS",
                "GraphQL",
                "AWS",
                "Microservices",
                "PostgreSQL",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 group"
              >
                <FiMail className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Contact Me</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 group"
              >
                <FiDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/hmake98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hmake98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:harsh.make1998@gmail.com"
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-all hover:scale-110"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Multiple glow effects for depth */}
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse"></div>
              <div
                className="absolute inset-2 rounded-full bg-indigo-400 opacity-10 blur-xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Profile image with border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Harsh Makwana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="text-xs font-bold">5+ YRS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
