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
      {/* Back hand (slightly offset) */}
      <path
        d="M4 14c0-1.5 1-3 2.5-3.5L8 10c1-0.5 2-0.5 3 0l1.5 0.5c1.5 0.5 2.5 2 2.5 3.5v4c0 1.5-1 3-2.5 3.5L11 22c-1 0.5-2 0.5-3 0l-1.5-0.5C5 21 4 19.5 4 18v-4z"
        transform="translate(2, -2) scale(0.8)"
        opacity="0.6"
      />
      
      {/* Front hand (main hand) */}
      <path
        d="M2 12c0-1.5 1-3 2.5-3.5L6 8c1-0.5 2-0.5 3 0l1.5 0.5c1.5 0.5 2.5 2 2.5 3.5v4c0 1.5-1 3-2.5 3.5L9 20c-1 0.5-2 0.5-3 0l-1.5-0.5C3 19 2 17.5 2 16v-4z"
      />
      
      {/* Pressure/energy lines */}
      <path
        d="M6 18l0 2"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M8 18l0 2"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M10 18l0 2"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
};

export default LayeredHandsIcon;