import React, { Component } from 'react';
import '../../assets/style/AboutLeft.css';

class AboutLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraph1: "I'm a Web Development student at Integrify Academy in Helsinki, close to graduation. I have started coding and studying web development as self-taught. I think of programming as an art. Nothing can be mastered without constant practice, repetition, self-discipline, and continuous learning.",
            paragraph2: "I focus on responsive and user-friendly UI, functionality, and data manipulation. My stacks of choice are currently the JAMStack and the MERN stack. I\'m more front-end oriented and I love working with React and solving JavaScript coding challenges. When I'm not coding, I'm into UI/UX Design, painting, digital illustrations and photography."
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
