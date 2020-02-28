import React, { Component } from 'react';
import '../../assets/style/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from './PortfolioData';
import portfolioData2 from './PortfolioData2';
import portfolioData3 from './PortfolioData3';



class PortfolioList extends Component {
    constructor() {
        super();
        this.state = {
            isWebsiteShowing: true,
            isJavaScriptShowing: false,
            isReactShowing: false
            
        }

        this.showWebsite = this.showWebsite.bind(this);
        this.showJavaScript = this.showJavaScript.bind(this);
        this.showReact = this.showReact.bind(this);
    }


    showWebsite() {
        this.setState({isWebsiteShowing : true, isJavaScriptShowing: false, isReactShowing : false})   
    }

    showJavaScript() {
        this.setState({isJavaScriptShowing: true, isWebsiteShowing: false, isReactShowing: false})
    }
    
    showReact() {
        this.setState({isReactShowing: true, isWebsiteShowing: false, isJavaScriptShowing: false})
    }

    render() {

       
    const portfolioWebsites = portfolioData.map((portfolioItem, index) => {
        return <PortfolioItem 
        key = {index}
        websiteImage = {portfolioItem.img}
        websiteName = {portfolioItem.name}
        type = {portfolioItem.type}
        urlWebsite={portfolioItem.url}
        github={portfolioItem.githubUrl} />
    })

    const portfolioJavaScript = portfolioData2.map((portfolioItem) => {
        return <PortfolioItem 
        key = {portfolioItem.id}
        websiteImage = {portfolioItem.img}
        websiteName = {portfolioItem.name}
        type = {portfolioItem.type}
        urlWebsite={portfolioItem.url}
        github={portfolioItem.githubUrl} />
    })

        const portfolioReact = portfolioData3.map((portfolioItem) => {
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
                                id="javascript-btn" 
                                onClick={this.showJavaScript}
                                style={this.state.isJavaScriptShowing ? {backgroundColor: "lightslategray"} : {backgroundColor: "lightgrey"}}>JavaScript</button>

                                <button className="btn-portfolio-type" 
                                id="react-btn" 
                                onClick={this.showReact}
                                style={this.state.isReactShowing ? {backgroundColor: "lightslategray"} : {backgroundColor: "lightgrey"}}>React</button>

                                <div className="portfolio-wrapper show" id="websites-projects">
                                {this.state.isWebsiteShowing ? portfolioWebsites : null}
                                </div>

                                
                                <div className="portfolio-wrapper show" id="websites-projects">
                                {this.state.isJavaScriptShowing ? portfolioJavaScript : null}
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



export default PortfolioList;
