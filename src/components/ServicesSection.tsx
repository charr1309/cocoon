import React from 'react';
import { Heart, Baby, Flower, Sparkles, Bot as Lotus } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    icon: Heart,
    title: "HOLISTIC MASSAGE",
    subtitle: "THE MONARCH",
    description: "A treatment catered to your needs. Your therapist will discuss your preferred goals for treatment and provide the experience your body, nervous system and spirit crave to inspire the best version of you. Treatments will range from full body massage to medical massage of specified areas.",
    duration: "60-90 minutes",
    price: "Starting at $190"
  },
  {
    icon: Baby,
    title: "PRENATAL MASSAGE",
    subtitle: "THE CHRYSALIS",
    description: "In concert with holistic massage, your therapist will support the many changes your body makes during each phase of your pregnancy and hold space for this emotional and spiritual journey. This treatment is a full body massage performed in a side-lying position as well as face up in a semi-reclined position bolstered with appropriate cushions.",
    duration: "60-90 minutes",
    price: "Starting at $190"
  },
  {
    icon: Flower,
    title: "BIRTH PREP MASSAGE",
    subtitle: "THE HATCHING",
    description: "Similar to a prenatal massage, this full body treatment is performed at 37+ weeks. It is designed to encourage and nurture natures' course by opening the hips, releasing tension, pacifying anxiety, and stimulating specific acupressure points helpful for labor.",
    duration: "60-90 minutes",
    price: "Starting at $190"
  },
  {
    icon: Sparkles,
    title: "POSTPARTUM MASSAGE",
    subtitle: "THE FLYING",
    description: "A full body massage performed from day 1 to year 1 after pregnancy. Designed for your birthing and pregnancy experience, your therapist will customize your session to address any concerns you may have and help nourish blood circulation, lymphatic drainage, and hormone regulation as well as enhance milk production, encourage balance and improve sleep. You may bring your baby to the session, as well as a guest.",
    duration: "60-90 minutes",
    price: "Starting at $190"
  },
  {
    icon: Lotus,
    title: "SHIATSU MASSAGE",
    subtitle: "THE SICHUAN",
    description: "A massage derived from Chinese medicine and five element theory performed with clothing on. This type of massage nourishes the flow of qi by utilizing stretches, joint mobility, compression and acupressure points. Your therapist will incorporate hands, fingers, knees, feet and palms during your treatment.",
    duration: "60-90 minutes",
    price: "Starting at $190"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="offerings" className="services-section section-padding">
      <div className="container">
        <div className="services-header fade-in">
          <h2>Offerings</h2>
          <p>Therapeutic massage services designed to nurture your body, mind, and spirit</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card fade-in">
                <div className="service-white-overlay"></div>
                <div className="service-icon">
                  <IconComponent size={40} />
                </div>
                <div className="service-white-overlay"></div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">"{service.subtitle}"</p>
                
                <div className="service-details">
                  <p className="service-description">{service.description}</p>
                  <div className="service-meta">
                    <span className="service-duration">{service.duration}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-image-section fade-in">
          <div className="services-image">
            <img 
              src="diana-polekhina-Hzz7AEyLhZk-unsplash.jpg" 
              alt="Relaxing massage therapy session" 
            />
          </div>
        </div>

        <div className="house-calls-section fade-in">
          <div className="house-calls-content">
            <div className="house-calls-image">
              <img 
                src="pregnant.jpg" 
                alt="Holistic and postpartum house calls" 
              />
            </div>
            <div className="house-calls-text">
              <p>
                <span className="highlight">Holistic & Postpartum House calls:</span> 
                available upon request. Pricing determined on varying factors. Give us a call to chat
              </p>
            </div>
          </div>
        </div>

        <div className="add-on-section fade-in">
          <div className="add-on-header">
            <h3>Add On</h3>
            <p>Enhance your wellness experience</p>
          </div>
          
          <div className="add-on-content">
            <div className="add-on-main">
              <div className="add-on-text">
                <p className="add-on-title">CBD Salve + Heat therapy - $25</p>
                <p>Herbologist formulated CBD salve applied to your greatest areas of concern followed by heat therapy.</p>
                <p>Great for sore muscles and chronic pain & tension.</p>
              </div>
            </div>

            <div className="add-on-sidebar">
              <div className="add-on-image">
                <img 
                  src="cbd.jpg"
                  alt="CBD therapy products" 
                />
              </div>

              <div className="pricing-section">
                <div className="pricing-header">
                  <h4>Prices</h4>
                </div>
                <ul className="pricing-list">
                  <li>60 minutes - $190</li>
                  <li>75 minutes - $215</li>
                  <li>90 minutes - $240</li>
                </ul>
                
                <div className="book-now-section">
                  <a href="https://spread-your-wings.noterro.com" target="_blank" rel="noopener noreferrer">
                    <button className="book-now-btn">BOOK NOW!</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;