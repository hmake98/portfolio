"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Misc", id: "misc" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-48 bg-bg-primary border-r border-border-primary p-8 flex flex-col justify-between hidden lg:flex">
      {/* Logo */}
      <div>
        <Link
          href="#about"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary text-bg-primary font-bold mb-12 hover:opacity-80 transition-opacity text-sm"
        >
          HM
        </Link>

        {/* Navigation */}
        <nav className="space-y-6">
          {navLinks.map((link) => (
            <div key={link.id}>
              <Link
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                • {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer text */}
      <div className="text-xs text-text-muted">
        © 2026 Harsh Makwana
      </div>
    </aside>
  );
};

export default Sidebar;
