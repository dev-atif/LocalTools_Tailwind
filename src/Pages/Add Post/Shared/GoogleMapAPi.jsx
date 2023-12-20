import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '290px',
  borderRadius:'10px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};
const GoogleMapApi = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCuWgwr3kIMtX6CmWslwhgeyX-DfGDx2bs">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
}

export default GoogleMapApi