import './hero.styles.css';
import React from 'react';
import logo from '../../images/logo.svg';

const Hero = () => {
    return (
        <div className="hero">  
            <div className="header_container">
                <img className="logo" src={logo}/>
                <ul className="nav_menu"> 
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className="hero_container">
                <div className="borders">
                    <h2 className="hero_title">Immersive<br /> experiences <br /> that deliver</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero;