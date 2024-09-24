import React, { useState } from "react";
import logo from "../assets/bakers-inn-category 1.png";
import { Link } from "react-router-dom";
import"../components/Nav.css"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-bar">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Baker's Inn" />
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="about">
                        <li><a href="#" className="text-[#261B6C] text-[22px] font-bold">About Us</a></li>
                    </Link>
                    <Link to='product'>
                        <li><a href="#" className="text-[#261B6C] text-[22px] font-bold">Products</a></li>
                    </Link>
                    <Link to="recipes">
                        <li><a href="#" className="text-[#261B6C] text-[22px] font-bold">Recipes</a></li>
                    </Link>
                    <Link to="kids">
                        <li><a href="#" className="text-[#261B6C] text-[22px] font-bold">Kid's Corner</a></li>
                    </Link>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
            <div className="flex">
            <div className={`circle1 blue1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`circle1 brown1 ${isOpen ? 'open' : ''}`}></div>
               
            </div>
            <div className="flex">
            <div className={`circle1 brown1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`circle1 blue1 ${isOpen ? 'open' : ''}`}></div>
            </div>
      
        </div>
      </div>
    </div>
  );
};

export default Nav;
