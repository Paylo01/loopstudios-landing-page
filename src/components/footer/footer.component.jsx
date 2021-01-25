import './footer.styles.css';
import React from 'react';
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_row1">
                    <img className="logo" src={logo} />
                    <div className="social_media">
                        <a href="#"><img src={facebook} /></a>
                        <a href="#"><img src={twitter} /></a>
                        <a href="#"><img src={pinterest} /></a>
                        <a href="#"><img src={instagram} /></a>
                    </div>
                </div>
                <div className="footer_row2">
                    <ul className="footer_nav-menu"> 
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <p>© 2021 Loopstudios. All rights reserverd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;