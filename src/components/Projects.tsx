"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiArrowRight,
  FiLayout,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import { projects } from "@/data/projects";
import { useInView } from "react-intersection-observer";
import { Project } from "@/types";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const fadeIn = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    }),
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  // Handle body scroll when modal opens/closes
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject !== null) {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [selectedProject]);

  // Project card component for better organization
  const ProjectCard = useCallback(
    ({ project }: { project: Project }) => (
      <motion.div
        key={project.id}
        className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
        variants={fadeIn}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        onClick={() => setSelectedProject(project.id)}
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-blue-900 hover:bg-blue-100 transition-colors transform hover:scale-110"
                  aria-label={`GitHub Repository for ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={18} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white text-blue-900 hover:bg-blue-100 transition-colors transform hover:scale-110"
                  aria-label={`Live Demo for ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 text-sm lg:text-base">
            {project.shortDescription ||
              project.description.substring(0, 120) + "..."}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded-md px-2 py-1"
              onClick={() => setSelectedProject(project.id)}
              aria-label={`View details for ${project.title}`}
            >
              View details
              <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    ),
    [fadeIn, setSelectedProject]
  );

  // Selected project details
  const selectedProjectDetails = useMemo(() => {
    if (selectedProject === null) return null;
    return projects.find((project) => project.id === selectedProject);
  }, [selectedProject]);

  // Handle click outside of modal to close it
  const handleModalBackdropClick = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background Elements - Improved for better performance */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-3">
              My Work
            </span>
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              variants={fadeIn}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="h-1 w-20 bg-blue-500 mx-auto mb-6"
              variants={fadeIn}
            ></motion.div>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Explore some of my recent work and personal projects
            </motion.p>
          </motion.div>

          {/* Improved grid with better responsiveness */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal - Improved accessibility and animations */}
      <AnimatePresence>
        {selectedProject !== null && selectedProjectDetails && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleModalBackdropClick}
            role="dialog"
            aria-labelledby="project-modal-title"
            aria-modal="true"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close details"
                >
                  <FiX size={20} />
                </button>
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={selectedProjectDetails.image}
                    alt={selectedProjectDetails.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6 md:p-8">
                      <h2
                        id="project-modal-title"
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                      >
                        {selectedProjectDetails.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProjectDetails.technologies.map(
                          (tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-blue-600/80 text-white rounded-full"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <FiLayout className="mr-2 text-blue-500" />
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line leading-relaxed">
                    {selectedProjectDetails.description}
                  </p>

                  {/* Feature highlights - new section */}
                  {selectedProjectDetails.features &&
                    selectedProjectDetails.features.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                          <FiLayers className="mr-2 text-blue-500" />
                          Key Features
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProjectDetails.features.map(
                            (feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md"
                              >
                                <span className="text-blue-500 mr-2 mt-0.5">
                                  •
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">
                                  {feature}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                  {/* Technologies - new section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <FiCode className="mr-2 text-blue-500" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectDetails.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProjectDetails.github && (
                      <a
                        href={selectedProjectDetails.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        <FiGithub size={18} />
                        View Source
                      </a>
                    )}
                    {selectedProjectDetails.demo && (
                      <a
                        href={selectedProjectDetails.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <FiExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
