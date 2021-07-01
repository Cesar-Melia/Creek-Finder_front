import React from 'react'

import './CreekCard.scss'

const CreekCard = ({ creek }) => {
    return (

        <ul className="cards row">
            <li className="cards col-4">
                <div className="card">
                    <img src={creek.img} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                            <div className="card__header-text">
                                <h3 className="card__title">{creek.name}</h3>
                                <span className="card__status">{creek.province}</span>
                            </div>
                        </div>
                        <p className="card__description">{creek.description}</p>
                    </div>
                </div>
            </li>
        </ul>

    );
}

export default CreekCard




{/* <div className="card">
            <h2>{creek.name}</h2>
            <img src={creek.img} alt={creek.name} className="card__img" />
            <p>{creek.province}</p>
            <p>!Click to see More Info!</p>
        </div> */}