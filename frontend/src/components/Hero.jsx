import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { hotelInfo, heroImages } from '../data/mock';

const Hero = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon'da rezervasyon yapmak istiyorum.`, '_blank');
  };

  const scrollToRooms = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          Ayvalık'ın Kalbinde <span>Mükemmel</span> Konaklama Deneyimi
        </h1>
        
        <p className="hero-description">
          Tarihi taş ev mimarisinde, samimi ve sıcak bir atmosferde unutulmaz bir tatil sizi bekliyor.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary" onClick={openWhatsApp}>
            <Phone size={18} />
            <span>Hemen Rezervasyon Yap</span>
          </button>
          
          <button className="btn-secondary" onClick={scrollToRooms}>
            Odalarımızı Keşfedin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
