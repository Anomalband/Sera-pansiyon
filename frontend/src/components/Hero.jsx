import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Phone, MapPin, Award, ThumbsUp, Shield } from 'lucide-react';
import { hotelInfo, heroImages, logo } from '../data/mock';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div 
        className="hero-content"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 500),
        }}
      >
        {/* Logo */}
        <div className="hero-logo">
          <img src={logo} alt="Sera Pansiyon Logo" />
        </div>

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

        {/* Promosyon Badge'leri */}
        <div className="hero-badges">
          <div className="promo-badge">
            <Award size={18} />
            <span>En İyi Fiyat Garantisi</span>
          </div>
          <div className="promo-badge">
            <ThumbsUp size={18} />
            <span>Misafir Memnuniyeti</span>
          </div>
          <div className="promo-badge">
            <Shield size={18} />
            <span>Güvenli Rezervasyon</span>
          </div>
        </div>
        
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

      <div 
        className="scroll-indicator"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
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
