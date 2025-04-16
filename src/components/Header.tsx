"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { NavLink } from "@/types";
import { useTheme } from "@/components/ThemeProvider";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  // Header scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu toggle
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking on link
  const closeMenuOnClick = (): void => {
    if (isOpen) setIsOpen(false);
  };

  // Navigation links
  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center space-x-2 font-bold text-xl text-blue-600 dark:text-blue-400"
        >
          <span className="font-extrabold">HM</span>
          <span className="hidden sm:inline">Harsh Makwana</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenuOnClick}
              className="nav-link text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Open menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenuOnClick}
                className="py-3 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
