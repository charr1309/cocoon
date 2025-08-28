import React, { useEffect } from 'react';
import './InspirationSection.css';

const InspirationSection: React.FC = () => {
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

    const animatedElements = document.querySelectorAll('.element-to-animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="inspiration" className="inspiration-section section-padding">
      <div className="container">
        <div className="inspiration-header fade-in">
          <h1>Inspiration</h1>
          <p className="section-subtitle">The story behind our sanctuary of healing and transformation</p>
        </div>
        
        <div className="inspiration">
          <div className="innerText">
            <p className="element-to-animate">
              I have always had a fascination with butterflies. It all started when my 1st grade class 
              fostered a bunch of furry caterpillars. We observed the journey as these beings crawled 
              and wrapped themselves in a silken cocoon to rest and transform. I remember peering in 
              the little box every day to admire the cocoons of mint green with gold edges as they 
              hung from the ceiling of the cardboard. My heart was full with anticipation of when 
              they would emerge.
            </p>
            
            <img 
              className="wrap element-to-animate" 
              src="iStock-487505366.jpg" 
              alt="Beautiful butterfly transformation" 
            />
            
            <p className="element-to-animate">
              Finally, the day came and I thought I would burst with joy when the butterflies sprang 
              free with all their strength from their silken homes, and they pumped their expansive 
              wings with awe inspiring colors. It was in that moment I became enraptured with these 
              fascinating creatures. I remember that bittersweet feeling of knowing that we then 
              had to let them go to fly out into the world to let nature delight in their beauty.
            </p>
            
            <p className="element-to-animate">
              Since then I visited many a butterfly garden and surrounded my home with butterflies—enjoying 
              the magic of their glittering wings and perfect symmetry of design.
            </p>
            
            <p className="element-to-animate">
              When brainstorming what to call my company, I thought immediately of this sweet space 
              where we feel wrapped up in silken sheets, warm and cozy to rest and take a moment for 
              ourselves like that of a cocoon. The beauty of the mint green cocoon with gold edges was 
              the inspiration for my logo.
            </p>
            
            <p className="element-to-animate final-message">
              Amidst the chaos of life, I invite you to be held and healed and reenter your life 
              being the most vibrant, exquisite and expansive version of yourself that you can be. 
              Off you go now….
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;