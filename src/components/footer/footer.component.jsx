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
                    <img className="logo" src={logo} alt="logo" />
                    <div className="social_media">
                        <a href="www.facebook.com/loopstudios"><img src={facebook} alt="facebook" /></a>
                        <a href="wwww.twitter.com/loopstudios"><img src={twitter} alt="twitter" /></a>
                        <a href="wwww.pinterest.com/loopstudios"><img src={pinterest} alt="pinterest" /></a>
                        <a href="www.instagram.com/loopstudios"><img src={instagram} alt="instagram" /></a>
                    </div>
                </div>
                <div className="footer_row2">
                    <ul className="footer_nav-menu"> 
                        <li><a href="/about">About</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                    <p>© 2021 Loopstudios. All rights reserverd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;