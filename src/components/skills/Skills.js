import React from 'react';
import '../../assets/style/Skills.css';

const Skills = () => {
    const techSkills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES5, ES6)', 'React JS', 'Sass', 'Python'];
    const formattedTechSkills = techSkills.map((tech, index) => <li key={index}>{tech}</li>)
    return (
        <div className="skills-container headline" id="skills">
                <h1>Skills</h1>
                <div className="skills-wrapper">
                    <div className="skills-wrapper1" data-aos="fade-right">
                        <h3 className="skills-headline-top tagline">Coding skills</h3>
                        <ul className="tagline">
                            {formattedTechSkills}
                        </ul>
                    </div>
                    <div className="skills-wrapper2" data-aos="fade-left">
                        <h3 className="skills-headline-top tagline">Design Skills</h3>
                        <ul className="tagline">
                            <li className="test">Adobe XD</li>
                            <li>Photoshop</li>
                            <li>Krita</li>
                        </ul>
                        <h3 className="skills-headline-bottom skills-headline-bottom-2 tagline">Proficient With</h3>
                        <ul className="tagline">
                            <li>Graphic Tablets</li>
                            <li>Content Creation</li>
                            <li>Storytelling</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Skills;
