import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactForm from './components/ContactForm';

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.brand-item, .service-card, .gallery-item, .about-image, .about-content');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dark">
      <Navbar/>
      <Hero />
      <BrandLogos selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      <Services />
      <Gallery selectedBrand={selectedBrand} />
      <About />
      <ContactForm />
    </div>
  );
}

export default App;