import React, { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, BadgePercent } from 'lucide-react';
import { aboutContent, hotelInfo } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Ayvalık Sera Pansiyon hakkında bilgi almak istiyorum.`, '_blank');
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">Hakkımızda</span>
          <h2 className="about-title">{aboutContent.subtitle}</h2>
          
          <div className="about-text">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="price-guarantee-banner">
            <BadgePercent size={20} />
            <span>Aracı komisyonu olmadan direkt rezervasyon avantajı</span>
          </div>
          
          <button className="btn-primary" onClick={openWhatsApp}>
            <Phone size={18} />
            <span>Bize Ulaşın</span>
            <ArrowRight size={18} />
          </button>
        </div>
        
        <div className={`about-image-wrapper ${isVisible ? 'visible' : ''}`}>
          <img
            src={aboutContent.image}
            alt="Ayvalık Sera Pansiyon"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
