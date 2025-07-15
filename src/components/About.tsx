"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiServer, FiCloud, FiUsers } from "react-icons/fi";

const About: React.FC = () => {
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

  const highlights = [
    {
      icon: <FiServer className="text-accent-primary" />,
      title: "Backend Architecture",
      description: "Designing scalable microservices with Node.js and NestJS"
    },
    {
      icon: <FiCode className="text-accent-primary" />,
      title: "API Development",
      description: "Building robust GraphQL and REST APIs with proper documentation"
    },
    {
      icon: <FiCloud className="text-accent-primary" />,
      title: "Cloud Infrastructure",
      description: "Deploying and managing applications on AWS with containers"
    },
    {
      icon: <FiUsers className="text-accent-primary" />,
      title: "Team Leadership",
      description: "Mentoring developers and driving technical excellence"
    }
  ];

  return (
    <section id="about" className="section bg-bg-secondary">
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
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto">
              Passionate about building efficient, scalable backend systems that power great user experiences.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  Senior Backend Engineer
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  With 5+ years of experience in software development, I specialize in building high-performance 
                  backend systems that scale. My expertise spans across modern frameworks, cloud technologies, 
                  and best practices in software architecture.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-3">
                  What drives me
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;m passionate about clean code, system design, and developer experience. I believe in 
                  writing maintainable code that not only solves problems but also makes the development 
                  process enjoyable for the entire team.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-bg-tertiary rounded-lg border border-border-primary">
                  <div className="text-2xl font-bold text-accent-primary">5+</div>
                  <div className="text-sm text-text-secondary">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-bg-tertiary rounded-lg border border-border-primary">
                  <div className="text-2xl font-bold text-accent-primary">20+</div>
                  <div className="text-sm text-text-secondary">Projects Delivered</div>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 bg-bg-primary rounded-lg border border-border-primary hover:bg-bg-tertiary transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center border border-border-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default About;
