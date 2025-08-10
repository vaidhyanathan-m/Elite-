import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Our Team" 
          className="about-image"
        />
        <div className="about-content">
          <h2 className="about-title">About Elite Auto Shine</h2>
          <p className="about-text">
            Founded in 2010, Elite Auto Shine has been providing premium car detailing services to luxury vehicle owners. 
            Our team of certified detailers uses only the finest products and techniques to bring out the best in your vehicle.
          </p>
          <p className="about-text">
            We believe that every car deserves to look its best, and we take pride in our meticulous attention to detail. 
            From exotic sports cars to classic collectibles, we treat every vehicle with the care it deserves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;