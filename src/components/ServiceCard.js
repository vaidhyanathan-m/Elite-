import React from 'react';

const ServiceCard = ({ service, delay }) => {
  return (
    <div 
      className="service-card"
      style={{ transitionDelay: `${delay}s` }}
    >
      <img src={service.image} alt={service.title} className="service-image" />
      <div className="service-content">
        <div className="service-icon">{service.icon}</div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;