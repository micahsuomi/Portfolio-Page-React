import React, { Component } from 'react';
import '../../assets/style/AboutLeft.css';

class AboutLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraph1: "I'm a Full-Stack Development student at Integrify Academy in Helsinki, very close to graduation. I have started coding and studying web development as self-taught. I think for programming as an art. Nothing can be mastered without constant practice, repetition, self-discipline and continuous learning.",
            paragraph2: "I focus on responsive and user-friendly UI, functionality, data manipulation. My stack of choice is currently the MERN stack, but I am also studying the JAMStack. I love working especially with React and JavaScript and practicing coding challenges. When I'm not coding, I'm into UI/UX Design, painting, digital illustrations and photography."
        }
    }
    render() {
        return (
                <div>
                    <div className="about-text" data-aos="fade-left">
                        <p className="about-text__paragraph">{this.state.paragraph1}</p>
                        <p className="about-text__paragraph">{this.state.paragraph2}</p>
                    </div>
                </div>
                
        )
    }
}

export default AboutLeft;
