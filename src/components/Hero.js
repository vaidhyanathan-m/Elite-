import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Premium Car Detailing Services</h1>
        <p className="hero-subtitle">
          Transforming your vehicle with meticulous care and cutting-edge techniques
        </p>
        <a href="#contact" className="cta-button">Book An Appointment</a>
      </div>
    </section>
  );
};

export default Hero;
