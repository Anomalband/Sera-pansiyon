import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { hotelInfo, logo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Odalar', href: '#rooms' },
    { name: 'Konum', href: '#location' },
    { name: 'Yorumlar', href: '#testimonials' },
    { name: 'Galeri', href: '#gallery' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${hotelInfo.whatsapp}?text=Merhaba, Ayvalık Sera Pansiyon hakkında bilgi almak istiyorum.`, '_blank');
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="header-logo" onClick={(e) => scrollToSection(e, '#home')}>
          <img src={logo} alt="Ayvalık Sera Pansiyon" className="header-logo-img" />
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="header-nav-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="header-cta" onClick={openWhatsApp}>
          <Phone size={16} />
          <span>Rezervasyon</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => scrollToSection(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <button className="mobile-nav-cta" onClick={openWhatsApp}>
          <Phone size={16} />
          <span>Rezervasyon Yap</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
