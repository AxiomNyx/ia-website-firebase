"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import MegaMenu from "../layout/MegaMenu"; // Import the MegaMenu component

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services", hasMegaMenu: true }, // Added hasMegaMenu
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMouseEnterServices = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setIsMegaMenuOpen(true);
  };
  const handleMouseLeaveServices = () => {
    setHoverTimeout(setTimeout(() => setIsMegaMenuOpen(false), 300)); // Added a delay for a smoother transition
  };

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      className={`flex ${isMobile ? "flex-col space-y-4 p-4 items-center" : "items-center space-x-6"}`}
    >
      {navItems.map((item) => (
        <Link
          key={item.name} // Added key prop
          href={item.href} // Added href prop
          className={`relative py-1 text-sm font-medium transition-colors ${pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`} // Moved className to Link
          onMouseEnter={() => {
            if (item.hasMegaMenu) {
              handleMouseEnterServices();
            }
          }}
          onMouseLeave={() => {
            if (item.hasMegaMenu) handleMouseLeaveServices();
          }}
        >
          <div className="flex items-center">
            {item.name}
            {item.hasMegaMenu && (
              <svg
                className={`ml-1 w-3 h-3 transition-transform ${isMegaMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            )}
            {pathname === item.href && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-lg"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      // Floating Glass Pill Styling - Changed rounded-xl to rounded-lg
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl mx-auto glass rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo and Tagline Area */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-mono">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold">
                innervate
              </span>
              <span className="text-foreground font-light">.agency</span>
            </span>
          </Link>
          <p className="text-[10px] text-muted-foreground/80 font-sans -mt-1 ml-px">
            Innervative Digital Spark. Human Connection.
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
           <ThemeToggle />
           <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-3 p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            title="Toggle menu"
           >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <FaTimes className="block h-5 w-5" aria-hidden="true" />
            ) : (
              <FaBars className="block h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            // Changed rounded-xl to rounded-lg
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 glass rounded-lg shadow-lg overflow-hidden"
            id="mobile-menu"
          >
            <NavLinks isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mega Menu */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // Fixed exit animation property
            onMouseEnter={() => {
              if (hoverTimeout) {
                clearTimeout(hoverTimeout);
              }
            }}
            onMouseLeave={() => {
              handleMouseLeaveServices();
            }}
            transition={{ duration: 0.2 }}>
            <MegaMenu /> {/* Render the MegaMenu component */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
