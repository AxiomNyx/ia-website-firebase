"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScanlineEffectProps {
  opacity?: number;
  blendMode?: string;
  speed?: number;
  className?: string;
}

export default function ScanlineEffect({ 
  opacity = 0.1,
  blendMode = 'overlay',
  speed = 10,
  className = ""
}: ScanlineEffectProps) {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);
  
  // Toggle flickering effect by random intervals
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const flicker = () => {
      const randomDuration = Math.random() * 200 + 50;
      const shouldFlicker = Math.random() > 0.7;
      
      if (shouldFlicker) {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), randomDuration * 0.3);
      }
      
      interval = setTimeout(flicker, randomDuration * 3);
    };
    
    interval = setTimeout(flicker, 1000);
    
    return () => clearTimeout(interval);
  }, []);
  
  // Animate scan line moving down
  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          y: ['0%', '100%'],
          transition: {
            y: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          },
        });
      }
    };
    
    animate();
  }, [controls, speed]);

  return (
    <div 
      className={`fixed inset-0 z-50 pointer-events-none ${className}`}
      style={{ 
        opacity: isVisible ? opacity : 0,
        mixBlendMode: blendMode as any,
        transition: 'opacity 100ms ease'
      }}
    >
      {/* Scanlines overlay */}
      <div 
        className="absolute inset-0 bg-scanlines"
        style={{
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(0, 0, 0, 0.2) 1px, rgba(0, 0, 0, 0.2) 2px)',
          backgroundSize: '100% 4px',
        }}
      />
      
      {/* Moving scan line */}
      <motion.div 
        animate={controls}
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.3)',
          filter: 'blur(0.5px)'
        }}
      />
      
      {/* CRT edges vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.3) 100%)',
        }}
      />
      
      {/* Random glitch lines that come and go */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            right: `${Math.random() * 30}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 10 + 5,
          }}
        />
      ))}
    </div>
  );
} 