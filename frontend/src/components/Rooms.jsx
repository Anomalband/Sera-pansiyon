import React, { useEffect, useRef, useState } from 'react';
import { Users, Phone, Check, ArrowRight } from 'lucide-react';
import { rooms, hotelInfo } from '../data/mock';

const Rooms = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85 && !visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  const openWhatsApp = (roomName) => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, ${roomName} için rezervasyon yapmak istiyorum.`, '_blank');
  };

  return (
    <section id="rooms" className="rooms">
      <div className="rooms-container">
        <div className="section-header">
          <span className="section-label">Odalarımız</span>
          <h2 className="section-title">Konfor ve Lüks Bir Arada</h2>
          <p className="section-description">
            Geleneksel taş mimaride modern konforun buluştuğu odalarımızda unutulmaz bir konaklama deneyimi yaşayın.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className={`room-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
              ref={el => cardsRef.current[index] = el}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(60px)',
                opacity: visibleCards.includes(index) ? 1 : 0,
              }}
            >
              <div className="room-image-wrapper">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-image"
                />
              </div>
              
              <div className="room-content">
                <div className="room-header">
                  <h3 className="room-name">{room.name}</h3>
                  <div className="room-capacity">
                    <Users size={14} />
                    <span>{room.capacity}</span>
                  </div>
                </div>
                
                <p className="room-description">{room.description}</p>
                
                <div className="room-features">
                  {room.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="room-feature">
                      <Check size={12} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  className="room-cta"
                  onClick={() => openWhatsApp(room.name)}
                >
                  <Phone size={16} />
                  <span>Rezervasyon Yap</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
