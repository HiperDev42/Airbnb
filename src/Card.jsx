import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.loc.image} />
            <div className='grid'>
                <div className="title">{props.loc.title}</div>
                <div className='rating'><span className='fa fa-star'>5,0 (5)</span></div>
                <div className='description'>{props.loc.description}</div>
                <div className='pricing'>R$ {props.loc.price}</div>
            </div>
        </div>
    )
}

export default Card;