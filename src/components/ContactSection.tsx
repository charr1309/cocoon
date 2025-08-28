import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-header fade-in">
          <h1>Let's Talk</h1>
          <p>Ready to begin your wellness journey? I'm here to support you every step of the way.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="contact-info-card">
              <h3>Get In Touch</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>contact@cocoonmassageandwellness.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Clock className="contact-icon" />
                  <div>
                    <h4>Hours</h4>
                    <p>Mon-Fri: 9AM-7PM<br />Sat: 10AM-5PM<br />Sun: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chatbot-container fade-in">
            <div className="chatbot-header">
              <MessageCircle className="chatbot-icon" />
              <h3>Book Your Session</h3>
              <p>Let me help you find the perfect wellness experience</p>
            </div>
            
            <div className="chatbot-conversation">
              <div className="chat-message bot-message">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  Hi! I'm here to help you book your perfect wellness session. What's your name?
                </div>
              </div>
              
              <div className="chat-input-section">
                <input
                  type="text"
                  placeholder="Type your name..."
                  className="chat-input"
                />
                <button className="chat-send-btn">Send</button>
              </div>
            </div>
            
            <form className="hidden-form" onSubmit={handleSubmit} style={{ display: 'none' }}>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Preferred Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="deep-tissue">Deep Tissue Massage</option>
                    <option value="prenatal">Prenatal Massage</option>
                    <option value="postpartum">Postpartum Recovery</option>
                    <option value="stress-relief">Stress Relief Massage</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your wellness goals or any specific concerns..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;