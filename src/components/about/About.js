import React from 'react';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';
import AboutIconList from './AboutIconsList';
import AOS from 'aos';

import '../../assets/style/About.css';

const About = () => {
    AOS.init({
        disable: function() {
          let maxWidth = 800;
          return window.innerWidth < maxWidth;
        }
        
        })
    return (

        <div className="about-container" id="about">
            <h1 className="about-header">About Me</h1>
            <div className="about-wrapper"data-aos="fade-left">
                <AboutLeft />
                <AboutRight />
            </div>
                <AboutIconList />

        </div>

    )
}

export default About;
