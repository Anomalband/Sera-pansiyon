import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

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

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <span className="section-label">Galeri</span>
          <h2 className="section-title">Sera Pansiyon'dan Kareler</h2>
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
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
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
