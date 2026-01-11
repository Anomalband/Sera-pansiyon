import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';
import { hotelInfo, nearbyPlaces } from '../data/mock';

const Location = () => {
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

  const openMaps = () => {
    window.open(hotelInfo.mapsUrl, '_blank');
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon'a nasıl ulaşabilirim?`, '_blank');
  };

  const getParallaxOffset = () => {
    if (!sectionRef.current) return 0;
    const rect = sectionRef.current.getBoundingClientRect();
    return (window.innerHeight - rect.top) * 0.08;
  };

  return (
    <section id="location" className="location" ref={sectionRef}>
      <div className="location-container">
        <div 
          className={`location-content ${isVisible ? 'animate-in' : ''}`}
          style={{ 
            transform: `translateX(${isVisible ? 0 : -50}px)`,
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease-out'
          }}
        >
          <span className="section-label">Konum</span>
          <h2 className="location-title">Ayvalık'ın Tam Kalbinde</h2>
          <p className="location-description">
            Sera Pansiyon, Ayvalık'ın tarihi merkezinde, tüm turistik noktalara yürüme mesafesinde konumlanmıştır. 
            Sessiz bir sokakta olmasına rağmen, çarşı, sahil ve restoranlar sadece birkaç adım ötenizdedir.
          </p>

          <h3 className="nearby-title">Yakın Çevremiz</h3>
          <div className="nearby-grid">
            {nearbyPlaces.map((place, index) => (
              <div 
                key={index} 
                className="nearby-item"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.5s ease-out'
                }}
              >
                <Navigation size={16} />
                <span className="nearby-name">{place.name}</span>
                <span className="nearby-distance">{place.distance}</span>
              </div>
            ))}
          </div>

          <div className="location-address">
            <MapPin size={20} />
            <span>{hotelInfo.address}</span>
          </div>

          <div className="location-actions">
            <button className="btn-primary" onClick={openMaps}>
              <ExternalLink size={18} />
              <span>Haritada Gör</span>
            </button>
            <button className="btn-secondary" onClick={openWhatsApp}>
              <Phone size={18} />
              <span>Yol Tarifi Al</span>
            </button>
          </div>
        </div>

        <div 
          className="location-map"
          style={{ 
            transform: `translateY(${-getParallaxOffset()}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.8!2d26.6962985!3d39.3193741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba7734803dc6db%3A0x9763e80c9a0c352c!2sSera%20Pansiyon%20Ayval%C4%B1k!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sera Pansiyon Konum"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
