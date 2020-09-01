import React from 'react';
import '../../assets/style/viewitem.css';
import { NavLink } from 'react-router-dom';

const ViewItem = (props) => {
    let {id, portfolio} = props;
    const slider = {
        index: '',
        prev: '',
        next: ''
    } 
    const filteredPortfolioItem = portfolio.find((item, index) => {
        slider.index = index
        slider.prev = index === 0 ? '' : portfolio[index - 1].id
        slider.next = index === portfolio.length -1 ? '' : portfolio[index +1].id
        return item.id === id
    });
    let formattedImages = filteredPortfolioItem.techs.map((tech, i) => <li key={i} className="tech-image__container"><img src={tech} alt="tech used pic" className="tech-img"/></li>)
    
    return (
        <div className="view-item__container">
             <div>
                {
                        slider.prev !== '' ?

                        <NavLink to ={slider.prev}><i className="fas fa-chevron-left fa-2x slider-arrow__left grow" aria-label="arrow link to previous project"></i></NavLink>

                        : ''

                    }
                 </div>
            <div className="view-item">
          <div className="view-item__header__nav">
              <NavLink to ="/portfolio" className="back-to-portfolio__link grow">
              <i className="far fa-arrow-alt-circle-left"></i>
                   <span className="back-to-porfolio">Back to Portfolio</span>
                  </NavLink>
                  </div>

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
            <div>
            {
                    slider.next !== '' ?

                    <NavLink to ={slider.next}><i className="fas fa-chevron-right fa-2x slider-arrow__right grow" aria-label="arrow link to next project"></i></NavLink> 

                    : ''

                }
                </div>

        </div>
    )
}

export default ViewItem;
