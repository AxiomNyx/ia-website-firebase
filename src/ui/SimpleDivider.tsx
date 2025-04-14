"use client";

import { cn } from "@/lib/utils";

interface SimpleDividerProps {
  className?: string;
}

const SimpleDivider = ({
  className = "",
}: SimpleDividerProps) => {
  return (
    <div 
      className={cn(
        "relative w-full my-16", // Use margin for spacing (my-16 = 4rem top/bottom)
        className
      )}
      aria-hidden="true"
    >
      {/* Container to constrain the divider to the content width */}
      <div className="container-wide mx-auto">
        {/* Two simple white horizontal lines with a specific gap */}
        <div className="flex flex-col items-center gap-2.5"> { /* Adjusted gap */}
          {/* Slightly thicker lines, solid white with opacity */}
          <div className="w-full h-[2.5px] bg-white/80 rounded-full"></div>
          <div className="w-full h-[2.5px] bg-white/80 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDivider; 