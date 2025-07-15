"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from "react-icons/fi";
import { SiNodedotjs, SiNestjs, SiGraphql, SiAmazonwebservices, SiPostgresql, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const techStack = [
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="text-[#FF9900]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  ];

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary"></div>
      
      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star shadow-lg"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Floating elements with better positioning */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent-primary rounded-full animate-pulse-slow opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent-primary rounded-full animate-pulse-slow opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent-primary rounded-full animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent-success rounded-full animate-pulse-slow opacity-30" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary leading-tight">
                  Harsh Makwana
                </h1>
                <h2 className="text-xl md:text-2xl text-accent-primary font-medium mb-6">
                  Senior Backend Engineer
                </h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
                  Building scalable microservices and GraphQL APIs with Node.js, NestJS, and cloud-native technologies. 
                  Passionate about clean code, system architecture, and developer experience.
                </p>
              </div>

              {/* Tech Stack */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="skill-badge flex items-center gap-2 text-sm px-4 py-2"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="btn-primary text-center">
                    <FiMail className="inline mr-2" />
                    Get in Touch
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center"
                  >
                    <FiDownload className="inline mr-2" />
                    Download Resume
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hmake98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200 hover:scale-105"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/hmake98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="mailto:harsh.make1998@gmail.com"
                    className="w-12 h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200 hover:scale-105"
                    aria-label="Email"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-success/20 rounded-full blur-3xl scale-110"></div>
                
                {/* Main profile image container */}
                <motion.div 
                  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-border-primary shadow-2xl"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Harsh Makwana"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
                
                {/* Online status indicator */}
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent-success rounded-full border-4 border-bg-primary flex items-center justify-center shadow-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-4 h-4 bg-accent-success rounded-full animate-pulse"></div>
                </motion.div>
                
                {/* Floating tech badges around the image */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-bg-secondary border border-border-primary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <SiNodedotjs className="text-2xl text-[#339933]" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-bg-secondary border border-border-primary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <SiNestjs className="text-2xl text-[#E0234E]" />
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 -left-8 w-12 h-12 bg-bg-secondary border border-border-primary rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    x: [0, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <SiDocker className="text-xl text-[#2496ED]" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Centered at bottom */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center cursor-pointer mt-16"
            onClick={scrollToNext}
          >
            <span className="text-sm text-text-muted mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-accent-primary"
            >
              <FiChevronDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
