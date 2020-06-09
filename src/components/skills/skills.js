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
                        <img src={photo} alt="profile"/>
                    </div>

                    <div className="skills-desc">
                        <div className="tools_titles">
                            <p className="skills__profile">Profile</p>
                            <p className="tools_title">UX Research</p>
                            <p className="tools_title">Tools</p>
                            <p className="tools_title">UI Design</p>
                            <p className="tools_title">Tools</p>
                            <p className="tools_title">Front-end Dev</p>
                            <p className="tools_title">Tools</p>
                        </div>

                        <div className="tools-value">
                            <p className="tools skills__profile">UI / UX Engineer, Front-end Developer</p>
                            <div className="progress">
                                <div className="progress__value" style={{width: '65%'}} />
                            </div>
                            <p className="tools">Paper, Pen, Balsamiq</p>
                            <div className="progress">
                                <div className="progress__value" style={{width: '79%'}} />
                            </div>
                            <p className="tools">Adobe PS, AI, XD, Figma, InVision</p>
                            <div className="progress">
                                <div className="progress__value" style={{width: '86%'}} />
                            </div>
                            <p className="tools">HTML, CSS, JS, Bootstrap, React</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;
