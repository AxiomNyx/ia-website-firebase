"use client";

import React, { useRef, useEffect } from 'react';

interface StarFieldProps {
  speed?: number;
  density?: number;
  starCount?: number;
  opacity?: number;
  depth?: number;
  trailLength?: number;
  trailOpacity?: number;
}

export default function StarField({ 
  speed = 0.25,
  density = 200,
  starCount,
  opacity = 0.5,
  depth = 0.5,
  trailLength = 0.15,
  trailOpacity = 0.01
}: StarFieldProps) {
  // Use starCount as an alias for density if provided
  const actualDensity = starCount || density;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    
    let stars: { x: number; y: number; size: number; speed: number }[] = [];
    let rafId: number;
    let lastX = 0;
    let lastY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create fewer stars with the reduced density
      stars = Array(actualDensity)
        .fill(0)
        .map(() => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5, // Increased maximum star size
          speed: Math.random() * speed + 0.05,
        }));
    };
    
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update mouse position with lag
      lastX = currentX;
      lastY = currentY;

      // Draw all stars
      stars.forEach((star) => {
        star.y += star.speed;
        
        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw the star
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.4})`; // More opacity variance
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Calculate distance from current to last position
        const dx = lastX - currentX;
        const dy = lastY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Draw trails only if there's significant movement and randomly for only some stars
        if (distance > 2 && Math.random() > 0.5) { // Higher threshold, fewer trails
          ctx.strokeStyle = `rgba(255, 255, 255, ${trailOpacity})`;
          ctx.lineWidth = 0.1; // Even thinner
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(
            star.x + dx * trailLength * (star.speed / speed),
            star.y + dy * trailLength * (star.speed / speed)
          );
          ctx.stroke();
        }
      });
      
      rafId = requestAnimationFrame(drawStars);
    };
    
    // Initialize and start animation
    initCanvas();
    drawStars();
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;
    };

    // Handle window resize
    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [speed, density, trailLength, trailOpacity]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ 
        background: "transparent",
        opacity: opacity
      }}
    />
  );
} 