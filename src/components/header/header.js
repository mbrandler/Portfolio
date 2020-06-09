import React, {useState} from "react";

import './header.css'
import menu from '../../images/menu.svg';

const Header = () => {

    const [active, setState] = useState('false');
    const nav = document.querySelector('.nav');

    try {
        nav.classList.toggle('active', active === 'true')
    } catch (e) {
    }

    const links = [
        { link: '#', name: 'Home' },
        { link: '#about', name: 'About' },
        { link: '#skills', name: 'Skills' },
        { link: '#portfolio', name: 'Portfolio' },
        { link: '#contact', name: 'Contact' }
    ];

    const closeNav = () => {
        setState('false')
    };

    const navLinks = links.map((el, index) => {
        return (
            <li className="nav-link"
            key={index}>
                <a href={el.link}
                   onClick={closeNav}>
                    {el.name}
                </a>
            </li>
        )
    });

    return (
        <section className="header">

            <button className="menu"
                    onClick={() => setState('true')}>
                <img src={menu} alt="menu"/>
            </button>

            <a href="#"><h2>Portfolio</h2></a>

            <div className="nav">

                <div className="nav-close"
                     onClick={() => setState('false')}
                >
                    <span className="close-line"/>
                    <span className="close-line"/>
                </div>

                <ul className="header__nav">
                    {navLinks}
                </ul>
            </div>

        </section>
    )
};

export default Header;
