import React from 'react';


const BrandLogos = ({ selectedBrand, setSelectedBrand }) => {
  const brands = [
  { 
    name: 'BMW', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg'
  },
  { 
    name: 'Mercedes', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg'
  },
  { 
    name: 'Porsche', 
    image: '/heber-davis-ZQcWAy514Oo-unsplash.jpg'
  },
  { 
    name: 'Audi', 
    image: '/68feb741510242d02b7e29a6ae50983f.jpg'
  },
  { 
    name: 'Jaguar', 
    image: '/jaguar.jpg'
  },
  { 
    name: 'Range Rover', 
    image:'/rr.jpeg'
  }
];


  return (
    <section className="brand-logos-section" id="brands">
      <div className="brand-logos-container">
        <h2 className="brand-logos-title">
          Trusted by <span className="brand-logos-title-accent">Premium</span> Brands
        </h2>
        
        <div className="brand-logos-grid">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className={`brand-logo-card ${
                selectedBrand === brand.name ? 'brand-logo-card-active' : ''
              }`}
              onClick={() => setSelectedBrand(brand.name)}
            >
              <div className="brand-logo-content">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="brand-logo-image"
                  loading="lazy"
                />
                <span className="brand-logo-name">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;