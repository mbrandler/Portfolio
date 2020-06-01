import React from "react";

import './top-section.css'
import Header from "../header";

const TopSection = () => {
    return (
        <section className="top-section">
            <div className="wrapped">
                <Header />
                <h1 className="top-section__title">Hi, It’s Théophile Seyrig</h1>
                <p className="top-section__text">Designer from Porto, Portugal</p>
                <p><a href="#">Latest works</a></p>
            </div>
        </section>
    )
};

export default TopSection;
