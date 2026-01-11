import React, { useEffect, useRef, useState } from 'react';
import { Phone, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { hotelInfo } from '../data/mock';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
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
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon'da rezervasyon yapmak istiyorum.`, '_blank');
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div 
          className="contact-content"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease-out'
          }}
        >
          <span className="section-label">İletişim</span>
          <h2 className="contact-title">Rezervasyon Yapmaya Hazır mısınız?</h2>
          <p className="contact-description">
            Rezervasyon yapmak veya sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz. 
            Size en kısa sürede dönüş yapacağız.
          </p>

          <div className="contact-info">
            <a
              href={`tel:${hotelInfo.whatsappDisplay.replace(/\s/g, '')}`}
              className="contact-item"
              style={{
                transitionDelay: '100ms',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease-out'
              }}
            >
              <Phone size={22} />
              <span>{hotelInfo.whatsappDisplay}</span>
            </a>

            <a
              href={hotelInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              style={{
                transitionDelay: '200ms',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease-out'
              }}
            >
              <Instagram size={22} />
              <span>@serapansiyonn</span>
            </a>

            <a
              href={hotelInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              style={{
                transitionDelay: '300ms',
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease-out'
              }}
            >
              <MapPin size={22} />
              <span>{hotelInfo.address}</span>
            </a>
          </div>

          <button 
            className="contact-cta" 
            onClick={openWhatsApp}
            style={{
              transitionDelay: '400ms',
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out'
            }}
          >
            <Phone size={22} />
            <span>WhatsApp ile Rezervasyon Yap</span>
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
