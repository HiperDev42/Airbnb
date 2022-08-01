import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';


const ApiKey = 'AIzaSyCVwI0g25eE5nfJgwRrcu1W_IFpmgmG4-s'

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
    }
`;

const TextWrapper = styled.span`
    position: relative;
    white-space: nowrap;
    font-weight: 800 !important;
    font-size: 14px !important;
    line-height: 18px !important;
`;

class Marker extends React.Component {
    render() {
        return (
            <MarkerWrapper>
                <TextWrapper>{curFormatter.format(this.props.price)}</TextWrapper>
            </MarkerWrapper>
        )
    }
}

const center = { lat: -23.567562, lng: -46.655990 };

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: props.markers
        }
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
                    { this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            {...marker}
                        />
                    )) }
                </GoogleMapReact>
            </Wrapper>
        )
    }
}

export default Map