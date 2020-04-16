import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {socialData} from '../../data/socialData';
import SocialLink from '../commons/SocialLink';
import '../../assets/style/Home.css';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Moi, I\'m Michele Zucca',
            subtitle: 'Front-End Developer'
        }
    }

    generateRandomColor() {
        setInterval(() => {
            let randomColor = '#';
            let str = '0123456789abcdef';
            for(let i = 0; i < 6; i++) {
              let index = Math.floor(Math.random() * str.length);
              randomColor += str[index];
        
            }
            return randomColor
        }, 1000);
            
        
       
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.generateRandomColor(),
            1000
        )

    }

    componentWillUnmount() {
        clearInterval(this.timerID);

    }
  

   
    render() {

        return (
            <div>
                <div className="frontpage-container" data-aos="fade-down" style={{backgroundColor: this.generateRandomColor()}}>
                <div className="front-wrapper">
                    <h1 className="tagline title"  style={{color: this.generateRandomColor()}}>{this.state.title}</h1>
                    <h2>{this.state.subtitle}</h2>
                    <div className="view-work__link__container">
                        <button className="view-portfolio__link grow">
                        <NavLink to ="/portfolio" className="portfolio-link">
                            View My Work
                        </NavLink>
                        </button>
                    </div>
                    </div>
            </div>
                
        </div>
        )
    }
}

export default Home;
