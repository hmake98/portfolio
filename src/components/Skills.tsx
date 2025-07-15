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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", proficiency: 95 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", proficiency: 90 },
        { name: "Angular", icon: SiAngular, color: "#DD0031", proficiency: 85 },
        { name: "React", icon: SiReact, color: "#61DAFB", proficiency: 80 },
        { name: "Electron.js", icon: SiElectron, color: "#47848F", proficiency: 85 },
      ],
    },
    {
      title: "Backend Development",
      description: "Server-side technologies and APIs",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", proficiency: 95 },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E", proficiency: 90 },
        { name: "Express.js", icon: SiExpress, color: "#000000", proficiency: 88 },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098", proficiency: 85 },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748", proficiency: 88 },
        { name: "gRPC", icon: SiGoogle, color: "#4285F4", proficiency: 80 },
        { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600", proficiency: 85 },

        { name: "Temporal", icon: SiTemporal, color: "#E0234E", proficiency: 75 },
        { name: "Socket.IO", icon: SiSocketdotio, color: "#010101", proficiency: 85 },
        { name: "Python", icon: SiPython, color: "#3776AB", proficiency: 75 },
      ],
    },
    {
      title: "Database & Storage",
      description: "Data persistence and caching solutions",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", proficiency: 90 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", proficiency: 85 },
        { name: "Redis", icon: SiRedis, color: "#DC382D", proficiency: 88 },
      ],
    },
    {
      title: "DevOps & Cloud",
      description: "Infrastructure and deployment tools",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED", proficiency: 88 },
        { name: "AWS", icon: SiAmazon, color: "#FF9900", proficiency: 85 },
        { name: "CircleCI", icon: SiCircleci, color: "#343434", proficiency: 85 },
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", proficiency: 88 },
        { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC", proficiency: 75 },
      ],
    },
    {
      title: "Web3 & Blockchain",
      description: "Blockchain technologies and decentralized systems",
      skills: [
        { name: "Web3", icon: SiEthereum, color: "#F16822", proficiency: 80 },
        { name: "Ethereum", icon: SiEthereum, color: "#627EEA", proficiency: 75 },
        { name: "Web3Auth", icon: SiEthereum, color: "#627EEA", proficiency: 70 },
        { name: "NFT Systems", icon: SiEthereum, color: "#627EEA", proficiency: 75 },
      ],
    },
    {
      title: "Tools & Automation",
      description: "Development tools and automation utilities",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", proficiency: 95 },
        { name: "GitHub", icon: SiGithub, color: "#181717", proficiency: 90 },
        { name: "Puppeteer", icon: SiPuppeteer, color: "#40B5A4", proficiency: 80 },
        { name: "FFmpeg", icon: SiFfmpeg, color: "#007808", proficiency: 70 },
        { name: "Blender", icon: SiBlender, color: "#F5792A", proficiency: 65 },
        { name: "Jest", icon: SiJest, color: "#C21325", proficiency: 85 },
      ],
    },
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "text-accent-success";
    if (proficiency >= 80) return "text-accent-primary";
    if (proficiency >= 70) return "text-accent-warning";
    return "text-text-secondary";
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive toolkit evolved through 5+ years of building production systems, from frontend to backend to full-stack development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group relative bg-bg-secondary rounded-xl p-6 border border-border-primary hover:border-accent-primary/30 transition-all duration-300 hover:transform hover:scale-105"
                        whileHover={{ y: -5 }}
                      >
                        {/* Skill Icon and Name */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex-shrink-0">
                            <IconComponent
                              className="text-2xl transition-colors duration-200"
                              style={{ 
                                color: skill.color,
                                filter: 'brightness(0.9)'
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-text-primary font-semibold text-sm truncate">
                              {skill.name}
                            </h4>
                          </div>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-text-secondary">
                              {getProficiencyLabel(skill.proficiency)}
                            </span>
                            <span className={`text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="w-full bg-bg-tertiary rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-success"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-success/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-bg-secondary to-bg-tertiary rounded-2xl p-8 border border-border-primary">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Technical Expertise Overview
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Evolved from frontend development to full-stack engineering with expertise in microservices, cloud infrastructure, and blockchain technologies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-xl bg-bg-primary/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-success rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1">Years Experience</h4>
                  <p className="text-text-secondary text-sm">Full-stack development</p>
                </div>
                
                <div className="text-center p-4 rounded-xl bg-bg-primary/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-warning to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">40+</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1">Technologies</h4>
                  <p className="text-text-secondary text-sm">Languages & frameworks</p>
                </div>
                
                <div className="text-center p-4 rounded-xl bg-bg-primary/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-success to-accent-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">50+</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1">Projects Delivered</h4>
                  <p className="text-text-secondary text-sm">Production applications</p>
                </div>
                
                <div className="text-center p-4 rounded-xl bg-bg-primary/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-secondary to-accent-warning rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-1">Open Source</h4>
                  <p className="text-text-secondary text-sm">NPM packages published</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
