import React, { useEffect, useState } from 'react';
import abt from"../assets/recipes1.png"
import abt2 from"../assets/recipes2.png"
import abt3 from"../assets/recipes3.png"
import abt4 from"../assets/recipes4.png"

const images = [
  abt,
  abt2,
  abt3,
  abt4,
];

const ImageCircles = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container ">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img src={image} alt={`Image ${index + 1}`} className="image" />
          {index === activeIndex && (
            <div className="circles">
              <div className="circle red"></div>
              <div className="circle blue"></div>
            </div>
          )}
          {index !== activeIndex && <div className="overlay"></div>}
        </div>
      ))}
    </div>
  );
};

export default ImageCircles;