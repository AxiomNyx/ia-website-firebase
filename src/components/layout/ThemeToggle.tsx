"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa"; // Example icons

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return <div className="w-9 h-9"></div>; 
  }

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md hover:bg-muted transition-colors"
    >
      {theme === "light" ? (
        <FaMoon className="h-5 w-5 text-text-primary" />
      ) : (
        <FaSun className="h-5 w-5 text-text-primary" />
      )}
    </button>
  );
}
