import React from "react";

import './portfolio.css'
import image_1 from '../../images/image_1.jpg';
import image_2 from '../../images/image_2.jpg';
import image_3 from '../../images/image_3.jpg';
import image_4 from '../../images/image_4.jpg';
import arrow from '../../images/arrow.svg';


const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="wrapped">
                <h2 className="portfolio__title"><a href="#">Portfolio</a></h2>
                <h3 className="research">UX Research</h3>
                <div className="portfolio-content">
                    <div className="portfolio-content__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dictum nibh nam odio cursus id. Diam massa semper a tincidunt cursus ultricies lectus eget urna.</p>
                        <div className='arrows'>
                            <div className="left-arrow"><img src={arrow} alt="left-arrow"/></div>
                            <div className="right-arrow"><img src={arrow} alt="right-arrow"/></div>
                        </div>
                    </div>
                    <div className="portfolio-images">
                        <div className="portfolio-images__column-first">
                            <img className="portfolio-images__first" src={image_1} alt="image-1"/>
                            <img src={image_3} alt="image-3"/>
                        </div>
                        <div className="portfolio-images__column-second">
                            <img src={image_2} alt="image-2"/>
                            <img className="portfolio-images__last" src={image_4} alt="image-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;
