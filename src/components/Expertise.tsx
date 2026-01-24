import { doctorData } from '../config/doctorData';

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="section-container">
        <h2 className="section-title">Areas of Expertise</h2>
        <div className="expertise-grid">
          {doctorData.expertise.map((area, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-number">{area.number}</div>
              <h3 className="expertise-title">{area.title}</h3>
              <ul className="expertise-conditions">
                {area.conditions.map((condition, idx) => (
                  <li key={idx}>{condition}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
