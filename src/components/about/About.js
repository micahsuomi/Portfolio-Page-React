import React from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';
import AboutIconList from './AboutIconsList';
import '../../assets/style/About.css';

const About = () => {
    return (

        <div className="about-container headline" id="about">
            <h1 className="about-header">About Me</h1>
            <div className="about-wrapper">
                <AboutLeft />
                <AboutRight />
            </div>
                <AboutIconList />

        </div>

    )
}

export default About;
