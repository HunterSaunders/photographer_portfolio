import React from 'react';
import './Home.scss';

import HomeImage from '../../component/images/homeImage.jpg';

const Home = () => {

    return (
        <div className = 'home-page-wrapper'>

            <div className = 'home-page-container'>

                <div className = 'home-page-text'>
                    <h1 className = 'home-page-name'>ALANA RICCI</h1>
                    <h2 className = 'home-page-subtitle'>Passion. Culture. People.</h2>

                </div>

                <img src = {HomeImage} alt = 'Home' id = 'home-image'/>
            </div>

            
        </div>
    )
}

export default Home
