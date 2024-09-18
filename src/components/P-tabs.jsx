import React, { useState } from 'react';

import yellow from "../assets/yellow.png";
import red from "../assets/red.png";
import blue from "../assets/Rectangle 5.png";

const productsData = {
  bread: [
    {
      title: 'Premium Soft White Loaf',
      description:
        'Our Premium Soft White loaves are delightfully soft, fresh, and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.',
      image: yellow,
    },
    {
      title: 'Family Loaf High Energy Brown',
      description:
        'Our Family Loaf High Energy Brown loaves are a great source of fiber, high in energy, and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs—anything! The Family Loaf has 21 slices.',
      image: yellow,
    },
    {
      title: 'Family Loaf Soft White',
      description:
        'Our Family Loaf Soft White loaves are delightfully soft, fresh, and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices.',
      image: red,
    },
  ],
  meatPies: [
    {
      title: 'Classic Meat Pie',
      description: 'Delicious meat pies with a flaky crust and savory filling.',
      image: blue,
    },
  ],
  scones: [
    {
      title: 'Sugar Free Scone',
      description: 'Tasty scones that are sugar-free and perfect for any time of day.',
      image: yellow,
    },
  ],
  donuts: [
    {
      title: 'Chocolate Donut',
      description: 'Rich chocolate donuts that are a treat for any sweet tooth.',
      image: red,
    },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('bread');

  const renderProducts = (category) => {
    
    return productsData[category].map((product, index) => (
      <div className="wrapper5">


      <div id='product-card' className=" " key={index}>
        <img src={product.image}  alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      </div>
    ));
  };

  return (
    <div className="product-tabs">
      <h2 className="text-[#261B6C] text-[32px] font-bold">Our Products</h2>
      <div id='tabss' className="tabs">
        {Object.keys(productsData).map((category) => (
          <button
            key={category}
            className={activeTab === category ? 'active' : ''}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
          
        ))}
       
      </div>
      <hr  id='liness' className='p-[30px]' />
      <div className="products-grid">{renderProducts(activeTab)}</div>
    </div>
  );
};

export default ProductTabs;