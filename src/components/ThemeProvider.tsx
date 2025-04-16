"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create context with a default value to avoid undefined
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Once mounted, we can access window object safely
  useEffect(() => {
    setMounted(true);

    // Get initial theme from localStorage or system preference
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;

        if (savedTheme) {
          setTheme(savedTheme);
        } else if (prefersDark) {
          setTheme("dark");
        }
      } catch (e) {
        console.error("Error initializing theme:", e);
      }
    };

    initializeTheme();

    // Listen for system preference changes
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (e) {
      console.error("Error setting up media query listener:", e);
      return () => {};
    }
  }, []);

  // Apply theme to document when theme changes
  useEffect(() => {
    if (!mounted) return;

    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Error applying theme:", e);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
