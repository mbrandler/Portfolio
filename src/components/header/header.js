import React from "react";

import './header.css'

const Header = () => {
    return (
        <section className="header">
            <a href="#"><h2>Portfolio</h2></a>
            <ul className="header__nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </section>
    )
};

export default Header;
