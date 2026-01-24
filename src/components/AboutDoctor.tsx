import { doctorData } from '../config/doctorData';

const AboutDoctor = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-header">
          <h2 className="section-title">{doctorData.name}</h2>
          <p className="doctor-degrees">{doctorData.degrees.join(', ')}</p>
        </div>
        
        <div className="about-content">
          <div className="biography">
            <p>{doctorData.biography}</p>
          </div>
          
          <div className="about-details">
            {doctorData.education.length > 0 && (
              <div className="detail-section">
                <h3 className="detail-title">Education</h3>
                <ul className="detail-list">
                  {doctorData.education.map((edu, index) => (
                    <li key={index}>
                      <strong>{edu.degree}</strong>
                      {edu.institution && <span> - {edu.institution}</span>}
                      {edu.year && <span> ({edu.year})</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {doctorData.experience.length > 0 && (
              <div className="detail-section">
                <h3 className="detail-title">Experience</h3>
                <ul className="detail-list">
                  {doctorData.experience.map((exp, index) => (
                    <li key={index}>
                      <strong>{exp.position}</strong>
                      {exp.organization && <span> - {exp.organization}</span>}
                      {exp.duration && <span> ({exp.duration})</span>}
                      {exp.description && <p className="exp-description">{exp.description}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {doctorData.awards.length > 0 && (
              <div className="detail-section">
                <h3 className="detail-title">Awards & Recognition</h3>
                <ul className="detail-list">
                  {doctorData.awards.map((award, index) => (
                    <li key={index}>
                      <strong>{award.title}</strong>
                      {award.organization && <span> - {award.organization}</span>}
                      {award.year && <span> ({award.year})</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
