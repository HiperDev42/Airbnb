import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const ApiKey = 'AIzaSyCVwI0g25eE5nfJgwRrcu1W_IFpmgmG4-s'

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

class Map extends React.Component {
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
                    { /* Child components, suck as markers, info windows, etc. */ }
                    <></>
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map