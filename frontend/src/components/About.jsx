import React, { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { aboutContent, hotelInfo } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon hakkında bilgi almak istiyorum.`, '_blank');
  };

  const getParallaxOffset = () => {
    if (!sectionRef.current) return 0;
    const rect = sectionRef.current.getBoundingClientRect();
    return (window.innerHeight - rect.top) * 0.1;
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div 
          className={`about-content ${isVisible ? 'animate-in' : ''}`}
          style={{ transform: `translateX(${isVisible ? 0 : -50}px)` }}
        >
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
        
        <div 
          className={`about-image-wrapper ${isVisible ? 'animate-in' : ''}`}
          style={{ 
            transform: `translateY(${-getParallaxOffset()}px)`,
          }}
        >
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
