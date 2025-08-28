import React from 'react';

interface CircularLogoProps {
  size?: number;
  className?: string;
}

const CircularLogo: React.FC<CircularLogoProps> = ({ size = 200, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green circle background */}
      <circle 
        cx="100" 
        cy="100" 
        r="100" 
        fill="#D3EDE0"
      />
      
      {/* Butterfly design */}
      <g transform="translate(100, 80)">
        {/* Butterfly body */}
        <path 
          d="M 0 -20 Q 0 -15 0 -10 Q 0 0 0 10 Q 0 20 0 30" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Left upper wing - flowing curved design */}
        <path 
          d="M -2 -8 Q -25 -25 -35 -15 Q -40 -5 -35 5 Q -25 10 -15 5 Q -8 0 -2 -8" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Right upper wing - flowing curved design */}
        <path 
          d="M 2 -8 Q 25 -25 35 -15 Q 40 -5 35 5 Q 25 10 15 5 Q 8 0 2 -8" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Left lower wing - smaller, elegant curve */}
        <path 
          d="M -2 5 Q -18 8 -22 18 Q -20 25 -12 22 Q -6 18 -2 12" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Right lower wing - smaller, elegant curve */}
        <path 
          d="M 2 5 Q 18 8 22 18 Q 20 25 12 22 Q 6 18 2 12" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Left antenna - curved and elegant */}
        <path 
          d="M -1 -18 Q -6 -25 -8 -28" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        
        {/* Right antenna - curved and elegant */}
        <path 
          d="M 1 -18 Q 6 -25 8 -28" 
          fill="none" 
          stroke="#000000" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        
        {/* Antennae tips */}
        <circle cx="-8" cy="-28" r="1.5" fill="#000000" />
        <circle cx="8" cy="-28" r="1.5" fill="#000000" />
      </g>
      
      {/* Text - COCOON */}
      <text 
        x="100" 
        y="130" 
        textAnchor="middle" 
        fontSize="16" 
        fontFamily="Montserrat, sans-serif" 
        fontWeight="600" 
        fill="#000000" 
        letterSpacing="2px"
      >
        COCOON
      </text>
      
      {/* Text - MASSAGE & WELLNESS */}
      <text 
        x="100" 
        y="145" 
        textAnchor="middle" 
        fontSize="8" 
        fontFamily="Montserrat, sans-serif" 
        fontWeight="400" 
        fill="#000000" 
        letterSpacing="1px"
      >
        MASSAGE & WELLNESS
      </text>
    </svg>
  );
};

export default CircularLogo;