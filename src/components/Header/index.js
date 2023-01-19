import React from 'react';
import Navbar from '../../pages/Navbar';
import Intro from '../../pages/Intro';
 import './header.scss'
const Header = () => {
    return (
        <div className="Header">
            <div className="top"> {/* Navbar*/} <Navbar/></div>
            <div className="bottom">
            <div className="Intro">{/* Intro */} <Intro/></div>
            </div>
        </div>
    );
};

export default Header;