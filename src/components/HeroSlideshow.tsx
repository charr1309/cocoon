import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlideshow.css';

const slides = [
  {
    image: 's1.jpg',
    title: 'COCOON MASSAGE AND WELLNESS',
    subtitle: 'Transform Your Body, Nurture Your Soul'
  },
  {
    image: 's2.jpg',
    title: 'PRENATAL & POSTPARTUM CARE',
    subtitle: 'Supporting You Through Every Stage'
  },
  {
    image: 's3.jpg',
    title: 'HOLISTIC WELLNESS',
    subtitle: 'Mind, Body, and Spirit in Harmony'
  },
  {
    image: 's4.jpg',
    title: 'THERAPEUTIC HEALING',
    subtitle: 'Restore Balance and Inner Peace'
  }
];

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="hero-image"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button 
                className="hero-button"
                onClick={() => window.open('https://spread-your-wings.noterro.com', '_blank')}
              >
                Book Your Session
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-nav hero-prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="hero-nav hero-next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="hero-indicators">
        {slides.map((_, index) => (
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

export default HeroSlideshow;