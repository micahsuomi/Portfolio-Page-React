import React from 'react';
import '../../assets/style/educationitem.css';

const EducationItem = (props) => {
    let {img, name, link, category, description, topics} = props;
    return (
        <div className="education-card__container" data-aos="flip-down">
            <div className="education-card__container__left">
            <img src={img} alt="course pic" className="education-card__img"/>
            </div>
            <div className="education-card__container__right">
            <h3 className="education-card__name"><a href={link} target="blank">{name}</a></h3>
            <h4 className="education-card__category">{category}</h4>
            <p className="education-card__description">{description}</p>
            <p className="education-card__category">Topics Learned: </p>
            <ul className="education-card__topic__list">{topics.map((topic, i) => <li key={i} className="education-card__topic__item">{topic}</li> )}</ul>
            </div>
        </div>
    )
}

export default EducationItem;
