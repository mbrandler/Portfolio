import React, { useEffect } from "react";

import './app.css'
import TopSection from "../top-section";
import About from "../about";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Footer from "../footer";

const App = () => {

    useEffect(() => {
        window.scrollTo(0,0);
        window.history.pushState( '', 'Portfolio', '/');

    }, []);

    return (
        <div className="app">
            <TopSection />
            <About />
            <Skills />
            <Portfolio />
            <Footer />
        </div>
    )
};

export default App;
