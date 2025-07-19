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

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mt-8 md:mt-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} transition={itemTransition} className="text-left">
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
              <motion.div variants={itemVariants} transition={itemTransition}>
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
              transition={itemTransition}
              className="flex justify-center lg:justify-center lg:ml-8"
            >
              <div className="relative">
                {/* Cosmic Background Effects */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-success/20 rounded-full blur-3xl scale-110"
                  animate={{
                    scale: [1.1, 1.3, 1.1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                
                {/* Main profile image container - Planet Core */}
                <div 
                  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                  style={{
                    boxShadow: "0 0 60px rgba(88, 166, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Atmosphere Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-success/10 rounded-full" />
                  
                  <Image
                    src="/images/profile.jpg"
                    alt="Harsh Makwana"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full relative z-10"
                    priority
                  />
                </div>
                

              </div>
            </motion.div>
          </div>

          {/* Cosmic Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            transition={itemTransition}
            className="flex flex-col items-center cursor-pointer mt-16"
            onClick={scrollToNext}
          >
            <motion.span 
              className="text-sm mb-2"
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
