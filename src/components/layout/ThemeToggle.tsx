"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa"; // Added FaDesktop

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const cycleTheme = () => {
    if (!theme) return; // Should ideally not happen with default set

    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else { // theme === "dark"
      setTheme("system");
    }
  };

  if (!mounted) {
    // Render a placeholder or null on the server
    // Match the size of the button for layout consistency
    return <div className="w-9 h-9 p-2"></div>;
  }

  return (
    <button
      aria-label="Toggle Theme"
      onClick={cycleTheme}
      className="p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring" // Added focus styles
    >
      {theme === "light" && <FaMoon className="h-5 w-5 text-foreground" />}
      {theme === "dark" && <FaSun className="h-5 w-5 text-foreground" />}
      {/* Show Desktop icon when theme is system, clicking goes to light */}
      {theme === "system" && <FaDesktop className="h-5 w-5 text-foreground" />}
    </button>
  );
}
