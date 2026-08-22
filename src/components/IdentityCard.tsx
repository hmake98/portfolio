import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const socialLinks = [
  { name: "Email", href: "mailto:harsh.make1998@gmail.com", icon: FiMail },
  { name: "GitHub", href: "https://github.com/hmake98", icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/hmake98", icon: FiLinkedin },
  { name: "Resume", href: "/resume.pdf", icon: FiDownload },
];

/** Left-column identity card: photo, name, role, company, and quick-contact icons. */
export default function IdentityCard() {
  return (
    <div className="text-center lg:text-left">
      <div className="relative w-40 h-40 lg:w-full lg:h-auto lg:aspect-[3/4] mx-auto lg:mx-0 rounded-xl overflow-hidden border border-border-primary bg-bg-secondary mb-4">
        <Image
          src="/avatar.webp"
          alt="Harsh Makwana"
          fill
          sizes="(min-width: 1024px) 220px, 160px"
          className="object-cover"
          priority
        />
      </div>

      <h3 className="text-xl font-bold text-text-primary">Harsh Makwana</h3>
      <p className="text-sm text-text-secondary mt-1">Senior Backend Engineer</p>
      <p className="text-sm text-text-muted">Simform Solutions</p>

      <div className="flex justify-center lg:justify-start gap-4 mt-5">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
            rel={href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
            className="text-text-secondary hover:text-accent-primary transition-colors"
            aria-label={name}
          >
            <Icon size={19} />
          </a>
        ))}
      </div>
    </div>
  );
}
