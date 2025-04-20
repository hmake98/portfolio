"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useRef,
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

  // Using a ref to track initialization
  const isInitialized = useRef(false);

  // Store media query instance in a ref to ensure consistency
  const mediaQueryRef = useRef<MediaQueryList | null>(null);

  // Determine if system prefers dark mode
  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "light";

    if (!mediaQueryRef.current) {
      mediaQueryRef.current = window.matchMedia("(prefers-color-scheme: dark)");
    }

    return mediaQueryRef.current.matches ? "dark" : "light";
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

        // Apply the theme to the document with a transition class
        const root = document.documentElement;

        // Add transition class before changing theme
        if (isInitialized.current) {
          root.classList.add("transition-theme");
        }

        // Apply dark/light class
        if (resolvedValue === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }

        // Save the theme preference
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", newTheme);
        }

        // Set initial state flag
        if (!isInitialized.current) {
          isInitialized.current = true;
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
      if (newTheme === theme) return;
      setThemeState(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme, theme]
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

    try {
      // Early script to prevent flash
      const rootElement = document.documentElement;
      const initialColorValue = rootElement.classList.contains("dark")
        ? "dark"
        : "light";
      setResolvedTheme(initialColorValue as "light" | "dark");

      // Get saved theme preference
      let savedTheme: Theme | null = null;

      try {
        savedTheme = localStorage.getItem("theme") as Theme | null;
      } catch (e) {
        console.warn("Could not access localStorage:", e);
      }

      // Set the initial theme state (default to system if no preference)
      const initialTheme = savedTheme || "system";
      setThemeState(initialTheme);

      // Apply the theme immediately
      const resolvedValue =
        initialTheme === "system" ? getSystemTheme() : initialTheme;

      if (resolvedValue === "dark") {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }

      setResolvedTheme(resolvedValue);
      isInitialized.current = true;

      // Setup media query for system preference
      if (!mediaQueryRef.current) {
        mediaQueryRef.current = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
      }

      // Handle system theme changes
      const handleSystemThemeChange = () => {
        // Only update if current theme is "system"
        if (theme === "system") {
          applyTheme("system");
        }
      };

      // Add listener
      mediaQueryRef.current.addEventListener("change", handleSystemThemeChange);

      setIsLoading(false);

      // Cleanup
      return () => {
        if (mediaQueryRef.current) {
          mediaQueryRef.current.removeEventListener(
            "change",
            handleSystemThemeChange
          );
        }
      };
    } catch (e) {
      console.error("Error initializing theme:", e);
      setIsLoading(false);
    }
  }, [getSystemTheme, applyTheme, theme]);

  // Re-apply theme when dependencies change
  useEffect(() => {
    if (mounted && isInitialized.current) {
      applyTheme(theme);
    }
  }, [theme, mounted, applyTheme]);

  // Add listener for transition end to remove transition class
  useEffect(() => {
    if (!mounted) return;

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === "background-color") {
        document.documentElement.classList.remove("transition-theme");
      }
    };

    document.documentElement.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    return () => {
      document.documentElement.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [mounted]);

  // Context value
  const contextValue = {
    theme,
    resolvedTheme,
    toggleTheme,
    setTheme,
    isLoading,
  };

  // Return children directly if not mounted to prevent flash
  if (!mounted) {
    // Apply a class to hide content until mounted if necessary
    return <div className="invisible">{children}</div>;
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
