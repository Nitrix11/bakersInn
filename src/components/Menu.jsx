import React, { useState } from 'react';


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
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <a href="#help">Help</a>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;