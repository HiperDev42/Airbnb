import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} />
            <div className='grid'>
                <div className="title">{props.title}</div>
                <div className='rating'><span className='fa fa-star'>5,0 (5)</span></div>
                <div className='description'>Lindo apartamento 4 ...</div>
                <div className='pricing'>R$4.110</div>
            </div>
        </div>
    )
}

export default Card;