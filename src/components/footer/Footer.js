import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class="dark-footer">
            <div class="footer-grid">
                <div class="nested-footer">
                    <div><h4 class="footer-name">Michele Zucca</h4></div>
                    <div class="social-footer">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/michele-zucca/"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/micahsuomi"><i class="fab fa-github"></i></a></li>
                            <li><a href="https://www.facebook.com/michele.zucca.18"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/mikibrightcrypto/?hl=en"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
