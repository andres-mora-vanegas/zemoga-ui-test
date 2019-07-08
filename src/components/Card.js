import React from 'react';

import like from '../assets/img/like.svg';

function Card() {
    return (
        <div className="app-card">
            <div className="name">
                <div className="vote">
                    <a href="#" className="like">
                        <img src={like} />
                    </a>
                </div>
                <div className="label">
                    <h2>Kaney West</h2>
                </div>
            </div>
            <div className="caption">
                <div className="date">
                    1 Month ago in Entertaiment
                </div>
                <div className="detail">
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eius temporibus delectus
                        </p>
                    <a href="#" className="like">
                        <img src={like} />
                    </a>
                    <a href="#" className="dislike">
                        <img src={like} />
                    </a>
                    <a href="#" className="vote-btn">Vote now</a>
                </div>

            </div>
            <div className="votes"></div>
            <div className="percent"></div>
        </div>
    )
}

export default Card;