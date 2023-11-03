import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images, interval]);

  const img = images[currentImageIndex]; // Use the imported image directly

  return (
    <div className="image-slider">
      <img src={img} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
