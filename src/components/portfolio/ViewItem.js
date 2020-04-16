import React from 'react';
import '../../assets/style/viewitem.css';
import { NavLink } from 'react-router-dom';

const ViewItem = (props) => {
    let {id, portfolio} = props;
    console.log(id, portfolio)
    const filteredPortfolioItem = portfolio.find((item) => item.id === id);
    let formattedImages = filteredPortfolioItem.techs.map((tech, i) => <li key={i}><img src={tech} alt="tech used pic" className="tech-img"/></li>)
    console.log(formattedImages)
    
    return (
        <div className="view-item__container">
            <div className="view-item">
          <div className="view-item__header__nav">
              <NavLink to ="/portfolio" className="back-to-portfolio__link grow">
              <i class="far fa-arrow-alt-circle-left"></i>
                   <span className="back-to-porfolio">Back to Portfolio</span>
                  </NavLink></div>

            <div className="view-item__wrapper">
            
            <div className="view-item__left">
            <img src={filteredPortfolioItem.img} alt="portfolio big display" className="project-img"/>
            </div>
            <div className="view-item__right">
            <h1 className="view-item__title">{filteredPortfolioItem.name}</h1>
            <h2 className="view-item__type">{filteredPortfolioItem.type}</h2>
            <p className="view-item__right__description">{filteredPortfolioItem.description}</p>
            <h3 className="tech-used__header">Tech Used</h3>
                <ul className="tech-used__wrapper">
                    {formattedImages}
                </ul>
                <div className="buttons-wrapper">

                 <a href={`${filteredPortfolioItem.url}`} target="blank" className="link-website"><button className="portfolio-btn grow">View Project</button></a> 
                 <a href={`${filteredPortfolioItem.githubUrl}`} target="blank" className="link-github"><button className="portfolio-btn grow">View on Github</button></a>
            </div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default ViewItem;
