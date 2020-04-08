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
            isReactShowing: true,
            isJavaScriptShowing: false,
            isWebsiteShowing: false,

           
            
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
                                id="react-btn" 
                                onClick={this.showReact}
                                style={this.state.isReactShowing ? styles.style1 : styles.style2}>React</button>

                            <button className="btn-portfolio-type" 
                                id="javascript-btn" 
                                onClick={this.showJavaScript}
                                style={this.state.isJavaScriptShowing ? styles.style1 : styles.style2}>JavaScript</button>

                          
                                <button className="btn-portfolio-type" 
                                id="html-btn" 
                                onClick={this.showWebsite} 
                                style={this.state.isWebsiteShowing ? styles.style1 : styles.style2}>HTML, CSS, JavaScript</button>


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

const styles = {
    style1: {backgroundColor: '#3d4554'},
    style2: {backgroundColor: '#8293b3'}
}

console.log(styles.style1)
export default PortfolioList;
