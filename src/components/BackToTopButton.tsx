import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <div className="butterfly-btn">
        <div className="butterfly-btn-body"></div>
        <div className="butterfly-btn-wing butterfly-btn-wing-left">
          <div className="wing-btn-pattern"></div>
        </div>
        <div className="butterfly-btn-wing butterfly-btn-wing-right">
          <div className="wing-btn-pattern"></div>
        </div>
        <div className="butterfly-btn-antennae">
          <div className="antenna-left"></div>
          <div className="antenna-right"></div>
        </div>
      </div>
      <div className="back-to-top-text">Back to Top</div>
    </button>
  );
};

export default BackToTopButton;