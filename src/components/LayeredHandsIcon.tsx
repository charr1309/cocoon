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
      {/* Back/body surface line */}
      <line
        x1="2"
        y1="18"
        x2="22"
        y2="18"
        strokeWidth="2.5"
        opacity="0.8"
      />
      
      {/* Wrist/forearm */}
      <path
        d="M2 12 L6 12"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Palm (side view) */}
      <path
        d="M6 12 Q8 10 10 11 Q12 12 13 13 Q14 14 14 15 Q14 16 13 17 Q11 18 9 18 Q7 17 6 15 Z"
        fill="currentColor"
        fillOpacity="0.1"
        strokeWidth="1.5"
      />
      
      {/* Thumb (side view) */}
      <path
        d="M8 11 Q9 9 10 9 Q11 9 11 10 Q11 11 10 12 Q9 12 8 11"
        fill="currentColor"
        fillOpacity="0.15"
        strokeWidth="1.5"
      />
      
      {/* Fingers (curved downward) */}
      <path
        d="M10 13 Q11 15 11 16 Q11 17 10 17"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 13 Q13 15 13 16 Q13 17 12 17"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14 Q15 15 15 16 Q15 17 14 16"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Subtle pressure indication */}
      <circle
        cx="11"
        cy="16"
        r="1"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
};

export default LayeredHandsIcon;