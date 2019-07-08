import React from 'react';
import pope2 from '../assets/img/pope2.png';
import '../App.scss';
import Header from './Header';

function Hero() {
    return (
        <div className="background-hero wrapper">

            <div className="one">
                <Header />
            </div>
            <div className="two">

            </div>
            <footer className="four">
                <div>
                    <div>CLOSING IN</div>
                </div>
                <div>
                    <div><span>22</span> Days</div>
                </div>
            </footer>


        </div>
    )
}

export default Hero;