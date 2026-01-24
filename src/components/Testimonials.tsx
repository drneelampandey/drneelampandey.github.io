import { useState, useEffect } from 'react';
import { doctorData } from '../config/doctorData';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % doctorData.testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? doctorData.testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % doctorData.testimonials.length);
  };

  const currentTestimonial = doctorData.testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-container">
        <h2 className="section-title">What Our Patients Say</h2>
        <div className="testimonials-container">
          <button 
            className="testimonial-nav-btn prev-btn" 
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <p className="testimonial-text">"{currentTestimonial.text}"</p>
            <div className="testimonial-author">
              <span className="testimonial-name">— {currentTestimonial.name}</span>
              {currentTestimonial.date && (
                <span className="testimonial-date">{currentTestimonial.date}</span>
              )}
            </div>
          </div>
          
          <button 
            className="testimonial-nav-btn next-btn" 
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className="testimonial-indicators">
          {doctorData.testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
