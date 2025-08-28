import React, { useState, useEffect } from 'react';
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

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div id="heroCarousel" className="carousel slide carousel-fade vh-100" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === currentSlide ? 'active' : ''}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner h-100">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item h-100 ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              className="d-block w-100 h-100 hero-image"
              alt={slide.title}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 text-center">
              <div className="hero-content">
                <h1 className="hero-title display-1 fw-light mb-3">{slide.title}</h1>
                <h2 className="hero-subtitle display-4 fw-light text-primary mb-4">{slide.subtitle}</h2>
                <p className="hero-description lead mb-5">{slide.description}</p>
                <button 
                  className="btn btn-primary btn-lg px-5 py-3 hero-cta-btn"
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
        className="carousel-control-prev"
        type="button"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;