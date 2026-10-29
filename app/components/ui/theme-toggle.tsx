"use client";

import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute accurate theme state checking next-themes state and DOM class
  const isDark = mounted
    ? resolvedTheme === "dark" ||
      theme === "dark" ||
      (typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark"))
    : true; // Default theme is dark

  // Keep DOM class in sync whenever resolvedTheme or theme updates
  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;
    const currentIsDark =
      resolvedTheme === "dark" ||
      theme === "dark" ||
      (!resolvedTheme && document.documentElement.classList.contains("dark"));

    if (currentIsDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [mounted, resolvedTheme, theme]);

  const toggleTheme = useCallback(() => {
    const htmlEl = typeof document !== "undefined" ? document.documentElement : null;
    const currentlyDark = htmlEl
      ? htmlEl.classList.contains("dark")
      : resolvedTheme === "dark" || theme === "dark";

    const targetTheme = currentlyDark ? "light" : "dark";

    // 1. Update next-themes context state
    setTheme(targetTheme);

    // 2. Direct DOM class manipulation guarantees immediate update on <html>
    if (htmlEl) {
      if (targetTheme === "dark") {
        htmlEl.classList.add("dark");
        htmlEl.classList.remove("light");
      } else {
        htmlEl.classList.remove("dark");
        htmlEl.classList.add("light");
      }
      htmlEl.style.colorScheme = targetTheme;
    }

    // 3. Persist to localStorage safely
    try {
      localStorage.setItem("theme", targetTheme);
    } catch {
      // Ignore private browsing quota issues
    }
  }, [resolvedTheme, theme, setTheme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card text-foreground shadow-sm transition-all duration-200 hover:bg-muted hover:border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95 cursor-pointer"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Sun
        className={`h-4 w-4 text-amber-500 transition-all duration-300 ${
          isDark
            ? "rotate-90 scale-0 opacity-0 absolute pointer-events-none"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`h-4 w-4 text-indigo-400 transition-all duration-300 ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0 absolute pointer-events-none"
        }`}
      />
      <span className="sr-only">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
    </button>
  );
}

