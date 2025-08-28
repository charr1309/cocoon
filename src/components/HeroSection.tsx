import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSection.css';

const heroSlides = [
  {
    image: 's1.jpg',
    title: 'Welcome to Cocoon',
    subtitle: 'Massage & Wellness',
    description: 'Transform your wellness journey in our sanctuary of healing'
  },
  {
    image: 's2.jpg',
    title: 'Prenatal Care',
    subtitle: 'Nurturing New Life',
    description: 'Specialized massage therapy for expecting mothers'
  },
  {
    image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
    title: 'Find Your Peace',
    subtitle: 'In Nature\'s Embrace',
    description: 'Discover tranquility through holistic healing and mindful wellness'
  },
  {
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
    title: 'Restore & Rejuvenate',
    subtitle: 'Your Sacred Space',
    description: 'Experience deep relaxation in a serene, healing environment'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="hero-logo">
                    <img src="/MAIN LOGO2copy copy.png" alt="Cocoon Massage and Wellness Logo" />
                  </div>
                  <h1 className="hero-h1">{slide.title} {slide.subtitle}</h1>
                  <p className="hero-description">{slide.description}</p>
                  <button 
                    className="hero-cta-btn"
                    onClick={() => window.open('https://spread-your-wings.noterro.com', '_blank')}
                  >
                    Book Your Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="hero-nav hero-nav-prev"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          className="hero-nav hero-nav-next"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight size={24} />
        </button>

        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;