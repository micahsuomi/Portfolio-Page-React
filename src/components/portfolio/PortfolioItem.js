import React from 'react';
import './PortfolioItem.css';



const PortfolioItem = (props) => {

    return (
        
        <div className="website-card-container website-hide website grow tagline display" id="evenflow" data-aos="fade-left">
                <img src={props.websiteImage} alt="" />
                    <div className="website_show websiteblur">
                        <div className="website_show-display">
                        {props.key} 
                            <h4 className="websitename">{props.websiteName}</h4> 
                                <h4 className="websitename website-type">{props.type}</h4>
                                <div className="button-container">
                            <button className="portfolio-btn grow"><a href={`${props.urlWebsite}`} target="blank">View Project</a></button>
                        <button className="portfolio-btn grow"><a href={`${props.github}`} target="blank">View on Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;
