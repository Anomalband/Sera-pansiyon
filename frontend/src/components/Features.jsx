import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Home, Sun, Heart } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = {
  MapPin: MapPin,
  Home: Home,
  Sun: Sun,
  Heart: Heart,
};

const Features = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9 && !visibleCards.includes(index)) {
            setVisibleCards(prev => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <div 
              key={feature.id} 
              className={`feature-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
              ref={el => cardsRef.current[index] = el}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(40px)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                transition: 'all 0.5s ease-out'
              }}
            >
              <div className="feature-icon">
                <IconComponent size={28} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
