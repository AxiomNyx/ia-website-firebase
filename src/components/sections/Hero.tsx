"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const { clientX, clientY } = e;
      setMousePosition({
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
      });
    },
    [prefersReducedMotion]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background -z-50">
        {/* Add other background effects here if needed */}
      </div>

      {/* Hero content container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-6xl lg:text-7xl font-mono mb-4">
            <span className="gradient-text bg-gradient-to-r from-primary via-accent to-secondary font-semibold">
              innervate
            </span>
            <span className="text-foreground font-light">.agency</span>
          </h1>
          <p className="text-xl lg:text-2xl text-text-secondary mt-8 max-w-3xl mx-auto leading-relaxed">
            Blending Idaho&apos;s breathtaking landscapes with cutting-edge
            digital innovation to create a unique
            <span className="font-semibold text-primary">
              {" "}
              naturewave{" "}
            </span>
            aesthetic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 sm:gap-6 justify-center"
        >
          {/* Apply spinning gradient border effect to primary button */}
          <Link
            href="/work"
            className="group relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-gradient-to-r from-primary via-accent to-secondary" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-6 py-3 text-sm font-medium text-primary backdrop-blur-3xl transition-all duration-300 group-hover:bg-background/80 group-hover:text-primary/80">
               View our work
            </span>
          </Link>
          {/* Keep secondary button style */}
          <Link href="/contact" className="button button-secondary">
            Start a project
          </Link>
        </motion.div>
      </div>

      {/* Naturewave landscape Image Background */} 
      <div className="absolute inset-0 w-full h-full z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
        <Image
          src="/images/innervate.agency-naturewavehero-homepage.png"
          alt="Naturewave Landscape Background"
          fill
          className="object-cover object-center opacity-40 dark:opacity-60"
          priority
          sizes="100vw"
          quality={90}
        />
         <div className="absolute inset-0 perspective-element z-5">
           <div className="retro-grid opacity-20 dark:opacity-40" /> 
         </div>
      </div>
    </section>
  );
}
