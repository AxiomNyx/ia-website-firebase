"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  duration?: number;
  minDuration?: number;
}

export default function LoadingScreen({ 
  duration = 2500, 
  minDuration = 1500 
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Track page load progress
    const startTime = performance.now();
    const endTime = startTime + duration;
    let animationFrame: number;
    
    const updateProgress = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const calculatedProgress = Math.min(elapsed / duration, 1);
      
      setProgress(calculatedProgress);
      
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        // Ensure minimum loading duration for effect
        if (elapsed >= minDuration) {
          setTimeout(() => setIsLoading(false), 400);
        } else {
          setTimeout(() => setIsLoading(false), minDuration - elapsed + 400);
        }
      }
    };
    
    // Start the animation
    animationFrame = requestAnimationFrame(updateProgress);
    
    // Check if window is already loaded
    if (document.readyState === 'complete') {
      const adjustedDuration = Math.max(minDuration, duration / 2);
      setTimeout(() => {
        setProgress(1);
        setTimeout(() => setIsLoading(false), 400);
      }, adjustedDuration);
    } else {
      // Add actual page load completion event
      window.addEventListener('load', () => {
        setProgress(1);
        setTimeout(() => setIsLoading(false), 400);
      });
    }
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, minDuration]);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#05020D] z-[100]"
        >
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Grid background */}
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(rgba(255, 113, 74, 0.15) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 113, 74, 0.15) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'center 70%',
              }}
            ></div>
            
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3 h-1/2 rounded-full bg-gradient-to-b from-neon-blue/10 via-neon-purple/5 to-transparent blur-[100px]"></div>
            
            <motion.div 
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-sunset-orange to-sunset-pink mb-8">
                innervate.agency
              </h1>
              
              {/* Loading bar */}
              <div className="w-full max-w-xs bg-white/5 rounded-full h-2 mb-4 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-sunset-orange to-sunset-pink rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              
              <motion.div 
                className="text-gray-400 text-center text-sm font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress < 1 ? 'Loading naturewave experience...' : 'Ready!'}
              </motion.div>
            </motion.div>
            
            {/* Synthetic sun */}
            <div className="absolute bottom-[30%] w-40 h-40 rounded-full bg-gradient-to-r from-neon-yellow via-sunset-orange to-sunset-pink blur-[15px] opacity-20"></div>
            
            {/* Horizon line */}
            <div className="absolute bottom-[30%] left-0 right-0 h-px bg-sunset-orange/30 blur-[1px]"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 