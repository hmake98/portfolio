"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useMemo } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiElectron,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiPrisma,
  SiGoogle,
  SiRabbitmq,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiCircleci,
  SiGithubactions,
  SiGit,
  SiEthereum,
  SiJest,
  SiPython,
  SiSocketdotio,
  SiBlender,
  SiFfmpeg,
  SiTemporal,
  SiPuppeteer,
  SiBitbucket,
  SiGithub,
} from "react-icons/si";

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

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const starVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -50
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.02,
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      },
    }),
  };

  // All skills with random size assignment
  const allSkills = useMemo(() => {
    const seededRandom = new SeededRandom(42);

    const skills = [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Electron.js", icon: SiElectron, color: "#47848F" },
      { name: "gRPC", icon: SiGoogle, color: "#4285F4" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "Temporal", icon: SiTemporal, color: "#000000" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "CircleCI", icon: SiCircleci, color: "#FFFFFF" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Puppeteer", icon: SiPuppeteer, color: "#40B5A4" },
      { name: "FFmpeg", icon: SiFfmpeg, color: "#007808" },
      { name: "Blender", icon: SiBlender, color: "#F5792A" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Web3", icon: SiEthereum, color: "#F16822" },
      { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    ];

    return skills.map((skill) => {
      const rand = seededRandom.next();
      let size;
      if (rand < 0.2) size = 'large';
      else if (rand < 0.5) size = 'medium';
      else size = 'small';

      return {
        ...skill,
        size,
        intensity: seededRandom.next()
      };
    });
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large": return { width: "w-16 h-16", icon: "text-3xl" };
      case "medium": return { width: "w-12 h-12", icon: "text-2xl" };
      case "small": return { width: "w-10 h-10", icon: "text-xl" };
      default: return { width: "w-12 h-12", icon: "text-2xl" };
    }
  };

  // Generate scattered positions with proper spacing to prevent overlap
  const skillPositions = useMemo(() => {
    const positions: { x: number; y: number; size: string }[] = [];
    const seededRandom = new SeededRandom(67890);
    const margin = 5; // 5% margin from edges to prevent cutoff

    // Function to get minimum distance based on sizes
    const getMinDistance = (size1: string, size2: string) => {
      const sizeMap: { [key: string]: number } = {
        large: 8,
        medium: 6,
        small: 5
      };
      return sizeMap[size1] + sizeMap[size2];
    };

    for (let i = 0; i < allSkills.length; i++) {
      let attempts = 0;
      let validPosition = false;
      let x = 0, y = 0;
      const currentSize = allSkills[i].size;

      while (!validPosition && attempts < 200) {
        // Use full width from margin to margin
        x = margin + seededRandom.next() * (100 - 2 * margin);
        y = margin + seededRandom.next() * (100 - 2 * margin);

        // Check if position is far enough from other positions
        validPosition = positions.every(pos => {
          const distance = Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
          const minDist = getMinDistance(currentSize, pos.size);
          return distance > minDist;
        });

        attempts++;
      }

      positions.push({ x, y, size: currentSize });
    }

    return positions.map(pos => ({ x: pos.x, y: pos.y }));
  }, [allSkills]);

  // Reduced background stars for better performance
  const backgroundStars = useMemo(() => {
    if (!isClient) return [];

    const seededRandom = new SeededRandom(99999);
    return Array.from({ length: 40 }, () => ({
      x: seededRandom.next() * 100,
      y: seededRandom.next() * 100,
      size: seededRandom.next() < 0.7 ? 1 : 2,
      opacity: 0.3 + seededRandom.next() * 0.5,
      duration: 2 + seededRandom.next() * 3
    }));
  }, [isClient]);

  return (
    <section id="skills" className="section relative overflow-hidden min-h-screen">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-secondary">
        {/* Background Stars - Simple CSS animation for performance */}
        {isClient && (
          <div className="absolute inset-0">
            {backgroundStars.map((star, i) => (
              <div
                key={`bg-star-${i}`}
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
        )}

        {/* Nebula Effects - Simplified */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-400/40" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 relative z-20"
          >
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle mx-auto">
              A constellation of technologies mastered through 5+ years of building production systems
            </p>
          </motion.div>

          {/* Desktop: Galaxy of Skills */}
          <motion.div
            variants={containerVariants}
            className="hidden lg:block relative h-[700px] w-full"
          >
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const sizeClasses = getSizeClasses(skill.size);
              const position = skillPositions[index];

              return (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={starVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="group absolute cursor-pointer"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Star Glow Effect - Static */}
                  <div
                    className="absolute inset-0 rounded-full blur-md pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}40, transparent 70%)`,
                      width: '120%',
                      height: '120%',
                      left: '-10%',
                      top: '-10%',
                      opacity: skill.intensity * 0.5
                    }}
                  />

                  {/* Star/Bubble Container */}
                  <div
                    className={`${sizeClasses.width} rounded-full relative overflow-hidden flex items-center justify-center`}
                    style={{
                      background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
                      backdropFilter: 'blur(8px)',
                      border: '2px solid',
                      borderColor: `${skill.color}50`,
                      boxShadow: `0 0 20px ${skill.color}40, inset 0 0 15px ${skill.color}20`
                    }}
                  >
                    {/* Inner Glow */}
                    <div
                      className="absolute inset-0 rounded-full opacity-30 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${skill.color}40, transparent 65%)`,
                      }}
                    />

                    {/* Icon */}
                    <IconComponent
                      className={`${sizeClasses.icon} relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 0 8px ${skill.color}80)`,
                      }}
                    />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none">
                    <div
                      className="backdrop-blur-lg rounded-lg px-4 py-2 border shadow-2xl whitespace-nowrap"
                      style={{
                        background: 'rgba(0, 0, 0, 0.8)',
                        borderColor: `${skill.color}60`,
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                    >
                      <p className="text-sm text-white font-medium">
                        {skill.name}
                      </p>
                      <div
                        className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45"
                        style={{
                          background: 'rgba(0, 0, 0, 0.8)',
                          borderLeft: `1px solid ${skill.color}60`,
                          borderTop: `1px solid ${skill.color}60`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Orbital Ring (for larger stars) - CSS animation */}
                  {skill.size === 'large' && (
                    <div
                      className="absolute inset-0 rounded-full border border-opacity-20 animate-spin pointer-events-none"
                      style={{
                        borderColor: skill.color,
                        width: '130%',
                        height: '130%',
                        left: '-15%',
                        top: '-15%',
                        animationDuration: '20s',
                        opacity: 0.3
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile: Star Grid Layout */}
          <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-md mx-auto">
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={starVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 relative"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                    backdropFilter: 'blur(6px)',
                    border: '1px solid',
                    borderColor: `${skill.color}30`,
                    boxShadow: `0 0 12px ${skill.color}30`
                  }}
                >
                  {/* Mobile Star Glow - Static */}
                  <div
                    className="absolute inset-0 rounded-xl blur-md -z-10 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${skill.color}30, transparent 70%)`,
                      opacity: 0.4
                    }}
                  />

                  <IconComponent
                    className="text-2xl mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                    style={{
                      color: skill.color,
                      filter: `drop-shadow(0 0 6px ${skill.color}80)`,
                    }}
                  />
                  <span className="text-xs text-white/80 text-center leading-tight font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
