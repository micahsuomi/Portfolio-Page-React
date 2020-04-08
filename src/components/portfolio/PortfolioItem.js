import React from 'react';
import '../../assets/style/PortfolioItem.css';


const PortfolioItem = ({websiteImage, websiteName, type, urlWebsite, github}) => {

    return (
        
        <div className="website-card-container website-hide website grow tagline display" id="evenflow" data-aos="fade-left">
                <img src={websiteImage} alt="" />
                    <div className="website_show websiteblur">
                        <div className="website_show-display">
                            <h4 className="websitename">{websiteName}</h4> 
                                <h4 className="websitename website-type">{type}</h4>
                                <div className="button-container">
                                <a href={`${urlWebsite}`} target="blank" className="link-website"><button className="portfolio-btn grow">View Project</button></a>
                                <a href={`${github}`} target="blank" className="link-github"><button className="portfolio-btn grow">View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;
