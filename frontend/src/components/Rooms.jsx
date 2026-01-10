import React from 'react';
import { Users, Phone, Check, ArrowRight } from 'lucide-react';
import { rooms, hotelInfo } from '../data/mock';

const Rooms = () => {
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
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
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
                  {room.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="room-feature">
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
