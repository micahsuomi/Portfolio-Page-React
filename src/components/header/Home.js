import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/style/Home.css';


const Home = () => {
    
        return (
            <div>
                <div className="frontpage-container" data-aos="fade-right">
                <figure class="front-gallery-image image-1" data-aos="flip-right"></figure>
              <figure class="front-gallery-image image-2" data-aos="flip-up"></figure>
              <figure class="front-gallery-image image-3" data-aos="flip-down"></figure>
              <figure class="front-gallery-image image-4" data-aos="flip-left"></figure>
              <figure class="front-gallery-image image-5" data-aos="flip-right"></figure>
                <div className="front-wrapper" data-aos="flip-up">
                    <div className="title-container" data-aos="flip-up">
                    <h1 className="tagline title">Moi, I'm Michele Zucca</h1>
                    <h2>Full-Stack Developer</h2>
                    <div className="view-work__link__container">
                        <button className="view-portfolio__link grow">
                        <NavLink to ="/portfolio" className="portfolio-link">
                            View My Work
                        </NavLink>
                        </button>
                    </div>
                    </div>
                    </div>
                    <figure class="front-gallery-image image-6" data-aos="flip-down"></figure>
                    {/* <figure class="front-gallery-image image-7" data-aos="flip-up"></figure> */}
                    <figure class="front-gallery-image image-8" data-aos="flip-right"></figure>
                    <figure class="front-gallery-image image-9" data-aos="flip-left"></figure>
                
            </div>
           
        </div>
        )
    }


export default Home;
