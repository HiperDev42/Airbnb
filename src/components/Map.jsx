import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Card from './Card';

const ApiKey = 'AIzaSyCVwI0g25eE5nfJgwRrcu1W_IFpmgmG4-s';

// const center = { lat: -23.567562, lng: -46.655990 };
const center = { lat: -23.676132089691247, lng: -46.39583514208142 };

const locale = 'pt-br';
const currency = 'BRL';
const curFormatter = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency,
  maximumFractionDigits: 0,
});

const locType = {

};

const Wrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
`;

const MarkerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    box-sizing: border-box;
    height: 28px;
    padding: 0 8px;
    
    border-radius: 28px;

    display: flex;
    
    background-color: #fff;
    color: #000;

    align-items: center;
    justify-content: center;

    user-select: none;
    
    transform: translate(-50%, -50%);
    transition: 250ms;
    &:hover {
        transform: translate(-50%, -50%) scale(1.3);
        transform-origin: center center;
        cursor: pointer;
        z-index: 2;
    }
`;

const selectedTheme = {
  transform: 'translate(-50%, -50%) scale(1.3)',
  transformOrigin: 'center center',
  zIndex: 1,

  backgroundColor: '#222222',
  color: '#fff',
};

const TextWrapper = styled.span`
    position: relative;
    white-space: nowrap;
    font-weight: 800 !important;
    font-size: 14px !important;
    line-height: 18px !important;
`;

const InfoWindowWrapper = styled.div`
    box-sizing: border-box;
    width: 324px;

    position: absolute;
    bottom: 30px; left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
`;

function MarkerInfoWindow({ loc }) {
  return (
    <InfoWindowWrapper>
      <Card
        id="marker"
        loc={loc}
        isMarker
      />
    </InfoWindowWrapper>
  );
}

MarkerInfoWindow.propTypes = {
  loc: PropTypes.shape(locType).isRequired,
};

function Marker({
  loc, selected, hover, onClick,
}) {
  return (
    <div>
      <MarkerWrapper
        style={(selected || hover) ? selectedTheme : null}
        onClick={() => onClick()}
      >
        <TextWrapper>{curFormatter.format(loc.price)}</TextWrapper>
      </MarkerWrapper>
      {selected && <MarkerInfoWindow loc={loc} />}
    </div>
  );
}
Marker.propTypes = {
  loc: PropTypes.shape(locType).isRequired,
  selected: PropTypes.number,
  hover: PropTypes.number,
  onClick: PropTypes.func,
};
Marker.defaultProps = {
  selected: null,
  hover: null,
  onClick: () => {},
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      hover: null,
    };

    props.setHover.current = this.setHover;
  }

  setHover = (i) => {
    const newState = {
      ...this.state,
      hover: i,
    };
    this.setState(newState);
  };

  handleClick = (i) => {
    const newState = {
      ...this.state,
      selected: i,
    };
    this.setState(newState);
  };

  handleBoundsChange = (center, zoom, bounds, marginBounds) => {
    const newState = {
      ...this.props.filters.get,
      bounds,
    };
    this.props.filters.set(newState);
  };

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ApiKey }}
          center={center}
          defaultZoom={10}
          onClick={() => { this.handleClick(null); }}
          options={{ gestureHandling: 'greedy' }}
          onBoundsChange={this.handleBoundsChange}
        >
          { this.props.data.map((loc, index) => (
            <Marker
              key={index}
              hover={this.state.hover == index}
              selected={this.state.selected == index}
              onClick={() => this.handleClick(index)}
              lat={loc.lat}
              lng={loc.lng}
              loc={loc}
            />
          )) }
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default Map;
