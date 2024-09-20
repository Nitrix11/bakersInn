import React from 'react';

import banner from "../assets/productB.png"

const PBanner = () => {
  return (
    <section className="product-range1">
      <div className="image-container1">
        <img
          src={banner}
          alt="Product Range"
        />
        <div className="overlay1">
          <h2 className='font-bold'>Our Product Range</h2>
        </div>
      </div>
    </section>
  );
};

export default PBanner;
