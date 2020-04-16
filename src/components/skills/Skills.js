import React from 'react';
import '../../assets/style/Skills.css';
import html from '../../assets/imgs/html-logo.png';
import css from '../../assets/imgs/css-logo.png';
import sass from '../../assets/imgs/sass-logo.png';
import bootstrap from '../../assets/imgs/bootstrap-logo.png';
import javaScript from '../../assets/imgs/js-logo.png'
import react from '../../assets/imgs/react-logo.png';
import node from '../../assets/imgs/node-logo.png';
import express from '../../assets/imgs/express-logo.png';
import mongoDB from '../../assets/imgs/mongodb-logo.png';
import graphQl from '../../assets/imgs/graphql-logo.png';
import gatsby from '../../assets/imgs/gatsby-logo.png';
import git from '../../assets/imgs/git-logo.png';
import npmLogo from '../../assets/imgs/npm-logo.png';
import github from '../../assets/imgs/github-logo.png';
import adobexd from '../../assets/imgs/adobexd-logo.png';
import krita from '../../assets/imgs/krita-logo.png';








const Skills = () => {
    const frontEndSkills = [html, css, sass, 'Bootstrap', javaScript, react, 
                         'Redux'];
    const backEndSkills = [node, express]

    const formattedFrontEndSkills = frontEndSkills.map((tech, index) => <li key={index}><img src={tech} className="tech-img" alt="tech logos" /></li>)
    const formattedbackEndSkills = backEndSkills.map((tech, index) => <li key={index}><img src={tech} className="tech-img" alt="tech logos" /></li>)

    return (
        <div className="skills-container headline" id="skills">
                <h1>Skills</h1>
                <div className="skills-wrapper">
                    <div className="skills-wrapper1" data-aos="fade-right">
                        <h3 className="skills-headline-top tagline">Front-End skills</h3>

                        <ul className="tech-skills-wrapper">
                        <img src={html} className="tech-img" alt="tech logos" />
                        <img src={css} className="tech-img css" alt="tech logos" />
                        <img src={sass} className="tech-img" alt="tech logos" />
                        <img src={bootstrap} className="tech-img" alt="tech logos" />
                        </ul>

                        <ul className="tech-skills-wrapper">
                        <img src={javaScript} className="tech-img" alt="tech logos" />
                        <img src={react} className="tech-img react" alt="tech logos" />
                       
                        </ul>
                        <h3 className="skills-headline-top tagline">Back-End Skills</h3>

                        <ul className="tech-skills-wrapper">
                        <img src={node} className="tech-img node" alt="tech logos" />
                        <img src={express} className="tech-img express" alt="tech logos" />
                        </ul>
                    </div>
                    <div className="skills-wrapper2" data-aos="fade-left">
                       
                        <h3 className="skills-headline-top skills-headline-bottom-2 tagline">Databases, QL, Packages and Version Control</h3>
                        <ul className="tech-skills-wrapper">
                        <img src={mongoDB} className="tech-img mongo" alt="tech logos" />
                        <img src={graphQl} className="tech-img" alt="tech logos" />
                        <img src={gatsby} className="tech-img" alt="tech logos" />

                        </ul>
                        <ul className="tech-skills-wrapper">
                        <img src={git} className="tech-img" alt="tech logos" />
                        <img src={npmLogo} className="tech-img" alt="tech logos" />
                        <img src={github} className="tech-img" alt="tech logos" />

                        </ul>

                        <ul className="tagline">
                        <h3 className="skills-headline-top">Design Skills</h3>
                        <img src={adobexd} className="tech-img" alt="tech logos" />
                        <img src={krita} className="tech-img" alt="tech logos" />
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Skills;
