import './creations.styles.css';
import React from 'react';
import DeepEarth from '../../images/desktop/image-deep-earth.jpg';
import NightArcade from '../../images/desktop/image-night-arcade.jpg';
import SoccerTeam from '../../images/desktop/image-soccer-team.jpg';
import TheGrid from '../../images/desktop/image-grid.jpg';
import FromUpAbove from '../../images/desktop/image-from-above.jpg';
import PocketBorealis from '../../images/desktop/image-pocket-borealis.jpg';
import Curiosity from '../../images/desktop/image-curiosity.jpg';
import Fisheye from '../../images/desktop/image-fisheye.jpg';

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
                        <div className="card">
                            <img src={DeepEarth} />
                            <p>Deep<br /> Earth</p>
                        </div>
                        <div className="card">
                            <img src={NightArcade} />
                            <p>Night<br /> Arcade</p>
                        </div>
                        <div className="card">
                            <img src={SoccerTeam} />
                            <p>Soccer<br /> Team VR</p>
                        </div>
                        <div className="card">
                            <img src={TheGrid} />
                            <p>The<br /> Grid</p>
                        </div>
                    </div>

                    <div className="card_row">
                    <div className="card">
                            <img src={FromUpAbove} />
                            <p>From Up<br /> Above VR</p>
                        </div>
                        <div className="card">
                            <img src={PocketBorealis} />
                            <p>Pocket<br /> Borealis</p>
                        </div>
                        <div className="card">
                            <img src={Curiosity} />
                            <p>The<br /> Curiosity</p>
                        </div>
                        <div className="card">
                            <img src={Fisheye} />
                            <p>Make It<br /> Fisheye</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creations;