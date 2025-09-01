import React, { useEffect, useState } from 'react';
import './ButterflyAnimation.css';

const ButterflyAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className={`butterfly-cursor ${isVisible ? 'visible' : ''}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      <div 
        className="butterfly"
        style={{
          transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
        }}
      >
        <div className="butterfly-body"></div>
        
        <div className="butterfly-wing-upper butterfly-wing-upper-left">
          <div className="butterfly-wing-pattern"></div>
        </div>
        <div className="butterfly-wing-upper butterfly-wing-upper-right">
          <div className="butterfly-wing-pattern"></div>
        </div>
        
        <div className="butterfly-wing-lower butterfly-wing-lower-left">
          <div className="butterfly-wing-pattern"></div>
        </div>
        <div className="butterfly-wing-lower butterfly-wing-lower-right">
          <div className="butterfly-wing-pattern"></div>
        </div>
        
        <div className="butterfly-antennae"></div>
        <div className="butterfly-antennae-tips"></div>
      </div>
    </div>
  );
};

export default ButterflyAnimation;