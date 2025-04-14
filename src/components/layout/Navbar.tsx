"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Reusable NavLinks component
  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      className={`flex ${isMobile ? "flex-col space-y-4 p-4" : "items-center space-x-8"}`}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          // Use theme text colors
          className={`relative py-2 text-sm font-medium transition-colors ${
            pathname === item.href
              ? "text-text-primary"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {item.name}
          {pathname === item.href && (
            <motion.div
              layoutId="navbar-indicator"
              // Use primary theme color for indicator
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </Link>
      ))}
      {!isMobile && <ThemeToggle />} {/* Theme toggle on desktop */}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Use glass class but remove the border-b class when active
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Use container-wide for max width */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */} 
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-mono">
              {/* Use theme colors for logo gradient */}
              <span className="gradient-text bg-gradient-to-r from-primary via-accent to-secondary font-semibold">
                innervate
              </span>
              {/* Use foreground color for '.agency' */}
              <span className="text-foreground font-light">.agency</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavLinks />
          </div>

          {/* Mobile Menu Button & Theme Toggle */} 
          <div className="flex items-center md:hidden">
            <ThemeToggle /> 
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // Use theme colors for button
              className="ml-3 p-2 rounded-md text-text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              title="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */} 
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            // Use glass class for mobile menu background, removed border-t
            className="md:hidden glass shadow-md"
            id="mobile-menu"
          >
            <NavLinks isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
