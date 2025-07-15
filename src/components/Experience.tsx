"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { experiences } from "@/data/experiences";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mx-auto">
              My professional journey in backend development and system architecture
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-border-primary hidden md:block" />
            
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="timeline-item mb-12 last:mb-0"
              >
                <div className="bg-bg-secondary rounded-xl p-6 border border-border-primary ml-0 md:ml-16">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg text-accent-primary font-medium">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                      <div className="flex items-center gap-2 text-text-secondary text-sm">
                        <FiCalendar size={14} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary text-sm">
                        <FiMapPin size={14} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-6">
                    {experience.description.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-text-primary font-medium mb-3 text-sm">
                      Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="skill-badge text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-bg-secondary rounded-xl border border-border-primary">
              <div className="text-3xl font-bold text-accent-primary mb-2">5+</div>
              <div className="text-text-secondary text-sm">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-bg-secondary rounded-xl border border-border-primary">
              <div className="text-3xl font-bold text-accent-primary mb-2">50+</div>
              <div className="text-text-secondary text-sm">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-bg-secondary rounded-xl border border-border-primary">
              <div className="text-3xl font-bold text-accent-primary mb-2">10+</div>
              <div className="text-text-secondary text-sm">Developers Mentored</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
