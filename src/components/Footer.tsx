import { doctorData } from '../config/doctorData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="footer-icon" />
              <span>{doctorData.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone className="footer-icon" />
              <a href={`tel:${doctorData.contact.phone}`}>
                {doctorData.contact.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <a href={`mailto:${doctorData.contact.email}`}>
                {doctorData.contact.email}
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              {doctorData.socialMedia.instagram && (
                <a 
                  href={doctorData.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
              {doctorData.socialMedia.facebook && (
                <a 
                  href={doctorData.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              )}
              {doctorData.socialMedia.linkedin && (
                <a 
                  href={doctorData.socialMedia.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {doctorData.socialMedia.twitter && (
                <a 
                  href={doctorData.socialMedia.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              )}
              {doctorData.socialMedia.youtube && (
                <a 
                  href={doctorData.socialMedia.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {doctorData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
