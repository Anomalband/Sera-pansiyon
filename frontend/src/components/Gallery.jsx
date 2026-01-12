import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemsRef = useRef([]);
  const observerRef = useRef(null);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'rooms', name: 'Odalar' },
    { id: 'terrace', name: 'Teras' },
    { id: 'exterior', name: 'Dış Mekan' },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    // Reset when filter changes
    setVisibleItems(new Set());
    itemsRef.current = [];

    // Small delay to let DOM update
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              setVisibleItems((prev) => new Set([...prev, index]));
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      itemsRef.current.forEach((item) => {
        if (item) observerRef.current?.observe(item);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
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
              key={`${filter}-${image.id}`}
              className={`gallery-item ${visibleItems.has(index) ? 'visible' : ''}`}
              onClick={() => setSelectedImage(image)}
              ref={el => itemsRef.current[index] = el}
              data-index={index}
              style={{ transitionDelay: `${index * 60}ms` }}
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
