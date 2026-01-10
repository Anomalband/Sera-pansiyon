import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { hotelInfo, heroImages } from '../data/mock';

const Hero = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon'da rezervasyon yapmak istiyorum.`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img
          src={heroImages.main}
          alt="Ayvalık manzarası"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <MapPin size={14} />
          <span>Ayvalık, Balıkesir</span>
        </div>
        
        <h1 className="hero-title">
          {hotelInfo.tagline}
        </h1>
        
        <p className="hero-description">
          {hotelInfo.description}
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary" onClick={openWhatsApp}>
            <Phone size={18} />
            <span>Rezervasyon Yap</span>
          </button>
          
          <a href="#rooms" className="btn-secondary">
            Odalarımızı İnceleyin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
