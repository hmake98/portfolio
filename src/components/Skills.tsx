"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const bubbleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      },
    },
  };

  // All skills in a single array for random positioning
  const allSkills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", size: "large", shining: true },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", size: "large", shining: true },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", size: "large", shining: true },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E", size: "large", shining: false },
    { name: "Angular", icon: SiAngular, color: "#DD0031", size: "medium", shining: true },
    { name: "React", icon: SiReact, color: "#61DAFB", size: "medium", shining: false },
    { name: "Express.js", icon: SiExpress, color: "#000000", size: "medium", shining: false },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098", size: "medium", shining: true },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", size: "medium", shining: false },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", size: "medium", shining: true },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", size: "medium", shining: false },
    { name: "Redis", icon: SiRedis, color: "#DC382D", size: "medium", shining: false },
    { name: "Docker", icon: SiDocker, color: "#2496ED", size: "medium", shining: true },
    { name: "AWS", icon: SiAmazon, color: "#FF9900", size: "medium", shining: false },
    { name: "Git", icon: SiGit, color: "#F05032", size: "medium", shining: true },
    { name: "GitHub", icon: SiGithub, color: "#181717", size: "medium", shining: false },
    { name: "Electron.js", icon: SiElectron, color: "#47848F", size: "small", shining: false },
    { name: "gRPC", icon: SiGoogle, color: "#4285F4", size: "small", shining: true },
    { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600", size: "small", shining: false },
    { name: "Temporal", icon: SiTemporal, color: "#E0234E", size: "small", shining: false },
    { name: "Socket.IO", icon: SiSocketdotio, color: "#010101", size: "small", shining: true },
    { name: "CircleCI", icon: SiCircleci, color: "#343434", size: "small", shining: false },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", size: "small", shining: false },
    { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC", size: "small", shining: false },
    { name: "Puppeteer", icon: SiPuppeteer, color: "#40B5A4", size: "small", shining: true },
    { name: "FFmpeg", icon: SiFfmpeg, color: "#007808", size: "small", shining: false },
    { name: "Blender", icon: SiBlender, color: "#F5792A", size: "small", shining: false },
    { name: "Jest", icon: SiJest, color: "#C21325", size: "small", shining: false },
    { name: "Python", icon: SiPython, color: "#3776AB", size: "small", shining: true },
    { name: "Web3", icon: SiEthereum, color: "#F16822", size: "small", shining: false },
    { name: "Ethereum", icon: SiEthereum, color: "#627EEA", size: "small", shining: true },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large": return "w-20 h-20 text-4xl";
      case "medium": return "w-16 h-16 text-3xl";
      case "small": return "w-12 h-12 text-2xl";
      default: return "w-16 h-16 text-3xl";
    }
  };

  // Generate random positions with guaranteed spacing
  const generatePositions = () => {
    const positions: { x: number; y: number }[] = [];
    
    // Create a grid system to ensure proper spacing with more space between bubbles
    const cols = 7;
    const rows = 5;
    const cellWidth = 90 / cols; // 90% of width divided by columns - spread across full width
    const cellHeight = 80 / rows; // 80% of height divided by rows
    
    // Create all possible grid positions
    const gridPositions: { x: number; y: number }[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        gridPositions.push({
          x: 5 + col * cellWidth + cellWidth / 2 + (Math.random() - 0.5) * cellWidth * 0.3,
          y: 10 + row * cellHeight + cellHeight / 2 + (Math.random() - 0.5) * cellHeight * 0.3,
        });
      }
    }
    
    // Shuffle the grid positions
    for (let i = gridPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gridPositions[i], gridPositions[j]] = [gridPositions[j], gridPositions[i]];
    }
    
    // Assign positions to skills
    for (let i = 0; i < allSkills.length && i < gridPositions.length; i++) {
      positions.push(gridPositions[i]);
    }
    
    return positions;
  };

  const skillPositions = generatePositions();

  return (
    <section id="skills" className="section relative overflow-hidden min-h-screen">
      {/* Stars Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Additional twinkling stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`twinkle-${i}`}
              className="absolute w-px h-px bg-accent-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
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
          <motion.div variants={bubbleVariants} className="text-center mb-8 relative z-20">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive toolkit evolved through 5+ years of building production systems
            </p>
          </motion.div>

          {/* Desktop: Skills Universe - Random Positioned Bubbles */}
          <motion.div
            variants={containerVariants}
            className="hidden lg:block relative h-[700px] md:h-[800px] overflow-hidden"
          >
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const sizeClasses = getSizeClasses(skill.size);
              const position = skillPositions[index];
              
              return (
                <motion.div
                  key={skill.name}
                  variants={bubbleVariants}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group absolute cursor-pointer"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Bubble with blurry background */}
                  <motion.div
                    className={`${sizeClasses} rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl relative overflow-hidden`}
                    animate={{
                      boxShadow: skill.shining ? [
                        `0 0 20px ${skill.color}60`,
                        `0 0 40px ${skill.color}80`,
                        `0 0 60px ${skill.color}60`,
                        `0 0 20px ${skill.color}60`,
                      ] : [
                        `0 0 15px rgba(255,255,255,0.3)`,
                        `0 0 25px rgba(255,255,255,0.4)`,
                        `0 0 15px rgba(255,255,255,0.3)`,
                      ],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      boxShadow: {
                        duration: skill.shining ? 2 : 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      y: {
                        duration: 3 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      },
                    }}
                  >
                    {/* Shining effect for selected bubbles */}
                    {skill.shining && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${skill.color}40, transparent 70%)`,
                        }}
                        animate={{
                          opacity: [0.2, 0.6, 0.2],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    
                    {/* Icon */}
                    <IconComponent
                      className="relative z-10 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        color: skill.color,
                        filter: `drop-shadow(0 0 8px ${skill.color}80)`,
                      }}
                    />

                    {/* Additional glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}30, transparent 60%)`,
                      }}
                    />
                  </motion.div>

                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none">
                    <div className="bg-gray-900/95 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/20 shadow-2xl">
                      <p className="text-xs text-white font-medium whitespace-nowrap">
                        {skill.name}
                      </p>
                      {/* Tooltip arrow */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-l border-t border-white/20 rotate-45"></div>
                    </div>
                  </div>


                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile: Simple Grid Layout */}
          <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-md mx-auto">
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              
              return (
                <motion.div
                  key={skill.name}
                  variants={bubbleVariants}
                  transition={{ duration: 0.6, delay: index * 0.02 }}
                  className="group flex flex-col items-center p-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <IconComponent
                    className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      color: skill.color,
                      filter: `drop-shadow(0 0 4px ${skill.color}60)`,
                    }}
                  />
                  <span className="text-xs text-text-secondary text-center leading-tight">
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
