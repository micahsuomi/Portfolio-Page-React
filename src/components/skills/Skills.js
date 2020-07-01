import React from 'react';
import '../../assets/style/Skills.css';
import html from '../../assets/imgs/html-logo.png';
import css from '../../assets/imgs/css-logo.png';
import sass from '../../assets/imgs/sass-logo.png';
import bootstrap from '../../assets/imgs/bootstrap-logo.png';
import semanticUi from '../../assets/imgs/semantic-ui-logo.png';
import javaScript from '../../assets/imgs/js-logo.png'
import react from '../../assets/imgs/react-logo.png';
import node from '../../assets/imgs/node-logo.png';
import express from '../../assets/imgs/express-logo.png';
import mongoDB from '../../assets/imgs/mongodb-logo.png';
import graphQl from '../../assets/imgs/graphql-logo.png';
import gatsby from '../../assets/imgs/gatsby-logo.png';
import git from '../../assets/imgs/git-logo.png';
import contentful from '../../assets/imgs/contentful-logo.png';
import npmLogo from '../../assets/imgs/npm-logo.png';
import github from '../../assets/imgs/github-logo.png';
import heroku from '../../assets/imgs/heroku-logo.png';
import netlify from '../../assets/imgs/netlify-logo.png';
import adobexd from '../../assets/imgs/adobexd-logo.png';
import krita from '../../assets/imgs/krita-logo.png';
import AOS from 'aos';



const Skills = () => {
    AOS.init({
        disable: function() {
          let maxWidth = 1868;
          return window.innerWidth < maxWidth;
        }
        
        })
    
    return (
        <div className="skills-container headline" id="skills">
                <h1>Skills</h1>
                <div className="skills-wrapper">
                    <div className="skills-wrapper1" data-aos="fade-right">
                        <h3 className="skills-headline-top tagline">Front-End skills</h3>

                        <ul className="tech-skills-wrapper">
                        <li><img src={html} className="tech-img" alt="tech logos" />HTML</li>
                        <li><img src={css} className="tech-img css" alt="tech logos" />CSS</li>
                        <li><img src={sass} className="tech-img" alt="tech logos" />Sass</li>
                        <li><img src={bootstrap} className="tech-img" alt="tech logos" />Bootstrap</li>
                        <li><img src={semanticUi} className="tech-img" alt="tech logos" />Semantic UI</li>

                        </ul>

                        <ul className="tech-skills-wrapper">
                        
                        <li><img src={javaScript} className="tech-img" alt="tech logos" />JavaScript</li>
                        <li><img src={react} className="tech-img react" alt="tech logos" />React</li>
                        <li><img src={gatsby} className="tech-img" alt="tech logos" />Gatsby JS</li>                       
                        </ul>
                        <h3 className="skills-headline-top tagline">Back-End Skills</h3>

                        <ul className="tech-skills-wrapper">
                        <li><img src={node} className="tech-img node" alt="tech logos" />Node</li>
                        <li><img src={express} className="tech-img express" alt="tech logos" />Express</li>
                        </ul>
                    </div>
                    <div className="skills-wrapper2" data-aos="fade-left">
                       
                        <h3 className="skills-headline-top skills-headline-bottom-2 tagline">Databases</h3>
                        <ul className="tech-skills-wrapper">
                        <li><img src={mongoDB} className="tech-img mongo" alt="tech logos" />Mongo DB</li>
                        <li><img src={graphQl} className="tech-img" alt="tech logos" />GraphQL</li>

                        </ul>
                        <h3 className="skills-headline-top skills-headline-bottom-2 tagline">Other</h3>

                        <ul className="tech-skills-wrapper">
                        <li><img src={git} className="tech-img" alt="tech logos" />Git</li>
                        <li><img src={npmLogo} className="tech-img" alt="tech logos" />NPM</li>
                        <li><img src={github} className="tech-img" alt="tech logos" />GitHub</li>
                        <li><img src={contentful} className="tech-img" alt="tech logos" />Contentful</li>
                        <li><img src={netlify} className="tech-img" alt="tech logos" />Netlify</li>
                        <li><img src={heroku} className="tech-img" alt="tech logos" />Heroku</li>


                        </ul>

                        <h3 className="skills-headline-top">Design Skills</h3>
                        <ul className="tech-skills-wrapper">
                        <li><img src={adobexd} className="tech-img" alt="tech logos" />Adobe XD</li>
                        <li><img src={krita} className="tech-img" alt="tech logos" />Krita</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Skills;
