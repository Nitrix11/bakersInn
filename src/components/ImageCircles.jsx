import React, { useEffect, useState } from 'react';


const ImageCircles = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images]);
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img src={image} />
          {activeIndex === index && (
            <div className="overlay">
              <div className="circle red"></div>
              <div className="circle blue"></div>
            </div>
          )}
          {activeIndex !== index && <div className="black-overlay"></div>}
        </div>
      ))}
    </div>
  );
};

export default ImageCircles;