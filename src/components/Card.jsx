import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// CSS
import './Card.css';

function Carousel({ loc, isMarker }) {
  return (
    <div id={`carousel${loc.id}`} className={`carousel slide${isMarker ? ' image-wide' : ' image-square'}`} style={{ width: '100% !important', height: '100% !important' }} data-ride="carousel" data-interval="false" data-wrap="false">
      <ol className="carousel-indicators">
        {loc.image.map((img, index) => (
          <li key={img} data-target={`#carousel${loc.id}`} data-slide-to={index} className={index === 0 ? 'active' : ''} />
        ))}
      </ol>
      <div className="carousel-inner">
        {loc.image.map((img, index) => (
          <div key={img} className={`carousel-item${index === 0 ? ' active' : ''}`}>
            <CardImage src={img} alt="ERROR" />
          </div>
        ))}
      </div>
      <button type="button" className="carousel-control-prev" href={`#carousel${loc.id}`} data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className="carousel-control-next" href={`#carousel${loc.id}`} data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

Carousel.propTypes = {
  loc: PropTypes.object.isRequired,
  isMarker: PropTypes.bool,
};

Carousel.defaultProps = {
  isMarker: false,
};

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
    ${(props) => (props.isMarker
    ? `padding: 8px 10px 8px 10px;
        background-color: #fff;
        color: #000;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;`
    : '')}
    
        padding-top: 12px;

    font-size: 15px;
`;

const Wrapper = styled.a`
    cursor: pointer;
    width: 100%;
    &, &:hover, &:focus, &:active{
        color: inherit;
        text-decoration: none;
    }
`;

function Card({
  loc, onMouseEnter, onMouseLeave, isMarker,
}) {
  return (
    <Wrapper
      href={`/details/${loc.id}`}
      className="loc--card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Carousel loc={loc} isMarker={isMarker} />
      <InfoWrapper isMarker={isMarker}>
        <span css="grid-area: t; font-weight: 600;">
          {loc.title}
        </span>
        <div css="grid-area: r;"><span className="fa fa-star">5,0 (5)</span></div>
        <div css="grid-area: d;" className="one-line text-muted">{loc.description}</div>
        <div css="grid-area: p; font-weight: 600;">
          R$
          {' '}
          {loc.price}
        </div>
      </InfoWrapper>
    </Wrapper>
  );
}

Card.propTypes = {
  loc: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isMarker: PropTypes.bool,
};

Card.defaultProps = {
  isMarker: false,
};

export default Card;
