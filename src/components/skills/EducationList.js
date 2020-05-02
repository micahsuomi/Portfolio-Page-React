import React from 'react';
import {educationData} from '../../data/educationData';
import EducationItem from './EducationItem';
import '../../assets/style/educationlist.css';

const EducationList = () => {
    let educationList = educationData.map((data, i) => (
        <EducationItem key={i}
        img={data.img}
        name={data.name}
        link={data.link}
        category={data.category}
        description={data.description}
        topics={data.topics}/>
    ));
    return (
        <div className="education-list__container">
            <h1>Education & Courses</h1>
            <div className="education-list__wrapper">
                {educationList}
            </div>
        </div>
    )
}

export default EducationList;

