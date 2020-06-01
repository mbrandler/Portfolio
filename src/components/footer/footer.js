import React from "react";

import './footer.css'
import arrow from '../../images/arrow.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="wrapped">
                <h2 className="footer__title">Get in Touch</h2>
                <div className="footer-content">
                    <ul className="footer__links">
                        <li><a href="#">Dribble</a></li>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">CodePen</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Medium</a></li>
                    </ul>

                    <ul className="footer__links">
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
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
