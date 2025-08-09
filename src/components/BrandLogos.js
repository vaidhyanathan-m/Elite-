import React from 'react';

const BrandLogos = ({ selectedBrand, setSelectedBrand }) => {
  const brands = [
    { name: 'BMW', image: 'https://cdn.worldvectorlogo.com/logos/bmw-2020.svg' },
    { name: 'Mercedes', image: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg' },
    { name: 'Porsche', image: 'https://cdn.worldvectorlogo.com/logos/porsche-1.svg' },
    { name: 'Audi', image: 'https://cdn.worldvectorlogo.com/logos/audi-9.svg' },
    { name: 'Jaguar', image: 'https://cdn.worldvectorlogo.com/logos/jaguar-4.svg' },
    { name: 'Range Rover', image: 'https://cdn.worldvectorlogo.com/logos/land-rover-4.svg' }
  ];

  return (
    <section className="brands" id="brands">
      <h2 className="brands-title">We Work With The Best</h2>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div 
            key={brand.name} 
            className="brand-item"
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedBrand(brand.name)}
          >
            <img 
              src={brand.image} 
              alt={brand.name} 
              className={`brand-image ${selectedBrand === brand.name ? 'active' : ''}`}
            />
            <p className="brand-name">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;