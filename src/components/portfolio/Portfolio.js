import React, { Component } from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from './PortfolioData';
import portfolioData2 from './PortfolioData2';


class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            isWebsiteShowing: true,
            isReactShowing: false
            
        }

        this.showWebsite = this.showWebsite.bind(this);
        this.showReact = this.showReact.bind(this);
    }


    showWebsite() {
        this.setState({isWebsiteShowing : true, isReactShowing : false})   
    }

    showReact() {
        this.setState({isReactShowing: true, isWebsiteShowing: false})
    }

    render() {

       
    const portfolioWebsites = portfolioData.map((portfolioItem) => {
        return <PortfolioItem 
        key = {portfolioItem.id}
        websiteImage = {portfolioItem.img}
        websiteName = {portfolioItem.name}
        type = {portfolioItem.type}
        urlWebsite={portfolioItem.url}
        github={portfolioItem.githubUrl} />
    })

        const portfolioReact = portfolioData2.map((portfolioItem) => {
            return <PortfolioItem 
            key = {portfolioItem.id}
            websiteImage = {portfolioItem.img}
            websiteName = {portfolioItem.name}
            type = {portfolioItem.type}
            urlWebsite={portfolioItem.url}
            github={portfolioItem.githubUrl} />
        })

        return (

            
                <div className="portfolio-container headline" id="portfolio" data-aos="fade-right">
                    <h2><span className="port-header">Portfo</span>lio Work</h2>
                        <div className="portfolio-type-wrapper">
                            <div className="portfolio-type-btn-container">
                                <button className="btn-portfolio-type" 
                                id="html-btn" 
                                onClick={this.showWebsite} 
                                style={this.state.isWebsiteShowing ? {backgroundColor: "lightslategray"} : {backgroundColor: "lightgrey"}}>HTML, CSS, JavaScript</button>

                                <button className="btn-portfolio-type" 
                                id="react-btn" 
                                onClick={this.showReact}
                                style={this.state.isReactShowing ? {backgroundColor: "lightslategray"} : {backgroundColor: "lightgrey"}}>React</button>

                                <div className="portfolio-wrapper show" id="websites-projects">
                                {this.state.isWebsiteShowing ? portfolioWebsites : null}
                                </div>

                                <div className="portfolio-wrapper" id="websites-projects">
                                {this.state.isReactShowing ? portfolioReact : null}
                                </div>



                            </div>
                        </div>
                    </div>


        )

    }

}



export default Portfolio;
