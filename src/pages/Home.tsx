import React, { useEffect, useState } from 'react';
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
    
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`home ${isLoaded ? 'loaded' : ''}`}>
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