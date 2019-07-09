import React, { useState } from 'react';

import like from '../assets/img/like.svg';

function Card(data) {

    let [count, setCount] = useState(0);
    let [vote, setVote] = useState(0);


    function handleVote(e, user) {
        e.preventDefault();
        let actualData = JSON.parse(localStorage.getItem('actualData'));
        console.log('actualData', actualData);
        const idx = actualData.findIndex(r => r.id == user.id);
        debugger
        if (idx > -1) {
            if (vote == 1) {
                actualData[idx].likes = actualData[idx].likes + 1;
            }
            if (vote == 2) {
                actualData[idx].dislikes = actualData[idx].dislikes + 1
            }
        }
        console.log('actualData', actualData);
        console.log('m', idx);
        console.log('e', e);
        console.log('user', user);

        setTimeout(() => {
            setCount(count = 0);
        }, 3000);
    }

    function assignVote(e) {
        e.event.preventDefault()
        setVote(vote = e.vote);
        console.log('e', e);

    }

    const styl = {
        backgroundImage: `url(../assets/img/${data.props.image}.jpg)`
    }
    return (
        <div className={data.props.image + ' app-card'}>
            <div className="name">
                <div className="vote">
                    <a href="#" className="like">
                        <img src={like} alt="like" />
                    </a>
                </div>
                <div className="label">
                    <h2>{data.props.name}</h2>
                </div>
            </div>
            <div className="caption">
                <div className="date">
                    <span>1 Month ago</span> in {data.props.topic}
                </div>
                <div className="detail">
                    <p>

                        {count === 1 || count === 2 ?
                            <span>Thank you for your voting</span>
                            :
                            <span>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eius temporibus delectus
                        </span>
                        }

                    </p>
                    <a href="#" className={`like ${vote == 1 ? 'border' : ''}`} onClick={(e) => assignVote({ event: e, vote: 1, user: data.props.id })}>
                        <img src={like} />
                    </a>
                    <a href="#" className={`dislike ${vote == 2 ? 'border' : ''}`} onClick={(e) => assignVote({ event: e, vote: 2, user: data.props.id })}>
                        <img src={like} />
                    </a>
                    <a href="#" className="vote-btn" onClick={(e) => handleVote(e, data.props)}>Vote now</a>
                </div>

            </div>
            <div className="percent">
                <div className="rate-like" style={{ width: data.props.likes + '%' }}>
                    <img src={like} alt="like" /><span>{data.props.likes + '%'}</span>
                </div>
                <div className="rate-dislike" style={{ width: data.props.dislikes + '%' }}>
                    <img src={like} alt="dislike" /><span>{data.props.dislikes + '%'}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;