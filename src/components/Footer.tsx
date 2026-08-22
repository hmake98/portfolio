import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const socialLinks = [
  { name: "Email", href: "mailto:harsh.make1998@gmail.com", icon: FiMail },
  { name: "GitHub", href: "https://github.com/hmake98", icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/hmake98", icon: FiLinkedin },
  { name: "Resume", href: "/resume.pdf", icon: FiDownload },
];

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 mt-4 border-t border-border-primary">
      <div className="flex gap-5">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
            rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
            className="text-text-secondary hover:text-accent-primary transition-colors"
            aria-label={name}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-xs text-text-muted">© 2026 · Harsh Makwana</p>
    </div>
  );
}
