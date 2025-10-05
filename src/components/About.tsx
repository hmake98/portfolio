"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiServer, FiCloud, FiUsers } from "react-icons/fi";
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
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      },
    },
  };

  // Generate background stars
  const backgroundStars = useMemo(() => {
    const seededRandom = new SeededRandom(66666);
    return Array.from({ length: 50 }, () => ({
      x: seededRandom.next() * 100,
      y: seededRandom.next() * 100,
      size: seededRandom.next() < 0.7 ? 1 : 2,
      opacity: 0.2 + seededRandom.next() * 0.4,
      duration: 2 + seededRandom.next() * 3
    }));
  }, []);

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
    <section id="about" className="section relative overflow-hidden min-h-screen" style={{ marginTop: 0, paddingTop: '5rem' }}>
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-secondary to-bg-primary">
        {/* Background Stars */}
        <div className="absolute inset-0">
          {backgroundStars.map((star, i) => (
            <div
              key={`about-star-${i}`}
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
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto">
              Engineering scalable systems in the vast universe of backend development
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
            {/* Text Content */}
            <motion.div variants={cardVariants} className="space-y-6">
              {/* Main Card */}
              <div
                className="group relative rounded-2xl p-8 transition-all duration-500"
                style={{
                  background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(88, 166, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(88, 166, 255, 0.1)'
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(88, 166, 255, 0.4), transparent 70%)',
                  }}
                />

                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                      <div
                        className="w-1.5 h-8 rounded-full"
                        style={{
                          background: 'linear-gradient(to bottom, #58a6ff, #3fb950)',
                          boxShadow: '0 0 10px rgba(88, 166, 255, 0.5)'
                        }}
                      />
                      Senior Backend Engineer
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      With 5+ years of experience in software development, I specialize in building high-performance
                      backend systems that scale. My expertise spans across modern frameworks, cloud technologies,
                      and best practices in software architecture.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-lg font-semibold text-accent-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-5 bg-accent-primary rounded-full" />
                      What drives me
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      I&apos;m passionate about clean code, system design, and developer experience. I believe in
                      writing maintainable code that not only solves problems but also makes the development
                      process enjoyable for the entire team.
                    </p>
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

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "20+", label: "Projects Delivered" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5, type: "spring" }}
                    className="group relative text-center p-6 rounded-2xl transition-all duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(88, 166, 255, 0.2)',
                      boxShadow: '0 0 15px rgba(88, 166, 255, 0.1)'
                    }}
                  >
                    <div
                      className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(88, 166, 255, 0.4), transparent 70%)',
                      }}
                    />
                    <div className="relative">
                      <div
                        className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #58a6ff, #3fb950)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 0 8px rgba(88, 166, 255, 0.4))'
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-text-secondary font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={cardVariants} className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, type: "spring" }}
                  className="group relative flex items-start gap-4 p-5 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(88, 166, 255, 0.2)',
                    boxShadow: '0 0 15px rgba(88, 166, 255, 0.08)'
                  }}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(88, 166, 255, 0.3), transparent 70%)',
                    }}
                  />

                  {/* Icon Container */}
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.2), rgba(88, 166, 255, 0.05))',
                      border: '1px solid rgba(88, 166, 255, 0.3)',
                      boxShadow: '0 0 15px rgba(88, 166, 255, 0.2)'
                    }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1">
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-10 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at top right, rgba(88, 166, 255, 0.4), transparent 70%)',
                    }}
                  />
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
