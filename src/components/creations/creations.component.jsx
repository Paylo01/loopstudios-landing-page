import './creations.styles.css';
import React from 'react';

const Creations = () => {
    return (
        <div className="creations">
            <div className="creations_container">
                <div className="title_container">
                    <h1>Our Creations</h1>
                    <a className="cta" href="#">See All</a>
                </div>
                <div className="cards">
                    <div className="card_row">
                        <div className="card card_1">
                            <p>Deep<br /> Earth</p>
                            <div className="transparent"></div>
                        </div>
                        <div className="card card_2">
                            <p>Night<br /> Arcade</p>
                            <div className="transparent"></div>
                        </div>
                        <div className="card card_3">
                            <p>Soccer<br /> Team VR</p>
                            <div className="transparent"></div>
                        </div>
                        <div className="card card_4">
                            <p>The<br /> Grid</p>
                            <div className="transparent"></div>
                        </div>
                    </div>

                    <div className="card_row">
                    <div className="card card_5">
                            <p>From Up<br /> Above VR</p>
                            <div className="transparent"></div>
                        </div>
                        <div className="card card_6">
                            <p>Pocket<br /> Borealis</p>
                            <div className="transparent"></div>
                        </div>
                        <div className="card card_7">
                            <p>The<br /> Curiosity</p>
                            <div className="transparent"></div>
                        </div>
                        <div className="card card_8">
                            <p>Make It<br /> Fisheye</p>
                            <div className="transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creations;