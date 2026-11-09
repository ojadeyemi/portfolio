"use client";

// External imports
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Theme constants
const _LIGHT = "light";
const _DARK = "dark";

type ThemeType = typeof _LIGHT | typeof _DARK;

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(_DARK);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage after mounting
  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === _LIGHT || savedTheme === _DARK) {
        setTheme(savedTheme);
      }
    } catch {
      // Storage can be blocked by the browser, keep the default theme
    }
  }, []);

  // Update document attribute and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === _DARK);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage can be blocked by the browser, the theme just won't persist
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
