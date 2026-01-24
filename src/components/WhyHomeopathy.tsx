import { doctorData } from '../config/doctorData';

const WhyHomeopathy = () => {
  return (
    <section id="why-homeopathy" className="why-homeopathy-section">
      <div className="section-container">
        <h2 className="section-title">{doctorData.whyHomeopathy.title}</h2>
        <p className="why-homeopathy-content">{doctorData.whyHomeopathy.content}</p>
      </div>
    </section>
  );
};

export default WhyHomeopathy;
