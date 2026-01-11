import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);
  const itemsRef = useRef([]);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'rooms', name: 'Odalar' },
    { id: 'terrace', name: 'Teras' },
    { id: 'exterior', name: 'Dış Mekan' },
    { id: 'location', name: 'Konum' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    // Reset visible items when filter changes
    setVisibleItems([]);
    itemsRef.current = [];
    
    const timer = setTimeout(() => {
      const handleScroll = () => {
        itemsRef.current.forEach((item, index) => {
          if (item) {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.95) {
              setVisibleItems(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, 50);

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-label">Galeri</span>
          <h2 className="section-title">Sera Pansiyon'dan Kareler</h2>
          <p className="section-description">
            Pansiyonumuzdan görüntüler ve Ayvalık'ın güzellikleri
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gallery-filter ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
              ref={el => itemsRef.current[index] = el}
              style={{ 
                transitionDelay: `${index * 80}ms`,
                transform: visibleItems.includes(index) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleItems.includes(index) ? 1 : 0,
                transition: 'all 0.5s ease-out'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <ZoomIn size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <img
            src={selectedImage.src.replace('w=600', 'w=1200')}
            alt={selectedImage.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
