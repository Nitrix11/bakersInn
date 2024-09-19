import React from 'react';
import ImageComponent from '../assets/abt1';
import ImageComponent2 from '../assets/abt2';
import ImageComponent3 from '../assets/abt3';
import ImageComponent4 from '../assets/abt4';




function Container() {
  const images = [
    ImageComponent,
    ImageComponent2,
    ImageComponent3,
    ImageComponent4,
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {images.map((image, index) => (
        <ImageComponent key={index} image={image} />
      ))}
    </div>
  );
}
export default Container