import React, { Component } from 'react';
import '../../assets/style/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import {portfolioData} from '../../data/portfolioData';

class PortfolioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: portfolioData,
            isReactShowing: true,
            isJavaScriptShowing: false,
            isWebsiteShowing: false,

           
            
        }

     
    }


    render() {

    let { portfolio } = this.state

    const portfolioList = portfolio.map((portfolioItem) => {
        return <PortfolioItem 
        key = {portfolioItem.id}
        portfolioItem={portfolioItem} />
    })
       

        return (

            
                <div className="portfolio-container headline" id="portfolio" data-aos="fade-right">
                    <h2><span className="port-header">Portfo</span>lio Work</h2>
                        <div className="portfolio-type-wrapper">
                            <div className="portfolio-wrapper show" id="websites-projects">
                                {portfolioList}
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
