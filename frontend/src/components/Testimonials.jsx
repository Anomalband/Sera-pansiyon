import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials, sectionBackgrounds } from '../data/mock';

const Testimonials = () => {
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
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observerRef.current?.observe(card);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section 
      id="testimonials" 
      className="testimonials"
      style={{
        backgroundImage: `url(${sectionBackgrounds.testimonials})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="testimonials-container">
        <div className="section-header">
          <span className="section-label">Misafir Yorumları</span>
          <h2 className="section-title">Misafirlerimiz Ne Diyor?</h2>
          <p className="section-description">
            Değerli misafirlerimizin Sera Pansiyon deneyimleri
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${visibleCards.has(index) ? 'visible' : ''}`}
              ref={el => cardsRef.current[index] = el}
              data-index={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="testimonial-quote">
                <Quote size={32} />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-meta">
                    {testimonial.location} • {testimonial.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
