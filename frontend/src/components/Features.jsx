import React from 'react';
import { MapPin, Home, Sun, Heart } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = {
  MapPin: MapPin,
  Home: Home,
  Sun: Sun,
  Heart: Heart,
};

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <IconComponent size={24} />
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
