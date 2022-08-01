import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';


const ApiKey = 'AIzaSyCVwI0g25eE5nfJgwRrcu1W_IFpmgmG4-s'

//const center = { lat: -23.567562, lng: -46.655990 };
const center = { lat: -23.676132089691247, lng: -46.39583514208142 };


const locale = 'pt-br';
const currency = 'BRL';
const curFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
});

const Wrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
`

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
}

const TextWrapper = styled.span`
    position: relative;
    white-space: nowrap;
    font-weight: 800 !important;
    font-size: 14px !important;
    line-height: 18px !important;
`;

const InfoWindowWrapper = styled.div`
    box-sizing; border-box;

    position: absolute;
    bottom: 30px; left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;

    color: #000;
`;

class MarkerInfoWindow extends React.Component {
    render() {
        const cardStyle = {
            width: '18rem',
            border: 'none !important',
        }
        return (
            <InfoWindowWrapper>
                <div className="card" style={cardStyle}>
                    <img src={this.props.marker.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.marker.title}</h5>
                        <p className="card-text">{this.props.marker.description}</p>
                    </div>
                </div>
            </InfoWindowWrapper>
        );
    }
}

class Marker extends React.Component {
    render() {
        return (
            <MarkerWrapper style={this.props.selected ? selectedTheme : null} onClick={() => this.props.onClick()}>
                <TextWrapper>{curFormatter.format(this.props.price)}</TextWrapper>
                {this.props.selected && <MarkerInfoWindow marker={this.props}/>}
            </MarkerWrapper>
        )
    }
}

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null,
        };
    };

    handleClick = (i) => {
        const newState = {
            selected: i,
        }
        this.setState(newState);
    }

    render() {
        return (
            <Wrapper>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: ApiKey }}
                    defaultCenter={center}
                    defaultZoom={15}
                    options = {{ gestureHandling: 'greedy' }}
                >
                    { this.props.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            selected={ this.state.selected == index }
                            onClick={() => this.handleClick(index)}
                            {...marker}
                        />
                    )) }
                </GoogleMapReact>
            </Wrapper>
        )
    }
}

export default Map