import React from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';
import AboutIconList from './AboutIconsList';
import './About.css';

const About = (props) => {
    return (

        <div className="about-container headline" id="about">
            <div className="about-wrapper">
                <AboutLeft />
                <AboutRight />
            </div>
                <AboutIconList />

        </div>

    )
}

export default About;
