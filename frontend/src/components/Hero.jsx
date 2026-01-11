import React, { useEffect, useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { hotelInfo, heroImages } from '../data/mock';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div 
        className="hero-content"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 600),
        }}
      >
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

      {/* Scroll indicator */}
      <div 
        className="scroll-indicator"
        style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Aşağı Kaydır</span>
      </div>
    </section>
  );
};

export default Hero;
