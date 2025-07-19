"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from "react-icons/fi";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemTransition = { duration: 0.6 };



  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Space Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        {/* Accent Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`accent-star-${i}`}
              className="absolute w-1 h-1 bg-accent-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Cosmic Dust Clouds */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-accent-primary/30 to-transparent"
              style={{
                width: `${60 + Math.random() * 120}px`,
                height: `${25 + Math.random() * 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                x: [0, 40, -40, 0],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Advanced Shooting Stars */}
        <ShootingStars 
          minSpeed={15}
          maxSpeed={35}
          minDelay={8000}
          maxDelay={25000}
          starColor="#ffffff"
          trailColor="#58a6ff"
          starWidth={15}
          starHeight={2}
        />
        
        {/* Enhanced Stars Background */}
        <StarsBackground 
          starDensity={0.0002}
          allStarsTwinkle={true}
          twinkleProbability={0.8}
          minTwinkleSpeed={0.3}
          maxTwinkleSpeed={1.2}
        />

        {/* Nebula Effects */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`nebula-${i}`}
              className="absolute rounded-full blur-3xl opacity-10"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#58a6ff', '#3fb950', '#f85149', '#d29922'][i]
                }40, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mt-4 sm:mt-8 md:mt-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} transition={itemTransition} className="text-left order-2 lg:order-1">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-text-primary leading-tight">
                  Harsh Makwana
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-accent-primary font-medium mb-4 sm:mb-6">
                  Senior Backend Engineer
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
                  Building scalable microservices and GraphQL APIs with Node.js, NestJS, and cloud-native technologies. 
                  Passionate about clean code, system architecture, and developer experience.
                </p>
              </div>



              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="#contact" className="btn-primary text-center text-sm sm:text-base">
                    <FiMail className="inline mr-2" />
                    Get in Touch
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center text-sm sm:text-base"
                  >
                    <FiDownload className="inline mr-2" />
                    Download Resume
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} transition={itemTransition}>
                <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                  <a
                    href="https://github.com/hmake98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200 hover:scale-105"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/hmake98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:harsh.make1998@gmail.com"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-bg-secondary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all duration-200 hover:scale-105"
                    aria-label="Email"
                  >
                    <FiMail size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              variants={itemVariants}
              transition={itemTransition}
              className="flex justify-center items-center order-1 lg:order-2 lg:ml-8"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
                {/* Outer Space Nebula */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/30 to-cyan-400/20 rounded-full blur-3xl scale-150"
                  animate={{
                    scale: [1.5, 1.8, 1.5],
                    opacity: [0.2, 0.5, 0.2],
                    rotate: [0, 360],
                  }}
                  transition={{
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                  }}
                />

                {/* Cosmic Background Effects */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/25 to-accent-success/25 rounded-full blur-2xl scale-125"
                  animate={{
                    scale: [1.25, 1.45, 1.25],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />



                {/* Space Dust Cloud */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                >
                  {[...Array(20)].map((_, i) => {
                    // Use index-based positioning to ensure consistency between server and client
                    const leftPos = 20 + (i * 17) % 60;
                    const topPos = 20 + (i * 23) % 60;
                    const duration = 4 + (i % 3);
                    const delay = (i % 5) * 0.4;
                    
                    return (
                      <motion.div
                        key={`dust-${i}`}
                        className="absolute w-px h-px bg-white/30 rounded-full"
                        style={{
                          left: `${leftPos}%`,
                          top: `${topPos}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          delay: delay,
                        }}
                      />
                    );
                  })}
                </motion.div>
                
                {/* Main profile image container - Planet Core */}
                <motion.div 
                  className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 sm:border-4 border-white/40 shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 80px rgba(88, 166, 255, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.15)",
                      "0 0 120px rgba(88, 166, 255, 0.8), inset 0 0 40px rgba(255, 255, 255, 0.25)",
                      "0 0 80px rgba(88, 166, 255, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.15)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Planet Atmosphere Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-500/20 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/15 via-transparent to-blue-500/15 rounded-full" />
                  
                  {/* Surface Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, rgba(88, 166, 255, 0.4), transparent 60%)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <Image
                    src="/images/profile.jpg"
                    alt="Harsh Makwana"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full relative z-10 brightness-110 contrast-110"
                    style={{ transform: 'rotate(0deg)' }}
                    priority
                  />

                  {/* Planet Surface Highlight */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.3), transparent 50%)`,
                    }}
                  />
                </motion.div>
                


              </div>
            </motion.div>
          </div>

          {/* Cosmic Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex flex-col items-center cursor-pointer mt-8 sm:mt-12 lg:mt-16"
            onClick={scrollToNext}
          >
            <motion.span 
              className="text-xs sm:text-sm mb-2 text-center"
              animate={{
                color: ["#8b949e", "#58a6ff", "#8b949e"],
                textShadow: [
                  "0 0 5px rgba(139, 148, 158, 0.3)",
                  "0 0 15px rgba(88, 166, 255, 0.8)",
                  "0 0 5px rgba(139, 148, 158, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Explore the universe
            </motion.span>
            <motion.div
              className="relative"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-lg"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(88, 166, 255, 0.4)",
                    "0 0 20px rgba(88, 166, 255, 0.8)",
                    "0 0 10px rgba(88, 166, 255, 0.4)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{
                  color: ["#58a6ff", "#3fb950", "#58a6ff"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiChevronDown size={28} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
