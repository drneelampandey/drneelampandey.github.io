import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import WhyHomeopathy from './components/WhyHomeopathy';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import AboutDoctor from './components/AboutDoctor';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeSection />
      <WhyHomeopathy />
      <Expertise />
      <Testimonials />
      <AboutDoctor />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
