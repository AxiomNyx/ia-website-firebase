"use client";
import React from "react";
import * as framerMotion from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [parallaxValue, setParallaxValue] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setParallaxValue(window.scrollY / 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Layer */} 
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent"></div>
        <framerMotion.motion.div
          id="parallax-container"          
          style={{
            translateY: parallaxValue,
          }}
        >
          <Image
            src="/images/innervate.agency-naturewavehero-homepage.png"
            alt="Naturewave Landscape Background"
            fill
            className="object-cover object-center scale-110"
            priority
            sizes="100vw"
            quality={90}
          />
        </framerMotion.motion.div>
      </div>

      {/* Retro Grid Layer */} 
      <div className="absolute inset-0 perspective-element z-5 pointer-events-none">
           <div className="retro-grid" />
      </div>

      {/* Hero Content Container - Uses container-wide, flexbox for alignment */} 
      <div 
        // container-wide sets max-width, mx-auto, px-*
        // h-full takes section height
        // flex vertically centers (justify-center) and horizontally aligns items left (items-start)
        className="relative z-20 w-full container-wide h-full flex flex-col justify-center items-start"
      >
         {/* Inner div for text content, naturally aligns left */} 
        <div className="text-left max-w-3xl"> 
          <framerMotion.motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start" // Align inner elements left
          >
            {/* Pill Box */} 
            <framerMotion.motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-medium bg-foreground/10 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20 mb-4 shadow-sm">
                <span>✨</span>
                <span>Full-Stack Digital Marketing Agency</span>
              </div>
            </framerMotion.motion.div>
            {/* Main Title */} 
            <framerMotion.motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl lg:text-6xl font-mono mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-robotic-fluid-orange via-vaporwave-pink to-light-naturewave-purple animate-textGlow">
                innervate<span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-robotic-fluid-orange via-vaporwave-pink to-light-naturewave-purple">
                  .agency
                </span>
              </h1>
            </framerMotion.motion.div>
             {/* Gradient Underline */}
             <framerMotion.motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <div className="h-1.5 w-56 bg-gradient-to-r from-robotic-fluid-orange via-vaporwave-pink to-light-naturewave-purple rounded-full mb-5"></div>
            </framerMotion.motion.div>

            
            {/* Subtitle */} 
            <h2 className="text-xl lg:text-2xl font-mono mb-4 text-white font-semibold">
              Where nature meets digital innovation
            </h2>
            
            {/* Paragraph */} 
            <p className="text-base lg:text-lg text-white/90 font-sans leading-normal max-w-xl mb-10">
               We combine the raw beauty of nature with advanced technology, creating <span className="text-robotic-fluid-orange font-semibold">naturewave</span> experiences that elevate your brand online.
            </p>
          </framerMotion.motion.div>

          {/* Buttons - Aligned Start */} 
          <framerMotion.motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 sm:gap-6 justify-start" // Align buttons left
          >
            {/* Primary Button (Orange) */}
            <Link
              href="/contact"
              className="button h-12 px-6 rounded-lg bg-robotic-fluid-orange text-white font-bold shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-robotic-fluid-orange/40 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            
            {/* Secondary Button (Bordered) */}
            <Link 
              href="/work"
              className="button h-12 px-6 rounded-lg bg-white/5 border border-white/30 text-white font-medium shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5"
            >
              View Our Work
            </Link>
          </framerMotion.motion.div>
        </div>
      </div>
    </section>
  );
}

