import './about-us.styles.css';
import React from 'react';
import InteractiveImage from '../../images/desktop/image-interactive.jpg';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us_container">
                <div className="img_container">
                    <img src={InteractiveImage} />
                </div>
                <div className="text_container">
                    <h1>The leader in<br /> interactive VR</h1>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the bset companies around the
globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;