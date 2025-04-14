"use client";

import { motion } from "framer-motion";

interface DiagonalDividerProps {
  position: "top" | "bottom";
  fromColor: string;
  toColor: string;
  angle?: number;
  height?: number;
  withGlow?: boolean;
  reverse?: boolean;
  withPattern?: boolean;
  withGrid?: boolean;
  className?: string;
}

export default function DiagonalDivider({
  position,
  fromColor,
  toColor,
  angle = 3,
  height = 120,
  withGlow = false,
  reverse = false,
  withPattern = false,
  withGrid = false,
  className = "",
}: DiagonalDividerProps) {
  // Apply positive angle for top dividers, negative for bottom
  const dividerAngle = position === "top" ? -Math.abs(angle) : Math.abs(angle);
  const skewY = `${reverse ? -dividerAngle : dividerAngle}deg`;
  const marginOffset = height / 3;

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10 ${className}
        ${position === "top" ? "top-0" : "bottom-0"}`}
      style={{ 
        height: `${height}px`, 
        marginTop: position === "top" ? -marginOffset : 0, 
        marginBottom: position === "bottom" ? -marginOffset : 0 
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          transform: `skewY(${skewY})`,
          background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        }}
      />

      {withPattern && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            transform: `skewY(${skewY})`,
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      )}

      {withGlow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            transform: `skewY(${skewY})`,
            background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
            filter: "blur(25px)",
          }}
        />
      )}
      
      {withGrid && (
        <motion.div
          className="absolute inset-0 overflow-hidden opacity-30"
          style={{ transform: `skewY(${skewY})` }}
        >
          <div className="w-full h-full" style={{
            backgroundSize: "40px 40px",
            backgroundImage: `
              linear-gradient(to right, rgba(255, 113, 74, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 113, 74, 0.15) 1px, transparent 1px)
            `,
            animation: "gridMove 20s linear infinite"
          }} />
        </motion.div>
      )}
      
      {/* Simple light streaks */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `skewY(${skewY})`,
        }}
      >
        <div className="absolute h-px bg-white/40"
          style={{
            width: "150%",
            top: "25%",
            left: "-50%",
            animation: "moveRightLight 6s linear infinite"
          }}
        />
        <div className="absolute h-px bg-white/40"
          style={{
            width: "150%",
            top: "50%",
            left: "-75%",
            animation: "moveRightLight 8s linear infinite"
          }}
        />
        <div className="absolute h-px bg-white/40"
          style={{
            width: "150%",
            top: "75%",
            left: "-25%",
            animation: "moveRightLight 7s linear infinite"
          }}
        />
      </motion.div>
    </div>
  );
}
