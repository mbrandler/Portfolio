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
                    <li><a href="#" onClick={() => setState('false')}>Home</a></li>
                    <li><a href="#about " onClick={() => setState('false')}>About</a></li>
                    <li><a href="#skills" onClick={() => setState('false')}>Skills</a></li>
                    <li><a href="#portfolio" onClick={() => setState('false')}>Portfolio</a></li>
                    <li><a href="#contact" onClick={() => setState('false')}>Contact</a></li>
                </ul>
            </div>

        </section>
    )
};

export default Header;
