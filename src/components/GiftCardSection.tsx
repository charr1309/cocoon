import React, { useEffect } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';
import './GiftCardSection.css';

const GiftCardSection: React.FC = () => {
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
    <section id="gift-cards" className="gift-card-section section-padding">
      <div className="gift-card-background">
        <div className="floating-gift floating-gift-1">🎁</div>
        <div className="floating-gift floating-gift-2">💝</div>
        <div className="floating-gift floating-gift-3">🌸</div>
      </div>
      
      <div className="container">
        <div className="gift-card-content">
          <div className="gift-text fade-in">
            <div className="gift-header">
              <Gift className="gift-icon" size={48} />
              <h2>Gift Cards</h2>
            </div>
            
            <div className="gift-description">
              <p className="fade-in">Give the gift of health and wellness to that</p>
              <p className="fade-in">special someone for their special day.</p>
              <p className="fade-in">Click the card to purchase.</p>
            </div>
            
            <div className="gift-features fade-in">
              <div className="feature-item">
                <Heart size={20} />
                <span>Perfect for any occasion</span>
              </div>
              <div className="feature-item">
                <Sparkles size={20} />
                <span>Never expires</span>
              </div>
            </div>
          </div>

          <div className="gift-card-container fade-in">
            <a 
              href="https://app.squareup.com/gift/TP5329JXT5E9S/order" 
              className="gift-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="gift-card">
                <div className="gift-card-front">
                  <div className="gift-card-border"></div>
                  <div className="gift-card-content">
                    <div className="gift-card-icon">
                      <Gift size={40} />
                    </div>
                    <h3>Gift Cards Available</h3>
                    <p>Click to Purchase</p>
                    <div className="gift-card-shimmer"></div>
                  </div>
                </div>
                
                <div className="gift-card-image">
                  <img src="1.png" alt="Beautiful gift card design" />
                  <div className="gift-card-overlay">
                    <div className="purchase-text">
                      <span>Purchase Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardSection;