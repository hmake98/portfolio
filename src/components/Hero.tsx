"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from "react-icons/fi";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ShootingStars } from "@/components/ui/shooting-stars";
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

// Seeded random function for consistent values
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Helper function to round to consistent precision
const roundToPrecision = (value: number, precision: number = 2) => {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
};

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

  // Memoize accent stars to prevent recreation with deterministic values
  const accentStars = useMemo(() => 
    [...Array(8)].map((_, i) => {
      const seed = i * 123.456;
      return {
        id: i,
        left: `${roundToPrecision(seededRandom(seed) * 100, 2)}%`,
        top: `${roundToPrecision(seededRandom(seed + 1) * 100, 2)}%`,
        duration: 3 + seededRandom(seed + 2) * 4,
        delay: seededRandom(seed + 3) * 5,
      };
    }), []
  );

  // Generate background stars like other sections
  const backgroundStars = useMemo(() => {
    const seededRandom = new SeededRandom(11111);
    return Array.from({ length: 80 }, () => ({
      x: seededRandom.next() * 100,
      y: seededRandom.next() * 100,
      size: seededRandom.next() < 0.7 ? 1 : 2,
      opacity: 0.2 + seededRandom.next() * 0.5,
      duration: 2 + seededRandom.next() * 3
    }));
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0" style={{ marginBottom: 0, paddingBottom: 0 }}>
      {/* Space Background - Matching gradient with About section */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-secondary">
        {/* Background Stars - CSS pulse animation like other sections */}
        <div className="absolute inset-0">
          {backgroundStars.map((star, i) => (
            <div
              key={`hero-star-${i}`}
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

        {/* Accent Stars - Additional glow */}
        <div className="absolute inset-0">
          {accentStars.map((star) => (
            <div
              key={`accent-star-${star.id}`}
              className="absolute w-1 h-1 bg-accent-primary rounded-full animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                opacity: 0.4,
                boxShadow: '0 0 4px rgba(88, 166, 255, 0.6)'
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <ShootingStars
          minSpeed={12}
          maxSpeed={25}
          minDelay={20000}
          maxDelay={60000}
          starColor="#ffffff"
          trailColor="#58a6ff"
          starWidth={12}
          starHeight={1.5}
          isVisible={inView}
        />

        {/* Nebula Effects - Static for performance */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-400/40" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30" />
        </div>
      </div>

      {/* Glowing Horizon Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none z-20">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(88, 166, 255, 0.6) 20%, rgba(88, 166, 255, 0.8) 50%, rgba(88, 166, 255, 0.6) 80%, transparent)',
            boxShadow: '0 0 40px rgba(88, 166, 255, 0.5), 0 0 80px rgba(88, 166, 255, 0.3)',
            height: '2px'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(88, 166, 255, 0.3) 30%, rgba(88, 166, 255, 0.4) 50%, rgba(88, 166, 255, 0.3) 70%, transparent)',
            filter: 'blur(20px)',
            height: '60px',
            top: '-30px'
          }}
        />
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
                  <Link
                    href="#contact"
                    className="group px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(88, 166, 255, 0.3), rgba(88, 166, 255, 0.1))',
                      border: '2px solid rgba(88, 166, 255, 0.4)',
                      color: '#58a6ff',
                      boxShadow: '0 0 20px rgba(88, 166, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(88, 166, 255, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FiMail className="group-hover:scale-110 transition-transform" />
                    Get in Touch
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                      border: '2px solid rgba(88, 166, 255, 0.3)',
                      color: '#58a6ff',
                      boxShadow: '0 0 15px rgba(88, 166, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(88, 166, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(88, 166, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FiDownload className="group-hover:scale-110 transition-transform" />
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
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.15), rgba(88, 166, 255, 0.03))',
                      border: '1px solid rgba(88, 166, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(88, 166, 255, 0.1)'
                    }}
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/hmake98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.15), rgba(88, 166, 255, 0.03))',
                      border: '1px solid rgba(88, 166, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(88, 166, 255, 0.1)'
                    }}
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="mailto:harsh.make1998@gmail.com"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.15), rgba(88, 166, 255, 0.03))',
                      border: '1px solid rgba(88, 166, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(88, 166, 255, 0.1)'
                    }}
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
              className="flex justify-center items-center order-1 lg:order-2 lg:ml-8"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
                {/* Simplified Outer Space Nebula */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/30 to-cyan-400/20 rounded-full blur-3xl scale-150"
                  animate={{
                    scale: [1.5, 1.8, 1.5],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                {/* Simplified Cosmic Background Effects */}
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

                {/* Simplified Space Dust Cloud - Reduced count */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                >
                  {[...Array(8)].map((_, i) => { // Reduced from 20 to 8
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
                
                {/* Main profile image container - Simplified */}
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
                  {/* Simplified Planet Atmosphere Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-500/20 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/15 via-transparent to-blue-500/15 rounded-full" />
                  
                  {/* Simplified Surface Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, rgba(88, 166, 255, 0.4), transparent 60%)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
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

                  {/* Simplified Planet Surface Highlight */}
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

          {/* Simplified Cosmic Scroll Indicator */}
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
