import { doctorData } from '../config/doctorData';

const HomeSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="doctor-photo-container">
            <img 
              src={doctorData.photo} 
              alt={doctorData.name}
              className="doctor-photo"
            />
          </div>
          <div className="home-text">
            <h1 className="doctor-name">{doctorData.name}</h1>
            <p className="doctor-degrees">{doctorData.degrees.join(', ')}</p>
            
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <div>
                  <div className="stat-value">{doctorData.stats.googleRating}</div>
                  <div className="stat-label">Google Rating</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">💬</span>
                <div>
                  <div className="stat-value">{doctorData.stats.googleReviews}+</div>
                  <div className="stat-label">Reviews</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📅</span>
                <div>
                  <div className="stat-value">{doctorData.stats.yearsOfExperience}+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">👥</span>
                <div>
                  <div className="stat-value">{doctorData.stats.patientsTreated}+</div>
                  <div className="stat-label">Patients Treated</div>
                </div>
              </div>
            </div>
            
            <button className="book-consultation-btn" onClick={scrollToContact}>
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
