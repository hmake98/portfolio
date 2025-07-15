"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/hmake98",
      icon: <FiGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/hmake98",
      icon: <FiLinkedin size={20} />,
    },
    {
      name: "Email",
      href: "mailto:harsh.make1998@gmail.com",
      icon: <FiMail size={20} />,
    },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-border-primary">
      <div className="container mx-auto px-6 py-8">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm flex items-center gap-1">
            © {currentYear} Harsh Makwana. Built with
            <FiHeart className="text-accent-secondary w-4 h-4" />
            and Next.js
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-bg-tertiary border border-border-primary rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
