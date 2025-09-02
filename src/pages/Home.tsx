import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FindYourInnerPeaceSection from '../components/FindYourInnerPeaceSection';
import InspirationSection from '../components/InspirationSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GiftCardSection from '../components/GiftCardSection';
import ContactSection from '../components/ContactSection';
import BackToTopButton from '../components/BackToTopButton';
import './Home.css';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Handle hash navigation from other pages
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    handleHashNavigation();
  }, []);

  return (
    <div className={`home ${isLoaded ? 'loaded' : ''}`}>
      <HeroSection />
        <ServicesSection />
        <FindYourInnerPeaceSection />
        <InspirationSection />
        <TestimonialsSection />
        <GiftCardSection />
        <ContactSection />
      <BackToTopButton />
    </div>
  );
};

export default Home;