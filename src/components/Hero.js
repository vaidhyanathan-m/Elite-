import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source 
          src="/mixkit-red-sports-car-74-hd-ready.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="shimmer-text">Elite Auto Shine</span>
        </h1>

        {/* Animated line */}
        <div className="title-line"></div>

        <p className="hero-subtitle">
          Premium car detailing services for a flawless, show-ready shine.
        </p>

        {/* CTA */}
        <a href="#contact" className="hero-cta">
          Book Your Detailing Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
