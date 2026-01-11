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
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardsRef = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observerRef.current?.observe(card);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <div 
              key={feature.id} 
              className={`feature-card ${visibleCards.has(index) ? 'visible' : ''}`}
              ref={el => cardsRef.current[index] = el}
              data-index={index}
              style={{ transitionDelay: `${index * 100}ms` }}
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
