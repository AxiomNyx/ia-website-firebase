"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic imports
const SectionContainer = dynamic(() => import("../ui/SectionContainer"), { ssr: false });
const SynthwaveGrid = dynamic(() => import("../ui/SynthwaveGrid"), { ssr: false });

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Mountain View Resort",
      category: "Web Development",
      description: "A stunning responsive website for a luxury mountain resort with booking capabilities and interactive property maps.",
      image: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?q=80&w=1920&auto=format&fit=crop",
      link: "/projects/mountain-view-resort",
    },
    {
      title: "TechFusion App",
      category: "Mobile Application",
      description: "Cross-platform mobile application that allows users to connect IoT devices and manage smart home systems.",
      image: "https://images.unsplash.com/photo-1637610904926-baee0151a9cf?q=80&w=1920&auto=format&fit=crop",
      link: "/projects/techfusion-app",
    },
    {
      title: "Oceanic Brand Identity",
      category: "Branding",
      description: "Complete brand overhaul for an eco-friendly oceanographic research organization.",
      image: "https://images.unsplash.com/photo-1548302290-2156faafd962?q=80&w=1920&auto=format&fit=crop",
      link: "/projects/oceanic-brand",
    },
    {
      title: "Pulse Analytics Dashboard",
      category: "UI/UX Design",
      description: "Data visualization dashboard with real-time metrics for healthcare professionals.",
      image: "https://images.unsplash.com/photo-1583430999185-4cb8e7a10767?q=80&w=1920&auto=format&fit=crop",
      link: "/projects/pulse-analytics",
    },
  ];

  return (
    <SectionContainer
      id="work"
      backgroundColor="rgba(8, 4, 24, 0.97)"
      sectionNumber={4}
      title="Featured Work"
      subtitle="Showcasing our best digital experiences and creative solutions"
      alignment="right"
      spacing="extra"
      withTopDivider={true}
      withBottomDivider={true}
    >
      {/* Add synthwave grid for background effect */}
      <div className="absolute inset-0 opacity-30 z-0">
        <SynthwaveGrid />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-40 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-sunset-orange/10 to-sunset-pink/5 blur-[100px] opacity-40 animate-pulse-slow" />
      <div className="absolute -bottom-40 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/5 blur-[100px] opacity-40 animate-pulse-slower" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        {projects.map((project, index) => (
          <Link 
            href={project.link} 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.7,
                  delay: index * 0.15,
                } 
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Project card with enhanced hover effects */}
              <div className="overflow-hidden rounded-2xl group-hover:shadow-2xl transition-all duration-500 group-hover:shadow-neon-blue/20">
                {/* Image container with dynamic hover effect */}
                <div className="relative h-[400px] w-full overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}

                  {/* Gradient overlay that changes on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Grid pattern overlay for extra depth */}
                  <div className="absolute inset-0 opacity-20 bg-grid-pattern z-10"></div>
                  
                  {/* Animated corner accents */}
                  <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-neon-purple opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <span className="text-neon-blue font-medium mb-4 tracking-wide opacity-90">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4 transition-transform duration-300 group-hover:translate-x-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 max-w-md leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>
                  
                  {/* Animated view project button */}
                  <motion.div 
                    className="inline-flex items-center text-base text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    View Project
                    <svg
                      className="ml-2 w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-28 text-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center px-10 py-5 rounded-lg border-2 border-neon-blue text-white font-medium hover:bg-neon-blue/10 transition-all duration-300 hover:scale-105 group"
        >
          <span>View all projects</span>
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
      
      {/* Add styles for the grid pattern for the project cards */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </SectionContainer>
  );
} 