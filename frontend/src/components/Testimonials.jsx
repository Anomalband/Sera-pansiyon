import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85 && !visibleCards.includes(index)) {
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
    <section id="testimonials" className="testimonials">
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
              className={`testimonial-card ${visibleCards.includes(index) ? 'animate-in' : ''}`}
              ref={el => cardsRef.current[index] = el}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: visibleCards.includes(index) 
                  ? 'translateY(0) scale(1)' 
                  : 'translateY(40px) scale(0.95)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                transition: 'all 0.6s ease-out'
              }}
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
