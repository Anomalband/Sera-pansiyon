import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { aboutContent, hotelInfo } from '../data/mock';

const About = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon hakkında bilgi almak istiyorum.`, '_blank');
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-label">Hakkımızda</span>
          <h2 className="about-title">{aboutContent.subtitle}</h2>
          
          <div className="about-text">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <button className="btn-primary" onClick={openWhatsApp}>
            <Phone size={18} />
            <span>Bize Ulaşın</span>
            <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="about-image-wrapper">
          <img
            src={aboutContent.image}
            alt="Sera Pansiyon"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
