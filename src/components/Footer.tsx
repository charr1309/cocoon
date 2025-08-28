import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const inspirationalQuotes = [
  "In stillness, we find our wings",
  "Healing begins with a single breath",
  "Your body holds the wisdom of transformation",
  "In the cocoon of care, miracles unfold",
  "Every touch carries the power to heal",
  "Wellness is a journey, not a destination"
];

const Footer: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
        setIsVisible(true);
      }, 800);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageNavigation = () => {
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-nav">
          <ul className="footer-nav-list">
            <li>
              <button onClick={() => scrollToSection('offerings')} className="footer-link">
                OFFERINGS
              </button>
            </li>
            <li>
              <Link to="/wisdom" className="footer-link" onClick={handlePageNavigation}>
                WISDOM
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link" onClick={handlePageNavigation}>
                MEET SHANNA
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection('inspiration')} className="footer-link">
                INSPIRATION
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="footer-link">
                CONTACT
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('love')} className="footer-link">
                CLIENT LOVE
              </button>
            </li>
            <li>
              <a href="https://spread-your-wings.noterro.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                BOOK YOUR SESSION
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-locations">
          <div className="location-card element-to-animate">
            <div className="location-header">
              <h3>Nest Wellness</h3>
              <div className="location-icon">📍</div>
            </div>
            <p className="location-name">Cocoon Massage and Wellness @ Nest Wellness</p>
            <p className="location-address">13 West 28th Street, Suite 5R<br />New York, NY 10001</p>
            <a 
              href="https://maps.google.com/?q=13+West+28th+Street+Suite+5R+New+York+NY+10001" 
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              🗺️ View on Google Maps
            </a>
          </div>
          
          <div className="location-card element-to-animate">
            <div className="location-header">
              <h3>Active Care Physical Therapy</h3>
              <div className="location-icon">📍</div>
            </div>
            <p className="location-name">Cocoon Massage and Wellness @ Active Care Physical Therapy</p>
            <p className="location-address">29 West 38th Street #601<br />New York, NY 10018</p>
            <a 
              href="https://maps.google.com/?q=29+West+38th+Street+601+New+York+NY+10018" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-button"
            >
              🗺️ View on Google Maps
            </a>
          </div>
        </div>

        <div className="footer-section footer-inspiration">
          <div className="inspiration-icon">🦋</div>
          <p className={`inspiration-text ${!isVisible ? 'fade-out' : ''}`}>
            "{inspirationalQuotes[currentQuoteIndex]}"
          </p>
          <p className="inspiration-signature">- Cocoon Wellness</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Cocoon Massage and Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;