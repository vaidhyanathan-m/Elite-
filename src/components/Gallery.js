import React from 'react';

const Gallery = ({ selectedBrand }) => {
  const allImages = [
    { url: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', brand: 'BMW', caption: 'BMW Full Detailing' },
    { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', brand: 'Mercedes', caption: 'Mercedes Interior Cleaning' },
    { url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', brand: 'Porsche', caption: 'Porsche Ceramic Coating' },
    { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', brand: 'Audi', caption: 'Audi Paint Correction' },
    { url: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', brand: 'Jaguar', caption: 'Jaguar Exterior Detailing' },
    { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', brand: 'Range Rover', caption: 'Range Rover Full Service' }
  ];

  const filteredImages = selectedBrand 
    ? allImages.filter(image => image.brand === selectedBrand)
    : allImages;

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Our Work Gallery</h2>
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <img src={image.url} alt={image.caption} className="gallery-image" />
            <div className="gallery-overlay">
              <p className="gallery-caption">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;