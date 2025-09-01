import React from 'react';

interface LayeredHandsIconProps {
  size?: number;
  className?: string;
}

const LayeredHandsIcon: React.FC<LayeredHandsIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Bottom hand (back hand) */}
      <g opacity="0.7">
        {/* Bottom hand wrist */}
        <path
          d="M2 14 L6 14"
          strokeWidth="2"
        />
        
        {/* Bottom hand palm */}
        <path
          d="M6 14 Q8 13 10 13 Q12 13 13 14 Q14 15 13 16 Q11 17 9 17 Q7 16 6 15 Z"
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="1.5"
        />
        
        {/* Bottom hand fingers */}
        <path d="M10 13 Q11 15 11 16" strokeWidth="1.5" />
        <path d="M12 13 Q13 15 13 16" strokeWidth="1.5" />
        <path d="M13.5 14 Q14.5 15 14.5 16" strokeWidth="1.5" />
        
        {/* Bottom hand thumb */}
        <path
          d="M8 13 Q9 11 10 11 Q11 11 11 12 Q10 13 9 13"
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="1.5"
        />
      </g>
      
      {/* Top hand (front hand) - slightly offset */}
      <g>
        {/* Top hand wrist */}
        <path
          d="M3 11 L7 11"
          strokeWidth="2"
        />
        
        {/* Top hand palm */}
        <path
          d="M7 11 Q9 10 11 10 Q13 10 14 11 Q15 12 14 13 Q12 14 10 14 Q8 13 7 12 Z"
          fill="currentColor"
          fillOpacity="0.1"
          strokeWidth="2"
        />
        
        {/* Top hand fingers */}
        <path d="M11 10 Q12 12 12 13" strokeWidth="2" />
        <path d="M13 10 Q14 12 14 13" strokeWidth="2" />
        <path d="M14.5 11 Q15.5 12 15.5 13" strokeWidth="2" />
        
        {/* Top hand thumb */}
        <path
          d="M9 10 Q10 8 11 8 Q12 8 12 9 Q11 10 10 10"
          fill="currentColor"
          fillOpacity="0.1"
          strokeWidth="2"
        />
      </g>
      
      {/* Pressure/energy lines beneath hands */}
      <g opacity="0.4">
        <path d="M8 18 Q12 17 16 18" strokeWidth="1" />
        <path d="M9 19 Q12 18 15 19" strokeWidth="1" />
      </g>
    </svg>
  );
};

export default LayeredHandsIcon;