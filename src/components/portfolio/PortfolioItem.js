import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/style/PortfolioItem.css';


const PortfolioItem = (props) => {
    let {id, img, name, type} = props.portfolioItem;
    return (
        
        <div className="website-card-container website-hide website grow tagline display" id="evenflow" data-aos="fade-left">
                <img src={img} alt="" />
                    <div className="website_show websiteblur">
                        <div className="website_show-display">
                            <h4 className="websitename">{name}</h4> 
                                <h4 className="websitename website-type">{type}</h4>
                                <div className="button-container">
                                <NavLink to={`/viewitem/${id}`} className="portfolio-btn-small grow">View </NavLink>
                               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem;
