import React from 'react';
import { Phone, Instagram, MapPin, Mail } from 'lucide-react';
import { hotelInfo } from '../data/mock';

const Contact = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon'da rezervasyon yapmak istiyorum.`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <span className="section-label">İletişim</span>
          <h2 className="contact-title">Rezervasyon & Bilgi</h2>
          <p className="contact-description">
            Rezervasyon yapmak veya sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz. 
            Size en kısa sürede dönüş yapacağız.
          </p>

          <div className="contact-info">
            <a
              href={`tel:${hotelInfo.whatsappDisplay.replace(/\s/g, '')}`}
              className="contact-item"
            >
              <Phone size={20} />
              <span>{hotelInfo.whatsappDisplay}</span>
            </a>

            <a
              href={hotelInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Instagram size={20} />
              <span>@serapansiyonn</span>
            </a>

            <a
              href={hotelInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MapPin size={20} />
              <span>{hotelInfo.address}</span>
            </a>
          </div>

          <button className="contact-cta" onClick={openWhatsApp}>
            <Phone size={20} />
            <span>WhatsApp ile Rezervasyon Yap</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
