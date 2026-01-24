import { doctorData } from '../config/doctorData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <a href={`tel:${doctorData.contact.phone}`}>
                  {doctorData.contact.phone}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${doctorData.contact.email}`}>
                  {doctorData.contact.email}
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Address</h3>
                <p>{doctorData.contact.address}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaClock className="contact-icon" />
              <div>
                <h3>Working Hours</h3>
                <div className="working-hours">
                  {Object.entries(doctorData.contact.workingHours).map(([day, hours]) => (
                    <div key={day} className="hours-row">
                      <span className="hours-day">{day}:</span>
                      <span className="hours-time">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="maps-container">
            <p className="maps-blurb">{doctorData.contact.mapsBlurb}</p>
            <div className="maps-embed">
              <iframe
                src={doctorData.contact.googleMapsEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
