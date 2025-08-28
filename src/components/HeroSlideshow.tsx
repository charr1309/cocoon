import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CircularLogo from './CircularLogo';
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="hero-slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <button 
                className="btn"
                onClick={() => window.open('https://spread-your-wings.noterro.com', '_blank')}
              >
                Book Your Session
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="slide-nav slide-nav-prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="slide-nav slide-nav-next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;