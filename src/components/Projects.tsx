"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCode } from "react-icons/fi";
import { projects } from "@/data/projects";
import { useInView } from "react-intersection-observer";
import { Project } from "@/types";

// Seeded random number generator for consistent positioning
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100
      },
    },
  };

  // Generate background stars
  const backgroundStars = useMemo(() => {
    const seededRandom = new SeededRandom(88888);
    return Array.from({ length: 50 }, (_, i) => ({
      x: seededRandom.next() * 100,
      y: seededRandom.next() * 100,
      size: seededRandom.next() < 0.7 ? 1 : 2,
      opacity: 0.2 + seededRandom.next() * 0.4,
      duration: 2 + seededRandom.next() * 3
    }));
  }, []);

  return (
    <section id="projects" className="section relative overflow-hidden min-h-screen">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-secondary to-bg-primary">
        {/* Background Stars */}
        <div className="absolute inset-0">
          {backgroundStars.map((star, i) => (
            <div
              key={`project-star-${i}`}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDuration: `${star.duration}s`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Nebula Effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              Open-source projects orbiting in the development galaxy, showcasing modern backend practices
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, #58a6ff40, transparent 70%)`,
                  }}
                />

                {/* Card Container */}
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1), rgba(255,255,255,0.03))`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: hoveredId === project.id ? '#58a6ff60' : 'rgba(255,255,255,0.1)',
                    boxShadow: hoveredId === project.id
                      ? '0 0 30px rgba(88, 166, 255, 0.3), inset 0 0 20px rgba(88, 166, 255, 0.1)'
                      : '0 0 15px rgba(255,255,255,0.05)'
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"
                          style={{
                            background: 'rgba(88, 166, 255, 0.1)',
                            border: '1px solid rgba(88, 166, 255, 0.3)',
                            color: '#58a6ff'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(88, 166, 255, 0.1)',
                            border: '1px solid rgba(88, 166, 255, 0.3)',
                            color: '#58a6ff'
                          }}
                        >
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm group/link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiGithub size={16} className="group-hover/link:scale-110 transition-transform" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm group/link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                      <button className="text-accent-primary hover:text-accent-hover text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, transparent 40%, rgba(88, 166, 255, 0.3) 50%, transparent 60%)',
                      backgroundSize: '200% 200%',
                      animation: hoveredId === project.id ? 'shimmer 2s infinite' : 'none'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-2xl blur-xl bg-gradient-to-r from-accent-primary/20 to-purple-500/20 opacity-50" />

              <div className="relative">
                <p className="text-text-secondary mb-6 text-lg">
                  Explore more projects and contributions in the code universe
                </p>
                <a
                  href="https://github.com/hmake98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                  style={{
                    background: 'radial-gradient(circle at 20% 20%, rgba(88, 166, 255, 0.2), rgba(88, 166, 255, 0.05))',
                    border: '2px solid rgba(88, 166, 255, 0.3)',
                    color: '#58a6ff',
                    boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)'
                  }}
                >
                  <FiGithub className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                  <span>View All Projects</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: 'rgba(10, 15, 20, 0.95)',
              backdropFilter: 'blur(12px)'
            }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Background Stars for Modal */}
            <div className="absolute inset-0 pointer-events-none">
              {backgroundStars.slice(0, 20).map((star, i) => (
                <div
                  key={`modal-star-${i}`}
                  className="absolute rounded-full bg-white animate-pulse"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity * 0.5,
                    animationDuration: `${star.duration}s`
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(88, 166, 255, 0.3)',
                boxShadow: '0 0 40px rgba(88, 166, 255, 0.2), inset 0 0 30px rgba(88, 166, 255, 0.05)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Glow Effect */}
              <div
                className="absolute -inset-2 rounded-2xl blur-2xl opacity-30 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(88, 166, 255, 0.4), transparent 70%)'
                }}
              />

              {/* Modal Header */}
              <div className="relative flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-semibold text-text-primary">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300 hover:rotate-90 hover:scale-110"
                  style={{
                    background: 'rgba(88, 166, 255, 0.1)',
                    border: '1px solid rgba(88, 166, 255, 0.3)'
                  }}
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="relative p-6 space-y-6">
                {/* Project Image */}
                <div
                  className="relative h-64 rounded-xl overflow-hidden"
                  style={{
                    border: '1px solid rgba(88, 166, 255, 0.2)',
                    boxShadow: '0 0 20px rgba(88, 166, 255, 0.1)'
                  }}
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-accent-primary mb-3 flex items-center gap-2">
                    <div className="w-1 h-5 bg-accent-primary rounded-full" />
                    Description
                  </h4>
                  <p className="text-text-secondary leading-relaxed pl-3">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-accent-primary mb-4 flex items-center gap-2">
                      <div className="w-1 h-5 bg-accent-primary rounded-full" />
                      Key Features
                    </h4>
                    <ul className="space-y-3 pl-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-text-secondary group"
                        >
                          <div
                            className="mt-1 p-1 rounded-md flex-shrink-0"
                            style={{
                              background: 'rgba(88, 166, 255, 0.1)',
                              border: '1px solid rgba(88, 166, 255, 0.3)'
                            }}
                          >
                            <FiCode className="text-accent-primary" size={14} />
                          </div>
                          <span className="group-hover:text-text-primary transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-accent-primary mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-accent-primary rounded-full" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 pl-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'rgba(88, 166, 255, 0.1)',
                          border: '1px solid rgba(88, 166, 255, 0.3)',
                          color: '#58a6ff'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                      style={{
                        background: 'rgba(88, 166, 255, 0.15)',
                        border: '2px solid rgba(88, 166, 255, 0.4)',
                        color: '#58a6ff',
                        boxShadow: '0 0 15px rgba(88, 166, 255, 0.2)'
                      }}
                    >
                      <FiGithub className="group-hover:rotate-12 transition-transform" size={18} />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                      style={{
                        background: 'rgba(88, 166, 255, 0.05)',
                        border: '2px solid rgba(88, 166, 255, 0.3)',
                        color: '#58a6ff'
                      }}
                    >
                      <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
