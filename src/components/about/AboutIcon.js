import React from 'react';
import './AboutIcon.css';

const AboutIcon = (props) => {
    
    return (
        <div className="about-wrapper2-nested" data-aos="flip-right">
            <div className="icon-card">
                <div className="view-icon"><i className={`fas fa ${props.icon}`}></i> </div>
            <div>
                <h4 className="punchline">{props.title}</h4>
                    <p className="punchline">{props.description}</p>
                </div>
            </div>
            </div>

    )
}

export default AboutIcon;
