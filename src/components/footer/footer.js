import React from "react";

import './footer.css'
import arrow from '../../images/arrow.svg'

const Footer = () => {

    const l_links = [
            { name: 'Dribble', link: '#' },
            { name: 'Behance', link: '#' },
            { name: 'CodePen', link: '#' },
            { name: 'GitHub', link: '#' },
            { name: 'Medium', link: '#' }
        ];

    const r_links = [
        { name: 'LinkedIn', link: '#' },
        { name: 'Facebook', link: '#' },
        { name: 'Instagram', link: '#' },
        { name: 'Twitter', link: '#' }
    ];

    const leftLinks = l_links.map((el, index) => {
        return (
            <li key={index}>
                <a href={el.link}>
                    {el.name}
                </a>
            </li>)
    });

    const rightLinks = r_links.map((el, index) => {
        return (
            <li key={index}>
                <a href={el.link}>
                    {el.name}
                </a>
            </li>)
    });


    return (
        <section className="footer">
            <div className="wrapped">
                <h2 className="footer__title">Get in Touch</h2>
                <div className="footer-content">
                    <div className="footer-links">
                        <ul className="footer-links__column">
                            {leftLinks}
                        </ul>

                        <ul className="footer-links__column">
                            {rightLinks}
                        </ul>
                    </div>

                    <div id="contact" className="footer__contacts">
                        <div className="mail">seyrig@mailme.com</div>
                        <div>+ 55 6645 665544</div>
                    </div>
                </div>
                <div className="up-arrow"><a href="#"><img src={arrow} alt="up-arrow"/></a></div>
            </div>
        </section>
    )
};

export default Footer;
