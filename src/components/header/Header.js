import React, { Component } from 'react';
import '../../assets/style/Header.css';
import socialData from '../commons/socialData';
import SocialLink from '../commons/SocialLink';


class Header extends Component {
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


        const formattedData = socialData.map((item, index) => (

            <SocialLink 
            key={index}
            link={item.link} 
            icon={item.icon} />
        ))
        return (
            <div>
                <div className="frontpage-container" data-aos="fade-down" style={{backgroundColor: this.generateRandomColor()}}>
                <div className="front-wrapper">
                    <h1 className="tagline title"  style={{color: this.generateRandomColor()}}>{this.state.title}</h1>
                    <h2>{this.state.subtitle}</h2>
                    <ul className="social punchline2">
                        {formattedData}
                    </ul> <a href="#about"><i className="fas fa-arrow-circle-down fa-3x hide-mobile punchline3"></i></a> </div>
            </div>
                
        </div>
        )
    }
}

export default Header
