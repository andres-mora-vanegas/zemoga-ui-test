import React from 'react';
import Card from './Card'

function Container() {
    return (
        <div className="app-container container">
            <div className="notice">
                <div className="col first">
                    <p className="title">
                        Speak Out Be Heard
                        <br />
                        <label className="bold">
                            Be counted
                        </label>
                    </p>                    
                </div>
                <div className="detail">
                    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.                
                </div>
                <div className="col close"><span>X</span></div>
            </div>
            <h2>Votes</h2>
            <Card />
        </div>
    )
}

export default Container;