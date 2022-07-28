import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ApiKey = 'AIzaSyCVwI0g25eE5nfJgwRrcu1W_IFpmgmG4-s'

const containerStyle = {
    width: '100%',
    height: '100%'
};

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
            <LoadScript
                googleMapsApiKey={ApiKey}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    { this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                        />
                    )) }
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map