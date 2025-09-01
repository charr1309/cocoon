import React from 'react';

interface LayeredHandsIconProps {
  size?: number;
  className?: string;
}

const LayeredHandsIcon: React.FC<LayeredHandsIconProps> = ({ size = 40, className = '' }) => {
  return (
    <img 
      src="/shiatsuIcon copy.png" 
      alt="Shiatsu Massage" 
      width={60} 
      height={60}
      className={className}
      style={{
        objectFit: 'contain'
      }}
    />
  );
};

export default LayeredHandsIcon;