import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ButterflyAnimation from './ButterflyAnimation';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePageNavigation = () => {
    closeMenu();
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={handlePageNavigation}>
          <img src="/FAVICON 1.png" alt="Cocoon Favicon" className="logo-favicon" />
          <div className="logo-text">
            <span className="logo-main">COCOON</span>
            <span className="logo-sub">MASSAGE & WELLNESS</span>
          </div>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button onClick={() => scrollToSection('offerings')} className="nav-link">
                OFFERINGS
              </button>
            </li>
            <li>
              <Link to="/wisdom" className="nav-link" onClick={handlePageNavigation}>
                WISDOM
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={handlePageNavigation}>
                MEET SHANNA
              </Link>
            </li>
            <li>
              <button onClick={() => scrollToSection('inspiration')} className="nav-link">
                INSPIRATION
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                CONTACT
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('love')} className="nav-link">
                CLIENT LOVE
              </button>
            </li>
            <li>
              <a href="https://spread-your-wings.noterro.com" target="_blank" rel="noopener noreferrer" className="nav-link book-session-link">
                BOOK YOUR SESSION
              </a>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ButterflyAnimation />
    </header>
  );
};

export default Header;