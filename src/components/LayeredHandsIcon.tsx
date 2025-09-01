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
      className={className}
    >
      {/* Top hand - side view with wrist */}
      <path
        d="M4 8 Q6 7 8 7 Q12 7 15 9 Q17 10 18 11 Q19 12 18 13 Q16 14 14 13 Q12 12 10 11 Q8 10 6 10 Q5 9 4 8"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bottom curved line representing the back/body */}
      <path
        d="M3 16 Q12 15 21 16"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Small curved line for spine indication */}
      <path
        d="M10 17 Q12 16.5 14 17"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LayeredHandsIcon;