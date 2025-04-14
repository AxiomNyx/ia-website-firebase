"use client";

import React from "react";
import DiagonalDivider from "./DiagonalDivider";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  topColor?: string;
  bottomColor?: string;
  backgroundColor?: string;
  sectionNumber?: number;
  title?: string;
  subtitle?: string;
  alignment?: "left" | "right" | "center";
  withTopDivider?: boolean;
  withBottomDivider?: boolean;
  spacing?: "normal" | "large" | "extra";
}

export default function SectionContainer({
  id,
  children,
  className = "",
  topColor = "#000000",
  bottomColor = "#000000",
  backgroundColor = "rgba(13, 13, 42, 0.95)",
  sectionNumber,
  title,
  subtitle,
  alignment = "left",
  withTopDivider = true,
  withBottomDivider = true,
  spacing = "normal",
}: SectionContainerProps) {
  // Handle text alignment classes
  const alignmentClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center mx-auto",
  };

  const titleGradients = {
    1: "from-sunset-orange to-sunset-pink",
    2: "from-neon-blue to-neon-purple", 
    3: "from-neon-orange to-neon-pink",
    4: "from-sunset-pink to-neon-purple",
  };

  // Determine padding based on spacing option
  const paddingClasses = {
    normal: "py-32",
    large: "py-40",
    extra: "py-52",
  };

  const dividerHeight = {
    normal: 160,
    large: 180,
    extra: 220,
  };

  const gradientClass = sectionNumber !== undefined 
    ? titleGradients[sectionNumber as keyof typeof titleGradients] 
    : titleGradients[1];

  const paddedSectionNumber = sectionNumber !== undefined 
    ? String(sectionNumber).padStart(2, "0") 
    : undefined;
    
  // Define background style directly to avoid the error
  const bgStyle = { backgroundColor };

  return (
    <section 
      id={id} 
      className={`relative w-full ${paddingClasses[spacing]} overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0" style={bgStyle} />

      {/* Section dividers */}
      {withTopDivider && (
        <DiagonalDivider
          fromColor={topColor}
          toColor={backgroundColor}
          height={dividerHeight[spacing]}
          angle={4}
          position="top"
          withGlow
          withPattern
        />
      )}

      {withBottomDivider && (
        <DiagonalDivider
          fromColor={backgroundColor}
          toColor={bottomColor}
          height={dividerHeight[spacing]}
          angle={4}
          position="bottom"
          withGlow
          withPattern
        />
      )}

      {/* Content container */}
      <div className="container-wide relative z-10">
        {/* Title bar if provided */}
        {title && (
          <div className={`max-w-2xl mb-24 ${alignment === "right" ? "ml-auto" : alignment === "center" ? "mx-auto" : ""}`}>
            <div className={`mb-6 ${alignmentClasses[alignment]}`}>
              {sectionNumber && (
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass} font-mono text-3xl mr-4`}>
                  {paddedSectionNumber}.
                </span>
              )}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white inline">
                {title}
              </h2>
            </div>
            
            {subtitle && (
              <p className={`text-xl md:text-2xl text-gray-300 mb-8 ${alignmentClasses[alignment]}`}>
                {subtitle}
              </p>
            )}
            
            <div className={`h-1 w-full bg-gradient-to-r ${
              alignment === "left" 
                ? `${gradientClass} to-transparent` 
                : alignment === "right" 
                  ? `from-transparent ${gradientClass}` 
                  : `from-transparent via-white/30 to-transparent`
            }`} />
          </div>
        )}

        {/* Section content */}
        {children}
      </div>
    </section>
  );
}