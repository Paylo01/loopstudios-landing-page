import './hero.styles.css';
import React, {useState} from 'react';
import logo from '../../images/logo.svg';

const Hero = () => {
    const [close, setClose] = useState(false);

    return (
        <div className="hero">  
            <div className="hero_img"></div>
            <div className="header_container">
                <img className="logo" src={logo}/>
                <ul className="nav_menu desktop"> 
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <div className={close ? "hamburger_menu close" : "hamburger_menu" } onClick={() => setClose(!close)}></div>
                <ul className={close ? "nav_menu mobile" : "hidden" } onClick={() => setClose(!close)}> 
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className="hero_container">
                <div className="borders">
                    <h2 className="hero_title">Immersive<br /> experiences <br /> that <span className="break">deliver</span></h2>
                </div>
            </div>
        </div>
    )
}

export default Hero;