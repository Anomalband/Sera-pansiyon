import React, { useEffect, useRef, useState } from 'react';
import { Phone, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { hotelInfo } from '../data/mock';

const Contact = () => {
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
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon'da rezervasyon yapmak istiyorum.`, '_blank');
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">İletişim</span>
          <h2 className="contact-title">Rezervasyon Yapmaya Hazır mısınız?</h2>
          <p className="contact-description">
            Rezervasyon yapmak veya sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz. 
            Size en kısa sürede dönüş yapacağız.
          </p>

          <div className="contact-info">
            <a
              href={`tel:${hotelInfo.whatsappDisplay.replace(/\s/g, '')}`}
              className={`contact-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <Phone size={22} />
              <span>{hotelInfo.whatsappDisplay}</span>
            </a>

            <a
              href={hotelInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <Instagram size={22} />
              <span>@serapansiyonn</span>
            </a>

            <a
              href={hotelInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <MapPin size={22} />
              <span>{hotelInfo.address}</span>
            </a>
          </div>

          <button 
            className={`contact-cta ${isVisible ? 'visible' : ''}`}
            onClick={openWhatsApp}
            style={{ transitionDelay: '400ms' }}
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
