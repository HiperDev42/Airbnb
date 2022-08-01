import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';


const ApiKey = 'AIzaSyCVwI0g25eE5nfJgwRrcu1W_IFpmgmG4-s'

const Wrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;
`

const Marker = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none;
    transform: translate(-50%, -50%);
`;

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
                            lat={marker.position.lat}
                            lng={marker.position.lng}
                        />
                    )) }
                </GoogleMapReact>
            </Wrapper>
        )
    }
}

export default Map