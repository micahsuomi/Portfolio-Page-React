import React from 'react';
import AboutIcon from './AboutIcon';
import '../../assets/style/AboutIconsList.css';
import { aboutIconsData } from '../../data/aboutIconsData';

const AboutIconsList = () => {
    const aboutIconsListGroup = aboutIconsData.map((item) => {
        return <AboutIcon 
        key={item.id}
        icon={item.icon}
        title={item.title}
        description={item.description} />
    })
    return (

            <div className="about-container2">
                <div className="about-wrapper2">
                        {aboutIconsListGroup}      
                </div>
            </div>
    )
}

export default AboutIconsList;
