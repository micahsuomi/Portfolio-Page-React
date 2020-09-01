import React from 'react';
import '../../assets/style/Footer.css';
import {socialData} from '../../data/socialData';
import SocialLink from '../commons/SocialLink';

const Footer = () => {

    const formattedData = socialData.map((item, index) => (
        
        <SocialLink 
        key={index}
        name={item.name}
        link={item.link} 
        icon={item.icon} />
    ))

    return (
        <div className="dark-footer">
            <div className="footer-grid">
                    <div><h4 className="footer-name">©Michele Zucca Web Developer</h4></div>
                    <div>
                        <ul className="social-footer">
                            {formattedData}
                        </ul>
                    </div>
                </div>
            </div>

    )
}

export default Footer;
