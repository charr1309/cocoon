import React, { useEffect } from 'react';
import { Heart, Leaf, Shield, Sparkles } from 'lucide-react';
import './FindYourInnerPeaceSection.css';

const FindYourInnerPeaceSection: React.FC = () => {
  useEffect(() => {
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
    <section id="inner-peace" className="inner-peace-section section-padding">
      <div className="inner-peace-background">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </div>
      
      <div className="container">
        <div className="inner-peace-header fade-in">
          <h1>Find Your Inner Peace</h1>
          <p className="section-subtitle">Discover tranquility through holistic wellness and mindful healing</p>
        </div>
        
        <div className="inner-peace-content fade-in">
          <div className="inner-peace-quote-container">
            <div className="quote-decoration quote-decoration-left"></div>
            <div className="inner-peace-quote">
              "Wellness is a journey, not a destination. Every step toward balance brings you closer to your truest self."
            </div>
            <div className="quote-decoration quote-decoration-right"></div>
          </div>
          
          <div className="inner-peace-values">
            <div className="value-item fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="value-icon">
                <Heart size={32} />
              </div>
              <h4>Compassionate Care</h4>
              <p>Every client receives personalized attention and genuine compassion in a nurturing environment</p>
              <div className="value-accent"></div>
            </div>
            
            <div className="value-item fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="value-icon">
                <Leaf size={32} />
              </div>
              <h4>Holistic Approach</h4>
              <p>We address the whole person - body, mind, and spirit - for complete wellness transformation</p>
              <div className="value-accent"></div>
            </div>
            
            <div className="value-item fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h4>Safe Space</h4>
              <p>A nurturing sanctuary where healing can naturally unfold in complete comfort and trust</p>
              <div className="value-accent"></div>
            </div>
          </div>
          
          <div className="inner-peace-cta fade-in">
            <div className="cta-icon">
              <Sparkles size={40} />
            </div>
            <h3>Begin Your Journey to Wellness</h3>
            <p>Take the first step toward inner peace and holistic healing</p>
            <button 
              className="btn btn-glow"
              onClick={() => window.open('https://spread-your-wings.noterro.com', '_blank')}
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourInnerPeaceSection;