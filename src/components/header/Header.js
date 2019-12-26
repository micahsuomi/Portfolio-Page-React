import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="frontpage-container" data-aos="fade-down">
                <div className="front-wrapper">
                    <h1 className="tagline">Moi, I'm <span className="name">Michele Zucca</span></h1>
                    <h2>Front-End Web Developer</h2>
                    <ul className="social punchline2">
                        <li><a href="https://www.linkedin.com/in/michele-zucca/"><i className="fab fa-linkedin fa-3x grow"></i></a></li>
                        <li><a href="https://github.com/micahsuomi"><i className="fab fa-github fa-3x grow"></i></a></li>
                        <li><a href="https://www.facebook.com/michele.zucca.18"><i className="fab fa-facebook fa-3x grow"></i></a></li>
                        <li><a href="https://www.instagram.com/mikibrightcrypto/?hl=en"><i className="fab fa-instagram fa-3x grow"></i></a></li>
                    </ul> <a href="#about"><i className="fas fa-arrow-circle-down fa-3x hide-mobile punchline3"></i></a> </div>
            </div>
                
        </div>
        )
    }
}

export default Header
