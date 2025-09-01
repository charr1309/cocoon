import React from 'react';

interface LayeredHandsIconProps {
  size?: number;
  className?: string;
}

const LayeredHandsIcon: React.FC<LayeredHandsIconProps> = ({ size = 40, className = '' }) => {
  return (
    <img 
      src="/shiatsuIcon.png" 
      alt="Shiatsu Massage" 
      width={size} 
      height={size}
      className={className}
      style={{
        objectFit: 'contain',
        filter: 'brightness(0) invert(1)' // Makes the icon white
      }}
    />
  );
};

export default LayeredHandsIcon;