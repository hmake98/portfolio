"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isLoading: boolean;
};

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  resolvedTheme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
  isLoading: true,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // We treat "system" as a valid option now
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Determine if system prefers dark mode
  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  // Function to get theme and apply it to document
  const applyTheme = useCallback(
    (newTheme: Theme) => {
      if (!mounted) return;

      try {
        // Determine the actual theme (resolving "system" if needed)
        const resolvedValue =
          newTheme === "system" ? getSystemTheme() : newTheme;

        // Update the resolved theme state
        setResolvedTheme(resolvedValue);

        // Apply the theme to the document
        if (resolvedValue === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        // Save the theme preference
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", newTheme);
        }
      } catch (e) {
        console.error("Error applying theme:", e);
      }
    },
    [mounted, getSystemTheme]
  );

  // Set theme function that can be exposed to consumers
  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  // Toggle between light and dark (while preserving system preference)
  const toggleTheme = useCallback(() => {
    if (theme === "system") {
      // If currently using system preference, toggle based on resolved theme
      setTheme(resolvedTheme === "light" ? "dark" : "light");
    } else {
      // Otherwise toggle between light and dark
      setTheme(theme === "light" ? "dark" : "light");
    }
  }, [theme, resolvedTheme, setTheme]);

  // Initialize on mount
  useEffect(() => {
    setMounted(true);
    setIsLoading(true);

    try {
      // Get saved theme preference
      const savedTheme = localStorage.getItem("theme") as Theme | null;

      // Set the initial theme state (default to system if no preference)
      const initialTheme = savedTheme || "system";
      setThemeState(initialTheme);

      // Apply the theme
      applyTheme(initialTheme);

      // Setup listener for system preference changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = () => {
        // Only update if theme is set to "system"
        if (theme === "system") {
          applyTheme("system");
        }
      };

      // Add listener
      mediaQuery.addEventListener("change", handleSystemThemeChange);

      // Cleanup
      setIsLoading(false);

      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    } catch (e) {
      console.error("Error initializing theme:", e);
      setIsLoading(false);
      return () => {};
    }
  }, [mounted, applyTheme, theme]);

  // Re-apply theme when dependencies change
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted, applyTheme]);

  // Context value
  const contextValue = {
    theme,
    resolvedTheme,
    toggleTheme,
    setTheme,
    isLoading,
  };

  // Prevent flash of wrong theme by hiding content until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
