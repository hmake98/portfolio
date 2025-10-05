"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiSend, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    const seededRandom = new SeededRandom(55555);
    return Array.from({ length: 60 }, () => ({
      x: seededRandom.next() * 100,
      y: seededRandom.next() * 100,
      size: seededRandom.next() < 0.7 ? 1 : 2,
      opacity: 0.2 + seededRandom.next() * 0.5,
      duration: 2 + seededRandom.next() * 3
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "harsh.make1998@gmail.com",
      href: "mailto:harsh.make1998@gmail.com",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Ahmedabad, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/hmake98",
      icon: <FiGithub size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/hmake98",
      icon: <FiLinkedin size={24} />,
    },
    {
      name: "Email",
      href: "mailto:harsh.make1998@gmail.com",
      icon: <FiMail size={24} />,
    },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden min-h-screen">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-secondary to-bg-primary">
        {/* Background Stars */}
        <div className="absolute inset-0">
          {backgroundStars.map((star, i) => (
            <div
              key={`contact-star-${i}`}
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
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="section-title">Let&apos;s Work Together</h2>
            <p className="section-subtitle mx-auto">
              Connect across the cosmic network to build something amazing
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div variants={cardVariants} className="space-y-6">
              {/* Main Info Card */}
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
                  <h3 className="text-2xl font-semibold text-text-primary flex items-center gap-3">
                    <div
                      className="w-1.5 h-8 rounded-full"
                      style={{
                        background: 'linear-gradient(to bottom, #58a6ff, #3fb950)',
                        boxShadow: '0 0 10px rgba(88, 166, 255, 0.5)'
                      }}
                    />
                    Get in Touch
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    I&apos;m always excited to work on new projects and collaborate with talented teams.
                    Whether you&apos;re looking for a backend engineer, need consultation on system architecture,
                    or want to discuss innovative ideas, feel free to reach out.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-4 pt-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 group/item">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.2), rgba(88, 166, 255, 0.05))',
                            border: '1px solid rgba(88, 166, 255, 0.3)',
                            boxShadow: '0 0 15px rgba(88, 166, 255, 0.2)'
                          }}
                        >
                          <div className="text-accent-primary text-xl">{item.icon}</div>
                        </div>
                        <div>
                          <p className="text-text-secondary text-sm mb-1">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-text-primary hover:text-accent-primary transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-text-primary font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
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

              {/* Social Links Card */}
              <div
                className="group relative rounded-2xl p-6 transition-all duration-500"
                style={{
                  background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(88, 166, 255, 0.2)',
                  boxShadow: '0 0 15px rgba(88, 166, 255, 0.08)'
                }}
              >
                <div
                  className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(88, 166, 255, 0.3), transparent 70%)',
                  }}
                />

                <div className="relative">
                  <h4 className="text-accent-primary font-semibold mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-accent-primary rounded-full" />
                    Connect with me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social w-14 h-14 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, rgba(88, 166, 255, 0.15), rgba(88, 166, 255, 0.03))',
                          border: '1px solid rgba(88, 166, 255, 0.2)',
                          boxShadow: '0 0 10px rgba(88, 166, 255, 0.1)'
                        }}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={cardVariants}>
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

                <div className="relative">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <div
                      className="w-1.5 h-8 rounded-full"
                      style={{
                        background: 'linear-gradient(to bottom, #58a6ff, #3fb950)',
                        boxShadow: '0 0 10px rgba(88, 166, 255, 0.5)'
                      }}
                    />
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-text-primary font-medium mb-2 text-sm"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-text-primary placeholder-text-muted transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(88, 166, 255, 0.2)',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid rgba(88, 166, 255, 0.5)';
                          e.target.style.boxShadow = '0 0 15px rgba(88, 166, 255, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid rgba(88, 166, 255, 0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-text-primary font-medium mb-2 text-sm"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-text-primary placeholder-text-muted transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(88, 166, 255, 0.2)',
                          outline: 'none'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid rgba(88, 166, 255, 0.5)';
                          e.target.style.boxShadow = '0 0 15px rgba(88, 166, 255, 0.2)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid rgba(88, 166, 255, 0.2)';
                          e.target.style.boxShadow = 'none';
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-text-primary font-medium mb-2 text-sm"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-text-primary placeholder-text-muted transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(88, 166, 255, 0.2)',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(88, 166, 255, 0.5)';
                        e.target.style.boxShadow = '0 0 15px rgba(88, 166, 255, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(88, 166, 255, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Project discussion, collaboration, etc."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-text-primary font-medium mb-2 text-sm"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-text-primary placeholder-text-muted transition-all duration-300 resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(88, 166, 255, 0.2)',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '1px solid rgba(88, 166, 255, 0.5)';
                        e.target.style.boxShadow = '0 0 15px rgba(88, 166, 255, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '1px solid rgba(88, 166, 255, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group/btn px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(88, 166, 255, 0.3), rgba(88, 166, 255, 0.1))',
                      border: '2px solid rgba(88, 166, 255, 0.4)',
                      color: '#58a6ff',
                      boxShadow: '0 0 20px rgba(88, 166, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(88, 166, 255, 0.5)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="group-hover/btn:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl"
                      style={{
                        background: 'rgba(63, 185, 80, 0.1)',
                        border: '1px solid rgba(63, 185, 80, 0.3)',
                        boxShadow: '0 0 15px rgba(63, 185, 80, 0.1)'
                      }}
                    >
                      <p className="text-accent-success text-sm">
                        Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl"
                      style={{
                        background: 'rgba(248, 81, 73, 0.1)',
                        border: '1px solid rgba(248, 81, 73, 0.3)',
                        boxShadow: '0 0 15px rgba(248, 81, 73, 0.1)'
                      }}
                    >
                      <p className="text-accent-secondary text-sm">
                        Sorry, there was an error sending your message. Please try again or contact me directly.
                      </p>
                    </motion.div>
                  )}
                </form>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(88, 166, 255, 0.3), transparent 70%)',
                  }}
                />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
