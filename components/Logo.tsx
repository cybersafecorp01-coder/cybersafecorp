
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        viewBox="0 0 500 350" 
        className="h-full w-auto" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hat Top */}
        <path d="M150 130 C 150 60, 350 60, 350 130 L 350 150 L 150 150 Z" />
        {/* Hat Brim */}
        <rect x="100" y="150" width="300" height="25" rx="12" />
        {/* Mask Eyes */}
        <path d="M180 200 C 180 190, 230 190, 230 200 C 230 215, 180 215, 180 200 Z" />
        <path d="M270 200 C 270 190, 320 190, 320 200 C 320 215, 270 215, 270 200 Z" />
        {/* Mustache */}
        <path d="M250 230 C 210 230, 180 250, 160 280 C 190 270, 220 260, 250 260 C 280 260, 310 270, 340 280 C 320 250, 290 230, 250 230 Z" />
        {/* Beard/Chin */}
        <path d="M250 320 L 230 290 L 270 290 Z" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-white uppercase font-mono whitespace-nowrap">
        Cyber<span className="text-cyan-400">Safe</span>Corp
      </span>
    </div>
  );
};
