import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Manhattan, NY",
    rating: 5,
    text: "Shanna's prenatal massage sessions were a lifesaver during my pregnancy. Her gentle touch and intuitive understanding of what my body needed made each visit a true sanctuary. I felt completely cared for and supported.",
    service: "Prenatal Massage"
  },
  {
    name: "Jennifer L.",
    location: "Brooklyn, NY",
    rating: 5,
    text: "After years of chronic back pain, I finally found relief through Shanna's deep tissue work. Her knowledge of anatomy and therapeutic techniques is exceptional. I leave every session feeling renewed and pain-free.",
    service: "Deep Tissue Massage"
  },
  {
    name: "Maria R.",
    location: "Queens, NY",
    rating: 5,
    text: "The postpartum massage sessions helped me recover so much faster after my delivery. Shanna created such a nurturing environment where I could truly relax and heal. Her care extended beyond just the massage.",
    service: "Postpartum Recovery"
  },
  {
    name: "Lisa K.",
    location: "Manhattan, NY",
    rating: 5,
    text: "I've been seeing Shanna for stress relief massage for over two years. Her space is like a cocoon of peace in the busy city. She has an amazing ability to melt away all my tension and stress.",
    service: "Stress Relief Massage"
  },
  {
    name: "Amanda T.",
    location: "Bronx, NY",
    rating: 5,
    text: "Shanna's holistic approach to wellness has transformed my relationship with self-care. She doesn't just work on my body - she helps me understand how to maintain wellness in my daily life.",
    service: "Holistic Wellness"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    if (isTransitioning || currentTestimonial >= totalTestimonials - 1) return;
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevTestimonial = () => {
    if (isTransitioning || currentTestimonial <= 0) return;
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => prev - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentTestimonial) return;
    setIsTransitioning(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="love" className="testimonials-section section-padding">
      <div className="container">
        <div className="testimonials-header fade-in">
          <h2>Client Love</h2>
          <p>Hear from the amazing people who have experienced transformation through my care</p>
        </div>

        <div className="testimonials-carousel fade-in">
          <div className="testimonial-container">
            <div className="testimonial-slider" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="#69d5c3" color="#69d5c3" />
                      ))}
                    </div>
                    <blockquote className="testimonial-text">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <p className="author-location">{testimonial.location}</p>
                      <p className="author-service">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-navigation">
            <button 
              className={`testimonial-nav testimonial-nav-prev ${currentTestimonial === 0 ? 'disabled' : ''}`} 
              onClick={prevTestimonial}
              disabled={currentTestimonial === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={`testimonial-nav testimonial-nav-next ${currentTestimonial === totalTestimonials - 1 ? 'disabled' : ''}`} 
              onClick={nextTestimonial}
              disabled={currentTestimonial === totalTestimonials - 1}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-cta fade-in">
          <p>Ready to experience the transformation for yourself?</p>
          <button 
            className="btn"
            onClick={() => window.open('https://spread-your-wings.noterro.com', '_blank')}
          >
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;