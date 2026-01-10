import React from 'react';
import { Phone, Instagram, MapPin, Mail, Heart } from 'lucide-react';
import { hotelInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Sera Pansiyon hakkında bilgi almak istiyorum.`, '_blank');
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">Sera Pansiyon</h3>
            <p className="footer-tagline">
              Ayvalık'ın kalbinde, ev sıcaklığında konaklama.
            </p>
            <div className="footer-social">
              <a
                href={hotelInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={openWhatsApp}
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Hızlı Erişim</h4>
            <nav className="footer-nav">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Ana Sayfa</a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>Hakkımızda</a>
              <a href="#rooms" onClick={(e) => scrollToSection(e, '#rooms')}>Odalar</a>
              <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Galeri</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>İletişim</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="footer-links-title">İletişim</h4>
            <div className="footer-contact-list">
              <a href={`tel:${hotelInfo.whatsappDisplay.replace(/\s/g, '')}`} className="footer-contact-item">
                <Phone size={16} />
                <span>{hotelInfo.whatsappDisplay}</span>
              </a>
              <a href={hotelInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <MapPin size={16} />
                <span>Ayvalık, Balıkesir</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Sera Pansiyon. Tüm hakları saklıdır.
          </p>
          <p className="footer-made">
            <Heart size={14} fill="currentColor" />
            <span>Ayvalık'ta sevgiyle hazırlandı</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
