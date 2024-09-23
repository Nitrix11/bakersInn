import React, { useState } from 'react';
import "../components/Menu.css"
import { Link } from "react-router-dom";
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div id="top" className='flex'>
            <div className={`circle1 blue1 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <div className={`circle1 brown1 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            </div>
            <div id="bottom" className='flex'>
            <div className={`circle1 brown1 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <div className={`circle1 blue1 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            </div>
           
         
            {isOpen && (
                <div className="menu-links">
                   <Link to="about">
                    <li id="li"><a href="" className="text-[#261B6C] text-[22px] font-bold">  About Us</a></li>
                    </Link>
                    
                   <Link to='product'>
                   <li><a href="" className="text-[#261B6C] text-[22px] font-bold" >Products</a></li>
                   </Link>
                   <Link to="recipes">
           
                    <li><a href="" className="text-[#261B6C] text-[22px] font-bold" >Recipes</a></li>
                    </Link>
                    <Link to="kids">
                    <li><a href="" className="text-[#261B6C] text-[22px] font-bold" >Kid's Corner</a></li>
                    </Link>
                    
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;