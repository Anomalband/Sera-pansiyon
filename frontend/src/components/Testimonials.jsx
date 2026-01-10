import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
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
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={24} />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
              
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
