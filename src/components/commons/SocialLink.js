import React from 'react';


const SocialLink = ({name, link, icon}) => {
    return (
    <li className="social-link">
        <a href={link} aria-label={name}>
            <i className={icon} title={name}>
                <h1 className="sr-only">{name}</h1>
            </i>
        </a></li>
    )

}

export default SocialLink;