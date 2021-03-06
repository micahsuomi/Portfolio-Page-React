import React from 'react';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import '../../assets/style/Home.css';

const Home = () => {
    
AOS.init({
    offset: 200,
    duration: 800,
  
  });
  
  
    AOS.init({
        disable: function() {
          let maxWidth = 700;
          return window.innerWidth < maxWidth;
        }
        
        })
        return (
            <div>
                <div className="frontpage-container" data-aos="fade-right">
                <figure className="front-gallery-image image-1" data-aos="fade-right"></figure>
              <figure className="front-gallery-image image-2" data-aos="fade-up"></figure>
              <figure className="front-gallery-image image-3" data-aos="fade-down"></figure>
              <figure className="front-gallery-image image-4" data-aos="fade-left"></figure>
              <figure className="front-gallery-image image-5" data-aos="fade-right"></figure>
                <div className="front-wrapper" data-aos="fade-up">
                    <div className="title-container" data-aos="flip-up">
                    <h1 className="tagline title">Moi, I'm Michele Zucca</h1>
                    <h2>Web Developer</h2>
                    <div className="view-work__link__container">
                    <NavLink to ="/portfolio" className="portfolio-link">
                        <button className="view-portfolio__link grow">
                            View My Work
                        </button>
                        </NavLink>

                    </div>
                    </div>
                    </div>
                    <figure className="front-gallery-image image-6" data-aos="flip-down"></figure>
                    {/* <figure class="front-gallery-image image-7" data-aos="flip-up"></figure> */}
                    <figure className="front-gallery-image image-8" data-aos="flip-right"></figure>
                    <figure className="front-gallery-image image-9" data-aos="flip-left"></figure>
                
            </div>
           
        </div>
        )
    }


export default Home;
