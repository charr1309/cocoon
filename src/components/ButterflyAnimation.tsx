import React, { useEffect, useState, useRef } from 'react';
import './ButterflyAnimation.css';

const ButterflyAnimation: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [currentRotation, setCurrentRotation] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0 });
  const [targetRotation, setTargetRotation] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0 });
  const [moveTimeout, setMoveTimeout] = useState<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number>();
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Smooth interpolation function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // Normalize angle to -180 to 180 range
  const normalizeAngle = (angle: number) => {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  };

  // Calculate the shortest rotation path between two angles
  const shortestAngleDifference = (from: number, to: number) => {
    const diff = normalizeAngle(to - from);
    return diff;
  };

  // Smooth rotation interpolation
  const interpolateRotation = () => {
    const factor = 0.08; // Smoothness factor (lower = smoother but slower)
    
    setCurrentRotation(prev => {
      const newRotation = {
        rotateX: lerp(prev.rotateX, targetRotation.rotateX, factor),
        rotateY: lerp(prev.rotateY, targetRotation.rotateY, factor),
        rotateZ: lerp(prev.rotateZ, targetRotation.rotateZ, factor)
      };
      
      // Continue animation if we haven't reached the target
      const threshold = 0.5;
      const stillMoving = 
        Math.abs(newRotation.rotateX - targetRotation.rotateX) > threshold ||
        Math.abs(newRotation.rotateY - targetRotation.rotateY) > threshold ||
        Math.abs(newRotation.rotateZ - targetRotation.rotateZ) > threshold;
      
      if (stillMoving) {
        animationFrameRef.current = requestAnimationFrame(interpolateRotation);
      }
      
      return newRotation;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      // Calculate movement vector
      const deltaX = newPosition.x - lastMousePosition.current.x;
      const deltaY = newPosition.y - lastMousePosition.current.y;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Only update if moving significantly
      if (speed > 2) {
        // Calculate movement angle in degrees
        const movementAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        // Calculate target rotations based on movement direction
        let newTargetRotation;
        
        // Determine primary movement direction
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);
        
        if (absX > absY * 0.7) {
          // Primarily horizontal movement
          if (deltaX > 0) {
            // Moving right - show left side of butterfly, head pointing right
            newTargetRotation = { 
              rotateX: 0, 
              rotateY: 90, 
              rotateZ: 90 
            };
          } else {
            // Moving left - show right side of butterfly, head pointing left
            newTargetRotation = { 
              rotateX: 0, 
              rotateY: -90, 
              rotateZ: -90 
            };
          }
        } else if (absY > absX * 0.7) {
          // Primarily vertical movement
          if (deltaY < 0) {
            // Moving up - normal top view
            newTargetRotation = { 
              rotateX: 0, 
              rotateY: 0, 
              rotateZ: 0 
            };
          } else {
            // Moving down - upside down
            newTargetRotation = { 
              rotateX: 180, 
              rotateY: 0, 
              rotateZ: 0 
            };
          }
        } else {
          // Diagonal movement - blend the rotations
          const horizontalFactor = absX / (absX + absY);
          const verticalFactor = absY / (absX + absY);
          
          let baseRotation;
          if (deltaX > 0 && deltaY < 0) {
            // Up-right diagonal
            baseRotation = { 
              rotateX: -10 * verticalFactor, 
              rotateY: 45 * horizontalFactor, 
              rotateZ: 45 * horizontalFactor 
            };
          } else if (deltaX < 0 && deltaY < 0) {
            // Up-left diagonal
            baseRotation = { 
              rotateX: -10 * verticalFactor, 
              rotateY: -45 * horizontalFactor, 
              rotateZ: -45 * horizontalFactor 
            };
          } else if (deltaX > 0 && deltaY > 0) {
            // Down-right diagonal
            baseRotation = { 
              rotateX: 90 + (90 * verticalFactor), 
              rotateY: 45 * horizontalFactor, 
              rotateZ: 45 * horizontalFactor 
            };
          } else {
            // Down-left diagonal
            baseRotation = { 
              rotateX: 90 + (90 * verticalFactor), 
              rotateY: -45 * horizontalFactor, 
              rotateZ: -45 * horizontalFactor 
            };
          }
          
          newTargetRotation = baseRotation;
        }
        
        setTargetRotation(newTargetRotation);
        
        // Start smooth interpolation
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(interpolateRotation);
      }
      
      lastMousePosition.current = newPosition;
      setMousePosition(newPosition);
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
      
      // Return to flat resting position after movement stops
      const timeout = setTimeout(() => {
        setIsMoving(false);
        setTargetRotation({ rotateX: 0, rotateY: 0, rotateZ: 0 });
        
        // Start smooth return to flat position
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(interpolateRotation);
      }, 400);
      
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
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetRotation, moveTimeout]);

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
          transform: `rotateX(${currentRotation.rotateX}deg) rotateY(${currentRotation.rotateY}deg) rotateZ(${currentRotation.rotateZ}deg)`
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