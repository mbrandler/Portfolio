import React from "react";

import './skills.css'
import photo from '../../images/profile-picture.jpg';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="wrapped">
                <h2 className="skills__title">Skills</h2>
                <div className="skills-content">
                    <div className="picture">
                        <img src={photo} alt="profile-picture"/>
                    </div>
                    <div className="skills-desc">
                        <div className="skills-desc__tools">
                            <h4>Profile</h4>
                            <span className="tools">UI / UX Engineer, Front-end Developer</span>
                        </div>
                        <div className="skills-desc__tools">
                            <h4>UX Research</h4>
                            <div className="progress">
                                <div className="progress__value"style={{width: '70%'}}></div>
                            </div>
                        </div>
                        <div className="skills-desc__tools">
                            <h4>Tools</h4>
                            <span className="tools">Paper, Pen, Balsamiq</span>
                        </div>
                        <div className="skills-desc__tools">
                            <h4>UI Design</h4>
                            <div className="progress">
                                <div className="progress__value" style={{width: '80%'}}></div>
                            </div>
                        </div>
                        <div className="skills-desc__tools">
                            <h4>Tools</h4>
                            <span className="tools">Adobe PS, AI, XD, Figma, InVision</span>
                        </div>
                        <div className="skills-desc__tools">
                            <h4>Front-end Dev</h4>
                            <div className="progress">
                                <div className="progress__value" style={{width: '90%'}}></div>
                            </div>
                        </div>
                        <div className="skills-desc__tools">
                            <h4>Tools</h4>
                            <span className="tools">HTML, CSS, JS, Bootstrap, React</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;
