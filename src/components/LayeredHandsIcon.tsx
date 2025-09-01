import React from 'react';

interface LayeredHandsIconProps {
  size?: number;
  className?: string;
}

const LayeredHandsIcon: React.FC<LayeredHandsIconProps> = ({ size = 24, className = '' }) => {
  return (
    <div 
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #69d5c3, #5bc4b1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px'
      }}
      className={className}
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 100 100"
        fill="none"
      >
        {/* Top hand - exact recreation from your image */}
        <path
          d="M15 25 Q20 20 30 22 Q40 24 50 26 Q60 28 70 32 Q75 34 78 38 Q80 42 78 45 Q75 48 70 46 Q65 44 60 42 Q50 38 40 36 Q30 34 25 32 Q20 30 15 28 Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom hand - layered underneath */}
        <path
          d="M20 45 Q25 40 35 42 Q45 44 55 46 Q65 48 75 52 Q80 54 83 58 Q85 62 83 65 Q80 68 75 66 Q70 64 65 62 Q55 58 45 56 Q35 54 30 52 Q25 50 20 48 Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Body/back line - curved */}
        <path
          d="M10 75 Q50 70 90 75"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Small spine indication */}
        <path
          d="M45 77 Q50 76 55 77"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default LayeredHandsIcon;