import React from 'react';
import styled from 'styled-components';

// CSS
import './Card.css'

const ImageWrapper = styled.div`
    position: relative;

    ${props => props.isMarker?
    `height: 210px;` :
    `height: 0;
     padding-bottom: 100%;` }
    width: 100%;

    background-color: red;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: ${props => !props.isMarker ? "20" : "0"}px;
    border-bottom-right-radius: ${props => !props.isMarker ? "20" : "0"}px;
    
    overflow: hidden;
`;

const CardImage = styled.img`
    position: absolute;

    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-areas: "t r" "d ." "p p";
    ${props => props.isMarker?
        `padding: 8px 10px 8px 10px;
        background-color: #fff;
        color: #000;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;` :
        ""}
    
        padding-top: 12px;

    font-size: 15px;
`;

function Card(props) {
    console.log(props.image)
    return (
        <div className={'loc--card' + (props.markerStyle ? ' loc--card-marker' : '')}>
            <ImageWrapper isMarker={props.isMarker}>
                <CardImage
                    src={props.loc.image}
                />
            </ImageWrapper>
            <InfoWrapper isMarker={props.isMarker}>
                <span className="title one-line">{props.loc.title}</span>
                <div className='rating'><span className='fa fa-star'>5,0 (5)</span></div>
                <div className='description one-line text-muted'>{props.loc.description}</div>
                <div className='pricing'>R$ {props.loc.price}</div>
            </InfoWrapper>
        </div>
    )
}

export default Card;