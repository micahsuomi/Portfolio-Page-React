import React from 'react';
import '../../assets/style/Footer.css';
import footerData from './footerData';
import SocialLink from '../commons/SocialLink';

const Footer = () => {

    const formattedData = footerData.map((item, index) => (

        <SocialLink 
        key={index}
        link={item.link} 
        icon={item.icon} />
    ))

    return (
        <div className="dark-footer">
            <div className="footer-grid">
                <div className="nested-footer">
                    <div><h4 className="footer-name">Michele Zucca</h4></div>
                    <div className="social-footer">
                        <ul>
                            {formattedData}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
