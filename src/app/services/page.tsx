import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center items-center py-16" // Added padding-top to avoid navbar overlap
    >
      <div className="container mx-auto px-4 py-16"> {/* Increased vertical padding */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary" // Enhanced styling
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="p-6 border border-primary/30 rounded-lg shadow-lg bg-background/50 backdrop-blur-sm" // Naturewave styling
          >
            <h2 className="text-2xl font-semibold mb-4 text-accent">Web Development</h2> {/* Themed color */}
            <p className="text-foreground/80">Building modern, responsive, and performant websites and web applications using the latest technologies.</p> {/* Themed color */}
          </motion.div>

          {/* Repeat similar motion.div structure for other service items */}
          {/* You will need to manually add the motion.div and styling for the other service items */}
          {/* Example structure: */}
          {/* <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }} className="p-6 border border-primary/30 rounded-lg shadow-lg bg-background/50 backdrop-blur-sm">...</motion.div> */}
          {/* <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }} className="p-6 border border-primary/30 rounded-lg shadow-lg bg-background/50 backdrop-blur-sm">...</motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
