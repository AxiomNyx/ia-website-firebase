"use client";

import React from "react";
import { ThemeProvider } from "next-themes"; // Import directly from next-themes
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Assuming Footer exists

type RootLayoutWrapperProps = {
  children: React.ReactNode;
  ubuntu: { variable: string }; // Keep if used for font class
  jetbrains: { variable: string }; // Keep if used for font class
};

export default function RootLayoutWrapper({
  children,
}: RootLayoutWrapperProps) {
  return (
    <ThemeProvider
      attribute="class" // Use class-based theme switching
      defaultTheme="system" // Default to system preference
      enableSystem // Enable system preference detection
      disableTransitionOnChange // Prevent transitions on theme change
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Main content area - Add padding top to account for fixed navbar */}
        <main className="flex-grow w-full pt-16"> {/* Navbar height is h-16 */}
           {children} 
        </main>
        <Footer /> {/* Include Footer */} 
      </div>
    </ThemeProvider>
  );
}
