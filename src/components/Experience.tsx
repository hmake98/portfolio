"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { experiences } from "@/data/experiences";
import { useMemo } from "react";

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

const Experience: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100
      },
    },
  };

  // Generate background stars
  const backgroundStars = useMemo(() => {
    const seededRandom = new SeededRandom(77777);
    return Array.from({ length: 60 }, () => ({
      x: seededRandom.next() * 100,
      y: seededRandom.next() * 100,
      size: seededRandom.next() < 0.7 ? 1 : 2,
      opacity: 0.2 + seededRandom.next() * 0.5,
      duration: 2 + seededRandom.next() * 3
    }));
  }, []);

  return (
    <section id="experience" className="section relative overflow-hidden min-h-screen">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-secondary">
        {/* Background Stars */}
        <div className="absolute inset-0">
          {backgroundStars.map((star, i) => (
            <div
              key={`exp-star-${i}`}
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
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mx-auto">
              Navigating through the cosmic journey of backend development and system architecture
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 hidden md:block pointer-events-none">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(88, 166, 255, 0.5), transparent)',
                  boxShadow: '0 0 10px rgba(88, 166, 255, 0.5)'
                }}
              />
            </div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                className="relative mb-12 last:mb-0 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-8 top-8 hidden md:block -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
                    className="relative"
                  >
                    {/* Outer Glow */}
                    <div
                      className="absolute inset-0 w-6 h-6 rounded-full blur-md"
                      style={{
                        background: 'radial-gradient(circle, rgba(88, 166, 255, 0.6), transparent 70%)',
                      }}
                    />
                    {/* Node Circle */}
                    <div
                      className="relative w-4 h-4 rounded-full transition-all duration-300"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.8), rgba(88, 166, 255, 0.4))',
                        border: '2px solid rgba(88, 166, 255, 0.6)',
                        boxShadow: '0 0 15px rgba(88, 166, 255, 0.5), inset 0 0 8px rgba(88, 166, 255, 0.3)'
                      }}
                    />
                  </motion.div>
                </div>

                {/* Experience Card */}
                <div className="ml-0 md:ml-20 relative">
                  {/* Card Glow Effect */}
                  <div
                    className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(88, 166, 255, 0.4), transparent 70%)',
                    }}
                  />

                  <div
                    className="relative rounded-2xl p-6 transition-all duration-500"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(88, 166, 255, 0.2)',
                      boxShadow: '0 0 20px rgba(88, 166, 255, 0.1)'
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                          {experience.position}
                        </h3>
                        <h4 className="text-lg text-accent-primary font-medium">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div
                          className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg"
                          style={{
                            background: 'rgba(88, 166, 255, 0.1)',
                            border: '1px solid rgba(88, 166, 255, 0.2)',
                            color: '#58a6ff'
                          }}
                        >
                          <FiCalendar size={14} />
                          <span>{experience.duration}</span>
                        </div>
                        <div
                          className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg"
                          style={{
                            background: 'rgba(88, 166, 255, 0.1)',
                            border: '1px solid rgba(88, 166, 255, 0.2)',
                            color: '#58a6ff'
                          }}
                        >
                          <FiMapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-6">
                      {experience.description.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{
                              background: '#58a6ff',
                              boxShadow: '0 0 6px rgba(88, 166, 255, 0.6)'
                            }}
                          />
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="border-t border-white/10 pt-6">
                      <h5 className="text-accent-primary font-semibold mb-4 text-sm flex items-center gap-2">
                        <div className="w-1 h-4 bg-accent-primary rounded-full" />
                        Technologies & Tools
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.2 + techIndex * 0.03 }}
                            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
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

                    {/* Corner Accent */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-20 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at top right, rgba(88, 166, 255, 0.3), transparent 70%)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "10+", label: "Developers Mentored" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
                className="group relative text-center p-8 rounded-2xl transition-all duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(88, 166, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(88, 166, 255, 0.1)'
                }}
              >
                {/* Stat Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(88, 166, 255, 0.4), transparent 70%)',
                  }}
                />

                <div className="relative">
                  <div
                    className="text-5xl font-bold mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #58a6ff, #3fb950)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 10px rgba(88, 166, 255, 0.5))'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(88, 166, 255, 0.4), transparent 70%)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
