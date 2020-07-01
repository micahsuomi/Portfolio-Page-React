import React, { Component } from 'react';
import '../../assets/style/Portfolio.css';
import PortfolioItem from './PortfolioItem';
import {portfolioData} from '../../data/portfolioData';

class PortfolioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: portfolioData,
           
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

                <div className="portfolio-container headline" id="portfolio">
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


export default PortfolioList;
