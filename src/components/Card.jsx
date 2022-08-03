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

    background-color: #00000022;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: ${props => !props.isMarker ? "20" : "0"}px;
    border-bottom-right-radius: ${props => !props.isMarker ? "20" : "0"}px;
    
    overflow: hidden;

    & * {
        position: absolute;
    }
`;

const Squared = styled.div`
        width: 300px;
        height: 300px;
`;

const Carousel = (props) => (
    <div id={"carousel"+props.id} className={"carousel slide"+(props.isMarker?" image-wide":" image-square")} style={{width: '100% !important', height: '100% !important'}} data-ride="carousel" data-interval="false">
    <ol class="carousel-indicators">
        <li data-target={"#carousel"+props.id} data-slide-to="0" class="active"></li>
        <li data-target={"#carousel"+props.id} data-slide-to="1"></li>
        <li data-target={"#carousel"+props.id} data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        {props.src.map((img, index) => (
            <div className={"carousel-item"+(index===0? " active":"")}>
                <CardImage src={img} alt="ERROR" />
            </div>
        ))}
    </div>
    <a class="carousel-control-prev" href={"#carousel"+props.id} role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href={"#carousel"+props.id} role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
);

const CardImage = styled.img`
    position: absolute;
    display: block;

    width: 100%;
    height: 100% !important;
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
    return (
        <div className={'loc--card' + (props.markerStyle ? ' loc--card-marker' : '')}>
            <Carousel id={props.id} isMarker={props.isMarker} src={props.loc.image}/>
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