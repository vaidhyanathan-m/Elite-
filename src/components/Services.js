import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Exterior Detailing',
      description: 'Complete exterior wash, clay bar treatment, polish and wax for a showroom finish.',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Interior Detailing',
      description: 'Deep cleaning of all interior surfaces, leather conditioning, and odor elimination.',
      icon: '🧽',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Ceramic Coating',
      description: 'Advanced ceramic coating application for long-lasting protection and shine.',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Premium Services</h2>
      <p className="services-subtitle">
        We offer a range of detailing services to bring your vehicle back to showroom condition
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            service={service}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;