import React, { Component } from 'react';
import './AboutLeft.css';

class AboutLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "About Me",
            paragraph1: "I'm a self-thought Front-End developer currently studying Full-Stack Development at Integrify Academy in Helsinki.",
            paragraph2: "I focus on responsive and user-friendly design, UI and prototyping. My stack of choice is currently React. When I'm not coding, I'm into UI/UX Design, painting, digital illustrations and photography."
        }
    }
    render() {
        return (
                <div>
                    <div className="about-text" data-aos="fade-left">
                        <h2 className="about-text__header">{this.state.header}</h2>
                        <p className="about-text__paragraph">{this.state.paragraph1}</p>
                        <p className="about-text__paragraph">{this.state.paragraph2}</p>
                    </div>
                </div>
                
        )
    }
}

export default AboutLeft;
