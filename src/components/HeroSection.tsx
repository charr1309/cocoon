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
    image: 's3.jpg',
    title: 'Holistic Healing',
    subtitle: 'Mind, Body & Spirit',
    description: 'Comprehensive wellness treatments tailored to your needs'
  },
  {
    image: 's4.jpg',
    title: 'Inner Peace',
    subtitle: 'Find Your Balance',
    description: 'Discover tranquility through therapeutic touch'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section 
      className="hero-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-container">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-image">
              <img 
                src={slide.image} 
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
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

      {/* Navigation Controls */}
      <button className="hero-nav hero-nav-prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="hero-nav hero-nav-next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;