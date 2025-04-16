// src/app/theme-script.tsx
"use client";

import { useEffect } from "react";

export function ThemeScript() {
  useEffect(() => {
    // This is executed client-side only
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Initialize theme when component mounts
    initializeTheme();

    // Add script to head to prevent flash
    const script = document.createElement("script");
    script.innerHTML = `
      (function() {
        try {
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();
    `;
    document.head.appendChild(script);

    return () => {
      // Clean up if needed
    };
  }, []);

  return null;
}
