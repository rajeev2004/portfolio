import React, { useState } from 'react';
import './ImageCarousel.css';
function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prev}>←</button>
      <img
        src={images[current]}
        alt="project screenshot"
        className="carousel-img"
      />
      <button className="carousel-arrow right" onClick={next}>→</button>
    </div>
  );
}

export default ImageCarousel;
