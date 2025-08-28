import React, { useEffect, useState } from 'react';
import './ButterflyAnimation.css';

const ButterflyAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0 });
  const [moveTimeout, setMoveTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      // Calculate movement direction
      const deltaX = newPosition.x - mousePosition.x;
      const deltaY = newPosition.y - mousePosition.y;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Only update direction if moving significantly
      if (speed > 2) {
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);
        
        let newRotation;
        
        if (absX > absY) {
          // Moving primarily left/right
          if (deltaX > 0) {
            // Moving right - turn right and bank
            newRotation = { rotateX: 0, rotateY: 45, rotateZ: 20 };
          } else {
            // Moving left - turn left and bank
            newRotation = { rotateX: 0, rotateY: -45, rotateZ: -20 };
          }
        } else {
          // Moving primarily up/down
          if (deltaY < 0) {
            // Moving up - completely flat, full wing view
            newRotation = { rotateX: 0, rotateY: 0, rotateZ: 0 };
          } else {
            // Moving down - flip upside down, full wing view
            newRotation = { rotateX: 180, rotateY: 0, rotateZ: 0 };
          }
        }
        
        setRotation(newRotation);
      }
      
      setMousePosition(newPosition);
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
      
      // Set new timeout to stop flapping after 200ms of no movement
      const timeout = setTimeout(() => {
        setIsMoving(false);
        // Return to flat resting position when stopped
        setRotation({ rotateX: 0, rotateY: 0, rotateZ: 0 });
      }, 300);
      
      setMoveTimeout(timeout);
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
      
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
    };
  }, [mousePosition, moveTimeout]);

  return (
    <div 
      className={`butterfly-cursor ${isVisible ? 'visible' : ''}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      <div 
        className={`butterfly ${isMoving ? 'flapping' : 'resting'}`}
        style={{
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) rotateZ(${rotation.rotateZ}deg)`
        }}
      >
        <div className="butterfly-body"></div>
        <div className="butterfly-wing butterfly-wing-left">
          <div className="wing-pattern"></div>
        </div>
        <div className="butterfly-wing butterfly-wing-right">
          <div className="wing-pattern"></div>
        </div>
      </div>
    </div>
  );
};

export default ButterflyAnimation;