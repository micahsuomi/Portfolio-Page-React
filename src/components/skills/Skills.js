import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div class="skills-container headline" id="skills">
                <h1>Skills</h1>
                <div class="skills-wrapper">
                    <div class="skills-wrapper1" data-aos="fade-right">
                        <h3 class="skills-headline-top tagline">Coding skills</h3>
                        <ul class="tagline">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript (ES5, ES6)</li>
                            <li>Python</li>
                            <li>Sass</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                    <div class="skills-wrapper2" data-aos="fade-left">
                        <h3 class="skills-headline-top tagline">Design Skills</h3>
                        <ul class="tagline">
                            <li class="test">Adobe XD</li>
                            <li>Photoshop</li>
                            <li>Krita</li>
                        </ul>
                        <h3 class="skills-headline-bottom skills-headline-bottom-2 tagline">Proficient With</h3>
                        <ul class="tagline">
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
