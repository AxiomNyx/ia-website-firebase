"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type RootLayoutWrapperProps = {
  children: React.ReactNode;
  ubuntu: { variable: string };
  jetbrains: { variable: string };
};

export default function RootLayoutWrapper({
  children,
}: RootLayoutWrapperProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Increased padding top */}
        <main className="flex-grow w-full">
           {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
