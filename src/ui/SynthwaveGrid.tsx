"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SynthwaveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid settings - much fewer lines
      const cellSize = 240; // Even larger cells = much fewer lines
      const rows = Math.ceil(canvas.height / cellSize) + 2;
      const cols = Math.ceil(canvas.width / cellSize) + 1;

      // Perspective vanishing point
      const vanishX = canvas.width / 2;
      const vanishY = canvas.height * 0.3;

      // Draw vertical lines - extremely subtle
      for (let x = 0; x < cols; x += 4) { // Draw even fewer lines
        const xPos = x * cellSize - ((canvas.width / 2) % cellSize);
        const gradient = ctx.createLinearGradient(
          xPos,
          canvas.height,
          xPos,
          vanishY
        );
        gradient.addColorStop(0, "rgba(255, 113, 74, 0.05)"); // Even more transparent
        gradient.addColorStop(1, "rgba(255, 56, 100, 0)");

        ctx.beginPath();
        ctx.moveTo(xPos, canvas.height);

        // Calculate perspective curve - fewer points
        for (let y = 0; y < canvas.height; y += 60) { // Even larger step size
          const progress = y / canvas.height;
          const curve = Math.sin((progress * Math.PI) / 2);
          const x = xPos + (vanishX - xPos) * curve;
          ctx.lineTo(x, canvas.height - y);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.2; // Even thinner lines
        ctx.stroke();
      }

      // Draw horizontal lines with movement - much fewer lines, much slower movement
      for (let y = 0; y < rows; y += 4) { // Draw even fewer lines
        const yPos =
          ((y * cellSize + time * 0.1) % (canvas.height + cellSize * 2)) - cellSize; // Much slower movement
        const progress = 1 - yPos / canvas.height;

        const gradient = ctx.createLinearGradient(0, yPos, canvas.width, yPos);
        gradient.addColorStop(0, "rgba(255, 113, 74, 0)");
        gradient.addColorStop(0.5, `rgba(255, 56, 100, ${0.05 * progress})`); // Even more transparent
        gradient.addColorStop(1, "rgba(255, 113, 74, 0)");

        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(canvas.width, yPos);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.2; // Even thinner lines
        ctx.stroke();
      }

      time += 0.1; // Slow down the animation significantly more
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    window.addEventListener("resize", resize);
    resize();
    drawGrid();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }} // Reduced overall opacity further
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ filter: "blur(2px)" }} // Less blur
      />
    </motion.div>
  );
}
